document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar'); // Reference to the search input
    const resultsContainer = document.getElementById('results-container'); // Reference to the results container

    // Sample data for search functionality
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
            resultsContainer.appendChild(div);
        });
    }

    // Event listener for search bar input
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value; // Get the search query
        updateResults(query); // Update results based on the query
    });
});
