'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from './PopupContext'; // Import the context

const PopupForm = () => {
  const { isOpen, closePopup } = usePopup(); // Access state from the PopupContext

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-50 inset-0 bg-black/70 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white text-black rounded-2xl w-full max-w-lg p-8 relative"
          >
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">Quick Inquiry</h3>
            <p className="text-sm text-gray-600 mb-6">Fill the form below.</p>

            <form className="space-y-4">
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Full Name" />
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Email Address" />
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Phone Number" />
              <textarea className="w-full border rounded-lg px-4 py-2" rows={4} placeholder="Your Requirement" />

              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
