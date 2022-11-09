import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Buttom from '../components/buttom';

export default function Root() {
const URL = useLocation()
const [data, setData] = useState({})


  return (
    <main className="home">      
      <div className="mobile">
        <div className="mobile__content">
          <Outlet context={[data, setData]}/>
        </div>
        <Buttom route='/login' text='Press me!'/>
        {
          (
            URL.pathname === '/login'  
            ||
            URL.pathname === '/user' 
          )       
          && (
            <Buttom 
            route='/login' 
            text='Login!' 
            class='login_btn'
            data={data}
            />
          )
        }
      </div>
    </main>
  )
}
