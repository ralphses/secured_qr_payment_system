import React from 'react';
import { motion } from 'framer-motion';

const OurServicesPage = () => {
  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container flex flex-col mx-auto bg-white">
      <div className="w-full draggable">
        <div className="container flex flex-col items-center gap-16 mx-auto my-32">
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-extrabold text-dark-grey-900">Business Registration</h2>
              <p className="text-base leading-7 text-dark-grey-600 text-center">
                The business registration service helps you to legally establish your business entity.
                It includes assistance in documentation, compliance, and regulatory requirements.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-extrabold text-dark-grey-900">Secured QR Code Generation</h2>
              <p className="text-base leading-7 text-dark-grey-600 text-center">
                We provide a QR code generation service ensuring a secure and easy-to-integrate system.
                It allows you to generate QR codes for your business products or services with encrypted security.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-extrabold text-dark-grey-900">Payment Processing</h2>
              <p className="text-base leading-7 text-dark-grey-600 text-center">
                Our payment processing service allows seamless, secure, and efficient transactions for your business.
                It supports various payment methods, ensuring a hassle-free payment experience for your customers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
