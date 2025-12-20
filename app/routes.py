from flask import Blueprint, render_template, redirect, url_for, request, session


main_bp = Blueprint('main', __name__)

@main_bp.route('/', methods=['GET'])
def index():
    return redirect(url_for('main.login'))

@main_bp.route('/dummy', methods=['GET'])
def dummy():
    return render_template('dummy.html')

@main_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username', '')
        if username:
            session['username'] = username
            return redirect(url_for('main.dummy'))
    return render_template('login.html')