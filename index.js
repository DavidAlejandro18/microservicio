const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const loadDatabase = () => {
    try {
        const dataJSON = fs.readFileSync('./db.json', {
            encoding: 'utf8'
        });
        return JSON.parse(dataJSON);
    } catch (error) {
        console.log("Error al acceder a la DB:", error);
        
        return [];
    }
}

app.get("/api/cars", (req, res) => {
    const cars = loadDatabase();
    res.status(200).json(cars);
});

app.get("/api/cars/filter", (req, res) => {
    const cars = loadDatabase();
    const { marca, color, año, modelo } = req.query;

    let filteredCars = cars;

    filteredCars = marca ? filteredCars.filter(car => car.marca === marca.toLowerCase()) : filteredCars;
    filteredCars = color ? filteredCars.filter(car => car.color === color.toLowerCase()) : filteredCars;
    filteredCars = año ? filteredCars.filter(car => car.año === parseInt(año)) : filteredCars;
    filteredCars = modelo ? filteredCars.filter(car => car.modelo === modelo.toLowerCase()) : filteredCars;

    res.status(200).json(filteredCars);
});

app.get("/api/cars/:id", (req, res) => {
    const cars = loadDatabase();
    const carID = parseInt(req.params.id);
    const car = cars.find(car => car.id === carID);
    
    if(!car) {
        return res.status(404).json({error: "Auto no encontrado"});
    }
    
    res.status(200).json(car);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});