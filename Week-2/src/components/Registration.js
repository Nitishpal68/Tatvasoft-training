import React from "react";
import { Button, FormGroup } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
// import FormLabel from "@mui/material";

function Registration() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: 500,
          height: 300,

          justifyContent: "center",

          "&:hover": {},
        }}
      >
        <Typography
          align="center"
          gutterBottom="true"
          variant="h5"
          component="h2"
        >
          Registration Page
        </Typography>
        <Typography
          align="center"
          gutterBottom="true"
          variant="inherit"
          component="h2"
        >
          Login or create an Account
        </Typography>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormGroup>
              <FormControl>
                {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                /> */}
                <InputLabel htmlFor="my-input">First Name*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="my-input">Email Address*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="my-input">LOGIN INFORMATION</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <br></br>
              <Button color="warning" variant="contained" size="small">
                {" "}
                Register{" "}
              </Button>
            </FormGroup>
          </Grid>

          <Grid item xs={6}>
            <FormGroup>
              <FormControl>
                {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                /> */}
                <InputLabel htmlFor="my-input">Last Name*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="select">Role*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="my-input">Confirm Password*</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
              <br></br>
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Registration;
