# http-server

A minimal HTTP server built with [Express](https://expressjs.com/) and run with [Bun](https://bun.com). It exposes a handful of routes, including a CPU-bound endpoint that simulates heavy load and an OS endpoint that reports the host name.

## Requirements

- [Bun](https://bun.com) (used as the runtime, package manager, and TypeScript executor)

## Install

```bash
bun install
```

## Run

```bash
bun run index.ts
```

The server starts on port `3000`:

```
Server is running on port 3000
```

For development with auto-reload on file changes:

```bash
bun --hot ./index.ts
```

## Routes

| Method | Path      | Description                                                                 |
| ------ | --------- | --------------------------------------------------------------------------- |
| `GET`  | `/`       | Returns a plain-text `Hello World` greeting.                                |
| `GET`  | `/cpu`    | Runs a busy loop of 1,000,000,000 iterations and returns `Done`. Useful for exercising/benchmarking CPU-bound work. |
| `GET`  | `/os`     | Returns the hostname of the machine running the server.                     |
| `GET`  | `/health` | Health check. Returns `OK`.                                                 |

## Examples

```bash
curl http://localhost:3000/
# Hello World

curl http://localhost:3000/health
# OK

curl http://localhost:3000/os
# <hostname>

curl http://localhost:3000/cpu
# Done (may take a few seconds)
```

## Project structure

```
.
├── index.ts        # Express app definition and server bootstrap
├── package.json    # Dependencies and package metadata
├── tsconfig.json   # TypeScript configuration (Bun-oriented, noEmit)
├── bun.lock        # Lockfile (managed by Bun)
└── CLAUDE.md       # Project conventions for AI-assisted development
```

## Notes

- `@types/express` is installed so the Express API is fully typed.
- The project is private and not published as a package.
- This project was originally created with `bun init`; the Bun runtime is a fast all-in-one JavaScript runtime.

