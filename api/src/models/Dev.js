import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const DevSchema = new mongoose.Schema({
  name: String,
  githubUsername: String,
  bio: String,
  avatarUrl: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

export default mongoose.model('dev', DevSchema);
