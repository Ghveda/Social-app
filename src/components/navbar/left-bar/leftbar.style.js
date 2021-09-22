import styled from "styled-components";


export const BoxStyled = styled.div`
    width: 20vw;
    height: auto;
    margin-top: 10px;
    margin-left: 0;
    `;

export const DivElement = styled.div`
  padding: 10px;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
    `;

export const DivElementMenu = styled.div`
  margin-top: 10%;

`;

export const ListStyle = styled.ul`
  list-style: none;
    `;


export const LiStyle = styled.li`
  width: auto;
  padding: 5px;
  
  &:hover{
    color:black;
    background-color: #EBEBEB;
    margin-left: 0;
    border-radius: 10px;
    cursor: pointer;
  }
    `;