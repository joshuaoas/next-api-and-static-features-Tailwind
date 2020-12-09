import info from "../../../data/matlock/matlockinfo.json";

export default (req, res) => {
	return res.status(200).json(info);
};
