import GeneralPresenter from '../src/presenter/general-presenter';
import { tripInfoContainer, filterListContainer, contentContainer } from './elements';
import GeneralModel from './model/general-model';

const generalModel = new GeneralModel();

const generalPresenter = new GeneralPresenter(
  {
    tripInfoContainer,
    filterListContainer,
    contentContainer,
    generalModel
  });

generalPresenter.init();
