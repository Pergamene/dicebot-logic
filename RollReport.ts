import RollReportInterface from './RollReportInterface';

class RollReport implements RollReportInterface {
  _report: JSON;

  get report(): JSON {
    return this.report;
  };

  set report(report: JSON) {
    this._report = report;
  }
}

export default new RollReport();
