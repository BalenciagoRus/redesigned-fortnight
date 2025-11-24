from flask import Flask, render_template_string, send_from_directory

app = Flask(__name__)

# Загрузка содержимого index.html
try:
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
except FileNotFoundError:
    html_content = "<h1>Ошибка: Не найден index.html</h1>"

@app.route('/')
def index():
    # Отправляет index.html в браузер
    return render_template_string(html_content)

@app.route('/game.js')
def serve_js():
    # Отправляет game.js, который запрашивает браузер
    return send_from_directory('.', 'game.js')

if __name__ == '__main__':
    # Запуск сервера на http://127.0.0.1:5000/
    print("Сервер запущен на: http://127.0.0.1:5000/")
    app.run(debug=True)