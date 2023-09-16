import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import PersonLogo from "../../assets/Images/Vector.png"
import "./style.css"

export default function Person() {
  return (

<Grid style={{paddingTop:30}}>
<span>
<img src={PersonLogo} className='textLogo'/>
       <span className='caseDescription'>Personal Details</span>  
</span>
      <Grid container>
        <Grid md={6} sm={6} xs={6}> 
          <div className='addressInfo'>
<h3 className='personLabel'>First name</h3>
<h3 className='personText'>John</h3>
<h3 className='personLabel'>Phone</h3>
<h3 className='personText'>+966 55 2332 111</h3>
</div>
        </Grid>
        <Grid  md={6} sm={6} xs={6}>
   <div className='addressInfo'>
   <h3 className='personLabel'>Last name</h3>
<h3 className='personText'>John</h3>
<h3 className='personLabel'>Email</h3>
<h3 className='personText'>john.doe@gmail.com</h3>
</div>
         
        </Grid>
      </Grid>
   </Grid>
  );
}
