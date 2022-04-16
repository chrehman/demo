import React,{useState, useCallback, useEffect} from 'react'
import { Card, message, Empty, Form, Input, Button, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './applicants.scss'

function ApplicantsDashboard() {

  const [form] = Form.useForm();
  const [discription, setDiscription] = useState('')

  const [applicants, setApplicants] = useState(null)
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

  const getApplicants = useCallback((page) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem('token'));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "page": 1
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/applicant/get_applicants", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.code === 200){
          setApplicants(result.data)
          setNextPage(result.next)
          setPrevPage(result.prev)
        }
      })
      .catch(error => console.log('error', error));
  },[])

  const deleteApplicant = (Id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem('token'));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "applicantId": Id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/applicant/delete_applicant", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.code === 200){
          message.success('Deleted Successfully!')
          getApplicants(1)
        }else{
          message.error('Unable to Delete!')
        }
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getApplicants(1)

  }, [getApplicants])

  return (
    <div>
      <Card title="Applicants Job Request" className='applicants-card' bordered={false}>
        {
          applicants !== null && applicants.length !== 0 ?
          <div>
            {
              applicants.map(applicant => <div className='applicants-div'>
                <div>
                  <p><span>Name:</span> {applicant.name}</p>
                  <p><span>Sent At:</span> {applicant.createdAt} <span className='delete-btn' onClick={() => deleteApplicant(applicant._id)}><DeleteOutlined /></span></p>
                </div>
                <p><span>Email: </span> <button onClick={() => showModel(applicant.email)}>{applicant.email}</button></p>
                <p><span>Phone: </span> {applicant.phone}</p>
                <p><span>Resume: </span> {applicant.resume}</p>
                <p><span>Position: </span> {applicant.position}</p>
                <hr/>
              </div>)
            }
            <div className='applicants-btn-div'>
              <button onClick={() => getApplicants(prevPage)} disabled={prevPage === 0 ? true : false} className={prevPage === 0 ? 'disabled' : 'active'}>prev</button>
              <button onClick={() => getApplicants(nextPage)} disabled={nextPage === 0 ? true : false} className={nextPage === 0 ? 'disabled' : 'active'}>next</button>
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
            label="Email:"
          >
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
            label="Subject:"
          >
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

export default ApplicantsDashboard