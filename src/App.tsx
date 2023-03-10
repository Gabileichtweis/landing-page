import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import Image from './images/Image.png';

function App() {
    return (
        <>
            
            <Navbar/>
            <Container>
                <Grid container sx={{height: '90vh'}}>
            
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h2'>Data Science</Typography>

                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <img src={Image} style={{width: '200px'}} />

                    </Grid>
            
                </Grid>
            </Container>

            
        </>
    );
}

export default App;
