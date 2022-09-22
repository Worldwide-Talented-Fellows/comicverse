import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this character.'],
            unique: true,
            minlength: [3, 'Should be more than 3 letters'],
            // validate: {
            //     validator: (val) =>
            //         validator.isAlpha(val, ['en-US'], { ignore: ' ' }),
            //     message: 'A tour must only  contain characters',
            // },
        },
        description: {
            type: String,
            required: [
                true,
                'Please provide a description for this character.',
            ],
        },
        author: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'Please provide an author for this character.'],
        },
        powers: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Power',
        },
        stories: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Story',
        },
    },
    {
        /* Timestamps will automatically add createdAt and updatedAt fields to the documents. */
        timestamps: true,
    }
);

export default mongoose.models.Character ||
    mongoose.model('Character', CharacterSchema);
