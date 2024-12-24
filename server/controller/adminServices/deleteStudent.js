const con = require('../../config/dbConfig')
const query = require('../../query/queries')



const DeleteStudent = (req, resp) => {

    const {
        id
    } = req.body;

    // console.log(req.body)




    try {
        con.query(query.deleteStudentByID, [id], async function (err, data) {
            resp.send("SUCCESS")
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }
}


module.exports = {
    DeleteStudent
}