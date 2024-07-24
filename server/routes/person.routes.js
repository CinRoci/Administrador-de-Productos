const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    
    app.post('/api/product', PersonController.createProduct);
}
