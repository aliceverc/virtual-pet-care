import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Image
          src="/logo2.png"
          alt="Logo"
          width={100}
          height={100}
          style={{ height: "auto" }}
        />
        <TextArea>
          Virtual <span>Pet Care</span>
        </TextArea>
      </LogoWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  img {
    width: 100px;
    height: auto;

    @media (max-width: 600px) {
      width: 80px;
    }
  }
`;

const TextArea = styled.h1`
  font-family: "Press Start 2P", monospace;
  font-size: 26px;
  font-weight: bold;
  span {
    display: inline;
  }

  @media (max-width: 400px) {
    span {
      display: block;
    }
  }
`;
