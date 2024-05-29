import React from 'react'

function Card({img,name, artist, added, index, clickHandler}) {
  return (
    <div className="w-72 p-3 bg-white flex justify-evenly items-center gap-4 rounded-md">
        
        <div className="w-20 h-20 overflow-hidden rounded-lg">
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
                
        <div className="w-30 bg-greenCustom p-2 rounded-lg flex flex-col gap-2">
            <div className="">
                <h3 className='font-bold whitespace-nowrap text-md'>{name}</h3>
                <h4 className='text-xs text-white'>{artist}</h4>
            </div>

            <button
            
                onClick={ () => clickHandler(index)}

                className={`whitespace-nowrap text-xs px-3 py-1 rounded-full ${added?"bg-green-700":"bg-black"} ${added?"text-black":"text-greenCustom"}`}>
                
                {added?"Added":"Add to favourites"} 
            </button>
        </div>
    </div>
  )
}

export default Card
