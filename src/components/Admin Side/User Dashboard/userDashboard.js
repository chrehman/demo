import React, { useEffect, useCallback, useState } from 'react';
import { Card, message, Empty, Form, Input, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './user_dashboard.scss'
var parse = require('html-react-parser');

function UserDashboard() {

    const [form] = Form.useForm();
    const [newlettersDiscription, setNewlettersDiscription] = useState('')
    const [discription, setDiscription] = useState('')

    const [emails, setEmails] = useState(null);
    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(0);

    const [mails, setMails] = useState(null);
    const [mailprevPage, setMailPrevPage] = useState(0);
    const [mailnextPage, setMailNextPage] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    const handleNewlettersDiscription = (model) => {
        setNewlettersDiscription(model)
    }

    const handleDiscription = (model) => {
        setDiscription(model)
    }

    const error = (msg) => {
        message.error(msg);
    };

    const process = (msg) => {
        message.loading(msg);
    };

    const success = (msg) => {
        message.success(msg);
    };

    const cancel = () => {
        form.setFieldsValue({
            email: '',
            subject: '',
            message: '',
        });
        setModalVisible(false);
    };

    const showModel = (mail) => {
        form.setFieldsValue({
            email: mail,
        });
        setModalVisible(true)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const sendMail = (values) => {
        message.loading('Sending Mail!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": values.email,
            "subject": values.subject,
            "message": discription
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/contact/send_mail", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Mail Sent!')
            }else{
                message.error('Unable to send mail!')
            }
        })
        .catch(error => console.log('error', error));
    }

    const getEmails = useCallback((pageNo) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", localStorage.getItem('token'));
    
        var raw = JSON.stringify({
            "pageNo": pageNo,
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:5000/newsletter/get_email", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result['code'] === 200){
                setNextPage(result.next)
                setPrevPage(result.prev)
                setEmails(result.emails)
            }else{
                error(result['message']);
            }
        })
        .catch(error => console.log('error', error));
    }, []);

    const getMails = useCallback((pageNo) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "page": pageNo
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/mail/get_mails", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                setMails(result.data)
                setMailNextPage(result.next)
                setMailPrevPage(result.prev)
            }
        })
        .catch(error => console.log('error', error));
    }, []);

    const deleteEmail = (email) => {
        process('Deleting Email!')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", localStorage.getItem('token'));
    
        var raw = JSON.stringify({
            "email": email
        });
    
        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:5000/newsletter/delete_email", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result['code'] === 200){
                success('Email Deleted Successfully!')
                var list = []
                emails.map(Email => {
                    if(Email !== email){
                        list.push(Email)
                    }
                    return 0;
                })
                setEmails(list)
            }else{
                error(result['message']);
            }
        })
        .catch(error => console.log('error', error));
    }

    const deleteMail = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "mailId": id
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/mail/delete_mail", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Deleted Successfully!')
                getMails(1)
            }else{
                message.error('Unable to delete!')
            }
        })
        .catch(error => console.log('error', error));
    }

    const sendNewsletters = (values) => {
        message.loading('Sending Mails!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "subject": values.subject,
            "message": newlettersDiscription
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/contact/send_newsletter", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Mail Schedullar Active!')
            }else{
                message.error('Unable to send mail!')
            }
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getEmails(1)
        getMails(1)
    }, [getEmails, getMails]);

    return (
        <div>
            <div className='email-handling-div cards-outer-div'>
                <div className='email-handling-card-outer-div'>
                    <Card title="Newsletter Emails" className='user-email-card' bordered={false}>
                        {
                            emails !== null && emails.length !== 0 ?
                            <div className='user-email-card-div'>
                                {
                                    emails.map(email => 
                                        <div className='user-email-div' key={email}>
                                            <p>{email}</p>
                                            <span onClick={() => deleteEmail(email)}><DeleteOutlined /></span>
                                        </div>
                                    )
                                }
                                <div className='mails-btn-div'>
                                    <button onClick={() => getEmails(prevPage)} disabled={prevPage === 0 ? true : false} className={prevPage === 0 ? 'disabled' : 'active'}>prev</button>
                                    <button onClick={() => getEmails(nextPage)} disabled={nextPage === 0 ? true : false} className={nextPage === 0 ? 'disabled' : 'active'}>next</button>
                                </div>
                            </div> :
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        }
                    </Card>
                </div>
                <div className='email-handling-card-outer-div'>
                    <Card title="Send Mail" className='send-email-card' bordered={false}>
                        <div className='send-email-div'>
                            <Form
                                onFinish={sendNewsletters}
                                onFinishFailed={onFinishFailed}
                                layout={'vertical'}
                                form={form}
                            >
                                <Form.Item 
                                name={'subject'}
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your subject!'
                                    },
                                ]}
                                label="Subject:">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={'discription'}>
                                    <FroalaEditorComponent tag='textarea' model={newlettersDiscription} onModelChange={handleNewlettersDiscription}/>
                                </Form.Item>
                                <Form.Item>
                                    <div className='d-flex justify-content-center'>
                                        <button className='send-mail-btn' htmlType="submit">Submit</button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>

            <div className='cards-outer-div'>
                <Card title="Users Mails" className='user-mails-card' bordered={false}>
                    {
                        mails !== null ?
                        <div>
                            {
                                mails.map(mail => <div key={mail._id} className='user-mail-div'>
                                        <div>
                                            <p className='labels'><span>Name:</span> {mail.name}</p>
                                            <p className='labels'><span>Sent At:</span> {mail.createdAt} <span className='delete-btn' onClick={() => deleteMail(mail._id)}><DeleteOutlined /></span></p>
                                        </div>
                                        <p className='labels'><span>Email:</span> <button onClick={() => showModel(mail.email)}>{mail.email}</button></p>
                                        <p className='labels'><span>Seeking:</span> {mail.seeking}</p>
                                        <p className='labels'><span>Hear About Us:</span> {mail.hearAboutUs}</p>
                                        <p className='labels'><span>Description:</span></p>
                                        <p>{parse(mail.discription)}</p>
                                        <hr/>
                                    </div>)
                            }
                            <div className='mails-btn-div'>
                                <button onClick={() => getMails(mailprevPage)} disabled={mailprevPage === 0 ? true : false} className={mailprevPage === 0 ? 'disabled' : 'active'}>prev</button>
                                <button onClick={() => getMails(mailnextPage)} disabled={mailnextPage === 0 ? true : false} className={mailnextPage === 0 ? 'disabled' : 'active'}>next</button>
                            </div>
                        </div> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    }
                </Card>
            </div>

            <Modal
                title="Send Mail"
                centered
                visible={modalVisible}
                footer={null}
                onCancel={cancel}
            >
                
                <div className='dashboard-model-div'>
                    <Form
                        onFinish={sendMail}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                        form={form}
                    >
                        <Form.Item 
                        name={'email'}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            },
                        ]}
                        label="Email:">
                            <Input/>
                        </Form.Item>
                        <Form.Item 
                        name={'subject'}
                        rules={[
                            {
                            required: true,
                            message: 'Please input your subject!'
                            },
                        ]}
                        label="Subject:">
                            <Input />
                        </Form.Item>
                        <Form.Item name={'discription'}>
                            <FroalaEditorComponent tag='textarea' model={discription} onModelChange={handleDiscription}/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    );
}

export default UserDashboard;
