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
  margin-top: 15px;
  text-align: center;
    `;

export const ListStyle = styled.ul`
  list-style: none;
    `;


export const LiStyle = styled.li`
  border-bottom: 1px solid #E1E1E1;
  width: 10vw;
  margin-bottom: 8%;
  margin-left: -1%;
  padding: 5px;
  
  &:hover{
    color:black;
    background-color: #EBEBEB;
    margin-left: 0;
    border-radius: 10px;
    cursor: pointer;
  }
    `;