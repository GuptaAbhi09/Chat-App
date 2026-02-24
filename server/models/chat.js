import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    members: [
        {
            type:Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    creator :{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    groupChat: {
        type:  Boolean,
        default: false,
    }
},{
    timestamps: true,
});

export default models.Chat || models.model('Chat', chatSchema);