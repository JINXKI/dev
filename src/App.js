/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // ES6 destructuring 문법
  let [title, setTitle] = useState(['tvn 드라마 제작부 모집', '헤어 프리랜서 팀원을 구합니다.', '의상팀 경력자 구합니다~'])
  let [likes, setLikes] = useState(0);
  let [desc, setDesc] = useState(['홀로 개발하는 풀스텍 개발자들을 위한 방','비전공자 개발자를 위한 방','이론 공부를 위한 방'])
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>ㅍㄹㄴㄹ</div>
      </div>
      <div className="category">
        <button className="role-btn">
          ACTORS | 배우 & 모델
        </button>
        <button className="role-btn">
          MAKERS | 기획 & 제작
        </button>
      </div>
      <div className="list">
        <h3> { title[0] } </h3> <span onClick={ ()=>{ setLikes(likes + 1) } }> 👀 </span> { likes } 
        <p> { desc[0] } </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p> { desc[1] } </p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={()=> { setModal(!modal) }}> { title[2] } </h3>
        <p> { desc[2] } </p>
        <hr/>
      </div>

      {
        modal == true ? <Modal></Modal> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <p>모집부문</p>
      <p>모집인원</p>
      <p>기간</p>
      <p>제작사</p>
      <p>상세내용</p>
      <p>급여</p>
      <p>연락처</p>
      <button className="apply">포트폴리오 제출하기</button>
      <p1> D-3 </p1>
      <p1>지원자 수</p1>
    </div>
  )
}

export default App;
