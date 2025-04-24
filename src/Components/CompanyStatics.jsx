import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CompanyStatistics() {
  const stats = [
    { title: "Partners", value: 100, suffix: "+" },
    { title: "Projects", value: 2548, suffix: "" },
    { title: "Years", value: 10, suffix: "+" },
    { title: "Unique designs", value: 256, suffix: "" },
  ];

  return (
    <div className="py-16 px-4 md:px-16 lg:px-32 text-white w-full ">
      <h2 className="text-4xl font-bold mb-8">Company Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} title={stat.title} value={stat.value} suffix={stat.suffix} />
        ))}
      </div>
    </div>
  );
}

function StatItem({ title, value, suffix }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [inView, controls, value]);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = duration / value;
    if (inView) {
      const timer = setInterval(() => {
        start += 1;
        setCount((prev) => (prev < value ? prev + 1 : value));
        if (start >= value) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <motion.span className="text-4xl font-bold">{count}{suffix}</motion.span>
      <p className="text-gray-300 mt-2">Natus error sit voluptatem accusantium doloremque laudantium.</p>
    </div>
  );
}
