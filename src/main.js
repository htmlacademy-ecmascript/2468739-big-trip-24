import GeneralPresenter from '../src/presenter/general-presenter';
import GeneralModel from './model/general-model';

const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');

const generalModel = new GeneralModel();

const generalPresenter = new GeneralPresenter(
  {
    pageHeaderContainer: pageHeaderElement,
    pageMainContainer: pageMainElement,
    generalModel
  });

generalPresenter.init();
