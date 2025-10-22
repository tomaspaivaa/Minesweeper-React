# Minesweeper React

This project consists of a browser-based implementation of the classic Minesweeper game, developed using React JS.

## Project Overview
The goal of this project is to recreate the **Minesweeper** experience in a browser environment using only **React functional components** and **custom CSS**.  
It emphasizes clear code structure, efficient state management, and a responsive user interface.

This project served as a way to deepen understanding of **React hooks**, **event handling**, and **recursive algorithms** for managing complex game logic.

## Technologies Used
- **React 18** – Component-based UI framework  
- **JavaScript (ES6+)** – Game logic and interactivity  
- **HTML5** – Page structure and semantic layout  
- **CSS3** – Styling 
- **Node.js & npm** – Development environment and package management 

## Implemented Features
- **Random board generation** — Unique mine layouts each time the game starts  
- **Left-click actions** — Reveal cells and display the number of adjacent mines  
- **Right-click actions** — Mark and unmark potential mine locations (🚩 and ❓)  
- **Recursive expansion** — Automatically reveals neighboring empty areas  
- **Multiple difficulty levels:**
  - Beginner — 9×9 grid, 10 mines  
  - Intermediate — 16×16 grid, 40 mines  
  - Advanced — 30×16 grid, 99 mines  
- **Game timer** — Tracks how long you’ve been playing  
- **Mine counter** — Displays remaining mines  
- **Game-over detection** — Automatically ends the game when a mine is clicked or all are flagged  
- **Restart button** — Instantly reset the board for a new round   

## Como executar
```bash
npm install
npm start
```

## Live Demo
You can view the website here:  
[Minesweeper React](https://tomaspaivaa.github.io/Minesweeper-React/)

---

*This work was completed as part of the “Script Languages” course during the 2023/2024 academic year. (Grade: 9 out of 10)*
