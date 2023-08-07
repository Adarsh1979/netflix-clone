import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./listItem.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';


const API_URL = "http://localhost:5000/api"     // becoz I wasnt able to send movies data from prev page😞😞😞

function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        
        const getMovie = async () => {
            try {
                const res = await axios.get(`${API_URL}/movies/find/${item}`)
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovie();
    }, [item])
    
    const movieParam = encodeURIComponent(item);

    return (

        <Link to={`/watch?movie=${movieParam}`}>
            <div
                className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 5 }}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}>
                <img src={movie.img} alt={movie.title} />

                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.title}</span>
                                <span className="limit">{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

export default ListItem;
