import { ResumeItems, EducationItems } from "../constant/data";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section className="section" id="resume">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp}>My Resume</motion.h2>
        {/* Wrapper */}
        <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
          {ResumeItems.map((item) => (
            <motion.div
              variants={variants.fadeInUp}
              key={item.id}
              className="divide-y divide-neutral-800"
            >
              {/* title */}
              <h3 className="text-2xl font-semibold mt-8 pb-3">{item.title}</h3>
              {/* list */}
              <div className="mt-10 space-y-8 whitespace-pre-line">
                {item.list.map((listItem, index) => (
                  <div
                    key={index}
                    className="border border-neutral-800 rounded-xl p-5"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between text-left"
                    >
                      <div>
                        <a
                          href={listItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-cyan-400 transition-colors"
                        >
                          <h4 className="text-xl">{listItem.role}</h4>
                        </a>

                        <p>{listItem.label}</p>
                      </div>

                      <div className="flex items-center gap-5">
                        <p className="border border-neutral-700 p-2.5 text-white">
                          {listItem.time}
                          <br />
                          <small>{listItem.duration}</small>
                        </p>

                        <RiArrowRightSLine
                          className={`text-3xl transition-transform duration-300 ${
                            openIndex === index ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {openIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 pl-5 list-disc space-y-2 text-zinc-300"
                    >
                      {listItem.experience}
                    </motion.ul>
                  )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;