import GeneralPresenter from '../src/presenter/general-presenter';

const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');

const generalPresenter = new GeneralPresenter(
  {
    pageHeaderContainer: pageHeaderElement,
    pageMainContainer: pageMainElement
  });

generalPresenter.init();
