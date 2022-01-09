import { FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { StyledSocials } from "./styles/Socials.styles";

export default function Socials() {
  return (
    <StyledSocials>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://youtube.com">
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://pinterest.com">
          <FaPinterest />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </li>
    </StyledSocials>
  );
}
