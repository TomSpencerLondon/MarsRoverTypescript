import Rover from "../src/Rover";
import Controller from "../src/Controller";

const controller: Controller = new Controller();
const rover: Rover = new Rover(controller);

describe("Rover should", () => {
  test("return current coordinates", () => {
    expect(rover.execute("")).toEqual("0:0:N");
  });

  test.each([
    ["R", "0:0:E"],
    ["RR", "0:0:S"],
    ["RRR", "0:0:W"],
    ["RRRR", "0:0:N"],
    ["L", "0:0:W"],
    ["LL", "0:0:S"],
    ["LLL", "0:0:E"],
    ["LLLL", "0:0:N"],
  ])(`input command of %p returns %p`, (command: string, result: string) => {
    expect(rover.execute(command)).toEqual(result);
  });
});
