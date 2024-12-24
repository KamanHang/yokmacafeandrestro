const con = require('../../config/dbConfig')
const query = require('../../query/queries')


const ViewStudent = (req, resp) => {

    try {
        con.query(query.getAllStudentDataQuery, async function (err, data) {

            // resp.send(data.rows)


            if (data.rowCount > 0) { //checking if user with same email exits or not in the database
               resp.send(data.rows)
            }
            else{
                resp.send("No any Student Records")
            }

        
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }

}


module.exports = {
ViewStudent
}