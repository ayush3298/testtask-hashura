export interface Department {
  departmentId: string;
  name: string;
}

export interface Employee {
  employeeId: string;
  first_name: string;
  departmentId: string;
  workingHours: number;
  projectsAssigned: number;
}
