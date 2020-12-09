import episodes from "../../../../data/matlock/matlockepisodes.json";

export default (req, res) => {
	const id = parseInt(req.query.id);
	const episode = episodes.filter(episode => episode.id === id)[0];
	return res.status(200).json(episode);
};
