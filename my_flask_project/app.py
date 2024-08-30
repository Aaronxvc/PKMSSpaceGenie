from flask import Flask, jsonify, request
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)

# Database connection details
server = 'your_server'
database = 'your_database'
username = 'your_username'
password = 'your_password'
driver = '{ODBC Driver 17 for SQL Server}'

# Create a database connection
def connect_db():
    conn = pyodbc.connect(f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}')
    return conn

@app.route('/data', methods=['GET'])
def get_data():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM your_table")
    
    rows = cursor.fetchall()
    data = []
    for row in rows:
        data.append({
            'column1': row[0],
            'column2': row[1],
            # add more columns as needed
        })
    
    cursor.close()
    conn.close()
    return jsonify(data)

@app.route('/data', methods=['POST'])
def insert_data():
    conn = connect_db()
    cursor = conn.cursor()
    data = request.json
    cursor.execute("INSERT INTO your_table (column1, column2) VALUES (?, ?)", data['column1'], data['column2'])
    
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Data inserted successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)


