const myLanguage : string = "Typescript";
import Link from 'next/link';

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <p>From {myLanguage}</p>
    <Link href="/user-info">
      <a>Navigate to user info page</a>
    </Link>
  </div>
);

export default Index;