import react from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill} from 'react-icons/bs';
import { MdAccountCircle} from 'react-icons/md';
import { useRef } from "react";

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
    console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
    const togglecart = () => {
        if (ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
       else if (!ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()
    return (
        <div className=" flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white z-10">
            <div className="logo">
                <Link href={"/"}><a><img src="/logo1.jpg" width={200}></img></a></Link>
            </div>
            <div className="nav">
                <ul className=" flex items-center space-x-6 font-bold md:text-md">
                    <Link href={"/tshirts"}><a><li>Tshirts</li></a></Link>
                    <Link href={"/hoodies"}><a><li>Hoodies</li></a></Link>
                    <Link href={"/mugs"}><a><li>Mugs</li></a></Link>
                    <Link href={"/sticker"}><a><li>Sticker</li></a></Link>
                </ul>
            </div>
            <div onClick={togglecart} className="cart absolute right-0 top-4 mx-5 flex">
            <Link href={"/login"}><MdAccountCircle  className=" cursor-pointer text -xl md:text-2xl mx-2"/></Link>
                <AiOutlineShoppingCart className=" cursor-pointer text-xl md:text-2xl" />
            </div>
            <div ref={ref} className={`w-62 h-[100vh] sidecart absolute top-0 right-0 bg bg-indigo-100 px-8 py-10 transform translate-transform ${Object.keys(cart).length !==0? "translate-x-0" : "translate-x-full"}`}>
                <h2 className="text-center font-bold text-xl"> SHOPPING CART</h2>
                <span onClick={togglecart} className="absolute top-5 right-2 cursor-pointer text-2xl text-indigo-700"><AiFillCloseCircle/></span>
                <ol className="list-decimal font-semibold">
                    {Object.keys(cart).length==0 &&  <div className="my-4 font-samibold">Your Cart is Empty!</div>}
                    {Object.keys(cart).map((k)=>{return<li key={k}>
                        <div className="item flex my-5"></div>
                        <div className="flex w-2/3 font-semibold ">{cart[k].name}</div>
                        <div className="flex  font-semibold items-center justify-center text-lg">
                        <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-indigo-700"/><span className="mx-2 text-sm">{cart[k].qty}</span><AiFillPlusCircle
                         onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-indigo-700"/></div>
                    </li>})}
                </ol>
                <div className="font-bold  my-2">SubTotal: ₹{subTotal}</div>
                <div className="flex">
                <Link href={"/checkout"}><button class="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-700 rounded text-sm"><BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
                <button onClick={clearCart} class="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-700 rounded text-sm">Clear Cart</button>
            </div>
            </div>
        </div>
    )

}
export default Navbar