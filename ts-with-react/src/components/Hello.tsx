import React, {useContext} from 'react';
import {ThemeContext} from "../App";

interface IHelloProps {
    message?: string /*非必填*/
}

// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
// React.FC 为简写形式
const Hello: React.FC<IHelloProps> = (props) => {
    const theme = useContext(ThemeContext);

    const style = {
        background: theme.background,
        color: theme.color
    }

    return <h2 style={style}>{props.message}</h2>
}
Hello.defaultProps = {
    message: 'Hello AlwaysWannaFly'
}

export default Hello;
