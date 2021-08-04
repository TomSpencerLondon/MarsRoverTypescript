import Rover from "../src/Rover";
import Grid from "../src/Grid";
import Coordinate from "../src/Coordinate";

describe("Rover should", () => {
  let rover: Rover;

  beforeEach(() => {
    const coordinate: Coordinate = new Coordinate(0, 0);
    const grid: Grid = new Grid(coordinate);
    rover = new Rover(grid);
  });

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
    ["RM", "1:0:E"],
    ["RMMMM", "4:0:E"],
    ["RMMMMMMMMMM", "1:0:E"],
    ["RRM", "0:9:S"],
    ["RRMMMMMM", "0:4:S"],
    ["RRRM", "9:0:W"],
    ["RRRRM", "0:1:N"],
  ])(`input command of %p returns %p`, (command: string, result: string) => {
    expect(rover.execute(command)).toEqual(result);
  });
});
