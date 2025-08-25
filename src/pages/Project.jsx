import projects from "../data/projects";

function Project() {
  return (
    <section className="p-8 bg-gray-100">
      {" "}
      {/* background global pour le Project */}
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Rôle:</span> {project.role}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Résumé:</span> {project.resume}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((image, index) => (
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg"
                >
                  <img
                    src={image}
                    alt="technologies"
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Project;
