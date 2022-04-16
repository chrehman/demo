import React, { useCallback, useState, useEffect } from 'react'
import { Card, message, Empty, Form, Input, Spin, Select } from 'antd';
import { DeleteOutlined, LockOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './setting.scss'

function Setting() {

    const [emails, setEmails] = useState(null)
    const [ID, setID] = useState(null)
    const [accounts, setAccounts] = useState(null)
    const [secAccount, setSecAccount] = useState(null)
    const [nextPage, setNextPage] = useState(0)
    const [prevPage, setPrevPage] = useState(0)
    const [generate, setGenerate] = useState(false)

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const copyAccount = () => {
        message.success('Copied to Clipboard!')
        const account = `${secAccount.username} ${secAccount.password}`
        navigator.clipboard.writeText(account)
    }

    const changePassword = (values) => {

        message.loading('Updating!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "password": values.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/admin/change_password", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Password Updated!')
            }else{
                message.error('Unable to update!')
            }
        })
        .catch(error => console.log('error', error));
    }

    const getAccounts = useCallback((page) => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "page": page
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/admin/get_accounts", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                setAccounts(result.data)
                setNextPage(result.next)
                setPrevPage(result.prev)
            }
        })
        .catch(error => console.log('error', error));

    }, [])

    const getEmails = useCallback(() => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/emails/get_emails", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                setEmails(result.data)
                setID(result.data._id)
            }
        })
        .catch(error => console.log('error', error));
    }, [])

    const handleDelete = (Id) => {

        message.loading('Deleting Account!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "adminId": Id
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/admin/delete_account", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Deleted Successfully!')
                getAccounts(1)
            }else{
                message.error('Unable to delete!')
            }
        })
        .catch(error => console.log('error', error));

    }

    const generateAccount = () => {
        setGenerate(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/admin/generate_account", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                setTimeout(() => {
                    setSecAccount(result.data)
                    getAccounts(1)
                }, 2000);
            }
        })
        .catch(error => console.log('error', error));
    }

    const updateEmail = (values) => {
        message.loading('Updating Email!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": ID,
            "email": values.email,
            "password": values.password,
            "type": values.type
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/emails/update_emails", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Updated Successfully, Make sure to turn on unrestricted access in your gmail account setting.')
                getEmails()
            }else{
                message.error('Unable to update!')
            }
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getAccounts(1)
      getEmails()

    }, [getAccounts, getEmails])
    

  return (
    <div>
        <div className='row'>
            <div className='col-12 col-lg-6 setting-card-outer-div'>
                <Card title="Change Password" className='setting-card' bordered={false}>
                    <Form 
                        onFinish={changePassword}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                    >

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            })
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <button htmlType="submit" className='setting-btn'>Change</button>
                        </Form.Item>

                    </Form>
                </Card>
            </div>
            <div className='col-12 col-lg-6 setting-card-outer-div'>
                <Card title="Secondary Admins" className='setting-card' bordered={false}>
                    {
                        accounts !== null ?
                        <div className='accounts-div'>
                            {
                                accounts.map(account => 
                                    <div className='single-account' key={account._id}>
                                        <p>{account.username}</p>
                                        <span onClick={() => handleDelete(account._id)}><DeleteOutlined /></span>
                                    </div>
                                )
                            }
                            <div className='accounts-btn-div'>
                                <button onClick={() => getAccounts(prevPage)} disabled={prevPage === 0 ? true : false} className={prevPage === 0 ? 'disabled' : 'active'}>prev</button>
                                <button onClick={() => getAccounts(nextPage)} disabled={nextPage === 0 ? true : false} className={nextPage === 0 ? 'disabled' : 'active'}>next</button>
                            </div>
                        </div> :
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    }
                </Card>
            </div>
        </div>
        <Card title="Generate Account" className='setting-card' bordered={false}>
            {
                generate ? 
                <div>
                    {
                        secAccount === null ?
                        <div className='generate-spin-div'>
                            <div>
                                <Spin size="large" />
                                <p>Generating...</p>
                            </div>
                        </div> :
                        <div className='generated-account-div'>
                            <p><span>Username:</span> {secAccount.username}</p>
                            <p><span>Password:</span> {secAccount.password}</p>
                            <p><span>Account Type:</span> {secAccount.accountType}</p>
                            <button onClick={copyAccount}>Copy</button>
                        </div>
                    }
                </div> :
                <div onClick={generateAccount} className='generate-btn-div'>
                    <div>
                        <span><PlusCircleOutlined /></span>
                        <p>Generate Account</p>
                    </div>
                </div>
            }
        </Card>
        <div className='emails-card-outer-div '>
            <Card title="Email Accounts" className='setting-card' bordered={false}>
                {
                    emails !== null ? 
                    <div className='emails-div'>
                        <p><span>Client Email:</span> {emails.clientEmail}</p>
                        <p><span>Applicant Email:</span> {emails.applicantEmail}</p>
                        <p><span>Sending Email:</span> {emails.sendingEmail}</p>
                    </div> :
                    <div>No Emails Set!</div>
                }
                <div>
                    <Form 
                        onFinish={updateEmail}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                    >

                        <Form.Item
                            name="type"
                            label="Email Type"
                            rules={[
                            {
                                required: true,
                                message: 'Please select email type!',
                            },
                            ]}
                        >
                            <Select placeholder='Select...'>
                                <Select.Option value="client">Client</Select.Option>
                                <Select.Option value="applicant">Applicant</Select.Option>
                                <Select.Option value="sending">Sending</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item 
                            name={'email'}
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!'
                                },
                            ]}
                        >
                            <Input placeholder='Email'/>
                        </Form.Item>

                        <Form.Item 
                            name={'password'}
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email password!'
                                },
                            ]}
                        >
                            <Input.Password placeholder='password'/>
                        </Form.Item>
                        
                        <Form.Item>
                            <button htmlType="submit" className='setting-btn'>Update</button>
                        </Form.Item>

                    </Form>
                </div>
            </Card>
        </div>
        
    </div>
  )
}

export default Setting