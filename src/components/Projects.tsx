const projects = [
  { title: 'Project One', description: 'A web app for...', link: '#' },
  { title: 'Project Two', description: 'A portfolio website...', link: '#' },
  // Add your projects
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-500">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;