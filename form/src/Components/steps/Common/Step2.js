import { Paper, Grid,Box } from '@material-ui/core'
import React from 'react';
import { renderInputText, renderSelect, renderText,renderButton} from "../Common/displayComponents"

export default function Step2({state,handleOnChange,handleNext,handlePrev}) {
    return (
    <Paper component={Box} p={2}>
        <Box mt={1} mb={2}>
            {renderText({label:"Bank details",variant:"h6"})}
        </Box>
       <Grid container spacing={2} style={{marginBottom:"10px"}}>
                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"country",
                         name:"country",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"currency",
                         name:"currency",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"IFSC Code",
                         name:"ifsc",
                         state,
                         handleOnChange,
                      })}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"Account no",
                         name:"accountno",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        
                    </Grid>
                    {/*for button*/}
                    <Grid container spacing={2} justify="flex-end">
                        <Box p={2}>
                        {renderButton({label:"Back",
                        handleOnClick: handlePrev,
                        color:"default" })}
                        </Box>
                        <Box p={2}>
                        {renderButton({label:"next",handleOnClick: handleNext })}
                        </Box>
                    </Grid> 
                    
    </Paper>
    )
}

