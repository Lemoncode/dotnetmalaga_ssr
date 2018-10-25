# Demo

Review how typescript support is added.

# Review

THIS EXAMPLE IS NOT AN STEP BY STEP GUIDE, JUST A REVIEW.

- Check package.json, it's installed (dev dependencies).

@zeit/next-typescript
@types/react
@types/next 

- Check _tsconfig.json_ added

_./tsconfig.json_

- Check Babel configuration (babel 7 is used to transpile)

_./.babelrc_

- Add _webpack.config_ like (merge).

_./next.config.js_

- Rename _index.js_ to _index.tsx.

_./pages/index.tsx_

- Check index.tsx, some typescript code added.

_./pages/index.tsx_

- Let's try the sample:

```
npm run dev
```

