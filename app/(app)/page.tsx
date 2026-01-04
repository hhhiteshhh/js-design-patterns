import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Desing patterns</h1>
      <p className="text-gray-500 text-lg">
        Design patterns in JavaScript are proven, reusable solutions to common
        software design problems. They help you write cleaner, scalable, and
        maintainable code, which is especially important in real-world
        (industrial) applications.
      </p>
      <Navbar />
    </div>
  );
}
