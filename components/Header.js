import styled from "styled-components";
import Logo from "./Logo";

export default function Header() {
  return (
    <HeaderWrapper>
        <LogoWrapper>
            <Logo />
        </LogoWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;  
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: auto;

    @media (max-width: 600px) {
      width: 80px;
    }
  }
`;