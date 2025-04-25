import {useState, memo} from "react";

import styles from "./chat-form.module.css";

const ChatForm = ({onSubmit}) => {
    const [state, setState] = useState({
        message: ""
    });
    console.log("render chat form");

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState, 
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({
            message: ""
        })
    }

    const {message} = state;

    return (
        <form onSubmit={handleSubmit}>
            <input value={message} name="message" onChange={handleChange} placeholder="Enter your message" />
            <button>Send</button>
        </form>
    )
}

export default memo(ChatForm);