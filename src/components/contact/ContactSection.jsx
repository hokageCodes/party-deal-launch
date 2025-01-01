/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Button from "../button/Button";
import { FiArrowRight } from "react-icons/fi";

const ContactSection = () => {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1 && message.trim()) {
      setStep(2);
    } else if (step === 2 && phone.trim()) {
      setStep(3);
    } else if (step === 3 && email.trim()) {
      alert("Thanks for reaching out! We'll get back to you soon.");
      setStep(1);
      setMessage("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40vh] bg-[#f9f9f9] text-white px-6">
      <h2 className="text-4xl md:text-5xl font-coolvetica text-charcoal mb-4 tracking-wide">Wanna leave a Message?</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col items-center"
      >
        {step === 1 && (
          <div className="w-full">
            <div className="relative">
              <input
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-4 border-yellow peer focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How may we help you?"
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full">
            <div className="relative">
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-yellow border-4 peer focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Didn't think you'd leave without your phone number, did you?"
                required
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-yellow border-4 peer focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Final one please – Your email?"
                required
              />
            </div>
          </div>
        )}
        <div className="mt-4">
            <Button
                label="Send message"
                variant="secondary"
                size="small"
                icon={<FiArrowRight />}
                onClick={() => window.location.href("/")}
            />
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
