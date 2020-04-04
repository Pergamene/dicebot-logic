import DiceParcerInterface from './DiceParserInterface';
import RollCalculatorInterface from './RollCalculatorInterface';

import DiceParser from './DiceParser';
import RollCalculator from './RollCalculator';

class DiceBot {
  parser: DiceParcerInterface;
  calculator: RollCalculatorInterface;

  constructor() {
    this.parser = DiceParser;
    this.calculator = RollCalculator;
  }

  rollDice(roll: string): JSON {
    const report = this.parser.parseRoll(roll);
    const result = this.calculator.calculateRoll(report);
    return result;
  }
}

export default new DiceBot();
