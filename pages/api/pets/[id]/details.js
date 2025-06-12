import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        return response.status(404).json({ message: "Pet not found" });
      }

      const now = Date.now();
      const birthDate = new Date(pet.details.birthTime).getTime();
      const msPerDay = 1000 * 60 * 60 * 24;
      const ageInDays = Math.floor((now - birthDate) / msPerDay);
      const calculatedAge = Math.floor(ageInDays / 3);

      const detailsPet = {
        ...pet.toObject(),
        details: {
          ...pet.details.toObject(),
          age: calculatedAge,
        },
      };

      delete detailsPet.details.birthTime;

      return response.status(200).json(detailsPet);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error loading pet", error });
    }
  }

  if (request.method === "DELETE") {
    try {
      const deletedPet = await Pet.findByIdAndDelete(id);
      if (!deletedPet) {
        return response.status(404).json({ message: "Pet not found" });
      }
      return response
        .status(200)
        .json({ message: "Your pet was successfully deleted" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error deleting pet", error });
    }
  }

  if (request.method === "PUT") {
    const petData = request.body;
    await Pet.findByIdAndUpdate(id, petData);
    response.status(200).json({ status: "Pet successfully updated" });
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
