## 🧠 Unique Visitor Tracker (Set-Based)

### 📌 Description

A simple JavaScript web app that tracks **unique visitors** using a `Set`.
Each visitor is stored once, duplicates are automatically ignored, and data persists using `localStorage`.

---

### 🛠️ Core Concepts Used

* `Set` → ensures uniqueness automatically
* `localStorage` → persists data across page reloads
* DOM manipulation
* Event-driven programming

---

### ⚙️ Features

* Add a visitor ID (email / username / IP-style string)
* Prevent duplicate visitors
* Auto-normalize input (trim + lowercase)
* Display total unique visitors count
* Persist visitors across refresh
* Render visitor list dynamically

---

### 🧩 How It Works

1. Visitor enters an ID and clicks **Add Visitor**
2. Input is normalized and added to a `Set`
3. If the visitor already exists, it’s rejected/ignored.
4. The `Set` is converted to an array and saved in `localStorage`
5. On page load, stored visitors are rehydrated into the `Set`
6. UI re-renders from the current state

---

### 🚀 Why `Set`?

* No manual duplicate checks
* Cleaner logic
* Better performance for uniqueness
* Models real-world backend constraints (unique users, emails, sessions)

---

### 📚 What I Learned

* How Sets enforce uniqueness
* How frontend state mirrors backend logic
* How to persist and rehydrate application state
* Why data structures matter in real apps