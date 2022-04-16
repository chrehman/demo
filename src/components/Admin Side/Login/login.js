import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import './loginform.scss';
import logo from './images/logo.png';

function Login() {

    const error = (msg) => {
        message.error(msg);
    };
    
    const process = (msg) => {
        message.loading(msg);
    };

    const onFinish = (values) => {
        process('Checking Credentials!')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            "username": values['username'],
            "password": values['password']
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:5000/admin/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result['code'] === 200){
                localStorage.setItem('token', result['token']);
                localStorage.setItem('userId', result['user']);
                window.location = 'http://localhost:3000/admin/user_dashboard';
            }else{
                error(result['message']);
            }
        })
        .catch(error => console.log('error', error));
    };
      
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login-form-outer-div'>
            <div className='login-form-div'>
                <img className='form-logo' src={logo} alt='logo'/>
                <Form
                    name="basic"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        className='input-container'
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder='Username' className='username-field'/>
                    </Form.Item>
            
                    <Form.Item
                        className='input-container'
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' className='password-field' />
                    </Form.Item>
            
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
            
                    <Form.Item className='form-btn'>
                        <Button htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
