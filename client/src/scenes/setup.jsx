import React, {Component} from 'react';
import '../styles/app.css';
import Header from '../components/header';



class Setup extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <h1>Setup</h1>
                </div>
            </div>
        );
    }
}

export default Setup;
