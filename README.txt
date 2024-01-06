npm install -g cli-todos-app

  -h, --help                display help for command.

Commands:
  ls [options]              List all todo tasks.
  add [options] <task...>   Add a new todo task.
  update [options] <index>  Update a todo task.
  rm [indexes...]           Delete a todo task.
  help [command]            display help for command.

List all todo tasks.
Usage: todos ls [options]
Options:
  -n --name <name>  List all todos with the input name.
  -t --tag <tag>    List all todos with the input tag.
  -d --done <tag>   List all todos by their status.
  -h, --help        display help for command.

Add a new todo task.
Usage: todos add [options] <task...>
Options:
  -t --tag <tag>  Add a tag to the task.
  -h, --help      display help for command.

Update a todo task.
Usage: todos update [options] <index>
Options:
  -n --name <name>  Update the name of the task.
  -t --tag <tag>    Update the tag of the task.
  -d --done <done>  Update the status of the task.
  -h, --help        display help for command.

Delete a todo task.
Usage: todos rm [options] [indexes...]
Options:
  -h, --help        display help for command.
