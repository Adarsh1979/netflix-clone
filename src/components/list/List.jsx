import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"

function List() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideCount, setSlideCount] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        console.log("dist from viewport is: " + listRef.current.getBoundingClientRect().x);
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        setTimeout(() => {
            console.log(listRef.current.getBoundingClientRect().x);
        }, 2000)
        if (direction === "left" && slideCount > 0) {
            setSlideCount(slideCount - 1)
            listRef.current.style.transform = `translateX(${235 + distance}px)`
        }

        if (direction === "right" && slideCount < 5) {
            setSlideCount(slideCount + 1)
            listRef.current.style.transform = `translateX(${-235 + distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue To Watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className="sliderArrow left" onClick={() => handleClick("left")}
                    style={{ display: (!isMoved || slideCount <= 0) && "none" }} />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List