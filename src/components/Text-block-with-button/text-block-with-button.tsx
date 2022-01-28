import React from "react";
import s from "./text-block-with-button.module.css"

const TextBlockWithButton = (props: any) => {
    return <div className={s.textBlockWithButton}>
        <h1 className={s.header}>{props.h}<span style={{color: props.color}}>{props.highlighted}</span></h1>
        <p className={s.p}>{props.textblock}</p>
        <a href={""} className={"button"}>{props.buttontext}</a>
    </div>
}

export default TextBlockWithButton