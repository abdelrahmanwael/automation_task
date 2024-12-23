import faker from 'faker';

const generateRandomData = () => {
    return {
        title: faker.commerce.productName(),
        priority: faker.random.number({ min: 1, max: 100 }).toString(),
        featureName: faker.commerce.productAdjective(),
    };
};

export const packagesInformation = generateRandomData();
