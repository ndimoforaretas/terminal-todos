# Terminal To-Do List Manager

Welcome to the Terminal To-Do List Manager!

This is a simple interactive terminal application where you can manage your to-do list.

- It helps you practice JavaScript concepts such as:
  - arrays,
  - objects,
  - functions,
  - loops, and
  - user input handling.

---

## Features

- View your to-do list
- Add new to-do items
- Edit existing to-do items
- Delete to-do items
- ASCII art for an enhanced user experience

---

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

---

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <THE SSH CLONE LINK>
   ```

2. Navigate to the project directory:

   ```bash
   cd terminal-todos
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

---

### Running the Application

To start the To-Do List Manager, run the following command in your terminal:

```bash
npm start
```

---

### How to Use

1. The application will display a welcome message with ASCII art.
2. You will see a menu with the following options:
   - 1. View To-Do List
   - 2. Add To-Do Item
   - 3. Edit To-Do Item
   - 4. Delete To-Do Item
   - 5. Exit
3. Enter the number corresponding to your choice and follow the prompts.

### Example

```bash
===================================================
 _____           ____          _     _     _
|_   _|__       |  _ \  ___   | |   (_)___| |_
  | |/ _ \ _____| | | |/ _ \  | |   | / __| __|
  | | (_) |_____| |_| | (_) | | |___| \__ \ |_
 _|_|\___/      |____/ \___/  |_____|_|___/\__|
|  \/  | __ _ _ __   __ _  __ _  ___ _ __
| |\/| |/ _` | '_ \ / _` |/ _` |/ _ \ '__|
| |  | | (_| | | | | (_| | (_| |  __/ |
|_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|
                          |___/
===================================================


🤖 Action Menu:
--------------------------------

1. View To-Do List 👀
2. Add To-Do Item 📝
3. Edit To-Do Item 🖋️
4. Delete To-Do Item ❌
5. Exit ⏹️
--------------------------------

Choose an option: 1
--------------------------------

🤖 Your To-Do List:

🤔 There are currently no items in your to-do list.
--------------------------------
```

---

## Code Explanation

The code is written in JavaScript using modern ES6+ syntax. The `readline-sync` package is used to handle user input in the terminal. Here's a brief overview of the main parts of the code:

- **Importing readline-sync**: The `readline-sync` module is imported using ES6 `import` syntax.
- **ASCII Art**: The `appTitle` constant contains the ASCII art for the application title.
- **Menu Display**: The `showMenu` function displays the main menu options.
- **CRUD Operations**:
  - `viewToDoList` function displays all items in the to-do list.
  - `addToDoItem` function allows the user to add a new item to the list.
  - `editToDoItem` function allows the user to edit an existing item in the list.
  - `deleteToDoItem` function allows the user to delete an item from the list.
- **Main Function**:
  - `startToDoListManager` function contains the main loop that runs the application, displaying the menu and handling user input based on their choices.

---

## Contributing

Contributions are welcome!
If you have any ideas for improvements or new features, feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

Enjoy managing your tasks with the Terminal To-Do List Manager!
If you have any questions or need further assistance, feel free to reach out.

Happy coding! 🚀
