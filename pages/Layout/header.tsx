import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import Date1 from '../components/Date1';

const Header = () => {
  return (

      <div className='w-full z-[100] bg-[#4F2D83] flex justify-between items-center h-[100px] pr-[30px] sticky top-[0px]'>
      <div className="w-32 rounded-lg w-[200px] h-[50px] md:w-[250px] md:h-[70px] ml-[50px] sm:ml-[20px]" data-aos="fade-left"> 
        <img src="/ip-white-logo.png" className='ml-[50px]' alt="Italian Trulli"/>
      </div>
        <div>
              <div className='flex items-center gap-[10px]'>
                  <div className='bg-[white] hover:bg-[gray] rounded-[10px] border-solid border-[2px] border-C-Btn1'><NotificationsNoneRoundedIcon className='h-[40px] w-[40px] text-[200] text-[blue] hover:text-[white]'/></div>
                  <div className='bg-[white] hover:bg-[gray] rounded-[10px] border-solid border-[2px] border-C-Btn1  flex justify-center items-center p-[5px]'><ChatBubbleOutlineOutlinedIcon className='h-[30px] w-[30px] text-[200] text-[blue] hover:text-[white]'/></div>
                  <div><PersonIcon className='h-[70px] w-[70px] text-[200] text-[white] '/></div>
                  <div>
                      <select name="role" id="role" className='h-[40px] rounded-[10px] bg-[lightgray] outline-none'>
                            <option value="Role" disabled selected>Role</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div>
                      <Date1/>
                </div>
        </div>
      </div>
     

  )
}

export default Header
