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
  width: 100%;
  max-width: 600px;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  padding: 20px;
  background-color: #e0e5ec;
  box-shadow: inset 0 1px 0 #ffffff, inset 0 -1px 0 #a3b1c6;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1.25rem;
  padding: 12px 24px;
  width: 160px;
  border: none;
  border-radius: 6px;
  background: #e0e5ec;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.$active
      ? "inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff"
      : "6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff"};

  &:hover {
    color: #000;
  }
`;
