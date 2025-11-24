from models import db, Usuario, Personaje, Planeta, Vehiculo, Favorito
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL', 'sqlite:///starwars.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Importar DB y modelos desde el módulo central `models.py`

db.init_app(app)
CORS(app, resources={r"/*": {"origins": "*"}})

# Endpoints People (usando modelo `Personaje`)


@app.route('/people', methods=['GET'])
def get_all_people():
    people = Personaje.query.all()
    return jsonify([person.serialize() for person in people]), 200


@app.route('/people/<int:people_id>', methods=['GET'])
def get_people(people_id):
    person = Personaje.query.get(people_id)
    if person is None:
        return jsonify({"error": "People not found"}), 404
    return jsonify(person.serialize()), 200

# Endpoints Planets (usando modelo `Planeta`)


@app.route('/planets', methods=['GET'])
def get_all_planets():
    planets = Planeta.query.all()
    return jsonify([planet.serialize() for planet in planets]), 200


@app.route('/planets/<int:planet_id>', methods=['GET'])
def get_planet(planet_id):
    planet = Planeta.query.get(planet_id)
    if planet is None:
        return jsonify({"error": "Planet not found"}), 404
    return jsonify(planet.serialize()), 200

# Endpoints Vehicles (usando modelo `Vehiculo`)


@app.route('/vehicles', methods=['GET'])
def get_all_vehicles():
    vehicles = Vehiculo.query.all()
    return jsonify([vehicle.serialize() for vehicle in vehicles]), 200


@app.route('/vehicles/<int:vehicle_id>', methods=['GET'])
def get_vehicle(vehicle_id):
    vehicle = Vehiculo.query.get(vehicle_id)
    if vehicle is None:
        return jsonify({"error": "Vehicle not found"}), 404
    return jsonify(vehicle.serialize()), 200

# Endpoints Users (usando modelo `Usuario` y `Favorito`)


@app.route('/users', methods=['GET'])
def get_all_users():
    users = Usuario.query.all()
    return jsonify([user.serialize() for user in users]), 200


@app.route('/users/favorites', methods=['GET'])
def get_user_favorites():
    user_id = request.args.get('user_id', 1, type=int)

    user = Usuario.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    favorites = Favorito.query.filter_by(usuario_id=user_id).all()
    return jsonify([fav.serialize() for fav in favorites]), 200

# Endpoints Favoritos - Planet


@app.route('/favorite/planet/<int:planet_id>', methods=['POST'])
def add_favorite_planet(planet_id):
    user_id = request.json.get('user_id', 1) if request.json else 1

    planet = Planeta.query.get(planet_id)
    if planet is None:
        return jsonify({"error": "Planet not found"}), 404

    user = Usuario.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    existing = Favorito.query.filter_by(
        usuario_id=user_id, planeta_id=planet_id).first()
    if existing:
        return jsonify({"message": "Planet already in favorites"}), 200

    new_favorite = Favorito(usuario_id=user_id, planeta_id=planet_id)
    db.session.add(new_favorite)
    db.session.commit()

    return jsonify(new_favorite.serialize()), 201


@app.route('/favorite/planet/<int:planet_id>', methods=['DELETE'])
def delete_favorite_planet(planet_id):
    user_id = request.json.get('user_id', 1) if request.json else 1

    favorite = Favorito.query.filter_by(
        usuario_id=user_id, planeta_id=planet_id).first()
    if favorite is None:
        return jsonify({"error": "Favorite not found"}), 404

    db.session.delete(favorite)
    db.session.commit()

    return jsonify({"message": "Favorite planet deleted successfully"}), 200

# Endpoints Favoritos - People (usando `Personaje`)


@app.route('/favorite/people/<int:people_id>', methods=['POST'])
def add_favorite_people(people_id):
    user_id = request.json.get('user_id', 1) if request.json else 1

    person = Personaje.query.get(people_id)
    if person is None:
        return jsonify({"error": "People not found"}), 404

    user = Usuario.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    existing = Favorito.query.filter_by(
        usuario_id=user_id, personaje_id=people_id).first()
    if existing:
        return jsonify({"message": "People already in favorites"}), 200

    new_favorite = Favorito(usuario_id=user_id, personaje_id=people_id)
    db.session.add(new_favorite)
    db.session.commit()

    return jsonify(new_favorite.serialize()), 201


@app.route('/favorite/people/<int:people_id>', methods=['DELETE'])
def delete_favorite_people(people_id):
    user_id = request.json.get('user_id', 1) if request.json else 1

    favorite = Favorito.query.filter_by(
        usuario_id=user_id, personaje_id=people_id).first()
    if favorite is None:
        return jsonify({"error": "Favorite not found"}), 404

    db.session.delete(favorite)
    db.session.commit()

    return jsonify({"message": "Favorite people deleted successfully"}), 200

# Endpoints Favoritos - Vehicle (usando `Vehiculo`)


@app.route('/favorite/vehicle/<int:vehicle_id>', methods=['POST'])
def add_favorite_vehicle(vehicle_id):
    user_id = request.json.get('user_id', 1) if request.json else 1

    vehicle = Vehiculo.query.get(vehicle_id)
    if vehicle is None:
        return jsonify({"error": "Vehicle not found"}), 404

    user = Usuario.query.get(user_id)
    if user is None:
        return jsonify({"error": "User not found"}), 404

    existing = Favorito.query.filter_by(
        usuario_id=user_id, vehiculo_id=vehicle_id).first()
    if existing:
        return jsonify({"message": "Vehicle already in favorites"}), 200

    new_favorite = Favorito(usuario_id=user_id, vehiculo_id=vehicle_id)
    db.session.add(new_favorite)
    db.session.commit()

    return jsonify(new_favorite.serialize()), 201


@app.route('/favorite/vehicle/<int:vehicle_id>', methods=['DELETE'])
def delete_favorite_vehicle(vehicle_id):
    user_id = request.json.get('user_id', 1) if request.json else 1

    favorite = Favorito.query.filter_by(
        usuario_id=user_id, vehiculo_id=vehicle_id).first()
    if favorite is None:
        return jsonify({"error": "Favorite not found"}), 404

    db.session.delete(favorite)
    db.session.commit()

    return jsonify({"message": "Favorite vehicle deleted successfully"}), 200

# Inicialización de la base de datos


@app.route('/init-db', methods=['POST'])
def init_database():
    db.create_all()

    if Usuario.query.count() == 0:
        user1 = Usuario(email="user@example.com",
                        password="123456", nombre="testuser")
        db.session.add(user1)

    if Personaje.query.count() == 0:
        luke = Personaje(nombre="Luke Skywalker", especie="Human",
                         descripcion="Hero of the Rebellion")
        leia = Personaje(nombre="Leia Organa", especie="Human",
                         descripcion="Princess and leader")
        db.session.add(luke)
        db.session.add(leia)

    if Planeta.query.count() == 0:
        tatooine = Planeta(nombre="Tatooine", clima="arid", poblacion="200000",
                           periodo_orbital="304", periodo_rotacional="23", diametro="10465")
        alderaan = Planeta(nombre="Alderaan", clima="temperate", poblacion="2000000000",
                           periodo_orbital="364", periodo_rotacional="24", diametro="12500")
        db.session.add(tatooine)
        db.session.add(alderaan)

    if Vehiculo.query.count() == 0:
        speeder = Vehiculo(nombre="Snowspeeder", tipo="volador",
                           descripcion="t-47 airspeeder")
        walker = Vehiculo(nombre="AT-AT", tipo="terrestre",
                          descripcion="All Terrain Armored Transport")
        db.session.add(speeder)
        db.session.add(walker)

    db.session.commit()
    return jsonify({"message": "Database initialized successfully"}), 201


@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Star Wars API",
        "endpoints": {
            "GET /people": "List all people",
            "GET /people/<id>": "Get one person",
            "GET /planets": "List all planets",
            "GET /planets/<id>": "Get one planet",
            "GET /vehicles": "List all vehicles",
            "GET /vehicles/<id>": "Get one vehicle",
            "GET /users": "List all users",
            "GET /users/favorites?user_id=<id>": "Get user favorites",
            "POST /favorite/planet/<id>": "Add favorite planet",
            "POST /favorite/people/<id>": "Add favorite people",
            "POST /favorite/vehicle/<id>": "Add favorite vehicle",
            "DELETE /favorite/planet/<id>": "Remove favorite planet",
            "DELETE /favorite/people/<id>": "Remove favorite people",
            "DELETE /favorite/vehicle/<id>": "Remove favorite vehicle",
            "POST /init-db": "Initialize database with sample data"
        }
    }), 200


if __name__ == '__main__':
    with app.app_context():
        try:
            # Intentar crear todas las tablas
            db.create_all()
            print("✅ Tablas creadas exitosamente")

            # Verificar si hay datos
            if Usuario.query.count() == 0:
                print(
                    "⚠️ Base de datos vacía. Usa POST /init-db para añadir datos de ejemplo")
        except Exception as e:
            print(f"⚠️ Error al crear tablas: {e}")

    app.run(debug=True, host='0.0.0.0', port=5000)
