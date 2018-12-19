import React from 'react';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Button } from 'semantic-ui-react';

class Blogs extends React.Component {
    state = { showForm: false };
    
    toggleForm = () => this.setState({ showForm: !this.state.showForm });

    blogs = () => {
        let { blogs } = this.props;
        return blogs.map( blog =>
            <Card key={ blog.id }>
                <Card.Content>
                    <Card.Header>{blog.name}</Card.Header>
                    <Card.Meta>
                        <span>
                            { blog.author }
                        </span>
                    </Card.Meta>
                    <Card.Description>{ blog.body }</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/blogs/${blog.id}`}>
                        View Blog
                    </Link>
                </Card.Content>
            </Card>
        )//end of return
    };//end of blogs

    render() {
        const { showForm } = this.state;
        return (
            <Container>
                <Header as="h3" textAlign="center">Blogs</Header>
                <Button onClick={this.toggleForm}>
                    { showForm ? 'Cancel' : 'Create a new blog' }
                </Button>
                { showForm ?
                    <BlogForm closeForm={this.toggleForm} />
                    :
                    <Card.Group itemsPerRow={3}>
                        { this.blogs() }
                    </Card.Group>
                }
            </Container>
        )//end of return
    };//end of render
};//end of class Blogs

const mapStateToProps = (state) => {
    return { blogs: state.blogs };
};//end of mapStateToProps

export default connect(mapStateToProps)(Blogs);