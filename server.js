const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

const {
    showDepartments,
    addDepartment
} = require('./lib/Departments');

const {
    viewEmployees,
    newEmployeePrompt,
    chooseEmployee
} = require('./lib/Employees');

const {
    viewRoles,
    roleParams
} = require('./lib/Roles');

db.connect((err) => {
    if (err) throw err;
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-');
    console.log('                                             ');
    console.log('Je suis le traqueur des employés, bienvenue!');
    console.log("  (I'm learning french, so bare with me.)");
    console.log('                                             ');
    console.log('-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-');
    startPrompt();
});

const propmtArr = [
    'View departments',
    'View roles',
    'View employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role',
    'Exit'
]

