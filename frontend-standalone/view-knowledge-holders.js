document.addEventListener('DOMContentLoaded', () => {
    const knowledgeHolderList = document.getElementById('knowledge-holder-list'); // Reference to the list container

    // Sample knowledge holders
    const sampleHolders = [
        'Knowledge Holder 1',
        'Knowledge Holder 2',
        'Knowledge Holder 3',
    ];

    // Populate the knowledge holder list
    sampleHolders.forEach(holder => {
        const div = document.createElement('div');
        div.textContent = holder;
        knowledgeHolderList.appendChild(div);
    });
});
