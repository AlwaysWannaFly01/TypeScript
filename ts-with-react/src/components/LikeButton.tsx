import React, {useState, useEffect} from "react";
import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    const positions = useMousePosition();

    /*每次组件完成渲染之后,useEffect就被触发了*/
    useEffect(() => {
        console.log('document title effect is running')
        document.title = `点击了${like}次`
    }, [like, on])  /*当useEffect参数二数组中的依赖改变时, 才会触发useEffect方法*/

    return (
        <div>
            <h2>x-{positions.x}, y-{positions.y}</h2>
            <button onClick={() => {
                setLike(like + 1)
            }}>{like}👍
            </button>
            <button onClick={() => {
                setOn(!on)
            }}>{on ? "ON" : 'OFF'}
            </button>
        </div>
    )
}

export default LikeButton;