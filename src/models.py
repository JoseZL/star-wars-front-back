from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

db = SQLAlchemy()


# Modelo Usuario
class Usuario(db.Model):
    __tablename__ = 'usuario'
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    fecha_subscripcion: Mapped[str] = mapped_column(String(30), nullable=True)
    nombre: Mapped[str] = mapped_column(String(50), nullable=True)
    apellido: Mapped[str] = mapped_column(String(50), nullable=True)
    favoritos = db.relationship('Favorito', back_populates='usuario', cascade='all, delete-orphan')

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "fecha_subscripcion": self.fecha_subscripcion,
            "nombre": self.nombre,
            "apellido": self.apellido,
        }

# Modelo Planeta
class Planeta(db.Model):
    __tablename__ = 'planeta'
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(100), nullable=False)
    clima: Mapped[str] = mapped_column(String(50), nullable=True)
    poblacion: Mapped[str] = mapped_column(String(50), nullable=True)
    diametro: Mapped[str] = mapped_column(String(50), nullable=True)
    periodo_rotacional: Mapped[str] = mapped_column(String(50), nullable=True)
    periodo_orbital: Mapped[str] = mapped_column(String(50), nullable=True)
    descripcion: Mapped[str] = mapped_column(String(1250), nullable=True)
    personajes = db.relationship('Personaje', back_populates='planeta_origen')
    favoritos = db.relationship('Favorito', back_populates='planeta')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "clima": self.clima,
            "poblacion": self.poblacion,
            "diametro": self.diametro,
            "periodo_rotacional": self.periodo_rotacional,
            "periodo_orbital": self.periodo_orbital,
            "descripcion": self.descripcion,
        }

# Modelo Vehiculo
class Vehiculo(db.Model):
    __tablename__ = 'vehiculo'
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(100), nullable=False)
    tipo: Mapped[str] = mapped_column(String(20), nullable=False)  # volador o terrestre
    quien_id: Mapped[int] = mapped_column(db.ForeignKey('personaje.id'), nullable=True)
    descripcion: Mapped[str] = mapped_column(String(250), nullable=True)
    quien = db.relationship('Personaje', back_populates='vehiculos')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "tipo": self.tipo,
            "quien_id": self.quien_id,
            "descripcion": self.descripcion,
        }

# Modelo Personaje
class Personaje(db.Model):
    __tablename__ = 'personaje'
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(100), nullable=False)
    especie: Mapped[str] = mapped_column(String(50), nullable=True)
    planeta_origen_id: Mapped[int] = mapped_column(db.ForeignKey('planeta.id'), nullable=True)
    descripcion: Mapped[str] = mapped_column(String(1000), nullable=True)
    planeta_origen = db.relationship('Planeta', back_populates='personajes')
    favoritos = db.relationship('Favorito', back_populates='personaje')
    vehiculos = db.relationship('Vehiculo', back_populates='quien')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "especie": self.especie,
            "planeta_origen_id": self.planeta_origen_id,
            "descripcion": self.descripcion,
            "vehiculos": [v.id for v in self.vehiculos],
        }

# Modelo Favorito
class Favorito(db.Model):
    __tablename__ = 'favorito'
    id: Mapped[int] = mapped_column(primary_key=True)
    usuario_id: Mapped[int] = mapped_column(db.ForeignKey('usuario.id'), nullable=False)
    planeta_id: Mapped[int] = mapped_column(db.ForeignKey('planeta.id'), nullable=True)
    personaje_id: Mapped[int] = mapped_column(db.ForeignKey('personaje.id'), nullable=True)
    fecha_guardado: Mapped[str] = mapped_column(String(30), nullable=True)

    usuario = db.relationship('Usuario', back_populates='favoritos')
    planeta = db.relationship('Planeta', back_populates='favoritos')
    personaje = db.relationship('Personaje', back_populates='favoritos')

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "planeta_id": self.planeta_id,
            "personaje_id": self.personaje_id,
            "fecha_guardado": self.fecha_guardado,
        }