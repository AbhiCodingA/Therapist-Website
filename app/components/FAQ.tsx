'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission to your insurance provider for potential reimbursement. I recommend checking with your insurance company about out-of-network mental health benefits before our first session.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions are conducted via Zoom. I provide secure, HIPAA-compliant telehealth services that are just as effective as in-person therapy for most clients. Online sessions offer flexibility and eliminate commute time.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'A 24-hour notice is required to cancel or reschedule a session. Late cancellations or no-shows will be charged the full session fee, except in cases of genuine emergencies.',
  },
  {
    question: 'How long does therapy typically last?',
    answer: 'The duration of therapy varies greatly depending on your specific goals and circumstances. Some clients achieve their goals in 8-12 sessions, while others benefit from longer-term support. We\'ll regularly review your progress and adjust our approach as needed.',
  },
  {
    question: 'What can I expect in the first session?',
    answer: 'The initial session focuses on understanding your concerns, gathering relevant history, and establishing goals for therapy. I\'ll explain my approach and answer any questions you have. This is also an opportunity for us to determine if we\'re a good therapeutic match.',
  },
  {
    question: 'How often will we meet?',
    answer: 'Most clients start with weekly sessions to build momentum. As you progress, we may transition to biweekly or monthly sessions. The frequency is flexible and can be adjusted based on your needs and schedule.',
  },
  {
    question: 'Is everything I share confidential?',
    answer: 'Yes, with limited exceptions required by law. These include situations involving imminent risk of harm to yourself or others, suspected abuse of children or vulnerable adults, or if records are subpoenaed by a court. I\'ll discuss these limitations to confidentiality in detail during our first session.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t text-gray-700 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
