import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FinalData } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const avgsalaryoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Average salary vs Year',
    },
  },
};


const totalJobsoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Number Of Jobs vs Year',
    },
  },
};




function Visualize({finaldata}:{finaldata:FinalData[]}) {
  const avgsalarydata = {
    labels:finaldata.map((data)=>data.year),
    datasets: [
      {
        label: 'Average Salary',
        data: finaldata.map((data) => data.avgsalary),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const totaljobsdata = {
    labels:finaldata.map((data)=>data.year),
    datasets:[{
      label: 'Number Of Jobs',
      data: finaldata.map((data) => data.totalJobs),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }],
  }

  return (
    <div className='chartcontainer'>
    <div className='chartwrapper'>
    <Line  options={avgsalaryoptions} data={avgsalarydata} />
    </div>
    <div className='chartwrapper'>
    <Line  options={totalJobsoptions} data={totaljobsdata} />
    </div>
   </div> 
  );
}

export default Visualize;
