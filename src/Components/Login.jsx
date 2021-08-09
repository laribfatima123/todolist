import React,{useState}from 'react';
import api from '../api/api';
import { Button,Tooltip ,Form,Input,Checkbox} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import env from '../api/env';
import network from '../api/network';
import {useHistory} from "react-router";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props) => {
    const history = useHistory();
 const [Email,setEmail]= useState();
 const [Password,setPassword] = useState();


 const handleLogin = async()=>{
     let obj = {
         email:Email,
         password:Password,

     }
     const response = await network.post(api.LOGIN_USER,obj);
     if(response.ok){
         history.push("/Home")
         console.log(obj)
     }
 else {
     alert("wrong email or password");
     history.push("/Home")
     console.log(obj)
 }

    }



    return (
        <div className="d-flex align-items-center  mt-5 pt-5 flex-column">
<div><h2>LOGIN</h2></div>

            <Form

            labelCol={{
            span: 8,
        }}
            wrapperCol={{
            span: 16,
        }}

            >
            <Form.Item
            label="Email"

            value={Email}
            onChange={(event)=>setEmail(event.target.value)}

            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"

            value={Password}
            onChange={(event)=>setPassword(event.target.value)}

            >
            <Input />
            </Form.Item>


            <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
        }}
            >

            <Button type="primary"  shape="round"  onClick={()=>handleLogin()}>
            Submit
            </Button>

            </Form.Item>

            </Form>


        </div>
    );

}
export default Login;
