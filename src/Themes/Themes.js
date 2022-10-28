import React from "react";
import { CiLight } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const Themes = () => {
//   const [light, setLight] = useState(true);

//   const handleThemes = (event) => {
//     if(light && event.target.display="block")
//     setLight(!true);
//   };

  return (
    <div>
      <button>
        <IoMdMoon></IoMdMoon> Zohirul
      </button>

      <button>
        <CiLight></CiLight> Saiful
      </button>
    </div>
  );
};

export default Themes;
