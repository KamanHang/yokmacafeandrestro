import { useState, useEffect } from 'react';

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
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://${ipConfig()}:3000/doctordatafetch`);
                const data = await response.json();
                const doctorsWithFixedPaths = data.map((doctor) => ({
                    ...doctor,
                    image: doctor.image.replace(/\\/g, '/'),
                }));
                setDoctors(doctorsWithFixedPaths);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (doctorId) => {
        // Add your edit logic here
        console.log(`Editing doctor with ID: ${doctorId}`);
    };

    const handleDelete = (doctorId) => {
        // Filter out the doctor with the specified ID from the state
        const updatedDoctors = doctors.filter((doctor) => doctor.doctor_id !== doctorId);
        setDoctors(updatedDoctors);

        console.log(`Deleting doctor with ID: ${doctorId}`);
        // Now, updatedDoctors contains the new state without the deleted doctor
    };

    return (
        <>
            {/* <Box justifyContent="center" marginBottom={2} sx={{ display: 'flex' }} >
                <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }} variant="h6" color="black" noWrap component="div">
                    Doctor Table
                </Typography>
            </Box> */}
            {doctors.length === 0 ? (
                <Box justifyContent='center' sx={{ display: 'flex' }}>
                    <img style={{ width: '40%' }} className="profile" alt="profilepicture" src={erroImage} />


                </Box>,
                <Box justifyContent='center' sx={{ display: 'flex' }}>

                    <Typography style={{ fontWeight: "bold", fontSize: "1.2rem" }} variant="h6" color="black" noWrap component="div">
                        No Order Details Found
                    </Typography>


                </Box>

            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">

                   
                        <TableHead>
                            <TableRow component="th" scope="row">
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Image</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Full Name</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Email Address</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Designation</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Location</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "1rem" }}>Working Time</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Description</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>PhoneNumber</StyledTableCell>
                                <StyledTableCell style={{ fontWeight: "bold", fontSize: "large" }}>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {doctors.map((doctor) => (
                                <StyledTableRow key={doctor.doctor_id}>
                                    <StyledTableCell component="th" scope="row">
                                        <img
                                            src={`http://${ipConfig()}:3000/` + doctor.image}
                                            alt={`Doctor ${doctor.first_name} ${doctor.last_name}`}
                                            style={{ width: '5rem', height: '5rem', borderRadius: '50%' }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{doctor.first_name + ' ' + doctor.last_name}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{doctor.email}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{doctor.designation}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{doctor.location}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem", width: "fit-content" }}>{doctor.working_time}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{doctor.description}</StyledTableCell>
                                    <StyledTableCell style={{ fontSize: "1rem" }}>{doctor.phone_number}</StyledTableCell>
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