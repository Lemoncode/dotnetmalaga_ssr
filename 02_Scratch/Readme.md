# 02 Scratch

Demo:
  - Create a _Hello Nextjs_ from scratch.
  
# Steps

- Let's initialize the project.

```bash
npm init -y
```

- Let's install _React_ dependencies.

```bash
npm install react react-dom --save
```

- Let's install _Nextjs_ depency.

```bash
npm install next --save
```

- Let's open package.json and add the following npm script.

_./package.json_

```diff
"scripts": {
+ "dev": "next",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

- Let's create our first page (by convention need to be placed on a specific subfolder).

_./pages/index.js_

```javascript
const Index = () => 
  <div>
    <h2>Hello nextjs !</h2>
  </div>

export default Index;
```

- Let's run the sample

```bash
npm run dev
```

> Remember browsing _localhost:3000_
