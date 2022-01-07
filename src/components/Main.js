import { StyledMain } from "./styles/Main.styled";
import content from "./content";

export default function Main() {
  return (
    <StyledMain>
      <h1>Why Choose Easybank?</h1>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <img src={`./images/${item.image}`} alt="" />
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </StyledMain>
  );
}
