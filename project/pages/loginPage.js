import { expect, Page } from "playwright/test";
import testUrl from "../testData/testUrl";

class loginPage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        //Locators
        this.loginUserName = page.locator("//input[@id='username']");
        this.loginPassword = page.locator("//input[@id='password']");
        this.loginBtn = page.locator("//button[@type='submit']");
        this.skipBtn = page.locator("//button[@type='button']");
        this.profileIcon = page.locator("//div[@class='Dropdown_container__5LCLe h-[40px]']");
        this.logoutBtn = page.locator("//p[text()='Logout']");
    }

    //Methods
    async navigateToTestUrl() {
        await this.page.goto(testUrl.testEnvUrl);
    }

    async loginWithTestUser(UserName, password) {
        await expect(this.loginUserName).toBeVisible();
        await this.loginUserName.fill(UserName);
        await this.loginPassword.fill(password);
        await this.loginBtn.click();
        await this.skipBtn.click();
        await expect(this.profileIcon).toBeVisible();
    }

    async Logout() {
        await expect(this.profileIcon).toBeVisible();
        await this.profileIcon.click();
        await this.logoutBtn.click();
    }

}

export default loginPage