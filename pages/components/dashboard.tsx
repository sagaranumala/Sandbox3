import React, { useEffect, useState } from 'react'
import Example from './GenericTable'
import ChartComponent from './chartComponent'
import Date1 from './Date1'


interface User {
    name: string;
    users: number;
  }
  
//   interface DashboardProps {
//     chartData: User[];
//     chartData1: User[];
//     chartData2: User[];
//   }
  
const Dashboard: React.FC<User> = () => {
    const [chartData, setChartData] = useState<User[]>([]);
    const [chartData1, setChartData1] = useState<User[]>([]);
    const [chartData2, setChartData2] = useState<User[]>([]);
    const [title1,setTitle1]=useState<string>('INSTRUCTION DETAILS');
    const [title2,setTitle2]=useState<string>('TRANSACTION DETAILS');
    const [title3,setTitle3]=useState<string>('MOP BASED');

  useEffect(() => {
    // Fetch or calculate chart data
    const data = [
      { name: 'ACQUIRED', users: 10},
      { name: 'INPROGRESS', users: 0},
      { name: 'DUPLICATED', users: 5},
      { name: 'COMPLETED', users: 20},
      { name: 'REJECTED', users:10},
    ];
    setChartData(data);

    const data1= [
        { name: 'COMPLETED', users: 20 },
        { name: 'DUPLICATED', users:10},
        { name: 'ACCEPTED', users:5},
        { name: 'REJECTED', users: 5},
        { name: 'WAREHOUSED', users: 5},
      ];
      setChartData1(data1);
      const data2 = [
        { name: 'FedNow', users: 20},
        { name: 'TCHRTP', users: 10},
        { name: 'Fedwire', users: 5},
        { name: 'SWIFT', users: 5},
      ];
      setChartData2(data2);
  }, []);

  return (
    <div>
            <div className=' flex flex-col gap-50px'>
                    {/* <div className='w-[300px] h-[40px] rounded-[10px] bg-[white] border-solid border-[2px] border-[black] text-center mt-[10px]'><h1 className='text-[20px] font-bold text-[blue]'>Dashboard</h1></div>  */}
                    <h1 className='text-[20px] font-bold text-[blue]'>Dashboard</h1>
                    <h1 className='mt-[20px] text-[20px] font-normal'>INSTRUCTION</h1>
                    <div className='flex flex-wrap justify-between gap-[20px] gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                        <div className='box1 h-[120px] cursor-pointer border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-center bg-C-Yellow'><div>ACQUIRED(10)</div></div>
                        <div className='box1 h-[120px] cursor-pointer border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-cente bg-[#f59e0b]'><div>INPROGRESS(0)</div></div>
                        <div className='box1 h-[120px] cursor-pointer border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-cente bg-[#bef264]'><div>DUPLICATED(05)</div></div>
                        <div className='box1 h-[120px] cursor-pointer border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] flex flex-col item-center bg-[#86efac]'><div>COMPLETED(20)</div></div>
                        <div className='box1 h-[120px] cursor-pointer border-solid border-[2px] border-[black] flex justify-center items-center rounded-[10px] bg-[#67e8f9]'>REJECTED(10)</div>
                    </div>
                    <hr className='mt-[30px] font-bold'/>
                    <h1 className='mt-[20px] text-[20px] font-bold font-normal'>TRANSACTION</h1>
                    <div className='flex flex-wrap  justify-between gap-[20px] gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                        <div className='box1 h-[120px] cursor-pointer rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center bg-C-Yellow'><div>COMPLETED(20)</div></div>
                        <div className='box1 h-[120px] cursor-pointer rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center bg-[#f59e0b]'><div>DUPLICATED(10)</div></div>
                        <div className='box1 h-[120px] cursor-pointer rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center bg-[#bef264]'><div>ACCEPTED</div>(05)</div>
                        <div className='box1 h-[120px] cursor-pointer rounded-[10px] border-solid border-[2px] border-[black] flex justify-center items-center bg-[#86efac]'><div>REJECTED</div>(05)</div>
                        <div className='box1 h-[120px] cursor-pointer rounded-[10px]  border-solid border-[2px] border-[black] flex justify-center items-center bg-[#67e8f9]'> <div>WAREHOUSED</div>(05)</div>
                    </div>
                    <div className='mt-[50px] flex flex-wrap	justify-between gap-[30px]'>
                            <ChartComponent chartData={chartData} Title={title1}/>
                            <ChartComponent chartData={chartData1} Title={title2}/>
                            <ChartComponent chartData={chartData2} Title={title3}/>
                    </div>
                    <div>
                        <Example/>
                    </div>
                    <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
                </div>
    </div>
  )
}

export default Dashboard
