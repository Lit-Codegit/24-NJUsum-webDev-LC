import { useState } from 'react'
import Ayumi from './res/logo1.png'
import './App.css'
import * as util_request from './request/util.request'
import * as websocket_client from './request/client.websocket'

function App() {
  const [passwd, setPasswd] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");

  util_request.getTitle().then(result => {
    console.log(title)
    setTitle(result);
  })

  return (
    <div>
      <body>
        <img src="/site_welcome.png" className="logo" alt="logo" />
        <span className='idol-message'>これからも、アイドルへ{' '}
            <span style={{ color: '#f34e6c' }}>!</span>
            <span style={{ color: '#2582c8' }}>!</span>
            <span style={{ color: '#fec20a' }}>!</span>
            <span style={{ color: '#8dbafe' }}>!</span>
            <span style={{ color: '#13be94' }}>!</span>
        </span>
        
        
        <div>
          <input name placeholder='Username'/>
        </div>
          
      </body>
    </div>
  )
}

export default App
