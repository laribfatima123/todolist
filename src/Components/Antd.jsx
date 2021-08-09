
import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message,Alert,Typography  } from 'antd';
import 'antd/dist/antd.css';
import Text from "antd/es/typography/Text";

const  Antd = (props)=>{
    const {Title} = Typography;
    const [date, setDate] = useState(null);
const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
};
return (

    <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: 400, margin: '100px auto', border:'1px solid red' }}>

        <div  style={{ border:'1px solid black' }}>
            <DatePicker onChange={handleChange} />
        </div>



            <div style={{ marginTop: 16,border:'1px solid green' }}>

                <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
            </div>
            <Title level={2}><Text type="success">text</Text></Title>
        </div>




    </div>

);



}

export default Antd;