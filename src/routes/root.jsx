import { Outlet } from 'react-router-dom';

import Buttom from '../components/buttom';

export default function Root() {  

  return (
    <main className="home">      
      <div className="mobile">
        <div className="mobile__content">
          <Outlet />
        </div>
        <Buttom />
      </div>
    </main>
  )
}
