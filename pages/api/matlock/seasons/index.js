import seasons from "../../../../data/matlock/matlockseasons.json";

export default (req, res) => {
	return res.status(200).json(seasons);
};
