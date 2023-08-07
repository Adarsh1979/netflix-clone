import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export default function WidgetSm() {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getNewUsers = async () => {
			try {
				const res = await axios.get(`${API_URL}/users?new=true`, {
					headers: {
						Token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
					},
				});
				setNewUsers(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getNewUsers();
	}, []);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{newUsers.map((user) => (
					<li className="widgetSmListItem">
						<img
							src={user.profilePic || "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"}
							alt=""
							className="widgetSmImg"
						/>
						<div className="widgetSmUser">
							<span className="widgetSmUsername">{user.username}</span>
						</div>
						<button className="widgetSmButton">
							<Visibility className="widgetSmIcon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
