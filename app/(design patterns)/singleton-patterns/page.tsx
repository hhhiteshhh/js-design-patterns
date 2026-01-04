import LiveExample from "@/components/singleton-patterns/LiveExample";

function SignleTonPattern() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Singleton Pattern</h1>
      <p className="text-gray-500 text-lg">
        The Singleton design pattern ensures that a class has only one instance
        and provides a global point of access to that instance. This is useful
        for coordinating actions across a system, such as managing a single
        database connection pool, a logging utility, or application-wide
        configuration settings.
        <br />
        <br />
        In modern JavaScript, the module system itself acts as a natural
        singleton, as imported modules are executed only once and share the same
        cached instance across the application.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Implementation Methods</h2>
        <p className="text-gray-500 text-lg">
          Here are two common ways to implement the Singleton pattern in
          JavaScript:
        </p>
        <ul className="mt-4 list-decimal list-inside">
          <li>
            <span className="font-bold">
              Using a Class with a Static Method (Lazy Initialization){" "}
            </span>
            This approach uses an ES6 class and a static method (getInstance) to
            control instantiation. The instance is created only when it is first
            requested (lazy initialization).
          </li>
          <Example1 />
          <p className="font-bold">
            To ensure the instance cannot be modified after creation, you can
            use Object.freeze(loggerInstance).
          </p>
          <li className="mt-4">
            <span className="font-bold">
              Using an Immediately Invoked Function Expression (IIFE) / Module
              Pattern{" "}
            </span>
            This is a classic JavaScript pattern that uses a closure to maintain
            a private instance and exposes a public method to access it. In
            modern JavaScript environments with modules, you can simply export
            an object literal or an instance directly.
          </li>
        </ul>
        <Example2 />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Tradeoffs</h2>
        <p className="font-semibold">Advantages</p>
        Resource Management: Prevents high memory usage by ensuring only one
        instance of a heavy object (like a database connection) is created.
        <br />
        Centralized Control: Provides a single, global access point for
        coordinating system-wide actions.
        <br />
        Namespace Protection: Better than global variables as it avoids
        polluting the global namespace.
        <br />
        <p className="font-semibold"> Disadvantages:</p>
        Testing Challenges: The global state makes it difficult to isolate
        components for unit testing, as tests can affect each other through the
        shared instance.
        <br />
        Tight Coupling & Hidden Dependencies: Components become tightly coupled
        to the singleton, making the code less flexible and harder to maintain.
        <br />
        Violates Single Responsibility Principle: The class is responsible both
        for its core function and for managing its own unique instantiation,
        which violates the SRP.
      </div>

      <LiveExample />
    </div>
  );
}

export default SignleTonPattern;

function Example1() {
  return (
    <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
      <code>{`class Logger {
  constructor() {
    if (Logger.instance) {
      // If an instance already exists, return the existing one
      return Logger.instance;
    }
    // Otherwise, create the new instance and store it
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(\`[LOG]: \${message}\`);
  }

  getLogCount() {
    return this.logs.length;
  }
}

// Global access point
const loggerInstance1 = new Logger(); 
const loggerInstance2 = new Logger();

loggerInstance1.log("User logged in");
loggerInstance2.log("Data fetched");

console.log(loggerInstance1.getLogCount()); // Output: 2
console.log(loggerInstance1 === loggerInstance2); // Output: true, both point to the same instance
`}</code>
    </pre>
  );
}

function Example2() {
  return (
    <>
      <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
        <code>
          {`// counter.js - This module is a singleton by default
let count = 0;

export default {
    getCount: () => count,
    increment: () => ++count,
    decrement: () => --count
};`}
        </code>
      </pre>

      <p>
        Any file that imports this module will share the exact same count
        variable and methods:
      </p>
      <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
        <code>{`// main.js
import counter from './counter.js';

console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1

// anotherFile.js
import counter from './counter.js';
console.log(counter.getCount()); // 1 (the same instance is shared)
`}</code>
      </pre>
    </>
  );
}
