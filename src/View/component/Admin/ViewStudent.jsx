import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import { Alert, Slide } from '@mui/material';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const ViewStudent = () => {
  const [studentData, setStudentData] = useState([]);
  const [newStudentData, setNewStudentData] = useState([]);
  const [onSuccess, setSucessSnack] = useState(false);
  const [onError, setErrorSnack] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [decision, setDecision] = useState(false);


  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  const apiEndpoint = `http://localhost:4000/deletestudentbyid`;


  const handleEdit = () => {
    console.log("Edit functionality triggered!");
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setSucessSnack(false);
      setErrorSnack(false);
    }
  }

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleYes = () => {
    setDecision(true)
    setOpen(false);

  }

  const handleDelete = async (studentId) => {

    setOpen(true);

    if (decision == true) {
      // Filter out the student with the matching ID
      const updatedData = newStudentData.filter((student) => student.id !== studentId);
      console.log("Deleted student with ID:", studentId);
      console.log("Updated student data after deletion:", updatedData);
      const response = await axios.post(apiEndpoint, {
        id: studentId
      });
      if (response.data == "SUCCESS") {
      setNewStudentData(updatedData); // Update the filtered data

    setOpen(false);

        setSucessSnack(true)
        setResponseData(response.data)

      } else {
        setErrorSnack(true)
      }

      console.log(response)
    }
    else {
      setErrorSnack(true)

    }

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/viewstudent');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setStudentData(data);
        setNewStudentData(data); // Initialize newStudentData with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Do you want to Delete Student Record?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deleting Student record will be permanent and cannot be retrived once it has been deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog}>
            No
          </Button>
          <Button onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <h1>View Students</h1>
      <table
        border="1"
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th>S.N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Shift Schedule</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newStudentData.length > 0 ? (
            newStudentData.map((student, index) => (
              <tr key={student.id || index}>
                <td>{index + 1}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.emailadd}</td>
                <td>{student.address}</td>
                <td>{student.phonenumber}</td>
                <td>{student.shiftschedule}</td>
                <td>{student.description}</td>
                <td>
                  <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                  </Box>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Snackbar open={onSuccess} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
        TransitionComponent={Slide}  // Use the Slide transition
        transitionDuration={100}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Record Deleted
        </Alert>
      </Snackbar>
      <Snackbar open={onError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
        TransitionComponent={Slide}  // Use the Slide transition
        transitionDuration={100}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {responseData}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ViewStudent;
