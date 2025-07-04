export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/serena.jpg"
          alt="Dr. Serena Blake"
          className="rounded-lg shadow-lg w-full h-auto object-cover animate-fade-in"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-6">About Dr. Blake</h2>
          <p className="text-lg leading-8 text-gray-700 mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of
            experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral
            therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma.
          </p>
          <p className="text-lg leading-8 text-gray-700 mb-4">
            After receiving her doctorate from UCLA's prestigious psychology program, Dr. Blake completed her residency at the Los Angeles County Department of Mental Health, where she specialized in trauma-informed care and relationship counseling.
          </p>
          <p className="text-lg leading-8 text-gray-700 mb-4">
            Dr. Blake's approach is warm, collaborative, and results-oriented. She believes in creating a safe space where clients can explore their challenges while developing practical skills for lasting change. Her practice combines traditional psychotherapy with modern techniques, including mindfulness practices and somatic experiencing.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-3">Credentials & Specializations</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Licensed Clinical Psychologist (CA License #PSY12345)</li>
              <li>Doctorate in Clinical Psychology (PsyD) - UCLA</li>
              <li>Certified in Trauma-Focused Cognitive Behavioral Therapy</li>
              <li>Specialized training in Relationship Counseling</li>
              <li>Member of the American Psychological Association</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}