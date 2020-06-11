import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: "#31b17d"
      },
      secondary: { main: "#31b17d" },
      grey: { main: "#22BF19" }
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          position: "relative",
          "& $notchedOutline": {
            borderColor: "#31b17d"
          },
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "#31b17d",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              borderColor: "#31b17d"
            }
          },
          "&$focused $notchedOutline": {
            borderColor: "#31b17d",
            borderWidth: 1
          }
        }
      },
      MuiFormLabel: {
        root: {
          // "&$focused": {
          color: "#31b17d"
          // }
        }
      }
    }
  });

  const styles = {
    input: {
      color: "#31b17d",
    },
    multiline:{
        multiline: true,
        rows: 2,
        color: "#31b17d",
    }
  };

class AppForm extends React.Component {
    state={
        name: "",
        email: "",
        message: ""
    }
    NameChange=(event)=>{
        this.setState({name: event.target.value})
    }
    EmailChange=(event)=>{
        this.setState({email: event.target.value})
    }
    MessageChange=(event)=>{
        this.setState({message: event.target.value})
    }
    resetForm=()=>{
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }
    HandleSubmit=(e)=>{
        e.preventDefault();
        axios({
            method: "POST", 
            url:"https://us-central1-zaliskyipmbe.cloudfunctions.net/app/send", 
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
            }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
            }
        })
    }

    render(){
        const { classes } = this.props;
        return(
        <ThemeProvider theme={Theme}>
            <form className="Contact-form" onSubmit={this.HandleSubmit} method="POST">
                <TextField 
                    label="Name here" 
                    variant="filled"
                    value={this.state.name} 
                    onChange={this.NameChange}
                    InputProps={{
                        className: classes.input
                    }}
                />
                <p/>
                <TextField 
                    className="Contact-text" 
                    label="Email here" 
                    variant="filled"
                    value={this.state.email} 
                    onChange={this.EmailChange}
                    InputProps={{
                        className: classes.input
                    }}
                />
                <p/>
                <TextField 
                    className="Contact-text" 
                    label="Message here" 
                    variant="filled"
                    value={this.state.message} 
                    onChange={this.MessageChange}
                    InputProps={{
                        className: classes.multiline,                    
                        multiline: true,
                        rows: 3,
                        rowsMax: 3
                    }}
                />
                <Button type="submit"
                    style={{ width: "150px", margin: "20px" }}
                    color="primary"
                    variant="contained"
                >
                    Send message
                </Button>
                </form>
            </ThemeProvider>
            )
        }
}    

export default withStyles(styles)(AppForm);