import './Box.scss';

export default function Box (props) {
    const isOnClass = props.isOn ? "box--on" : "box--off";
    const classNames = "box " + isOnClass;
    const styleObject = {
        backgroundColor: props.isOn ? "#222222" : "transparent"
    }

    return (
        <div 
            className={classNames}
            style={styleObject}
            onClick={props.handleToggle}
        >
        </div>
    )
}