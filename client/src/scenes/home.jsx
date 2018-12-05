import React, {Component} from 'react';
import '../styles/app.css';
import Header from '../components/header';
import Grid from '@material-ui/core/Grid';
import Drink from '../components/drink';
import Dialog from '../components/dialog';
import Modal from 'react-responsive-modal';

class Home extends Component {

    state = {
        drinks: ["Asbach","Captn Cola","Bier","Schorle"],
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    renderDrinks(){
        let drinkButtons = [];
        this.state.drinks.forEach((drink) => {
           drinkButtons.push(
               <Grid className={"drink-grid"} key={drink} item xs={12} sm={4}>
                   <Drink drink={drink} action={this.onOpenModal}/>
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
                        <Dialog/>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Home;
