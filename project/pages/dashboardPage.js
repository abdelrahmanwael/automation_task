import { expect, Page } from "playwright/test";

class dashboardPage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        //Locators
        this.planningTab = page.locator("//span[text()='Planning']");
        this.packagesOption = page.locator("//p[text()='Packages']");
        this.registrationTab = page.locator("//span[text()='Registration']");
        this.attendeesOption = page.locator("//p[text()='Attendees']");
    }

    //Methods
    async openPlanningTab() {
        await expect(this.planningTab).toBeVisible();
        await this.planningTab.click();
    }
    async openPackagesOption() {
        await expect(this.packagesOption).toBeVisible();
        await this.packagesOption.click();
    }
    async openRegistrationTab() {
        await expect(this.registrationTab).toBeVisible();
        await this.registrationTab.click();
    }
    async openAttendeesOption() {
        await expect(this.attendeesOption).toBeVisible();
        await this.attendeesOption.click();
    }

}

export default dashboardPage