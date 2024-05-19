export interface Salarydata {
    "work_year": number,
    "experience_level": string,
    "employment_type": string,
    "job_title": string,
    "salary": number,
    "salary_currency": string,
    "salary_in_usd": number,
    "employee_residence": string,
    "remote_ratio": number,
    "company_location": string,
    "company_size": string,
}



export interface YearlyData {
    totalJobs: number;
    totalSalary: number;
  }
  
export  interface AggregatedData {
    [year: number]: YearlyData;
  }
  
export  interface FinalData{
    year: number,
    totalJobs:number,
    avgsalary:number
  }