import { expect, Page } from "playwright/test";

class packagesPage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        //Locators
        this.newPackageBtn = page.locator("//span[text()='New Package']");
        this.packageTitleTxtField = page.locator("//input[@id='package_title']");
        this.priorityTxtField = page.locator("//input[@id='package_priority']");
        this.featureNameTxtField = page.locator("//input[@id='feature_name']");
        this.packageTypeDropdown = page.locator("#package_type");
        this.saveBtn = page.locator("//button[text()='Save']");
        this.successMsg = page.locator("//div[text()='Package created successfully.']");
    }

    //Methods
    async createNewPackage() {
        await expect(this.newPackageBtn).toBeVisible();
        await this.newPackageBtn.click();
    }
    async fillNewPackageDetails(packageTitle, priority, featureName) {
        await expect(this.packageTitleTxtField).toBeVisible();
        await this.packageTitleTxtField.fill(packageTitle);
        await this.priorityTxtField.fill(priority);
        await this.featureNameTxtField.fill(featureName);
        await this.packageTypeDropdown.selectOption({ label: 'Text Add' });
        await this.saveBtn.click();
        await expect(this.successMsg).toBeVisible();
    }

}

export default packagesPage