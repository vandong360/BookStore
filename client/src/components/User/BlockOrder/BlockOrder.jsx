import React, { useState } from "react";
import "./BlockOrder.css";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemCart from "../../Cart/Item/ItemCart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BlockOrder() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="order-block">
      <div className="order-bar">
        <Box
          sx={{
            bgcolor: "white",
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              sx={{ bgcolor: "rgb(230, 124, 25)", width: "100%" }}
              TabIndicatorProps={{ style: { background: "#24353d" } }}
              inkBarStyle={{ background: "red" }}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Đang chờ xác nhận" {...a11yProps(0)} />
              <Tab label="Đang giao hàng" {...a11yProps(1)} />
              <Tab label="Đã giao" {...a11yProps(2)} />
              <Tab label="Đã huỷ" {...a11yProps(3)} />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <ItemCart />
              <ItemCart />
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>

            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
            
            <TabPanel value={value} index={3} dir={theme.direction}>
              Item Four
            </TabPanel>
          </SwipeableViews>
        </Box>
      </div>
    </div>
  );
}
