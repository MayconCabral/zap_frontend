import { Link } from 'react-router-dom';

export default function Buttom(props) {
  const show = () => {
    console.log('sou o botão', props.data)
  }
  
  return (
    <Link className={`mobile__buttom ${props.class}`} to={props.route} onClick={show}>
      <p className="mobile__buttom__text">{props.text}</p>
    </Link>
  )
};
