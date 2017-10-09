import assetAllocationCategories from '../data/assetAllocationCategories.json';

/**
 * This service retrieves the Asset Allocation Categories and Market 
 * Benchmark from the Backend.
 * 
 * @author Rubén Jiménez
 */
const assetAllocationCategoryService = () => {
  /**
   * Returns the list of Asset Allocation Categories.
   * 
   * @return List of Asset Allocation Categories
   */
  const getAssetAllocationCategories = () => {
    return new Promise((resolve, reject) => {
      resolve(assetAllocationCategories);
    });
  };

  /**
   * Returns the list of Asset Allocation Market Benchmarks for a given
   * Asset Allocation Category.
   * 
   * @param {string} assetAllocationCategory Name of the Asset Allocation Category to look up
   * @return List of Asset Allocation Market Benchmarks
   */
  const getAssetAllocationMarketBenchmark = assetAllocationCategoryName => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < assetAllocationCategories.length; ++i) {
        if (assetAllocationCategories[i].name === assetAllocationCategoryName) {
          resolve(assetAllocationCategories[i].assetAllocationMarketBenchmark);
        }
      }
      resolve(undefined);
    });
  };

  // Exposed functions
  return {
    getAssetAllocationCategories,
    getAssetAllocationMarketBenchmark,
  };
};

export default assetAllocationCategoryService;