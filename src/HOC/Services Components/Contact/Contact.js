import React, { useState } from 'react'
import { Form, Input, message, Select } from 'antd';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './contact.scss'

function Contact() {

    const [form] = Form.useForm();
    const [discription, setDiscription] = useState('')

    const handleModelChange = (model) => {
        setDiscription(model)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const sendMail = (values) => {
        message.loading('Sending Mail!')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": values.name,
            "email": values.email,
            "seeking": values.seeking,
            "hearAboutUs": values.hearAboutUs,
            "discription": discription
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/mail/add_mail", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Mail Sent!')
                form.resetFields();
                setDiscription('');
            }else{
                message.error('Unable to sent mail!')
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className='contact-team-outer-div'>
            <span className='contact-team-title'>LET'S BUILD SOMETHING TOGETHER.<div className='contact-team-title-underline'/></span>
            <div className='row'>
                <div className='col-12 col-xl-6 contact-team-left-div'>
                    <div>
                        <p className='heading-text'>We are passionate about delivering great software and services.</p>
                        <p className='sub-heading-text'>DeepFusion is a company that builds and implements custom software solutions for its clients. It provides comprehensive software development services and supports with weekly and daily updates at every stage of projects.
                        Apart from that we listens to our customers and continuously improves and updates our services and products to make it work even better and smoother. We strongly focused on monitoring what the B2B and B2C stakeholders needs which allows our software service and teams to cut out unnecessary functionality and ties into the “Keep it simple” rule. 
                        <br/>Including more, In this tech world where emerging technologies continue to affect the way we live, work, and interact with one another. Many of these technological changes are great to adapt, they increase your annual sales, make the services we need more accessible, help us to personalise for our client to take better decisions and design action plans need for future. 
                        </p>
                        <div className='achievements'>
                            <div>
                                <p className='number'>100+</p>
                                <p className='text'>Projects</p>
                            </div>
                            <div>
                                <p className='number'>98%</p>
                                <p className='text'>Clients Satisfaction</p>
                            </div>
                            <div>
                                <p className='number'>2</p>
                                <p className='text'>Awards</p>
                            </div>
                            <div>
                                <p className='number'>7+</p>
                                <p className='text'>Years</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-xl-6 contact-team-right-div'>
                    <div>
                        <div className='contact-team-form'>
                            <Form
                                onFinish={sendMail}
                                onFinishFailed={onFinishFailed}
                                layout={'vertical'}
                                form={form}
                            >
                                <div className='heading-fields'>
                                    <Form.Item
                                        name={'name'}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!'
                                            },
                                        ]}
                                    >
                                        <Input className='name' placeholder='Your Name'/>
                                    </Form.Item>
                                    <Form.Item
                                        name={'email'}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!'
                                            },
                                        ]}
                                    >
                                        <Input className='email' placeholder='Your Email'/>
                                    </Form.Item>
                                </div>
                                <Form.Item
                                    name={'seeking'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select from the list!'
                                        },
                                    ]}
                                >
                                    <Select className="seeking" placeholder='What are you seeking?'>
                                        <Select.Option value="Staff Augmentation">Staff Augmentation</Select.Option>
                                        <Select.Option value="Dedicated Team">Dedicated Team</Select.Option>
                                        <Select.Option value="Fixed Gigs">Fixed Gigs</Select.Option>
                                        <Select.Option value="Career Opportunities">Career Opportunities</Select.Option>
                                        <Select.Option value="General Inquiry">General Inquiry</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name={'hearAboutUs'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select from the list!'
                                        },
                                    ]}
                                >
                                    <Select className="about-us" placeholder='How did you hear about us?'>
                                        <Select.Option value="Social Media">Social Media</Select.Option>
                                        <Select.Option value="Clutch.co/Good Firms or other listings">Clutch.co/Good Firms or other listings</Select.Option>
                                        <Select.Option value="Google Search">Google Search</Select.Option>
                                        <Select.Option value="Email from DeepFusion">Email from DeepFusion</Select.Option>
                                        <Select.Option value="Recommendation from DeepFusion client">Recommendation from DeepFusion client</Select.Option>
                                        <Select.Option value="Data Scraping">Data Scraping</Select.Option>
                                        <Select.Option value="Other">Other</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name={'description'}>
                                    <FroalaEditorComponent tag='textarea' model={discription} onModelChange={handleModelChange}/>
                                </Form.Item>
                                <Form.Item>
                                    <div className='user-contact-form-btn'>
                                        <button htmlType="submit">Send Message</button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
