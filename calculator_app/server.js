const express = require('express');
const path = require('path');
const app = express();


const calculatorRoutes = require('./routes/calculatorRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', calculatorRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
