// view-knowledge-holders.js
document.addEventListener('DOMContentLoaded', () => {
    // Reference to the container where knowledge holders will be listed
    const knowledgeHolderList = document.getElementById('knowledge-holder-list');

    // Fetch the data from the backend API when the page loads
    let sampleHolders = []; // Initialize an empty array to store the fetched knowledge holders
    fetch('http://127.0.0.1:5000/api/data') // Replace with your backend API endpoint
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            sampleHolders = data.message.split(','); // Store the fetched data in the sampleHolders array
            populateKnowledgeHolderList(); // Call the function to display the fetched data
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log any errors that occur during the fetch
        });

    // Function to populate the list of knowledge holders
    function populateKnowledgeHolderList() {
        sampleHolders.forEach(holder => {
            const div = document.createElement('div'); // Create a new div element for each holder
            div.textContent = holder; // Set the text content of the div to the holder's name

            // Create an Edit button for each holder
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit'; // Set the text of the button to 'Edit'
            editButton.className = 'edit-button'; // Assign a class to the button for styling
            editButton.onclick = () => editKnowledgeHolder(holder); // Attach a click event to edit the knowledge holder

            // Create a Delete button for each holder
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'; // Set the text of the button to 'Delete'
            deleteButton.className = 'delete-button'; // Assign a class to the button for styling
            deleteButton.onclick = () => deleteKnowledgeHolder(holder); // Attach a click event to delete the knowledge holder

            // Append the buttons to the div
            div.appendChild(editButton);
            div.appendChild(deleteButton);

            // Append the div to the knowledge holder list container
            knowledgeHolderList.appendChild(div);
        });
    }

    // Function to handle editing a knowledge holder
    function editKnowledgeHolder(holder) {
        // Redirect to the edit page with the holder's name as a query parameter
        window.location.href = `edit-knowledge-holder.html?name=${encodeURIComponent(holder)}`;
    }

    // Function to handle deleting a knowledge holder
    function deleteKnowledgeHolder(holder) {
        // Confirm with the user before deleting
        if (confirm(`Are you sure you want to delete ${holder}?`)) {
            // Handle the delete operation here (e.g., make an API call to delete the holder)
            alert(`${holder} deleted.`); // Show a message confirming deletion
        }
    }
});
