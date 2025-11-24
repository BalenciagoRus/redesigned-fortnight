from flask import Flask, render_template_string, send_from_directory
# ... (весь ваш остальной код) ...

if __name__ == '__main__':
    # Эта часть будет работать только локально для тестирования
    print("Сервер запущен на: http://127.0.0.1:5000/")
    app.run(debug=True)

# При деплое Gunicorn будет вызывать объект 'app' напрямую