import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTweet } from '../actions/index';
import '../styles/Write.css';

class Write extends Component {
  render() {
    return (
      <div id="write" className="w3-panel w3-theme-l4 w3-center">
        <h1 className="w3-theme-l1">Write</h1>
        <form>
          <table id="writeForm" className="w3-table w3-section w3-text-theme">
            <tbody>
              <tr>
                <td>
                  Tweet:
                </td>
                <td>
                  <textarea ref={(c) => { this.content = c; }} className="w3-input w3-theme-l3" />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="button" value="Submit" className="w3-btn w3-green w3-margin-bottom" onClick={() => this.props.addTweet(this.content.value)} />
        </form>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addTweet }, dispatch);
}


export default connect(null, matchDispatchToProps)(Write);
