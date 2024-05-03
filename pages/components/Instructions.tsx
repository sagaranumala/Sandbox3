import React, { useState } from 'react'
import Example from './GenericTable'
import Theader from './Theader'
import List from './List';


const Instructions = () => {

  const [showlist,setshowList] =useState(false);
  return (
    <div className='relative'>
        <div className='flex justify-center'>
            <div className='w-[300px] h-[40px] rounded-[10px] bg-[yellow] border-solid border-[2px] border-[black] text-center mt-[10px]'><h1 className='text-[20px] font-bold text-[blue]'>Instrutions View</h1></div>
        </div>
         
        Instructions  
        <Theader showlist={showlist} setshowList={setshowList}/>
        {showlist?
        <List/>:   
       <Example/>
        }
        <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
    </div>
  )
}
export default  Instructions