import { Component, OnInit } from "@angular/core";
import { Player } from "../models/player";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
  public isPlayer1turn: boolean;
  public currentPlayer: Player;

  public values: any[] = [];
  public colors = ["red", "yellow", "green", "brown", "blue", "pink", "black"];

  public numRedsLeft: number;
  public maxPoints: number;

  public history = [];

  player1: Player = {
    id: 1,
    score: 0,
    name: ""
  };

  player2: Player = {
    id: 2,
    score: 0,
    name: ""
  };

  constructor() {}

  ngOnInit() {
    this.isPlayer1turn = true;
    this.currentPlayer = this.player1;
    this.numRedsLeft = 15;
    this.maxPoints = this.calculateMaxPoints(this.numRedsLeft);
    this.setUp();
  }

  calculateMaxPoints(numRedsLeft) {
    return numRedsLeft * 8 + 27;
  }

  togglePlayer() {
    // ending players turn
    this.isPlayer1turn = !this.isPlayer1turn;
    this.currentPlayer = this.isPlayer1turn ? this.player1 : this.player2;
  }

  addScore(value) {
    if (value === 1) {
      this.numRedsLeft -= 1;
    }
    if (value > 0) {
      this.currentPlayer.score += value;
      this.history.push(value);
    } else {
      this.currentPlayer.score += value;
      if (value === 1) {
        this.numRedsLeft += 1;
      }
    }
    this.maxPoints = this.calculateMaxPoints(this.numRedsLeft);
    console.log(this.history);
  }

  undoTurn() {
    var current = this.history.splice(this.history.length - 1, 1);
    // subtract score (handled in addscore function)
    this.addScore(-current);
    console.log(this.history);
  }

  resetGame() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.numRedsLeft = 15;
    this.maxPoints = this.calculateMaxPoints(this.numRedsLeft);
  }

  setUp() {
    for (let i = 0; i < 7; i++) {
      this.values.push([i + 1, this.colors[i]]);
      console.log(this.values[i]);
    }
  }
}
