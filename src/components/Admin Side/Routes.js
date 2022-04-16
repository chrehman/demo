import React,{useCallback, useEffect, useState} from 'react'
import Login from './Login/login';
import UserDashboard from './User Dashboard/userDashboard';
import VacancieDashboard from './Vacancie Dashboard/VacancieDashboard';
import PricingDashboard from './Pricing Dashboard/pricingDashboard';
import ApplicantsDashboard from './Applicants Dashboard/applicantsDashboard';
import Setting from './Setting Dashboard/Setting';
import PageNotFound from '../404/404';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import logo from './images/logo.png';
import './dashboard.scss';
import { message, Spin, Drawer } from 'antd';
import { LoadingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';


function RoutesFunc() {
    const [Authorized, setAuthorization] = useState(false)
    const [show, setShow] = useState(true)
    const [visible, setVisible] = useState(false)
    const [accountType, setAccountType] = useState('')
    const antIcon = <LoadingOutlined style={{ fontSize: 100, color: '#F45B21' }} spin />;

    const process = (msg) => {
        message.loading(msg);
    };

    const handleLogout = () => {
        process('Logging Out!')
        localStorage.clear()
        window.location = '/admin'
    }

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    const CheckSession = useCallback(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", localStorage.getItem('token'));

        var raw = JSON.stringify({
            "adminId": localStorage.getItem('userId')
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch("http://localhost:5000/admin/session", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result['code'] === 200){
                setAuthorization(true)
                setAccountType(result.accountType)
            }else{
                setShow(false)
            }
        })
        .catch(error => console.log('error', error));
    }, []);
    
    useEffect(() => {
      CheckSession()
    }, [CheckSession]);
    
    return (
        <div className='admin-side-div'>
            {
                Authorized ?
                <div className='row dashboard-outer-div'>
                    <div className='col-12 col-xl-3 dashboard-sidenav-outer-div'>
                        <div className='dashboard-sidenav-inner-div'>
                            <img src={logo} alt='logo'/>
                            {
                                accountType === 'administrator' ?
                                <div className='dashboard-sidenav-div'>
                                    <a href='/admin/user_dashboard'>Users</a>
                                    <a href='/admin/vacancies'>Vacancies</a>
                                    <a href='/admin/pricing'>Pricing</a>
                                    <a href='/admin/applicants'>Applicants</a>
                                    <a href='/admin/setting'>Setting</a>
                                    <span onClick={handleLogout}>Logout</span>
                                </div> : 
                                <div className='dashboard-sidenav-div'>
                                    <a href='/admin/user_dashboard'>Users</a>
                                    <a href='/admin/vacancies'>Vacancies</a>
                                    <a href='/admin/pricing'>Pricing</a>
                                    <a href='/admin/applicants'>Applicants</a>
                                    <span onClick={handleLogout}>Logout</span>
                                </div>
                            }
                        </div>
                        <div className='mobile-view-dashboard-sidenav'>
                            {
                                visible ? <span><MenuFoldOutlined onClick={onClose} className='icon' /></span> : <span><MenuUnfoldOutlined onClick={showDrawer} className='icon' /></span>
                            }
                            <img src={logo} alt='logo'/>
                        </div>
                    </div>
                    <div className='col-12 col-xl-9 dashboard-side-outer-div'>
                        <Router>
                            <Routes>
                                {
                                    accountType === 'administrator' ?
                                    <Route path="admin">
                                        <Route path='login' element = {<Login />}/>
                                        <Route path='user_dashboard' element = {<UserDashboard />}/>
                                        <Route path='vacancies' element = {<VacancieDashboard />}/>
                                        <Route path='pricing' element = {<PricingDashboard />}/>
                                        <Route path='applicants' element = {<ApplicantsDashboard />}/>
                                        <Route path='setting' element = {<Setting />}/>
                                        <Route path='*' element = {<PageNotFound />}/>
                                    </Route> : 
                                    <Route path="admin">
                                        <Route path='login' element = {<Login />}/>
                                        <Route path='user_dashboard' element = {<UserDashboard />}/>
                                        <Route path='vacancies' element = {<VacancieDashboard />}/>
                                        <Route path='pricing' element = {<PricingDashboard />}/>
                                        <Route path='applicants' element = {<ApplicantsDashboard />}/>
                                        <Route path='*' element = {<PageNotFound />}/>
                                    </Route>
                                }
                            </Routes>
                        </Router>
                    </div>
                </div>
                :
                show === true ? 
                <div className='spinner-div'>
                    <div>
                        <Spin indicator={antIcon} />
                        <p>Loading...</p>
                    </div>
                </div> :
                <Router>
                    <Routes>
                        <Route path="/admin" element = {<Navigate replace to="/admin/login" />} />
                        <Route path="admin">
                            <Route path="login" element = {<Login />} />
                            <Route path='*' element = {<PageNotFound />}/>
                        </Route>
                    </Routes>
                </Router>
            }
            <Drawer
                title="Inovozon"
                placement='left'
                closable={true}
                onClose={onClose}
                visible={visible}
                key='left'
                >
                {
                    accountType === 'administrator' ?
                    <div className='dashboard-sidenav-div'>
                        <a href='/admin/user_dashboard'>Users</a>
                        <a href='/admin/vacancies'>Vacancies</a>
                        <a href='/admin/pricing'>Pricing</a>
                        <a href='/admin/applicants'>Applicants</a>
                        <a href='/admin/setting'>Setting</a>
                        <span onClick={handleLogout}>Logout</span>
                    </div> : 
                    <div className='dashboard-sidenav-div'>
                        <a href='/admin/user_dashboard'>Users</a>
                        <a href='/admin/vacancies'>Vacancies</a>
                        <a href='/admin/pricing'>Pricing</a>
                        <a href='/admin/applicants'>Applicants</a>
                        <span onClick={handleLogout}>Logout</span>
                    </div>
                }
            </Drawer>
        </div>
    )
}

export default RoutesFunc
