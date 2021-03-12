import React from "react";

import Tabs from "components/Tabs/Tabs";

import PersonalWebsite from "./PersonalWebsite";

import MapaMelange from "./MapaMelange";

import SectionTitle from "components/SectionTitle/SectionTitle";

import ExtremumEcommerce from "./ExtremumEcommerce";

const ProjectsView = () => {
  return (
    <div className="mt-20" id="projects">
      <SectionTitle title="Projects" />
      <div className="mt-16">
        <Tabs
          personalWebsite={<PersonalWebsite />}
          mapaMelange={<MapaMelange />}
          extremumEcommerce={<ExtremumEcommerce />}
        />
      </div>
    </div>
  );
};

export default ProjectsView;
