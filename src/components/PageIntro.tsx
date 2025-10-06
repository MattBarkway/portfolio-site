import { motion } from "framer-motion";

export default function PageIntro() {
  return (
    <motion.div
      key="page-intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-white text-center"
    >
      <h1 className="text-4xl font-bold">Hi, I'm Matt</h1>
      <p className="mt-2 text-lg">
        👋 I'm a software developer based near Bristol
      </p>

      <div className="pt-6 pb-6 flex justify-center">
        <img src="/matt.jpeg" alt="Me" className="rounded-[35%] w-48" />
      </div>

      <h3 className="text-2xl font-semibold pb-4">
        Here are some recent projects I've worked on:
      </h3>
    </motion.div>
  );
}
