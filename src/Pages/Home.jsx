import React from 'react';
import Title from '../components/Title';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      
      <div className="dashboard">
        <Title />
        <Sidebar />
        <Footer />
      </div>
    </>
  )
}

export default Home