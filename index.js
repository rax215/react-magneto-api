const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const port = 9001;
const dataRoutes = require('./routes/dataRoutes');
app.use(dataRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
