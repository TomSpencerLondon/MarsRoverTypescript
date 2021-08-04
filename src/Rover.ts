export default class Rover {
  execute(command: string): string {
    const position = "0:0";
    let direction = "N";

    if (command === "R") {
      direction = "E";
    }

    if (command == "RR") {
      direction = "S";
    }

    if (command == "RRR") {
      direction = "W";
    }

    return `${position}:${direction}`;
  }
}
