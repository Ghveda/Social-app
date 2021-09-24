import React from "react";
// import { contextStyled } from './context.style';
import styled from 'styled-components';


const ContextStyled = styled.div`
  position: fixed;
  background-color: #461515;
  color: #d70000;
`;

const Context = ()=>{
    return(
            <ContextStyled>
                <ul>
                    <li>something</li>
                    <li>something</li>
                </ul>
            </ContextStyled>
    );
}

export default Context;