import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const messagesSchema = new Schema({
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
        required: true,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        default: "",
    },
    attchemnets: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
},{
    timestamps: true,
});

export default models.Message || model('Message', messagesSchema);