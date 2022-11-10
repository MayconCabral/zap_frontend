import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Buttom(props) {   
  
  const login = () => {
    const { name, password } = props.data;

    axios.post('http://localhost:3001/login',{
      name,
      password
    }).then(({data}) => {
      props.setdata(data)
    })
  }
  
  return (
    <Link className={`mobile__buttom ${props.class}`} to={props.route} onClick={login}>
      <p className="mobile__buttom__text">{props.text}</p>
    </Link>
  )
};
