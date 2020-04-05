import RollReportInterface from './RollReportInterface';
import RollResultInterface from './RollResultInterface';

interface RollCalculatorInterface {
  calculateRoll(report: RollReportInterface): RollResultInterface;
}

export default RollCalculatorInterface;
