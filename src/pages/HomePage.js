import React from 'react'
import InfoSection from '../components/InfoSection';
import Layout from '../components/Layout'
import MainSlider from '../components/MainSlider';
import MediaSection from '../components/MediaSection';
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <Layout>
      <MainSlider/>
      <InfoSection/>
      <MediaSection/>
    </Layout>
  )
}

export default HomePage;