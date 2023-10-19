import PropTypes from "prop-types";
import rayanImg from "../../assets/Rayan.jpg";
import jaeImg from "../../assets/Jae.jpg";
import koreyImg from "../../assets/Korey.jpg";
import SholaImg from "../../assets/Shola.jpg";

const AboutLocalApiItem = (props) => {
  let postImage = "";

  switch (props.image) {
    case "rayan":
      postImage = rayanImg;
      break;
    case "jae":
      postImage = jaeImg;
      break;
    case "korey":
      postImage = koreyImg;
      break;
    case "shola":
      postImage = SholaImg;
      break;
  }

  return (
    // Global Container
    <li className="flex items-center justify-center">
      {/* Card Containder */}

      <div className="flex flex-col p-6 m-3 space-y-10 bg-slate-600 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* image Div */}
        <div className="flex">
          <img
            src={postImage}
            className="h-96 w-80 mx-auto object-cover shadows-2xl rounded-2xl duration-200 hover:scale-105"
          ></img>
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-6">
          {/* Label & Description Container */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                {props.name}
              </div>
            </div>
            {/* Description */}
            <div className="flex-flex-col">
              <div className="max-w-sm text-2xl font-medium">
                Java Fullstack Developer
              </div>
              {/* Skill Set */}
              <div>
                <p className="text-sm font-bold text-grey-400">
                  Html, CSS, Javascript, React Js, Tailwindcss, Java,
                  SpringBoot, Github
                </p>
              </div>
              {/* Socials */}
              <div className="flex flex-row mt-2 mb-2 space-x-3 rounded-full">
                <a href="#">
                  <p className="text-orange-400 hover:text-orange-700 p-3 hover:underline decoration-2 decoration-blue-200">
                    LinkedIn
                  </p>
                </a>
                <a href="#">
                  <p className="text-orange-400 hover:text-orange-700 p-3 hover:underline decoration-2 decoration-blue-200">
                    Twitter
                  </p>
                </a>
                <a href="#">
                  <p className="text-orange-400 hover:text-orange-700 p-3 hover:underline decoration-2 decoration-blue-200">
                    Github
                  </p>
                </a>
              </div>
            </div>
            {/* About Section */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <div className="text-2xl font-light text-grey-100">
                {props.description}
              </div>
              <p className="text-sm font-normal text-white max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores magni cum dignissimos voluptatum autem a similique
                cupiditate, eaque dicta ad perspiciatis labore quidem doloribus,
                itaque perferendis fugit delectus repellendus culpa, accusantium
                ullam ducimus aliquid fugiat. Suscipit enim quia minima ipsum
                sint nobis nihil. Minus vero commodi aliquid? Eaque quo minima
                aspernatur omnis reprehenderit quibusdam officia dolorem. Enim,
                fugiat. Dicta, esse!
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

AboutLocalApiItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
export default AboutLocalApiItem;
