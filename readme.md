# Simple Authentication App

## About

This React app is designed to provide a solid foundation for web applications requiring secure authentication. It features built-in support for Google and Microsoft OAuth authentication alongside a standard username and password login system. This template ensures a seamless and secure user experience, maintaining session states even after application restarts.

![Simple Auth App - preview](https://github.com/Kotkoa/simple-auth-app/blob/main/assets/Screenshot%202024-04-28%20at%2019.07.11.png)

## Links and Resources

- **Repository:** [GitHub Repository](https://github.com/Kotkoa/simple-auth-app)
- **Live Deployment:** [Simple Auth App](https://simple-auth-app-black.vercel.app/login)

## What Can You Do Here?

- **Authenticate:** Log in using Google, Microsoft, or standard username/password combinations.
- **Navigate:** Access secure pages like the Home and Orders page only after authentication.
- **Persist:** Enjoy persistent login sessions that resume even after closing and reopening the browser.

## Technologies Behind the Magic

This application leverages:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Router](https://reactrouter.com)
- [Generouted](https://github.com/oedotme/generouted)
- [TailwindCSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Vite](https://vitejs.dev)
- [Vercel](http://vercel.com)

### File based routing

- Using [`generouted` with type-safe navigation](https://github.com/oedotme/generouted)
- Check [`generouted` features](https://github.com/oedotme/generouted#features) and [conventions](https://github.com/oedotme/generouted#conventions) for more details

### Authentication example

- [Authentication context](./src/context/auth.tsx)
- [Routes guard](./src/config/redirects.tsx)

## Getting started

### Setup and Installation

**Clone the repository:**

```bash
git clone https://github.com/your-github-username/your-project-repo
cd your-project-directory
npm install
```

**Set up environment variables:**
Create a .env file in the root directory and add the following:

```bash
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
VITE_FIREBASE_DATABASE_URL=""
```

or

To use Google and Microsoft OAuth for authentication, obtain credentials from Firebase:

1. **Navigate to Firebase:**
   Go to [Firebase Console](https://firebase.google.com/), create a new project, and enable Google and Microsoft under the "Authentication" section.

2. **Obtain Credentials:**

   - Enable each provider, and Firebase will provide the `Client ID` and `Client Secret`.
   - Store these credentials in your project's `.env` file as an example above.

**Run the application:**

```bash
# start development server · http://localhost:3000
npm run dev
```

Navigate to <http://localhost:3000> on your browser to view the application.

### Deployment

To deploy this project, you can use platforms like Vercel by pushing your code to a linked repository and following their deployment guides.
