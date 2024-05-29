import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  const [data, setData] = useState([
    {image:"https://images.unsplash.com/photo-1716792588036-c2834e00afc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D", name:"O Rangrez", artist:"Shankar Ehsaan", added:false},

    {image:"https://images.unsplash.com/photo-1716668595976-604426108db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D", name:"Bulleya", artist:"Vishal Shekhar", added:false},

    {image:"https://images.unsplash.com/photo-1716691731823-5f382e879e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D", name:"Namo Namo", artist:"Amit Trivedi", added:false},

    {image:"https://images.unsplash.com/photo-1716857892405-4a1cc7d34f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D", name:"Apna Bana Le", artist:"Arjit Singh", added:false},

    {image:"https://images.unsplash.com/photo-1716305218943-7b14795ee33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D", name:"Tum Mile", artist:"Pritam", added:false},

    {image:"https://plus.unsplash.com/premium_photo-1701196954501-3e2dc7a98cb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D", name:"Tu Hi Meri Shab Hai", artist:"KK", added:false},
  ])


  const clickHandler = (index)=>{
    setData((prev)=> {
      return prev.map( (item, itemIndex)=>{
        
        if(itemIndex === index) {
          return {...item, added:!item.added}
        }
        return item;
      } )
    } )
  }

  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col gap-4'>
      <Navbar data={data} />
      
      <div className="w-full p-3 flex gap-4 flex-wrap">
        {data.map((item, index)=>(
          <Card key={index} img={item.image} name={item.name} artist={item.artist}    added={item.added} index={index} clickHandler={clickHandler}/>
        ))}
      </div>
    </div>
  )
}

export default App




