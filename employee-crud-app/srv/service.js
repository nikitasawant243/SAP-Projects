const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const {Employees} = this.entities;

    this.before('CREATE', Employees, async (req) => {
        const data = req.data;

        if (!data.empId || !data.empName || !data.email || !data.role || !data.department || data.salary == null) {
            req.error(400, 'Please provide EMP ID, EMP Name, Email ID, Role, Department, and Salary');
        }
    });
});