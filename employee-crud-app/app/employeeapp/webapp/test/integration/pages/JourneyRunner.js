sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/employeeapp/employeeapp/test/integration/pages/EmployeesList",
	"demo/employeeapp/employeeapp/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/employeeapp/employeeapp') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

