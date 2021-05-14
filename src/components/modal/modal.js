import React, { useState } from "react";
import { Modal} from 'antd';
import 'antd/dist/antd.css';
import MyCV from "../../assets/images/my-cv.png";

import "./modal.css";


const ModalProfile = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button className="btn btn-dark" onClick={() => setVisible(true)}>My CV</button>
            <Modal
            title="My CV"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={650}
            height={300}
        >
            <img src={MyCV}/>
      </Modal>
        </div>
    )
}

export default ModalProfile;