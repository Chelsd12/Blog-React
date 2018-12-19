import React from 'react';
import { connect } from 'react-redux'
import { updateBlog, addBlog } from '../reducers/blogs'
import { Form, Container } from 'semantic-ui-react';

class BlogForm extends React.Component {
    initialState = { name: "", body: "", author: ""};

    state = {...this.initialState};

    componentDidMount() {
        if (this.props.id) 
            this.setState({ ...this.props });
    };//end of componentDidMount

    handleSubmit = (e) => {
        e.preventDefault();
        const blog = { ...this.state };
        const { closeForm, dispatch } = this.props;
        const func = this.props.id ? updateBlog : addBlog;
        dispatch(func(blog));
        closeForm();
    };//end of handleSubmit

    handleChange = ({target: { name, value }}) => {
        this.setState({ [name]: value })
    };//end of handleChange

    render() {
        const { name, body, author } = this.props;
        return (
            <Container>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                    name="name" 
                    placeholder="Title"
                    label="Title"
                    required
                    value={name} 
                    onChange={this.handleChange} 
                    />
                    <Form.Input 
                    name="body"
                    placeholder="Body"
                    label="Body"
                    required 
                    value={body} 
                    onChange={this.handleChange} 
                    />
                    <Form.Input 
                    name="author"
                    placeholder="Author"
                    label="Author"
                    required 
                    value={author} 
                    onChange={this.handleChange} 
                    />
                    <Form.Button color="green">Submit</Form.Button>
                    </Form>
                </div>
            </Container>
        )//end of return
    };//end of render
};//end of class BlogForm

export default connect()(BlogForm);