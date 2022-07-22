import React, {Component} from 'react';
import './signUpForm.css'
import axios from "axios";
import {withSnackbar} from 'notistack';
class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            emailDirty: false,
            passwordDirty: false,
            repeatPasswordDirty: false,
            emailError: 'емаил не может быть пустым',
            passwordError: 'пароль не может быть пустым',
            repeatPasswordError: 'повторите пароль'
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
        this.handleClickReg = this.handleClickReg.bind(this)
    }
        handleBlur(e){
            switch (e.target.name) {
                case 'email':
                    this.setState({emailDirty: true});
                    break;
                case 'password':
                    this.setState({passwordDirty: true});
                    break;
                case 'repeatPassword':
                    this.setState({repeatPasswordDirty: true});
                    break;
            }
        }
        handleEmailChange(e){
        this.setState({email: e.target.value})
        if(!/^[^@]+@\w+(\.\w+)+\w$/.test(e.target.value.trim())) {
            this.setState({emailError: 'некорректный email'})
        } else {this.setState({emailError:''})}
        }
        handlePasswordChange(e){
            this.setState({password: e.target.value})
            if (e.target.value.length < 8) {this.setState({passwordError: 'введите не менее 8 символов'})
                if (!e.target.value) {
                    this.setState({passwordError: 'пароль не может быть пустым'})
                }
            }else {this.setState({passwordError:''})}
        }
        handleRepeatPasswordChange(e){
            this.setState({repeatPassword: e.target.value});
            if (e.target.value !== this.state.password) {
                this.setState({repeatPasswordError: 'пароли не совпадают'})
                if (!e.target.value) {
                    this.setState({repeatPasswordError: 'пароль не может быть пустым'})
                }
            } else {this.setState({repeatPasswordError:''})}
        }
        handleClickReg(e){
            e.preventDefault();
            axios.post('https://mbicycle-shop-be.herokuapp.com/signup', {
                        "email": this.state.email,
                        "password": this.state.password
                        }).then((data) =>{
                            console.log(data);
                this.props.enqueueSnackbar('Регистрация прошла успешно.', {variant:'success'})
            } )
                            .catch(() => this.props.enqueueSnackbar('Что-то пошло не так',{variant:'error'}));

}
    render() {
        return (
            <div>
                <form action="" name='signUpForm'>
                    {(this.state.emailDirty && this.state.emailError)  &&
                    <div style={{color: 'red'}}>{this.state.emailError}</div>
                    }
                    <label htmlFor="">эл почта
                        <input type="text"
                               name='email'
                               placeholder='enter your email'
                               value={this.state.email}
                               onBlur={this.handleBlur}
                               onChange={this.handleEmailChange}/>
                    </label>
                    {(this.state.passwordDirty && this.state.passwordError)  &&
                        <div style={{color: 'red'}}>{this.state.passwordError}</div>
                    }
                    <label htmlFor="">пароль
                        <input type="password"
                               name='password'
                               placeholder='enter password'
                               value={this.state.password}
                               onBlur={this.handleBlur}
                               onChange={this.handlePasswordChange}/>
                    </label>
                    {(this.state.repeatPasswordDirty && this.state.repeatPasswordError)  &&
                        <div style={{color: 'red'}}>{this.state.repeatPasswordError}</div>
                    }
                    <label htmlFor="">повторите пароль
                        <input type="password"
                               name='repeatPassword'
                               placeholder='repeatPassword'
                               value={this.state.repeatPassword}
                               onBlur={this.handleBlur}
                               onChange={this.handleRepeatPasswordChange}
                               />
                    </label>
                    <button type='submit' onClick={this.handleClickReg}> Регистрация </button>
                </form>
            </div>
        );
    }
}


export default withSnackbar(SignUpForm);
