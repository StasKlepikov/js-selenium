import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';


class SignedInPage extends Page {
 
    public async getName(): Promise <String> {

        return (await $('#userLoginBox .userbox-dd__user-card .userbox-dd__user-name').getText()).trim();
    }
}

export default new SignedInPage();
