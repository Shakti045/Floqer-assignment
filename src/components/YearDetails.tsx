import { Table, TableColumnsType } from "antd";
import { salarydata } from "../data/salaries";
import {Salarydata} from '../types/index'

type YearDetailsType = {
    [job_title:string]:number
}


interface DataType {
     key: React.Key;
    'jobtitle': string;
    'numberofjobs': number;
 }
 

 const columns: TableColumnsType<DataType> = [
   {
     title: 'Job Title',
     dataIndex: 'jobtitle',
   },
   {
     title: 'Number Of Jobs',
     dataIndex: 'numberofjobs',
     sorter: {
        compare: (a, b) => a.numberofjobs - b.numberofjobs,
    }
   },
 ];

 

const YearDetails = ({year}:{year:number}) =>{
    const jobsofthisyear : Salarydata[] = salarydata.filter((data)=>data.work_year===year);
    console.log(jobsofthisyear)
    const yeardetails:YearDetailsType = jobsofthisyear.reduce((acc:YearDetailsType,data)=>{
         if(acc.hasOwnProperty(data.job_title)){
            acc[data.job_title]++;
            return acc;
         }
         return {...acc,[data.job_title]:1};
    },{})
    console.log(yeardetails)
    const finaldata = Object.keys(yeardetails).map((job_title)=>{
        return {key:crypto.randomUUID(),jobtitle:job_title,numberofjobs:yeardetails[job_title]}
    })

    return (
        <Table columns={columns} dataSource={finaldata} size="small" />
    );
}

export default YearDetails;