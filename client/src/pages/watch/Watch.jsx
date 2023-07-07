import { ArrowBack } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation, Route, useRoutes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api"

function Watch() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const movieId = searchParams.get('movie');
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        try {
            const res = await axios.get(`${API_URL}/movies/find/${movieId}`)
            setMovie(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    getMovie();
    
	return (
		<div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBack />
                    Home
                </div>
            </Link>
			<video
				className="video" autoPlay progress controls
				src={movie.trailer}
			/>
		</div>
	);
}

export default Watch;
