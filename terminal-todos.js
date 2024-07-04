// Import the readline-sync module for interactive terminal input
import readlineSync from "readline-sync";

// ASCII art for the application title
const appTitle = `
===================================================
 _____           ____          _     _     _
|_   _|__       |  _ \\  ___   | |   (_)___| |_
  | |/ _ \\ _____| | | |/ _ \\  | |   | / __| __|
  | | (_) |_____| |_| | (_) | | |___| \\__ \\ |_
 _|_|\\___/      |____/ \\___/  |_____|_|___/\\__|
|  \\/  | __ _ _ __   __ _  __ _  ___ _ __
| |\\/| |/ _\` | '_ \\ / _\` |/ _\` |/ _ \\ '__|
| |  | | (_| | | | | (_| | (_| |  __/ |
|_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|
                          |___/
===================================================
`;

// Function to display the main menu
console.log(appTitle);

function showMenu() {
  console.log("\n🤖 Action Menu:");
  console.log("--------------------------------\n");
  console.log("1. View To-Do List 👀");
  console.log("2. Add To-Do Item 📝");
  console.log("3. Edit To-Do Item 🖋️");
  console.log("4. Delete To-Do Item ❌");
  console.log("5. Exit ⏹️");
  console.log("--------------------------------\n");
}

// Function to view the to-do list
function viewToDoList(toDoList) {
  console.log("--------------------------------");
  console.log("\n🤖 Your To-Do List:\n");
  if (toDoList.length === 0) {
    console.log("🤔 There are currently no items in your to-do list.");
    console.log("--------------------------------\n");
  } else {
    toDoList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
    console.log("--------------------------------");
  }
}

// Function to add a new to-do item
function addToDoItem(toDoList) {
  const newItem = readlineSync.question("\n➕ Enter the new to-do item: ");
  toDoList.push(newItem);
  console.log("========================================\n");
  console.log(`"${newItem}" has been added to your to-do list.\n`);
  console.log("========================================\n");
}

// Function to edit an existing to-do item
function editToDoItem(toDoList) {
  const itemNumber = parseInt(
    readlineSync.question("\nEnter the number of the item you want to edit: "),
    10
  );
  if (itemNumber > 0 && itemNumber <= toDoList.length) {
    const newItem = readlineSync.question("Enter the new value for the item: ");
    toDoList[itemNumber - 1] = newItem;
    console.log("========================================\n");
    console.log(`Item ${itemNumber} has been updated to "${newItem}".\n`);
    console.log("========================================\n");
  } else {
    console.log("❗️Invalid item number.\n");
  }
}

// Function to delete a to-do item
function deleteToDoItem(toDoList) {
  const itemNumber = parseInt(
    readlineSync.question(
      "\nEnter the number of the item you want to delete: "
    ),
    10
  );
  if (itemNumber > 0 && itemNumber <= toDoList.length) {
    const deletedItem = toDoList.splice(itemNumber - 1, 1);
    console.log("========================================\n");
    console.log(`"${deletedItem}" has been removed from your to-do list.\n`);
    console.log("========================================\n");
  } else {
    console.log("❗️Invalid item number.\n");
  }
}

// Main function to run the To-Do List Manager
function startToDoListManager() {
  const toDoList = [];
  let isRunning = true;

  while (isRunning) {
    showMenu();

    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
      case "1":
        viewToDoList(toDoList);
        break;
      case "2":
        addToDoItem(toDoList);
        break;
      case "3":
        editToDoItem(toDoList);
        break;
      case "4":
        deleteToDoItem(toDoList);
        break;
      case "5":
        isRunning = false;
        console.log("\nExiting To-Do List Manager.\n");
        console.log("\nThank you for using the To-Do List Manager.\n");
        break;
      default:
        console.log(
          "\n ❗️Invalid option. Please choose a number between 1 and 5.\n"
        );
        console.log("\n❗️Please choose a number between 1 and 5.\n");
    }
  }
}

// Start the To-Do List Manager
startToDoListManager();
