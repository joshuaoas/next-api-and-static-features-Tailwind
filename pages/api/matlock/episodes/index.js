import episodes from "../../../../data/matlock/matlockepisodes.json";

export default (req, res) => {
	return res.status(200).json(episodes);
};
