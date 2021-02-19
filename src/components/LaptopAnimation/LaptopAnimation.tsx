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
    <div className="w-1/2">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default LaptopAnimation;
