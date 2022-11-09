import earth from '../img/earth.jpg';

export default function Login() {
  return (
    <div className="login">
      <img className="login__logo" src={earth} alt="Earth" />
      <div className="login__inputs">
        <input type="text" />
        <input type="password" />
      </div>
    </div>
  )
}
