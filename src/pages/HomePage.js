import React from 'react'
import Fruits from './Home/fruits';
import Veggies from './Home/veggies';
import Kitchen from './Home/kitchen';
import Grocery from './Home/grocery';
import Header from '../components/Layout/Header';
import Oils from './Home/oils';
import SnackStore from './Home/snackStore';
import Products from "./Home/allProducts"


const HomePage = () => {

  return (
    <div>
      <Header/>
      <Products/>
      <Fruits/>
      <Veggies/>
      <Oils/>
      <Grocery/>
      <SnackStore/>
      <Kitchen/>
    </div>
  )
}
export default HomePage;
