Steps to create a rest api:

1. move client side files into the 	`public` directory
2. Create a `src` directory at the root
3. `npm install express body-parser mongoose`
4. `touch src/app.js`, bring in dependancies, create simple route to get hello world, app.listen on port 3000 with message to console
5. `mkdir api` and `touch api/index.js`.  Bring in express and expressRouter, create routes for your api
6. `mkdir mock`, `touch mock/todos.json`, add in some data that will resemble your docs, require that into api/index.js
7. Refactor your client side code so it's making data requests to the server side api
8. `touch src/database.js', create the connection with mongodb, require it into app.js