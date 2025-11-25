from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# Google reCAPTCHA secret key (YOUR KEY in use)
SECRET_KEY = "6LeU6BUsAAAAAPVIWWhMYNFRLX5euYAB1C9xUnaS"


@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/services')
def services():
    return render_template("services.html")

@app.route('/products')
def products():
    return render_template("products.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/careers')
def careers():
    return render_template("careers.html")

@app.route("/employee_login")
def employee_login():
    return render_template("employee_login.html")

@app.route("/subscription")
def subscription():
    return render_template("subscription.html")


# 🚀 reCAPTCHA verified subscription API
@app.route("/subscribe", methods=["POST"])
def subscribe():
    recaptcha_resp = request.form.get("g-recaptcha-response")

    verify = requests.post(
        "https://www.google.com/recaptcha/api/siteverify",
        data={"secret": SECRET_KEY, "response": recaptcha_resp}
    ).json()

    if not verify.get("success"):
        return jsonify({"status": "error", "msg": "Captcha verification failed"}), 400

    first = request.form.get("first_name")
    last = request.form.get("last_name")
    email = request.form.get("email")
    language = request.form.get("language")
    region = request.form.get("region")

    # TODO: DB save / Email send here later
    return jsonify({"status": "success", "msg": "Saved successfully!"}), 200


if __name__ == '__main__':
    app.run(debug=True)
