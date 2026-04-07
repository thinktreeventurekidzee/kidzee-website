"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-04-11T10:30:00+05:30");

export default function AnnouncementModal({ open, setOpen }: any) {
  const [time, setTime] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      const diff = TARGET_DATE.getTime() - Date.now();

      if (diff <= 0) return;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    localStorage.setItem("announcementClosed", "true");
    setOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;

    const parentName = form.parentName.value;
    const childName = form.childName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const age = form.age.value;
    const slot = form.slot.value;

    const text = `🎉 Kidzee Launch Event Booking

👨‍👩‍👧 Parent Name: ${parentName}
👶 Child Name: ${childName}
🎂 Age: ${age}
⏰ Slot: ${slot}
📞 Phone: ${phone}
📧 Email: ${email}`;

    const url = `https://wa.me/918088042991?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md p-4 overflow-y-auto">

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-5xl mx-auto bg-gradient-to-b from-white to-purple-50 rounded-3xl shadow-2xl overflow-hidden relative"
      >

        {/* CLOSE */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-black/20 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        {/* HERO */}
        <div className="p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 font-fredoka">
            🎉 Grand Launch Event
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Kidzee Virgonagar is opening soon!
          </p>

          <div className="mt-4 bg-red-500 text-white px-4 py-1 rounded-full inline-block text-sm font-bold animate-pulse">
            Hurry! Limited Seats
          </div>
        </div>

        {/* COUNTDOWN */}
        <div className="grid grid-cols-4 gap-4 px-6 pb-10">
          {["days", "hours", "minutes", "seconds"].map((k) => (
            <div
              key={k}
              className="bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-300 text-white p-4 rounded-2xl text-center shadow-lg"
            >
              <p className="text-3xl font-bold">{time[k] || 0}</p>
              <p className="text-xs uppercase">{k}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="px-6 pb-12">
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-w-2xl mx-auto">

            <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900 font-fredoka">
              Register Now
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-5">

              {!submitted ? (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="parentName" placeholder="Parent Name" className="inputStyle" required />
                    <input name="childName" placeholder="Child Name" className="inputStyle" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="phone" placeholder="Phone Number" className="inputStyle" required />
                    <input name="email" placeholder="Email Address" className="inputStyle" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <select name="age" className="inputStyle">
                      <option>Child Age</option>
                      <option>2 Years</option>
                      <option>3 Years</option>
                      <option>4 Years</option>
                      <option>5 Years</option>
                    </select>

                    <select name="slot" className="inputStyle">
                      <option>Preferred Slot</option>
                      <option>Morning (10:30 - 12:30)</option>
                      <option>Evening (3:00 - 5:00)</option>
                    </select>
                  </div>

                  <button className="mt-4 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 py-3 font-bold text-white shadow-[0_15px_40px_rgba(236,72,153,0.4)] transition hover:scale-105">
                    🚀 Book Free Slot
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    🎉 Thank You!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We’ll contact you shortly on WhatsApp.
                  </p>
                </motion.div>
              )}

            </form>
          </div>
        </div>

        {/* LAST SECTION */}
        <div className="px-6 pb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-600 font-fredoka mb-10">
            What Makes Kidzee Special?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

            {[
              "Child-Safe Infrastructure",
              "Nutritionist Approved Meals",
              "Real Time App Updates",
              "AI-Integrated Live CCTV",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 text-center shadow-md hover:scale-105 transition"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  ⭐
                </div>

                <p className="text-sm font-semibold text-gray-800">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </motion.div>
    </div>
  );
}