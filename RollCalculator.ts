import RollCalculatorInterface from './RollCalculatorInterface';

import RollReportInterface from './RollReportInterface';
import RollResultInterface from './RollResultInterface';

class RollCalculator implements RollCalculatorInterface {
  
  calculateRoll(rollData: RollReportInterface): RollResultInterface {
    
    return null;
  }
}

export default new RollCalculator();
