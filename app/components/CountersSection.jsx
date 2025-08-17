"use client";
import { useEffect, useState, useRef } from "react";
import { Plus, Check } from "lucide-react";

const counterData = [
  { target: 50, label: "Customers Served" },
  { target: 30, label: "Oil and Gas Projects Completed" },
  { target: 20, label: "Gas Station Projects Completed" },
  { target: 10, label: "Years of Experience" },
  { target: 100, label: "Happy Customers", doubleCheck: true },
];

function CounterCard({ start = 3, target, label, doubleCheck = false }) {
  const [count, setCount] = useState(start);
  const [inView, setInView] = useState(false);
  const ref = useRef(null); 

 
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);


  useEffect(() => {
    if (!inView || doubleCheck) return;

    let current = start;
    const duration = 2000;
    const stepTime = 50;
    const increment = Math.ceil((target - start) / (duration / stepTime));

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView, target, start, doubleCheck]);

 
  useEffect(() => {
    if (!inView && !doubleCheck) setCount(start);
  }, [inView, start, doubleCheck]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-4 bg-white mb-12 rounded-lg shadow-md space-y-2 min-h-[120px]"
    >
      <div className="flex items-center space-x-2 text-green-500 text-3xl font-semibold">
        {!doubleCheck && <span>{count}</span>}
        {doubleCheck ? (
          <div className="flex space-x-1">
            <Check className="w-6 h-6" />
            <Check className="w-6 h-6" />
          </div>
        ) : (
          <Plus className="w-6 h-6" />
        )}
      </div>
      <p className="text-gray-700 text-sm text-center">{label}</p>
    </div>
  );
}

export default function CountersSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-12">
      {counterData.map((item, idx) => (
        <CounterCard
          key={idx}
          target={item.target}
          label={item.label}
          doubleCheck={item.doubleCheck}
        />
      ))}
    </div>
  );
}
