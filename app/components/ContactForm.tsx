'use client';

import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    
    // Better email validation using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    if (!form.message) newErrors.message = 'Message is required';
    if (!form.time) newErrors.time = 'Preferred time is required';
    if (!form.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted! (No backend, so just a demo)');
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Start Your Healing Journey Today</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              aria-required="true"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="(123) 456-7890"
              aria-required="true"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="your@email.com"
              aria-required="true"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">What brings you here?</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Preferred time */}
          <div>
            <label className="block mb-1 font-medium">Preferred time to reach you</label>
            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Morning, Afternoon, Evening"
              aria-required="true"
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
              aria-required="true"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to be contacted regarding my inquiry
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm" role="alert">{errors.agree}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
