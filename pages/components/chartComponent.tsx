import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const DynamicApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartData {
  name: string;
    users: number;
}
interface Title{
  title:string;
}
interface SideBarProps {
  chartData:ChartData[]
  Title:string
}

const ChartComponent: React.FC<SideBarProps> = ({chartData,Title}) => {
  //const [chartData, setChartData] = useState<ChartData[]>([]);

  // useEffect(() => {
  //   // Fetch or calculate chart data
  //   const data: ChartData[] = [
  //     { name: 'In Progress', users: 2000000000 },
  //     { name: 'Completed', users: 1500000000 },
  //     { name: 'Duplicated', users: 1000000000 },
  //     { name: 'Rejected', users: 500000000 },
  //   ];
  //   setChartData(data);
  // }, []);

  const chartSeries = chartData.map((item: { users: any; }) => item.users);
  const chartLabels = chartData.map((item: { name: any; }) => item.name);

  const chartOptions: ApexOptions = {
    labels: chartLabels,
    chart: {
      width: '50',
      height: '50',
      type: 'pie',
    },
    // colors: ['lightgray', '#00E396', '#FEB019', '#FF4560','gray'],
  };

  return (
    <div className='shadow-[0px_0px_4px_0px_#00000040] pt-[5px] p-[20px] flex text-[black] flex-col gap-y-[30px] justify-center items-center bg-[white] rounded-[10px]'>
      <h1 className=''>{Title}</h1>
      <DynamicApexChart
        type="pie"
        series={chartSeries}
        options={chartOptions}
      />
    </div>
  );
};

export default ChartComponent;
