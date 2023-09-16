import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '../../components/AssignedOperator/AssignedOperator';
import CaseDescription from '../../components/CaseDescription/CaseDescription';
import PersonalDetails from '../../components/PersonalDetails/personalDetails';
import Address from '../../components/Address/Address';
import "./style.css"

export default function CaseInformation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12}>
          <h1>AHSAN</h1>
        </Grid>
        <Grid item md={4} sm={12} className='RightSide'>
            <div className='innerDiv'>
          <Avatar />
          <CaseDescription />
          <PersonalDetails />
          <Address />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
