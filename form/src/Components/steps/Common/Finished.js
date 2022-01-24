import { Paper, Grid,Box } from '@material-ui/core'
import React from 'react';
import {   renderText} from "../Common/displayComponents"

export default function Finished({
    state,
    }) {
    return (
    <Paper component={Box} p={2}>
        <Box mt={1} mb={2}>
            {renderText({label:"Your Final Details",variant:"h6"})}
        </Box>
        
                    {/*for button*/}
                    <Grid container spacing={2} justify="flex-end">
                        <Box p={2}>
                        {JSON.stringify(state,null,4)}
                        </Box>
                        
                    </Grid> 
                    
    </Paper>
    )
}

