# To-Do List Application

## Setup

1. Clone the repository
2. Install dependencies
    ```bash
    npm install
    ```
3. Configure the PostgreSQL database connection in `config/database.js`.
4. Start the server
    ```bash
    npm run dev
    ```

## Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Add a new task
- `PUT /tasks/:id` - Update task completion status
- `DELETE /tasks/:id` - Delete a task
