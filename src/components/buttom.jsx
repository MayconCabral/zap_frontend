import { Link } from 'react-router-dom';

export default function Buttom() {
  return (
    <Link className="mobile__buttom" to='/login'>
      <p className="mobile__buttom__text">Press Me!</p>
    </Link>
  )
};
