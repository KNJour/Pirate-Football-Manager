
const PirateController = require("../controllers/pirates.controller")

module.exports = app => {
    //CREATE 
    app.post("/api/pirates/create", PirateController.createPirate);

    //READ

    app.get("/api/pirates", PirateController.findAllPirates);

    app.get("/api/pirates/:_id", PirateController.findOnePirate);
        
    //UPDATE
    app.put("/api/pirates/update/:_id", PirateController.updatePirate);

    //DESTROY
    app.delete("/api/pirates/delete/:_id", PirateController.deleteOnePirate);


 }