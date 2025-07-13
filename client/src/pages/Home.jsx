import React, { useEffect } from 'react'
import HeroSectionLayouts from '../layouts/HeroSectionLayouts'
import { useNavigate } from 'react-router-dom';
import DealsAndOffersShowCase from '../components/DealsAndOffersShowCase';
import HomeAndOutdoorShowCase from '../components/HomeAndOutdoorShowCase';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/user-layouts/automobiles")
  }, [])
  return (
    <section>
      <div>
        <HeroSectionLayouts />
        <DealsAndOffersShowCase />
        <HomeAndOutdoorShowCase />
      </div>
    </section>
  )
}

export default Home