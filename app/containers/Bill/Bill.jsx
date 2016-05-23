import React, { Component } from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
import { mixin } from 'core-decorators';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import getGithubInfo from '../../util/helper';

@mixin(ReactFireMixin)
class Bill extends Component {
  state = {
    notes: ['1', '2', '3'],
    bio: {
      name: 'guoyongfeng'
    },
    repos: ['a', 'b', 'c']
  }
  componentDidMount(){
    // 为了读写数据，我们首先创建一个firebase数据库的引用
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    // 调用child来往引用地址后面追加请求，获取数据
    var childRef = this.ref.child(this.props.params.keyword);
    // 将获取的数据转换成数组并且赋给this.state.notes
    this.bindAsArray(childRef, 'notes');

    getGithubInfo( this.props.params.keyword )
      .then( ( data ) => {
        // 测试一下传入用户名后返回的数据
        console.log( data );
        // 更新state数据
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      });
  }
  componentWillUnMount(){
    this.unbind('notes');
  }
  render(){
    return (
      <h1>dddd</h1>
    )
  }
}

export default Bill
