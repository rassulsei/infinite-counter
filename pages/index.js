import { useEffect, useState } from "react";

export default function InfiniteCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center h-screen text-6xl font-mono">
      {count}
    </main>
  );
}
