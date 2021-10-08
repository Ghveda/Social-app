import styled from "styled-components";


export const BoxStyled = styled.div`
    width: 20vw;
    height: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    &>div{
      padding: 5px;
    }
    `;

export const DivElement = styled.div`
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
  padding: 0.8rem;
    `;

  export const DivElementMenuBox = styled.div`
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
  `;

export const DivElementMenu = styled.div`
  margin-top: 10%;
  margin-left: 0;
  
`;

export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
    `;


export const LiStyle = styled.li`
  width: 100%;
  display: flex;
  padding: 0;
  flex-direction: column;
  padding: 1rem;
  transition-duration:1s; 
  &:hover{
    color:#3864FF;
    background-color: #EBEBEB;
    cursor: pointer;
    transition-duration:0.8s;    
  }
    `;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
font-family: Verdana, sans-serif;
color: #3864FF;
`;

export const ProfileDivMain = styled.div`
padding: 10px;
`;