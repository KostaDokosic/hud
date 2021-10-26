import './Notification.scss';
import { FaInfoCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Notification = (props) => {
    let i = <FaCheckCircle size="large" color="#86E689"/>;
    if(props.type === 'alert') i = <FaTimesCircle size="large" color="#A30033"/>;
    else if(props.type === 'info') i = <FaInfoCircle size="large" color="#22BBE6"/>;

    return (  
        <li className="notification">
            <div className="imageArea">
                {i}
            </div>
            <div className="textArea">
                <ul>
                    <li>{props.title}</li>
                    <li>{props.description}</li>
                </ul>
            </div>
            <div className="slider"></div>
        </li>
    );
}

export default Notification;