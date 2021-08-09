import React from 'react';

const  Spreadoperator = (props) => {
    const first =[1,2,3];
    const second =[4,5,6];
    const combined = first.concat(second);
    console.log(combined);
    const clone = [...first];
    console.log(first);
    console.log(clone);
    const combine = [...first,...second];
    const combo = { name:'laraib',secondName:'Fatima'};
    const combon ={ job:'instructor'};
    return (
        <div>

            {/*{combined}*/}
            {combine}

        </div>
    );
}

export default Spreadoperator;