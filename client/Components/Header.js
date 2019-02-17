import React from 'react';
import {graphql} from 'react-apollo';
import CurrentUser from '../Queries/CurrentUser';
import {Link} from 'react-router';
import LogoutMutation from '../Mutations/LogoutMutation';

class Header extends React.Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: CurrentUser }]
    }).then((resp) => {
      console.log(resp);
    }).catch((err) => {
      console.log('Failed to logout');
    })
  }

  renderButtons() {
    const {loading, user} = this.props.data;
    if (loading) {
      return null;
    }
    if (user) {
      return (
        <li>
          <a className="btn" onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )
    }
  }

  render() {
    const {data} = this.props;
    console.log(this.props.data.user);
    return (
      <nav>
       <div className="nav-wrapper">
        <Link to='/' className="brand-logo left">Home</Link>
        <ul className="right">
          {this.renderButtons()}
        </ul>
       </div>
      </nav>
    );
  }
}

export default graphql(LogoutMutation)(
  graphql(CurrentUser)(Header)
);
