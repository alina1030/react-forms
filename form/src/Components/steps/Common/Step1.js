import { Paper, Grid,Box } from '@material-ui/core'
import React from 'react';
import { renderInputText, renderSelect, renderText,renderButton} from "../Common/displayComponents";

export default function Step1({state,handleOnChange,handleNext}) {
    return (
    <Paper component={Box} p={2}>
        <Box mt={1} mb={2}>
            {renderText({label:"Please fill personal data",variant:"h6"})}
        </Box>
       <Grid container spacing={2} style={{marginBottom:"10px"}}>
                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"First name",
                         name:"Firstname",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"Last name",
                         name:"Lastname",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"Email",
                         name:"Email",
                         state,
                         handleOnChange,
                      })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"Phone Number",
                         name:"Phonenumber",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid container spacing={2}>
                        <Grid item xs={12} >
                        {renderSelect({
                         label:"Gender",
                         name:"gender",
                         state:this.state,
                         options:[
                             {key:"male",value:"male"},
                             {key:"female",value:"female"},
                             {key:"other",value:"other"},
                         ],
                         handleOnChange,
                      })}
                        </Grid>
                        </Grid>
                    </Grid>
                    {/*for button*/}
                    <Grid container spacing={2} justify="flex-end">
                        <Box p={2}>
                        {renderButton({label:"next",handleOnClick: handleNext })}
                        </Box>
                    </Grid> 
                    
    </Paper>
    )
}

