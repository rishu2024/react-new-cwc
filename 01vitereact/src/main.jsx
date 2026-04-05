import React from 'react'
import ReactDOM from 'react-dom/client';
import { jsx as _jsx } from 'react/jsx-runtime';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App || chai</h1>
    </div>
  )
}
// const reactelement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// }
const anotherelement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotheruser = "chai aur code"

const reactelement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactelement
  // <App/>  
) 