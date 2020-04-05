import RollResultInterface from './RollResultInterface';

class RollResult implements RollResultInterface {
  _result: JSON;
  
  get result(): JSON {
    return this._result;
  }

  set result(result: JSON) {
    this._result = result;
  }
}

export default new RollResult();
