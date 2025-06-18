import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function PetNav() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <StyledNav>
      <StyledLink href={`/pets/${id}/interaction`}>
        <StyledButton $active={router.asPath.includes("/interaction")}>
          Interaction
        </StyledButton>
      </StyledLink>
      <StyledLink href={`/pets/${id}/details`}>
        <StyledButton $active={router.asPath.includes("/details")}>
          Details
        </StyledButton>
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  display: flex;
  gap: 12px;
  padding: 5px;
  border-radius: 20px 20px 0 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media (max-width: 600px) {
      left: 0;  
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  padding: 12px 20px;
  margin: 8px;
  min-width: 125px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  border: 1px solid rgba(128, 127, 127, 0.1);
  background: transparent;
  cursor: pointer;
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.12),
    -6px -6px 12px rgba(176, 172, 172, 0.12);
  transition: all 0.2s ease-in-out;
  transform: scale(1)

  ${(props) =>
    props.$active &&
    `
    transform: scale(0.96);
    background:rgba(193, 193, 193, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: black;
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.6);
  `}
`;
