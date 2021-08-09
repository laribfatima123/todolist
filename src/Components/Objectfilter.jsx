import React from 'react';

const  Objectfilter = (props)=> {
    const object =[
        {id:1, name:"laraib", student:false},
        {id:2,name :"fatima",student:true}
    ];
    const objectDetails = object.filter(obj => obj.student);
    console.log(objectDetails);
    return (
        <div>
        </div>
    );
}

export default Objectfilter;