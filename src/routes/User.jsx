import user01 from '../img/user01.jpg';
import Contact from '../components/contact';

export default function User() {
  const contacts = [
    {
      name: "Maycon Cabral",
      phone: "61983269646",      
    },
    {
      name: "Valdine Alves",
      phone: "61999888888",     
    },
    {      
      name: "Marcus Vincius",
      phone: "61998132647",     
    }
  ];
  
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
