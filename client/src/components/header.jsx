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
                        <center><h1>Hello from Header</h1></center>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className="header-nav" onClick={this.goToHome}>Home</Button>
                        <Button className="header-nav" onClick={this.goToStats}>Stats</Button>
                        <IconButton className="header-nav setup-btn" onClick={this.goToSettings}>
                            <SetupIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </header>
        );
    }
}

export default Header;
