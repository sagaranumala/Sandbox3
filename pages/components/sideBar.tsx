import React, { useState } from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';



interface SideBarProps {
    page: number;
    setPage: (value: number) => void;
  }
  
  const SideBar: React.FC<SideBarProps> = ({ page, setPage }) => {

    const [showUF,setshowUF]=useState('hidden');//to show userProfile
    const [showDB,setshowDB]=useState('hidden');//to show DashBoard
    const [showRD,setshowRD]=useState('hidden');//to show Reference Data
    const [showPD,setshowPD]=useState('hidden');//to show Processing Data
    const [showID,setshowID]=useState('hidden');//to show Instruction Data
    const [showTB,setshowTB]=useState('hidden');//to show Transaction Data
    const [showRTB,setshowRTB]=useState('hidden');//to show Related transactions Data
    const [showAD,setshowAD]=useState('hidden');//to show Approvals Data
    const [showdrop9,setshowdrop9]=useState('hidden');
    const [showUF0,setshowUF0]=useState('hidden');

    const [showUF1,setshowUF1]=useState('hidden');



    
    console.log(page)


const updatePage = (newValue: number) => {
    setPage(newValue);
  };

  return (
    <div className='menuBar'>
        <div className='bg-[white];'>
            <div className='h-full flex flex-col gap-y-[10px]'>

               {/* USER-PROFILE */}
                    <div className="dropdown rounded-[10px]">
                        <div className="dropbtn flex justify-between"  onClick={()=>{
                            let x=showUF=='hidden'?'block ml-[50px] hover:bg-[#95959546] border-solid border-[2px] border-[black] rounded-[10px] bg-[#55565b] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowUF(x);
                        }}>
                            <button className='ml-[5px] text-[20px] font-midium'>User Profile</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        
                        <div className={showUF}>
                            <div   className='text-center hover:text-[black] dropdown11' onClick={() => updatePage(1)}>Profile View</div>
                        </div> 
                    </div>
                
               {/* DASHBOARD */}
                    <div className="dropdown">
                        <div className="dropbtn flex justify-between" onClick={()=>{
                            let x=showDB=='hidden'?'block ml-[50px] hover:bg-[#95959546] border-solid border-[2px] border-[black] rounded-[10px] bg-[#55565b] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowDB(x);}}>
                            <button className='ml-[5px] text-[20px] font-midium'>Dashboard</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        
                        <div className={showDB}>
                            <div className='text-center hover:text-[black] dropdown11' onClick={() => updatePage(0)}>View Dashboard</div>
                        </div>
                    </div>
                {/* REFERENCE-DATA */}
                    <div className="dropdown2">
                        <div className="dropbtn flex justify-between" onClick={()=>{
                            let x=showRD=='hidden'?'block ml-[50px] rounded-[10px] bg-[white] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowRD(x);}}>
                            <button className='ml-[5px] text-[20px] font-midium'>Reference Data</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        
                        <div className={showRD}>

                            {/* GENERICDATA */}
                            <div className="dropdown1">
                                <div className="dropbtn1 flex justify-between items-center" onClick={()=>{
                                    let x=showTB=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowTB(x);
                                    }}>
                                        <button className='ml-[20px] text-[20px] font-midium'>Generic Data</button>
                                        <ChevronRightSharpIcon className='drop-icon mr-[10px]' />
                                </div>
                                    {/* <button className="dropbtn1">Generic Data</button> */}
                                
                                <div className={showTB}>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] pl-[10px] pt-[5px] text-[20px] font-midium' onClick={() => updatePage(2)}>Calendar</div>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] pl-[10px] pt-[5px] text-[20px] font-midium' onClick={() => updatePage(3)}>Region</div>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] pl-[10px] pt-[5px] text-[20px] font-midium' onClick={() => updatePage(4)}>Country</div>
                                    <div className='h-[40px] bg-[#75767b] hover:bg-[#96989e] text-[white] rounded-[10px] mt-[5px] pl-[10px] pt-[5px] text-[20px] font-midium' onClick={() => updatePage(5)}>Currency</div>
                                </div>
                            </div>
                            
                            {/* BUSINESSDATA */}
                            <div className="dropdown1"> 
                                <div className="dropbtn1 bg-C-Blue flex justify-between items-center" onClick={()=>{
                                    let x=showRTB=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowRTB(x);
                                    }}>
                                        <button className='ml-[20px] text-[20px] font-midium'>Business Data</button>
                                        <ChevronRightSharpIcon className='drop-icon mr-[10px]' />
                                </div>
                                {/* <button className="dropbtn1">Distribution Data</button> */}
                                <div className={showRTB}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[20px] font-midium' onClick={() => updatePage(6)}>Office</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[20px] font-midium' onClick={() => updatePage(7)}>Branch</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[20px] font-midium' onClick={() => updatePage(8)}>Department</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[20px] font-midium' onClick={() => updatePage(9)}>Service</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[20px] font-midium' onClick={() => updatePage(10)}>ServiceGroup</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[20px] font-midium' onClick={() => updatePage(11)}>ProcessingProfile</div>
                                    {/* <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(12)}>ClearingProperty</div> */}
                                </div>
                            </div><br></br>  

                            {/* DISTRIBUTIONDATA */}
                            <div className="dropdown1"> 
                                <div className="dropbtn1 bg-C-Blue flex justify-between items-center" onClick={()=>{
                                    let x=showAD=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowAD(x);
                                    }}>
                                        <button className='ml-[20px] text-[20px] font-midium'>Distribution Data</button>
                                        <ChevronRightSharpIcon className='drop-icon mr-[10px]' />
                                </div>
                                {/* <button className="dropbtn1">Distribution Data</button> */}
                                <div className={showAD}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(6)}>MOP</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(7)}>MOPCluster</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(8)}>MOPPreference</div>
                                    <div className=' min-h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] mt-[5px] pl-[10px] text-[18px] font-midium' onClick={() => updatePage(9)}>Membership Directory</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(10)}>Clearing Persona</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(11)}>MembershipProperty</div>
                                    <div className=' h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(12)}>ClearingProperty</div>
                                </div>
                            </div><br></br>
                            
                            {/* CUSTMERDATA */}
                            <div className="dropdown1">
                                <div className="dropbtn1 flex justify-between items-center" onClick={()=>{
                                    let x=showAD=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowAD(x);
                                    }}>
                                        <button className='ml-[20px] text-[20px] font-midium'>Customer Data</button>
                                        <ChevronRightSharpIcon className='drop-icon mr-[10px]' />
                                </div>
                                {/* <button className="dropbtn1">Customer Data</button> */}
                                
                                <div className={showAD}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(13)}>Party</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(14)}>Account</div>
                                    
                                </div>
                            </div><br></br>

                            {/* USERDATA */}
                            <div className="dropdown1"> 
                                <div className="dropbtn1 bg-C-Blue flex justify-between items-center" onClick={()=>{
                                    let x=showRTB=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowRTB(x);
                                    }}>
                                        <button className='ml-[20px] text-[20px] font-midium'>User Data</button>
                                        <ChevronRightSharpIcon className='drop-icon mr-[10px]' />
                                </div>
                                {/* <button className="dropbtn1">Distribution Data</button> */}
                                <div className={showRTB}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(6)}>UserProfile</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(7)}>Role</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(8)}>UserRoleProfile</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(9)}>ApprovalSetup</div>
                                </div>
                            </div><br></br> 

                            {/* SYSTEMDATA  */}
                            <div className="dropdown1"> 
                                <div className="dropbtn1 bg-C-Blue flex justify-between items-center" onClick={()=>{
                                    let x=showRTB=='hidden'?'block rounded-[10px] ml-[50px] w-[200px] z-[1] mt-[5px]':'hidden';
                                    setshowRTB(x);
                                    }}>
                                        <button className='ml-[20px] text-[20px] font-midium'>System Data</button>
                                        <ChevronRightSharpIcon className='drop-icon mr-[10px]' />
                                </div>
                                {/* <button className="dropbtn1">Distribution Data</button> */}
                                <div className={showRTB}>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(6)}>IDConfiguration</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(7)}>TemrinalProfile</div>
                                    <div className='h-[40px] bg-[#75767b] text-[white] hover:bg-[#96989e] rounded-[10px] mt-[5px] text-center text-[20px] font-midium' onClick={() => updatePage(8)}>RouteConfigProfile</div>
                                </div>
                            </div><br></br>  
                        </div>
                    </div>
                
                {/* PROCESSING-DATA */}
                <div className="dropdown">
                        <div className="dropbtn flex justify-between"  onClick={()=>{
                            let x=showPD=='hidden'?'block ml-[50px] rounded-[10px] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowPD(x);
                        }}>
                            <button className='ml-[5px] text-[20px] font-midium'>Application Data</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        
                        <div className={showPD}>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>TenateMaster</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>MessageFormat</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>MessageFunction</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>MessageType</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>EventMaster</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>BusinessFunctionProfile</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>TaskMaster</div>
                            <div onClick={() => updatePage(15)}  className='hover:bg-[#95959546] bg-[#55565b] mt-[5px]  dropdown11 hover:text-[black] text-[18px]'>ActivityFlowMaster</div>
                        </div>
                    </div>

                {/* INSTRUCTIONS */}
                    <div className="dropdown">
                        <div className="dropbtn flex justify-between"  onClick={()=>{
                            let x=showID=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowID(x);
                        }}>
                            <button className='ml-[5px] text-[20px] font-midium'>Instructions</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        
                        <div className={showID}>
                            <div onClick={() => updatePage(15)}  className='text-center dropdown11 hover:text-[black]'>Instructions View</div>
                        </div>
                    </div>

                    {/* TRANSACTIONS */}
                    <div className="dropdown">
                        <div className="dropbtn flex justify-between"  onClick={()=>{
                                let x=showTB=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                                setshowTB(x);
                            }}>
                                
                                <button className='ml-[5px] text-[20px] font-midium'>Transactions</button>
                                <ChevronRightSharpIcon className='drop-icon'/>
                            </div>
                            <div className={showTB}>
                                <div onClick={() => updatePage(16)} className='text-center dropdown11 hover:text-[black]'>Transactions View</div>
                            </div>
                    </div>

                 {/* RELATED-TRANSACTIONS */}
                    <div className="dropdown">
                        <div className="dropbtn flex justify-between" onClick={()=>{
                            let x=showRTB=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowRTB(x);
                        }}>
                           
                            <button className=' text-[20px] font-midium'>Related Transactions</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        
                        <div className={showRTB}>
                            <div className='text-center hover:text-[black] dropdown11'>Link 1</div>
                        </div>
                    </div>
                    {/* APRROVALS */}
                    <div className="dropdown">
                        <div className="dropbtn flex justify-between" onClick={()=>{
                            let x=showAD=='hidden'?'block ml-[50px] rounded-[10px] bg-[#55565b] hover:bg-[#95959546] border-solid border-[2px] border-[black] w-[250px] z-[1] mt-[5px]':'hidden';
                            setshowAD(x);
                        }}>
                            
                            <button className='ml-[5px] text-[20px] font-midium'>Approvals</button>
                            <ChevronRightSharpIcon className='drop-icon'/>
                        </div>
                        <div className={showAD}>
                            <div className='text-center hover:text-[black] dropdown11'>Link 1</div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
