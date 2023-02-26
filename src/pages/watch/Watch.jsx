import { ArrowBack } from "@mui/icons-material";
import "./watch.scss";

function Watch() {
	return (
		<div className="watch">
			<div className="back">
				<ArrowBack />
				Home
			</div>
			<video
				className="video" autoPlay progress controls
				src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			/>
		</div>
	);
}

export default Watch;
