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
      const interactionPet = {
        name: pet.details.name,
        appearance: pet.appearance,
        hunger: 100 - Math.trunc((Date.now() - pet.needs.lastFed) / 60000),
        energy: 100 - Math.trunc((Date.now() - pet.needs.lastSlept) / 60000),
        entertainment:
          100 - Math.trunc((Date.now() - pet.needs.lastPlayed) / 60000),
        mood:
          (100 -
            Math.trunc((Date.now() - pet.needs.lastFed) / 60000) +
            (100 - Math.trunc((Date.now() - pet.needs.lastSlept) / 60000)) +
            100 -
            Math.trunc((Date.now() - pet.needs.lastPlayed) / 60000)) /
          3,
      };

      return response.status(200).json(interactionPet);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error Loading Pets", error });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
