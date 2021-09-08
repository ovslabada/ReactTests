import { MessageDiv } from "./constans";

const MessageComponent = ({message}) => {
    return(
        <MessageDiv>
            {message}
        </MessageDiv>
    );
}

export default MessageComponent;