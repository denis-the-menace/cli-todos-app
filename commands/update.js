import { existsSync, readFileSync, writeFile } from "fs";

export const update = (index, { name, tag, done }) => {
  if (!existsSync("todos.json")) {
    console.log("You don't have any todos.");
    return;
  }

  const tasksObj = JSON.parse(readFileSync("todos.json").toString());

  const updatedTask = { ...tasksObj.tasks[index] };

  if (name) updatedTask.name = name;
  if (tag) updatedTask.tag = tag;
  if (done) updatedTask.done = done;

  tasksObj.tasks[index] = updatedTask;

  const json = JSON.stringify(tasksObj);
  writeFile("todos.json", json, (err) => {
    if (err) return console.log(err);
    console.log("Task has been updated successfully.");
  });
};
