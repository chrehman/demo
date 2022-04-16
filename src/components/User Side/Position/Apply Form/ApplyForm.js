import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { message, Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './applyform.scss'
var parse = require('html-react-parser');

function ApplyForm(props) {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleForm = (values) => {
        message.loading('Sending Application!')
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("http://localhost:5000/applicant/s3Url", requestOptions)
        .then(response => response.json())
        .then(async result => {
            const UploadUrl = result.UploadUrl

            if(UploadUrl !== undefined){

                message.loading('Sending Application!')
    
                await fetch(UploadUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': "multipart/form-data"
                    },
                    body: values.file1
                })
        
                const imageUrl1 = UploadUrl.split('?')[0]
        
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
        
                var raw = JSON.stringify({
                    "name": values.name,
                    "email": values.email,
                    "phone": values.phone,
                    "resume": imageUrl1,
                    "position": props.Vacancie.title
                });
        
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
        
                fetch("http://localhost:5000/applicant/add_applicant", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result.code === 200){
                        message.success('Application Sent!')
                    }else{
                        message.error('Unable to send application!')
                    }
                })
                .catch(error => console.log('error', error));
    
            }else {
                message.error('Unable to send application!')
            }
        })
        .catch(error => console.log('error', error));        
    }

    return (
        <div className='job-details-outer-div'>
            {
                props.Vacancie !== null ?
                <div className='row job-details-inner-div'>
                    <div className='col-12 col-lg-6 col-xl-6 job-requirements-div'>
                        <p className='heading'>About This Role</p>
                        <p>{props.Vacancie.role}</p>
                        <p className='heading'>Description</p>
                        <p>{parse(props.Vacancie.discription)}</p>
                    </div> 
                    <div className='col-12 col-lg-6 col-xl-6 job-apply-form-div'>
                        <span className='apply-form-title'>APPLY NOW.<div className='apply-form-title-underline'/></span>

                        <Form
                            onFinish={handleForm}
                            onFinishFailed={onFinishFailed}
                            layout={'vertical'}
                            className='apply-form'
                        >
                            <Form.Item 
                                name={'name'}
                                rules={[
                                    {
                                    required: true,
                                    message: 'This field is requried!'
                                    },
                                ]}
                                label="Full Name"
                            >
                                <Input placeholder='Your Full Name'/>
                            </Form.Item>

                            <Form.Item 
                                name={'email'}
                                rules={[
                                    {
                                    required: true,
                                    message: 'This field is requried!'
                                    },
                                ]}
                                label="Email"
                            >
                                <Input placeholder='Your Email'/>
                            </Form.Item>

                            <Form.Item 
                                name={'phone'}
                                rules={[
                                    {
                                    required: true,
                                    message: 'This field is requried!'
                                    },
                                ]}
                                label="Phone Number"
                            >
                                <Input placeholder='Your Phone Number'/>
                            </Form.Item>

                            <Form.Item 
                                name={'file1'}
                                rules={[
                                    {
                                    required: true,
                                    message: 'This field is requried!'
                                    },
                                ]}
                                label="Documents"
                            >
                                <Upload name="logo">
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item>
                                <button className='applicant-submit-btn' htmlType="submit" >Send Application</button>
                            </Form.Item>
                        </Form>
                        <div className='job-share-div'>
                            <p>SHARE THIS JOB</p>
                            <div>
                                <span className='apply-form-icon'><FaFacebookF /></span>
                                <span className='apply-form-icon'><FaTwitter /></span>
                                <span className='apply-form-icon'><FaLinkedinIn /></span>
                                <span className='apply-form-icon'><FaInstagram /></span>
                            </div>
                        </div>
                    </div>
                </div> :
                <div/>
            }
            
        </div>
    )
}

export default ApplyForm
