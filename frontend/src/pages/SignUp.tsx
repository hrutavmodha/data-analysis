import { useState } from "react"
import { H1 } from "../components/Headings"
import Input from "../components/Input"
import Button from "../components/Button"

export default function SignUp(){
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const handleClick = () => {
        fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                age: parseInt(age),
                phone: parseInt(phone)
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            alert(data.message)
        })
    }
    return (
        <div>
            <H1>Sign Up</H1>
            <Input type="text" value={name} placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
            <Input type="email" value={email} placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
            <Input type="number" value={age} placeholder="Age" onChange={(e) => {setAge(e.target.value)}}/>
            <Input type="tel" value={phone} placeholder="Contact" onChange={(e) => {setPhone(e.target.value)}}/>
            <Button onClick={handleClick}>Sign Up</Button>
        </div>
    )
}