import React, {useState} from 'react';
import api from '../api/api';
import env from '../api/env';
import network from '../api/network';
import {useHistory} from "react-router";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import React from 'react';

const Signup = (props) => {
    const history = useHistory();
    const [Email, setEmail] = useState();
    const [FirstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [Password, setPassword] = useState();
    const [mobilePhoneNumber, setMobilePhoneNumber] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const handleSignup = async () => {
        let obj = {
            email: Email,
            first_name: FirstName,
            last_name: lastName,
            mobile_phone_number: mobilePhoneNumber,
            password: Password,
            password_confirmation: passwordConfirmation
        };
        console.log("data",
            Email,
            FirstName,
            lastName,
            mobilePhoneNumber,
            Password,
            passwordConfirmation
        );


        const response = await network.post(api.REGISTER_USER, obj);
        console.log("response", response);
        if (response.ok) {

            history.push("/login");
            alert("succcess");
        }
    };

    return (
        <div>
            <div className="d-flex align-items-center  mt-5 pt-5 flex-column">
                <h2>Signup</h2>
                <div>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" value={FirstName} onChange={(event) => setFirstName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" value={Email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor=" password">Password:</label>
                    <input type="text" value={Password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="mobile_phone_number">mobile_phone_number:</label>
                    <input type="text" value={mobilePhoneNumber}
                           onChange={(event) => setMobilePhoneNumber(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="passwordConfirmation">passwordConfirmation:</label>
                    <input type="text" value={passwordConfirmation}
                           onChange={(event) => setPasswordConfirmation(event.target.value)}/>
                </div>


                <div>
                    <input type="submit" value="Submit" onClick={() => handleSignup()}/>
                </div>
            </div>
        </div>
    );
}

export default Signup;