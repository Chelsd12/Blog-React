import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Blogs from './Blogs';
import BlogView from './BlogView';
import { getBlogs } from '../reducers/blogs';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchBlogs extends React.Component {
    state = { loaded: false };

    componentDidMount() {
      this.props.dispatch(getBlogs(this.setLoaded));
    };//end of componentDidMount

    setLoaded = () => this.setState({ loaded: true });

    render() {
        const { loaded } = this.state;    
        if (loaded) {
            return (
                <div>
                    <Route exact path="/blogs" component={Blogs} />
                    <Route exact path="/blogs/:id" component={BlogView} />
                </div>
            )
        } else {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </Segment>
            )
        }
    }//end of render
};//end of class FetchBlogs

export default connect()(FetchBlogs);