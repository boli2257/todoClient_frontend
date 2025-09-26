import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export const Login = ({ setIsLoggedIn }) => {
    const [username, setUserName] = useState('')
    const [pw, setPw] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username + ", " + pw);
        import.meta.env.VITE_USERNAME == username && import.meta.env.VITE_PW == pw ? setIsLoggedIn(true) : setIsLoggedIn(false)

    }

    return (
        <div>
            <Form className='shadow p-3 rounded'>
                <h3>My Todos</h3>
                <FormGroup>
                    <Input placeholder="Username" type="text" value={username}
                        onChange={(e) => setUserName(e.target.value)} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input placeholder="Password" type="password" value={pw}
                        onChange={(e) => setPw(e.target.value)} />
                </FormGroup>
                {' '}
                <Button color='primary' onClick={handleSubmit}> LogIn </Button>
            </Form>
        </div>
    )
}
