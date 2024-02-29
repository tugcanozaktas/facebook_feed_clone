import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import BottomNav from "./components/BottomNav";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [value, setValue] = useState("1");
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {window.innerWidth < 600 ? (
            <>
              {value === 0 ? (
                <Sidebar setMode={setMode} mode={mode} />
              ) : value === 2 ? (
                <Rightbar />
              ) : (
                <Feed />
              )}
            </>
          ) : (
            <>
              <Sidebar setMode={setMode} mode={mode} />
              <Feed />
              <Rightbar />
            </>
          )}
        </Stack>
        <Add />
        <BottomNav setValue={setValue} value={value} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
