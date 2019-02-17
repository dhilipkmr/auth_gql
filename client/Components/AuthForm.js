import React, {Component} from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit(e){
    e.preventDefault();
    this.props.submitMutation(this.state);
  }

  render() {
    const {submitMutation} = this.props;
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}/>
        </div>
        <div className="input-field">
          <input placeholder="password" type="password" onChange={(e) => this.setState({ password: e.target.value })}/>
        </div>
        <div>
          <button className="btn">Submit</button>
        </div>
        </form>
      </div>
    )
  }
}
export default AuthForm;