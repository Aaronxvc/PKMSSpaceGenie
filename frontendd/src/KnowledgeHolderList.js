// KnowledgeHolderList.js

import React from 'react';

function KnowledgeHolderItem({ title, description, onDelete, onEdit }) {
    return (
        <div className="knowledge-holder-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

function KnowledgeHolderList({ holders, onDelete, onEdit }) {
    return (
        <div>
            {holders.map((holder, index) => (
                <KnowledgeHolderItem
                    key={index}
                    title={holder.title}
                    description={holder.description}
                    onDelete={() => onDelete(index)}
                    onEdit={() => onEdit(index)}
                />
            ))}
        </div>
    );
}

export default KnowledgeHolderList;
