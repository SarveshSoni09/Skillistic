import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Sidebar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="user-sidebar" className="glass-sidebar">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          aria-label="nav tabs example"
        >
          <LinkTab label="Login" href="/Login" />
          <LinkTab label="Verify" href="/VerifyEducation" />
          <LinkTab label="Status" href="/Status" />
        </Tabs>
      </Box>
    </div>
  );
};

export default Sidebar;
