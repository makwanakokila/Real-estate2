"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Layers,
  Layout,
  Landmark,
  ScrollText,
  Building2,
  Home,
  Map,
  Phone,
} from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentOptions, setCurrentOptions] = useState([]);
  const chatEndRef = useRef(null);

  const serviceOptions = [
    { text: "Architecture", icon: <Landmark size={20} />, handler: "handleService" },
    { text: "Interior Design", icon: <Layout size={20} />, handler: "handleService" },
    { text: "Loan Assistance", icon: <ScrollText size={20} />, handler: "handleService" },
    { text: "Legal Documentation", icon: <Layers size={20} />, handler: "handleService" },
    { text: "Property Interest", icon: <Building2 size={20} />, handler: "handlePropertyInterest" },
    { text: "Contact", icon: <Phone size={20} />, handler: "handleContact" },
  ];

  const propertyOptions = [
    { text: "Commercial", icon: <Map size={20} />, handler: "handlePropertyType" },
    { text: "Residential", icon: <Home size={20} />, handler: "handlePropertyType" },
    { text: "Plotting", icon: <Map size={20} />, handler: "handlePropertyType" },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isOpen, messages.length]);

  const addMessage = (text, sender, options = []) => {
    setMessages((prev) => [...prev, { text, sender }]);
    setCurrentOptions(options);
  };

  const initializeChat = () => {
    addMessage("👋 Welcome! Please select a service you're interested in:", "bot", serviceOptions);
  };

  const resetToMainMenu = () => {
    addMessage("Would you like help with anything else?", "bot", serviceOptions);
  };

  const conversationHandlers = {
    handleService: (service) => {
      addMessage(
        <>
          You selected <strong>{service}</strong>. Visit our service page here:{" "}
          <a
            href="https://sensational-sorbet-d96d32.netlify.app/projects/services"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-gray-300"
          >
            View Services
          </a>
        </>,
        "bot"
      );
      setTimeout(resetToMainMenu, 2000);
    },
    handlePropertyInterest: () => {
      addMessage("Are you interested in Commercial, Residential, or Plotting properties?", "bot", propertyOptions);
    },
    handlePropertyType: (type) => {
      let url = "https://sensational-sorbet-d96d32.netlify.app/projects/services";
      if (type === "Commercial") url = "https://sensational-sorbet-d96d32.netlify.app/projects/commercial";
      else if (type === "Residential") url = "https://sensational-sorbet-d96d32.netlify.app/projects/residential";
      else if (type === "Plotting") url = "https://sensational-sorbet-d96d32.netlify.app/projects/PlottingPage";

      addMessage(
        <>
          You selected <strong>{type}</strong> property. Learn more here:{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-gray-300"
          >
            View {type} Services
          </a>
        </>,
        "bot"
      );
      setTimeout(resetToMainMenu, 2000);
    },
    handleContact: () => {
      addMessage(
        <>
          You selected <strong>Contact</strong>. Reach out to us here:{" "}
          <a
            href="https://sensational-sorbet-d96d32.netlify.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white hover:text-gray-300"
          >
            Contact Page
          </a>
        </>,
        "bot"
      );
      setTimeout(resetToMainMenu, 2000);
    },
  };

  const handleOptionClick = (option) => {
    addMessage(option.text, "user");
    const handler = conversationHandlers[option.handler];
    if (handler) handler(option.text);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    addMessage(userInput, "user");
    setUserInput("");
    addMessage(
      "Thanks for your message! Please select one of the services above or let us know how we can assist.",
      "bot",
      serviceOptions
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 sm:right-8 z-50 w-[calc(100%-2rem)] sm:w-96 h-[70vh] sm:h-[34rem] bg-black border border-gray-800 rounded-2xl shadow-2xl flex flex-col text-white font-sans"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white text-black p-4 flex justify-between items-center rounded-t-2xl border-b border-gray-300">
              <h3 className="font-bold text-lg">Service Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto bg-black">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-white text-black rounded-br-none"
                        : "bg-gray-800 text-white rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {!isLoading && currentOptions.length > 0 && (
                <motion.div
                  className="rounded-xl mt-2 bg-black"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {currentOptions.map((option, index) => (
                    <div key={index} className="border-b border-gray-700 last:border-b-0">
                      <button
                        onClick={() => handleOptionClick(option)}
                        className="w-full text-left p-3 text-white hover:bg-gray-800 flex items-center gap-3"
                      >
                        {option.icon}
                        <span>{option.text}</span>
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="p-3 border-t border-gray-800 flex items-center bg-black rounded-b-2xl"
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write a message..."
                className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="ml-2 bg-white text-black p-3 rounded-lg hover:bg-gray-200"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-8 bg-black text-white border border-gray-700 rounded-full p-4 shadow-xl hover:bg-gray-800 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={28} />
      </motion.button>
    </>
  );
};

export default Chatbot;
