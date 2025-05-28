import dbConnect from "@/db/connect";
import Pet from "@/db/models/Pet";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const pets = await Pet.find();
    response.status(200).json(pets);
    return;
  }
  response.status(405).json({ status: "Method not found" });
}
