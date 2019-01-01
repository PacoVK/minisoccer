import React, {Component} from 'react';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {API_CONNECTION_URL} from '../const';

class Setup extends Component {

    constructor(props){
        super(props);
        this.onChangeTeamName = this.onChangeTeamName.bind(this);
        this.onChangeDrink = this.onChangeDrink.bind(this);
        this.onSaveTeam = this.onSaveTeam.bind(this);
        this.onSaveDrink = this.onSaveDrink.bind(this);
    }

    state = {
      teamName: '',
      drink: ''
    };

    onSaveTeam(event){
        if(this.state.teamName.length > 0){
            axios.post(API_CONNECTION_URL+'/team', {
                name: this.state.teamName
            } ).then(()=>{
                this.setState({teamName: ''});
            });
        }
    }

    onSaveDrink(event){
        if(this.state.drink.length > 0){
            axios.post(API_CONNECTION_URL+'/drink', {
                name: this.state.drink
            } ).then(()=>{
                this.setState({drink: ''});
            });
        }
    }

    onResetConsum(event){
            axios.delete(API_CONNECTION_URL+'/orders').then(()=>{
                console.log('Reset sucess');
            });
    }

    onChangeTeamName(event){
        this.setState({teamName: event.target.value});
    }

    onChangeDrink(event){
        this.setState({drink: event.target.value});
    }

    render() {
        return (
            <div>
                <Header/>
                <div style={{padding: 16}}>
                    <Grid container spacing={32} justify={"center"}>
                        <Grid item xs={12}>
                            <Grid container justify={"center"} spacing={16}>
                                <Grid item xs={12}>
                                    <h2>Teams</h2>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth placeholder={"Teamname"} value={this.state.teamName} onChange={this.onChangeTeamName}/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button variant={"contained"} onClick={this.onSaveTeam}>
                                        Speichern
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify={"center"} spacing={16}>
                                <Grid item xs={12}>
                                    <h2>Getränke</h2>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth placeholder={"Getränk"} value={this.state.drink} onChange={this.onChangeDrink}/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button variant={"contained"} onClick={this.onSaveDrink}>
                                        Speichern
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify={"center"} spacing={16}>
                                <Grid item xs={12}>
                                    <h2>Statistik</h2>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button variant={"contained"} onClick={this.onResetConsum}>
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Setup;
