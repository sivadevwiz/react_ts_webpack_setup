import './styles.css';

import IMAGE from './MHN_video.png';
import LOGO from './react.svg';
import ClickCounter from './ClickCounter';

export const App = () => {
  const a = "tessst";

  return (
    <>
      <h1>
        First react template - {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={IMAGE} alt="Test logo" width="300" height="300" />
      <img src={LOGO} alt="Test logo" width="300" />
      <ClickCounter />
    </>
  );
};
