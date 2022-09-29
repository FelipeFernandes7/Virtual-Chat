import { MessageSender } from "../../components/messages/MessageSender";
import {Messages} from '../../components/messages/Messages'
import { Chat, Container, Navbar } from "./styles";
import {useMessages} from "../../hooks/useMessages";

export function Home() {
    const { messages } = useMessages()
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Chat>
          <Messages  messages={messages} />
          <MessageSender />
        </Chat>
      </Container>
    </>
  );
}
