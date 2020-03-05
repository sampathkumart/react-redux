import React from "react";
import { connect } from "react-redux";

const SongList = props => {
  return props.songs.map((song, index) => <div key={index}>{song.title}</div>);
};

const mapStateToProps = state => ({
  songs: state.songs
});
export default connect(mapStateToProps)(SongList);
