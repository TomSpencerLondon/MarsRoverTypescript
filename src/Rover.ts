import { Direction } from "./Direction";
import Controller from "./Controller";
import Grid from "./Grid";

export default class Rover {
  private controller: Controller;
  private grid: Grid;
  private direction: Direction;

  constructor(grid: Grid) {
    this.grid = grid;
    this.controller = new Controller();
    this.direction = Direction.North;
  }

  execute(command: string): string {
    const commands = command.split("");

    for (let i = 0; i < commands.length; i++) {
      const c = commands[i];
      if (this.move(c)) {
        this.grid.move(this.direction);
      } else if (this.rotate(c)) {
        this.direction = this.controller.rotate(c, this.direction);
      }
    }

    return `${this.grid.getX()}:${this.grid.getY()}:${this.direction}`;
  }

  private move(c: string) {
    return c === "M";
  }

  private rotate(c: string) {
    return c === "L" || c === "R";
  }
}
