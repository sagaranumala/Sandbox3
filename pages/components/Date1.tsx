import React, { useState, useEffect } from 'react';

const DateTimeComponent: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', // Display the full name of the weekday (e.g., Monday)
  };

  const currentDate = new Date().toLocaleDateString(undefined, options);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return <div className='text-[white]'>{currentDate}, {currentDateTime}</div>;
};

export default DateTimeComponent;