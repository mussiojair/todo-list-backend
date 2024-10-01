## todo-list-backend (Mac Installation)

### 0. Prerequisites

#### Install Homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install Node.js and npm

```
brew install node
```

### 1. Cloning repository

```
git clone https://github.com/mussiojair/todo-list-backend.git
```

### 2. Install dependencies

```
npm install
```

### 3. Create a config file and fill it up with proper values.

```
cp .env.example .env
```

### 4. Run application (dev mode)

```
npm run dev
```

## Debug RESTful API

### Install Insomnia

Download: https://insomnia.rest/download

### Load collection file

Go to insomnia directory in repository root and import Insomnia_2024-10-01.json file into Insomnia application.


