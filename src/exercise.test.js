import { runCode } from "./exercise";

it("should return a obj with histogram", () => {
  const arrayA = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const rta = runCode(arrayA);
  expect(rta).toEqual({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  });
});

it("should return a obj with histogram and negative numbers", () => {
  const arrayA = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, -5, -5];
  const rta = runCode(arrayA);
  expect(rta).toEqual({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    "-5": 2,
  });
});

it("should return a obj with histogram", () => {
  const arrayA = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];
  const rta = runCode(arrayA);
  expect(rta).toEqual({
    1: 2,
    2: 2,
    4: 2,
    45: 1,
    "-3": 1,
    "-1": 2,
  });
});
