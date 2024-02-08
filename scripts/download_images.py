import requests
import os
from urllib.parse import urlparse

# Function to download image from URL
def download_image(url, filename):
    try:
        # Send a GET request to the URL
        # leave if already downloaded
        if os.path.exists(filename):
            return
        print(f"Downloading: {url}")
        response = requests.get(url)
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Write the content to a file
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {filename}")
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")

# URLs of the images with language/tool names
image_urls = [
  
    ("https://stack-icons.showwcase.com/FastAPI_1666693947305.png", "FastAPI"),
    ("https://www.python.org/static/community_logos/python-logo.png", "Python"),
    ("https://golang.org/doc/gopher/frontpage.png", "Go"),
    ("https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "JavaScript"),
    ("https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", "C++"),
    ("https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", "SQL"),
    ("https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg", "C"),
    ("https://stack-icons.showwcase.com/Swift.png", "Swift"),
    ("https://stack-icons.showwcase.com/ZshZshell.png", "Zsh"),
    ("https://stack-icons.showwcase.com//HTML5.png", "HTML5"),
    ("https://stack-icons.showwcase.com/CSS_1635322912032.png", "CSS"),
    ("https://stack-icons.showwcase.com/YAML.png", "YAML"),
    ("https://www.djangoproject.com/m/img/logos/django-logo-negative.png", "Django"),
    ("https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", "Node.js"),
    ("https://flask.palletsprojects.com/en/2.1.x/_imgs/flask-logo.png", "Flask"),
    ("https://expressjs.com/imgs/express-facebook-share.png", "ExpressJS"),
    ("https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png", "MongoDB"),
    ("https://stack-icons.showwcase.com/GNUBash.png", "Bash"),
    ("https://stack-icons.showwcase.com/Docker.png", "Docker"),
    ("https://stack-icons.showwcase.com/Kubernetes.png", "Kubernetes"),
   ("https://stack-icons.showwcase.com/Django.png", "Django"),
   ("https://stack-icons.showwcase.com/Nodejs.png", "Node.js"),
   ("https://stack-icons.showwcase.com/Expressjs.png", "Express.js"),
("https://stack-icons.showwcase.com/Flask.png", "Flask"),
("https://stack-icons.showwcase.com/Matillion.jpg", "Matillion"),
("https://stack-icons.showwcase.com/MySQL.png", "MySQL"),
("https://stack-icons.showwcase.com/Manjaro.jpg", "Manjaro"),
("https://stack-icons.showwcase.com/Ubuntu.jpg", "Ubuntu"),
("https://stack-icons.showwcase.com/Linux.png", "Linux"),
("https://stack-icons.showwcase.com/Git.png", "Git"),
("https://stack-icons.showwcase.com/dbt.png", "dbt"),
("https://stack-icons.showwcase.com/Hugo.png", "Hugo"),
("https://stack-icons.showwcase.com/NumPy.jpeg", "NumPy"),
("https://stack-icons.showwcase.com/Pandas.png", "Pandas"),
("https://stack-icons.showwcase.com/Scikit-learn.png", "Scikit-learn"),
("https://stack-icons.showwcase.com/TensorFlow.png", "TensorFlow"),
("https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APyTorch_logo_icon.svg&psig=AOvVaw1SRMNyZh1DkcfVvioiC0Sk&ust=1707446177629000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjfsenamoQDFQAAAAAdAAAAABAD", "PyTorch"),
("", "OpenCV"),
("data:image/png;base64,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", "NLTK"),
("https://the-examples-book.com/starter-guides/data-engineering/_images/pyspark.png", "PySpark")
]
# Create a folder to save the images
folder = "../static/"
os.makedirs(folder, exist_ok=True)

# Download each image
for url, name in image_urls:
    # Extract filename from URL or alt attribute
    if url.startswith("http"):
        filename = os.path.join(folder, f"{name.lower()}.png")
    else:
        filename = os.path.join(folder, os.path.basename(url))
    download_image(url, filename)
