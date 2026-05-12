import React from "react";
import { heroIcons } from "../constant/data";
import Button from "./Button";
import { BackgroundGradient } from "./ui/BackgroundGradient";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40" id="home">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container flex flex-col items-center"
      >
        {/* Image */}
        <motion.div variants={variants.fadeIn}>
          <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
            <figure className="w-full h-full object-cover object-[75%_20%] rounded-3xl">
              <img
                src="/images/pic2.png"
                alt="Alex chen"
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
          </BackgroundGradient>
        </motion.div>
        {/* Content */}
        <div className="text-center mt-8">
          <motion.h1
            variants={variants.fadeInUp}
            className="text-3xl lg:text-5xl mb-1.5 font-bold"
          >
            Hi, I'm Chetram Bassit
          </motion.h1>
          <motion.h2 variants={variants.fadeInUp}>
            Full Stack Developer
          </motion.h2>
          <motion.h2
            variants={variants.fadeInUp}
            whileHover={{
              scale: 1.03,
              textShadow: "0px 0px 12px rgba(255,255,255,0.8)",
            }}
            className="
              mt-2
              text-center
              text-sm
              font-bold
              tracking-wide
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Where there's a code, there's a way!
          </motion.h2>
          {/* <motion.p
            variants={variants.fadeInUp}
            className="max-w-[820px] mx-auto mt-4 mb-6"
          >
            4+ years of experience as a developer and engineer utilizing Python for server-side and API development, data analysis, along with client-side development using JavaScript libraries and frameworks. 
            Development and debugging of features leading to an increase in users, user engagement, and revenue for clients. 
            Collaborating with others within an agile environment for efficient development. 
            Overall, a great passion and excitement for all things coding related.
          </motion.p> */}

          {/* Wrapper */}
          <motion.div
            variants={variants.fadeInUp}
            className="mt-5 flex items-center gap-5 justify-center"
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

          {/* btn wrapper */}
          <motion.div
            variants={variants.fadeInUp}
            className="mt-5 flex items-center gap-5 justify-center flex-wrap"
          >
            <a
              href="https://docs.google.com/document/d/1S8jfhozpEuRx-uLRRFenWU67ZjaAUVKmIASeataDxo8/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="View Resume"
                classes="primary-btn"
              />
            </a>
          </motion.div>

          {/* Made with */}
          <motion.div
            variants={variants.fadeInUp}
            className="pt-6 text-sm text-zinc-400 text-center"
          >
            Made with React and Tailwind CSS
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
