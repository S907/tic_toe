import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// class Square extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       value:null,

//     };
//   }

//   render() {
//     return (

//       <div

//       className="square"
//       style={{backgroundColor: "lightblue"}}

//        onClick={()=>this.props.onClick()}

//       //  let ele= document.getElementsByClassName('square');
//       //  console.log(ele);
//       >

//         {this.props.value}

//       </div>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (this.state.xIsNext) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }

    //Keep check in if/else use as normal if/else

    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    // let status = 'Next Player:'
    // if(this.state.xIsNext){
    //   status +='X'
    // }else{
    //   status += 'O'
    // };

    let winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player";
      if (this.state.xIsNext) {
        status += "X";
      } else {
        status += "O";
      }
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  renderBoard(i) {
    return <Board value={i} />;
  }

  render() {
    return (
      <div>
        <div className="section-top">

        <section>
          
        </section>

        </div>
      
        
        <div className="game">
          <div className="game-board">{this.renderBoard(1)}</div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
