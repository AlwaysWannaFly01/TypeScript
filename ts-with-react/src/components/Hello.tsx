import React from 'react';

interface IHelloProps {
    message?: string /*非必填*/
}

// const Hello: React.FunctionComponent<IHelloProps> = (props) => {
// React.FC 为简写形式
const Hello: React.FC<IHelloProps> = (props) => {
    return <h2>{props.message}</h2>
}
Hello.defaultProps = {
    message: 'Hello AlwaysWannaFly'
}

export default Hello;
