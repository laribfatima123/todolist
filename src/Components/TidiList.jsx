import React, {useState} from 'react';
import Todolist from "./Todolist";

const Tidilist = () => {
    const [input, setInput] = useState();
    const [todoData, setTodoData] = useState([]);

    const HandleInput = (event) => {
        const dd = event.target.value;
        setInput(dd);
        console.log(setInput);
    }
    const addList = () => {
        console.log("in add list")

        setTodoData([...todoData, input])
        setInput("");
    }
    // const deleteList = (id) => {
    //    console.log("delete");
    //     // const  mulo = todoData.filter(delta)
    //     var filtered = todoData.filter(function(value, arr){
    //         for (let i=0;i<Todolist.length;i++){
    //             return todoData.indexOf();
    //         }
    //
    //     });
    //     console.log(filtered);
    //     if(filtered === todoData.index){
    //        const rem = todoData.splice();
    //         setTodoData("");
    //        console.log(rem);
    //     }
    //     // console.log(setInput);
    //
    // }
// const del = (delta)=>{
//      if ( deleteText === del){
//          return del;
//      }
//
// }
    const removeItem = (index) => {

        const result = todoData.filter((item, i) => {
            return i !== index
        })
        setTodoData(result)
        // todoData.splice(props, 1)
        // setTodoData({todoData: todoData})
        // console.log(todoData);
    };

    return (
        <div className="text-center">

            <h2> *--- Todo list ---* </h2>

            <input type="text" value={input} onChange={(event) => HandleInput(event)}/>
            {/*<h3>{input}</h3>*/}
            <button className="btn-primary" onClick={addList}>Add</button>
            <div>
                {todoData.map((item, index) => {
                    return <>
                        <div>{item}</div>
                        <button className="btn-outline-danger" onClick={() => removeItem(index)}>Delete</button>
                    </>

                })}
            </div>


        </div>
    );
}

export default Tidilist;