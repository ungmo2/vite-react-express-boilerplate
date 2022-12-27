# Vite React Express Boilerplate

> Quickly bootstrap a new project with Vite React Express Boilerplate.

This boilerplate is a fork of [joeynguyen/vite-react-express-boilerplate](https://github.com/joeynguyen/vite-react-express-boilerplate), but removes husky, stylelint and slightly modified the source code.

This boilerplate contains all the tools you need to build a modern web app with JavaScript, React, Vite, and Express.
You can use it to quickly bootstrap your project.

ESLint, prettier are configured to give you a solid development experience.

## Installing / Developing

First, [create a repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Now you are ready to go:

```shell
npm install
```

This will install the dependencies required to run the boilerplate.

```shell
npm run dev
```

Boom! These scripts run your server and client in development mode.

The default PORTS are:

- `9000` for the server
- `5173` for the client

If you don't like to call all scripts at once, you can also run:

```shell
npm run server:dev
npm run client:dev
```

You can configure the server port by setting the `PORT` environment variable. Creating a `.env` file is supported. You can copy `.env.example` to `.env`.

| KEY  | VALUE                                                         |
| ---- | ------------------------------------------------------------- |
| PORT | (Optional) Port for the server environment (defaults to 9000) |

## Building

To build the project, run:

```shell
npm run build
```

This will build the client and server.

```shell
npm start
```

In production, you have a single server serving everything.

`/api/*` is the API endpoint.
`/*` is the client.

## Licensing

MIT
