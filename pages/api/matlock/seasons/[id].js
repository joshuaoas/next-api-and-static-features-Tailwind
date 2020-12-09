import seasons from "../../../../data/matlock/matlockseasons.json";

export default (req, res) => {
	const id = parseInt(req.query.id);
	const season = seasons.filter(season => season.id === id)[0];
	return res.status(200).json(season);
};
