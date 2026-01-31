import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }  // createdAt, updatedAt  (automaically added by mongoose)
);

const Note = mongoose.model('Note', NoteSchema);

export default Note;