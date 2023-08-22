/* eslint-disable @next/next/no-img-element */
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 1.8]);
  const fadeIn = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]); // Adjust the range as needed
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos <= 0.4 ? "#0d0d0d" : "#000000";
  });

  return (
    <section className="relative z-10 mt-[-40vh] h-[400vh]">
      <div ref={targetRef} className="mb-[-120vh] h-[300vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, opacity }} className="origin-top">
              <div className="h-[50vh]  w-[50vw]">
                <motion.div
                  style={{ backgroundColor: position }}
                  className="h-full rounded-md transition-colors ease-in-out"
                >
                  <motion.div
                    style={{ opacity: fadeOut }}
                    className="flex justify-start bg-[#353535] p-2  rounded-tl-md duration-300 rounded-tr-md"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mx-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </motion.div>
                  <div className="text-green-300 font-mono p-2">
                    {/* You can add your terminal content here */}
                    $ ls
                    <br />
                    file1.txt file2.txt
                    <br />
                    $ cd documents
                    <br />
                    $ nano readme.txt
                    <br />
                    ...
                    <motion.div
                      style={{ opacity: fadeIn }}
                      className="w-full h-full flex justify-center items-center"
                    >
                      <div className="bg- top-0 p-4 rounded-md shadow-lg">
                        Content above the image
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Display a div above the image when it scales */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
