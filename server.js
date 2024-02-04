const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 2000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/metroHarmony', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seatSchema = new mongoose.Schema({
  coachNumber: String,
  seatNumber: String,
  seatStatus: String,
  seatVacantAt: String,
});

const Seat = mongoose.model('Seat', seatSchema);


// Fetching all seats
app.get('/api/seats', async (req, res) => {
  try {
    const seats = await Seat.find();
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Updating a seat
app.post('/api/seats', async (req, res) => {
  try {
    const { coachNumber, seatNumber, seatStatus, seatVacantAt } = req.body;

    const existingSeat = await Seat.findOne({ coachNumber, seatNumber });

    if (existingSeat) {
      // Updating existing seat
      existingSeat.seatStatus = seatStatus;
      existingSeat.seatVacantAt = seatVacantAt || 'NA';
      await existingSeat.save();
    } else {
      // Creating a new seat
      await Seat.create({
        coachNumber,
        seatNumber,
        seatStatus,
        seatVacantAt: seatVacantAt || 'NA',
      });
    }

    res.json({ message: 'Seat data updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
