import * as React from 'react';
import Link from 'next/link';
import { UserEntity } from 'model/user';
import { getUserCollection } from '../rest-api/github';
import {UserTable} from '../components/user-collection';

interface State {
   userCollection: UserEntity[],
}

class Index extends React.Component<{},State> {
  constructor(props) {
    super(props);
    this.state = {userCollection: []};
  }

  componentDidMount() {
    this.loadUserList();
  }

  async loadUserList() {
    const userList = await getUserCollection();

    this.setState({userCollection: userList});
  }

  render() {
    return (
      <div>
        <UserTable userCollection={this.state.userCollection}/>
        <Link href="/user-info">
          <a>Navigate to user info page</a>
        </Link>
      </div>

    )
  }
}
export default Index;