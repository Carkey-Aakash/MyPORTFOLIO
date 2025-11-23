import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Aakash Karki
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded mx-auto md:mx-0"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Aspiring Data Scientist & ML Engineer
            </p>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              8th-semester BSc.CSIT student at Central Campus of Technology, Dharan.
              Passionate about transforming data into actionable insights and building intelligent systems.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Carkey-Aakash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:scale-110 hover:shadow-lg transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/akash-karki-123211303"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 hover:shadow-lg transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:akashkarki2468@gmail.com"
                className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:scale-110 hover:shadow-lg transition-all"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 hover:scale-105 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="/images/my own.jpg"
                alt="Aakash Karki"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
