import LaptopAnimation from "components/LaptopAnimation/LaptopAnimation";

import TextBlock from "components/TextBlock/TextBlock";

import SectionTitle from "components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div id="about">
      <SectionTitle title="About me" />
      <div className="flex flex-wrap px-32 mt-20 outline-none overflow-hidden">
        <TextBlock />
        <LaptopAnimation />
      </div>
    </div>
  );
};

export default About;
