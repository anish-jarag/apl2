React Questions

What is React?
React is a JavaScript library for building user interfaces, maintained by Facebook. It uses a component-based architecture and focuses on declarative programming to make UI development easier.
What are the features of React?

Component-Based Architecture
Virtual DOM for efficient updates
JSX syntax for templating
Unidirectional data flow
Reusable components

What is the difference between a functional and a class component?
Functional components are stateless and use React hooks for state management.
Class components are stateful and use this.setState() to manage state.

What is a virtual DOM?
The virtual DOM is a lightweight representation of the actual DOM. React updates the virtual DOM first and then syncs changes with the real DOM for better performance.

Explain React hooks.
React hooks are functions that let you use state and lifecycle features in functional components. Common hooks include:
useState for state management
useEffect for side effects
useContext for context API
Node.js Questions

What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to build scalable, server-side applications using JavaScript.

Why is Node.js single-threaded?
Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient for handling multiple connections simultaneously without needing multiple threads.

What is the difference between require() and import in Node.js?
require() is used in CommonJS modules, while import is used in ES6 modules. ES6 modules are now supported in Node.js with the .mjs extension or specific configurations.

What is middleware in Node.js?
Middleware functions are functions that execute during the lifecycle of a request to the server. They can modify the request/response objects, terminate the request-response cycle, or call the next middleware.

Explain the process object in Node.js.
The process object is a global object that provides information and control over the Node.js process. For example:
process.env: Access environment variables
process.argv: Get command-line arguments
process.exit(): Exit the current process
Express.js Questions

What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.

How do you define routes in Express?
javascript
Copy code
const express = require('express');
const app = express();

app.get('/route', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

What is the difference between app.use and app.get?
app.use: Used to apply middleware to all routes or a specific set of routes.
app.get: Used to handle GET requests for a specific endpoint.

What are the different types of middleware in Express?
Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware (e.g., express.json())
Third-party middleware (e.g., cors, body-parser)

What is req and res in Express?
req: Represents the HTTP request and contains information such as query parameters, body, headers, etc.
res: Represents the HTTP response that the server sends back to the client.
