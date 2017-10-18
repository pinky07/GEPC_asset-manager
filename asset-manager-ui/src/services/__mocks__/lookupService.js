import { planAnalysisLens } from '../../tests/fixtures/grid';

/**
 * Looks up static data to be shown as listings. For example: data
 * that is shown in dropdowns.
 *
 * @author Francisco Zuñiga
 * @author Rubén Jiménez
 */
const lookupService = () => {
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
    getPlanAnalysisLens,
  };
};

export default lookupService;
