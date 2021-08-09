import React from 'react';

function Arrow(props) {
    const jobs = [
        { id:1,isActive:true },
        {id:2,isActive:true},
        {id:3,isActive:false}
    ];

jobs.filter(function(job){return job.isActive;})
  const activeJobs =  jobs.filter(job => job.isActive)
console.log(activeJobs);
    return (
        <div>
           i am from arrow function.
        </div>
    );
}

export default Arrow;