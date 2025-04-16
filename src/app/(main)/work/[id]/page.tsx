"use client";
import { motion, AnimatePresence } from "framer-motion";
import { use } from "react";

export default function WorkDetail(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = use(props.params);
  const searchParams = use(props.searchParams);
  const isd = searchParams.isd;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="p-6"
      >
        <h3>Project {id}</h3>
        <p>A brief description of the project.</p>
      </motion.div>
    </AnimatePresence>
  );
}
