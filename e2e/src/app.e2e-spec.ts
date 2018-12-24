import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display project name', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('YouTube');
    });
});
