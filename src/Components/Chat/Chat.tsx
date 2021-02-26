import React from "react";
import { Stack, IStackTokens } from "@fluentui/react";
import { Button, Container, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";

import { io } from "socket.io-client";
import { Message } from "./ChatDataTypes";

const socket = io("http://localhost:3005/");
const Chat: React.FC = () => {
  const [allMessages, setAllMessages] = useState<Message[]>([
    { clientId: "-1", message: "Hello how are you" },
    { clientId: "-1", message: "I am fine" },
  ]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chat", (data: any) => {
      console.log(data);
      setAllMessages(data.message);
    });
  }, []);

  const verticalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
  };

  const showChats = (message: Message): JSX.Element => {
    return (
      <Stack.Item
        className={`messages ${
          message.clientId === socket.id ? "my-messages" : "other-messages"
        }`}
        align={message.clientId === socket.id ? "end" : "start"}
      >
        {message.message}
      </Stack.Item>
    );
  };

  const sendMessage = (): void => {
    if (message === "") {
      return;
    }
    setAllMessages((prevState: any) => [...prevState, message]);
    socket.emit("sendMessage", {
      message: [...allMessages, { clientId: socket.id, message: message }],
    });
    setMessage("");
  };

  return (
    <Container fixed className={"chat-container"}>
      <Stack className={"height-100per width-50per"}>
        <Stack horizontalAlign="center" className={"height-10per"}>
          <h1>Chat Application</h1>
        </Stack>
        <Stack tokens={verticalGapStackTokens} className={"message-container"}>
          {allMessages.map((item: Message) => showChats(item))}
        </Stack>
        <Stack horizontal className={"margin-top-10 height-10per"}>
          <form noValidate className={"message-form"}>
            <TextField
              id="standard-basic"
              name={"message"}
              label="Write Message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </form>
          <Button
            onClick={sendMessage}
            variant="contained"
            color="primary"
            className={"height-70per"}
          >
            Send Message
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Chat;
