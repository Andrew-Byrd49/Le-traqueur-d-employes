const db = require('./db/connection');
const inquirer = require('inquirer');

const {
    showDepartments,
    addDepartment
} = require('./lib/Departments');

const {
    viewEmployees,
    newEmployeePrompt,
    chooseEmployee
} = require('./lib/Employee');

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

const promptArr = [
    'View departments',
    'View roles',
    'View employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role',
    'Exit'
]

startPrompt = function () {

    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: promptArr
    })
    .then (({ action }) => {
        switch (action) {
            case 'View departments':
                showDepartments();
                break;

            case 'View roles':
                viewRoles();
                break;

            case 'View employees':
                viewEmployees();
                break;

            case 'Add a department':
                addDepartment();
                break;

            case 'Add a role':
                roleParams();
                break;

            case 'Add an employee':
                newEmployeePrompt();
                break;

            case 'Update an employee role':
                chooseEmployee();
                break;

            case 'Exit':
                console.log('Bye!');
                process.exit();
        }
    });
};