import unittest
from src.models import db, Usuario, Planeta, Personaje, Vehiculo, Favorito
from flask import Flask

class TestStarWarsModels(unittest.TestCase):
    def setUp(self):
        self.app = Flask(__name__)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        db.init_app(self.app)
        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_usuario_planeta_personaje_vehiculo_favorito(self):
        with self.app.app_context():
            usuario = Usuario(email='test@test.com', password='1234', nombre='Luke', apellido='Skywalker')
            planeta = Planeta(nombre='Tatooine', clima='árido', poblacion='200000', descripcion='Planeta desértico')
            personaje = Personaje(nombre='Luke Skywalker', especie='Humano', planeta_origen=planeta, descripcion='Jedi')
            vehiculo = Vehiculo(nombre='X-Wing', tipo='volador', quien=personaje, descripcion='Caza estelar')
            favorito = Favorito(usuario=usuario, planeta=planeta, personaje=personaje, fecha_guardado='2025-10-04')
            db.session.add_all([usuario, planeta, personaje, vehiculo, favorito])
            db.session.commit()

            self.assertEqual(usuario.favoritos[0].planeta.nombre, 'Tatooine')
            self.assertEqual(personaje.vehiculos[0].nombre, 'X-Wing')
            self.assertEqual(vehiculo.quien.nombre, 'Luke Skywalker')
            self.assertEqual(favorito.personaje.nombre, 'Luke Skywalker')
            self.assertEqual(favorito.usuario.email, 'test@test.com')

if __name__ == '__main__':
    unittest.main()
