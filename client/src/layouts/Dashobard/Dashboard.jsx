import React, { useEffect } from 'react'
import { UserMenu } from '../../components/export'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if(location.pathname === '/dashboard' || location.pathname === '/dashboard/'){
    navigate('/dashboard/profile');
  }

  return (
    <section className='bg-white'>
        <div className='container mx-auto p-3 grid lg:grid-cols-[250px,1fr]  '>
                {/**left for menu */}
                <div className='py-4  top-24 max-h-[calc(100vh-96px)] overflow-y-auto hidden lg:block border-r'>
                    <UserMenu/>
                </div>


                {/**right for content */}
                <div className='bg-white min-h-[75vh] '>
                    <Outlet/>
                </div>
        </div>
    </section>
  )
}

export default Dashboard