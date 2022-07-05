# Repo typesafe-routes

1. `npm install`
2. `npm start`
3. Click on _About_
4. Inspect the _Home_ link

The home link has `href="/about" instead of "/" because `homeRoute({}).$` returns an empty string instead of "/".
