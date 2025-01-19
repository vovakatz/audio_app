# Audio Web App

A minimal but functional audio web application built with Next.js and Express. Users can sign up, log in, and listen to audio tracks through a clean and simple interface.

## Features

- User authentication (signup/login) with JWT
- Audio track listing and playback
- **TODO**: Responsive design with Tailwind CSS
- TypeScript implementation for both frontend and backend

## Tech Stack

### Frontend
- Next.js
- React (with Hooks)
- TypeScript
- Tailwind CSS
- Context API for state management

### Backend
- Node.js with Express
- TypeScript
- JWT for authentication
- In-memory storage (easily replaceable with a database)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:vovakatz/audio_app.git
cd audio_app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Architecture Decisions

### Authentication
- JWT-based authentication was chosen for its stateless nature and ease of implementation
- Tokens are stored in local storage
- Password hashing using bcrypt

### Data Storage
- Simple in-memory storage used for demonstration
- Easily replaceable with a proper database (e.g., PostgreSQL, MongoDB)

### Styling
- Tailwind CSS chosen **BUT** not implemented for this exercise.

## Security Considerations

- Passwords are hashed using bcrypt
- CORS configured for security
- Minimal input validation is implemented.  Real application will require proper front and back end validations
- Protected routes using authentication middleware

## Future Improvements

1. Add proper database integration
2. Implement user profiles
3. Add playlist functionality
4. Enhance audio player features (speed control, playlist queue)
5. Implement server-side rendering for better SEO
6. Add unit and integration tests
7. Implement styling
