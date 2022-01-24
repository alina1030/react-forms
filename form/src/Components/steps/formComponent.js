import {Grid, withStyles, Box, Paper, Stepper, StepLabel, Step} from '@material-ui/core';
import { Styles } from './Common/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step1 from './Common/Step1';
import Step2 from './Common/Step2';
import Step3 from './Common/Step3';
import Finished from './Common/Finished';
import {  renderText} from "./Common/displayComponents";

 class FormComponent extends Component {
    state ={
        data :{
            Firstname:"",
            Lastname:"",
            Email:"",
            gender:"",
            Phonenumber:"",

            country:"",
            currency:"",
            ifsc:"",
            accountno:"",

            city:"",
            postcode:"",
            address:"",

        },
        errors:{},
        currentStep:0,
    }
  render() {
    const {classes} = this.props;

    const handleOnChange = ({target}) =>{
        const {data, errors} = this.state
        target.value.length <=3 ? (errors[target.name] = `${target.name} have at least 3 letter`)
        : (errors[target.name] ="");

        data[target.name] = target.value;
        this.setState({data,errors})
    };

    const handleNext = () => {
        let {currentStep} = this.state
        currentStep = currentStep + 1;
        this.setState({currentStep});
    };

    
    const handlePrev = () => {
        let {currentStep} = this.state
        currentStep = currentStep - 1;
        this.setState({currentStep});
    };
    
    const StepperStep = [
        {label:"Beneficiary"},
        {label:"Bank Details "},
        {label:"Address"},
    ];

    const getStepsItems = (steps) =>{
        switch (steps) {
            case 0: return (<Step1
            state={this.state} 
            handleOnChange={handleOnChange} 
            handleNext={handleNext}
            />
            );
            case 1: return (<Step2 
            
                        state={this.state} 
                        handleOnChange={handleOnChange} 
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        />);
            case 2: return (<Step3 
            state={this.state} 
            handleOnChange={handleOnChange} 
            handleNext={handleNext}
            handlePrev={handlePrev}/>);

            case 3: return <Finished state={this.state.data} />;

            default:
                return (<Step1 
                
                    state={this.state} 
                    handleOnChange={handleOnChange} 
                    handleNext={handleNext}/>);
                
        }
    }


    return <div>
        <Grid container className={classes.FormComponent}>
            <Grid item xs={12} sm={7}>
                <Paper component={Box} p={2}>
                <Box mb={1} pt={2}>
                {renderText({label:"Form"})}</Box>
                <Stepper activeStep={this.state.currentStep} alternativeLabel>
                    {StepperStep.map((item,i)=>(
                        <Step key={i}>
                            <StepLabel>{item.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                </Paper>
                <br/>
                  
                    <form className={classes.form}>
                      
                        {getStepsItems(this.state.currentStep)}
                        
                    </form>
                    
            </Grid>
        </Grid>
    </div>;
  }
}


FormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(FormComponent);
