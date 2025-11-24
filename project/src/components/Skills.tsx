const Skills = () => {
  const mainSkills = [
    { name: 'Python', level: 70 },
    { name: 'Data Analysis', level: 65 },
    { name: 'NumPy', level: 80 },
    { name: 'Pandas', level: 80 },
    { name: 'Matplotlib', level: 80 },
    { name: 'Scikit-learn', level: 40 },
    { name: 'Django', level: 70 },
    { name: 'SQL', level: 55 },
  ];

  const otherSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'C',
    'Git',
    'GitHub',
    'REST APIs',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Competencies</h3>
            <div className="space-y-6">
              {mainSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Areas of Interest</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Machine Learning Model Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Data Science & Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Backend API Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Predictive Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
