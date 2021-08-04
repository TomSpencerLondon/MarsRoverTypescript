import Rover from "../src/Rover";
const rover = new Rover();

describe("Rover should", () => {
  test("return current coordinates", () => {
    expect(rover.execute("")).toEqual("0:0:N");
  });

  test.each([
    ["R", "0:0:E"],
    ["RR", "0:0:S"],
    ["RRR", "0:0:W"],
  ])("rotate right", (command: string, result: string) => {
    expect(rover.execute(command)).toEqual(result);
  });
});
