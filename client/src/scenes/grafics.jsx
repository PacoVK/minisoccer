import openSocket from 'socket.io-client';
import React, {Component} from "react";
import {BarChart} from 'react-easy-chart';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

let socket;

class Grafics extends Component {


    constructor(props){
        super(props);
        this.onChangeSwitch = this.onChangeSwitch.bind(this);
    }

    state = {
        teamData: [
            {x: 'A', y: 20},
            {x: 'B', y: 30}
        ],
        barChart: {
            componentWidth: window.innerWidth,
            componentHeight: window.innerHeight
        },
        useBarChart: true
    };

    componentDidMount() {
        socket = openSocket(process.env.SOCKET_CONNECTION_URL || 'http://localhost:8000');
        window.addEventListener('resize', () => {
            this.setState({
                componentWidth: window.innerWidth,
                componentHeight: window.innerHeight
            });
        });
    }

    componentWillUnmount(){
        socket.emit('end');
    }

    renderGrafic(){
        return this.state.useBarChart ? this.renderBarChart() : this.renderTable();
    }

    renderTable(){
        return(
            <h1>Table</h1>
        );
    }

    renderBarChart(){
        return(
            <BarChart
                data={this.state.teamData}
                axes
                width={this.state.componentWidth > 600 ? this.state.componentWidth/ 2 : this.state.componentWidth}
                height={this.state.componentHeight > 600 ? this.state.componentHeight / 2 : this.state.componentHeight}
                yTickNumber={3}
                colorBars
            />
        );
    }

    onChangeSwitch(event,checked){
        this.setState({useBarChart: checked});
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Switch onChange={this.onChangeSwitch} checked={this.state.useBarChart}/>
                    <Grid container>
                        <Grid item sm={3}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            { this.renderGrafic() }
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
