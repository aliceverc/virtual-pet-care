import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
  id: Number,
  appearance: Object,
  details: Object,
  needs: Object,
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
