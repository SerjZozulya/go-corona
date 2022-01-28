import getStarted from "../../img/image.svg";
import React from "react";
import playButton from "../../img/playbutton.svg"
import TextBlockWithButton from "../Text-block-with-button/text-block-with-button";
import s from "./get-started.module.css"

const Content = () => {
    return <main className={"main"}>
        <section>
            <div className={s.getStarted}>
                <TextBlockWithButton
                    h = {"Take care of yours family’s "}
                    highlighted = {"health."}
                    color = {"#4285F4"}
                    textblock = {"All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns."}
                    buttontext = {"get started"}
                />
                <div className={s.image_container}>
                    <img src={getStarted} alt={"Картинка"}/>
                </div>
            </div>
            <div className={s.watchVideo}>
                <img className={s.playButton} src={playButton} alt={"Play Button"}/>
                <div className={s.watchVideoTextBlock}>
                    <div className={s.staySafe}>Stay safe with GoCorona</div>
                    <div className={s.watchVideoText}>Watch Video</div>
                </div>
            </div>
        </section>
    </main>
}

export default Content