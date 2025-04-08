# LinkedIn Clone

A full-featured LinkedIn clone built with Next.js and Tailwind CSS. This project demonstrates modern web development techniques and best practices for building social networking applications.

![LinkedIn Clone Screenshot](/public/screenshot.png)

## Features

- **User Authentication**: Sign up, login, and secure user sessions
- **User Profiles**: Create and edit detailed professional profiles
- **Feed**: View and interact with posts from your network
- **Posts**: Create posts with text and images, like and comment on posts
- **Network**: Connect with other professionals
- **Jobs**: Browse and apply for job listings
- **Messaging**: Send and receive messages (simplified)
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **UI Components**: Headless UI, Heroicons
- **Formatting/Date**: date-fns

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

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

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   ├── lib/               # Utility functions and libraries
│   └── models/            # MongoDB models
├── public/                # Static assets
├── .env.local             # Environment variables (create this file)
└── package.json           # Project dependencies
```

## Deployment

This project can be deployed to Vercel with minimal configuration:

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Set up the environment variables.
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by LinkedIn
- Built as a learning project to demonstrate modern web development techniques
