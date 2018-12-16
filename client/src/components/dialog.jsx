import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import '../styles/app.css';

class Dialog extends PureComponent {

    constructor(props){
        super(props);
        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.save = this.save.bind(this);
    }

    state = {
        selectedTeam: "",
        teams: [],
        selectedDrink: this.props.selectedDrink,
        drinkAmount: 0,
        error: false,
    };

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    componentDidMount(){
        this.sleep(2000).then((res) => {
            this.setState({teams: [{"name":"test"},{"name":"dkjfhsdsfsdfsdfsdkf2"},{"name":"test3"},{"name":"test4"},{"name":"test5"}]})
        });
    }

    renderTeams(){
        let teamsButtons = [];
        this.state.teams.forEach((team) => {
            teamsButtons.push(
                <ToggleButton classes={{selected: "test"}} selected={this.state.selectedTeam === team.name} key={team.name} value={team.name}>
                    {team.name}
                </ToggleButton>
            );
        });
        return teamsButtons;
    }

    onSelectionChange(event,value){
        this.setState({selectedTeam: value[0]});
    }

    onInputChange(event){
        this.setState({drinkAmount: event.target.value});
    }

    save(){
        if(this.state.drinkAmount <= 0 || this.state.selectedTeam === ""){
            this.setState({error: true});
        }else {
            this.setState({error: false});
        }
    }

    render(){
        return (
            <React.Fragment>
                <Grid container direction={"row"}>
                    <Grid item xs={12}>
                        <h3>{this.state.selectedDrink}</h3>
                       <ToggleButtonGroup onChange={this.onSelectionChange}>
                           {(this.state.teams.length !== 0) ? (
                               this.renderTeams()
                           ) : <ToggleButton value={""} disabled={true}>Loading...</ToggleButton>}
                       </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={"Anzahl"}
                            type={"number"}
                            fullWidth
                            margin={"normal"}
                            onChange={this.onInputChange}
                        />
                        <Button fullWidth onClick={this.save} >
                            <h3>speichern</h3>
                        </Button>
                        <p hidden={!this.state.error}>Bitte Team wählen und Anzahl der Getränke eingeben</p>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Dialog;
