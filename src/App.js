import './App.css';
import {useState} from "react";

function App() {
    let [post, setPost] = useState(['리액트 라이브러리 추천', '리액트 커뮤니티 추천', '리액트 공식문서']);
    let [title, setTitle] = useState('리액트 할거임');

    let [goodCount, setGoodCount] = useState([0, 0, 0]);

    let [modal, setModal] = useState([false, false, false]);

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

    const viewModal = (i) => {
        let copy = [...modal];
        copy[i] = !copy[i];

        setModal(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{title}</h4>
            </div>
            <button onClick={() => changeTitle(true)}>
                change post_main_branch
            </button>
            <button onClick={() => sortPost(true)}>
                sort post
            </button>

            {
                post.map((content, i) => {
                    return (
                        <div className="list" key={i}>
                            <div onClick={() => viewModal(i)}>
                                <h4>{post[i]} <span onClick={() => countPlus(i)}>좋아요</span> {goodCount[i]} </h4>
                                <div>redux</div>
                            </div>
                            {
                                modal[i] ? <ModalFunc
                                    color={'skyblue'}
                                    index={i}
                                    setPost={setPost}
                                    post={post}/> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

const ModalFunc = (props) => {

    const propsTest = () => {
        let copy = [...props.post];

        copy[props.index] = '으아아아';
        props.setPost(copy);
    }

    return (
        <>
            <div className="modal" style={{background: props.color}}>
                <h4>{props.post[props.index]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={() => propsTest()}>글수정</button>
            </div>
        </>
    )
}

export default App;
//