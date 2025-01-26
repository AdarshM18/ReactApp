<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDom from 'react-dom/client'
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App | Hi!</h1>
    </div>
  );
}

// Creating a React element using React.createElement
const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me!!'
);

const anotherUser = "React with code!"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Here!!',
  anotherUser
)

// ReactDom.createElement(document.getElementById('root')).render(
//   reactElement
// )

// // Another element using JSX
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );


// Rendering the JSX element using createRoot
const root = createRoot(document.getElementById('root'));
root.render(reactElement);
>>>>>>> 1c90bb3681a1bb9c905bf629c694be588db06211
