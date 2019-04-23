// Action creator
export const selectSong = song => {
  debugger
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
//must have a type property here and optional payload and must export


// src index, inside provider to set state or create the store heading over to the reducer. the reducer then sets the list of songs and also handles actions. it is exported as songs and selectedsongs in combine reducers.
// then we head to app. we connect song list and song detail. in song list, we import connect and select song action. we export default connect at the bottom calling the mapstate to props function with the selectsong action which then calls the state from reducer and allows us to use it in the current file. in the button in song list,  we pass in onclick that calls this.props.selectsong(song) current song which then calls map state to props with action an argument being the slected song and the state refreshes
