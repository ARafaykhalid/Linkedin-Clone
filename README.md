# LinkedIn Clone

A full-featured LinkedIn clone built with Next.js and Tailwind CSS. This project demonstrates modern web development techniques and best practices for building social networking applications.

## Screenshots

### Home/Feed Page
![Main Feed](/screenshots/main.png)

### Profile Page
![Profile Page](/screenshots/profile.png)

### Network Page
![Network Page](/screenshots/network.png)

### Jobs Page
![Jobs Page](/screenshots/jobs.png)

### Messaging Interface
![Messaging](/screenshots/messaging.png)

### Notifications
![Notifications](/screenshots/notification.png)

### Settings
![Settings](/screenshots/settings.png)

### Authentication (Logout)
![Logout](/screenshots/logout.png)

## Features

- **User Authentication**: Sign up, login, and secure user sessions
- **User Profiles**: Create and edit detailed professional profiles
- **Feed**: View and interact with posts from your network
- **Posts**: Create posts with text and images, like and comment on posts
- **Network**: Connect with other professionals
- **Jobs**: Browse and apply for job listings
- **Messaging**: Send and receive messages
- **Dark Mode**: Full support for light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js with in-memory user storage
- **UI Components**: Headless UI, Heroicons
- **Formatting/Date**: date-fns

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/linkedin-clone.git
   cd linkedin-clone
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
linkedin-clone/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (routes)/      # Site routes (feed, profile, etc.)
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   └── layout.tsx     # Root layout
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── MainLayout.tsx # Layout wrapper
│   │   └── ThemeSwitcher.tsx # Dark mode toggle
│   ├── lib/               # Utility functions and libraries
│   │   └── userStore.ts   # Mock database implementation
├── public/                # Static assets
├── screenshots/           # Screenshots of the application
└── package.json           # Project dependencies
```

## Key Improvements

- **MongoDB-Free Authentication**: Replaced MongoDB dependency with in-memory storage using localStorage
- **Enhanced UI**: Fixed layout issues and improved responsiveness
- **Dark Mode**: Added comprehensive dark mode support across all pages
- **Proper Layouts**: Implemented consistent layouts with MainLayout component
- **Error Handling**: Added custom 404 page and loading states

## Deployment

This project can be deployed to Vercel with minimal configuration:

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by LinkedIn
- Built as a learning project to demonstrate modern web development techniques
