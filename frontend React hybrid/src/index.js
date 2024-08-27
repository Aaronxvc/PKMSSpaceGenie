//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import KnowledgeHolderList from './KnowledgeHolderList';
import './styles.css';

// Header component
function Header() {
    return (
        <header>
            <h1>GEN-I-E</h1>
        </header>
    );
}

// SearchBar component
function SearchBar(props) {
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={props.onSearchChange}
        />
    );
}

// ResultsContainer component
function ResultsContainer(props) {
    return (
        <div>
            {props.results.map((result, index) => (
                <div key={index}>{result}</div>
            ))}
        </div>
    );
}

// Main App component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            holders: [], // Initialize holders
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleSearchChange(event) {
        const query = event.target.value;
        this.setState({
            query: query,
            results: this.getResults(query),
        });
    }

    getResults(query) {
        const sampleData = [
            'Document 1',
            'Document 2',
            'Code Snippet 1',
            'Research Paper 3',
        ];
        return sampleData.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    }

    handleDelete(index) {
        const holders = [...this.state.holders];
        holders.splice(index, 1);
        this.setState({ holders });
    }

    handleEdit(index) {
        console.log('Edit functionality triggered for index:', index);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <nav>
                        <Link to="/create">Create Knowledge Holder</Link>
                        <Link to="/view">View Knowledge Holders</Link>
                    </nav>
                    <Routes>
                        <Route path="/view" element={
                            <KnowledgeHolderList
                                holders={this.state.holders}
                                onDelete={this.handleDelete}
                                onEdit={this.handleEdit}
                            />
                        } />
                        <Route path="/create" element={
                            <div>
                                <h2>Create Knowledge Holder</h2>
                                {/* Placeholder for Create Knowledge Holder functionality */}
                            </div>
                        } />
                        <Route path="/" element={
                            <div>
                                <SearchBar onSearchChange={this.handleSearchChange} />
                                <ResultsContainer results={this.state.results} />
                            </div>
                        } />
                    </Routes>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



