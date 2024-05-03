import React, { useState } from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';



interface SideBarProps {
    page: number;
    setPage: (value: number) => void;
  }
  
  const SideBar: React.FC<SideBarProps> = ({ page, setPage }) => {

    const [showdrop1,setshowdrop1]=useState('hidden');
    const [showdrop2,setshowdrop2]=useState('hidden');
    const [showdrop3,setshowdrop3]=useState('hidden');
    const [showdrop4,setshowdrop4]=useState('hidden');
    const [showdrop5,setshowdrop5]=useState('hidden');
    const [showdrop6,setshowdrop6]=useState('hidden');
    const [showdrop7,setshowdrop7]=useState('hidden');
    const [showdrop8,setshowdrop8]=useState('hidden');
    const [showdrop9,setshowdrop9]=useState('hidden');
    const [showdrop10,setshowdrop10]=useState('hidden');


    
    console.log(page)


const updatePage = (newValue: number) => {
    setPage(newValue);
  };

  return (
    <div className='menuBar'>
        <div className='bg-[white];'>
            <div className='h-full flex flex-col gap-y-[10px]'>
                    <div className="dropdown rounded-[10px]">
                        <div className="dropbtn"  onClick={()=>{
                            let x=showdrop1=='hidden'?'block ml-[50px] hover:bg-[#95959546] border-solid border-[2px] border-[black] rounded-[10px] bg-[#55565b] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowdrop1(x);
                        }}>
                            <ChevronRightSharpIcon className='drop-icon'/>
                            <button className='ml-[70px] text-[20px] font-midium '>User Profile</button>
                        </div>
                        
                        <div className={showdrop1}>
                            <div   className='text-center hover:text-[black] dropdown11' onClick={() => updatePage(1)}>Profile View</div>
                        </div> 
                    </div>
                
                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>{
                            let x=showdrop2=='hidden'?'block ml-[50px] hover:bg-[#95959546] border-solid border-[2px] border-[black] rounded-[10px] bg-[#55565b] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowdrop2(x);}}>
                            <ChevronRightSharpIcon className='drop-icon'/>
                            <button className='ml-[70px] text-[20px] font-midium'>Dashboard</button>
                        </div>
                        
                        <div className={showdrop2}>
                            <div className='text-center hover:text-[black] dropdown11' onClick={() => updatePage(0)}>View Dashboard</div>
                        </div>
                    </div>
                
                    <div className="dropdown2">
                        <div className="dropbtn" onClick={()=>{
                            let x=showdrop3=='hidden'?'block ml-[50px] rounded-[10px] bg-[white] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowdrop3(x);}}>
                            <ChevronRightSharpIcon className='drop-icon'/>
                            <button className='ml-[70px] text-[20px] font-midium'>Reference Data</button>
                        </div>
                        
                        <div className={showdrop3}>
                            <div className="dropdown1">
                                <div className="dropbtn1" onClick={()=>{
                                    let x=showdrop6=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowdrop6(x);
                                    }}>
                                        <ChevronRightSharpIcon className='drop-icon ml-[20px]' />
                                        <button className='ml-[40px] mt-[10px] text-[20px] font-midium'>Generic Data</button>
                                </div>
                                    {/* <button className="dropbtn1">Generic Data</button> */}
                                
                                <div className={showdrop6}>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(2)}>Calendar</div>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(3)}>Region</div>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(4)}>Country</div>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(5)}>Currency</div>
                                </div>
                            </div>
                            
                            
                            <div className="dropdown1"> 
                                <div className="dropbtn1 bg-C-Blue" onClick={()=>{
                                    let x=showdrop7=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowdrop7(x);
                                    }}>
                                        <ChevronRightSharpIcon className='drop-icon ml-[20px]' />
                                        <button className='ml-[40px] mt-[10px] text-[20px] font-midium'>Distribution Data</button>
                                </div>
                                {/* <button className="dropbtn1">Distribution Data</button> */}
                                <div className={showdrop7}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(6)}>MOP</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(7)}>MOPCluster</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(8)}>MOPPreference</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(9)}>Membership Directory</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(10)}>Clearing Persona</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(11)}>MembershipProperty</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(12)}>ClearingProperty</div>
                                </div>
                            </div><br></br>
                            
                            <div className="dropdown1">
                                <div className="dropbtn1" onClick={()=>{
                                    let x=showdrop8=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowdrop8(x);
                                    }}>
                                        <ChevronRightSharpIcon className='drop-icon ml-[20px]'/>
                                        <button className='ml-[40px] mt-[10px] text-[20px] font-midium'>Customer Data</button>
                                </div>
                                {/* <button className="dropbtn1">Customer Data</button> */}
                                
                                <div className={showdrop8}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(13)}>Party</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(14)}>Account</div>
                                    
                                </div>
                            </div><br></br>
                            
                        </div>
                    </div>
                
                    <div className="dropdown">
                        <div className="dropbtn"  onClick={()=>{
                            let x=showdrop4=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowdrop4(x);
                        }}>
                            <ChevronRightSharpIcon className='drop-icon'/>
                            <button className='ml-[70px] text-[20px] font-midium'>Instructions</button>
                        </div>
                        
                        <div className={showdrop4}>
                            <div onClick={() => updatePage(15)}  className='text-center dropdown11 hover:text-[black]'>Instructions View</div>
                        </div>
                    </div>
                
                    <div className="dropdown">
                        <div className="dropbtn"  onClick={()=>{
                                let x=showdrop5=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                                setshowdrop5(x);
                            }}>
                                <ChevronRightSharpIcon className='drop-icon' />
                                <button className='ml-[70px] text-[20px] font-midium'>Transactions</button>
                            </div>
                            <div className={showdrop5}>
                                <div onClick={() => updatePage(16)} className='text-center dropdown11 hover:text-[black]'>Transactions View</div>
                            </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>{
                            let x=showdrop9=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowdrop9(x);
                        }}>
                            <ChevronRightSharpIcon className='drop-icon'/>
                            <button className='ml-[70px] text-[18px] font-midium'>Related Transactions</button>
                        </div>
                        
                        <div className={showdrop9}>
                            <div className='text-center hover:text-[black] dropdown11'>Link 1</div>
                        </div>
                    </div>
                
                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>{
                            let x=showdrop10=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowdrop10(x);
                        }}>
                            <ChevronRightSharpIcon className='drop-icon'/>
                            <button className='ml-[70px] text-[20px] font-midium'>Approvals</button>
                        </div>
                        <div className={showdrop10}>
                            <div className='text-center hover:text-[black] dropdown11'>Link 1</div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
