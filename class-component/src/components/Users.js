import {  Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      moreState: 'Test',
    };
  }

  // Called once component mounted
  // == useEffect(..., [])
  componentDidMount() {}
  // Called once component updated
  // == useEffect(..., [someValue])
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No users provided');
    }
  }
  // Called right before component is unmounted (removed from DOM)
  // Clean up function
  // == useEffect(() => {return () => {...}},[])
  componentWillUnmount() {}

  toggleUsersHandler() {
    this.setState((curState) =>{
      // moreState 자동으로 react에 의해 병합됨 (functional 과 다른 점)
      return {
        showUsers: !curState.showUsers
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
