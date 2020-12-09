import episodes from "../../../../data/matlock/matlockepisodes.json";

export default (req, res) => {
	const id = parseInt(req.query.id);

	const shows = episodes.filter(episode => episode.season === id);

	return res.status(200).json(shows);
};
