### Task Scheduler (Queue-Based)

#### Overview

This project demonstrates how a **queue data structure** works using a simple task scheduler. Tasks are added to a queue and processed **one at a time** in the exact order they were added.

This mimics real-world systems like email queues, file uploads, or message processing systems.

---

#### Data Structure Used: Queue (FIFO)

A **queue** follows the **FIFO principle**:

> **First In, First Out**

* The first task added is always the first task processed.
* New tasks go to the **end** of the queue.
* Processing always happens from the **front** of the queue.

---

#### How the Logic Works

**1. Adding Tasks (Producer)**

* When a user enters a task and clicks **Add Task**, the task is:

  * Added to the end of the queue using `push()`
  * Saved in `localStorage` to persist data after refresh

**2. Viewing the Queue**

* All tasks are displayed in a list in FIFO order
* The first task in the array represents the **next task to be processed**

**3. Processing Tasks (Consumer)**

* Clicking **Process Task** removes the first task in the queue using `shift()`
* This ensures tasks are processed strictly in the order they were added
* After processing:

  * The queue is updated
  * The next available task becomes the new “current task”

---

#### Why This Design

* A single **Process Task** button enforces FIFO behavior
* Users cannot skip tasks or process them out of order
* This models a **single-consumer queue**, similar to backend job processors

---

#### Key Concepts Demonstrated

* Queue data structure
* FIFO (First In, First Out)
* Producer–Consumer pattern
* State persistence using `localStorage`
* DOM manipulation with JavaScript

---

✅ **Result:** A simple but realistic task scheduler that correctly demonstrates how queues work in real-world systems.