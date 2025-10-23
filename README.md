# Task Management App

A React task management application built with TypeScript and Auth0 authentication. This project demonstrates React Context API usage for state management, with no backend integration. Users can create, manage, and organize tasks with group-based categorization and color coding.

## Features

- Create, edit, delete, and view tasks
- Organize tasks into groups with automatic color coding
- Auth0 authentication
- Responsive design with React Bootstrap
- Form validation
- Modal-based task editing

## Tech Stack

- React 19.1.1 with TypeScript
- React Router for navigation
- React Bootstrap for UI components
- Auth0 for authentication
- Vite for development
- Context API for state management (no backend)

## Setup

1. Clone the repo and install dependencies:
```bash
git clone <repository-url>
cd task-management-app
npm install
```

2. Set up Auth0:
   - Create an Auth0 account
   - Create a Single Page Application
   - Add `http://localhost:5173/dashboard` to Allowed Callback URLs
   - Add `http://localhost:5173` to Allowed Logout URLs

3. Create a `.env` file:
```env
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_REDIRECT_URI=http://localhost:5173/dashboard
```

4. Start the dev server:
```bash
npm run dev
```

## Architecture

This project uses React Context API for state management instead of a backend. All task data is stored in memory using the `TaskContext` provider.

### Key Components
- **TaskContext**: Manages all task state, CRUD operations, and group color assignment
- **Dashboard**: Main interface with task creation and display
- **TaskFeed**: Shows all tasks with edit/delete options
- **AddTaskForm**: Creates new tasks with validation
- **TaskEdit**: Modal for editing existing tasks

### State Management
The app demonstrates React Context API usage by:
- Storing all tasks in Context state (no database)
- Managing task groups and automatic color assignment
- Handling CRUD operations through Context methods
- Providing global access to task data across components

## Development

```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run lint   # Run linting
```

## Routes

- `/` - Landing page
- `/dashboard` - Main dashboard (protected)
- `/tasks` - Task list view
- `/tasks/:taskName` - Individual task view

## Context API Usage

```typescript
const { tasks, addTask, removeTask, updateTask, viewTask, getTasksFromGroup } = useTasks();
```

This project demonstrates React Context API for state management without any backend integration.