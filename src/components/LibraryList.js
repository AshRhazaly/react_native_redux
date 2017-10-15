import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
