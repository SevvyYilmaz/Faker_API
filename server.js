const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        id: faker.string.uuid()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        name: faker.company.companyName(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        },
        id: faker.string.uuid.number()
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json( newUser );
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json( newCompany );
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json( {user: newUser, company: newCompany} );
});


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );