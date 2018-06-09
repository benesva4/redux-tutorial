import React, { Component } from 'react';
import { connect } from "react-redux"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <br />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            key={strResult.id}
                            onClick={this.props.onDeleteResults}>
                            {strResult.value}</li>)
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", value: 5 }),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),
        onStoreResults: () => dispatch({ type: "STORE_RESULTS" }),
        onDeleteResults: () => dispatch({ type: "DELETE_RESULTS" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);