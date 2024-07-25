import { useState } from 'react'
import './App.css'
import * as util_request from './request/util.request'
import * as axios from 'axios'



function Login() {
    const [passwd, setPasswd] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState('');
    const client = axios.default;
    const base = "http://127.0.0.1:7002"

    const handleSubmit = async (e) => {
        console.log('in handle')
        e.preventDefault();

        // try {
        //     const response = await axios.post('', {
        //         username,
        //         passwd
        //     });
        //     console.log('already post')
        //     if (response.data.success) {
        //         // window.location.href = '/mainview'
        //         console.log('success')
        //     } else {
        //         setError('无账户');
        //     }
        // } catch (error) {
        //     setError('网络请求失败')
        // }
        axios.post('/login', {
            username: username,
            passwd: passwd
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
        
        // TODO: 在原界面上浮显示异常
}

    console.log('ready')
    return (
        <div>
            <div>
                <img src="/site_welcome.png" className="logo" alt="logo" />
            </div>
                
            <div>
                <span className='idol-message'>これからも、アイドルへ{' '}
                    <span style={{ color: '#f34e6c' }}>!</span>
                    <span style={{ color: '#2582c8' }}>!</span>
                    <span style={{ color: '#fec20a' }}>!</span>
                    <span style={{ color: '#8dbafe' }}>!</span>
                    <span style={{ color: '#13be94' }}>!</span>
                </span>
                <br />
                <hr />
                <hr />
                <hr />
                <br />
            </div>

            <form onSubmit={handleSubmit
                // 提交到后端,默认会直接写一个query不安全
            }>
                <label className='font-light'>账号:{' '}</label>
                <input type='username' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <label className='font-light'>密码:{' '}</label>
                <input type='password' placeholder='Password' autoComplete="off" value={passwd} onChange={e => setPasswd(e.target.value)} />
                
                <br />
                <br />

                <div>
                    <button type='submit'>登录</button>
                </div>
            </form>
        </div>
    )
    
}



export default Login