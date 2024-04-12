import { Message, MessageHeader } from "semantic-ui-react";

interface IProps {
  meesage: string;
}

const MessageSUI = ({ meesage }: IProps) => {
  return (
    <div>
      <Message>
        <p>{meesage}.</p>
      </Message>
    </div>
  );
};

export default MessageSUI;
