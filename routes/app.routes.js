const route = require('express').Router();
const appController = require('../controllers/app.controller');

route.get('/', appController.welcome);
route.get('/about-us', appController.about);

// for show form
route.get('/form', appController.submitForm);

// for show form data and submit data
route.post('/submit-form', appController.showFormData);

// for show all data
route.get('/list', appController.getData);

// for edit data and show single data
route.get('/edit-employee/:id', appController.editData);

// for update data
route.post('/update-form', appController.updateData);

// for delete data
route.get('/delete-employee/:id', appController.deleteData);

module.exports = route;