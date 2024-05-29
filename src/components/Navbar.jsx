import React from 'react'

function Navbar({data}) {

  return (
    <div className='flex justify-between items-center p-2 px-20 text-white shadow-md'>
      
      <h1 className='text-greenCustom font-bold text-[2rem]'>Sadify</h1>
      
      <div className='flex gap-3 px-4 py-1 bg-greenCustom text-sm'>
        <h3>Favourites</h3>
        <p>{data.filter( (item)=>item.added ).length}</p>    {/*returns the items whose added value is true and the we print the length of the array having added value true */}
      </div>

    </div>
  )
}

export default Navbar
