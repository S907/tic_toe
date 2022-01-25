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
  

 
  

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }



  // render function


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
      status = "Next player: ";
      if (this.state.xIsNext) {
        status += "X";
      } else {
        status += "O";
      }
    }

    return (
      <div>
        
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

  
  // This included the square states into the child board component

  // renderBoard(i) {
  //   return <Board value={i} />;
  // }


  // Board component into top level game component
  constructor(props){
    super(props);
    this.state={
      history: [{
        squares:Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  handleClick(i){
    const history = this.state.history;
    const current = history[history.length-1];
    const squares = current.squares.slice();

  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  square[i] = this.state.xisnext ? 'X' : 'O';
  this.setState({
    history : history.concat([{

      square: squares

    }]),


    xIsNext: !this.state.xIsNext,
  });
}
  
  

 


  render() {

    // to display most recent entry and display game's status

    const history = this.state.history;
    const current = history[history.length-1];
    const winner = calculateWinner(current.squares);

    let status;
    if(winner){
      status = 'Winner' + winner;
    }
    else{
      status = 'Next Player: ' + (this.state.xIsNext? 'X' : "O");
    }



    return (
      <div>
        <div className="section-top">

        <header className="main_header">
          <h1 className="header_content">Shall We Play the Game</h1>
        </header>

        </div>
      
        
        <div className="game">
          <div className="game-board">
            squares ={current.squares}
            onClick={(i) => this.handleClick(i)}
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
