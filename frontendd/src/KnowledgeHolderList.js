// KnowledgeHolderList.js

import React from 'react';

// KnowledgeHolderItem Component: Represents a single Knowledge Holder item with edit and delete options
function KnowledgeHolderItem({ holder, onDelete, onEdit }) {
    return (
        <div className="knowledge-holder-item">
            <div className="knowledge-holder-content">
                <h5>{holder.title}</h5>
                <p>{holder.description}</p>
            </div>
            <div className="knowledge-holder-actions">
                <button className="btn btn-sm btn-warning" onClick={onEdit}>
                    Edit
                </button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                        if (window.confirm('Are you sure you want to delete this Knowledge Holder?')) {
                            onDelete();
                        }
                    }}
                >
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

// KnowledgeHolderList Component: Displays a list of Knowledge Holders
// KnowledgeHolderList Component
function KnowledgeHolderList({ holders, onDelete, onEdit }) {
    return React.createElement('div', null,
        holders.map((holder, index) =>
            React.createElement('div', { key: index, className: 'holder-item' },
                React.createElement('h3', null, holder.title),
                React.createElement('p', null, holder.description),
                React.createElement('button', {
                    onClick: () => {
                        if (window.confirm('Are you sure you want to delete this Knowledge Holder?')) {
                            onDelete(index);
                        }
                    }
                }, 'Delete'),
                React.createElement('button', { onClick: () => onEdit(index) }, 'Edit')
            )
        )
    );
}


export default KnowledgeHolderList;

