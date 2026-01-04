import LiveExample from "@/components/observer-patterns/LiveExample";
import React from "react";

function ObserverPattern() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Observer Pattern</h1>
      <p className="text-gray-500 text-lg">
        The Observer design pattern in JavaScript is a behavioral pattern where
        an object, known as the subject, maintains a list of its dependents,
        called observers, and notifies them automatically of any state changes.
        This creates a one-to-many dependency, allowing objects to communicate
        without being tightly coupled.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Key Components</h2>
        <ul className="my-4 list-decimal list-inside">
          <li>
            <span className="font-bold">Subject (Observable): </span>
            The object that holds the state and manages observers. It provides
            methods to subscribe (add), unsubscribe (remove), and notify
            observers.
          </li>
          <li>
            <span className="font-bold">Observer: </span>
            The objects that want to be notified of changes in the subject. They
            must implement an update() method (or a similar callback function)
            that the subject calls when a change occurs.
          </li>
          <li>
            <span className="font-bold">Notification: </span>
            The process by which the subject calls the observers' update
            methods, often passing the changed data as an argument.
          </li>
        </ul>
        <h2 className="text-xl font-bold">
          Implementation Example in JavaScript
        </h2>
        <p>
          This vanilla JavaScript example demonstrates how to implement the
          observer pattern using ES6 classes.
        </p>

        <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
          <code>{`class Subject {
  constructor() {
    // List of observers (functions to be called)
    this.observers = [];
  }

  /**
   * Add an observer to the list
   * @param {Function} observer - The observer function
   */
  subscribe(observer) {
    this.observers.push(observer);
  }

  /**
   * Remove an observer from the list
   * @param {Function} observer - The observer function
   */
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  /**
   * Notify all observers of a change
   * @param {*} data - The data to pass to observers
   */
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

// Observers can be simple functions
const logger = (data) => {
  console.log(\`\${new Date().toLocaleTimeString()}: \${data}\`);
};

const alerter = (data) => {
  alert(\`Update received: \${data}\`);
};

// Usage
const newsFeed = new Subject();

// Subscribe observers
newsFeed.subscribe(logger);
newsFeed.subscribe(alerter);

// A state change triggers notification
newsFeed.notify("Breaking News: New JavaScript Pattern Article Published!");

// An observer can unsubscribe dynamically
newsFeed.unsubscribe(alerter);

newsFeed.notify("Another update, but alerter won't see this.");
`}</code>
        </pre>
      </div>
      <LiveExample />
    </div>
  );
}

export default ObserverPattern;
