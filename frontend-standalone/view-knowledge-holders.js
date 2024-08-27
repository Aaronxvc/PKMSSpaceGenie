// view-knowledge-holders.js
document.addEventListener('DOMContentLoaded', () => {
    const knowledgeHolderList = document.getElementById('knowledge-holder-list'); // Reference to the list container


   // Example of where to integrate backend API call for fetching data
    // Fetch the data from the backend API
    // fetch('YOUR_API_ENDPOINT')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Set sampleData to the fetched data
    //         sampleData = data;
    //     });

    // Sample data for search functionality (replace with data from the API)


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

        // Add Edit and Delete buttons
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.onclick = () => editKnowledgeHolder(holder);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => deleteKnowledgeHolder(holder);

        div.appendChild(editButton);
        div.appendChild(deleteButton);
        knowledgeHolderList.appendChild(div);
    });

    // Function to handle editing a knowledge holder
    function editKnowledgeHolder(holder) {
        // Redirect to the edit page with the holder ID or name as a query parameter
        window.location.href = `edit-knowledge-holder.html?name=${encodeURIComponent(holder)}`;
    }

    // Function to handle deleting a knowledge holder
    function deleteKnowledgeHolder(holder) {
        if (confirm(`Are you sure you want to delete ${holder}?`)) {
            // Handle the delete operation here
            alert(`${holder} deleted.`); // You would typically make an API call here
        }
    }
});
