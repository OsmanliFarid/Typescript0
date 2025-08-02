import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema(
  {
    text: String,
    checkbox: Boolean,
  },
  {
    versionKey: false,
  }
);

export const TodoModel = models.todo || model("todo", TodoSchema);
