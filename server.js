// Import and require mysql2 & Inquirer
const mysql = require('mysql2');
const inquirer = require('inquirer');

const table = require('console.table');
var figlet = require('figlet');

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

// // Title 
// figlet('EMPLOYEE DATABASE', (err, data) => {
//     console.log(err || data)
// });

db.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the Employee Database.');
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
                'View all departments',
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
            if (answer.task === 'View all departments') {
                viewDepartments();
            } else if (answer.task === 'View all roles') {
                viewRoles();
            } else if (answer.task === 'View all employees') {
                viewEmployees();
            } else if (answer.task === 'Add a department') {
                addDepartment();
            } else if (answer.task === 'Add a role') {
                addRole();
            } else if (answer.task === 'Add an employee') {
                addEmployee();
            } else if (answer.task === 'Update an employee role') {
                updateEmployeeRole();
            } else if (answer.task === 'End') {
                db.end();
            }
        })
}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
    db.query('SELECT department.id AS id, department.name AS deparment FROM department', (err, res) => {
        if (err) throw err;
        console.log('Viewing departments\n');
        console.table(res);
        userInput();
    })
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
    db.query('SELECT roles.id, roles.title, department.name AS department FROM roles INNER JOIN department ON roles.department_id = department.id', (err, res) => {
        if (err) throw err;
        console.log('Viewing roles\n');
        console.table(res);
        userInput();

    })
};

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, 
// first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
    console.log('Viewing all employees\n');

}


// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() {
    console.log('Adding a department\n');

}


// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
    console.log('Adding a role\n');

}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, 
// role, and manager, and that employee is added to the database
function addEmployee() {
    console.log('Adding an employee');

}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
function updateEmployeeRole() {
    console.log('Updating an employee role');

}

userInput();