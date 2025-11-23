import { Code2, Database, Brain, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Data Science & ML',
      description: 'Building intelligent models to solve real-world problems',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Python Development',
      description: 'Expertise in NumPy, Pandas, Matplotlib, and Scikit-learn',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Django and REST API development',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Analysis',
      description: 'Extracting insights from complex datasets',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a dedicated and passionate 8th-semester BSc.CSIT student at Central Campus of Technology, Dharan,
              under Tribhuvan University. My journey in computer science has led me to develop a deep interest in
              Data Science, Machine Learning, and Backend Development.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With strong proficiency in Python and its powerful libraries including NumPy, Pandas, and Matplotlib,
              I specialize in data analysis and building predictive models using Scikit-learn. My technical toolkit
              also extends to Django framework and REST API development, enabling me to create robust backend solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My goal is to leverage my analytical skills and technical expertise to build real-world machine learning
              models that solve meaningful problems. I am actively seeking opportunities to work as a Data Scientist
              or Machine Learning Engineer where I can contribute to innovative projects and continue growing professionally.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="font-semibold text-gray-900">BSc. Computer Science and Information Technology</p>
                <p className="text-gray-700">Central Campus of Technology, Dharan</p>
                <p className="text-gray-600">Tribhuvan University</p>
                <p className="text-sm text-gray-500 mt-1">8th Semester</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105 border border-blue-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-lg w-fit mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
