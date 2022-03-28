// Import and require mysql2 & Inquirer
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

const PORT = process.env.PORT || 3001;


// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootroot',
    database: 'employees_db',
});

db.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the Employee Database.');
});



// Title 
var figlet = require('figlet');

figlet('EMPLOYEE DATABASE', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

// THEN I am presented with the following options: view all departments, view all roles, view all employees, 
// add a department, add a role, add an employee, and update an employee role

function userInput() {
    inquirer
        .prompt({
            type: 'list',
            name: 'task',
            message: 'Would you like to do?',
            choices: [
                'View all departments ',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'End'
            ]
        })
        .then(function(answer) {
            if (answer.choices === 'View all departments') {
                viewDepartments();
            } else if (answer.choices === 'View all roles') {
                viewRoles();
            } else if (answer.choices === 'View all employees') {
                viewEmployees();
            } else if (answer.choices === 'Add a department') {
                addDepartment();
            } else if (answer.choices === 'Add a role') {
                addRole();
            } else if (answer.choices === 'Add an employee') {
                addEmployee();
            } else if (answer.choices === 'Update an employee role') {
                updateEmployeeRole();
            } else if (answer.choices === 'End') {
                updateEmployeeRole();
            }
        })
}


function viewDepartments() {
    console.log('Viewing departments');

}

function viewRoles() {
    console.log('Viewing roles');

}

function viewEmployees() {
    console.log('Viewing all employees');

}

function addDepartment() {
    console.log('Adding a department');

}

function addRole() {
    console.log('Adding a role');

}

function addEmployee() {
    console.log('Adding an employee');

}

function updateEmployeeRole() {
    console.log('Updating an employee role');

}

userInput();