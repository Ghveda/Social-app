import React from "react";
import Posts from './posts/posts';
import MakePost from "./makepost/makepost";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 60vw;
  margin-top: 30px;
  height: auto;
`;

const Home = () => {
    return (
        <MainDiv>
            <div>
                <MakePost/>
            </div>
            <div>
                <Posts/>
            </div>
        </MainDiv>
    );
}
export default Home;