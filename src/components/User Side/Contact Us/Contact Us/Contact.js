import React, {useState} from 'react'
import Check from './images/about-check.png'
import { Form, Input, message, Select } from 'antd';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './contact.scss'

function Contact() {

    const [form] = Form.useForm();
    const [discription, setDiscription] = useState('')

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleModelChange = (model) => {
        setDiscription(model)
    }

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
        <div className='contact-form-outer-div'>
            <div className='row contact-form-inner-div'>
                <div className='col-12 col-lg-6 col-xl-6 contact-form-discription'>
                    <p className='title'>Tell Us About<br/>Your Project</p>
                    <p className='discription'>Looking forward to hearing from you. Let's arrange a chat bout your project.</p>
                    <div className='contact-services'>
                        <span><img src={Check} alt='check'/>We Provide Free Consultancy.</span>
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-xl-6'>
                    <div className='contact-page-form-outer-div'>
                        <div className='contact-page-form'>
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
