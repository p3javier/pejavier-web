import Lottie from "react-lottie";
import animationData from "assets/lotties/18123-developer.json";

const LaptopAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-2/3 xs:w-2/3 sm:w-2/3 lg:w-full">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        width="50%"
        height="60%"
      />
    </div>
  );
};

export default LaptopAnimation;
