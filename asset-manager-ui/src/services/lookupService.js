import _ from 'lodash';

import betaGroups from '../data/grid/assetAllocationCategoriesBetaGroup.json';
import goalOriented from '../data/grid/assetAllocationCategoriesGoalOriented.json';
import ldi from '../data/grid/assetAllocationCategoriesLDI.json';
import modelingBenchmarks from '../data/grid/assetAllocationModelingBenchmarks.json';
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
  const getAssetAllocationCategoriesFromBetaGroups = () => {
    return new Promise((resolve, reject) => {
      resolve(betaGroups);
    });
  };

  /**
   * Retrieves all asset categories belonging to Goal Oriented lens.
   * 
   * @return A promise that resolves all categories from Goal Oriented
   */
  const getAssetAllocationCategoriesFromGoalOriented = () => {
    return new Promise((resolve, reject) => {
      resolve(goalOriented);
    });
  };

  /**
   * Retrieves all asset categories belonging to LDI lens.
   * 
   * @return A Promise that resolves all categories from LDI
   */
  const getAssetAllocationCategoriesFromLDI = () => {
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
   * Retrieves all asset allocation modeling benchmarks.
   * 
   * @return A promise that resolves all asset allocation modeling benchmarks
   */
  const getAllAssetAllocationModelingBenchmarks = () => {
    return new Promise((resolve, reject) => {
      resolve(modelingBenchmarks);
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
    getAssetAllocationCategoriesFromBetaGroups,
    getAssetAllocationCategoriesFromGoalOriented,
    getAssetAllocationCategoriesFromLDI,
    getAllAssetCategories,
    getAllAssetAllocationModelingBenchmarks,
    getPlanAnalysisLens,
  };
};

export default lookupService;
