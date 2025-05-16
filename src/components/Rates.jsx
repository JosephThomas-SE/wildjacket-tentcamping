"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/Card";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "Base Camp",
    shortDetails: [
      "Tent stay with mattress and blankets",
      "Evening tea and snacks",
      "Food available on request",
      "Great mountain view",
    ],
    fullDetails: [
      "Single: ₹800",
      "Group (10+): ₹700/person",
      "Couple: ₹1450/2 persons",
      "Family: ₹1300 (2 adults + infant)",
      "Child (6–18): ₹600 | Adult (18+): ₹800",
    ],
  },
  {
    title: "Full Board Camp",
    shortDetails: [
      "Everything in Base Camp +",
      "Dinner and breakfast",
      "Morning and evening tea",
      "Self trekking to nearby waterfalls",
    ],
    fullDetails: [
      "Single: ₹1400",
      "Group (10+): ₹1300/person",
      "Couple: ₹1350/person",
      "Family: ₹1300/person",
      "Child (6–18): ₹900 | Adult (18+): ₹1300",
    ],
  },
  {
    title: "Premium Camp Night",
    shortDetails: [
      "Everything in Full Board Camp +",
      "BBQ Grilled Chicken Dinner",
      "Campfire & Music",
      "Add-ons included",
    ],
    fullDetails: [
      "Single: ₹1700",
      "Group (10+): ₹1500/person",
      "Couple: ₹1600/person",
      "Family: ₹1400/person",
      "Child (6–18): ₹800 | Adult (18+): ₹1300",
    ],
  },
];

const Rates = () => {
  const [expanded, setExpanded] = useState(Array(plans.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <main className="p-4 md:p-10 bg-gradient-to-br from-green-50 to-yellow-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        Wild Jacket Tent Camping – Rates
      </h1>

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 w-full md:w-1/3"
          >
            <CardContent className="text-gray-800">
              <h2 className="text-xl font-semibold mb-2 text-center text-emerald-700">
                {plan.title}
              </h2>
              <ul className="text-sm list-disc list-inside space-y-1">
                {plan.shortDetails.map((detail, i) => (
                  <li key={i}>• {detail}</li>
                ))}
                {expanded[index] &&
                  plan.fullDetails.map((detail, i) => (
                    <li key={`full-${i}`}>• {detail}</li>
                  ))}
              </ul>
              {plan.fullDetails.length > 0 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-blue-600 text-sm hover:underline"
                >
                  {expanded[index] ? "Show less" : "Read more..."}
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-amber-700">Add-ons</h2>
        <ul className="text-sm list-disc pl-5 text-gray-800">
          <li>Campfire: ₹500 (on request)</li>
          <li>BarBQueue: ₹700 (on request)</li>
          <li>Jeep Safari (Sightseeing only): ₹2500 (pickup/drop included)</li>
          <li>Jeep Safari (Off-road + Sightseeing): ₹5000 (pickup/drop included)</li>
        </ul>
      </div>

      <p className="mt-6 text-xs text-gray-600 text-center">
        * Cancellation Policy: 100% refund if cancelled 24 hrs in advance. No refund for no-show or same-day cancellation.
      </p>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/916238570441?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Wild%20Jacket%20Tent%20Camping."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        <MessageCircleMore className="w-6 h-6" />
      </Link>
    </main>
  );
};

export default Rates;
