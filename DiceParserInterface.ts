import RollReportInterface from './RollReportInterface';

interface DiceParserInterface {
  parseRoll(roll: string): RollReportInterface;
};

export default DiceParserInterface;
