# ng-bookstore-sample
Sample Angular Bookstore to review books

# System requirements
- Linux/UNIX like operating system or Windows Operating system
- Python
- pip
- virtualenv
- Flask

# Setting up
- Install python
- Install pip
- Install virtualenv : pip install virtualenv and pip install virtualenvwrapper.  on Windows, the latter is replaced by pip install virtualenvwrapper-win
- Create a virtualenv folder: mkproject <projectnmae>. On Windows, use mkvirtualenv <projectname> and setprojectdir <projectname>
- cd <projectname>
- install the Python dependencies : pip install flask

#To run it:
- cd Books
- python books.py
- Open a browser, like Chrome and type URL : http://127.0.0.1:5000/

#Running the program
If you have deactivated the environment,  you can get back in by typing : workon <projectname>

#Stopping the program
To stop, simply kill off the python books.py using Ctrl-C.

To get out of the virtualenv, at the command line, run:

deactivate

#Features of the program
- Browse the list of books. The carousel displays a list of books
- Clicking on the carousel will stop the carousel from scrolling
- Click on the Description tab to view the description
- Click on the Author tab to view the author
- Click on the Reviews tab to see the reviews for the book. You can also submit a review for the book here
- For each of the tabs that are open, you can close the tab by clicking on the 'X' at the top right corner
- Invalid email addresses are validated with Red colored background

#Tests
I have not created any tests yet, will do some karma tests shortly
