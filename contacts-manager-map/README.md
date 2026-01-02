## 📞 Contacts Manager (Map-Based)

### Description

This project is a simple Contacts Manager built using JavaScript’s **Map** data structure.
It allows users to store, search, update, and delete contacts using name–phone number pairs.

---

### 🧠 Why Map?

A `Map` is ideal for this use case because:

* Each contact name is a **unique key**
* Adding an existing name **updates** the contact instead of duplicating it
* Built-in methods like `.set()`, `.get()`, `.has()`, and `.delete()` make operations clean and fast
* It preserves insertion order, making rendering predictable

---

### ⚙️ Features

* Add or update a contact
* Search for a contact by name
* Delete a contact
* Persist contacts using `localStorage`
* Automatically re-renders UI from the Map (Map is the source of truth)

---

### 🗂️ How Data Is Stored

Since `Map` cannot be saved directly to `localStorage`, it is converted to an array before saving:

```js
Array.from(contactMap)
```

When loading:

```js
new Map(storedContacts)
```

---

### 🧠 Core Logic

* **Source of truth:** `Map`
* UI reflects Map state, not the other way around
* No duplicate contact names
* All changes sync immediately to localStorage

---

### 🚀 What This Project Demonstrates

* Proper use of `Map` for key–value data
* CRUD operations
* State-driven UI rendering
* Real-world data persistence patterns