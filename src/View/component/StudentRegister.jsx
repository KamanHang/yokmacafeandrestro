import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Avatar, Box, InputAdornment, Alert, Slide } from '@mui/material';
import { FaImage } from "react-icons/fa";
import { AccountCircle, EmailRounded, Work, MyLocationRounded, ChromeReaderMode, PhoneAndroidRounded, FingerprintRounded, WorkHistoryRounded } from '@mui/icons-material';
import avatar from '../../assets/images/avatar.png'
import axios from 'axios';
import projectColor from '../themepack';
import ipConfig from '../constant';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import moment from 'moment';
import Grid from '@mui/material/Grid2';


// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const StudentRegisterPage = () => {
  const [onSuccess, setSucessSnack] = useState(false);
  const [onError, setErrorSnack] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [shiftSchedule, setShiftSchedule] = useState("");



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const [imageData, setImageData] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);

  // const timeData = moment().format('MMMM Do YYYY, h:mm:ss a')



  console.log(firstName)
  console.log(lastName)
  console.log(emailAdd)
  console.log(address)
  console.log(phoneNumber)
  console.log(description)
  console.log(shiftSchedule)
  console.log(imageData)



  const handleShift = (event) => {
    setShiftSchedule(event.target.value);
    console.log(event.target.value)
  };

  // console.log(formData)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setSucessSnack(false);
      setErrorSnack(false);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)

    setImageData(file);


    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDisplayImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName)
    console.log(lastName)
    console.log(emailAdd)
    console.log(address)
    console.log(phoneNumber)
    console.log(shiftSchedule)
    console.log(description)
    // console.log(imageData)

    const apiEndpoint = `http://localhost:4000/registerstudent`;

    const data = {
      firstName,
      lastName,
      emailAdd,
      address,
      phoneNumber,
      shiftSchedule,
      description,
      // imageData,
    };

    console.log(data)


    try {
      const response = await axios.post(apiEndpoint, data, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response)




      if (response.data === "Student Registration Successfully") {
        console.log(response.status)
        console.log(response.data)
        setSucessSnack(true);
        console.log(onSuccess);

        console.log('Registration successful');
      } else {

        setErrorSnack(true);
        setResponseData(response.data);


        console.log(response.data)

        console.error('Registration failed:', response.status, response.statusText);
      }
    } catch (error) {

      setErrorSnack(true);
      setResponseData("Something went wrong");
      console.error('Error during registration:', error.message);
    }
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Yokma Barista Student Admission Form
      </Typography>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>

        <Box justifyContent="center" display={'flex'}>
          <Avatar
            alt="Doctor-image"
            src={displayImage || avatar}
            sx={{ width: 120, height: 120 }}
          />
        </Box>
        <Box sx={{ height: 5 }} />


        <Box sx={{ height: 30 }} />
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              variant="outlined"
              onChange={(e) => { setFirstName(e.target.value) }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle style={{ color: projectColor.primaryColor }} />
                  </InputAdornment>
                ),
              }}

            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              variant="outlined"
              onChange={(e) => { setLastName(e.target.value) }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle style={{ color: projectColor.primaryColor }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              onChange={(e) => { setEmail(e.target.value) }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRounded style={{ color: projectColor.primaryColor }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="location"
              type="text"
              variant="outlined"
              onChange={(e) => { setAddress(e.target.value) }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MyLocationRounded style={{ color: projectColor.primaryColor }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              he
              label="Phone Number"
              name="phone_number"
              type="text"
              variant="outlined"
              onChange={(e) => { setPhoneNumber(e.target.value) }}
              // style={{height:1}}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidRounded style={{ color: projectColor.primaryColor }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>

            <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Shift Schedule</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={shiftSchedule}
                  label="Shift Schedule"
                  onChange={handleShift}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkHistoryRounded style={{ color: projectColor.primaryColor }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value={"6:00 AM - 8:00 AM"}>6:00 AM - 8:00 AM</MenuItem>
                  <MenuItem value={"8:00 AM - 10:00 AM"}>8:00 AM - 10:00 AM</MenuItem>
                  <MenuItem value={"10:00 AM - 12:00 PM"}>10:00 AM - 12:00 PM</MenuItem>
                  <MenuItem value={"1:00 PM - 3:00 PM"}>1:00 PM - 3:00 PM</MenuItem>
                  <MenuItem value={"3:00 PM - 5:00 PM"}>3:00 PM - 5:00 PM</MenuItem>
                  <MenuItem value={"5:00 PM - 7:00 PM"}>5:00 PM - 7:00 PM</MenuItem>
                </Select>
              </FormControl>



            </Box>


          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth

              label="Description"
              name="description"
              type="text"
              variant="outlined"
              onChange={(e) => { setDescription(e.target.value) }}
              // style={{height:1}}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ChromeReaderMode style={{ color: projectColor.primaryColor }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>









          <Grid justifyContent='center' sx={{ display: 'flex' }} item xs={12}>
            <input
              type="file"
              id="myfile"
              name='image'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            // value={formData.image}

            />

            <label htmlFor="myfile">
              <Button style={{ backgroundColor: projectColor.primaryColor }} component="span" variant="contained" startIcon={<FaImage />}>
                Choose Image
              </Button>
            </label>
          </Grid>

          {/* Register Button  */}
          <Box sx={{display: 'flex', justifyContent:'center', width:'40rem'}}>
            <Button variant='contained' style={{ backgroundColor: projectColor.primaryColor }} onClick={handleSubmit} startIcon={<FingerprintRounded />}
              color='primary'
            > Register  </Button>
          </Box>

          {/* Register Button  */}

          <Snackbar open={onSuccess} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
            TransitionComponent={Slide}  // Use the Slide transition
            transitionDuration={100}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Admission Success
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
        </Grid>
      </form>
    </Container>
  );
};

export default StudentRegisterPage;
