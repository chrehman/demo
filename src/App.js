import Home from './components/User Side/Home/layout'
import Contact from './components/User Side/Contact Us/layout'
import Career from './components/User Side/Careers/layout'
import Position from './components/User Side/Position/layout'
import Pricing from './components/User Side/Pricing/layout'
import ArtificialIntelligence from './components/User Side/Services/Artificial Intelligence/layout'
import BigData from './components/User Side/Services/Big Data/layout'
import Blockchain from './components/User Side/Services/Blockchain/layout'
import CloudComputing from './components/User Side/Services/Cloud Computing/layout'
import DigitalMedia from './components/User Side/Services/Digital Media Marketing/layout'
import MachineLearning from './components/User Side/Services/Machine Learning/layout'
import MobileApp from './components/User Side/Services/Mobile Application/layout'
import WebApp from './components/User Side/Services/Web Application/layout'
import DataScience from './components/User Side/Services/Data Science/layout'
import AdminSide from './components/Admin Side/Routes'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import PageNotFound from './components/404/404'
import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

function App() {
  const [Admin, setAdmin] = useState(false);
  const [delay, setDelay] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 100, color: '#F45B21' }} spin />;

  useEffect(() => {
    const link = window.location.href
    if(link.includes('admin')){
      setAdmin(true)
    }else{
      setDelay(true)
    }
  }, [])

  return (
    <div className="App">
      {
        Admin ? <AdminSide /> : delay ?
        <div>
          <Router>
            <Routes>
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/careers' element = {<Career/>}/>
                <Route path='/position/*' element = {<Position/>}/>
                <Route path='/pricing' element = {<Pricing/>}/>
                <Route path='/services'>
                  <Route path='/ai' element = {<ArtificialIntelligence />}/>
                  <Route path='/ml' element = {<MachineLearning />}/>
                  <Route path='/blockchain' element = {<Blockchain />}/>
                  <Route path='/cloud' element = {<CloudComputing />}/>
                  <Route path='/big_data' element = {<BigData />}/>
                  <Route path='/data_science' element = {<DataScience />}/>
                  <Route path='/digital_media' element = {<DigitalMedia />}/>
                  <Route path='/web_app' element = {<WebApp />}/>
                  <Route path='/mobile_app' element = {<MobileApp />}/>
                  <Route path='*' element = {<PageNotFound />}/>
                </Route>
                <Route path='/home' element = {<Home/>}/>  
                <Route path="/" element = {<Navigate replace to="/home" />} />
                <Route path='*' element = {<PageNotFound />}/>
            </Routes>
          </Router>
        </div> :
        <div className='spinner-div'>
          <div>
              <Spin indicator={antIcon} />
              <p>Loading...</p>
          </div>
        </div>
      }
      
    </div>
  );
}

export default App;
