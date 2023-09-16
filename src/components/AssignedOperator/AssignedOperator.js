import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AvatarLogo from "../../assets/Images/Avatar.png"
import "./style.css"

export default function Avatar() {
  return (

      <Grid container>
        <Grid md={1} sm={1} xs={2}>
          <div className='container'>
<img src={AvatarLogo} className='avatarlogo'/>
          </div>
        </Grid>
        <Grid  md={11} sm={11} xs={10}>
  <div className='operatorName' >
<h3 className='assignedTO'>Assigned to</h3>
<h3 className='Inspector_name'>Inspector John Doe</h3>
  </div>
         
        </Grid>
      </Grid>
   
  );
}
