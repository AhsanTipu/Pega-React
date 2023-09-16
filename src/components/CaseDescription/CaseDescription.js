import * as React from 'react';
import Grid from '@mui/material/Grid';
import AvatarLogo from "../../assets/Images/Avatar.png"
import FileLogo from "../../assets/Images/paper.png"
import "./style.css"

export default function CaseDescription() {
  return (

      <Grid container>
        <Grid md={12} sm={12} >
          <div className='wrapper'>
            <span>
<img src={FileLogo} className='textLogo'/>
       <span className='caseDescription'>Case Description</span>  
</span>
<p className="casePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Grid>
      </Grid>
   
  );
}
