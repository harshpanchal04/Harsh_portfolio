import React from "react";
import "./Tile.css";
import Icon from "@mdi/react";

function Tile({header, img, text1, text2, text3, text4, text5, position, image, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11}) {

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];
    const hasIcons = icons.some(icon => icon);
    return (
        <div className={`tile ${position}`}>
            <div className="parent">
                <img src={img} alt="tile-img" className={` img ${image}`}/>
            </div>
            <div className="textParent">
                {header ? <h2>{header}</h2> : ""}
                {hasIcons && (
                    <div className="icons">
                        {icon1 && <Icon path={icon1} size={3} />}
                        {icon2 && <Icon path={icon2} size={3} />}
                        {icon3 && <Icon path={icon3} size={3} />}
                        {icon4 && <Icon path={icon4} size={3} />}
                        {icon5 && <Icon path={icon5} size={3} />}
                        {icon6 && <Icon path={icon6} size={3} />}
                        {icon7 && <Icon path={icon7} size={3} />}
                    </div>
                )}
                <div className="text">
                {text1}
                <br></br>
                {text2}
                <br></br>
                {text3}
                <div className="icons">
                    {icon8 && <Icon path={icon8} size={3} />}
                    {icon9 && <Icon path={icon9} size={3} />}
                    {icon10 && <Icon path={icon10} size={3} />}
                    {icon11 && <Icon path={icon11} size={3} />}
                </div>
                <div class="container-resume">{text4 ? <a class = "resume" href="https://drive.google.com/file/d/1VNSzLnfynGa084mFzbhKu3x0jpCZdPcy/view" target="blank">Check My Resume</a> : ""} </div>
            </div>
            </div>
        </div>
    )
}

export default Tile;