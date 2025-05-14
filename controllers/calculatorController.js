// controllers/calculatorController.js

exports.add = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.status(200).json({ result: sum });
  };
  
  exports.subtract = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const difference = num1 - num2;
    res.status(200).json({ result: difference });
  };
  
  exports.multiply = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const product = num1 * num2;
    res.status(200).json({ result: product });
  };
  
  exports.divide = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
  
    if (num2 === 0) {
      res.status(400).json({ error: "Cannot divide by zero" });
    } else {
      const quotient = num1 / num2;
      res.status(200).json({ result: quotient });
    }
  };
  