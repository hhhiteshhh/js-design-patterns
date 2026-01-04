import LiveExample from "@/components/constructor-patterns/LiveExample";

function ConstructorPattern() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Constructor Pattern</h1>
      <p className="text-gray-500 text-lg">
        The constructor pattern in JavaScript is a creational design pattern
        used for creating multiple similar objects that share a common structure
        and behavior. It involves defining a blueprint—either a traditional
        constructor function or an ES6 class—and then instantiating objects
        using the new keyword.
      </p>
      <div className="mt-4">
        <TraditionalConstructor />
      </div>
      <div className="mt-4">
        <ES6Class />
      </div>

      <LiveExample />
    </div>
  );
}

export default ConstructorPattern;

function TraditionalConstructor() {
  return (
    <div>
      <h2 className="text-xl font-bold">
        Traditional Constructor Functions (ES5)
      </h2>
      <p className="text-gray-500 text-lg">
        Before ES6 classes were introduced, developers used regular functions as
        constructors.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>
          <span className="font-bold">Definition:</span> A function is created
          to serve as the object's blueprint. Convention dictates capitalizing
          the function name.
        </li>
        <li>
          <span className="font-bold">Instantiation:</span> The new keyword is
          essential when calling the constructor function. This action creates a
          new empty object, binds this to that new object, executes the function
          body (adding properties/methods to this), and returns the new object.
        </li>
        <li>
          <span className="font-bold">Memory Efficiency (Prototype):</span> A
          drawback of defining methods directly inside the constructor is that a
          new copy of the method is created for every instance, which is memory
          inefficient. This is mitigated by defining shared methods on the
          constructor's prototype property.
        </li>
      </ul>

      <TraditionalConstructorExample />
    </div>
  );
}

function TraditionalConstructorExample() {
  // Use <pre> and <code> to display code correctly as text
  return (
    <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
      <code>{`// The constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Adding a shared method to the prototype for memory efficiency
Car.prototype.displayCar = function() {
  return \`\${this.make} \${this.model} (\${this.year})\`;
};

// Creating instances
const car1 = new Car('Toyota', 'Corolla', 2021);
const car2 = new Car('Honda', 'Civic', 2023);

console.log(car1.displayCar()); // Output: Toyota Corolla (2021)
console.log(car2.displayCar()); // Output: Honda Civic (2023)
`}</code>
    </pre>
  );
}

function ES6Class() {
  return (
    <div>
      <h2 className="text-xl font-bold">ES6 Classes</h2>
      <p className="text-gray-500 text-lg">
        ES6 introduced the class syntax, which is a more modern and readable way
        to implement the constructor pattern. It is largely "syntactical sugar"
        over the traditional constructor/prototype pattern, doing the same thing
        under the hood.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>
          <span className="font-bold">Definition:</span> A class keyword defines
          the blueprint.
        </li>
        <li>
          <span className="font-bold">constructor method:</span>A special method
          within the class called constructor handles object initialization and
          property assignment.
        </li>
        <li>
          <span className="font-bold">Methods:</span> Methods defined directly
          within the class body (outside the constructor method) are
          automatically added to the class's prototype and shared among all
          instances.
        </li>
      </ul>
      <ES6ClassExample />

      <p className="text-xl font-bold"> Key Advantages</p>
      <ul>
        <li>
          <span className="font-bold">Reusability:</span>
          Provides a single blueprint for creating multiple objects.
        </li>
        <li>
          <span className="font-bold"> Consistency:</span> Ensures all instances
          of a type have the same properties and methods.
        </li>
        <li>
          <span className="font-bold">Encapsulation:</span> Groups related data
          and behavior into a single, manageable unit.
        </li>
        <li>
          <span className="font-bold">Inheritance:</span> Forms the foundation
          for inheritance in JavaScript through the prototype chain.
        </li>
      </ul>
    </div>
  );
}

function ES6ClassExample() {
  return (
    <pre className="overflow-auto bg-gray-100 p-4 rounded-md mt-4">
      <code>{`// ES6 Class Example
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // This method is automatically shared via the prototype
  displayCar() {
    return \`\${this.make} \${this.model} (\${this.year})\`;
  }
}

// Creating instances with the 'new' keyword
const car1 = new Car('Toyota', 'Corolla', 2021);
const car2 = new Car('Honda', 'Civic', 2023);

console.log(car1.displayCar()); // Output: Toyota Corolla (2021)
console.log(car2.displayCar()); // Output: Honda Civic (2023)
`}</code>
    </pre>
  );
}
