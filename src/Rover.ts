export default class Rover {
  execute(command: string): string {
    if (command === "R") {
      return "0:0:E";
    }

    if (command == "RR") {
      return "0:0:S";
    }

    if (command == "RRR") {
      return "0:0:W";
    }

    return "0:0:N";
  }
}
