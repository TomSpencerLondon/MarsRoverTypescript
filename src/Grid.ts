import Coordinate from "./Coordinate";
import { Direction } from "./Direction";

export default class Grid {
  private coordinate: Coordinate;

  constructor(coordinate: Coordinate) {
    this.coordinate = coordinate;
  }

  move(direction: Direction) {
    switch (direction) {
      case Direction.North:
        this.coordinate = new Coordinate(this.getX(), this.goNorth());
        break;
      case Direction.East:
        this.coordinate = new Coordinate(this.goEast(), this.getY());
        break;
      case Direction.South:
        this.coordinate = new Coordinate(this.getX(), this.goSouth());
        break;
      case Direction.West:
        this.coordinate = new Coordinate(this.goWest(), this.getY());
        break;
    }
  }

  getX(): number {
    return this.coordinate.getX();
  }

  getY(): number {
    return this.coordinate.getY();
  }

  private goNorth(): number {
    if (this.getY() === 9) {
      return 1;
    }
    return this.getY() + 1;
  }

  private goEast(): number {
    if (this.getX() === 9) {
      return 1;
    }
    return this.getX() + 1;
  }

  private goSouth() {
    if (this.getY() === 0) {
      return 9;
    }
    return this.getY() - 1;
  }

  private goWest(): number {
    if (this.getX() === 0) {
      return 9;
    }
    return this.getX() - 1;
  }
}
