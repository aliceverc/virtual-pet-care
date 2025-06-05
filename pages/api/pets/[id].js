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
      return response.status(500).json({ message: "Error Loading Pets", error });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}