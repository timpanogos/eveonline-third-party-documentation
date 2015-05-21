[![Documentation Status](https://readthedocs.org/projects/eveonline-third-party-documentation/badge/?version=latest)](https://readthedocs.org/projects/eveonline-third-party-documentation/?badge=latest)

# eveonline-third-party-documentation
Documentation for EVE Online third-party developers. This covers things like the XML API, CREST, the Static Data Export (SDE), and SSO. You can read the latest version of the documentation [here](http://eveonline-third-party-documentation.readthedocs.org/en/latest/).

# Developing
## Setup
You will need to have python, pip and virtualenv installed (install virtualenv using pip) then run the following commands from inside the repo directory:

### Windows
    virtualenv venv
    venv\Scripts\activate
    pip install -r requirements.txt

### Linux/mac
    virtualenv venv
    source venv/bin/activate
    pip install -r requirements.txt

## Running
    mkdocs serve

## Running on Cloud 9
If you're developing on [Cloud 9](https://c9.io/) you'll need to create a custom runner for mkdocs as follows:

1. Go to Run->Run With->New Runner
2. Replace the default runner text with the following:
```
    {
        "cmd" : [
            "bash",
            "--login",
            "-c",
            "cd $project_path ; mkdocs serve --dev-addr=$ip:$port"],
        "info" : "Started mkdocs server"
    }
```        
3. Save the new runner
4. Start the runner as follows:
  1. Go to Run->Run With->(your new runner)
  2. After your runner starts, click Preview->Preview Running Application (above the editor)

