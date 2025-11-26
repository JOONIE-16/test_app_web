from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/mensaje')
def mensaje():
    return jsonify({'texto': 'API is running'})

if __name__ == '__main__':
    app.run(debug=True)

# Configuración de la base de datos

