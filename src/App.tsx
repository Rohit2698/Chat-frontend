import { Stack } from "@fluentui/react";
import { Button, Container, TextField } from "@material-ui/core";
import "./App.scss";

function App() {
  return (
    <Container
      fixed
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <Stack style={{ height: "100%", width: "50%" }}>
        <Stack horizontalAlign="center" style={{ height: "10%" }}>
          <h1>Chat Application</h1>
        </Stack>
        <Stack style={{ height: "70%" }}>
          <h1>Chats</h1>
        </Stack>
        <Stack horizontal style={{ height: "10%" }}>
          <form noValidate style={{ width: "100%" }} className={"message-form"}>
            <TextField id="standard-basic" label="Write Message" />
          </form>
          <Button variant="contained" color="primary" style={{ height: "50%" }}>
            Primary
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
