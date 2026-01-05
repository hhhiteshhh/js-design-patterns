import LiveExample from "@/components/proxy-patterns/LiveExample";

function ProxyPattern() {
  return (
    <div className="mt-4 flex flex-col">
      <h1 className="text-2xl font-bold">Proxy Pattern</h1>
      <p className="text-gray-500 text-lg">
        The Proxy design pattern is a structural pattern where a proxy object
        acts as a surrogate or placeholder for another object (the "real
        subject") to control access to it. This allows the proxy to intercept
        operations and add extra functionality such as logging, validation, or
        caching without modifying the original object's code.
      </p>
      <h2 className="text-xl font-bold">
        Implementation Example in JavaScript
      </h2>
      <p>
        The Proxy object in JavaScript is created with two parameters: a target
        object and a handler object.
      </p>
      <ul className="my-4 list-decimal list-inside">
        <li>Target: The original object being proxied.</li>
        <li>
          Handler: An object containing "traps," which are methods that
          intercept specific operations (e.g., get for property access, set for
          property assignment, apply for function calls).
        </li>
      </ul>
      <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
        <code>{`const targetUser = {
  name: 'Alice',
  age: 30
};

const handler = {
  get(obj, prop) {
    console.log(\`Property '\${prop}' was accessed.\`);
    // Use Reflect.get() to safely forward the operation to the target
    return Reflect.get(obj, prop);
  },
  set(obj, prop, value) {
    console.log(\`Changed property '\${prop}' from \${obj[prop]} to \${value}\`);
    // Use Reflect.set() to safely set the value on the target
    return Reflect.set(obj, prop, value);
  }
};

const proxyUser = new Proxy(targetUser, handler);

// Interacting with the proxy triggers the 'get' trap
console.log(proxyUser.name); // Logs: Property 'name' was accessed. | Alice

// Setting a property on the proxy triggers the 'set' trap
proxyUser.age = 31; // Logs: Changed property 'age' from 30 to 31
`}</code>
      </pre>
      <LiveExample />
    </div>
  );
}

export default ProxyPattern;
