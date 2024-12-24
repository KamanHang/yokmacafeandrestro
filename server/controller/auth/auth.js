const con = require('../../config/dbConfig')
const query = require('../../query/queries')
const bcrypt = require('bcryptjs');


const loginUser = async (req, resp) => {
    const { useremail, userpassword } = req.body;

    console.log(useremail)
    console.log(userpassword)


    if (!useremail || !userpassword) {

        console.log("Please fill al the fields")

        resp.status(400).send('Please fill all the fields');

    }
    else {
        con.query(query.getUserPassword, [useremail], async (error, result) => {
            console.log( "error aayo" + result.rows[0].password)

            var dbPassword = result.rows[0].password

            console.log(dbPassword)



            const passwordCheck = await bcrypt.compare(userpassword, dbPassword);
            console.log(passwordCheck)


            if (passwordCheck == true) {
                console.log("login success")
                resp.status(200).send('Login successful');

            }

            else {
                resp.status(400).send('Login Failed');

            }



        })

    }


}

const signUpUser = (req, resp) => {
    const { userfullname, useremail, password, userrole } = req.body;

    console.log(userfullname)
    console.log(useremail)
    console.log(password);
    console.log(userrole);

    const securePassword = async (password) => {
        const encryptPassword = await bcrypt.hash(password, 10);
        return encryptPassword
    }


    try {
        con.query(query.signUpCheckQuery, [useremail], async function (err, data) {

            // console.log(data)

            if (err) {
                console.log(err);
                resp.send("An error occured")
                resp.status(404);
            }

            else if (data.rowCount > 0) { //checking if user with same email exits or not in the database
                console.log("User alredy exists");
                // console.log(`${data.rowCount}`);
                resp.send("User alredy exists");
                resp.status(404);

            }
            else if (!userfullname || !useremail || !password || !userrole) {
                resp.send('Please fill all the fields')
                console.log("Please fill all the fields");

            }
            else {

                // console.log("Don't Know WTF is going on")
                const hashedPassword = await securePassword(password);

                con.query(query.signUpInsertQuery, [userfullname, useremail, hashedPassword, userrole], function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("User Registered Successfully");
                        resp.send("User Registration Successfully")
                        // console.log(data)
                    }
                });

            }
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }
}



module.exports = {
    loginUser,
    signUpUser,
};