// Write your solution in this file!
const employee = {
    name: "Matt",
    streetAddress: "4919 Clintwood Lane",
  };



function updateEmployeeWithKeyAndValue(employee, key, value) {
const newEmployee = {...employee};
newEmployee[key] = value;
return newEmployee;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return Employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign(employee, key)
    newObject[employee] = '';
    return newObject[key];
}