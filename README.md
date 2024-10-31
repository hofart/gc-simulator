# GC Simulator

> A project for exploring and simulating advanced Garbage Collection (GC) concepts in JavaScript/TypeScript

![GC Simulator Screenshot](./path_to_screenshot.png) <!-- Optional: Add a screenshot path -->

## 📜 Overview

GC Simulator is an educational project created to explore advanced garbage collection concepts, memory management, and event listener management in JavaScript and TypeScript. Using simulated data and a structured approach to resource management, this project aims to illustrate how garbage collection and memory allocation can be optimized in real-world applications.

## 🚀 Features

- **Simulated Heap Allocation**: Objects are dynamically allocated in memory, simulating a real heap structure.
- **Event Listener Management**: Centralized handling of API event listeners, enabling efficient cleanup and preventing memory leaks.
- **Automatic Garbage Collection Simulation**: Demonstrates *Mark-and-Sweep* GC principles, where unreferenced memory is marked and cleared.
- **API Integration**: Retrieves simulated data from a free API for demonstration, allowing you to observe GC concepts in action.
- **TypeScript Support**: Provides strong typing and a better developer experience for building robust memory management logic.

## 🎓 Learning Objectives

This project is designed to help you understand:

1. How garbage collection works in JavaScript.
2. Advanced concepts like *Mark-and-Sweep* GC.
3. Proper event listener management to prevent memory leaks.
4. Effective API integration and cleanup strategies for real-world applications.

## 📂 Project Structure

```plaintext
gc-simulator/
├── src/
│   ├── api/                     # API integration and fetch logic
│   ├── gc/                      # Core Garbage Collection logic
│   ├── listeners/               # Event listener manager
│   ├── components/              # Components for simulating data usage
│   └── main.ts                  # Main entry point
├── public/                      # Static assets (e.g., index.html)
├── README.md                    # Project documentation
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
