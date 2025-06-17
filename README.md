# A-FUNCTIONAL-CHAT-APPLICATION-WITH-A-SERVER-AND-MULTIPLE-CLIENTS-COMMUNICATING-IN-REAL-TIME

COMPANY: CODTECH IT SOLUTIONS

NAME: AYAN MONDAL

INTERN ID: CT06DL1393

DOMAIN: JAVA PROGRAMMING

DURATION: 6 WEEKS

MENTOR : NEELA SANTOSH

Here is a 500-word project description tailored to your client-server chat application using Java sockets, multithreading, IntelliJ IDEA (backend), and VS Code (frontend):

---
*DESCRIPTION* :
### **Project Title:**

**Build a Client-Server Chat Application Using Java Sockets and Multithreading to Handle Multiple Users**

### **Project Description:**

In the modern digital landscape, real-time communication systems are a cornerstone of interactive applications ranging from messaging platforms to collaborative workspaces. This project focuses on developing a **real-time client-server chat application** using **Java sockets** and **multithreading**, allowing multiple users to communicate simultaneously over a network. The project is built with **IntelliJ IDEA** for the backend and **Visual Studio Code (VS Code)** for designing a lightweight, interactive frontend interface.

The backend core of the system is a **multi-threaded server** implemented in Java using **`java.net` socket programming**. The server listens for incoming client connections and spawns a new thread for each connected client, enabling concurrent communication. This thread-per-client model ensures that the server can handle multiple users at the same time, each in its own communication session, without blocking or crashing the system.

Each client in the system is also a Java application that establishes a connection with the server using a socket. Once connected, clients can send and receive messages in real time. The server acts as a message relay, broadcasting incoming messages from one client to all other connected clients. This architecture simulates a basic **group chat system**, where every message sent is visible to all users in the room.

On the **frontend**, an interactive and simple **HTML/CSS/JavaScript** interface is developed using **VS Code**. This UI allows users to enter their name, connect to the chat server, send messages, and view real-time message streams from other users. The frontend connects to the Java backend using **WebSocket** or a bridge mechanism such as a local JavaScript client (in JavaFX/WebView or Electron-style packaging) depending on implementation preference.

### Key Features:

* **Java Socket Programming:** Ensures low-level, reliable connection between clients and server.
* **Multithreading:** Each client is handled by a dedicated thread, enabling simultaneous communication.
* **Broadcasting Messages:** The server forwards each message to all connected clients to support group chat functionality.
* **Client Input/Output Streams:** Message exchange is achieved through input and output data streams.
* **Scalable Design:** The architecture can be extended to include private messaging, login systems, or database support.
* **User-Friendly Interface:** The frontend displays messages in real time, with a clean, readable layout.

### Technologies Used:

* **Backend:** Java (Socket, ServerSocket, Thread, DataInputStream, DataOutputStream), IntelliJ IDEA
* **Frontend:** HTML, CSS, JavaScript, Visual Studio Code
* **Architecture:** TCP/IP Client-Server with multithreaded request handling

This project demonstrates fundamental concepts in **network programming**, **concurrency**, and **UI development**. It highlights how client-server models operate, how multithreading ensures responsiveness and scalability, and how sockets enable real-time bidirectional communication.

In conclusion, this Java-based chat application provides a strong foundation for building real-time communication systems. It can be further extended into a complete messaging platform with features such as user authentication, message encryption, chat history, and file sharing. The integration of robust backend logic with an intuitive frontend offers a comprehensive learning experience in full-stack software development.

---
*OUTPUT* : ![Image](https://github.com/user-attachments/assets/d050c574-68e8-4c57-b6a4-7cc57a0eed25)
