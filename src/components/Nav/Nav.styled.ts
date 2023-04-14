import styled from "styled-components";

export const StyledNav = styled.nav`
nav {
  min-width:200px ;
  display: flex;

  ul {
    display: flex;
    width: 100%;
    height: 100%;

    li{
      flex: 1;
      list-style: none;
      background-color: lightgreen;
      margin: 1% 1%;
      border-radius: .5rem;
      text-align: center;

      &:hover {
          opacity: 0.5;
        }

      a{
        font-size: 3.5rem;
        text-decoration: none;
        color: black;

      }
    }
  }
}
  
`