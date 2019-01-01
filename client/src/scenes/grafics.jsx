import openSocket from 'socket.io-client';
import React, {Component} from "react";
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';
import HighscoreTable from '../components/table';
import axios from 'axios';
import {API_CONNECTION_URL, SOCKET_CONNECTION_URL} from '../const';

let socket;

class Grafics extends Component {


    constructor(props) {
        super(props);
        this.onUpdateData = this.onUpdateData.bind(this);
    }

    state = {
        teamData: []
    };

    fetchData() {
        axios.get(API_CONNECTION_URL+'/orders').then((response) => {
            this.setState({
                teamData: response.data.orders,
            });
        });
    }

    onUpdateData() {
        this.fetchData();
    }

    componentDidMount() {
        socket = openSocket(SOCKET_CONNECTION_URL);
        socket.on('update', this.onUpdateData);
        this.fetchData();
    }

    componentWillUnmount() {
        socket.emit('end');
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
                            <HighscoreTable data={this.state.teamData}/>
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
