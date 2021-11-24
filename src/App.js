import React, {useReducer} from 'react';
import reducer, {initialState} from "./reducers"

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber, changeOperation, clearDisplay, mAdd, mClr, mRec } from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const clicky = (num) => {
    dispatch(applyNumber(num))
  }
  const clickOp = (op) => {
    dispatch(changeOperation(op));
  }

  const clickClear = () => {
    dispatch(clearDisplay())
  }

  const clickMemAdd = () => {
    dispatch(mAdd())
  }
  const clickMemClear = () => {
    dispatch(mClr())
  }
  const clickMemRecall = () => {
    dispatch(mRec())
  }

  return (
    <div className="App">
      

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={clickMemAdd}/>
              <CalcButton value={"MR"} onClick={clickMemRecall}/>
              <CalcButton value={"MC"} onClick={clickMemClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => clicky(1)}/>
              <CalcButton value={2} onClick={() => clicky(2)}/>
              <CalcButton value={3} onClick={() => clicky(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => clicky(4)}/>
              <CalcButton value={5} onClick={() => clicky(5)}/>
              <CalcButton value={6} onClick={() => clicky(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => clicky(7)}/>
              <CalcButton value={8} onClick={() => clicky(8)}/>
              <CalcButton value={9} onClick={() => clicky(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => clickOp("+")}/>
              <CalcButton value={"*"} onClick={() => clickOp("*")}/>
              <CalcButton value={"-"} onClick={() => clickOp("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clickClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
