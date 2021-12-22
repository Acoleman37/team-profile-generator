// using Employee constructor 
const Employee = require('../lib/Employee');
 
// creating employee object  
test('creates an employee object', () => {
    const employee = new employee('Alec', '37', 'aleccoleman123@gmail', 'Acoleman37');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github) .toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Alec', '37', 'aleccoleman123@gmail', 'Acoleman37');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Alec', '37', 'aleccoleman123@gmail', 'Acoleman37');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const employee = new Employee('Alec', '37', 'aleccoleman123@gmail', 'Acoleman37');

    expect(employee.getRole()).toEqual("employee");
})