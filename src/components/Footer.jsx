"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-14 px-4 text-center text-m text-green-600">
        <p>
          * Cancellation Policy: 100% refund if cancelled 24 hrs in advance.
          No refund for no-show or same-day cancellation.
        </p>
      </footer>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/916238570441?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Wild%20Jacket%20Tent%20Camping."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        <MessageCircleMore className="w-6 h-6" />
      </Link>
    </>
  );
};

export default Footer;
