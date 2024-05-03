import React, { useState } from 'react'

const Profile = () => {

    const [operator1,setoperator1]=useState('US INSTANT PAYMENTS')
    const [operator2,setoperator2]=useState('US Ingenico Transactions PAYMENTS')
    const [approver1,setApprover1]=useState('Reference Data')
    const [approver2,setApprover2]=useState('Duplicate Transactions')

  return (
    <div className=' flex flex-col'>
         {/* <h1 className='text-[20px] font-bold text-[blue]'>User Profile</h1> */}
         <span className='mb-[20px] self-start text-[20px] text-[black]'>User Profile -&gt; Profile View</span>
         <div className='border-solid border-[2px] border-black p-[30px] rounded-[10px] bg-[white] self-start'>
         <div className='flex justify-center gap-[100px] mt-[20px] '>
             <div className='border-solid border-C-Blue border-[2px] rounded-[10px] '>
                 <div className='bg-C-Btn1 rounded-t-[10px] h-[50px]'><h2 className='text-[20px] font-sans ml-[60px]'>personal details</h2></div>
                 <div className='flex flex-col justify-center items-center gap-[10px] p-[30px]'>
                     <div>
                        <label htmlFor="firstname">First Name: </label><br></br>
                        <input id="firstname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="lastname">Last Name: </label><br></br>
                        <input id="lastname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Email">Email: </label><br></br>
                        <input id="Email" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Phone">Phone: </label><br></br>
                        <input id="Phone" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                 </div>
             </div>


             <div className='border-solid border-C-Blue border-[2px] rounded-[10px]'>
             <div className='bg-C-Btn1 rounded-t-[10px] h-[50px]'><h2 className='text-[20px] font-sans ml-[60px]'>Role details</h2></div>
                 <div className='flex flex-col justify-center items-center gap-[10px] p-[30px]'>
                     <div>
                        <label htmlFor="firstname">TimeZone: </label><br></br>
                        <input id="firstname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="lastname">User Name: </label><br></br>
                        <input id="lastname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Email">Password: </label><br></br>
                        <input id="Email" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Phone">Role: </label><br></br>
                        <input id="Phone" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                 </div>
             </div>
         </div>


         <div className='border-solid border-C-Blue border-[2px] rounded-[10px] mt-[50px]'>
         <div className='bg-C-Btn1 rounded-t-[10px] h-[50px]'><h2 className='text-[20px] font-sans ml-[60px]'>Personal details</h2></div>
                 <div className='flex justify-center items-center gap-[100px] mt-[20px] p-[30px]'>
                       <div>
                          <div>
                             <label htmlFor="operator">Operator: </label>
                             <input id="firstname" type="text" value={operator1} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                          </div>
                          <div className='mt-[20px]'>
                              <label htmlFor="operator">Operator: </label>
                              <input id="lastname" type="text" value={operator2} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                         </div>
                       </div>
                       <div>
                          <div>
                             <label htmlFor="Email">Level-1 Approver: </label>
                             <input id="Email" type="text" value={approver1} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                         </div>
                         <div className='mt-[20px]'>
                             <label htmlFor="Phone">Level-2 Approver: </label>
                             <input id="Phone" type="text" value={approver1} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                         </div>
                       </div>
                 </div>
             </div>
             </div>
             <div className='ml-[85%] mt-[10px]'>Version # | Time Zone</div>
    </div>
  )
}

export default Profile
