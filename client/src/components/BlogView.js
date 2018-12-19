import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { Header, Card, Button, Container, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { deleteBlog } from '../reducers/blogs';

class BlogView extends React.Component {
    state = { showForm: false };

    toggleForm = () => {
      this.setState( state => {
        return { showForm: !state.showForm };
      })
    };//end of toggleForm

    handleDelete = () => {
        const { blog, dispatch, history: { push } } = this.props;
        dispatch(deleteBlog(blog.id));
        push("/blogs");
    };//end of handleDelete

    render() {
        const { showForm } = this.state;
        const { blog = {} } = this.props;
    return (
        <Container>
            <Link to="/blogs">Back to Blogs</Link>
            <br />
            <br />
            <Button animated='fade' color='blue' onClick={this.toggleForm}>
                <Button.Content visible>{ showForm ? 'Cancel' : 'Edit' }</Button.Content>
                <Button.Content hidden> 
                    <Icon name='edit'/>
                </Button.Content>
            </Button>
            <Button animated='fade' color='red' onClick={this.handleDelete}>
                <Button.Content visible>Delete</Button.Content>
                <Button.Content hidden>
                    <Icon name='trash'/>
                </Button.Content>
            </Button>
            { showForm ?
            <BlogForm {...blog} closeForm={this.toggleForm} />
            :
            <div>
            <Header as="h3" textAlign="center">{blog.name}</Header>
                <Segment>
                    {blog.author}
                    <br />
                    <br />
                    {blog.body}
                </Segment>
            </div>
            }
        </Container>
        )//end of return
    };//end of render
};// end of class BlogView

const mapStateToProps = (store, props) => {
  return { blog: store.blogs.find( b => b.id === parseInt(props.match.params.id )) }
};//end of mapStateToProps

export default connect(mapStateToProps)(BlogView); 