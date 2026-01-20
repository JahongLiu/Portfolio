import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Check if we're at the resume section (via hash)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#resume") {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    window.history.pushState("", document.title, window.location.pathname);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto backdrop-blur-sm bg-black/50">
      <motion.div
        ref={modalRef}
        className="relative w-full max-w-5xl m-4 border rounded-2xl bg-primary border-white/10 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-neutral-400 hover:text-white hover:bg-white/20 transition-colors bg-primary/80 backdrop-blur-sm"
          aria-label="Close"
        >
          <img
            src="assets/close.svg"
            className="w-6 h-6"
            alt="close"
          />
        </button>
        <div className="p-6">
          <h2 className="mb-6 text-heading">Resume</h2>
          <div className="w-full">
            <iframe
              src="/Jiahong_Liu_Resume.pdf"
              className="w-full h-[85vh] border border-white/10 rounded-lg"
              title="Resume"
            />
            <div className="flex justify-center mt-6">
              <a
                href="/Jiahong_Liu_Resume.pdf"
                download="Jiahong_Liu_Resume.pdf"
                className="px-6 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
