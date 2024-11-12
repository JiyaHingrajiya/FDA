import React, { useState } from 'react'
import Header from '../../components/navbar/Header/Header';
import Exploremenu from '../../components/navbar/ExploreMenu/Exploremenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {
  const[category,setCategory] = useState("All");

  return (
    <div>
      

       <Header/>
       <Exploremenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}/>
       <AppDownload/>
    </div>
  )
}

export default Home
