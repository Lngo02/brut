# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Running on local

Setup: 
```
cd brut
npm install
```

Run:
```
npm run dev
```

For the Spotify API, there are secrets you need for it. These are not included in the git repo for security reasons.
You will need a `.env.local` file in the root directory. Note that ENV variables need to be prefixed with `VITE_` to be exposed to Vite-processed code. See https://vitejs.dev/guide/env-and-mode.html#env-files. 
```
VITE_CLIENT_ID='<your-client-id-here>'
```

# Helpful Resources
[Getting started with vite](https://vitejs.dev/guide/)
[Getting started with vitest](https://eternaldev.com/blog/testing-a-react-application-with-vitest)
[Spotify API](https://developer.spotify.com/documentation/web-api)
[Spotify web app example/how-to](https://developer.spotify.com/documentation/web-api/howtos/web-app-profile)
[What the useEffect is](https://legacy.reactjs.org/docs/hooks-effect.html)
[TS doc recommends interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
[More interfaces vs. types](https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-advanced-object-types/cheatsheet)
[This doc recomments Type](https://www.totaltypescript.com/type-vs-interface-which-should-you-use)
[Using the React Select](https://react-select.com/home)
[React spotify web playback: easier to use than spotify SDK](https://github.com/gilbarbara/react-spotify-web-playback)
[Deploying web app](https://blog.logrocket.com/9-ways-deploy-react-app-free/)
[Brut codebase tutorial inspo](https://github.com/samnixon87/brut)