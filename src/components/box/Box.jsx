import './Box.scss';

export default function Box (props) {
    const isOnClass = props.isOn ? "box--on" : "box--off";
    const classNames = "box " + isOnClass;
    const styleObject = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    return (
        <div 
            className={classNames}
            style={styleObject}
        >
        </div>
    )
}