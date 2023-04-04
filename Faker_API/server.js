const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;




const createUser = () => {
    
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    const User = createUser()
    
    // req.body will contain the form data from Postman or from React
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    
    // we always need to respond with something
    res.json(User);
    
    
});

app.get("/api/company/new", (req, res) => {
    const Company = createCompany()
    // req.body will contain the form data from Postman or from React
    // we can push it into the users array for now...
    // later on this will be inserted into a database

    // we always need to respond with something
    res.json(Company);
});

app.get("/api/Companies/new", (req, res) => {
    
    const Company = createCompany()
    const User = Washington02
    createUser()
    // req.body will contain the form data from Postman or from React
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    // we always need to respond with something
    res.json({User, Company});
});
app.listen( port, () => console.log(`I am listening on port: ${port}`));