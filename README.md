# Description

We are fetching sample data from [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1) inside the `+layout.server.ts` file inside the `fetch-demo` route.

As it is a server only file that fetch request will be executed only on the server side and the data will be passed to the client side.

But the issue is that if we go to the view source of the page we can see the url from where the data is being fetched.
