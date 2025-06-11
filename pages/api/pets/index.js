import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const pets = await Pet.find().lean();
      const listPet = pets.map((pet) => ({
        name: pet.details.name,
        appearance: pet.appearance,
        mood:
          (100 -
            Math.trunc((Date.now() - pet.needs.lastFed) / 60000) +
            (100 - Math.trunc((Date.now() - pet.needs.lastSlept) / 60000)) +
            100 -
            Math.trunc((Date.now() - pet.needs.lastPlayed) / 60000)) /
          3,
        _id: pet._id,
      }));
      response.status(200).json(listPet);
    } catch (error) {
      response.status(500).json({ message: "Error fetching pets", error });
    }
    return;
  }

  if (request.method === "POST") {
    const petData = request.body;
    await Pet.create(petData);
    response.status(201).json({ status: "Pet created" });
    return;
  }

  response.status(405).json({ status: "Method not found" });
}
