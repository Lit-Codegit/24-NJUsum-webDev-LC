import { useState } from 'react'
import appLogo from './res/logo1.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as util_request from './request/util.request'
import * as websocket_client from './request/client.websocket'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("");

  util_request.getTitle().then(result => {
    console.log(title)
    setTitle(result);
  })

  return (
    <div>
      <head>
        <link href="fonts/YuMincho.ttf" rel="stylesheet"/>
      </head>
      <body>
        <img src={appLogo} className="logo" alt="logo" />
        <span className='idol-message'>これからも、アイドル</span>
          
      </body>
    </div>
  )
}

export default App
