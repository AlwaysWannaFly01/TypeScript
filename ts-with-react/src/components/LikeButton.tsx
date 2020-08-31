import React, {useState, useEffect, useRef} from "react";
import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    const positions = useMousePosition();
    const likeRef = useRef(0);
    const didMountRef = useRef(false);
    const domRef = useRef<HTMLInputElement>(null);

    /*每次组件完成渲染之后,useEffect就被触发了*/
    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is uploaded')
        } else {
            didMountRef.current = true;
        }
        // console.log('document title effect is running')
        // document.title = `点击了${like}次`
    }, [like, on])  /*当useEffect参数二数组中的依赖改变时, 才会触发useEffect方法*/

    function handleAlertClick() {
        setTimeout(() => {
            alert('you click on' + likeRef.current + '次')
        }, 3000)
    }

    useEffect(() => {
        if (domRef && domRef.current) {
            domRef.current.focus()
        }
    })
    return (
        <div>
            <input type="text" ref={domRef}/>
            <h2>x-{positions.x}, y-{positions.y}</h2>
            <button onClick={() => {
                setLike(like + 1)
                likeRef.current++
            }}>
                {like}👍
            </button>
            <button onClick={handleAlertClick}>
                Alert!
            </button>
            <button onClick={() => {
                setOn(!on)
            }}>{on ? "ON" : 'OFF'}
            </button>

        </div>
    )
}

export default LikeButton;