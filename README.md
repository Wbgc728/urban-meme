# urban-meme
Employee Management System

## DESCRIPTION
AS a business owner you can use this application to view and manage the departments, roles, and employees in your company which in turn will allow you to better organize and plan your business.

##INSTALLATION
This application uses SQL so will need to be installed and running by the host.

After the sql install while running sql ```SOURCE schema.sql``` should be run. If examples are needed data can be seeded with ```SOURCE seeds.sql```

The neccessary dependencies can be installed by running 

```
npm i

```

##USAGE

The application can be started with

```
npm start

```
From there a command-line application that accepts user input to:
- view all departments (presented with a formatted table showing department names and department ids)
- view all all roles (presented with the job title, role id, the department that role belongs to, and the salary for that role)
- view all employees (presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to)
- add a department (enter the name of the department and that department is added to the database)
- add a role (enter the name, salary, and department for the role and that role is added to the databa)
- add an employee (enter the employee’s first name, last name, role, and manager, and that employee is added to the database)
- update an employee role (select an employee to update and their new role and this information is updated in the database )

More detail is shown in the example video:

https://drive.google.com/file/d/19T40RsJpYzr1qlq4V49k1XYUjhanovqd/view



## LINKS

https://wbgc728.github.io/urban-meme/

https://github.com/Wbgc728/urban-meme
