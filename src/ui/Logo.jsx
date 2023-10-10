import styled from "styled-components";
import { FaHotel } from "react-icons/fa";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1rem;
  }

  h1 {
    font-size: 2rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <FaHotel />
      <h1>Hotel Dashboard</h1>
    </StyledLogo>
  );
}

export default Logo;
