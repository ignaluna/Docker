const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: { type: String },
  title: { type: String, required: true },
  opening_crawl: { type: String },
  director: { type: String },
  producer: { type: String },
  release_date: { type: String },
  characters: [{ type: String, ref: "character" }],
  planets: [{ type: String, ref: "planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("planets", ["_id", "name"])
    .populate("characters", ["_id", "name"]);
};

filmSchema.statics.create = async function (body) {
  return await this.create(body);
};

filmSchema.statics.findById = async function (id) {
  return await this.findById(id)
    .populate("planets", ["_id", "name"])
    .populate("characters", ["_id", "name"]);
};

filmSchema.statics.delete = async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = filmSchema;