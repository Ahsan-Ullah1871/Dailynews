import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./News.css";

const Health = () => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=health&apiKey=59c03f67513c4764906f19aa8ed16616"
		)
			.then((response) => response.json())
			.then((data) => setNews(data.articles));
	}, []);

	console.log(news);
	return (
		<>
			<div className="d-flex flex-wrap  justify-content-center">
				{news.map((news) => (
					<NewsCard
						news={news}
						className="newscard"
					></NewsCard>
				))}
			</div>
		</>
	);
};

export default Health;
