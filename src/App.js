import './App.css';
import {useState} from "react";

function App() {
    let [post, setPost] = useState(['리액트 라이브러리 추천', '리액트 커뮤니티 추천', '리액트 공식문서']);
    let [title, setTitle] = useState('리액트 할거임');

    let [goodCount, setGoodCount] = useState([0, 0, 0]);

    const countPlus = (index) => {
        let copy = [...goodCount];
        copy[index] = copy[index] + 1;

        setGoodCount(copy);

    }

    const changeTitle = () => {
        let copy = [...post];
        copy[0] = '11';

        setPost(copy);
    }

    const sortPost = () => {
        let copy = [...post];
        copy.sort();

        setPost(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{title}</h4>
            </div>
            <button onClick={() => changeTitle(true)}>
                change post
            </button>
            <button onClick={() => sortPost(true)}>
                sort post
            </button>
            <div className="list">
                <h4>{post[0]} <span onClick={() =>  countPlus(0)}>좋아요</span> {goodCount[0]} </h4>
                <div>redux</div>
            </div>
            <div className="list">
                <h4>{post[1]} <span>좋아요</span> {goodCount[1]} </h4>
                <div>redux</div>
            </div>
            <div className="list">
                <h4>{post[2]} <span>좋아요</span> {goodCount[2]} </h4>
                <div>redux</div>
            </div>
        </div>
    );
}

export default App;
//