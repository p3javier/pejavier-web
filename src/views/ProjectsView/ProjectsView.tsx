import Tabs from "../../components/Tabs/Tabs";

const ProjectsView = () => {
  return (
    <div className="container">
      <h1
        className="w-min bg-gray-800 bg-opacity-50 bg-clip-padding rounded-md text-4xl text-white px-4 mx-24 mb-8 pb-2"
        style={{ backdropFilter: "blur(20px)" }}
      >
        Projects
      </h1>
      <Tabs />
    </div>
  );
};

export default ProjectsView;
