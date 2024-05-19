import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { FinalData } from '../types';
import YearDetails from './YearDetails';


interface DataType {
   key: React.Key;
   'year': number;
   'totalJobs': number;
   'avgsalary':number;
   'expandable':boolean;
   'YearDetails':React.ReactNode
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Year',
    dataIndex: 'year',
    sorter: {
        compare: (a, b) => a.year - b.year,
    }
  },
  {
    title: 'Total Jobs',
    dataIndex: 'totalJobs',
    sorter: {
      compare: (a, b) => a.totalJobs - b.totalJobs,
    },
  },
  {
    title: 'Average Salary',
    dataIndex: 'avgsalary',
    sorter: {
      compare: (a, b) => a.avgsalary - b.avgsalary,
    },
  },
];



const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const DataTable = ({finaldata}:{finaldata:FinalData[]}) => {

    const data:DataType [] = finaldata.map((d)=>{
        return {key:crypto.randomUUID(),...d,expandable:true,YearDetails:<YearDetails year = {d.year}/>}
    })


    return (
        <Table columns={columns} 
            expandable={{
            expandedRowRender: (record) => record.YearDetails,
            rowExpandable: (record) => record.expandable,
           }} 
          dataSource={data} onChange={onChange}  />
    );
};

export default DataTable;