// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import MonacoEditor from './MonacoEditor.js'; // Import MonacoEditor
import KnowledgeHolderList from './KnowledgeHolderList.js'; // Import KnowledgeHolderList

// SearchBar Component: Allows users to search Knowledge Holders
function SearchBar(props) {
    return React.createElement('input', {
        type: 'text',
        placeholder: 'Search...',
        onChange: props.onSearchChange
    });
}

// ResultsContainer Component: Displays search results (not used here but can be useful for other components)
function ResultsContainer(props) {
    return React.createElement('div', null, 
        props.results.map((result, index) => {
            return React.createElement('div', { key: index }, result);
        })
    );
}

// CreateKnowledgeHolder Component: Page for creating new Knowledge Holders
function CreateKnowledgeHolder() {
    return React.createElement('div', { className: 'container' },
        React.createElement('h2', null, 'Create Knowledge Holder'),
        React.createElement(MonacoEditor, { language: 'javascript', code: '// Start typing your code here...' }),
        React.createElement('button', { className: 'btn btn-primary mt-3' }, 'Save Knowledge Holder')
    );
}

// ViewKnowledgeHolders Component: Displays all Knowledge Holders with search and filtering
function ViewKnowledgeHolders() {
    const [holders, setHolders] = React.useState([
        { title: 'Document 1', description: 'This is the first document.' },
        { title: 'Code Snippet 1', description: 'A useful code snippet.' },
        { title: 'Research Paper 3', description: 'Research on AI.' }
    ]);

    // Function to handle deletion of a Knowledge Holder
    const handleDelete = (index) => {
        const newHolders = holders.filter((_, i) => i !== index);
        setHolders(newHolders);
    };

    // Function to handle editing of a Knowledge Holder
    const handleEdit = (index) => {
        // Redirect to edit page or show edit form (this can be refined based on your routing setup)
        alert('Edit functionality to be implemented');
    };

    return React.createElement('div', { className: 'container' },
        React.createElement('h2', null, 'View Knowledge Holders'),
        React.createElement(SearchBar, {
            onSearchChange: (event) => {
                const query = event.target.value.toLowerCase();
                setHolders(prevHolders =>
                    prevHolders.filter(holder =>
                        holder.title.toLowerCase().includes(query)
                    )
                );
            }
        }),
        React.createElement(KnowledgeHolderList, {
            holders: holders,
            onDelete: handleDelete,
            onEdit: handleEdit
        })
    );
}

// Main App Component: Manages state and navigation
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            currentPage: 'home'  // Default page
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    // Handles search input changes
    handleSearchChange(event) {
        const query = event.target.value;
        this.setState({
            query: query,
            results: this.getResults(query)
        });
    }

    // Simulates search results (replace with API call if needed)
    getResults(query) {
        const sampleData = ['Document 1', 'Document 2', 'Code Snippet 1', 'Research Paper 3'];
        return sampleData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    }

    // Handles page navigation
    handleNavigation(page) {
        this.setState({ currentPage: page });
    }

    render() {
        let pageComponent;

        // Renders the appropriate page based on currentPage state
        switch(this.state.currentPage) {
            case 'create':
                pageComponent = React.createElement(CreateKnowledgeHolder);
                break;
            case 'view':
                pageComponent = React.createElement(ViewKnowledgeHolders);
                break;
            default:
                pageComponent = React.createElement('div', null,
                    React.createElement(SearchBar, { onSearchChange: this.handleSearchChange }),
                    React.createElement(ResultsContainer, { results: this.state.results })
                );
        }

        return React.createElement('div', null, 
            React.createElement('nav', null,
                React.createElement('button', { onClick: () => this.handleNavigation('create') }, 'Create Knowledge Holder'),
                React.createElement('button', { onClick: () => this.handleNavigation('view') }, 'View Knowledge Holders')
            ),
            pageComponent
        );
    }
}

// Render the App component into the root div
ReactDOM.render(React.createElement(App), document.getElementById('root'));



