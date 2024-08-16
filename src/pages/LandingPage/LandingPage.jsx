import React from 'react'
import styles from './LandingPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import InfoAppartment from '../../components/InfoAppartment/InfoAppartment'
import CloserView from '../../components/CloserView/CloserView'
import BestDeal from '../../components/BestDeal/BestDeal'
import Properties from '../../components/Properties/Properties'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'

export default function LandingPage() {
    return (
        <>
            <NavBar />
            <Hero />
            <InfoAppartment />
            <CloserView />
            <BestDeal />
            <Properties />
            <ContactUs />
            <Footer />
        </>
    )
}
