import { expect, Page } from "playwright/test";

class myEventsPage {
    /**
     * @param {Page} page
     */
    constructor(page) {
        this.page = page;
        //Locators
        this.firstEvent = page.locator("(//td[@id='col-1'])[1]");
    }

    //Methods
    async openFirsEvent() {
        await this.firstEvent.click();
    }

}

export default myEventsPage