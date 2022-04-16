import React, {useCallback, useEffect, useState} from 'react'
import Header from './Header/header'
import ApplyForm from './Apply Form/ApplyForm'
import OtherVacancies from './Other Vacancies/OtherVacancies'
import Footer from '../../../HOC/Footer/Footer';


function Layout() {

    const [Vacancie, setVacancie] = useState(null)
    const [Vacancies, setVacancies] = useState([])
    const [page, setPage] = useState(null)

    const getVacancie = useCallback(() => {
        const link = window.location.href
        var n = link.split("/");
	    const id = n[n.length - 1];
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/vacancie/get_vacancie", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.code === 200){
                setVacancie(result.data)
            }
        })
        .catch(error => console.log('error', error));
      
    }, []);

    const getVacancies = useCallback((page) => {
        const link = window.location.href
        var n = link.split("/");
	    const id = n[n.length - 1];
        
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
                var list = Vacancies
                result.data.map(vacancie => {
                    if(vacancie._id !== id){
                        list.push(vacancie)
                    }
                })
                setVacancies(list)
                setPage(result.next)
            }
        })
        .catch(error => console.log('error', error));
      
    }, [Vacancies]);

    useEffect(() => {
      getVacancie()
      getVacancies(1)
    }, [getVacancie, getVacancies]);
    
    

    return (
        <div>
            <Header Vacancie={Vacancie}/>
            <ApplyForm Vacancie={Vacancie}/>
            <OtherVacancies page={page} getVacancies={getVacancies} Vacancies={Vacancies}/>
            <Footer/>
        </div>
    )
}

export default Layout
