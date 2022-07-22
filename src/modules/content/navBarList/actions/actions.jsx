import React, {Component} from 'react';
import './actions.css'
import {Button} from "@mui/material";

import Modal from "../../../modal/Modal";

class Actions extends Component {
    state = {
        isModalOpen: false,
    }
    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }
    render() {
        return (
            <div className='actionsWrapper'>
            <div className='actionsContent'>
                    <div className='actionText'>
                        <h4 className='actionTitle'> При покупке более трёх килограммов</h4>
                        <h1 className='actionSubTitle'>Банка мёда в подарок</h1>
                        <Button variant='contained'  sx={{
                            margin:'3rem',
                            padding:'1rem 2rem',
                            fontSize:'1.125rem'
                        }} onClick ={this.toggleModal}>Получить подарок</Button>
                    </div>
                </div>
                <div>
               {this.state.isModalOpen && <Modal onClose={this.toggleModal}>
               </Modal>


               }
                </div>


            </div>
        );
    }
}

export default Actions;

