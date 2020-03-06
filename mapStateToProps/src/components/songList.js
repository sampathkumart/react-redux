import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <div>super</div>;
  }
}

const mapStateToProps = state => {
  console.log(this.props);
  return { songs: state.songs };
};
export default connect(mapStateToProps)(SongList);
