import { useEffect, useState } from "react";
import "./cursor.css";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: cursorPosition.x - 20,
          y: cursorPosition.y - 20,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
      ></motion.div>
      <motion.div
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
          transition: { type: "spring", mass: 2 },
        }}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
