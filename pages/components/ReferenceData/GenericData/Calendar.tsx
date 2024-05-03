import React, { useState } from 'react';
import Example from '../../GenericTable';
import Theader from '../../Theader';
import List from '../../List';

const Calendar = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div >
      <span className='mb-[20px] self-start text-[20px]'>ReferenceData -&gt; GenericData -&gt; Calendar</span>
      
      <div>
          <Theader showlist={showList} setshowList={setShowList} />
          {showList ? <List /> : <Example />}
          <div className='ml-[85%] mt-[10px]'>Version # | Time Zone</div>
      </div>
      
    </div>
  );
};

export default Calendar; // Default export of the Calendar component
