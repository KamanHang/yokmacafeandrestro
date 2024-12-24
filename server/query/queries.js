// Auth Queries
const loginQuery = "SELECT * FROM users WHERE email = $1 AND password = $2";
const signUpCheckQuery = 'SELECT * FROM student WHERE phoneNumber = $1';
const signUpInsertQuery = "INSERT INTO student (firstName, lastName, emailAdd, address, phoneNumber, shiftSchedule, description) VALUES($1,$2,$3,$4,$5,$6,$7)"
const getUserPassword = "SELECT userpassword FROM users WHERE useremail = $1";


//Admin Querires
const studentCheck = 'SELECT * FROM student WHERE phoneNumber = $1';
const studentInsertQuery = "INSERT INTO student (firstName, lastName, emailAdd, address, phoneNumber, shiftSchedule, description) VALUES($1,$2,$3,$4,$5,$6,$7)"
const getAllStudentDataQuery = "SELECT * FROM student";
const deleteStudentByID = "DELETE FROM student WHERE id = $1";

module.exports = {
    loginQuery,
    signUpCheckQuery,
    signUpInsertQuery,
    getUserPassword,
    studentCheck,
    studentInsertQuery,
    getAllStudentDataQuery,
    deleteStudentByID
}