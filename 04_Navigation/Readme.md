# 04 Navigation

Add a new page and navigate from page A to page B.

# Steps

- Start from sample 03, to install dependencies.

```bash
npm install
```

- Next step, let's create a second page, we will call it _user-info_:

_./pages/user-info.tsx_

```javascript
const UserInfoPage = () =>
  <div>
    <h2>I'm the user info page</h2>    
  </div>

export default UserInfoPage;
```

- Now in order to add some useful navigation in both client and server side we can wrap a navigation ancho with a nextjs hoc to handle navigatin in an universal way.

_./pages/index.tsx_

```diff
const myLanguage = "Typescript";
+ import Link from 'next/link';

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <p>From {myLanguage}</p>
+    <Link href="/user-info">
+      <a>Navigate to user info page</a>
+    </Link>    
  </div>
);

export default Index;
```

> If we don't use this Link HOC when clicking on the link it would navigate to the server rather than making client side navigation.

- Let's run the sample.

```bash
npm run dev
```

> Important open network tab, check first load of second page, script loaded, second using client
(next splits by page).
