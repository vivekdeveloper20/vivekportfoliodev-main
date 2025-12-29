import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import roshanPhoto from '../../assets/vivekpics.png';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const messageRef = useRef(null);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("PgO4nFD7JLFVSO5Bw"); // Updated public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS configuration for sending to your Gmail
    emailjs
      .sendForm(
        "service_36a4bpn",        // Your new SMTP EmailJS service ID
        "template_g6wclmi",       // Your actual EmailJS template ID
        form.current,
        "PgO4nFD7JLFVSO5Bw"        // Updated EmailJS public key
      )
      .then(
        (result) => {
          setIsLoading(false);
          form.current.reset();
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsLoading(false);
          console.error("FAILED...", error);
          let errorMsg = "Failed to send message. Please try again.";
          if (error && error.text) {
            errorMsg += `\nDetails: ${error.text}`;
          } else if (error && error.status) {
            errorMsg += `\nStatus: ${error.status}`;
          }
          toast.error(errorMsg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1oZTwhH8bgkFqaJFaX-xkaDlq2RFYciXj/view?usp=drive_link';
    link.download = 'vivek_kumar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Auto-resize message textarea for better mobile UX
  const handleMessageInput = () => {
    const ta = messageRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight}px`;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl motion-safe:animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-sky-400 rounded-full blur-3xl motion-safe:animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-400 rounded-full blur-3xl motion-safe:animate-ping"></div>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      {/* Main Content - Full Width on Desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-white">Let&apos;s </span>
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m passionate about technology and always excited to collaborate on interesting projects. 
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Content - Full Width Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Profile & Info (Compact) */}
          <div className="space-y-6">
            {/* Compact Profile Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={roshanPhoto}
                    alt="Vivek Kumar" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400/50 shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white motion-safe:animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Vivek Kumar</h3>
                  <p className="text-indigo-300 font-medium text-sm mb-1">Third-Year Computer Science Student</p>
                  <p className="text-gray-400 text-xs">
                  Full Stack Developer | Cybersecurity Enthusiast | Bridging Code & Defense in the Digital World
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Download CV Card */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-5 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300">
              <h4 className="text-base font-semibold text-white mb-2 flex items-center">
                Download CV
              </h4>
              <p className="text-gray-300 text-xs mb-3">
                Check out my skills and experience
              </p>
              <button
                onClick={handleDownloadCV}
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-700 hover:from-indigo-700 hover:to-cyan-800 text-white font-medium py-3 px-4 sm:py-2 sm:px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center space-x-2 text-sm"
              >
                <span>📥</span>
                <span>Download</span>
              </button>
            </div>

            {/* Direct Email Card */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-5 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300">
              <h4 className="text-base font-semibold text-white mb-2 flex items-center">
                Send Direct Email
              </h4>
              <p className="text-gray-300 text-xs mb-3">
                Open your email client directly
              </p>
              <a
                href="mailto:vivekkumarlpu1@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Vivek%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards%2C"
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-700 hover:from-indigo-700 hover:to-cyan-800 text-white font-medium py-3 px-4 sm:py-2 sm:px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center space-x-2 text-sm"
                aria-label="Send an email to Vivek Kumar via your email client"
                title="Opens your default email client to send an email"
              >
                <span>📧</span>
                <span>Send Email</span>
              </a>
              <p className="text-xs text-gray-400 mt-2 text-center">
                <span className="italic">Note: This will open your default email app. If nothing happens, please use the contact form or email me directly at <a href="mailto:vivekkumarlpu1@gmail.com" className="underline text-yellow-300">vivekkumarlpu1@gmail.com</a>.</span>
              </p>
            </div>

            {/* Compact Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300">
              <h4 className="text-base font-semibold text-white mb-3 flex items-center">
                Contact Info
              </h4>
              <div className="space-y-2">
                <a 
                  href="mailto:vivekkumarlpu1@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <span className="text-indigo-400">📧</span>
                  <span>vivekkumarlpu1@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">
                  <span className="text-indigo-400">📱</span>
                  <span>8434487300</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">
                  <span className="text-indigo-400">📍</span>
                  <span>chapra, Bihar, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Contact Form */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Send me a message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-indigo-400/50"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-indigo-400/50"
                  />
                </div>
              </div>
              <div className="group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-indigo-400/50"
                />
              </div>
              <div className="group">
                <textarea
                  ref={messageRef}
                  onInput={handleMessageInput}
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-indigo-400/50 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-700 hover:from-indigo-700 hover:to-cyan-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </section>
  );
};

export default Contact;
