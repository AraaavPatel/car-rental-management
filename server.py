from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, template_folder="templates", static_folder="static")

# --- MySQL CONFIG ---
# ⚠️ replace 'root' and 'password' with your MySQL credentials
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:9825@localhost/fluxdrive'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- MODELS ---
class Bookings(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(50), nullable=False)
    car = db.Column(db.String(100), nullable=False)
    start = db.Column(db.String(20), nullable=False)
    end = db.Column(db.String(20), nullable=False)
    location = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "car": self.car,
            "start": self.start,
            "end": self.end,
            "location": self.location
        }

# --- ROUTES ---
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# Optional: handle favicon request to avoid 404 logs
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(
        os.path.join(app.root_path, 'static'),
        'favicon.ico',
        mimetype='image/vnd.microsoft.icon'
    )

# --- API ---
@app.route("/api/bookings", methods=["GET"])
def get_bookings():
    bookings = Bookings.query.all()
    return jsonify([b.to_dict() for b in bookings])

@app.route("/api/bookings", methods=["POST"])
def create_bookings():
    data = request.json
    booking = Bookings(
        name=data.get("name"),
        email=data.get("email"),
        phone=data.get("phone"),
        car=data.get("car"),
        start=data.get("start"),
        end=data.get("end"),
        location=data.get("location")
    )
    db.session.add(booking)
    db.session.commit()
    return jsonify({"message": "Booking created", "booking": booking.to_dict()}), 201


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    # Disable reloader to avoid "SystemExit: 3" in VS Code
    app.run(debug=True, use_reloader=False)
