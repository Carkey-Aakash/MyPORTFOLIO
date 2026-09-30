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
              I'm a BSc. CSIT graduate with a strong foundation in Python, SQL, Machine Learning, and 
              data-driven technologies. I have hands-on experience in data preprocessing, data analysis,
               database management, NLP, and developing practical machine learning solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              During my AI/ML internship, I worked with supervised and unsupervised learning techniques,
              implemented machine learning algorithms, performed statistical analysis, and worked with
              real-world datasets. I have also developed projects including an Email Fraud Detection system,
              Currency Converter Chatbot, Netflix Data Analysis, and Movie Recommendation System.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I’m passionate about AI/ML, Data Engineering, and building practical solutions that solve real-world
               problems. I’m continuously learning and looking for opportunities to apply my skills, work
              on meaningful projects, and grow as a technology professional.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="font-semibold text-gray-900">BSc. Computer Science and Information Technology</p>
                <p className="text-gray-700">Central Campus of Technology, Dharan</p>
                <p className="text-gray-600">Tribhuvan University</p>
                <p className="text-sm text-gray-500 mt-1">BSc. CSIT Graduated</p>
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
