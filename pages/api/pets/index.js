import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const pets = await Pet.find();
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ message: "Error fetching pets", error });
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
