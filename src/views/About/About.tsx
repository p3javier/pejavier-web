import LaptopAnimation from "components/LaptopAnimation/LaptopAnimation";

import TextBlock from "components/TextBlock/TextBlock";

import SectionTitle from "components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div id="about">
      <SectionTitle title="About me" />
      <div className="flex flex-col-reverse lg:flex-row xs:px-16 pl-6 pr-2 mt-20 outline-none overflow-hidden text-justify">
        <TextBlock />
        <LaptopAnimation />
      </div>
    </div>
  );
};

export default About;
