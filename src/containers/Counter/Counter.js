import React, { Component } from 'react';
import { connect } from "react-redux"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from "../../store/actions"

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
                <button onClick={this.props.onStoreResults}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li
                            key={strResult.id}
                            onClick={() => this.props.onDeleteResults(strResult.id)}>
                            {`${strResult.id} ${strResult.value}`}</li>)
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actions.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actions.DECREMENT }),
        onAddCounter: () => dispatch({ type: actions.ADD, value: 5 }),
        onSubtractCounter: () => dispatch({ type: actions.SUBTRACT, value: 5 }),
        onStoreResults: () => dispatch({ type: actions.STORE_RESULT }),
        onDeleteResults: (id) => dispatch({ type: actions.DELETE_RESULT, resultElId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);