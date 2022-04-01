# ESBuild 14 + TypeScript + Lit = Happy

When I upgraded @web/dev-server-esbuild from 0.2.14 to 0.3.0, which in turn upgrades ESBuild from 0.12 to 0.14, somehow the Lit lifecycle got broken. This is a minimal reproduction of the issue.

To test:

```
npm install
npm start
```

It opens a browser window with a self-explanatory button. Click the button and the counter goes up.

To see it not working:

```sh
git checkout not-working
npm install
npm start
```
