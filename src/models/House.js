import { Schema } from "mongoose";



export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, required: true, min: 0, max: 30 },
        bathrooms: { type: Number, required: true, min: 0, max: 25 },
        levels: { type: Number, required: true, min: 1, max: 4 },
        price: { type: Number, required: true, min: 0, max: 1000000000 },
        imgUrl: { type: String, required: true, minLength: 0, maxLength: 500 },
        description: { type: String, minLength: 0, maxLength: 500 },
        year: { type: Number, min: 1000, max: 2024 },
        creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
    }, {
    timestamps: true, toJSON: { virtuals: true }
}
)