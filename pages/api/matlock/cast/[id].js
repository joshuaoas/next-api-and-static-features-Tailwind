import characters from "../../../../data/matlock/matlockcast.json";

export default (req, res) => {
	const id = parseInt(req.query.id);
	const character = characters.filter(
		character => character.person.id === id
	)[0];
	return res.status(200).json(character);
};
