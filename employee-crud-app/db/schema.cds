namespace employee.db;

using { cuid, managed } from '@sap/cds/common';

entity Employees : cuid, managed {
    empId : String(10);
    empName : String(100);
    email : String(100);
    role: String(50);
    department : String(50);
    salary : Decimal(15,2);
}