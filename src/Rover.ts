import { Direction } from "./Direction";
import Controller from "./Controller";

export default class Rover {
  private controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  execute(command: string): string {
    const position = "0:0";
    let direction = Direction.North;
    const commands = command.split("");

    for (let i = 0; i < commands.length; i++) {
      direction = this.controller.rotate(commands[i], direction);
    }

    return `${position}:${direction}`;
  }
}
