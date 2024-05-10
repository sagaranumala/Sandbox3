import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface DataType {
  [key: string]: string | number;
}

// interface Props {
//   data2: DataType;
// }

const Profile: React.FC = () => {
  const [operator1, setOperator1] = useState('US INSTANT PAYMENTS');
  const [operator2, setOperator2] = useState('US Ingenico Transactions PAYMENTS');
  const [approver1, setApprover1] = useState('Reference Data');
  const [approver2, setApprover2] = useState('Duplicate Transactions');
  const [data2, setData2] = useState<DataType>({email:"jhon@gmail.com",firstName:"Jhon",lastName:"kane",phone:+195554646644,timeZone:'6921',password:'123',userName:"jonson@123",Role:'Super Admin'});

 // console.log(process.env.M_URL);

//   const getData = () => {
//     axios.get('https://ip-userprofile-api.onrender.com')
//       .then(res => {
//         setData2(res.data[0]);
//         console.log(res.data[0])
//       }).catch(err => console.log(err));
//   }

//   useEffect(() => {
//     getData();
//   }, []);

   //  https://ip-userprofile-api.onrender.com

  return (
    <div className=' flex flex-col'>
         {/* <h1 className='text-[20px] font-bold text-[blue]'>User Profile</h1> */}
         <span className='mb-[20px] self-start text-[20px] text-[black]'>User Profile -&gt; Profile View</span>
         <div className='profileContainer p-[30px] rounded-[10px] bg-[white] self-start'>
         <div className='flex justify-center gap-[100px] mt-[20px] '>
             <div className='border-solid border-C-Blue border-[2px] rounded-[10px] '>
                 <div className='bg-C-Btn1 rounded-t-[10px] h-[50px] flex justify-center items-center'><h2 className='text-[20px] font-sans'>Personal details</h2></div>
                 <div className='flex flex-col justify-center items-center gap-[10px] p-[30px]'>
              {/* {Object.keys(data2).map((key: string, index: number) => (
               key!='_id'&&key!='__v'&&<div key={index}>
                     <div>
                        <label htmlFor="firstname">{key}: </label><br></br>
                        <input id="firstname" type="text" value={data2[key]} className='text-[20px] pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
               </div>
              ))} */}
                      <div>
                        <label htmlFor="firstname">First Name: </label><br></br>
                        <input id="firstname" type="text" value={data2.firstName} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="lastname">Last Name: </label><br></br>
                        <input id="lastname" type="text" value={data2.lastName} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Email">Email: </label><br></br>
                        <input id="Email" type="text" value={data2.email} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Phone">Phone: </label><br></br>
                        <input id="Phone" type="text" value={data2.phone} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
            </div>
             </div>


             <div className='border-solid border-C-Blue border-[2px] rounded-[10px]'>
             <div className='bg-C-Btn1 rounded-t-[10px] h-[50px] flex justify-center items-center'><h2 className='text-[20px] font-sans'>Role details</h2></div>
                 <div className='flex flex-col justify-center items-center gap-[10px] p-[30px]'>
                     <div>
                        <label htmlFor="firstname">TimeZone: </label><br></br>
                        <input id="firstname" type="text" value={data2.timeZone} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="lastname">User Name: </label><br></br>
                        <input id="lastname" type="text" value={data2.userName} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Password">Password: </label><br></br>
                        <input id="Password" type="password" value={data2.password} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                     <div>
                        <label htmlFor="Phone">Role: </label><br></br>
                        <input id="Phone" type="text" value={data2.Role} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                     </div>
                 </div>
             </div>
         </div>


         <div className='border-solid border-C-Blue border-[2px] rounded-[10px] mt-[50px]'>
         <div className='bg-C-Btn1 rounded-t-[10px] h-[50px] pt-[10px]'><h2 className='text-[20px] font-sans ml-[60px]'>Personal details</h2></div>
                 <div className='flex justify-center items-center gap-[100px] mt-[20px] p-[30px]'>
                       <div>
                          <div>
                             <label htmlFor="operator">Operator: </label>
                             <input id="firstname" type="text" value={operator1} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[320px] h-[30px]'/>
                          </div>
                          <div className='mt-[20px]'>
                              <label htmlFor="operator">Operator: </label>
                              <input id="lastname" type="text" value={operator2} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[320px] h-[30px]'/>
                         </div>
                       </div>
                       <div>
                          <div>
                             <label htmlFor="Email">Level-1 Approver: </label>
                             <input id="Email" type="text" value={approver1} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[320px] h-[30px]'/>
                         </div>
                         <div className='mt-[20px]'>
                             <label htmlFor="Phone">Level-2 Approver: </label>
                             <input id="Phone" type="text" value={approver2} className='pl-[10px] border-[black] border-[2px] border-solid rounded-[5px] w-[320px] h-[30px]'/>
                         </div>
                       </div>
                 </div>
             </div>
             </div>
             <div className='ml-[80%] mt-[10px]'>Version # | Time Zone</div>
    </div>
  )
}

export default Profile
