import "./styles.css";

import IMAGE from "./MHN_video.png";
import LOGO from "./react.svg";

export const App = () => {
  return (
    <>
      <h1>First react template - {process.env.NODE_ENV} - {process.env.name}</h1>
      <img src={IMAGE} alt="Test logo" width="300" height="300" />
      <img src={LOGO} alt="Test logo" width="300" />
    </>
  );
};
