# Stations Table (MSSQL)
Table of all stations.

## Stations

* __Table Name:__ ``staStations``
* __Description:__ Stations list.

### Columns

<table border="1">
    <tbody>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Default</th>
            <th>Xrefs</th>
            <th>Description</th>
        </tr>
        <tr>
            <td nowrap id="stationID">
                stationID
                <code title="Belongs to primary key">PK</code>
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="../sqlite/sqlite_mapDenormalize.html#itemID">mapDenormalize.itemID</a><br>
            </td>
            <td>Unique station ID.</td>
        </tr>
        <tr>
            <td nowrap>
                security
            </td>
            <td>
                <strong>smallint</strong>
            </td>
            <td></td>
            <td></td>
            <td>Station security level.</td>
        </tr>
        <tr>
            <td nowrap>
                dockingCostPerVolume
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Cost of docking per ship volume.  Currently always zero.</td>
        </tr>
        <tr>
            <td nowrap>
                maxShipVolumeDockable
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Maximum volume of ship that can dock here (cubic meters).</td>
        </tr>
        <tr>
            <td nowrap>
                officeRentalCost
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td></td>
            <td>Base office rental cost.</td>
        </tr>
        <tr>
            <td nowrap>
                operationID
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_staOperations.html#operationID">staOperations.operationID</a><br>
            </td>
            <td>Station operaton mode.</td>
        </tr>
        <tr>
            <td nowrap>
                stationTypeID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_staStationTypes.html#stationTypeID">staStationTypes.stationTypeID</a><br>
            </td>
            <td>Station type.</td>
        </tr>
        <tr>
            <td nowrap>
                corporationID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_crpNPCCorporations.html#corporationID">crpNPCCorporations.corporationID</a><br>
            </td>
            <td>Corporation ID of owning corporation.</td>
        </tr>
        <tr>
            <td nowrap>
                solarSystemID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="../sqlite/sqlite_mapSolarSystems.html#solarSystemID">mapSolarSystems.solarSystemID</a><br>
            </td>
            <td>Solar system ID of solar system where station is located.</td>
        </tr>
        <tr>
            <td nowrap>
                constellationID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="../sqlite/sqlite_mapConstellations.html#constellationID">mapConstellations.constellationID</a><br>
            </td>
            <td>Constellation ID of constellation where station is located.</td>
        </tr>
        <tr>
            <td nowrap>
                regionID
            </td>
            <td>
                <strong>int</strong>
            </td>
            <td></td>
            <td>
                <a href="../sqlite/sqlite_mapRegions.html#regionID">mapRegions.regionID</a><br>
            </td>
            <td>Region ID of region where station is located.</td>
        </tr>
        <tr>
            <td nowrap>
                stationName
            </td>
            <td>
                <strong>nvarchar(100)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Station name.</td>
        </tr>
        <tr>
            <td nowrap>
                x
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>X location of station in space.</td>
        </tr>
        <tr>
            <td nowrap>
                y
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Y location of station in space.</td>
        </tr>
        <tr>
            <td nowrap>
                z
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Z location of station in space.</td>
        </tr>
        <tr>
            <td nowrap>
                reprocessingEfficiency
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Base station reprocessing efficiency (percentage).</td>
        </tr>
        <tr>
            <td nowrap>
                reprocessingStationsTake
            </td>
            <td>
                <strong>float</strong>
            </td>
            <td></td>
            <td></td>
            <td>Base station reprocessing tax (percentage).</td>
        </tr>
        <tr>
            <td nowrap>
                reprocessingHangarFlag
            </td>
            <td>
                <strong>tinyint</strong>
            </td>
            <td></td>
            <td>
                <a href="mssql_invFlags.html#flagID">invFlags.flagID</a><br>
            </td>
            <td>Inventory flag for location of reprocessing output?  Currently always 4 (Hangar).</td>
        </tr>
    </tbody>
</table>
