import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Eventify – College Event Notifier Backend',
      description:
        'A comprehensive backend system for managing college events and notifications. Built with Django REST Framework, featuring real-time notifications using Celery and Redis for efficient task queuing.',
      tools: ['Django', 'DRF', 'SQLite', 'Celery', 'Redis'],
      github: 'https://github.com/Carkey-Aakash/College-management-system-with-Django-Backend',
    },
    {
      title: 'To-Do List Application',
      description:
        'A full-featured task management application with CRUD operations, user authentication, and intuitive UI. Demonstrates proficiency in Django framework and database management.',
      tools: ['Django', 'Python', 'SQLite'],
      github: 'https://github.com/Carkey-Aakash/Django-to-do-app',
    },
    {
      title: 'Movie Recommendation System',
      description:
        'A content-based movie recommendation system that suggests similar movies based on the movie selected by the user. This model uses cosine similarity on movie metadata features to generate recommendations and displays movie posters fetched from the TMDB API. The interface is built using Streamlit for an interactive user experience.',
      tools: ['Python', 'NumPy', 'Pandas','Scikit-Learn', 'Streamlit'],
      github: 'https://github.com/Carkey-Aakash/Movie_Recommending_System',
    },
    {
      title: 'Diwali Sales Analysis (EDA)',
      description:
        'Comprehensive exploratory data analysis of Diwali sales data to uncover purchasing patterns, customer behavior, and sales trends. Includes detailed visualizations and statistical insights.',
      tools: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/Carkey-Aakash/Diwali_Sales_Analysis',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in data science, machine learning, and backend development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

                <p className="text-gray-700 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Carkey-Aakash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
