import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Container, TextField } from '@mui/material';
const Register = () => {
    return (
        <div style={{ marginTop: 20 }}>
            <Container >
                <Box>
                    <TextField
                        required
                        id="outlined-required"
                        label="Enter Name"
                        defaultValue="pls enter name.."
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue="Hello World"
                    />
                    <Button variant="contained">Login</Button>
                </Box>
            </Container>
        </div>
    )
}
export default Register
