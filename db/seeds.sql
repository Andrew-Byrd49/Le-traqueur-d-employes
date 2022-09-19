INSERT INTO departments (dept_name)
VALUES
    ('UI/UX Design'),
    ('Development'),
    ('Legal'),
    ('Accounts Managment');

INSERT INTO roles (job_title, salary, department_id)
VALUES
    ('Graphic Designer', 55000, 1),
    ('UI/UX Designer', 80000, 1),
    ('Front-end Developer', 85000, 2),
    ('Back-end Developer', 95000, 2),
    ('Accounts Manager', 54000, 4),
    ('Accountant', 60000, 4),
    ('Legal Assistant', 80000, 3),
    ('Lawyer', 120000, 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Sarah', 'Foltz', 1, 2),
    ('Griffin', 'Rodriguez', 2, 3),
    ('Paul', 'Mescal', 3, null),
    ('Phoebe', 'Bridgers', 4, 4),
    ('Jimmithy', 'Halpert', 5, null),
    ('Josh', 'Dobbs', 6, 5),
    ('Claire', 'O', 7, null);