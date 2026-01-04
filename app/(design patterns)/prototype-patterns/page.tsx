import LiveExample from "@/components/prototype-patterns/LiveExample";

function PrototypePattern() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Prototype Pattern</h1>
      <p className="text-gray-500 text-lg">
        The Prototype design pattern in JavaScript is a creational pattern that
        allows you to create new objects by copying an existing object, known as
        the prototype, instead of building them from scratch. This pattern
        leverages JavaScript's native prototypal inheritance mechanism and is
        especially useful when object creation is a costly or complex process.
      </p>

      <div className="mt-4">
        <h2 className="text-xl font-bold">Key Concepts</h2>
        <ul className="my-4 list-decimal list-inside">
          <li>
            <span className="font-bold">Prototypal Inheritance: </span>
            In JavaScript, every object implicitly links to a prototype object.
            When you try to access a property or method on an object, if it's
            not found on the object itself, JavaScript looks up the prototype
            chain until it finds it.
          </li>
          <li>
            <span className="font-bold">Cloning: </span>: Instead of using
            constructors with new to create an object, the prototype pattern
            uses an existing, fully initialized object as a blueprint and
            creates a copy (or a new object that inherits from it).
          </li>
          <li>
            <span className="font-bold">Efficiency: </span>
            This approach saves memory and time because all instances share the
            same methods and properties from a single prototype object, avoiding
            duplication of functions for each instance.
          </li>
        </ul>
        <h2 className="text-xl font-bold">
          Implementation using Object.create()
        </h2>
        <p>
          The most straightforward way to implement the prototype pattern in
          modern JavaScript is using Object.create(), which creates a new object
          and explicitly sets its prototype to an existing object.
        </p>
        <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
          <code>{`// The prototype object (blueprint)
const animalPrototype = {
  type: 'unknown',
  makeSound: function() {
    console.log('Some generic sound');
  },
  // A method to clone itself
  clone: function() {
    return Object.create(this); // Creates a new object that inherits from 'this'
  }
};

// Create a new object (dog) by cloning the prototype
const dog = animalPrototype.clone();
dog.type = 'Dog';
dog.makeSound = function() {
  console.log('Woof!');
};

// Create another new object (cat) by cloning the prototype
const cat = animalPrototype.clone();
cat.type = 'Cat';
cat.makeSound = function() {
  console.log('Meow!');
};

dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!
`}</code>
        </pre>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Advantages</p>
        Efficient Object Creation: Objects can be created quickly by copying
        existing ones, which is beneficial if the original creation involved
        expensive operations (e.g., network or database calls).
        <br />
        Dynamic Updates: Changes made to the prototype are immediately reflected
        in all instances that inherit from it, allowing for dynamic
        modifications at runtime.
        <br />
        Code Reusability: Shared properties and methods are defined once in the
        prototype, reducing code duplication across multiple instances.
        <br />
        Flexible Structure: The pattern allows you to create new objects without
        being coupled to concrete classes, enabling greater flexibility in
        object composition.
      </div>

      <LiveExample />
    </div>
  );
}

export default PrototypePattern;
