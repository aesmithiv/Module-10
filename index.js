const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


const express = require('express');
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(express.json());
app.use(express.static('public'));
app.use('/calculator', calculatorRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
