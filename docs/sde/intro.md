# Introduction
The [Static Data Export (SDE)](https://developers.eveonline.com/resource/resources) is a CCP provided periodic snapshot of static data used in EVE Online. 
The SDE provides data in three formats:

1. [YAML](https://en.wikipedia.org/wiki/YAML) is the preferred format for new data added to the SDE.
2. [SQLite](https://www.sqlite.org/) is the packaging format for certain universe data.
3. [Microsoft SQLServer (MSSQL)](https://en.wikipedia.org/wiki/Microsoft_SQL_Server) dump format is the format for everything else.

Documentation for the export is provided in the [YAML Files](yaml/index.md), [SQLite Tables](sqlite/index.md) and [MSSQL Tables](mssql/index.md) sections, respectively.

## Conversions
Originally, most of the SDE was provided in MSSQL format which was then converted by third party developers to various other database formats.
Today, many third party developers continue to consume the SDE in database form only. Various third party tools have been written to
convert the current SDE format to a pure database form, or other convenient forms.  You can find a list of conversion tools
in the [Conversions](conversions.md) section.
