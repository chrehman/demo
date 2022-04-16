import React,{useState} from 'react'
import {AiOutlineProject, AiOutlineClockCircle, AiOutlineQuestionCircle} from 'react-icons/ai'
import {RiTeamLine} from 'react-icons/ri'
import { CloseOutlined } from '@ant-design/icons';
import './collaborate.scss'
import { Modal, Form, Input, Select, message } from 'antd';
import FroalaEditorComponent from 'react-froala-wysiwyg';

function Collaborate() {

    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Project, setProject] = useState(false);
    const [Developer, setDeveloper] = useState(false);
    const [Team, setTeam] = useState(false);
    const [bgColor, setbgColor] = useState('#ffffff');
    const [discription, setDiscription] = useState('')

    const handleModelChange = (model) => {
        setDiscription(model)
    }

    const handleModel = (id) => {
        switch (id) {
            case 'Project':
                setProject(true)
                setbgColor('#F45B21')
                break;
            case 'Developer':
                setDeveloper(true)
                setbgColor('#6A2D94')
                break;
            case 'Team':
                setTeam(true)
                setbgColor('#0db813')
                break;
            case 'notSure':
                setbgColor('#201F1F')
                break;
            default:
                break;
        }
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setProject(false)
        setDeveloper(false)
        setTeam(false)
        setIsModalVisible(false);
    };

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
            "phone": values.phone,
            "discription": discription,
            "package": Project ? 'Product Development' : Developer ? 'Staff/Resource Augmentation' : Team ? 'Dedicated Team' : 'Not Sure!',
            "developerNeed": values.developerNeed === undefined ? '' : values.developerNeed,
            "duration": values.duration === undefined ? '' : values.duration,
            "projectDomain": values.projectDomain === undefined ? '' : values.projectDomain,
            "platform": values.platform === undefined ? '' : values.platform,
            "developerCount": values.developerCount === undefined ? '' : values.developerCount
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/pricing/add_package_request", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Mail Sent!')
                form.resetFields();
                setDiscription('')
            }else{
                message.error('Unable to send!')
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className='collaborate-outer-div'>
            <span className='collaborate-title'>Choose How You Want To Collaborate.<div className='collaborate-title-underline'/></span>
            <div className='collaborate-cards-div'>
                <div className='collaborate-cards'>
                    <div onClick={() => handleModel('Project')} className='collaborate-card'>
                        <div>
                            <p className='icon1'><AiOutlineProject className='collaborator-icon'/></p>
                            <p className='collaborate-card-title'>Project-Based</p>
                        </div>
                    </div>

                    <div onClick={() => handleModel('Developer')} className='collaborate-card'>
                        <div>
                            <p className='icon2'><AiOutlineClockCircle className='collaborator-icon'/></p>
                            <p className='collaborate-card-title'>Hire Developer on Hourly Basis</p>
                        </div>
                    </div>

                    <div onClick={() => handleModel('Team')} className='collaborate-card'>
                        <div>
                            <p className='icon3'><RiTeamLine className='collaborator-icon'/></p>
                            <p className='collaborate-card-title'>Dedicated Team of Developers</p>
                        </div>
                    </div>

                    <div onClick={() => handleModel('notSure')} className='collaborate-card'>
                        <div>
                            <p className='icon4'><AiOutlineQuestionCircle className='collaborator-icon'/></p>
                            <p className='collaborate-card-title'>I'm not sure</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal centered={true} closable={false} footer={false} visible={isModalVisible}>
                <div style={{backgroundColor: bgColor}} className='collaboration-model-inner-div'>
                    <div className='model-close-btn-div'>
                        <span onClick={() => handleCancel()}><CloseOutlined /></span>
                    </div>
                    {
                        Project ? 
                        <div className='package-title-div'>
                            <p><AiOutlineProject className='collaborator-icon'/></p>
                            <p className='package-title'>Project-Based</p>
                        </div> : Developer ?
                        <div className='package-title-div'>
                            <p><AiOutlineClockCircle className='collaborator-icon'/></p>
                            <p className='package-title'>Hire Developer on Hourly Basis</p>
                        </div> : Team ?
                        <div className='package-title-div'>
                            <p><RiTeamLine className='collaborator-icon'/></p>
                            <p className='package-title'>Dedicated Team of Developers</p>
                        </div> : 
                        <div className='package-title-div'>
                            <p><AiOutlineQuestionCircle className='collaborator-icon'/></p>
                            <p className='package-title'>I'm not sure</p>
                        </div>
                    }
                    
                    <Form
                        onFinish={sendMail}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                        form={form}
                    >
                        <Form.Item 
                            name={Project ? 'projectDomain' : Developer ? 'developerNeed' : Team ? 'developerCount' : 'notSure'}
                            rules={[
                                {
                                    required: Project || Developer || Team ? true : false,
                                    message: 'This field is requried!'
                                },
                            ]}
                        >
                        {
                            Project ?
                            <Select placeholder='What are you looking to develop?'>
                                <Select.Option value="MVP">MVP</Select.Option>
                                <Select.Option value="Complete Product Development">Complete Product Development</Select.Option>
                                <Select.Option value="UI/UX Design">UI/UX Design</Select.Option>
                                <Select.Option value="Working Prototype">Working Prototype</Select.Option>
                                <Select.Option value="Something Else">Something Else</Select.Option>
                            </Select> : Developer ?
                            <Select placeholder='How early do you need a developer?'>
                                <Select.Option value="Within a week">Within a week</Select.Option>
                                <Select.Option value="1 week plus">1 week plus</Select.Option>
                                <Select.Option value="As early as possible">As early as possible</Select.Option>
                            </Select> : Team ? 
                            <Select placeholder='How many developers do you need?'>
                                <Select.Option value="2-6 developer">2-6 developer</Select.Option>
                                <Select.Option value="6-10 developer">6-10 developer</Select.Option>
                                <Select.Option value="10+ developer">10+ developer</Select.Option>
                            </Select>
                            : <span/>
                        }
                            
                        </Form.Item>
                        <Form.Item
                            name={Project ? 'platform' : Developer ? 'duration' : Team ? 'duration' : 'notSure'}
                            rules={[
                                {
                                required: Project || Developer || Team ? true : false,
                                message: 'This field is requried!'
                                },
                            ]}
                        >
                        {
                            Project ? 
                            <Select placeholder='For which platform?'>
                                <Select.Option value="Web">Web</Select.Option>
                                <Select.Option value="Mobile">Mobile</Select.Option>
                                <Select.Option value="Desktop">Desktop</Select.Option>
                                <Select.Option value="All of them">All of them</Select.Option>
                            </Select> : Developer || Team ?
                            <Select placeholder='For how long?'>
                                <Select.Option value="1-3 months">1-3 months</Select.Option>
                                <Select.Option value="3-6 months">3-6 months</Select.Option>
                                <Select.Option value="6-10 months">6-10 months</Select.Option>
                                <Select.Option value="10+ months">10+ months</Select.Option>
                            </Select> : <span/>                        
                        }
                        </Form.Item>
                        <Form.Item 
                            name={'name'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!'
                                },
                            ]}
                        >
                            <Input placeholder='Full Name'/>
                        </Form.Item>
                        <Form.Item 
                            name={'email'}
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
                            name={'phone'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone no!'
                                },
                            ]}
                        >
                            <Input placeholder='Phone'/>
                        </Form.Item>
                    
                        <Form.Item name={'discription'}>
                            <FroalaEditorComponent tag='textarea' model={discription} onModelChange={handleModelChange}/>
                        </Form.Item>
                        
                        <Form.Item>
                            <div className='d-flex justify-content-center'>
                                <button className={Project ? 'model-btn orange' : Developer ? 'model-btn purple' : Team ? 'model-btn green' : 'model-btn black'} htmlType="submit">Send</button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default Collaborate
