# ThreeEyedRaven91's ter-data-migration

A cool tools for migrate data from a database (maybe staging or development environment) to other database (production or staging)

You will never miss anything again.

# How to use

0. Install ter-data-migration

```

npm install -g ter-data-migration

# or

yarn global add ter-data-migration

```

1. Config `.tdm_config` folder

```
mkdir .tdm_config
cd .tdm_config
```

2. Create `profile.json` file

```json
{
    "profiles": {
        "development": {
            "database": "your_database",
            "user": "your_user",
            "password": "your_password",
            "dialect": "mysql or something else",
            "host": "localhost"
        }
    },
    "default": "development"
}
```

3. Run

```
ter-data-migrate
```

4. See result: Everything in your db is exported with `${table_name}.json`

# Roadmap

| Version | Function                                                       | Status      |
|---------|----------------------------------------------------------------|-------------|
| 0.1.x   | Read from profile (with default config) and run export to json | Done        |
| 0.2.x   | Read from profile (with default config) and restore from json  | To do       |
| 0.3.x   | Add params profile, allow select tables                        | To do       |
| 0.4.x   | Add params from, to and migration from profile to profile      | To do       |
| 0.5.x   | Add scenario file                                              | To do       |
| 0.6.x   | Provide API to programmatically migration, backup, restore     | To do       |
| 0.7.x   | Provide init command allow create profile.json                 | To do       |