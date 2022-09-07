import React from 'react'
import css from './footer.module.css'
import TextField from '@mui/material/TextField';

const Footer = () => {
    return (
        <div className={css.div}>
            <div className={css.col}>
                <p className={css.title}>aircalling</p>
                <p className={css.text}>Aircalling you can access anywhere easily</p>
            </div>
            <div className={css.col}>
                <p className={css.title}>Product</p>
                <a href="null" className={css.text2}>Features</a>
                <a href="null" className={css.text2}>Services</a>
                <a href="null" className={css.text2}>On-Call</a>
                <a href="null" className={css.text2}>Integrations</a>
                <a href="null" className={css.text2}>Reports</a>
            </div>
            <div className={css.col}>
                <p className={css.title}>Integrations</p>
                <a href="null" className={css.text2}>Features</a>
                <a href="null" className={css.text2}>Services</a>
                <a href="null" className={css.text2}>On-Call</a>
                <a href="null" className={css.text2}>Integrations</a>
                <a href="null" className={css.text2}>Reports</a>
            </div>
            <div className={css.col}>
                <p className={css.title}>Resources</p>
                <a href="null" className={css.text2}>Features</a>
                <a href="null" className={css.text2}>Services</a>
                <a href="null" className={css.text2}>On-Call</a>
                <a href="null" className={css.text2}>Integrations</a>
                <a href="null" className={css.text2}>Reports</a>
            </div>
            <div className={css.col}>
                <p className={css.title}>Newsletter</p>
                <p className={css.text}>Subscribe to get updates</p>
                <TextField
                    className={css.tField}
                    placeholder='Type your email ...'
                    sx={{ input: { color: "white", fontSize: "10px" },
                        width: "100%",
                        backgroundColor: "#5051a4",
                        borderRadius: "5px",
                        margin: "20px 0px",
                        "::placeholder": { color: "white", opacity: "70%" } }}
                />
            </div>
        </div>
    )
}

export default Footer