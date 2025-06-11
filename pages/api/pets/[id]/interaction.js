import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

const characterNeedMultipliers = {
  balanced: { hunger: 1, energy: 1, entertainment: 1 },
  playful: { hunger: 1, energy: 1, entertainment: 3 },
  relaxed: { hunger: 1, energy: 3, entertainment: 1 },
  gourmet: { hunger: 3, energy: 1, entertainment: 1 },
};

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const pet = await Pet.findById(id);
      if (!pet) {
        return response.status(404).json({ message: "Pet not found" });
      }

      const character = pet.details.character || "balanced";
      const multipliers =
        characterNeedMultipliers[character] ||
        characterNeedMultipliers["balanced"];


      const hunger = Math.max(
        0,
        Math.min(
          100,
          100 -
            Math.trunc(
              ((Date.now() - pet.needs.lastFed) / 60000) * multipliers.hunger
            )
        )
      );
      const energy = Math.max(
        0,
        Math.min(
          100,
          100 -
            Math.trunc(
              ((Date.now() - pet.needs.lastSlept) / 60000) * multipliers.energy
            )
        )
      );
      const entertainment = Math.max(
        0,
        Math.min(
          100,
          100 -
            Math.trunc(
              ((Date.now() - pet.needs.lastPlayed) / 60000) *
                multipliers.entertainment
            )
        )
      );

      const interactionPet = {
        name: pet.details.name,
        appearance: pet.appearance,
        hunger,
        energy,
        entertainment,
        mood: (hunger + energy + entertainment) / 3,
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
