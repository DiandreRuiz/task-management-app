# Task Management App

A modern, full-stack task management application built with React, TypeScript, and Auth0 authentication. This application allows users to create, manage, and organize tasks with group-based categorization and color coding.

## 🚀 Features

### Core Functionality
- **Task Management**: Create, edit, delete, and view tasks
- **Task Grouping**: Organize tasks into custom groups with automatic color assignment
- **User Authentication**: Secure login/logout with Auth0 integration
- **Responsive Design**: Mobile-friendly interface using React Bootstrap
- **Real-time Validation**: Form validation with immediate feedback

### Advanced Features
- **Color-coded Task Groups**: Automatic color assignment for task groups
- **Task Status Tracking**: Mark tasks as completed/incomplete
- **User Profile Integration**: Display user information from Auth0
- **Modal-based Editing**: In-place task editing with modal interface
- **Route-based Navigation**: Clean URL structure for task viewing

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **TypeScript** - Type-safe development
- **React Router DOM 7.9.4** - Client-side routing
- **React Bootstrap 2.10.10** - UI component library
- **Bootstrap 5.3.8** - CSS framework
- **Vite 7.1.7** - Fast build tool and dev server

### Authentication
- **Auth0** - Secure authentication and user management

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-management-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory with the following variables:
```env
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_REDIRECT_URI=http://localhost:5173/dashboard
```

### 4. Auth0 Setup
1. Create an Auth0 account at [auth0.com](https://auth0.com)
2. Create a new Single Page Application
3. Configure the following settings:
   - **Allowed Callback URLs**: `http://localhost:5173/dashboard`
   - **Allowed Logout URLs**: `http://localhost:5173`
   - **Allowed Web Origins**: `http://localhost:5173`
4. Copy your Domain and Client ID to the `.env` file

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Architecture

### Directory Structure
```
src/
├── components/           # React components
│   ├── Dashboard/       # Dashboard-related components
│   │   ├── AddTaskForm.tsx
│   │   ├── Dashboard.tsx
│   │   ├── TaskEdit/    # Task editing components
│   │   ├── TaskFeed/    # Task display components
│   │   └── UserDetails.tsx
│   ├── Landing/         # Landing page components
│   ├── NavBar/          # Navigation components
│   └── TaskView/        # Task viewing components
├── contexts/            # React contexts
│   ├── Auth0/          # Auth0 configuration
│   └── TaskContext.tsx # Task state management
├── hooks/              # Custom React hooks
├── styles/             # CSS styles
└── main.tsx           # Application entry point
```

### Key Components

#### TaskContext
The central state management system for tasks:
- **Task State**: Manages all task data
- **Color Management**: Automatic color assignment for task groups
- **CRUD Operations**: Create, read, update, delete tasks
- **Group Management**: Handle task grouping and filtering

#### Authentication Flow
1. **Landing Page**: Welcome screen with login/logout options
2. **Auth0 Integration**: Secure authentication
3. **Dashboard**: Main application interface (protected route)
4. **User Details**: Display authenticated user information

#### Task Management
- **AddTaskForm**: Create new tasks with validation
- **TaskFeed**: Display all tasks with management options
- **TaskEdit**: Modal-based task editing
- **TaskView**: Individual task viewing

## 🔧 Development

### Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Code Structure

#### Task Type Definition
```typescript
export type Task = {
    owner: string | null;
    name: string;
    description: string;
    completed: boolean;
    taskGroup: string | null;
    taskColor: string | null;
};
```

#### Context API Usage
```typescript
const { tasks, addTask, removeTask, updateTask, viewTask, getTasksFromGroup } = useTasks();
```

### Form Validation
The application implements robust form validation:
- **Synchronous Validation**: Immediate feedback for form submission
- **Error Display**: Real-time error messages
- **State Management**: Proper handling of validation errors
- **User Experience**: Clear feedback for all validation scenarios

## 🎨 UI/UX Features

### Design System
- **Bootstrap 5**: Modern, responsive design
- **React Bootstrap**: Pre-built components
- **Custom Styling**: Task-specific CSS modules
- **Color Coding**: Visual task group organization

### User Experience
- **Responsive Design**: Works on all device sizes
- **Intuitive Navigation**: Clear routing structure
- **Modal Interactions**: Smooth editing experience
- **Form Validation**: Immediate feedback and error handling

## 🔒 Security Features

### Authentication
- **Auth0 Integration**: Industry-standard authentication
- **Protected Routes**: Secure dashboard access
- **User Session Management**: Automatic session handling
- **Secure Redirects**: Proper callback URL handling

### Data Validation
- **Client-side Validation**: Immediate form feedback
- **Type Safety**: TypeScript ensures data integrity
- **Input Sanitization**: Proper handling of user input

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
```env
VITE_AUTH0_DOMAIN=your-production-domain
VITE_AUTH0_CLIENT_ID=your-production-client-id
VITE_AUTH0_REDIRECT_URI=https://your-domain.com/dashboard
```

### Deployment Considerations
- Update Auth0 settings for production URLs
- Configure proper CORS settings
- Set up environment-specific configurations
- Ensure HTTPS for production deployment

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow ESLint configuration
2. **TypeScript**: Maintain type safety
3. **Component Structure**: Use functional components with hooks
4. **State Management**: Leverage Context API appropriately
5. **Testing**: Add tests for new features

### Pull Request Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📝 API Documentation

### Task Context Methods
- `addTask(task: Task)`: Add a new task
- `removeTask(name: string)`: Remove a task by name
- `updateTask(name: string, updates: Partial<Task>)`: Update task properties
- `viewTask(name: string)`: Get a specific task
- `getTasksFromGroup(taskGroup: string)`: Get all tasks in a group

### Route Structure
- `/` - Landing page
- `/dashboard` - Main dashboard (protected)
- `/tasks` - Task list view
- `/tasks/:taskName` - Individual task view

## 🐛 Troubleshooting

### Common Issues

#### Auth0 Configuration
- Ensure callback URLs are correctly configured
- Check domain and client ID in environment variables
- Verify redirect URI matches Auth0 settings

#### Development Server
- Clear browser cache if experiencing issues
- Check for port conflicts (default: 5173)
- Ensure all dependencies are installed

#### Build Issues
- Run `npm run lint` to check for code issues
- Verify TypeScript compilation
- Check for missing environment variables

## 📄 License

This project is part of a coding bootcamp assignment and is for educational purposes.

## 🙏 Acknowledgments

- **Auth0** for authentication services
- **React Bootstrap** for UI components
- **Vite** for fast development experience
- **TypeScript** for type safety

---

For questions or support, please refer to the project documentation or contact the development team.