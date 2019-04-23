import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};
//the initial state is here
//after action done, we see which action selected and spit out outcome
const selectedSongReducer = (selectedSong = null, action) => {
  debugger
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  //action.payload is the actions result or the song

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
//the change of state of here
