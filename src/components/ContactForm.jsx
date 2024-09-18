import React from "react";

const ContactForm = () => {
  return (
    <div className="">
      <form>
        {/* Name and Last Name on the same line */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full">
            <label
              className="block text-secondary text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              Imię
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-xl border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Imię"
              required
            />
          </div>
          <div className="w-full">
            <label
              className="block text-secondary text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Nazwisko
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-xl border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Nazwisko"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-xl border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Twój Email"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-xl border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Twój numer"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="message"
          >
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-3 py-2 border rounded-xl border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Twoja wiadomość"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            className="w-1/3 px-4 py-2 bg-primary text-[#fffcfc] font-bold rounded-xl border-secondary hover:bg-[#0b803c] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
