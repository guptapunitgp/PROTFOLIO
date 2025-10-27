import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faLink, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import CustomHook from './CustomHook';

export default function Contacts() {
  const divs = useRef([]);
  const scrollTab = useRef();
  divs.current = [];

  const attachRef = (el) => {
    if (el && !divs.current.includes(el)) divs.current.push(el);
  };

  const [listContacts] = useState([
    {
      title: 'Phone',
      value: '+91 9079289874',
      href: 'tel:+919079289874',
      icon: faPhoneAlt,
      aria: 'Call Punit Gupta',
    },
    {
      title: 'Email',
      value: 'punitg505@gmail.com',
      href: 'mailto:punitg505@gmail.com',
      icon: faEnvelope,
      aria: 'Email Punit Gupta',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/punit-gupta-18a930255',
      href: 'https://www.linkedin.com/in/punit-gupta-18a930255',
      icon: faLink,
      aria: 'Punit Gupta on LinkedIn',
    },
  ]);

  CustomHook(scrollTab, divs);

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const heartBeat = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  return (
    <section
      className="contacts py-12 px-6 sm:px-10 bg-gray-900 text-gray-100"
      ref={scrollTab}
      aria-label="Contact Information"
    >
      <div className="max-w-6xl mx-auto" ref={attachRef}>
        {/* ---- CONTACT HEADER ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="title mb-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight text-white"
          >
            Contact Me
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-400 mt-2 max-w-2xl mx-auto"
          >
            Feel free to connect for collaborations, internships, or just to share your ideas 💡
          </motion.p>
        </motion.div>

        {/* ---- CONTACT CARDS ---- */}
        <div className="list grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {listContacts.map((item, idx) => (
            <motion.article
              key={idx}
              ref={attachRef}
              className="item flex items-start gap-4 p-5 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx + 1}
              variants={fadeUp}
              role="listitem"
            >
              <motion.div
                className="icon w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/10 text-blue-400 text-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 250, damping: 15 }}
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>

              <div className="content">
                <h3 className="text-sm font-semibold text-gray-300">{item.title}</h3>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.aria}
                  className="block mt-1 text-blue-400 hover:underline break-all"
                  whileHover={{ x: 4 }}
                >
                  {item.value}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ---- THANK YOU + DIVINE KRISHNA ---- */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-semibold text-gray-200 mb-3"
          >
            Thank You for Visiting 🙏
          </motion.h3>

          {/* Hearts only */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              className="text-red-500 text-3xl"
              variants={heartBeat}
              animate="animate"
            >
              <FontAwesomeIcon icon={faHeart} />
            </motion.div>

            <motion.div
              className="text-red-500 text-3xl"
              variants={heartBeat}
              animate="animate"
            >
              <FontAwesomeIcon icon={faHeart} />
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            custom={4}
            className="text-gray-400 text-sm mb-8"
          >
            — Built with ❤️ and ⚡ by <span className="text-blue-400">Punit Gupta</span>
          </motion.p>

          {/* ---- DIVINE KRISHNA ---- */}
          <div className="krishna-wrap">
            <div className="krishna-container">
              <img
                src="/krishanji.png"
                alt="Shree Krishna"
                className="krishna-img"
              />

              {/* divine glow effects */}
              <div className="finger-glow" aria-hidden="true" />
              <div className="ambient-halo" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
