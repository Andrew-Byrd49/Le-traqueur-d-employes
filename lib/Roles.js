const db = require("../db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");

const rolePromptArr = [
  {
    type: "input",
    name: "roleName",
    message: "What is the name of the role you would like to add?",
  },
  {
    type: "input",
    name: "salary",
    message: "Please enter the salary of the role you are adding.",
  },
];

const viewRoles = () => {
  const sql = `SELECT
                roles.id,
                roles.job_title AS job,
                roles.salary,
                departments.dept_name AS department
              FROM roles
                LEFT JOIN departments ON roles.department_id = departments.id`;
  db.promise().query(sql)
    .then(([rows, fields]) => {
      console.table(rows);
      return startPrompt();
    })
    .catch(console.log);
};

const roleParams = () => {
  inquirer.prompt(rolePromptArr)
  .then((answers) => {
    const params = [answers.roleName, answers.salary];

    const deptSql = `SELECT id, dept_name FROM departments`;

    db.query(deptSql, (err, deptData) => {
      if (err) {
        console.log(err);
      } else {
        const deptArr = deptData.map(({ id, dept_name }) => ({
          name: dept_name,
          value: id,
        }));
        inquirer
          .prompt([
            {
              type: "list",
              name: "department",
              message: "What department is this role in?",
              choices: deptArr,
            },
          ])
          .then((deptChoice) => {
            const newRoleDept = deptChoice.department;
            params.push(newRoleDept);

            addNewRole(params);
          });
      }
    });
  });
};

const addNewRole = (params) => {
  const sql = `INSERT INTO roles (job_title, salary, department_id)
                VALUES (?, ?, ?)`;

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Added to roles`);
      viewRoles();
    }
  });
};


module.exports = { viewRoles, roleParams, addNewRole }