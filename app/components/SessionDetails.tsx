// Updated SessionDetails.tsx styled like the contact section in the provided image

export default function SessionDetails() {
    return (
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Embedded Map */}
          <div>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=1287%20Maplewood%20Drive,%20Los%20Angeles,%20CA%2090026&output=embed"
              className="w-full h-80 rounded-lg border shadow-md"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Contact Dr. Blake</h2>
  
            <div className="mb-6">
              <h3 className="text-lg font-bold">📍 Location:</h3>
              <p className="text-md">1287 Maplewood Drive, Los Angeles, CA 90026</p>
            </div>
  
            <div className="mb-6">
              <h3 className="text-lg font-bold">📞 Contact:</h3>
              <ul className="text-md space-y-2">
                <li>
                  Phone:{' '}
                  <a href="tel:+13235550192" className="text-blue-600 hover:underline">
                    (323) 555-0192
                  </a>
                </li>
                <li>
                  Email:{' '}
                  <a href="mailto:serena@blakepsychology.com" className="text-blue-600 hover:underline">
                    serena@blakepsychology.com
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="mb-6">
              <h3 className="text-lg font-bold">🕒 Session Fees & Hours:</h3>
              <ul className="text-md space-y-2">
                <li>💵 $200 / individual session</li>
                <li>💰 $240 / couples session</li>
                <li>🏢 In-person: Tue & Thu, 10 AM – 6 PM</li>
                <li>💻 Virtual: Mon, Wed & Fri, 1 PM – 5 PM</li>
              </ul>
            </div>
  
            <p className="text-sm text-gray-600 italic">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
    );
  }
  