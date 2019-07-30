import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import Search from '../components/Search.js';
import VideoList from '../components/VideoList.js';

// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={props.entry}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={props.entry}/>
//       </div>
//     </div>
//   </div>
// );


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  render() {
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.videos}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    </div>;
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;