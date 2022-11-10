import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { loginSchema } from "../utils/schema";

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [, setData] = useOutletContext();


  useEffect(() => {
    loginSchema.isValid({
      name,
      password
    }).then((validation) => {
      if (validation) {
        setData({
          name,
          password
        })
      }
    })
  }, [name, password, setData]);

  return (
    <>
    
      <div className="login">
        <div className="logo">
          <div className="logo__img">                 
          </div>
          <div className="logo__bottom"></div>
        </div>
        <div className="login__inputs">
          <input 
          className="inputs" 
          type="text" 
          placeholder="nome"
          onChange={
            ({ target }) => setName(target.value)
          }
          />
          <input 
          className="inputs" 
          type="password" 
          placeholder="senha"
          onChange={
            ({ target }) => setPassword(target.value)
          }
          />
        </div>      
      </div>      
    </>

  )
}
