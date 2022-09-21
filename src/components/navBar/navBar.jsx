import React from "react";
import css from "./navBar.module.css";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "../drawer/muiDrawer";

const NavBar = () => {
  const ok = useMediaQuery("(max-width:480px)");
  const links = ["Home", "Features", "Pricing", "FAQ", "Blog", "Contact"];
  return (
    <div className={css.navBar}>
      {ok && <Drawer rows={links} />}
      <span className={css.name}>aircalling</span>
      <div className={css.links}>
        {links.map((link) => 
          <a className={css.link} href={link} key={link}>
            {link}
          </a>
        )}
      </div>
      {!ok && (
        <Button
          sx={{
            backgroundColor: "#d9daee",
            color: "#4d4e9e",
            textTransform: "none",
            ":hover": { backgroundColor: "white" },
            width: "100px",
          }}
          size="large"
        >
          <span className={css.btnText}>Log in</span>
        </Button>
      )}
    </div>
  );
};

export default NavBar;
