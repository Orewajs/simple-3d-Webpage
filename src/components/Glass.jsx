import { motion } from "framer-motion";

const Glass = () => {
  return (
    <div className="flex h-screen  items-center justify-center text-white">
      <div
        className="pointer-events-none
rounded-full bg-[#38c7af18] px-16 py-8  backdrop-blur-sm"
        style={{
          boxShadow: "inset 0 0 5px #38c7af",
        }}
      >
        <h1 className="text-3xl">
          <AnimatedText text="Orewa.js" />
          <div className="font-extralight opacity-50">Creative developer</div>
        </h1>
        <div className="mt-10 flex justify-between gap-10 text-sm">
          <div className="flex gap-10">
            <Link href="https://www.instagram.com/orewa.js/">Instagram</Link>
            <Link href="https://www.tiktok.com/@orewa.js">TikTok</Link>
          </div>
          <p className="max-w-72">
            Join me on my journey to become the best creative developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glass;

// eslint-disable-next-line react/prop-types
const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="pointer-events-auto rounded-full border-2 border-white px-4 py-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
};

// eslint-disable-next-line react/prop-types
const AnimatedText = ({ text }) => {
  // eslint-disable-next-line react/prop-types
  const textArray = text.split("");
  return (
    <div className="flex gap-1">
      {textArray.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, x: -10, rotate: 90 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
