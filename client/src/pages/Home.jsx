import React, { useEffect } from 'react'
import HeroSectionLayouts from '../layouts/HeroSectionLayouts'
import { useNavigate } from 'react-router-dom';
import {DealsAndOffersShowCase, HomeAndOutdoorShowCase, ConsumerElectronicsAndGadgetsShowCase, RequestQuote, RecomendedItems, ExtraServices, Regions, NewsLetterSubsciption} from '../components/export';


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