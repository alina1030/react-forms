import { Paper, Grid,Box } from '@material-ui/core'
import React from 'react';
import { renderInputText, renderSelect, renderText,renderButton} from "../Common/displayComponents"

export default function Step3({state,handleOnChange,handleNext,handlePrev}) {
    return (
    <Paper component={Box} p={2}>
        <Box mt={1} mb={2}>
            {renderText({label:"Address",variant:"h6"})}
        </Box>
        {/* city:"",
            postcode:"",
            address:"", */}
       <Grid container spacing={2} style={{marginBottom:"10px"}}>
                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"city",
                         name:"city",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"postcode",
                         name:"postcode",
                         state,
                         handleOnChange,
                      })}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        {renderInputText({
                         label:"Address",
                         name:"address",
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
                        {renderButton({label:"Finish",handleOnClick: handleNext })}
                        </Box>
                    </Grid> 
                    
    </Paper>
    )
}

