import React, { useState } from 'react'
import Example from '../../GenericTable'
import Theader from '../../Theader'
import List from '../../List';


const ClearingProperty = () => {

  const [showlist,setshowList] =useState(false);
  return (
    <div>
        <span className='mb-[20px]'>ReferenceData -&gt; DistributionData -&gt; ClearingProperty </span>  
        <Theader showlist={showlist} setshowList={setshowList}/>
        {showlist?
        <List/>:   
       <Example/>
        }
        <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
    </div>
  )
}

export default ClearingProperty

