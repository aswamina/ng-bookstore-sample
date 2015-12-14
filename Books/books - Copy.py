from flask import Flask, jsonify, render_template, url_for

# Initialize the Flask application
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


# This route will return a list in JSON format
@app.route('/getBooks')
def getBooks():
    # This is a dummy list, 2 nested arrays containing some
    # params and values
    books = [
    {
      'name': 'Programming Language Design Concepts',
      'author': 'David A. Watt',
      'description':  "Survey the most important programming paradigms.",
      'authorblurb': "David Watt is a Professor of Computing Science at Glasgow University.",
      'price': 20.50,
      'images': [
        "images/image002.jpg"
      ],
      'reviews': [{
        'stars': 5,
        'body': "I love this book!",
        'author': "joe@example.org",
        'createdOn': 1397490980837
      }, {
        'stars': 1,
        'body': "This book sucks.",
        'author': "tim@example.org",
        'createdOn': 1397490980837
      }]
    },
    {
      'name': 'Getting Started with Julia',
      'author': 'Ivo Balbaert',
      'description': "Enter the exciting world of Julia, a high-performance language for technical computing.",
      'authorblurb': "Ivo Balbaert is currently a lecturer of (web) programming and databases at CVO Antwerpen",
      'price': 23.99,
      'images': [
        "images/image001.jpg"
      ],
      'reviews': [{
        'stars': 3,
        'body': "I think this book was just OK, could honestly use more examples, IMO.",
        'author': "JohnSmith@example.org",
        'createdOn': 1397490980837
      }, {
        'stars': 4,
        'body': "Awesome book, this is for me!",
        'author': "cRocks@example.org",
        'createdOn': 1397490980837
      }]
    },
    {
      'name': 'Concepts of Programming Languages',
      'author': 'Robert W. Sebesta',
      'description': "Main constructs of contemporary programming languages and tools.",
      'authorblurb': "Robert Sebesta is an Associate Professor Emeritus in the Computer Science Department at the University of Colorado",
      'price': 49.99,
      'images': [
        "images/image003.jpg"
      ],
      'reviews': [{
        'stars': 1,
        'body': "This book is WAY too expensive for its value.",
        'author': "JaneDoe@example.org",
        'createdOn': 1397490980837
      }, {
        'stars': 1,
        'body': "IMO: High Price != High Quality.",
        'author': "Louis@example.org",
        'createdOn': 1397490980837
      }, {
        'stars': 1,
        'body': "Don't waste your time on this book!",
        'author': "badattitudeguy@example.org",
        'createdOn': 1397490980837
      }]
    },
    {
      'name': 'Javascript - Concepts and Techniques',
      'author': 'Tina Spain McDuffie',
      'description': "Programming Interactive websites",
      'authorblurb': "Tina Spain McDuffie, WebWoman, Board Game Aficionado, Book Lover.",
      'price': 35.87,
      'images': [
        "images/image004.jpg"
      ],
      'reviews': [{
        'stars': 5,
        'body': "This book is extremely well organized.",
        'author': "scottkelman@example.org",
        'createdOn': 1397490980837
      }, {
        'stars': 5,
        'body': "I would recommend.",
        'author': "ppeters@example.org",
        'createdOn': 1397490980837
      }]
    }
    ]

    # returning the data structure in JSON
    return jsonify(results=books)
    # return 'Trying to get list of books'


if __name__ == "__main__":
    app.run(debug=True)

