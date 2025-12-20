from flask import Blueprint, render_template, redirect, url_for, request, session


main_bp = Blueprint('main', __name__)

@main_bp.route('/', methods=['GET'])
def index():
    return redirect(url_for('main.login'))

@main_bp.route('/dummy', methods=['GET'])
def dummy():
    print(f"Name: {session.get('username', 'N/A')}, Room Id: {session.get('room_id', 'N/A')}")
    return render_template('dummy.html')

@main_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username', '')
        if username:
            session['username'] = username
            return redirect(url_for('main.lobby'))
    return render_template('login.html')

@main_bp.route('/lobby', methods=['GET', 'POST'])
def lobby():
    if not session.get('username', ''):
        return redirect(url_for('main.login'))
    
    if request.method == 'POST':
        room_id = request.form.get('room_id', '')
        if room_id:
            session['room_id'] = room_id
            return redirect(url_for('main.dummy'))
    return render_template('lobby.html')

@main_bp.route('/create', methods=['GET'])
def create():
    if not session.get('username', ''):
        return redirect(url_for('main.login'))
    return redirect(url_for('main.dummy'))