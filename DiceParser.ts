import DiceParserInterface from './DiceParserInterface';
import RollReportInterface from './RollReportInterface';

class DiceParser implements DiceParserInterface {

  parseRoll(roll: string): RollReportInterface {

    return null;
  }
}

export default new DiceParser();
