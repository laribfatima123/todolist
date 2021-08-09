import React,{useState}from 'react';
import { Typography, Slider } from 'antd';


const Done= (props)=> {
    const { Paragraph } = Typography;
    const { rows,setRows } = useState();
    const article = "To be, or not to be,";



    const onChange = rows => {
        setRows(rows);
    };
    return (
        <div>

            <Slider value={rows} min={1} max={10} onChange={onChange} />
            <Paragraph
                ellipsis={{
                    rows,
                    expandable: true,
                    suffix: '--William Shakespeare',
                    onEllipsis: ellipsis => {
                        console.log('Ellipsis changed:', ellipsis);
                    },
                }}
                title={`${article}--William Shakespeare`}
            >
                {article}
            </Paragraph>



        </div>
    );
}

export default Done;