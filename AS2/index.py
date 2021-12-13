from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def home():
    customer = {"status": "gold"}
    return render_template('index.html', customer=customer)

if __name__ == '__main__':
    app.run()