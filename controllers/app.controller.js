const EmpModel = require('../models/emp.model');

class AppController {

    async welcome(req, res) {
        try {
            // res.send('Hello World!');
            res.render('welcome',{
                title: 'Welcome to my website'
            })
        } catch (error) {
            throw error;
        }
    }

    async about(req, res) {
        try {
            // res.send('Hello World!');
            const employees = await EmpModel.find().sort({ createdAt: -1 });
            console.log(employees);
            res.render('about-us',{
                title: 'About Page',
                data: employees
            })
        } catch (error) {
            throw error;
        }
    }


    // for show form
    async submitForm(req, res) {
        try {
            // res.send('Hello World!');
            res.render('form',{
                title: 'Form Page'
            })
        } catch (error) {
            throw error;
        }
    }

    // for show form data and submit data
    async showFormData(req, res) {
        try {
            // res.send('Hello World!');
            
            const { firstName, lastName, email, password, city } = req.body;
            
            const fullName = firstName + ' ' + lastName;
            
            const saveData = await EmpModel.create({
                fullName,
                email,
                password,
                city
            });
            // console.log(saveData);

            res.redirect('/list');
        } catch (error) {
            throw error;
        }
    }


    // for show all data
    async getData(req, res) {
        try {
            // res.send('Hello World!');
            const employees = await EmpModel.find({
                isDeleted: false
            });
            // console.log(employees);
            res.render('employeelist',{
                title: 'List Page',
                employees
            })
        } catch (error) {
            throw error;
        }
    }


    // for edit data and show single data
    async editData(req, res) {
        try {
            // res.send('Hello World!');
            const employee = await EmpModel.findOne({ _id: req.params.id });
            // console.log(employee);
            // Split fullName into firstName and lastName
            let firstName = '';
            let lastName = '';
            if (employee.fullName) {
                const nameParts = employee.fullName.split(' ');
                firstName = nameParts[0];
                lastName = nameParts.slice(1).join(' ');
            }
            res.render('editemployeedetails',{
                title: 'Employee Details Page',
                employee,
                firstName,
                lastName
            })
        } catch (error) {
            throw error;
        }
    }


    // for update data
    async updateData(req, res) {
        try {
            // res.send('Hello World!');
            const { id, firstName, lastName, email, password, city } = req.body;
            const fullName = firstName + ' ' + lastName;
            const updateData = await EmpModel.findByIdAndUpdate(id, {
                fullName,
                email,
                password,
                city
            });
            // console.log(updateData);
            res.redirect('/list');
        } catch (error) {
            throw error;
        }
    }


    // for delete data
    async deleteData(req, res) {
        try {
            // res.send('Hello World!');
            const deleteData = await EmpModel.findByIdAndUpdate(req.params.id, {
                isDeleted: true
            });
            // console.log(deleteData);
            res.redirect('/list');
        } catch (error) {
            throw error;
        }
    }


}
module.exports = new AppController();