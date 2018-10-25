# Demo

Fetch data from github API using server side rendering.

Starts from client side rendering.

# Steps

- Start from sample 04, to install dependencies.

```bash
npm install
```

- We will start by using a client side rendering solution.

- Only thing to take into consideration we will have already installed
_isomorphic-unfetch_ (works on nodejs, client side and works well with async / await).

See >> package.json

- Show model:

_./model/user.ts_

- Show rest-api:

_./rest-api/github.ts_

- Show current _ComponentDidMount_ implementation.

_./pages/index.js_

- Now this sample starts from here (this code is not in the source code implementation).

- Now in index.js, let's change state to properties (it could be implemented in state as well
see https://github.com/Lemoncode/nextjs-typescript-by-sample/tree/master/03-fetch).

_./pages/index.tsx_

```diff
- interface State {
+ interface Properties {  
   userCollection: UserEntity[],
}

- class Index extends React.Component<{},State> {
+ class Index extends React.Component<Properties,{}> {  
  constructor(props) {
    super(props);
-    this.state = {userCollection: []};
  }
```

- Now let's add a _getInitialProps_ method and replace component will mount

_./pages/index.tsx_

```diff
class Index extends React.Component<{},State> {
  constructor(props) {
    super(props);
    this.state = {userCollection: []};
  }

-  componentDidMount() {
-    this.loadUserList();
-  }

-  async loadUserList() {
-    const userList = await getUserCollection();
-
-    this.setState({userCollection: userList});
-  }

+  async getInitialProps() {
+    const userList = await getUserCollection();
+    console.log(userList);
+    return {
+      userCollection: userList,
+    }
+  }  
}
```

- And let's reference props in the markup.

```diff
  render() {
    return (
      <div>
-         <UserTable userCollection={this.state.userCollection} />
+         <UserTable userCollection={this.props.userCollection} />
        <Link href="/user-info">
          <a>Navigate to user info page</a>
        </Link>
      </div>

    )
  }
```

> Play with console.log (client, server)

