#! node
import { program } from "commander";
import { list } from "./commands/list.js";
import { add } from "./commands/add.js";
import { update } from "./commands/update.js";
import { remove } from "./commands/remove.js";

program.command("ls")
  .option("-n --name <name>", "List all todos with the input name.")
  .option("-t --tag <tag>", "List all todos with the input tag.")
  .option("-d --done <tag>", "List all todos by their status.")
  .description("List all todo tasks.")
  .action(list);
program
  .command("add <task...>")
  .option("-t --tag <tag>", "Add a tag to the task.")
  .description("Add a new todo task.")
  .action(add);
program
  .command("update <index>")
  .option("-n --name <name>", "Update the name of the task.")
  .option("-t --tag <tag>", "Update the tag of the task.")
  .option("-d --done <done>", "Update the status of the task.")
  .description("Update a todo task.")
  .action(update);
program
  .command("rm [indexes...]")
  .description("Delete a todo task.")
  .action(remove);
program.parse();
