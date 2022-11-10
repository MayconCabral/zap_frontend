import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Buttom(props) {   
  const URL = useLocation();
  const [, setUserData] = useState({});

  const login = () => {
    const { name, password } = props.data;

    if (URL.pathname === '/login') {
      axios.post('https://zap-backend.onrender.com/login',{
        name,
        password
      }).then(({data}) => {
        props.setdata(data)
        setUserData(data)
      }).catch(({response}) => {
        setUserData(response.data)
      });
    }    
  };

  // ACESSO NEGADO!!! BUG MORA AQUI.... T_T
  // if (URL.pathname === '/user' && userData.token) {  
      
  //   axios.get('https://zap-backend.onrender.com/contact', { userId: userData.id}, {
  //     headers: {
  //       'Authorization': `${userData.token}`
  //     }
  //   }).then((data) => {        
  //     console.log(data)
  //   }).catch(({response}) => {
  //     console.log(response)
  //   })    
  // }
  
  return (
    <Link className={`mobile__buttom ${props.class}`} to={props.route} onClick={login}>
      <p className="mobile__buttom__text">{props.text}</p>
    </Link>
  )
};
