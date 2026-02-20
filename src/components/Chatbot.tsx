import { useState } from "react";
import type { KeyboardEvent } from "react";
import { MessageCircle, X } from "lucide-react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi 👋 How can I help you today?", sender: "bot" },
  ]);

  const sendMessage = (): void => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };

    let botReply: Message = {
      text: "Thank you for your message. Our team will respond shortly.",
      sender: "bot",
    };

    if (input.toLowerCase().includes("book")) {
      botReply = {
        text: "You can book an appointment from the Book Appointment page.",
        sender: "bot",
      };
    }

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 
        w-16 h-16
        bg-purple-600 hover:bg-purple-500
        text-white 
        rounded-full 
        border-2 border-purple-300/40
        shadow-2xl shadow-purple-700/70
        flex items-center justify-center
        transition duration-300
        z-[9999]"
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 
        bg-[#120a24] 
        rounded-2xl 
        border border-purple-500/30
        shadow-2xl shadow-purple-900/50
        flex flex-col 
        overflow-hidden 
        z-[9999]">

          {/* Header */}
          <div className="bg-purple-700 text-white p-4 font-semibold text-center tracking-wide">
            Zora AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl text-sm max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-purple-600 ml-auto text-white shadow-md"
                    : "bg-purple-900/60 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex border-t border-purple-500/20 bg-[#160c2e]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 p-3 bg-transparent text-white outline-none placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-purple-600 hover:bg-purple-500 text-white transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
