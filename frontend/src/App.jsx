import { useState } from 'react'
import './App.css'
import * as util_request from './request/util.request'
import * as websocket_client from './request/client.websocket'
import Login from './login'
// 这里不知为何不能用{Login}

function App() {
  const [title, setTitle] = useState("");

  util_request.getTitle().then(result => {
    console.log(title)
    setTitle(result);
  })

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Login />
    </>
    
  )
}

export default App
