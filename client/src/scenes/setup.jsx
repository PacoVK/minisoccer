import React, {Component} from 'react';
import '../styles/app.css';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';

class Setup extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Grid container>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default Setup;
