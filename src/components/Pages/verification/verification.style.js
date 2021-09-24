import styled from 'styled-components';
import { bool } from '../../../App';

export const MainDiv = styled.div`
  display: flex;
  margin: ${!bool? "auto": 0};
  width: 60vw;
  margin-top: 30px;
  height: auto;
  background-color: rgb(255,255,255,0.8);
  border-radius: 10px;
  padding: 10px;
    `;

export const InputStyled = styled.input`
  width: 30vw;
  height: auto;
  background-color: inherit;
  border: none;
  outline: none;
    `;

export const LittleLabel = styled.label`
  font-size: 10px;
  cursor: pointer;
  &:hover{
    color: #D8D8D8;
  }
    `;

export const ImgStyled = styled.img`
  width: 21vw;
  height: auto;
  border-radius: 20px;
    `;