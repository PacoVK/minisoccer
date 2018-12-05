import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Drink extends PureComponent {

    render(){
        return (
            <React.Fragment>
                <Paper>
                    <Button fullWidth onClick={this.props.action} >
                        <h1>{this.props.drink}</h1>
                    </Button>
                </Paper>
            </React.Fragment>
        );
    }
}

export default Drink;
