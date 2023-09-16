import * as React from 'react';
import Grid from '@mui/material/Grid';
import "./style.css"
import Map from "../../assets/Images/MAP.png"
import MapPin from "../../assets/Images/MapPin.png"

export default function Address() {
  return (

      <Grid container>
        <Grid md={12} sm={12} >
          <div className='wrapper'>
            <span>
<img src={MapPin} className='textLogo'/>
       <span className='caseDescription'>Address</span>  
</span>
<div className='addressInfo'>
<h3 className='addressLabel'>Location</h3>
<h3 className='addressText'>Digital City</h3>
<h3 className='addressLabel'>Address details</h3>
<h3 className='addressText'>4084 Al Imam Saud Ibn Abdul Aziz Branch Rd, An Nakheel, Riyadh 12382, Saudi Arabia</h3>
<img src={Map} className='mapImg'/>
</div>
          </div>
        </Grid>
      </Grid>
   
  );
}
