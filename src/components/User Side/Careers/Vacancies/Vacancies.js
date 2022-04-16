import React, {useCallback, useEffect, useState} from 'react'
import './vacancies.scss'

function Vacancies() {

    const [Vacancies, setVacancies] = useState(null)

    const getVacancies = useCallback(() => {
        var myHeaders = new Headers();
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
        
        fetch("http://localhost:5000/vacancie/get_vacancies", requestOptions)
          .then(response => response.json())
          .then(result => {
              if(result.code === 200){
                setVacancies(result.data)
              }
          })
          .catch(error => console.log('error', error));
    }, []);

    useEffect(() => {
      getVacancies()
    }, [getVacancies]);
    
    return (
        <div className='vacancies-outer-div'>
            <span className='vacancies-title'>OPEN VACANCIES.<div className='vacancies-title-underline'/></span>
            <div className='jobs-div'>
                {
                    Vacancies !== null ?
                    <div>
                        {
                            Vacancies.map(vacancie => <div key={vacancie._id}>
                                    <div className='open-vacancie-div'>
                                        <p id='test' className='job-title'>{vacancie.title}</p>
                                        <a href={`/position/${vacancie._id}`} className='apply-btn'>
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default Vacancies
