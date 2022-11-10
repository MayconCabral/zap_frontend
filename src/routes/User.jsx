import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from 'axios'

import user01 from '../img/user01.jpg';
import Contact from '../components/contact';

export default function User() {
  const [data, ] = useOutletContext();
  const [contacts, setContacts] = useState([]);  
  
  
  if(data.id) {
    setTimeout(() => {
      console.log('Dentro do SETTIMEOUT', data.id)
      axios.get('http://localhost:3001/contact', { userId: 4}).then((data) => {
        setContacts(data)
      }).catch(({response}) => {
        console.log(response.data)
      })     
    }, 3000)
  }


  // const contacts = [
  //   {
  //     name: "Maycon Cabral",
  //     phone: "61983269646",      
  //   },
  //   {
  //     name: "Valdine Alves",
  //     phone: "61999888888",     
  //   },
  //   {      
  //     name: "Marcus Vincius",
  //     phone: "61998132647",     
  //   }
  // ];
  
  return (
    <div className="user">
      <div className="user__profile">
        <img src={user01} alt="profile" />
        <h2 className="user__profile__name">User's Name</h2>
      </div>
      <div className="user__contacts">
        {
          contacts.map((contact) => (            
            <Contact name={contact.name} phone={contact.phone}/>           
          ))
        }
      </div>
    </div>
  )
}
