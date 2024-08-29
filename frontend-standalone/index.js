//index.js
document.addEventListener('DOMContentLoaded', () => {
    // Reference to the search input element
    const searchBar = document.getElementById('search-bar'); 

    // Reference to the container where search results will be displayed
    const resultsContainer = document.getElementById('results-container'); 

    // Fetch the data from the backend API when the page loads
    let sampleData = []; // Initialize an empty array to store the fetched data
    fetch('http://127.0.0.1:5000/api/data') // Replace with your backend API endpoint
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            sampleData = data.message.split(','); // Store the fetched data in the sampleData array
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log any errors that occur during the fetch
        });

    // Function to update the search results based on the user's query
    function updateResults(query) {
        resultsContainer.innerHTML = ''; // Clear any previous search results

        // Filter the fetched data to match the search query
        const results = sampleData.filter(item => 
            item.toLowerCase().includes(query.toLowerCase())
        );

        // Display each matching result in the results container
        results.forEach(result => {
            const div = document.createElement('div'); // Create a new div element for each result
            div.textContent = result; // Set the text content of the div to the result

            // Create an Edit button for each result
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit'; // Set the text of the button to 'Edit'
            editButton.className = 'edit-button'; // Assign a class to the button for styling
            editButton.onclick = () => editKnowledgeHolder(result); // Attach a click event to edit the knowledge holder

            // Create a Delete button for each result
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'; // Set the text of the button to 'Delete'
            deleteButton.className = 'delete-button'; // Assign a class to the button for styling
            deleteButton.onclick = () => deleteKnowledgeHolder(result); // Attach a click event to delete the knowledge holder

            // Append the buttons to the div
            div.appendChild(editButton);
            div.appendChild(deleteButton);

            // Append the div to the results container
            resultsContainer.appendChild(div);
        });
    }

    // Event listener to handle input in the search bar
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value; // Get the current value of the search bar
        updateResults(query); // Call the updateResults function with the user's query
    });

    // Function to handle editing a knowledge holder
    function editKnowledgeHolder(item) {
        // Redirect to the edit page with the item name as a query parameter
        window.location.href = `edit-knowledge-holder.html?name=${encodeURIComponent(item)}`;
    }

    // Function to handle deleting a knowledge holder
    function deleteKnowledgeHolder(item) {
        // Confirm with the user before deleting
        if (confirm(`Are you sure you want to delete ${item}?`)) {
            // Handle the delete operation here (e.g., make an API call to delete the item)
            alert(`${item} deleted.`); // Show a message confirming deletion
        }
    }
});
