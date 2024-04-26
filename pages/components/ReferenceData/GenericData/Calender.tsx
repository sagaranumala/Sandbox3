import React, { useState } from 'react';
import Example from '../../GenericTable';
import Theader from '../../Theader';
import List from '../../List';

const Calender = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <span className='mb-[20px]'>ReferenceData -&gt; GenericData -&gt; Calender</span>
      <Theader showlist={showList} setshowList={setShowList} />
      {showList ? <List /> : <Example />}
    </div>
  );
};

export default Calender; // Default export of the Calender component
