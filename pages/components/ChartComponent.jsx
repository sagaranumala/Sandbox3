import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch or calculate chart data
    const data = [
      { name: 'In Progress', users: 2000000000 },
      { name: 'Completed', users: 1500000000 },
      { name: 'Duplicated', users: 1000000000 },
      { name: 'Rejected', users: 500000000 },
    ];
    setChartData(data);
  }, []);

  return (
    <div className='flex w-[30%] flex-col gap-y-[30px] justify-center items-center bg-[white] rounded-[10px]'>
      <h1 className='text-[20px] text-[black]'>Transaction Details</h1>
      <DynamicApexChart
        type="pie"
        
        series={chartData.map(item => item.users)}
        options={{
          labels: chartData.map(item => item.name),
        }}
      />
    </div>
  );
};

export default ChartComponent;
