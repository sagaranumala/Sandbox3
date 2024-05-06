import React from 'react'
import Example from './GenericTable'
import ChartComponent from './ChartComponent'

const Dashboard = () => {
  return (
    <div className=' flex flex-col gap-50px'>
            {/* <div className='w-[300px] h-[40px] rounded-[10px] bg-[white] border-solid border-[2px] border-[black] text-center mt-[10px]'><h1 className='text-[20px] font-bold text-[blue]'>Dashboard</h1></div>  */}
            <h1 className='text-[20px] font-bold text-[blue] font-sans'>Dashboard</h1>
            <div className=' mt-[20px] flex flex-wrap  justify-between gap-[20px] gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                <div className='box1 h-[120px] border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-center   hover:bg-C-Blue hover:text-[white] bg-C-Yellow'><div>Completed</div></div>
                <div className='box1 h-[120px] border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-center  hover:bg-C-Blue hover:text-[white] bg-[#f59e0b]'><div>Rejected</div></div>
                <div className='box1 h-[120px] border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-center  hover:bg-C-Blue hover:text-[white] bg-[#bef264]'><div>Duplicated</div></div>
                <div className='box1 h-[120px] border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-center   hover:bg-C-Blue hover:text-[white] bg-[#86efac]'><div>In Progress</div></div>
                <div className='box1 h-[120px] border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] hover:bg-C-Blue hover:text-[white] bg-[#67e8f9]'>Acquired</div>
            </div>
            <div className=' mt-[20px] flex flex-wrap  justify-between gap-[20px] gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                <div className='box1 h-[120px]  rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center  hover:bg-C-Blue hover:text-[white] bg-C-Yellow'><div>Completed</div></div>
                <div className='box1 h-[120px]  rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center  hover:bg-C-Blue hover:text-[white] bg-[#f59e0b]'><div>Rejected</div></div>
                <div className='box1 h-[120px]  rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center  hover:bg-C-Blue hover:text-[white] bg-[#bef264]'><div>Duplicated</div></div>
                <div className='box1 h-[120px]  rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center   hover:bg-C-Blue hover:text-[white] bg-[#86efac]'><div>Warehoused</div></div>
                <div className='box1 h-[120px]  rounded-[10px]  border-solid border-[2px] border-[black] flex justify-center items-center hover:bg-C-Blue hover:text-[white] bg-[#67e8f9]'>Pending Resp</div>
            </div>
               <div className='mt-[50px] flex flex-wrap	justify-between gap-[30px]'>
                    <ChartComponent/>
                    <ChartComponent/>
                    <ChartComponent/>
              </div>
              <div>
                  <Example/>

              </div>
              <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
        </div>
  )
}

export default Dashboard
