import LoginPage from  '../pageobjects/login.page';
import SignedInPage from '../pageobjects/signed-in.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        const name = process.env.EMAIL.slice(0, process.env.EMAIL.indexOf('@'));
        await LoginPage.open();
        await LoginPage.login(process.env.EMAIL, process.env.PASS);
        // await expect(await SignedInPage.getName()).toEqual(name);
    });
});

