### Undo–Redo System (Stack-Based)

#### Overview

This project demonstrates how an **undo and redo system** works using the **stack data structure**. It simulates the behavior found in text editors where users can undo and redo actions.

---

#### Data Structure Used: Stack (LIFO)

A **stack** follows the **LIFO principle**:

> **Last In, First Out**

* The most recent action is always the first to be undone.
* Redo restores the most recently undone action.

---

#### How the Logic Works

**1. Add Action**

* Each new action is pushed onto the `undoStack`
* The `redoStack` is cleared because redo history becomes invalid

**2. Undo**

* The last action is popped from `undoStack`
* That action is pushed into `redoStack`
* The new top of `undoStack` becomes the current state

**3. Redo**

* The last undone action is popped from `redoStack`
* It is pushed back into `undoStack`
* The current state updates accordingly

---

#### Key Concepts Demonstrated

* Stack data structure
* LIFO (Last In, First Out)
* Undo/Redo logic
* State management
* Edge case handling
* Data persistence with `localStorage`