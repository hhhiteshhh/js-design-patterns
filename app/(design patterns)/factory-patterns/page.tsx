import LiveExample from "@/components/factory-patterns/LiveExample";
import React from "react";

function FactoryPattern() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Factory Pattern</h1>
      <p className="text-gray-500 text-lg">
        The Factory design pattern in JavaScript is a creational pattern that
        provides an interface or function for creating objects without
        explicitly specifying their concrete classes or constructors. It
        encapsulates the logic of object creation, making the codebase more
        modular, flexible, and maintainable.
      </p>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Key Concepts</h2>
        <ul className="my-4 list-decimal list-inside">
          <li>
            <span className="font-bold">Encapsulation: </span>
            The logic for creating objects is centralized in a single "factory"
            function or method, hiding the complexity from the rest of the
            application (client code).
          </li>
          <li>
            <span className="font-bold">Decoupling: </span>
            The client code interacts with the factory interface rather than
            concrete classes, reducing tight coupling.
          </li>
          <li>
            <span className="font-bold">Flexibility & Scalability: </span>
            New object types can be added by simply updating the factory logic,
            without modifying the existing client code that uses the factory.
          </li>
          <li>
            <span className="font-bold">Dynamic Creation: </span>
            The exact type of object to be created can be determined at runtime
            based on specific conditions or parameters.
          </li>
        </ul>
        <h2 className="text-xl font-bold">
          Implementation Example (Factory Function)
        </h2>
        <p>
          In modern JavaScript, the pattern is often implemented using a simple
          function that returns an object, without using the new keyword.
        </p>

        <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
          <code>{`// 1. Define the "products" (objects with common behavior)
function emailNotifier(message) {
  return {
    send: function() {
      console.log(\`Sending Email with message: \${message}\`);
    }
  };
}

function smsNotifier(message) {
  return {
    send: function() {
      console.log(\`Sending SMS with message: \${message}\`);
    }
  };
}

// 2. Define the factory function
function notificationFactory(type, message) {
  switch (type) {
    case 'email':
      return emailNotifier(message);
    case 'sms':
      return smsNotifier(message);
    default:
      throw new Error('Unknown notification type');
  }
}

// 3. Use the factory in client code
const email = notificationFactory('email', 'Hello World!');
const sms = notificationFactory('sms', 'Your code is 1234.');

email.send(); // Output: Sending Email with message: Hello World!
sms.send();   // Output: Sending SMS with message: Your code is 1234.
`}</code>
        </pre>
      </div>

      <p className="font-bold">
        In this example, the client code (where email and sms are created)
        doesn't need to know the internal structure of emailNotifier or
        smsNotifier, promoting a cleaner, more organized design.
      </p>

      <LiveExample />
    </div>
  );
}

export default FactoryPattern;
