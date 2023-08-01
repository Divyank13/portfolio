/* eslint-disable react/jsx-no-target-blank */
import "./footer.css";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiTwotoneMail,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="name-img">
        <div className="img-container">
          <img
            src="https://avatars.githubusercontent.com/u/88246002?v=4"
            alt=""
          />
        </div>
        <p className="name">Divyank Manjarwar</p>
        <a className="mail" href="mailto:divyank039@gmail.com">
          <AiTwotoneMail /> Mail me
        </a>
      </div>
      <div className="socials">
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/divyank-manjarwar-12b267237/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="github"
          href="https://github.com/Divyank13"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/DManjarwar"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>
      </div>
      <p className="note">© No Copyright, feel free to copy</p>
    </div>
  );
};
