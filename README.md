# Data Analysis with Python

- This repository contains IPython notebooks covering the essentials of data analysis using Python, NumPy, and Matplotlib.

---

# Environment Setup

- It's recommended to create an isolated environment using Anaconda.

## Step 1: Create Environment

```Bash
conda create -n data-analysis python=3.11 -y
```

## Step 2: Activate Environment

```Bash
conda activate data-analysis
```

## Step 3: Install Required Packages

```
conda install numpy matplotlib pandas jupyter -y
```

## Step 4: Running Jupyter Notebooks

### Option 1: From Terminal

```Bash
jupyter notebook
```

- It will open your browser at http://localhost:8888/tree.
  
- Navigate to the desired .ipynb file and start running!

### Option 2: With VSCode

1. Install the Python and Jupyter extensions in VSCode.


2. Open any `.ipynb` file directly.


3. VSCode will prompt you to select an interpreter — choose the `conda` environment.

## Step 5: Running Website

1. Install required dependencies

```Bash
cd data-analysis/frontend
npm install

cd ../backend
pip install flask flask_cors flask-pymongo
```

2. Start servers

- Open 2 terminals

- In first terminal, write:

```Bash
cd ../frontend
npm run dev
```

- In second terminal, write:
```Bash
cd ..
python -m backend.app
```

- Wait for the frontend server to start at URL http://localhost:5173/ and backend server at http://localhost:8000/

---

# Dependencies

Python 3.11+

Anaconda

Node.js with `npm`

MongoDB

---

# Notes

This repo is maintained for learning and demonstration purposes. Contributions and feedback are welcome!
  
---

# Acknowledgements

- The `vehicles.csv` inside data folder is taken from **Krish Bhensdadia**'s Kaggle dataset. 

- You can download the dataset from [dataset of Krish](https://www.kaggle.com/datasets/krishbhensdadia/indian-vehicle-models-dataset-15k-entries)

# Special Thanks and Credits

- Special thanks to **Krish Bhensdadia** for providing me the dataset so that I can practice data analysis well

# License

- This project is licensed under [MIT License](./LICENSE)
