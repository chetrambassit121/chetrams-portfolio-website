import React from "react";
import { contactItems, heroIcons } from "../constant/data";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800"
      >
        {/* Content */}
        <motion.div variants={variants.fadeIn}>
          <h2>Get In Touch</h2>
          <p className="mt-3.5 mb-7">
            Ready to work on your next project. Let's discuss how I can help
            bring your ideas to life.
          </p>

          {/* list */}
          <ul className="">
            {contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </ul>

          {/* Social profiles */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex items-center gap-5 justify-start"
          >
            {heroIcons.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
          
        </motion.div>
        <motion.p
          variants={variants.fadeInUp}
          className="max-w-[820px] mx-auto mt-4 mb-6"
        >
          Bringing thoughts and ideas into reality through coding is an extremely satisfying feeling. 
          From a young age, I have always aspired to develop or create ideas. 
          But how can one realistically do this? Of course, a great answer for my question is through Software Development. 
          One may use the amazing science of coding to revolutionize entire industries, impacting the lives of many. 
          Software Development has and will continue to create new ideas and improve existing ones. 
          Honored to be a small part of this coding ecosystem!
        </motion.p>

      </motion.div>
    </section>
  );
};

export default Contact;









