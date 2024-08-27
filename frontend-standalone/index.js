// index.js
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar'); // Reference to the search input
    const resultsContainer = document.getElementById('results-container'); // Reference to the results container

       // Example of where to integrate backend API call for fetching data
    // Fetch the data from the backend API
    // fetch('YOUR_API_ENDPOINT')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Set sampleData to the fetched data
    //         sampleData = data;
    //     });

    // Sample data for search functionality (replace with data from the API)
    const sampleData = [
        'Document 1',
        'Document 2',
        'Code Snippet 1',
        'Research Paper 3',
    ];

    // Function to update search results
    function updateResults(query) {
        resultsContainer.innerHTML = ''; // Clear previous results
        // Filter data based on search query
        const results = sampleData.filter(item => 
            item.toLowerCase().includes(query.toLowerCase())
        );
        // Display results
        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = result;

            // Add Edit and Delete buttons
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit-button';
            editButton.onclick = () => editKnowledgeHolder(result);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = () => deleteKnowledgeHolder(result);

            div.appendChild(editButton);
            div.appendChild(deleteButton);
            resultsContainer.appendChild(div);
        });
    }

    // Event listener for search bar input
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value; // Get the search query
        updateResults(query); // Update results based on the query
    });

    // Function to handle editing a knowledge holder
    function editKnowledgeHolder(item) {
        // Redirect to the edit page with the item ID or name as a query parameter
        window.location.href = `edit-knowledge-holder.html?name=${encodeURIComponent(item)}`;
    }

    // Function to handle deleting a knowledge holder
    function deleteKnowledgeHolder(item) {
        if (confirm(`Are you sure you want to delete ${item}?`)) {
            // Handle the delete operation here
            alert(`${item} deleted.`); // You would typically make an API call here
        }
    }
});
