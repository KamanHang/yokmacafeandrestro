import React from 'react'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const QR = () => {
    return (
        <>

            <Box>
                <Grid container spacing={1}>
                    <Grid size={10}>
                        <Item>size=8</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>
                </Grid>
            </Box>

            {/* <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={1}>
                    <Grid size={8} bgcolor={'red'}>
                        Kaman Limbu
                    </Grid>
                    <Grid size={1} bgcolor={'skyblue'}>
                        Limbu
                    </Grid>
                    <Grid size={4} bgcolor={'orange'}>
                        2
                    </Grid>
                    <Grid size={8} bgcolor={'yellow'}>
                        3
                    </Grid>
                </Grid>


            </Box> */}

        </>
    )
}

export default QR