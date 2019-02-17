import React, {Component} from 'react';
import AuthForm from './AuthForm';
import LoginMutation from '../Mutations/LoginMutation';
import CurrentUser from '../Queries/CurrentUser';
import {graphql} from 'react-apollo';

class LoginForm extends Component {
  submitMutation({email, password}){
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUser }]
    });
  }

  render() {
    return (
      <div>
        <h3 className="center-align">Login</h3>
        <AuthForm submitMutation={this.submitMutation.bind(this)}/>
      </div>
    )
  }
}
export default graphql(LoginMutation)(
  graphql(CurrentUser)(LoginForm)
);
