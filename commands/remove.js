import { existsSync, readFileSync, writeFile } from "fs";

export const remove = (indexes) => {
  if (!existsSync("todos.json")) {
    console.log("You don't have any todos.");
    return;
  }

  const tasksObj = JSON.parse(readFileSync("todos.json").toString());

  indexes.forEach((index) => {
    const task = tasksObj.tasks[index];

    if (!task) {
      console.log(`Task with index ${index} does not exist.`);
      return;
    }

    tasksObj.tasks.splice(index, 1);
  });

  const json = JSON.stringify(tasksObj);
  writeFile("todos.json", json, (err) => {
    if (err) return console.log(err);
    console.log("Tasks has been deleted successfully.");
  });
};
