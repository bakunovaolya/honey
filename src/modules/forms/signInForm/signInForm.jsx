import React, {Component} from 'react';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            emailDirty: false,
            passwordDirty: false,
        }
    }
    render() {
        return (
            <div>
                <form action="" name='signIpForm'>
                    {(this.state.emailDirty && this.state.emailError) &&
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
                    {(this.state.passwordDirty && this.state.passwordError) &&
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
                    {(this.state.repeatPasswordDirty && this.state.repeatPasswordError) &&
                        <div style={{color: 'red'}}>{this.state.repeatPasswordError}</div>
                    }
                    <button type='submit' onClick={this.handleClickReg}>Войти</button>
                </form>
            </div>
        );
    }
}

export default SignInForm;
