import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() =>{
    console.log("Hey Iam a useEffect from _app.js")
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart"))) 
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    
  }, [])

  const saveCart = (myCart)=>{
    localStorage.setItem("cart", JSON.stringify (myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length;i++ ){
      console.log(keys)
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty: 1, price, name,size, variant}
    }
    setcart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }

  const clearCart = ()=>{
    setcart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setcart(newCart)
    saveCart(newCart)
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
    </>
}

export default MyApp
