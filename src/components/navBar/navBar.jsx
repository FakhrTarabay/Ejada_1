import React from 'react'
import css from './navBar.module.css'
import Button from '@mui/material/Button';

const NavBar = () => {
    return (
        <div className={css.navBar}>
            <span className={css.name}>aircalling</span>
            <div className={css.links}>
                <a className={css.link} href="d">Home</a>
                <a className={css.link} href="ddd">Features</a>
                <a className={css.link} href="d">Pricing</a>
                <a className={css.link} href="dd">FAQ</a>
                <a className={css.link} href="d">Blog</a>
                <a className={css.link} href="d">Contact</a>
            </div>
            <Button
                sx={{ backgroundColor: "#d9daee", color: "#4d4e9e", textTransform: "none", ":hover": { backgroundColor: "white" },width:"100px" }}
                size="large">
                <span className={css.btnText}>Log in</span>
            </Button>
        </div>
    )
}

export default NavBar