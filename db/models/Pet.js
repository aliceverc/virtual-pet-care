import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
  id: { type: Number, required: true },
  appearance: { type: Object },
  details: { type: Object },
  needs: { type: Object },
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
