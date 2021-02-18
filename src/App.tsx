import { Stack } from "@fluentui/react";
import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import "./App.scss";

function App() {
  const [chat, setChat] = useState(["Hello how are you", "I am fine"]);

  const showChats = (message: string): JSX.Element => {
    return (
      <Card style={{ marginTop: "5px", width: "fit-content", padding: "5px" }}>
        <CardContent>{message}</CardContent>
      </Card>
    );
  };

  return (
    <Container
      fixed
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <Stack style={{ height: "100%", width: "50%" }}>
        <Stack horizontalAlign="center" style={{ height: "10%" }}>
          <h1>Chat Application</h1>
        </Stack>
        <Stack
          style={{
            height: "70%",
            paddingLeft: "5px",
            backgroundColor: "#eeeee4",
            overflowY: "auto",
          }}
        >
          {chat.map((item) => showChats(item))}
        </Stack>
        <Stack horizontal style={{ height: "10%", marginTop: "10px" }}>
          <form noValidate style={{ width: "100%" }} className={"message-form"}>
            <TextField id="standard-basic" label="Write Message" />
          </form>
          <Button variant="contained" color="primary" style={{ height: "70%" }}>
            Send Message
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
