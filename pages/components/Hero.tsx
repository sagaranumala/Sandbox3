import Dashboard from './dashboard'
import Profile from './Profile'
import { useState } from 'react'
import Calender from './ReferenceData/GenericData/Calendar';
import Region from './ReferenceData/GenericData/Region';
import Country from './ReferenceData/GenericData/Country';
import Currency from './ReferenceData/GenericData/Currency';
import MOP from './ReferenceData/DistributionData/Mop';
import MOPCluster from './ReferenceData/DistributionData/MOPCluster';
import MOPPreference from './ReferenceData/DistributionData/MOPPreference';
import MembershipDirectory from './ReferenceData/DistributionData/MembershipDirectory';
import ClearingPersona from './ReferenceData/DistributionData/ClearingPersona';
import MembershipProperty from './ReferenceData/DistributionData/MembershipProperty';
import ClearingProperty from './ReferenceData/DistributionData/ClearingProperty';
import Instructions from './Instructions';
import Transactions from './Transactions';
import Account from './ReferenceData/CustomerData/Account';
import Party from './ReferenceData/CustomerData/Party';
import SideBar1 from './SideBar1';
import SideBar from './sideBar';
import FadeMenu from './SideBar2';



// interface IndexOfPage{
//    page1:number
// }
 
export default function Hero() {
    const [page,setPage]=useState<number>(0);

    const PageDisplay=()=>{
        return [<Dashboard key={0} name={''} users={0}/>, <Profile key={1}/>, <Calender key={2} />, <Region key={3} />, <Country key={4} />, <Currency key={5} />, <MOP key={6} />, <MOPCluster key={7} />, <MOPPreference key={8} />, <MembershipDirectory key={9} />, <ClearingPersona key={10} />, <MembershipProperty key={11} />, <ClearingProperty key={12} />, <Account key={13} />, <Party key={14} />, <Instructions key={15} />, <Transactions key={16} />][page];
    }

  return (
    <main>
         <hr className='sticky top-[100px] w-full text-[white] z-[100]'/>
         <div className='flex gap-[30px] w-[100%]'>
              <div className='sticky top-[101px]'>
                  <SideBar page={page} setPage={setPage}/>
                  {/* <FadeMenu/> */}
                  {/* <SideBar1/> */}
              </div>
              {/* <div className='w-[3px] h-[1500px] bg-[black]'>
                
              </div> */}
              <div className='w-[100%] pt-[10px] pr-[30px]'>
                    {
                    PageDisplay()
                  }
              </div>
         </div>
       
    </main>
  )
}