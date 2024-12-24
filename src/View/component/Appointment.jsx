import { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Avatar } from '@mui/material';
// import projectColor from '../themepack';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import projectColor from '../themepack';
import { DeleteForeverIcon } from '@mui/icons-material/DeleteForever';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import erroImage from '../../assets/images/docto404.png';
import ipConfig from '../constant';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: projectColor.primaryColor,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables() {
    const [appointments, setAppointment] = useState([]);
    console.log(appointments);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://${ipConfig()}:3000/getAppointment`);
                const data = await response.json();
                console.log(data);
               
                setAppointment(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };

        fetchData();
    }, []);

    // const handleEdit = (doctorId) => {
    //     // Add your edit logic here
    //     console.log(`Editing doctor with ID: ${doctorId}`);
    // };

    // const handleDelete = (doctorId) => {
    //     // Filter out the doctor with the specified ID from the state
    //     const updatedDoctors = doctors.filter((doctor) => doctor.doctor_id !== doctorId);
    //     setDoctors(updatedDoctors);

    //     console.log(`Deleting doctor with ID: ${doctorId}`);
    //     // Now, updatedDoctors contains the new state without the deleted doctor
    // };

    return (
        <>
            {/* <Box justifyContent="center" marginBottom={2} sx={{ display: 'flex' }} >
                <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }} variant="h6" color="black" noWrap component="div">
                    Doctor Table
                </Typography>
            </Box> */
            }
            {appointments.length === 0 ? (
                <Box justifyContent='center' sx={{ display: 'flex' }}>
                    <img style={{ width: '40%' }} className="profile" alt="profilepicture" src={erroImage} />


                </Box>,
                <Box justifyContent='center' sx={{ display: 'flex' }}>

                    <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }} variant="h6" color="black" noWrap component="div">
                        No Appointment Found
                    </Typography>


                </Box>

            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">

                   
                        <TableHead>
                            <TableRow component="th" scope="row">
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Appointment Type</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Appointment Date</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Appointment Time</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Appointment Day</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Patient Name</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Doctor Name</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "1rem" }}>Patient Email</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "1rem" }}>Action</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((appointment) => (
                                <StyledTableRow key={appointment.appointment_id}>
              
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.appointment_type}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.appointment_date}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.appointment_time}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.week_day}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.patient_name}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.doctor_name}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{appointment.patient_email}</StyledTableCell>


                                    
                                    <StyledTableCell style={{ fontSize: "1rem" }}>
                                        <IconButton style={{ color: projectColor.primaryColor }} onClick={() => handleEdit(doctor.doctor_id)} >
                                            <MdOutlineModeEdit />
                                        </IconButton>
                                        <IconButton style={{ color: "red" }} onClick={() => handleDelete(doctor.doctor_id)} >
                                            <MdDeleteForever />
                                        </IconButton>
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

        </>
    );
}