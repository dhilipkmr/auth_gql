import React, {Component} from 'react';
import AuthForm from './AuthForm';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3 className="center-align">Login</h3>
        <AuthForm/>
      </div>
    )
  }
}
export default LoginForm;