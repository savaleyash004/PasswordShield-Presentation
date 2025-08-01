import { Github, ExternalLink, Play } from "lucide-react";

export default function ProjectShowcase() {
  const features = [
    {
      title: "Password Strength Prediction",
      points: [
        "Calculates a numeric strength score using internal scoring logic via password_stats().",
        "Analyzes key parameters: length, character variety, and consecutive patterns.",
        "Provides qualitative feedback such as Weak, Moderate, or Strong.",
        "Offers actionable suggestions to improve weak passwords.",
      ],
    },
    {
      title: "PII Analysis (Using Local AI – LLaMA2 7B)",
      points: [
        "Detects sensitive information like names, birthdates, emails, and phone numbers within passwords.",
        "Uses a locally hosted LLaMA2 7B model for fast and private inference (no external API or internet required).",
        "Categorizes identified PII elements to flag weak or guessable passwords.",
        "Maintains full user privacy by ensuring passwords never leave the local system.",
      ],
    },
    {
      title: "Crack Time Estimation using Hashcat",
      points: [
        "Integrates with Hashcat to benchmark actual system cracking speeds.",
        "Provides realistic crack time estimates for common hash types: MD5, SHA-1, SHA-256, bcrypt, NTLM, etc.",
        "Adapts to your system’s GPU performance for accurate risk assessment.",
        "Helps users understand the real-world strength of their passwords.",
      ],
    },
    {
      title: "Secure Password Generation",
      points: [
        "Offers a configurable password generator supporting uppercase/lowercase letters, numbers, special characters, and optional non-Latin characters.",
        "Ensures high entropy using cryptographically secure random selection.",
        "Allows users to generate passwords of any length and character combination.",
        "Guarantees uniqueness and unpredictability in every password.",
      ],
    },
    {
      title: "Multi-Language Password Support",
      points: [
        "Enables password creation using non-English scripts (e.g., Cyrillic, Devanagari, Greek).",
        "Increases password strength by expanding the character space.",
        "Reduces vulnerability to standard dictionary and brute-force attacks.",
        "Supports international users with linguistically diverse password formats.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section with Video */}
      <section className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Password-Shield
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Password-Shield is an AI-powered password security and analysis
              platform designed to help users create, evaluate, and manage
              strong passwords using advanced technology
            </p>
          </div>

          {/* Video Player */}
<div className="relative w-full max-w-5xl mx-auto">
  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
    <iframe
      src="https://drive.google.com/file/d/1f1-CHWUAtBIYoOyFVD62AvsVvhgvVQtZ/preview"
      width="100%"
      height="100%"
      allow="autoplay"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div>


        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center mb-20">
              Powerful Features
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="space-y-4">
                    {feature.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="w-full py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Explore the Project
            </h2>
            <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Check out the source code on GitHub or try the live demo to
              experience the full functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://github.com/savaleyash004/PasswordShield"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-gradient-to-r from-slate-100 to-gray-100 border-t border-purple-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              © {new Date().getFullYear()} PassWordShield. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
