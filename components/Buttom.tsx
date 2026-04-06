"use client";

import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
};

export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-yellow-300 hover:bg-yellow-400 text-gray-900",
    secondary: "bg-white text-indigo-600 hover:bg-gray-100",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white",
  };

  const style = `${baseStyle} ${variants[variant]} ${className}`;

  // 🚀 SMART SCROLL FUNCTION
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // 🔗 If link button
  if (href) {
    return (
      <Link href={href} onClick={handleScroll} className={style}>
        {text}
      </Link>
    );
  }

  // 🔘 If click button
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
}