import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const requestSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
    }
},{
    timestamps: true,
});

export default models.Request || model("Request", requestSchema);