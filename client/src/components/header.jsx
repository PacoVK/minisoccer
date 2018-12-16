import React, { PureComponent } from 'react';
import { navigate } from "@reach/router"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SetupIcon from '@material-ui/icons/Build';
import '../styles/app.css';


class Header extends PureComponent {

    goToStats = () => {
        navigate('/statistic');
    };

    goToHome = () => {
        navigate('/');
    };

    goToSettings = () => {
        navigate('/setup');
    };

    render() {
        return (
            <header className="App-header">
                <Grid container>
                    <Grid item xs={12}>
                        <Button style={{marginRight: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}} variant={"outlined"} onClick={this.goToHome}>Home</Button>
                        <Button style={{marginRight: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}} variant={"outlined"} onClick={this.goToStats}>Stats</Button>
                        <IconButton style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)'}} className="setup-btn" onClick={this.goToSettings}>
                            <SetupIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </header>
        );
    }
}

export default Header;
