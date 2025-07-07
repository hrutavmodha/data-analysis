import Button from '../components/Button'
import { H1 } from '../components/Headings'
import Input from '../components/Input'
import { useState } from 'react'
export default function LogIn() {
    const [mail, setMail] = useState<string>('')
    const [tel, setTel] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleClick = () => {
        fetch('http://locahost:8000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: mail,
                phone: parseInt(tel),
                password: password
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            alert(data.message)
        }).catch((error) => {
            alert('Error occured')
            console.log(error)
        })
    }
    return (
        <div>
            <H1>Log In</H1>
            <Input type='email' placeholder='Email' value={mail} onChange={(e) => setMail(e.target.value)} />
            <Input type='tel' placeholder='Phone' value={tel} onChange={(e) => setTel(e.target.value)}/>
            <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={handleClick}>Log In</Button>
        </div>
    )
}