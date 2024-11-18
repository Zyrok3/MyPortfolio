const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;