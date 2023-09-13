import { useEffect, useState } from "react";
import Bottle from '../Bottle/Bottle'
import Cart from "../cart-item/Cart";
import { addLocalStore, getLocalStore } from "../localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [carts, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleClick = (bottle) => {
        const cartItem = [...carts, bottle]
        setCart(cartItem)
        addLocalStore(bottle.id)
    }

    useEffect(() => {
        const saveCartItem = []

        const localData = getLocalStore()
        for (const id of localData) {
            const savedCart = bottles.find(bottle => bottle.id === id)
            if (savedCart) {
                saveCartItem.push(savedCart)
            }
        }
        setCart(saveCartItem)
        console.log(saveCartItem);
    }, [bottles])
    
    return (
        <>
            <h1 className="text-4xl font-bold text-center"> Selected Item</h1>
            <div className="mb-6 flex flex-wrap gap-4">
                {
                    carts.map(cart => <Cart key={cart.id} bottle={cart}></Cart>)
                }
            </div>
            <h1 className="text-4xl font-bold text-center">All Product</h1>
            <div className=" grid grid-cols-3 gap-5 ">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleClick={handleClick}></Bottle>)
                }
            </div>
        </>
    );
};

export default Bottles;