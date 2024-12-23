// @ts-check
const { test, expect } = require('@playwright/test');
import testUsers from "../testData/testUsers";
import { packagesInformation } from "../testData/packagesInformation";
import { attendeesInformation } from "../testData/attendeesInformation";
import loginPage from "../pages/loginPage"
import myEventsPage from "../pages/myEventsPage"
import dashboardPage from "../pages/dashboardPage"
import packagesPage from "../pages/packagesPage"
import attendeesPage from "../pages/attendeesPage"

let login_Page, myEvents_Page, dashboard_Page, packages_Page, attendees_Page;

test.beforeEach(async ({ page }) => {
  login_Page = new loginPage(page);
  myEvents_Page = new myEventsPage(page);
  dashboard_Page = new dashboardPage(page);
  packages_Page = new packagesPage(page);
  attendees_Page = new attendeesPage(page);

})

test("User login and adding an attendee with a trip", async () => {
  await login_Page.navigateToTestUrl();
  await login_Page.loginWithTestUser(testUsers.userName, testUsers.password);
  await myEvents_Page.openFirsEvent();
  await dashboard_Page.openPlanningTab();
  await dashboard_Page.openPackagesOption();
  await packages_Page.createNewPackage();
  await packages_Page.fillNewPackageDetails(packagesInformation.title, packagesInformation.priority, packagesInformation.featureName);
  await dashboard_Page.openRegistrationTab();
  await dashboard_Page.openAttendeesOption();
  await attendees_Page.openAllUsersPage();
  await attendees_Page.addNewUser(attendeesInformation.firstName, attendeesInformation.lastName, attendeesInformation.email, attendeesInformation.username);
  await attendees_Page.addTrip();
  await login_Page.Logout();
});
