import { TaskA, TaskB } from '../src/lab1';

describe('TaskA', () => {
    it('should calculate the correct values for TaskA', () => {
      const testresultTaskA = TaskA(1.1, 0.09, 1.2, 2.2, 0.2);
      const trueresultTaskA = [
        -0.5527140818130227, 0.5357584954022472, 0.7876803233945551, 0.8841676026091737, 0.9309997512495364,
        0.9572340900142425,
      ];
      expect(testresultTaskA).toEqual(trueresultTaskA);
    });
  });
  
  describe('TaskB', () => {
    it('should calculate the correct values for TaskB', () => {
      const mySliceForTaskB = [1.21, 1.76, 2.53, 3.48, 4.52];
      const testresultTaskB = TaskB(mySliceForTaskB, 1.1, 0.09);
      const trueresultTaskB = [
        -0.4325793499470868, 0.8704142934030041, 0.9808944539200825, 1.0060147033160582, 1.0152114712907188,
      ];
      expect(testresultTaskB).toEqual(trueresultTaskB);
    });
  });
  