import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, } from "@mui/icons-material";
import { useState } from "react";
import "./listItem.scss";

function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 5 }}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}>
            <img
                src="https://eatliveescape.com/wp-content/uploads/2022/06/img_4519.jpg"
                alt="stranger-things-img"></img>

            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 Hour 14 Mins</span>
                            <span className="limit">16+</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa, iste! Qui tenetur est, obcaecati nobis
                            magni labore
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ListItem;
