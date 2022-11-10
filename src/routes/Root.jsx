import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Buttom from '../components/buttom';
import { check } from '../utils/checkString';

export default function Root() {
const URL = useLocation()
const [data, setData] = useState({})

const user = (data) => {
  setData(data)
};

const renderButton = () => {
  if (URL.pathname === '/login') {
    return (
      <Buttom 
      route='/user' 
      text='LogIn!' 
      class='login_btn'
      data={data}
      setdata={user}         
      />
    );
  } else if (URL.pathname === '/user' || check(URL.pathname)) {
    return (
      <Buttom 
      route='/login' 
      text='LogOut!' 
      class='logout_btn'
      data={data}
      setdata={user}         
      />
    );
  }
};

  return (
    <main className="home">      
      <div className="mobile">
        <div className="mobile__content">
          <Outlet context={[data, setData]}/>
        </div>
        <Buttom route='/login' text='Press me!'/>
        { renderButton() }
      </div>
    </main>
  )
}
