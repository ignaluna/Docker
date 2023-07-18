const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  rotation_period: { type: String },
  orbital_period: { type: String },
  diameter: { type: String },
  climate: { type: String },
  gravity: { type: String },
  terrain: { type: String },
  surface_water: { type: String },
  residents: [{ type: String, ref: "character" }],
  films: [{ type: String, ref: "film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.create = async function (body) {
  return await this.create(body);
};

planetSchema.statics.findById = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.delete = async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = planetSchema;
