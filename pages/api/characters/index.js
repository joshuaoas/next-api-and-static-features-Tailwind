import characters from "../../../data/matlock/characters";

export default (req, res) => {
	return res.status(200).json(characters);
};
