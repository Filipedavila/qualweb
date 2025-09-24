import type { QWElement } from '@qualweb/qw-element';
import { Test, Verdict } from '@qualweb/core/evaluation';

type ExecuteMethod = (element?: QWElement) => Promise<void>;

export function QWBrowserTest(
  _target: any,
  _propertyKey: string,
  descriptor: TypedPropertyDescriptor<ExecuteMethod>
) {
  if (!descriptor.value) return;


  descriptor.value = async function (this: any, element?: QWElement): Promise<void> {

    const test = new Test();

    if (!this.testResult) {
      test.verdict = Verdict.INAPPLICABLE;
      test.resultCode = "I1";
    } else {
      const outcome = this.testResult.result;

      if (outcome === "passed") {
        test.verdict = Verdict.PASSED;
        test.resultCode = "P1";
        if (element) test.addElement(element);
      } else if (outcome === "failed") {
        test.verdict = Verdict.FAILED;
        test.resultCode = "F1";
        if (element) test.addElement(element);
      } else if (outcome === "warning") {
        test.verdict = Verdict.WARNING;
        test.resultCode = "W1";
        if (element) test.addElement(element);
      }else{
        test.verdict = Verdict.INAPPLICABLE;
        test.resultCode = "I2";
      }
    }

    if (typeof this.addTestResult === "function") {
      this.addTestResult(test);
    }


  };
}