import React, { useEffect, useCallback, useState } from 'react';
import { Card, message, Empty, Popconfirm, Modal } from 'antd';
import 'react-list-editable/lib/react-list-editable.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import './vacanciesDashboard.scss'
var parse = require('html-react-parser');


function VacancieDashboard() {

    const [Vacancies, setVacancies] = useState(null);
    const [Vacancie, setVacancie] = useState(null);
    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(0);
    const [modalVisible, setmodalVisible] = useState(false);
    const [discription, setDiscription] = useState('')
    const [editDiscription, setEditDiscription] = useState('')

    const handleDiscription = (model) => {
        setDiscription(model)
    }

    const handleEditDiscription = (model) => {
        setEditDiscription(model)
    }

    const getVacancies = useCallback((page) => {
        
        var myHeaders = new Headers();
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

        fetch("http://localhost:5000/vacancie/get_vacancies", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                
                setVacancies(result.data)
                setNextPage(result.next)
                setPrevPage(result.prev)
            }
        })
        .catch(error => message.error(error));
      
    }, []);

    function handleDelete(ID) {
        message.loading('Deleting Vacancie');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": ID
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/vacancie/delete_vacancie", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Deleted Successfully')
                getVacancies(1)
            }
        })
        .catch(error => message.error(error));
    }
      
    function cancel() {
        setmodalVisible(false)
        setVacancie(null)
        setEditDiscription('')
    }

    function Edit(ID){
        setmodalVisible(true)
        Vacancies.forEach(vacancie => {
            if(vacancie._id === ID){
                setVacancie(vacancie)
                setEditDiscription(vacancie.discription)
            }
        });
    }

    const handleEdit = (elementId) => {

        var val = document.getElementById(elementId).value
        var vac = Vacancie

        if(vac === null){
            vac = {}
            vac['title'] = '';
            vac['role'] = '';
        }
        
        if(elementId === 'addtitle' || elementId === 'edittitle'){
            vac.title = val
        }else if(elementId === 'addrole' || elementId === 'editrole'){
            vac.role = val
        }

        setVacancie(vac)
    }

    const UpdateVacancie = () => {
        message.loading('Updating Vacancie!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": Vacancie._id,
            "title": Vacancie.title,
            "discription": editDiscription,
            "role": Vacancie.role,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/vacancie/update_vacancie", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Updated Successfully!')
                getVacancies(1)
            }
        })
        .catch(error => console.log('error', error));
    }

    const AddVacancie = () => {
        message.loading('Adding Vacancie!')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": Vacancie.title,
            "discription": discription,
            "role": Vacancie.role,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/vacancie/add_vacancie", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                message.success('Added Successfully!')
                setVacancie(null)
                document.getElementById('addtitle').value = ''
                document.getElementById('addrole').value = ''
                setDiscription('')
                getVacancies(1)
            }
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getVacancies(1)
    }, [getVacancies]);

  return (
      <div>
        <div className='vacancies-card-outer-div'>
            <Card title="Vacancies" className='vacancies-card' bordered={false}>
                <div>
                    {
                        Vacancies !== null && Vacancies.length !== 0 ?
                        <div>
                            {
                                Vacancies.map(vacancie => <div id={vacancie._id} className='single-vacancie-div'>
                                    <div className='vacancie-edit-btn-div'>
                                        <p className='heading'>{vacancie.title}</p>
                                        <div>
                                            <span className='edit' onClick={() => {Edit(vacancie._id)}}><EditOutlined /></span>
                                            <Popconfirm
                                                title="Are you sure to delete this task?"
                                                onConfirm={() => {handleDelete(vacancie._id)}}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <span className='delete'><DeleteOutlined /></span>
                                            </Popconfirm>
                                        </div>
                                    </div>
                                    <p>{parse(vacancie.discription)}</p>
                                </div>)
                            }
                            <div className='vacancies-btn-div'>
                                <button onClick={() => getVacancies(prevPage)} disabled={prevPage === 0 ? true : false} className={prevPage === 0 ? 'disabled' : 'active'}>prev</button>
                                <button onClick={() => getVacancies(nextPage)} disabled={nextPage === 0 ? true : false} className={nextPage === 0 ? 'disabled' : 'active'}>next</button>
                            </div>
                        </div> 
                        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    }
                </div>
            </Card>
        </div>
        <div className='vacancies-card-outer-div'>
            <Card title="Add Vacancie" className='vacancies-card vacancie-add-form' bordered={false}>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <p className='labels'>Title:</p>
                        <input id='addtitle' onChange={() => handleEdit('addtitle')} className='title'/>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <p className='labels'>Role:</p>
                        <input id='addrole' onChange={() => handleEdit('addrole')} className='role'/>
                    </div>
                </div>
                <p className='labels'>Discription:</p>
                <div className='discription-outer-div'>
                    <FroalaEditorComponent tag='textarea' model={discription} onModelChange={handleDiscription}/>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='vacancie-add-btn' onClick={AddVacancie}>Add Vacancie</button>
                </div>
            </Card>
        </div>
        <Modal
          title="Edit Vacancie"
          centered
          visible={modalVisible}
          footer={null}
          onCancel={cancel}
        >
        {
            Vacancie !== null ?
            <div className='vacancie-edit-form'>
                <p className='labels'>Title:</p>
                <input id='edittitle' className='title' onChange={() => handleEdit('edittitle')} placeholder={Vacancie.title}/>
                <p className='labels'>Role:</p>
                <input id='editrole' className='role' onChange={() => handleEdit('editrole')} placeholder={Vacancie.role}/>
                <p className='labels'>Discription:</p>
                <div className='discription-outer-div'>
                    <FroalaEditorComponent tag='textarea' model={editDiscription} onModelChange={handleEditDiscription}/>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='vacancie-edit-btn' onClick={UpdateVacancie}>Save</button>
                </div>
            </div> :
            <span/>
        }
          
        </Modal>
      </div>
    );
}

export default VacancieDashboard;
