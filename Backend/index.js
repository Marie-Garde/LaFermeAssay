const { db, port } = require("./conf.js");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there!");
});

//Get all Event
app.get("/evenements", (req, res) => {
    db.query("SELECT * from Evenements ORDER BY date", (err, results) => {
        if (err) {
            res.status(500).send("Error retrieving data");
        } else {
            res.status(200).json(results);
        }
    });
});

//Post a new Event
app.post("/evenements", (req, res) => {
    const {
        titre,
        date,
        heure,
        duree,
        description,
        nbPlaces,
        prerequis,
    } = req.body;
    db.query(
        "INSERT INTO Evenements(titre, date, heure, duree, description, nbPlaces, prerequis) VALUES(?, ?, ?, ?, ?, ?, ?)", [titre, date, heure, duree, description, nbPlaces, prerequis],
        (err, response) => {
            if (err) {
                res.status(500).send("Error saving a event");
                console.log(err);
            } else {
                res.status(200).send("Successfully saved !");
            }
        }
    );
});

//Delete an Event
app.delete("/evenements/:id", (req, res) => {
    const idEvenements = req.params.id;
    db.query(
        "DELETE FROM Evenements WHERE idEvenements = ?", [idEvenements],
        (err, results) => {
            if (err) {
                res.status(500).send("😱 Error deleting a doc");
                console.log(err);
            } else {
                res.status(200).send("🎉 Event deleted!");
            }
        }
    );
});

app.listen(port, () => {});