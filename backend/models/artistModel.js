import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image1: { type: String, required: false },
  image2: { type: String, required: false },
  image3: { type: String, required: false },
  image4: { type: String, required: false },
});

const Artists = mongoose.model('artists', artistSchema);
export default Artists;
