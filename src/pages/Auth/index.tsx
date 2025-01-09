import { useState } from "react";
import "./styles.css";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { Box, Tab, Tabs, useTheme } from "@mui/material";
import { TabPanel } from "../../components/TabPanel";

const Auth = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [onRegister, setOnRegister] = useState<boolean>(false);
  const togglePanel = () => {
    setOnRegister(!onRegister);
  };
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden ">
      <div className="box lg:max-w-4xl">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="Login and Register Tabs"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <LoginForm togglePanel={togglePanel} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <RegisterForm togglePanel={togglePanel} />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Auth;
