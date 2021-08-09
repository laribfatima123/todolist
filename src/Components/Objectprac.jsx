import React from 'react';

const Objectprac = (props) => {
    const address = {
        country: '',
        street: 'jdejre',
        city: ''
    };
    const country = address.country;
    const street = address.street;
    const city = address.city;
    console.log(street);
    return (
        <div>

            {street}

        </div>
    );
}

export default Objectprac;