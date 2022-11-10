// import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
// import axios from 'axios'

import user05 from '../img/user05.jpg';
import user01 from '../img/user01.jpg';
import user02 from '../img/user06.jpg';
import user03 from '../img/user03.jpg';
import Contact from '../components/contact';

export default function User() {
  const [data, ] = useOutletContext();

  // const [contacts, setContacts] = useState([]);  
  
  //-----------------Mesmo com o dado de requisição inserido manualmente, axios tem acesso negado... aparenta envio de objeto vazio----------
  // if(data.token) {      
  //     axios.get('http://localhost:3001/contact', { userId: data.id }, {
  //       headers: {
  //         'Authorization': `${data.token}`
  //       }
  //     }).then((data) => {        
  //       setContacts(data)
  //     }).catch(({response}) => {
  //       console.log(response)
  //     })    
  // }


  const contacts = [
    {
      id: 1,
      img: user01,
      name: "Charlotte Smith",
      phone: "61983269646",      
    },
    {
      id: 2,
      img: user02,
      name: "James Lewis",
      phone: "61999888888",     
    },
    {  
      id: 3,
      img: user03,    
      name: "Emma Moore",
      phone: "61998132647",     
    }
  ];
  
  return (
    <div className="user">
      <div className="user__profile">
        <img src={user05} alt="profile" />
        <h2 className="user__profile__name">{data.name}</h2>
      </div>
      <div className="user__contacts">
        {
          contacts.map((contact) => (            
            <Contact id={contact.id} propKey={contact.phone} img={contact.img} name={contact.name} phone={contact.phone}/>           
          ))
        }
      </div>
    </div>
  )
}
