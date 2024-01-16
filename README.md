https://typescript-frontend-project.netlify.app/

# React Chip Selector

A simple React application that allows users to select items from a list by typing and displays the selected items as chips.

## Features

-   When you click on the input field, a list of items appears.
-   As you type, the list shows only items that match what you're typing.
-   Clicking on an item turns it into a chip at the top, and the input field adjusts automatically.
-   Once an item becomes a chip, it is no longer in the list.
-   Each chip has an "X" icon. Clicking it removes the chip and adds the item back to the list.
-   Bonus: When the input is blank, and the user presses backspace, the last chip gets highlighted. Pressing backspace again deletes the highlighted chip.

## Tech Stack

-   React
-   TypeScript
-   Tailwind CSS

## Getting Started

1. Clone the repository:

```bash
  git clone https://github.com/Rakib7425/typescript_frontend_project.git
```

2. Navigate to the project directory:

```bash
cd your project directory
```

3. Install dependencies:

```bash
  yarn
```

4. Run the application:

```bash
yarn dev
```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to view the app.

## Usage

1. Type in the input field to see the list of available items.
2. Click on an item to add it as a chip.
3. Click the "X" icon on a chip to remove it.
4. Press backspace with an empty input field to remove the last chip.
