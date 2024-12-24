import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


const BOT = () => {
  return (
    <>

      <Box sx={{ height: '100vh', backgroundColor: 'red' }}>
        <Grid container spacing={1}>
          <Grid sx={{backgroundColor: 'green', height:'30vh'}} size={6}>
            g1
          </Grid>
          <Grid sx={{backgroundColor: 'green'}} size={6}>
            g2

          </Grid>
          <Grid sx={{backgroundColor: 'green', height:'30vh'}} size={6}>
            g3

          </Grid>
          <Grid sx={{backgroundColor: 'green'}} size={6}>
            g4
          </Grid>
        </Grid>

      </Box>

    </>
  )
}

export default BOT