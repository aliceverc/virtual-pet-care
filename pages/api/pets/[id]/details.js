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
      return response.status(200).json(pet);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error Loading Pets", error });
    }
  }

  if (request.method === "DELETE") {
    const deletedPet = await Pet.findByIdAndDelete(id);
    if (!deletedPet) {
      return response.status(404).json({ message: "Pet not found" });
    }
    return response
      .status(200)
      .json({ message: "You're Pet is successfully deleted" });
  }

  if (request.method === "PUT") {
    const petData = request.body;
    await Pet.findByIdAndUpdate(id, petData);
    response.status(200).json({ status: "Pet successfully updated" });
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
