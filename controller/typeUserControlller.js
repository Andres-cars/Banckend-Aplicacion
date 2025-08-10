import { typeUserModel } from "../model/typeUserModel.js";

export const getTypeUsers = async (req, res) => {
  try {
    const types = await typeUserModel.findAll({ where: { state: true } });
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTypeUsers = async (req, res) => {
  try {
    const { type } = req.body;
    if (!type) {
      res.status(400).json({ message: "type is required" });
    }
    const types = await typeUserModel.create(req.body);
    res.status(201).json({ message: "create", types });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateTypeUsers = async (req, res) => {
  if (!req.body.type) {
    res.status(400).json({ message: "type is required" });
  }
  const type = await typeUserModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set(req.body);
    await type.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
export const deleteTypeUsers = async (req, res) => {
  const type = await typeUserModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set({ ...type, state: false });
    await type.save();
    res.status(200).json({ message: "delete" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};