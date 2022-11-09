import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <main className="home">      
      <div className="mobile">
        <div className="mobile__content">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
