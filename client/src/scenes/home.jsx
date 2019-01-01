import React, {Component} from 'react';
import '../styles/app.css';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';
import Drink from '../components/drink';
import Dialog from '../components/dialog';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import {API_CONNECTION_URL} from '../const';

class Home extends Component {

    state = {
        drinks: [],
        open: false,
        selectedDrink: undefined,
    };

    componentDidMount(){
        axios.get(API_CONNECTION_URL+'/drinks').then((response) => {
            this.setState({drinks: response.data.drinks});
        })
    }

    onOpenModal = (event) => {
        this.setState({
            open: true,
            selectedDrink: event.currentTarget.value
        });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    renderDrinks(){
        let drinkButtons = [];
        this.state.drinks.forEach((drink) => {
           drinkButtons.push(
               <Grid className={"drink-grid"} key={drink.id} item xs={12} sm={6}>
                   <Drink value={drink.name} action={this.onOpenModal}/>
               </Grid>
           );
        });
        return drinkButtons;
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Grid container>
                        {(this.state.drinks.length !== 0) ? (
                            this.renderDrinks()
                        ) : null}
                    </Grid>
                    <Modal open={this.state.open} onClose={this.onCloseModal} closeOnOverlayClick={false} center>
                        <Dialog saveCallBack={() => {this.setState({ open: false })}} selectedDrink={this.state.selectedDrink}/>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Home;
