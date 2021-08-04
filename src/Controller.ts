import { Direction } from "./Direction";
import { Command } from "./Command";

export default class Controller {
  rotate(command: string, direction: Direction): Direction {
    let result: Direction = Direction.North;
    switch (direction) {
      case Direction.North:
        result = command == Command.Left ? Direction.West : Direction.East;
        break;
      case Direction.East:
        result = command == Command.Left ? Direction.North : Direction.South;
        break;
      case Direction.South:
        result = command == Command.Left ? Direction.East : Direction.West;
        break;
      case Direction.West:
        result = command == Command.Left ? Direction.South : Direction.North;
        break;
    }

    return result;
  }
}
