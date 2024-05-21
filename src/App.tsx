import React from 'react'
import { salarydata } from './data/salaries'
import { AggregatedData, FinalData } from './types';
import DataTable from './components/DataTable';
import Visualize from './components/Visualize';
import ChatBot from './components/ChatBot';

const App = () => {

  const aggregateddata:AggregatedData = salarydata.reduce((acc:AggregatedData,data)=>{
    const year  = data.work_year;
    if (!acc.hasOwnProperty(year)) {
      acc[year] = { totalJobs: 1, totalSalary: data.salary_in_usd };
      return acc;
    }
    acc[year].totalJobs += 1;
    acc[year].totalSalary += data.salary_in_usd;
    return acc;
  },{});

  const finaldata : FinalData[] =  Object.keys(aggregateddata).map((year:string)=>{
    const yr:number = parseInt(year);
    return {
        year : yr,
        totalJobs : aggregateddata[yr].totalJobs,
        avgsalary : Math.floor(aggregateddata[yr].totalSalary / aggregateddata[yr].totalJobs)
      }
  })

  return (
    <div className=' h-[100vh]'>
      <DataTable finaldata = {finaldata}/>
      <Visualize finaldata = {finaldata}/>
      <ChatBot/>
    </div>
  )
}

export default App