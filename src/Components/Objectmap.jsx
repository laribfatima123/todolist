import React from 'react';

const Objectmap = (props) => {
    const colors = ['red', 'blue', 'green'];
    const findColors = colors.map(function (color) {
        return <li> {color} </li>;
    })
    const fruits = [];
    const findFruits = fruits.map(function (fruit){
        return <li>{findFruits}</li>;
    })
    const cars =['bmw','suzuki'];
    const carsFind = cars.map(function (car){
        return <li>{car}</li>

    })
    return (
        <div>
            {findColors}
            {findFruits}
            {carsFind}
        </div>
    );
}

export default Objectmap;