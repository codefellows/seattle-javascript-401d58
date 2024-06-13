# Lab Notes

## API Server

- BASE URL: https://auth-server-2eag.onrender.com/
- Signin Route: https://auth-server-2eag.onrender.com/auth/signin
- TODO Route (no auth required): https://auth-server-2eag.onrender.com/api/v1/todo
- TODO Route (auth required): https://auth-server-2eag.onrender.com/api/v2/todo

## TODO Data Model

- task (string)
- assignee (string)
- difficulty (integer)
- complete (boolean)

## Tasks

1. Wire up the new auth context that has live signin
2. Fetch todo items from the API on app load
3. POST new todo items to the API server
4. PUT changes to the todo items to the API server
5. DELETE items using the API Server

Remember that every time you make a change to the TODO database, your app will be out of sync. You'll need to manage state carefully and tactically. I'll leave this to you!
