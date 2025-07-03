import React from 'react'
import Header from '../Components/Header/Header.jsx'
import HomeSlider from '../Components/Home/HomeSlider.jsx'
import Footer from '../Components/Footer/Footer.jsx' 
import PopularProducts from '../Components/Products/PopularPoducts.jsx'
import LatestProducts from '../Components/Products/LatestProduct.jsx'
import FeaturedProducts from '../Components/Products/FeaturedProducts.jsx'
import PromotionalBanner from '../Components/Products/PromotionalBanner.jsx'
import AllCategory from '../Components/Products/AllCategory.jsx'
import MiniFooter from '../Components/Footer/MiniFooter.jsx'
import BlogSection from '../Components/Blogs/BlogSection.jsx'
import ProductsBanner from '../Components/Products/ProductsBanner.jsx'
const Home = () => {
  return (
    <>
      <div className='w-full bg-gray-200'>
        <Header/>
      </div>
      
      <div className='w-full bg-primary-bg from-gray-50 to-white'>
        <HomeSlider/>
      </div>
      <div className='w-full bg-white from-gray-50 to-white'>
        <PopularProducts/>
        <ProductsBanner/>
        {/* <ProductSlider/>
        <ProductBanner/> */}
        <LatestProducts/>
        <FeaturedProducts/>
        <PromotionalBanner/>
        <AllCategory/>
      </div>
      <div className='w-full bg-white from-gray-50 to-white'>
        <BlogSection/>
      </div>
      <div className='w-full bg-primary-bg'>
        <MiniFooter/>
        <Footer/>
      </div>
    </>
  )
}

export default Home