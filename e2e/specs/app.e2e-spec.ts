import { HomePage } from '../page-objects/app.po';

describe('workspace-project App', () => {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
        page.navigateTo();
    });

    it('should display project name', () => {
        expect(page.getTitleText()).toEqual('YouTube');
    });
});
