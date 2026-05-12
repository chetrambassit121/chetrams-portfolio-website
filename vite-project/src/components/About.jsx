import React from "react";
import { aboutItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp}>About me</motion.h2>
        <motion.p variants={variants.fadeInUp} className="mt-3 mb-9">
          4+ years of experience as a developer and engineer utilizing Python for server-side and API development, data analysis, along with client-side development using JavaScript libraries and frameworks. 
          Development and debugging of features leading to an increase in users, user engagement, and revenue for clients. 
          Collaborating with others within an agile environment for efficient development. 
          Overall, a great passion and excitement for all things coding related.
        </motion.p>

        {/* Skills */}
        <div className="grid md:grid-cols-6 gap-10">

          {/* Column 1 */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Backend & Testing:
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems
                .filter((item) => item.id >= 1 && item.id <= 3)
                .map((item) => (
                  <motion.li variants={variants.fadeInUp} key={item.id}>
                    <p>✔ {item.label}</p>
                  </motion.li>
                ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Frontend & UI:
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems
                .filter((item) => item.id >= 4 && item.id <= 6)
                .map((item) => (
                  <motion.li variants={variants.fadeInUp} key={item.id}>
                    <p>✔ {item.label}</p>
                  </motion.li>
                ))}
            </ul>
          </div>

          {/* Column 3s */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Data Analysis & Data Visualization:
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems
                .filter((item) => item.id >= 7 && item.id <= 8)
                .map((item) => (
                  <motion.li variants={variants.fadeInUp} key={item.id}>
                    <p>✔ {item.label}</p>
                  </motion.li>
                ))}
            </ul>
          </div>

          {/* Column 4s */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Databases & Clouds:
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems
                .filter((item) => item.id >= 13 && item.id <= 14)
                .map((item) => (
                  <motion.li variants={variants.fadeInUp} key={item.id}>
                    <p>✔ {item.label}</p>
                  </motion.li>
                ))}
            </ul>
          </div>

          {/* Column 5s */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Version Control & Methodologies:
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems
                .filter((item) => item.id >= 11 && item.id <= 12)
                .map((item) => (
                  <motion.li variants={variants.fadeInUp} key={item.id}>
                    <p>✔ {item.label}</p>
                  </motion.li>
                ))}
            </ul>
          </div>

          {/* Column 6s */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="font-semibold text-white text-xl mb-3"
            >
              Web Analytics & Containers:
            </motion.p>

            <ul className="space-y-2.5">
              {aboutItems
                .filter((item) => item.id >= 9 && item.id <= 10)
                .map((item) => (
                  <motion.li variants={variants.fadeInUp} key={item.id}>
                    <p>✔ {item.label}</p>
                  </motion.li>
                ))}
            </ul>
          </div>



        </div>
      </motion.div>
    </section>
  );
};

export default About;
