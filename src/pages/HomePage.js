import React from 'react'
import InfoSection from '../components/InfoSection';
import Layout from '../components/Layout'
import MediaSection from '../components/MediaSection';

const HomePage = () => {
  return (
    <Layout>
      <InfoSection/>
      <MediaSection/>
    </Layout>
  )
}

export default HomePage;