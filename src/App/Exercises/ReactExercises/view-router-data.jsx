import { getParsedRouterDataList } from '../../router-data/parseRouterData';

// importujemy z konkretnego 'router-data.jsx' kolejne cwiczenia zwiazane z reactem - kolejne routy
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactEventsUseStateMetaData } from './ReactEventsUseState/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactIfStatementsMoreOrLessMetaData } from './ReactIfStatementsMoreOrLess/router-data';
import { RouteErrorPrototypeThis } from './TryCatchAndFinally/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { FormsMetaData } from './Forms/router-data';
// dodajemy nasz kolejny element META DATA do eksportu
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
  ReactIfStatementsMetaData,
  ReactIfStatementsMoreOrLessMetaData,
  RouteErrorPrototypeThis,
  ToDoWithServerMetaData,
  FormsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
