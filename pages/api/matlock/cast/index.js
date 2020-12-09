import characters from "../../../../data/matlock/matlockcast.json";

export default (req, res) => {
	return res.status(200).json(characters);
};
