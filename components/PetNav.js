import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function PetNav() {

  const router = useRouter();
  const {id} = router.query

  if (!id) return null;

  return (
    <StyledNav>
      <StyledLink href={`/pets/${id}/interaction`} >
      <StyledButton $active={router.asPath.includes("/interaction")}>
        Interaction
      </StyledButton>
      </StyledLink>
      <StyledLink href={`/pets/${id}/details`} >
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  margin: 15px;
  font-family: inherit;
  font-size: 1em;
  font-weight: 600;
  background-color: white;
  padding: 10px 20px;
  width: 160px;
  border-radius: 6px;
  border: 3px solid #aaa;
  color: #aaa;
  cursor: pointer;
    &:hover {
    background-color: #f1f0f0;
  }

  ${(props) => props.$active && `
    border: none;
    background-color: #5885aa;
    color: white;
        &:hover {
    background-color: #5885aa
    ;
  }
  `}

  transition: background-color 0.2s ease, color 0.2s ease;
`;