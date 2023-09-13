import React from 'react';

const Cart = ({bottle}) => {
    const {name, price, img} = bottle
    return (
        <div>
            <div className="card bg-base-100 w-[220px] shadow-xl">
                <figure><img className='w-[150px] h-[120px] rounded-md my-3' src={img} alt="Shoes" /></figure>
                <div className="card-body pt-0 pb-2">
                    <h2 className="card-title text-base">{name}</h2>
                    <p className=' font-semibold'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;