import _ from 'lodash';

import betaGroups from '../data/grid/assetCategoriesBetaGroup.json';
import goalOriented from '../data/grid/assetCategoriesGoalOriented.json';
import ldi from '../data/grid/assetCategoriesLDI.json';
import planAnalysisLens from '../data/grid/planAnalysisLens.json';

/**
 * Looks up static data to be shown as listings. For example: data
 * that is shown in dropdowns.
 * 
 * @author Francisco Zuñiga
 * @author Rubén Jiménez
 */
const lookupService = () => {
  /**
   * Retrieves all asset categories belonging to Beta Groups lens.
   *
   * @return A promise that resolves all categories from Beta Groups
   */
  const getAssetCategoriesFromBetaGroups = () => {
    return new Promise((resolve, reject) => {
      resolve(betaGroups);
    });
  };

  /**
   * Retrieves all asset categories belonging to Goal Oriented lens.
   * 
   * @return A promise that resolves all categories from Goal Oriented
   */
  const getAssetCategoriesFromGoalOriented = () => {
    return new Promise((resolve, reject) => {
      resolve(goalOriented);
    });
  };

  /**
   * Retrieves all asset categories belonging to LDI lens.
   * 
   * @return A Promise that resolves all categories from LDI
   */
  const getAssetCategoriesFromLDI = () => {
    return new Promise((resolve, reject) => {
      resolve(ldi);
    });
  };

  /**
   * Retrieves all asset categories from any lens.
   * 
   * @return A Promise that resolves all asset categories
   */
  const getAllAssetCategories = () => {
    return new Promise((resolve, reject) => {
      const all = _.concat(betaGroups, goalOriented, ldi);
      resolve(all);
    });
  };

  /**
   * Returns all plan analysis lens.
   * 
   * @return A Promise that resolves all plan analysis lens 
   */
  const getPlanAnalysisLens = () => {
    return new Promise((resolve, reject) => {
      resolve(planAnalysisLens);
    });
  };

  /**
   * List of exported methods
   */
  return {
    getAssetCategoriesFromBetaGroups,
    getAssetCategoriesFromGoalOriented,
    getAssetCategoriesFromLDI,
    getAllAssetCategories,
    getPlanAnalysisLens,
  };
};

export default lookupService;
