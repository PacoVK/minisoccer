import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import TextField from '@material-ui/core/TextField';

class Dialog extends PureComponent {

    constructor(props){
        super(props);
        this.onSelectionChange = this.onSelectionChange.bind(this);
    }

    state = {
        selectedTeam: "",
        teams: []
    };

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    componentDidMount(){
        this.sleep(2000).then((res) => {
            this.setState({teams: [{"name":"test"},{"name":"dkjfhsdkf2"},{"name":"test3"},{"name":"test4"},{"name":"test5"}]})
        });
    }

    renderTeams(){
        let teamsButtons = [];
        this.state.teams.forEach((team) => {
            teamsButtons.push(
                <ToggleButton selected={this.state.selectedTeam === team.name} key={team.name} value={team.name}>
                    {team.name}
                </ToggleButton>
            );
        });
        return teamsButtons;
    }

    onSelectionChange(event,value){
        this.setState({selectedTeam: value[0]});
    }

    render(){
        return (
            <React.Fragment>
                <Grid container direction={"row"}>
                    <Grid item xs={12}>
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
                        />
                        <Button fullWidth onClick={this.props.action} >
                            <h1>speichern</h1>
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Dialog;
