import React, {useState} from 'react';

const Todolist = () => {


    const [text, setText] = useState("");
    const [todoData, setTodoDate] = useState([])


    const changeState = (event) => {
        const {value} = event.target
        setText(value)
    }

    const changeTodoData = () => {
        setTodoDate([...todoData, text])
        setText("")
    }
    const showList = todoData.map((listData, index) => {
        return <div key={index}>{listData}</div>
    })

    return (
        <div className="text-center">

            <h2> *--- Todo list ---* </h2>

            <input type="text"  value={text} onChange={(event) => {
                changeState(event)
            }}/>
            <button onClick={changeTodoData}>Add</button>
            <div>{showList}</div>


        </div>
    );
}

export default Todolist;