import React from 'react';

const  Array = (props)=> {
    const companies = [{name:"laraib",start:1983},
        {name:"fatima",start:1982},
        {name:"noor",start:1981},{name:"zareen",start:1980}
        ];
    const company = companies.sort((a,b)=> (a.start > b.start ? a :b));
    console.log(company);
    const list = company.map(item =>(item.name+''+item.start+'  '));
    const test = companies.reduce((total,value)=>(total.start + value.start));

    return (
        <div>
            <h2>{list}</h2>
            <h2>{test}</h2>



        </div>
    );
}

export default Array;