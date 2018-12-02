import openSocket from 'socket.io-client';
import React, {Component} from "react";
import {BarChart} from 'react-easy-chart';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';

const socket = openSocket(process.env.SOCKET_CONNECTION_URL || 'http://localhost:8000');

class Grafics extends Component {

    state = {
        teamData: [
            {x: 'A', y: 20},
            {x: 'B', y: 30}
        ],
        componentWidth: window.innerWidth,
        componentHeight: window.innerHeight
    };

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                componentWidth: window.innerWidth,
                componentHeight: window.innerHeight
            });
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Grid container>
                        <Grid item sm={3}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <BarChart
                                data={this.state.teamData}
                                axes
                                width={this.state.componentWidth > 600 ? this.state.componentWidth/ 2 : this.state.componentWidth}
                                height={this.state.componentHeight > 600 ? this.state.componentHeight / 2 : this.state.componentHeight}
                                yTickNumber={3}
                                colorBars
                            />
                        </Grid>
                        <Grid item sm={3}>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Grafics;
