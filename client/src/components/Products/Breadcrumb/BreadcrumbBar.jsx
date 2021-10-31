import React from 'react'
import TopMenu from "./Menu"
import './BreadcrumbBar.css'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Breadcrumbbar = () => {
  const breadcrumbs = [
    <Link
      className="link-bread"
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Sách tiếng việt
    </Link>,
    <Link
      className="link-bread"
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
    >
      văn học
    </Link>,
    <Typography className="link-bread" key="3" color="text.primary">
      tác phẩm kinh điển
    </Typography>,
  ];

  return (
    <div className="breadcrumb-bar">
      <TopMenu />

      <Stack className="stack" spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </div>
  );
}

export default Breadcrumbbar;
