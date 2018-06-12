import mongoose from 'mongoose';

const Subject = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  questions: [{
    type: mongoose.SchemaTypes.ObjectId, ref: 'Answer'
  }]
})

export default mongoose.model('Subject', Subject);
