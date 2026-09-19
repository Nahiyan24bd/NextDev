import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | NextDev',
  description: 'Get in touch with our team for inquiries and collaborations.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-primary">Contact Us</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Have questions or ideas? Reach out and let’s talk!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Contact Information */}
        <div className="bg-base-200 border border-base-300 p-6 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-xl font-bold">Get In Touch</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Feel free to contact us anytime. We usually respond within 24 hours.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@nextdev.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-primary" />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-base-200 border border-base-300 p-6 rounded-2xl shadow-md space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Message</span>
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full resize-none"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full gap-2 mt-2">
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}