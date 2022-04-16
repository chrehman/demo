import React,{useState} from 'react'
import { AiFillCheckSquare } from 'react-icons/ai';
import Staff from './images/Staff&Resource.png'
import Product from './images/ProductDevelopment.png'
import Team from './images/Team.png'
import { Modal, Form, Input, Select, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './package.scss'
import FroalaEditorComponent from 'react-froala-wysiwyg';


function Packages() {

    const [form] = Form.useForm();
    const [ResourceForm] = Form.useForm();
    const [DevelopmentForm] = Form.useForm();
    const [DedicatedForm] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Resource, setResource] = useState(false);
    const [Development, setDevelopment] = useState(false);
    const [Dedicated, setDedicated] = useState(false);
    const [Package, setPackage] = useState({});
    const [discription, setDiscription] = useState('')
    const [bgColor, setbgColor] = useState('#ffffff');

    const handleModelChange = (model) => {
        setDiscription(model)
    }

    const resetPackage = () => {
        setPackage({
            name: "",
            email: "",
            phone: "",
            package: "",
            developerNeed: "",
            duration: "",
            projectDomain: "",
            platform: "",
            developerCount: ""
        })

        setResource(false)
        setDevelopment(false)
        setDedicated(false)
    }

    const handleDropdown = (values) => {
        resetPackage()
        var obj = Package
        var keys = Object.keys(values)
        if(keys[0] === 'developerNeed'){
            obj['package'] = 'Staff/Resource Augmentation'
            setResource(true)
            setbgColor('#F45B21')
        }else if(keys[0] === 'projectDomain'){
            obj['package'] = 'Product Development'
            setDevelopment(true)
            setbgColor('#2E2E2E')
        }else{
            obj['package'] = 'Dedicated Team'
            setDedicated(true)
            setbgColor('#6A2D94')
        }
        obj[keys[0]] = values[keys[0]]
        obj[keys[1]] = values[keys[1]]
        setPackage(obj)
        setIsModalVisible(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
        ResourceForm.resetFields();
        DevelopmentForm.resetFields();
        Dedicated.resetFields();
        setDiscription('')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const sendMail = (values) => {
        message.loading('Sending Mail!')

        var obj = Package
        var keys = Object.keys(values)
        obj[keys[0]] = values[keys[0]]
        obj[keys[1]] = values[keys[1]]
        obj[keys[2]] = values[keys[2]]
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": obj.name,
            "email": obj.email,
            "phone": obj.phone,
            "discription": discription,
            "package": obj.package,
            "developerNeed": obj.developerNeed,
            "duration": obj.duration,
            "projectDomain": obj.projectDomain,
            "platform": obj.platform,
            "developerCount": obj.developerCount
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
        <div className='packages-outer-div'>
            <span className='packages-title'>OUR PRICING.<div className='packages-title-underline'/></span>
            <div className='packages-cards'>

                <div className='packages-card'>
                    <div className='package-title-div'>
                        <img src={Staff} alt='staff-icon'/> 
                        <p className='package-title'>Staff/Resource Augmentation</p>
                        <p className='package-discription'>Hire top talent at a fraction of the cost</p>
                    </div>
                    <div className='package-services-div'>
                        <p className='package-services-title'>Staff/Resource Augmentation</p>
                        <div className='package-services'>
                            <span><AiFillCheckSquare className='check-icon'/> Vetted developer profiles in 48 hours</span>
                            <span><AiFillCheckSquare className='check-icon'/> Staffing within 1-2 weeks</span>
                            <span><AiFillCheckSquare className='check-icon'/> Availability of developers in every tech stack</span>
                            <span><AiFillCheckSquare className='check-icon'/> No hiring and retention stress</span>
                            <span><AiFillCheckSquare className='check-icon'/> Management and payroll freedom</span>
                        </div>
                    </div>
                    <Form
                        onFinish={handleDropdown}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                        className='package-dropdown-div'
                        form={ResourceForm}
                    >
                        <Form.Item 
                        name={'developerNeed'}
                        rules={[
                            {
                            required: true,
                            message: 'This field is requried!'
                            },
                        ]}
                        label="How early do you need a developer?">
                            <Select placeholder='Select...'>
                                <Select.Option value="Within a week">Within a week</Select.Option>
                                <Select.Option value="1 week plus">1 week plus</Select.Option>
                                <Select.Option value="As early as possible">As early as possible</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                        name={'duration'}
                        rules={[
                            {
                            required: true,
                            message: 'This field is requried!'
                            },
                        ]}
                        label="For how long?">
                            <Select placeholder='Select...'>
                                <Select.Option value="1-3 months">1-3 months</Select.Option>
                                <Select.Option value="3-6 months">3-6 months</Select.Option>
                                <Select.Option value="6-10 months">6-10 months</Select.Option>
                                <Select.Option value="10+ months">10+ months</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <div className='d-flex justify-content-center'>
                                <button className='package-btn' htmlType="submit" >Get A Free Quote</button>
                            </div>
                        </Form.Item>
                    </Form>
                    <div className='package-footer'/>
                </div>

                <div className='packages-card-2'>
                    <div className='package-title-div'>
                        <img src={Product} alt='product-icon'/> 
                        <p className='package-title'>Product Development</p>
                        <p className='package-discription'>Get your products built from scratch</p>
                    </div>
                    <div className='package-services-div'>
                        <p className='package-services-title'>Product Development</p>
                        <div className='package-services'>
                            <span><AiFillCheckSquare className='check-icon'/> Free Cost estimation</span>
                            <span><AiFillCheckSquare className='check-icon'/> Expert UI/UX design</span>
                            <span><AiFillCheckSquare className='check-icon'/> Prototype and wireframing</span>
                            <span><AiFillCheckSquare className='check-icon'/> Premium code quality</span>
                            <span><AiFillCheckSquare className='check-icon'/> Free dedicated project management</span>
                            <span><AiFillCheckSquare className='check-icon'/> Free dedicated quality assurance</span>
                            <span><AiFillCheckSquare className='check-icon'/> Timely delivery</span>
                            <span><AiFillCheckSquare className='check-icon'/> Weekly sprints</span>
                        </div>
                    </div>
                    <Form
                        onFinish={handleDropdown}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                        className='package-dropdown-div'
                        form={DevelopmentForm}
                    >
                        <Form.Item 
                        name={'projectDomain'}
                        rules={[
                            {
                            required: true,
                            message: 'This field is requried!'
                            },
                        ]}
                        label="What are you looking to develop?">
                            <Select placeholder='Select...'>
                                <Select.Option value="MVP">MVP</Select.Option>
                                <Select.Option value="Complete Product Development">Complete Product Development</Select.Option>
                                <Select.Option value="UI/UX Design">UI/UX Design</Select.Option>
                                <Select.Option value="Working Prototype">Working Prototype</Select.Option>
                                <Select.Option value="Something Else">Something Else</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                        name={'platform'}
                        rules={[
                            {
                            required: true,
                            message: 'This field is requried!'
                            },
                        ]}
                        label="For which platform?">
                            <Select placeholder='Select...'>
                                <Select.Option value="Web">Web</Select.Option>
                                <Select.Option value="Mobile">Mobile</Select.Option>
                                <Select.Option value="Desktop">Desktop</Select.Option>
                                <Select.Option value="All of them">All of them</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <div className='d-flex justify-content-center'>
                                <button className='package-btn' htmlType="submit" >Get A Free Quote</button>
                            </div>
                        </Form.Item>
                    </Form>
                    <div className='package-footer'/>
                </div>

                <div className='packages-card-3'>
                    <div className='package-title-div'>
                        <img src={Team} alt='team-icon'/>
                        <p className='package-title'>Dedicated Team</p>
                        <p className='package-discription'>Hire expert development team for succeed</p>
                    </div>
                    <div className='package-services-div'>
                        <p className='package-services-title'>Dedicated Team</p>
                        <div className='package-services'>
                            <span><AiFillCheckSquare className='check-icon'/> Transparent pricing system</span>
                            <span><AiFillCheckSquare className='check-icon'/> Personal extended team exclusively working on your project</span>
                            <span><AiFillCheckSquare className='check-icon'/> Access to a wide range of IT experts from multiple domains</span>
                            <span><AiFillCheckSquare className='check-icon'/> Project manager allocated by DeepFusion</span>
                            <span><AiFillCheckSquare className='check-icon'/> Team flexibility and scalability</span>
                            <span><AiFillCheckSquare className='check-icon'/> Direct communication with developers</span>
                            <span><AiFillCheckSquare className='check-icon'/> Extend and reduce team according to your requirements</span>
                        </div>
                    </div>

                    <Form
                        onFinish={handleDropdown}
                        onFinishFailed={onFinishFailed}
                        layout={'vertical'}
                        className='package-dropdown-div'
                        form={DedicatedForm}
                    >
                        <Form.Item 
                        name={'developerCount'}
                        rules={[
                            {
                            required: true,
                            message: 'This field is requried!'
                            },
                        ]}
                        label="How many developers do you need?">
                            <Select placeholder='Select...'>
                                <Select.Option value="2-6 developer">2-6 developer</Select.Option>
                                <Select.Option value="6-10 developer">6-10 developer</Select.Option>
                                <Select.Option value="10+ developer">10+ developer</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                        name={'duration'}
                        rules={[
                            {
                            required: true,
                            message: 'This field is requried!'
                            },
                        ]}
                        label="For how long?">
                            <Select placeholder='Select...'>
                                <Select.Option value="1-3 months">1-3 months</Select.Option>
                                <Select.Option value="3-6 months">3-6 months</Select.Option>
                                <Select.Option value="6-10 months">6-10 months</Select.Option>
                                <Select.Option value="10+ months">10+ months</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <div className='d-flex justify-content-center'>
                                <button className='package-btn' htmlType="submit" >Get A Free Quote</button>
                            </div>
                        </Form.Item>
                    </Form>
                    <div className='package-footer'/>
                </div>
            </div>

            <div className='pricing-model-outer-div'>
                <Modal centered={true} closable={false} footer={false} visible={isModalVisible}>
                    <div style={{backgroundColor: bgColor}} className='model-inner-div'>
                        <div className='model-close-btn-div'>
                            <span onClick={handleCancel}><CloseOutlined /></span>
                        </div>
                        {
                            Resource ? 
                            <div className='package-title-div'>
                                <img src={Staff} alt='staff-icon'/> 
                                <p className='package-title'>Staff/Resource Augmentation</p>
                                <p className='package-discription'>Hire top talent at a fraction of the cost</p>
                            </div> : Development ?
                            <div className='package-title-div'>
                                <img src={Product} alt='product-icon'/> 
                                <p className='package-title'>Product Development</p>
                                <p className='package-discription'>Get your products built from scratch</p>
                            </div> : Dedicated ?
                            <div className='package-title-div'>
                                <img src={Team} alt='team-icon'/>
                                <p className='package-title'>Dedicated Team</p>
                                <p className='package-discription'>Hire expert development team for succeed</p>
                            </div> : <div/>
                        }
                        
                        <Form
                            onFinish={sendMail}
                            onFinishFailed={onFinishFailed}
                            layout={'vertical'}
                            form={form}
                        >
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
                                    <button className={Resource ? 'model-btn orange' : Development ? 'model-btn black' : Dedicated ? 'model-btn purple' : 'model-btn'} htmlType='submit'>Send</button>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>

        </div>
    )
}

export default Packages
