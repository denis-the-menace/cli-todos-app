import { existsSync, readFileSync, writeFile } from "fs";

export const add = (name, { tag }) => {
  const task = {
    name: name.join(" "),
    tag: tag,
    done: false,
  };
  let json;

  if (existsSync("todos.json")) {
    const tasksObj = JSON.parse(readFileSync("todos.json").toString());
    tasksObj.tasks.push(task);
    json = JSON.stringify(tasksObj);
  } else {
    const tasksObj = {
      tasks: [task],
    };
    json = JSON.stringify(tasksObj);
  }

  writeFile("todos.json", json, (err) => {
    if (err) return console.log(err);
    console.log("Task has been added successfully.");
  });
};
