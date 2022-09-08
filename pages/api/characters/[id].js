import dbConnect from "../../../server/lib/dbConnect";
import CharacterModel from "../../../server/models/Character";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const character = await CharacterModel.findById(id);
        return res.json(character);
      } catch (error) {
        return res
          .status(404)
          .json({ errorMessage: "No character with such id" });
      }

    case "PUT":
      try {
        const updatedFields = req.body;
        const updatedCharacter = await CharacterModel.findByIdAndUpdate(
          id,
          updatedFields,
          { new: true, runValidators: true }
        );
        return res.json(updatedCharacter);
      } catch (error) {
        return res.status(404).json({ errorMessage: error.message });
      }

    case "DELETE":
      try {
        const deletedCharacter = await CharacterModel.findByIdAndDelete(id);

        return res.status(202);
      } catch (error) {
        return res.status(404).json({ errorMessage: error.message });
      }

    default:
      res.status(405).json({
        errorMessage: `No such method for this url: ${req.url}.`,
      });
      break;
  }
}
