'use client';
import { useState } from 'react';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn tools to manage daily anxiety, reduce overwhelm, and cultivate calm through evidence-based techniques.',
    image: '/anxiety.jpg',
    details: 'My approach to anxiety and stress management combines cognitive-behavioral techniques with mindfulness practices. We\'ll work together to identify your anxiety triggers, challenge negative thought patterns, and develop practical coping strategies. Sessions typically include breathing exercises, cognitive restructuring, and gradual exposure to anxiety-provoking situations in a safe, controlled manner. Many clients report significant reduction in anxiety symptoms within 8-12 sessions.'
  },
  {
    title: 'Relationship Counseling',
    description:
      'Strengthen communication, resolve conflict, and rebuild trust with compassionate therapy for couples.',
    image: '/relationship.jpg',
    details: 'Relationship counseling focuses on improving communication patterns, resolving conflicts constructively, and rebuilding emotional connection. Whether you\'re experiencing trust issues, communication breakdowns, or simply feeling disconnected, we\'ll work together to identify unhelpful patterns and develop new ways of relating. I use evidence-based approaches including Emotionally Focused Therapy (EFT) and the Gottman Method to help couples create lasting positive change.'
  },
  {
    title: 'Trauma Recovery',
    description:
      'Heal from past trauma in a safe, supportive space with trauma-informed care and proven approaches.',
    image: '/trauma.jpg',
    details: 'Trauma recovery is a gentle, client-led process that prioritizes your safety and comfort. Using approaches like EMDR (Eye Movement Desensitization and Reprocessing), somatic experiencing, and trauma-focused cognitive behavioral therapy, we\'ll work at your pace to process difficult experiences and reduce their impact on your daily life. My trauma-informed approach emphasizes creating a safe therapeutic environment where you feel in control of your healing journey.'
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Services</h2>
  
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button 
                  onClick={() => toggleService(index)}
                  className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors focus:outline-none"
                >
                  {expandedService === index ? 'Show less ↑' : 'Learn more →'}
                </button>
                
                {expandedService === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-left animate-fade-in">
                    <p className="text-gray-700">{service.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
