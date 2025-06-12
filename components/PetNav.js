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
  bottom: 0;
  border-top: 3px solid #5885da;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  margin: 15px;
  font-family: inherit;
  font-size: 1rem;
  background-color: white;
  padding: 5px 20px;
  width: 160px;
  border-radius: 3px;
  border: 3px solid #aaa;
  color: black;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    `
    border: none;
    background-color: #5885aa;
    color: white;
  `}

  transition: background-color 0.2s ease, color 0.2s ease;
`;
