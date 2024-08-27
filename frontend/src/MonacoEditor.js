// MonacoEditor.js

import * as monaco from 'monaco-editor';
import React, { useRef, useEffect } from 'react';

const MonacoEditor = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      monaco.editor.create(containerRef.current, {
        value: '// Your code here',
        language: 'javascript',
        theme: 'vs-dark', // Optional: Set a theme
      });
    }
  }, []);

  return <div ref={containerRef} style={{ height: '500px', width: '80%' }} />;
};

export default MonacoEditor;
