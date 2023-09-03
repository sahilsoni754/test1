import React from "react";
import {AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import {MdPayment} from 'react-icons/md';
import Link from "next/link";


const Checkout = ({cart, subTotal, addToCart, removeFromCart}) => {

    return (
        <div className="container m-auto ">
            <h1 className="font-bold text-3xlxl my-8 text-center">Checkout</h1>
            <h2 className="font-semibold text-xl">1. Delivery Details</h2>
            <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div class="mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div class="mb-4">
                        <label for="Email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="text" id="Email" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                </div>
                </div>
                <div className="px-2 w-full ">
                    <div class="mb-4">
                        <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                        <textarea name="address"  id="address" rows="2" cols="30"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>

                </div>
                <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div class="mb-4">
                        <label for="phone" class="leading-7 text-sm text-gray-600">phone</label>
                        <input type="phone" id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div class="mb-4">
                        <label for="City" class="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="City" name="City" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                </div>
                </div>
                <div className="mx-auto flex my-2">
                <div className="px-2 w-1/2">
                    <div class="mb-4">
                        <label for="State" class="leading-7 text-sm text-gray-600">State</label>
                        <input type="text" id="State" name="State" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div class="mb-4">
                        <label for="pincode" class="leading-7 text-sm text-gray-600">pincode</label>
                        <input type="text" id="pincode" name="pincode" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                </div>
                </div>

                <h2 className="font-semibold text-xl">2. Review Cart Items & Pay</h2>
                <div className="sidecart bg bg-indigo-100 p-6 m-2 ">
                <ol className="list-decimal font-semibold">
                    {Object.keys(cart).length==0 &&  <div className="my-4 font-samibold">Your Cart is Empty!</div>}
                    {Object.keys(cart).map((k)=>{return<li key={k}>
                        <div className="item flex my-5"></div>
                        <div className="font-semibold ">{cart[k].name}</div>
                        <div className="flex  font-semibold  text-lg">
                        <AiFillMinusCircle  onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-indigo-700"/><span className="mx-2 text-sm">{cart[k].qty}</span><AiFillPlusCircle
                         onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-indigo-700"/></div>
                    </li>})}
                </ol>
                         <span className="font-bold">SubTotal: ₹{subTotal}</span>
            </div>
            <div className="mx-4">
                <Link href={"/order"}><button class="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-700 rounded text-sm"><MdPayment className="m-1"/>Pay ₹{subTotal}</button></Link>
                </div>
        </div>
    )

}
export default Checkout