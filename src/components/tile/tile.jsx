import React from 'react'
import css from './tile.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const Tile = ({ text, smallerText, cond, src, tCond }) => {
    return (
        <div className={tCond ? css.div2 : css.div}>
            {cond ?
                <>
                    <div className={css.colImg}>
                        <img className={css.img} src={src} alt="call"></img>
                    </div>
                    <div className={css.col}>
                        <p className={tCond ? css.title2 : css.title}>{text}</p>
                        {!tCond && <p className={css.smallerText}>{smallerText}</p>}
                        {tCond && <TextField
                            placeholder='Type your email ...'
                            sx={{ input: { color: "white" }, width: "100%", backgroundColor: "#5051a4", borderRadius: "5px", margin: "50px 0px", "::placeholder": { color: "white", opacity: "70%" } }}
                        />}
                        <Button
                            sx={{ backgroundColor: "#d9daee", color: "#4d4e9e", textTransform: "none", ":hover": { backgroundColor: "white" } }}
                            size="large">
                            <span className={css.btnText}>{tCond ? "Get Started" : "Learn more"}</span>
                        </Button>
                    </div>
                </>
                :
                <>
                    <div className={css.col}>
                        <p className={css.title}>{text}</p>
                        <p className={css.smallerText}>{smallerText}</p>
                        <Button
                            sx={{ backgroundColor: "#d9daee", color: "#4d4e9e", textTransform: "none", ":hover": { backgroundColor: "white" } }}
                            size="large">
                            <span className={css.btnText}>{tCond ? "Get Started" : "Learn more"}</span>
                        </Button>
                    </div>
                    <div className={css.colImg}>
                        <img className={css.img} src={src} alt="call"></img>
                    </div>
                </>
            }
        </div >
    )
}

export default Tile