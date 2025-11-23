import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM',
      date: 'January 2025',
      image: '/certificates/data analysis with python.pdf',
      description: 'Comprehensive course on data analysis techniques using Python',
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'Simplilearn',
      date: 'January 2025',
      image: '/certificates/Machine learning with python.pdf',
      description: 'Advanced machine learning concepts and implementations',
    },
    {
      title: 'Python Pandas Basics Course',
      issuer: 'Simplilearn',
      date: 'May 2025',
      image: '/certificates/pandas.pdf',
      description: 'Mastering data manipulation with Pandas library',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional certifications showcasing continuous learning and skill development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Award size={28} />
                  <span className="text-sm font-medium opacity-90">{cert.issuer}</span>
                </div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-700">{cert.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{cert.date}</span>
                </div>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  <ExternalLink size={18} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Committed to Continuous Learning
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I am constantly expanding my knowledge and skills through online courses, workshops, and hands-on projects.
              These certifications represent my dedication to staying current with industry best practices and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
