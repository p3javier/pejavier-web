import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Social = () => {
  return (
    <div className="flex flex-wrap items-center justify-center h-screen text-white text-xl">
      <a
        href="https://www.linkedin.com/in/javier-perez-aragon/"
        className="inline-block align-middle text-center my-8 px-16 nm-flat-indigo-600-lg rounded-lg py-8 mx-8 hover:nm-concave-indigo-600-lg"
      >
        <div className="text-6xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <p>Linkedin</p>
      </a>

      <a
        href="http://discord.com/users/725372281966166028"
        className="inline-block align-middle text-center my-8 px-16 nm-flat-purple-600-lg rounded-lg py-8 mx-8 hover:nm-concave-purple-600-lg"
      >
        <div className="text-6xl">
          <FontAwesomeIcon icon={faDiscord} />
        </div>
        <p>Discord</p>
      </a>

      <a
        href="mailto:javiperezfc@gmail.com"
        className="inline-block align-middle text-center my-8 px-16 nm-flat-red-600-lg rounded-lg py-8 mx-8 hover:nm-concave-red-600-lg"
      >
        <div className="text-6xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <p>Mail</p>
      </a>
    </div>
  );
};

export default Social;
