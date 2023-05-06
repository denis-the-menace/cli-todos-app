import { existsSync, readFileSync } from "fs";

export const list = ({ name, tag, done }) => {
  if (!existsSync("todos.json")) {
    console.log("You don't have any tasks.");
    return;
  }

  const tasksObj = JSON.parse(readFileSync("todos.json").toString());

  const tasks = tasksObj.tasks.filter((task) => {
    if (name && !task.name.includes(name)) return false;
    if (tag && (!task.tag || !task.tag.includes(tag))) return false;
    if (done && task.done !== (done === "true")) return false;
    return true;
  });

  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }

  const taskTable = tasks.map((task) => {
    return {
      name: task.name,
      tag: task.tag || "",
      done: task.done ? "✔️" : "❌",
    };
  });

  console.table(taskTable);
};
