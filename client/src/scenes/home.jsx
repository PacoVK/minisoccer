import React, {Component} from 'react';
import '../styles/app.css';
import Header from '../components/header';



class Home extends Component {

    constructor(props){
        super(props);
        this.clickMe = this.clickMe.bind(this);
    }

    state = {
        test: ["ping"]
    };

    clickMe() {
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <h1>Hello world</h1>
                </div>
            </div>
        );
    }
}

export default Home;
