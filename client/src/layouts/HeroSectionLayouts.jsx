import React from 'react'
import { Outlet } from 'react-router-dom'
import {HeroSectionMenus} from '../components/export'

const HeroSectionLayouts = () => {
  return (
      <section className='bg-white border border-red-500'>
        <div className='container mx-auto p-3 grid lg:grid-cols-[250px,1fr]  '>
                {/**left for menu */}
                <div className='py-4 max-h-fit overflow-y-auto hidden lg:block border-r'>
                    <HeroSectionMenus/>
                </div>


                {/**right for content */}
                <div className='bg-white  '>
                    <Outlet/>
                </div>
        </div>
    </section>
  )
}

export default HeroSectionLayouts