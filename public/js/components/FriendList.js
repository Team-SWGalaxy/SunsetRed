import React, {Component} from 'react';

export default class FriendList extends Component {
  render() {
    return <div className="friendBox">
      {this.props.friends.map((ele, index)=> {
        return <div key={index} className="box">
          <a>
            <img className="friendImg" src={`../../images/friends-pictures/${ele.imgName}`}/>
            <span className="www-A1">
              {ele.name}<br/>{ele.sex}<br/>{ele.city}<br/>{ele.hobby}
            </span>
          </a><br/>
          <button className="btn btn-primary">关注</button>
        </div>
      })}
    </div>
  }
}