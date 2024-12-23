import faker from 'faker';

const generateRandomData = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
    };
};

export const attendeesInformation = generateRandomData();
