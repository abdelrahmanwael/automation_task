import { expect, Page } from "playwright/test";

class attendeesPage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        //Locators
        this.allUsersBtn = page.locator("//p[text()='All Users']");
        this.addUserBtn = page.locator("//span[text()='Add User']");
        this.firstNameTxtField = page.locator("//input[@id='firstName']");
        this.lastNameTxtField = page.locator("//input[@id='lastName']");
        this.emailTxtField = page.locator("//input[@id='email']");
        this.userNameTxtField = page.locator("//input[@id='username']");
        this.createUserBtn = page.locator("//button[text()='Create']");
        this.tripsTab = page.locator("//p[text()='Trip Info']");
        this.addTripBtn = page.locator("//p[text()='Add Trip']");
        this.PackagesSelector = page.locator("#entity");
        this.createTripBtn = page.locator("//button[text()='Create']");


    }

    //Methods
    async openAllUsersPage() {
        await expect(this.allUsersBtn).toBeVisible();
        await this.allUsersBtn.click();
    }
    async addNewUser(firstName, lastName, email, username) {
        await expect(this.addUserBtn).toBeVisible();
        await this.addUserBtn.click();
        await expect(this.firstNameTxtField).toBeVisible();
        await this.firstNameTxtField.fill(firstName);
        await this.lastNameTxtField.fill(lastName);
        await this.emailTxtField.fill(email);
        await this.userNameTxtField.fill(username);
        await this.createUserBtn.click();
    }
    async addTrip() {
        await expect(this.tripsTab).toBeVisible();
        await this.tripsTab.click();
        await this.addTripBtn.click();
        await this.PackagesSelector.selectOption({ index: 1 });
        await this.createTripBtn.click();
    }

}

export default attendeesPage