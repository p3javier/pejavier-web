import React from "react";

import Tabs from "../../components/Tabs/Tabs";

import PersonalWebsite from "./PersonalWebsite";

import MapaMelange from "./MapaMelange";

import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ProjectsView = () => {
  return (
    <div className="container">
      <SectionTitle title="Projects" />
      <div className="mt-16">
        <Tabs
          personalWebsite={<PersonalWebsite />}
          mapaMelange={<MapaMelange />}
        />
      </div>
    </div>
  );
};

export default ProjectsView;
