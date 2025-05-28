import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
  id: { type: Number, required: true },
  appearance: {
    colors: [String, String, String],
    height: Number,
    width: Number,
    shape: Number,
    borderColor: String,
    borderStrength: Number,
    borderStyle: String,
  },
  details: {
    name: String,
    age: Number,
    character: String,
    description: String,
  },
  needs: {
    hunger: Number,
    energy: Number,
    entertainment: Number,
  },
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
