import React, {Component} from 'react';
import './styles/app.css';
import openSocket from 'socket.io-client';

const socket = openSocket(process.env.SOCKET_CONNECTION_URL || 'http://localhost:8000');


class App extends Component {

    constructor(props){
        super(props);
        this.clickMe = this.clickMe.bind(this);
    }

    state = {
        test: ["ping"]
    };

    clickMe() {
        socket.emit('test', 'demo', (response) => {
            this.setState({test: [response]})
        });
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Hello from Header</h1>
                </header>
                <div className="container">
                    <h4>Hello World!</h4>
                    {this.state.test[0]}
                    <button onClick={this.clickMe}>Click Me</button>
                </div>
            </div>
        );
    }
}

export default App;
