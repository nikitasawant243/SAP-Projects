using EmployeeService from '../../srv/employee-service';

annotate EmployeeService.Employees with @(
    UI.HeaderInfo: {
        TypeName: 'Employee',
        TypeNamePlural: 'Employees',
        Title: { Value: empName },
        Description: { Value: empId }
    },

    UI.SelectionFields: [
        empId,
        empName,
        email,
        role,
        department
    ],

    UI.LineItem: [
        { Value: empId, Label: 'EMP ID' },
        { Value: empName, Label: 'EMP Name' },
        { Value: email, Label: 'Email ID' },
        { Value: role, Label: 'Role' },
        { Value: department, Label: 'Department' },
        { Value: salary, Label: 'Salary' }
    ],

    UI.Facets: [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Employee Details',
            Target: '@UI.FieldGroup#EmployeeDetails'
        }
    ],

    UI.FieldGroup #EmployeeDetails: {
        Data: [
            { Value: empId, Label: 'EMP ID' },
            { Value: empName, Label: 'EMP Name' },
            { Value: email, Label: 'Email ID' },
            { Value: role, Label: 'Role' },
            { Value: department, Label: 'Department' },
            { Value: salary, Label: 'Salary' }
        ]
    }
);