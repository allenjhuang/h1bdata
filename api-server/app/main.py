from dotenv import load_dotenv
from flask import Flask, jsonify
import psycopg2
import psycopg2.extras
import os

app = Flask(__name__)
load_dotenv()


@app.route("/")
def all_data():
    conn = psycopg2.connect(os.path.expandvars(os.environ["CRDB_CONN_STR"]))
    with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
        cur.execute("SELECT * FROM h1bdata_table")
        rows = cur.fetchall()
        conn.commit()
    return jsonify(rows)


@app.route("/search")
def search(employer, job_title, city):
    # TODO: Get args from GET query params or POST body.
    conn = psycopg2.connect(os.path.expandvars(os.environ["CRDB_CONN_STR"]))
    with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
        # TODO: Look up ways to sanitize query / prevent SQL injection attacks.
        cur.execute(f"""
            SELECT *
            FROM h1bdata_table
            WHERE "EMPLOYER" = {employer}
                AND "JOB_TITLE" = {job_title}
                AND "EMPLOYER_CITY" = {city}
        """)
        rows = cur.fetchall()
        conn.commit()
    return jsonify(rows)
