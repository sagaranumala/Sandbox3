import React,{useState} from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';

const Theader = ({showlist,setshowList}) => {

    
    const handleChange=()=> {
       if(showlist==true){
        setshowList(false)
       }
    }
    const handleChange1=()=> {
        if(showlist==false){
         setshowList(true)
        }
     }

  return (
    <div className='flex justify-between items-center pl-[20px] pr-[20px] rounded-[20px] h-[100px] mt-[30px] Thead'>
        <div className='flex gap-[10px] text-[white]'>
            <div className='list' onClick={handleChange1}><FormatListBulletedIcon className='h-[40px] w-[40px]'/><div className='listview'>List View</div></div>
            <div className='grid' onClick={handleChange}><GridViewIcon  className='h-[40px] w-[40px] '/><div className='gridview'>Grid View</div></div>
            
        </div>
        <div className='bg-black h-[40px] w-[500px] relative text-[white]'>
             <SearchIcon className='h-[30px] w-[30px] absolute ml-[360px] mt-[5px] text-[blue]'/>
            <input type="text" className='h-[40px] w-[400px] border-solid border-[2px] pl-[15px] text-[20px] bg-black rounded-[10px]' placeholder='search...'/>
        </div>
        <div className='flex gap-[10px] text-[white]'>
            <ControlPointIcon className='h-[40px] w-[40px]'/>
            <RefreshIcon className='h-[40px] w-[40px]'/>
            <ExitToAppIcon className='h-[40px] w-[40px]'/>
        </div>
    </div>
  )
}

export default Theader
