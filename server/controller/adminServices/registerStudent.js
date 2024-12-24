const con = require('../../config/dbConfig')
const query = require('../../query/queries')



const RegisterStudent = (req, resp) => {

    const {
        firstName,
        lastName,
        emailAdd,
        address,
        phoneNumber,
        shiftSchedule,
        description,
        // imageData,
    } = req.body;

    console.log(req.body)
   



    try {
        con.query(query.studentCheck, [phoneNumber], async function (err, data) {

            // console.log(data)

            if (err) {
                console.log(err);
                resp.send("An error occured")
                resp.status(404);
            }

            else if (data.rowCount > 0) { //checking if user with same email exits or not in the database
                console.log("Student alredy exists");
                // console.log(`${data.rowCount}`);
                resp.send("Student alredy exists");
                resp.status(404);
            }
            // else if (!userfullname || !useremail || !password || !userrole) {
            //     resp.send('Please fill all the fields')
            //     console.log("Please fill all the fields");
            // }
            else {
                // const hashedPassword = await securePassword(password);

                con.query(query.studentInsertQuery, [firstName, lastName, emailAdd, address, phoneNumber, shiftSchedule, description], function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Student Registered Successfully");
                        resp.send("Student Registration Successfully")
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
    RegisterStudent
}