import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch or calculate chart data
    const data = [
      { name: 'Facebook', users: 2000000000 },
      { name: 'Instagram', users: 1500000000 },
      { name: 'Twitter', users: 1000000000 },
      { name: 'Telegram', users: 500000000 },
    ];
    setChartData(data);
  }, []);

  return (
    <div>
      <h1>Social Media Users</h1>
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
