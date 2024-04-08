import HRMLoginPage from "../PageObjectModule/HRMlogin"
import HRMLogoutPage from "../PageObjectModule/HRMLogout"
describe('verify the orangeHRM login with input data', () => {

    before('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    it('Verify with incorrect Credentials', () => {

        cy.fixture("multidata").then((data) => {
            data.forEach((userData) => {
                var ln = new HRMLoginPage();
                var lo=new HRMLogoutPage();
                ln.setUserName(userData.username)
                ln.setPassword(userData.password)
                cy.screenshot("loginPage")
                ln.setClickSubmit()
                cy.screenshot("loginPage")

                if (userData.username === "Admin" && userData.password === "admin123") {
                    ln.setHomePageText(userData.title)
                    lo.setclickProfile();
                    lo.setclickLogout();
                }
                else {
                    ln.setErrorMsg(userData.error);
                }
            })
        })
    })
})