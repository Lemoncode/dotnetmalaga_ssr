import * as React from 'react';
import Link from 'next/link';
import { UserEntity } from 'model/user';
import { getUserCollection } from '../rest-api/github';
import { UserTable } from '../components/user-collection';

interface Properties {
  userCollection: UserEntity[],
}

class Index extends React.Component<Properties, {}> {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const userList = await getUserCollection();
    console.log(userList);
    return {
      userCollection: userList,
    }
  }

  render() {
    return (
      <div>
        <UserTable userCollection={this.props.userCollection} />
        <Link href="/user-info">
          <a>Navigate to user info page</a>
        </Link>
      </div>

    )
  }
}
export default Index;
