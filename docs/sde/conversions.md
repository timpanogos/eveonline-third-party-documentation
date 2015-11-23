# Intro

Originally, the SDE was provided solely as an MS SQL server backup file. As the SDE is commonly used in environments where MS SQL is not available or would be overkill, a number of people maintain conversion routines and copies, to make it available in a more useful format.

As more formats were introduced, containing extra data, these routines were expanded to bring the data back into a single format.

As the various methods for conversion result in differing versions, with different layouts of data, conversions will be listed by the primary maintainer.

## [Desmont McCallock](https://forums.eveonline.com/profile/Desmont%20McCallock)

[Conversion Tool](https://forums.eveonline.com/default.aspx?g=posts&m=6168357)

Desmont provides a tool to run on Windows, to merge the other data back into the SQL Server SDE, and to convert into a variety of formats, either at full database, or individual tables.

* SQL Server
* Mysql
* Postgres
* MS Access
* SQLite
* CSV

This tool converts to a format close to the original SDE, with blueprint information going into ramTypeRequirements.

## [Steve Ronuken - Fuzzwork Enterprises](https://www.fuzzwork.co.uk/dump/)

Steve provides conversions of the SDE for download, in the following formats:

* SQL Server
* Mysql (both [full database](https://www.fuzzwork.co.uk/dump/mysql-latest.tar.bz2) and [single table](https://www.fuzzwork.co.uk/dump/latest/))
* [Postgress](https://www.fuzzwork.co.uk/dump/postgres-latest.dmp.bz2) (both public schema, and evetools schema)
* [SQLite](https://www.fuzzwork.co.uk/dump/sqlite-latest.sqlite.bz2)
* [CSV/XLS](https://www.fuzzwork.co.uk/dump/latest/) (depending on row counts)

.bz2 files can be unzipped with 7zip, on Windows.
Historical copies are kept available. When data is migrated into alternate formats, it's generally copied back into the old table format, but not always. The industry data, for example, is in a number of new industryActivity tables. While allowing for greater flexibility, this can break some older tools.

Conversion is performed by:

* https://github.com/fuzzysteve/SDE-loaders to pull everything into SQL Server
* MySQL Migration Wizard in the Mysql Workbench to convert to MySQL
* pgloader to pull the mysql data into postgres
* mysql2sqlite.sh to pull the mysql data into sqlite
* DBIx::Dump to export the individual files.
