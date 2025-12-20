from flask import Blueprint, render_template, redirect, url_for


main_bp = Blueprint('main', __name__)

@main_bp.route('/', methods=['GET'])
def index():
    return redirect(url_for('main.dummy'))

@main_bp.route('/dummy', methods=['GET'])
def dummy():
    return render_template('dummy.html')