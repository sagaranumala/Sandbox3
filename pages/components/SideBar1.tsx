import React, { useState } from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

const SideBar1 = () => {

    const [show,setshow]=useState('hidden');
    const handleClick=()=>{
         setshow('block')
    }
  return (
    <div className=''>
          
          {/* bg-[#232429] */}

	<div className="flex flex-col items-center w-[300px] h-full overflow-hidden text-[#ADAEB3] bg-[#55565b] rounded">
	
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3">
				<div>
                    <div className="flex items-center relative w-full h-12 px-3 mt-2 rounded hover:bg-[lightgray] hover:text-[black]" onClick={handleClick}>
                        <span className="ml-2 text-[20px] font-medium">Dasboard</span>
                        <ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
                    </div>
                    <div className={show}>
                            <div>link1</div>
                            <div>link2</div>
                    </div>
                </div>
                <hr className=' w-full text-[white]'/>
				<div className="flex items-center relative w-full h-12 px-3 mt-2 rounded hover:bg-[lightgray] hover:text-[black] hover:text-[#C1C2C7]">
					<span className="ml-2 text-[20px] font-medium">Search</span>
                    <ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
				</div>
                <hr className=' w-full text-[white]'/>
				<div className="flex items-center relative w-full h-12 px-3 mt-2 text-[D3D4D9] hover:bg-[lightgray] hover:text-[black] rounded">
					<span className="ml-2 text-[20px] font-medium">Insights</span>
                    <ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
				</div>
                <hr className=' w-full text-[white]'/>
				<div className="flex items-center relative w-full h-12 px-3 mt-2 rounded hover:bg-[lightgray] hover:text-[black] hover:text-[#C1C2C7]">
					<span className="ml-2 text-[20px] font-medium">Docs</span>
                    <ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
				</div>
                <hr className=' w-full text-[white]'/>
				<div className="flex items-center relative w-full h-12 px-3 mt-2 rounded hover:bg-[lightgray] hover:text-[black] hover:text-[#C1C2C7]">
					<span className="ml-2 text-[20px] font-medium">Products</span>
                    <ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
				</div>
				<div className="flex items-center relative w-full h-12 px-3 mt-2 rounded hover:bg-[lightgray] hover:text-[black] hover:text-[#C1C2C7]">
					<span className="ml-2 text-[20px] font-medium">Settings</span>
                    <ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
				</div>
				<div className="relative flex items-center relative w-full h-12 px-3 mt-2 rounded hover:bg-[lightgray] hover:text-[black] hover:text-[#C1C2C7]">
					<span className="ml-2 text-[20px] font-medium">Messages</span>
					<ChevronRightSharpIcon className='drop-icon absolute ml-[230px]'/>
				</div>
			</div>
		</div>
	
	</div>
	
	
    </div>
  )
}

export default SideBar1
