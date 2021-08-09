import Item from "antd/lib/list/Item";
import React, { useState } from "react";

const Phonebook = (props) => {
  const [List, setList] = useState();
  const [Items, setItems] = useState([]);
  const style = {
    border: "1px solid",
    padding: "5px",
  };
  const Inputstyle = {
    width: "200px",
    border: "1px solid #d3d3d3",
    padding: "5px",
    borderRadius: "4px",
  };
  const Addlist = () => {
    setItems([...Items, List]);
    setList("");
  };
  const Deletelist = (index) => {
    const tilda = Items.filter((item, i)=>{return i!=index})
    setItems(tilda)
    console.log(tilda);
  };

  return (
    <div className="d-flex align-items-center  flex-column">
      <div className="my-4">
        <input
          type="text"
          style={style}
          value={List}
          onChange={(event) => setList(event.target.value)}
        />

        <button className="btn btn-primary" onClick={Addlist}>
          Add
        </button>
        <button className="btn btn-danger" onClick={Deletelist}>
          Delete
        </button>
      </div>
      {/* <div className="d-flex justify-content-center" style={Inputstyle}>
                       <div className="ml-3 d-flex flex-column">{Items.map((item) =><h2>{item}</h2>)}</div>
                <div className="d-flex justify-content-end" >
                    <div><i className="far fa-edit ml-3"></i></div>
                    <div><i className="fas fa-trash-alt mx-3" onClick={Deletelist}></i></div>

                </div>
            </div> */}

      {/* </div> */}
      {Items.map((item, index) => {
        return (
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center" style={Inputstyle}>
              <div className="ml-3 d-flex">
                <h4>{item}</h4>
                <div className="d-flex justify-content-end">
                  <div>
                    <i className="far fa-edit ml-3"></i>
                  </div>
                  <div>
                    <i
                      className="fas fa-trash-alt mx-3"
                      onClick={() => Deletelist(index)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Phonebook;
