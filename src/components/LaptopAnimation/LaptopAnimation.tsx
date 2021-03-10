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
    <div className="max-w-md">
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </div>
  );
};

export default LaptopAnimation;
