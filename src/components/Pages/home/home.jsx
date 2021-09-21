import React from "react";
import { MainDiv } from '../main.style';
import Posts from './posts/posts';
import MakePost from "./makepost/makepost";

const Home = ()=>{
    return(
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