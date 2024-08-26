// MonacoEditor.js
class MonacoEditor extends React.Component {
    componentDidMount() {
        window.require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' }});

        window.require(['vs/editor/editor.main'], () => {
            this.editor = monaco.editor.create(this.refs.editor, {
                value: this.props.code || '',
                language: this.props.language || 'javascript',
                theme: 'vs-dark',
                automaticLayout: true
            });
        });
    }

    render() {
        return React.createElement('div', {
            ref: 'editor',
            style: { height: '400px', border: '1px solid #ccc' }
        });
    }
}

// Export the component
export default MonacoEditor;
