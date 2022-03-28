USE employees_db;
INSERT INTO department (name)
-- Dept #1
VALUES ('Sales'); 
INSERT INTO department (name)
-- Dept #2
VALUES ('Engineering');
INSERT INTO department (name)
-- Dept #3
VALUES ('Finance');
INSERT INTO department (name)
-- Dept #4
VALUES ('Legal');


-- 1)
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1);
-- 2)
INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 80000, 1);
-- 3)
INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Engineer', 155000, 2);
-- 4)
INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 120000, 2);
-- 5)
INSERT INTO roles (title, salary, department_id)
VALUES ('Account Manager', 160000, 3);
-- 6)
INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 125000, 3);
-- 7)
INSERT INTO roles (title, salary, department_id)
VALUES ('Legal Team Lead', 250000, 4);
-- 8)
INSERT INTO roles (title, salary, department_id)
VALUES ('Lawyer', 190000, 4);



-- 1)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, null);

-- 2)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Chan', 2, 1);

-- 3)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ashley', 'Rodriguez', 3, null);

-- 4)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'Tupik', 4, 3);

-- 5)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kunal', 'Singh', 5, null);

-- 6)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Malia', 'Brown', 6, 5);

-- 7)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sarah', 'Lourd', 7, null);

-- 8)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Tom', 'Allen', 8, 7);
