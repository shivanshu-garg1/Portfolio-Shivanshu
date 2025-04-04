import Card from "../components/Card";

const ProjectPage = () => {
  return (
    <section
      id="project"
      className="bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white min-h-screen px-4 sm:px-6 md:px-8 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-400">
          My Projects
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Explore some of my latest projects. Click on any project to learn more!
        </p>
      </div>

      <div className="mt-12">
        <Card />
      </div>
    </section>
  );
};

export default ProjectPage;
