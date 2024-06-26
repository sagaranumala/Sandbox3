import React, { useState } from 'react'
import Example from '../../GenericTable'
import Theader from '../../Theader'
import List from '../../List';


const Region = () => {

  const [showlist,setshowList] =useState(false);
  return (
    <div>
        <span className='mb-[20px] self-start text-[20px] mt-[10px]'>ReferenceData -&gt; GenericData -&gt; Region</span>  
        <Theader showlist={showlist} setshowList={setshowList}/>
        {showlist?
        <List/>:   
       <Example/>
        }
        <hr className='w-full text-[white]'/>
        <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
    </div>
  )
}

export default Region