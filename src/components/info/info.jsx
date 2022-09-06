import React from 'react'
import css from './info.module.css'
import Avatar from '@mui/material/Avatar';
import person from '../svg/person.svg'
const Info = () => {
    return (
        <div className={css.div}>
            <p className={css.title}>What users say about aircalling</p>
            <p className={css.text}> All the users' reviews are displayed here so you can see and read</p>
            <div className={css.row}>
                <div className={css.col}>
                    <div className={css.tile}>
                        <p className={css.text}>This software has become a major asset on a daily basis in the organization of my telephone appointments</p>
                        <div className={css.row2}>
                            <Avatar src={person}></Avatar>
                            <p>Mitchell starc</p>
                        </div>
                    </div>
                    <div className={css.tile}>
                        <p className={css.text}>This software has become a major asset on a daily basis in the organization of my telephone appointments</p>
                        <div className={css.row2}>
                            <Avatar src={person}>asdasd</Avatar>
                            <p>fooManchi</p>
                        </div>
                    </div>
                </div>
                <div className={css.col}>
                    <div className={css.tile}>
                        <p className={css.text}>This software has become a major asset on a daily basis in the organization of my telephone appointments</p>
                        <div className={css.row2}>
                            <Avatar src={person}></Avatar>
                            <p>Yahiaa</p>
                        </div>
                    </div>
                    <div className={css.tile}>
                        <p className={css.text}>This software has become a major asset on a daily basis in the organization of my telephone appointments</p>
                        <div className={css.row2}>
                            <Avatar src={person}></Avatar>
                            <p>Kazemmmmm</p>
                        </div>
                    </div>
                </div>
                <div className={css.col}>
                    <div className={css.tile}>
                        <p className={css.text}>This software has become a major asset on a daily basis in the organization of my telephone appointments</p>
                        <div className={css.row2}>
                            <Avatar src={person}></Avatar>
                            <p>Shakiraaa</p>
                        </div>
                    </div>
                    <div className={css.tile}>
                        <p className={css.text}>This software has become a major asset on a daily basis in the organization of my telephone appointments</p>
                        <div className={css.row2}>
                            <Avatar src={person}></Avatar>
                            <p>Rachel Mcadams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info