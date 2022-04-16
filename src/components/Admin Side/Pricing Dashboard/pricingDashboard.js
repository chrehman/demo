import React,{useState, useCallback, useEffect} from 'react'
import { Card, message, Empty, Form, Input, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './pricing.scss'
import FroalaEditorComponent from 'react-froala-wysiwyg';
var parse = require('html-react-parser');



function PricingDashboard() {

  const [form] = Form.useForm();
  const [discription, setDiscription] = useState('')

  const [requests, setRequests] = useState(null)
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDiscription = (model) => {
    setDiscription(model)
  }

  const showModel = (mail) => {
    form.setFieldsValue({
      email: mail,
    });
    setModalVisible(true)
  }

  const cancel = () => {
    setModalVisible(false);
  };

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

  const getRequests = useCallback((page) => {
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

    fetch("http://localhost:5000/pricing/get_package_requests", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.code === 200){
          setRequests(result.data)
          setNextPage(result.next)
          setPrevPage(result.prev)
        }
      })
      .catch(error => console.log('error', error));
    },[]
  );

  const deleteRequest = (Id) => {
    message.loading('Deleting Request!')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem('token'));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "packageId": Id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/pricing/delete_package_request", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.code === 200){
          message.success('Deleted Successfully!')
          getRequests(1)
        }else{
          message.error('Unable to Delete!')
        }
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
   getRequests(1)

  }, [getRequests])
  

  return (
    <div>
      <Card title="Clients Collaboration Requests" className='collaboration-request-card' bordered={false}>
        {
          requests !== null && requests.length !== 0 ?
          <div>
            {
              requests.map(request => <div className='collaboration-requests-div'>
                <div className='header-fields'>
                  <p className='labels'><span>Name:</span> {request.name}</p>
                  <p className='labels'><span>Sent At:</span> {request.createdAt} <span className='delete-btn' onClick={() => deleteRequest(request._id)}><DeleteOutlined /></span></p>
                </div>
                <p className='labels'><span>Email: </span> <button onClick={() => showModel(request.email)}>{request.email}</button></p>
                <p className='labels'><span>Phone: </span> {request.phone}</p>
                <p className='labels'><span>Package: </span> {request.package}</p>
                {
                  request.package === 'Product Development' ?
                  <div>
                    <p className='labels'><span>Project Domain: </span> {request.projectDomain}</p>
                    <p className='labels'><span>Platform: </span> {request.platform}</p>
                  </div> : request.package === 'Staff/Resource Augmentation' ?
                  <div>
                    <p className='labels'><span>Developer Need: </span> {request.developerNeed}</p>
                    <p className='labels'><span>Duration: </span> {request.duration}</p>
                  </div> : request.package === 'Dedicated Team' ?
                  <div>
                    <p className='labels'><span>How many deleloper needs: </span> {request.developerCount}</p>
                    <p className='labels'><span>Duration: </span> {request.duration}</p>
                  </div> : 
                  <div/>
                }
                <p className='labels'><span>Discription: </span></p>
                <p>{parse(request.discription)}</p>
                <hr/>
              </div>)
            }
            <div className='collaboration-request-btn-div'>
              <button onClick={() => getRequests(prevPage)} disabled={prevPage === 0 ? true : false} className={prevPage === 0 ? 'disabled' : 'active'}>prev</button>
              <button onClick={() => getRequests(nextPage)} disabled={nextPage === 0 ? true : false} className={nextPage === 0 ? 'disabled' : 'active'}>next</button>
            </div>
          </div> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
      </Card>

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
  )
}

export default PricingDashboard