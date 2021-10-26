import Notification from "./Notifications/Notification";
import './NotificationBox.scss';

const NotificationBox = () => {
    return (
        <ul className="box">
            <Notification type="alert" title="Alert" description="Non nisi sit ad veniam. Eiusmod irure cupidatat in fugiat sunt id eiusmod in mollit ullamco eiusmod.." />
            <Notification type="success" title="Success" description="Lorem ad et velit occaecat laborum aliqua anim non. Cupidatat cillum eu eiusmod qui nisi. Aliquip consectetur qui." />
            <Notification type="info" title="Info" description="Non tempor laborum excepteur est ex enim consequat nisi ad commodo culpa laborum ullamco. " />
        </ul>
    );
}

export default NotificationBox;