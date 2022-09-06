import React from 'react'
import css from './intro.module.css'
import Button from '@mui/material/Button';

const Intro = ({src}) => {
  return (
    <div className={css.intro}>
        <div className={css.col}>
            <p className={css.title}>
                Adding Care<br/>through Voice<br/>Calls.
            </p>
            <p className={css.desc}>
                With aircalling getmore meetings without the pain of excel!<br/>
                No SIP or Softphone Required!
            </p>
            <Button
                sx={{ backgroundColor: "#d9daee", color: "#4d4e9e", textTransform: "none", ":hover": { backgroundColor: "white" },width:"130px" }}
                size="large">
                <span className={css.btnText}>Get started</span>
            </Button>
        </div>
        <div className={css.colImg}>
          <img className={css.img} src={src} alt="people  "></img>
        </div>
    </div>
  )
}

export default Intro