export interface Task{
    id: string;
    userId:string;
    title: string;
    summary: string;
    dueDate: string;
  }

  export interface NewTaskData{
  enteredTitle:string;
  enteredSummary:string;
  enteredDate:string;
  }