import React, { useEffect } from 'react'
import HeroSectionLayouts from '../layouts/Home/HeroSectionLayouts'
import { useLocation, useNavigate } from 'react-router-dom';
import {DealsAndOffersShowCase, HomeAndOutdoorShowCase, ConsumerElectronicsAndGadgetsShowCase, RequestQuote, RecomendedItems, ExtraServices, Regions, NewsLetterSubsciption} from '../components/export';


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation()

  if(location.pathname === "/"){
    navigate("/user-layouts/automobiles")
  }

  useEffect(() => {
    if(location.pathname === "/"){
      
      navigate("/user-layouts/automobiles")

      }
    navigate("/user-layouts/automobiles")
    
  }, [])
  return (
    <section>
      <div>
        <HeroSectionLayouts />
        <DealsAndOffersShowCase />
        <HomeAndOutdoorShowCase />
        <ConsumerElectronicsAndGadgetsShowCase />
        <RequestQuote />
        <RecomendedItems />
        <ExtraServices />
        <Regions />
        <NewsLetterSubsciption />
      </div>
    </section>
  )
}

export default Home