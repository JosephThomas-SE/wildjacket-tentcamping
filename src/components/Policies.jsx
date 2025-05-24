"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";

const policies = [
  {
    title: "📅 Booking & Payment",
    tag: "Important",
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>
          Every booking is confirmed with an advance payment of <strong>50%</strong>.
        </li>
        <li>The remaining balance is payable upon check-in.</li>
      </ul>
    ),
  },
  {
    title: "🏕️ Tent Capacity",
    content: (
      <p>
        Each tent can comfortably accommodate up to <strong>3 people</strong>. If needed,
        arrangements will be adjusted based on availability.
      </p>
    ),
  },
  {
    title: "⏰ Check-in & Check-out",
    tag: "Important",
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Check-in:</strong> 3:00 PM</li>
        <li><strong>Check-out:</strong> 11:00 AM</li>
        <li>
          Early check-in or late check-out is subject to availability and may incur
          additional charges.
        </li>
      </ul>
    ),
  },
  {
    title: "🔥 Add-on Services",
    content: (
      <p>
        Additional services like <strong>barbeque, campfire, and jeep safari</strong> are
        subject to climate conditions and are charged separately. Advance booking is
        required for all add-ons.
      </p>
    ),
  },
  {
    title: "🔁 Cancellation Policy",
    tag: "Important",
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>100% Full Refund</strong> if cancelled <strong>before 24 hours</strong> of check-in.
        </li>
        <li>No refund for same-day cancellations or no-shows.</li>
      </ul>
    ),
  },
  {
    title: "📣 Group Bookings",
    content: (
      <p>
        For group bookings of 10+ people, please confirm in advance. Designated areas
        are provided for music and campfire activities, permitted only until 10:30 PM.
      </p>
    ),
  },
  {
    title: "🧼 Cleaning & Maintenance",
    tag: "Important",
    content: (
      <p>
        Kindly note: In the rare case of accidents like vomiting or other mess,
        an <strong>additional cleaning fee of ₹500</strong> may apply to ensure a hygienic
        experience for all guests. We appreciate your understanding.
      </p>
    ),
  },
];

const Policies = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-10 bg-gradient-to-br from-green-50 to-yellow-100 min-h-screen text-green-800">
      <h1 className="text-3xl font-bold text-center mb-6">
        Camp Policies – Vagamon Tent Camping
      </h1>

      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {policies.map((policy, index) => (
          <Card key={index} className="bg-white text-green-900">
            <CardContent>
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between focus:outline-none md:cursor-default md:pointer-events-none"
                aria-expanded={openIndex === index}
                aria-controls={`policy-content-${index}`}
                type="button"
              >
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-bold">{policy.title}</h2>
                  {policy.tag && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full select-none">
                      {policy.tag}
                    </span>
                  )}
                </div>
                {/* Chevron icon: rotate when open on mobile */}
                <svg
                  className={`w-5 h-5 text-green-700 transition-transform duration-200 md:hidden ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div
                id={`policy-content-${index}`}
                className={`mt-2 text-sm md:text-base overflow-hidden transition-[max-height] duration-300 ease-in-out
                  ${
                    openIndex === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                  }
                `}
              >
                {policy.content}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Policies;
