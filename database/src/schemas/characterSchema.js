const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  height: { type: String },
  mass: { type: String },
  hair_color: { type: String },
  skin_color: { type: String },
  eye_color: { type: String },
  birth_year: { type: String },
  gender: { type: String },
  homeworld: { type: String, ref: "planet" },
  films: [{ type: String, ref: "film" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.create = async function (body) {
  return await this.create(body);
};

characterSchema.statics.findById = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.delete = async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = characterSchema;