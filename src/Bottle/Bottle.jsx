import React from 'react';

const Bottle = ({ bottle , handleClick}) => {
    const { name, img, price } = bottle
    return (
        <div>
            <div className="card bg-base-100 h-[480px] shadow-xl">
                <figure><img className='w-[250px] h-[250px] rounded-lg my-5' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className=' font-semibold'>Price: {price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleClick(bottle)} className="btn btn-success text-white">Success</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottle;