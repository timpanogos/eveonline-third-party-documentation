# Static Data Export Database Tables

## Agents

## Corporation NPC Corporation Trades

## Dogma Type Attributes

## Dogma Type Effects

## Inventory Flags

## Inventory Names

* __Table Name:__ ``invnames``
* __Description:__ Names of all in-game items.

### Columns

<table>
    <tbody>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Default</th>
            <th>Xrefs</th>
            <th>Description</th>
        </tr>
        <tr>
            <td nowrap>
                itemID
                <code title="Belongs to primary key">PK</code>
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>BIGINT</strong>
            </td>
            <td></td>
            <td>
                <a href="#inventory-items">invitems.itemID</a><br>
                <a href="#inventory-positions">invpositions.itemID</a><br>
                <a href="#inventory-unique-names">invuniquenames.itemID</a><br>
                <a href="#map-denormalize">mapdenormalize.itemID</a>
            </td>
            <td>In-game item ID.</td>
        </tr>
        <tr>
            <td nowrap>
                itemName
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>VARCHAR(200)</strong>
            </td>
            <td></td>
            <td></td>
            <td>Name of in-game item.</td>
        </tr>
    </tbody>
</table>

## Inventory Items

* __Table Name:__ ``invitems``
* __Description:__ Table of all in-game items.

### Columns

<table>
    <tbody>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Default</th>
            <th>Xrefs</th>
            <th>Description</th>
        </tr>
        <tr>
            <td nowrap>
                itemID
                <code title="Belongs to primary key">PK</code>
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>BIGINT</strong>
            </td>
            <td></td>
            <td>
                <a href="#inventory-names">invnames.itemID</a><br>
                <a href="#inventory-positions">invpositions.itemID</a><br>
                <a href="#inventory-unique-names">invuniquenames.itemID</a><br>
                <a href="#map-denormalize">mapdenormalize.itemID</a>
            </td>
            <td>In-game item ID.</td>
        </tr>
        <tr>
            <td nowrap>
                typeID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>INTEGER</strong>
            </td>
            <td></td>
            <td>
                <a href="#corporation-npc-corporation-trades">crpnpccorporationtrades.typeID</a><br>
                <a href="#dogma-type-attributes">dgmtypeattributes.typeID</a><br>
                <a href="#dogma-type-effects">dgmtypeeffects.typeID</a><br>
                <a href="#inventory-type-materials">invtypematerials.typeID</a><br>
                <a href="#inventory-type-reactions">invtypereactions.typeID</a><br>
                <a href="#inventory-types">invtypes.typeID</a><br>
                <a href="#map-denormalize">mapdenormalize.typeID</a>
            </td>
            <td>Type of in-game item.</td>
        </tr>
        <tr>
            <td nowrap>
                ownerID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>INTEGER</strong>
            </td>
            <td></td>
            <td>
                <a href="#ram-assembly-line-stations">ramassemblylinestations.ownerID</a>
            </td>
            <td>Item owner ID.</td>
        </tr>
        <tr>
            <td nowrap>
                locationID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>BIGINT</strong>
            </td>
            <td></td>
            <td>
                <a href="#agents">agtagents.locationID</a><br>
                <a href="#map-landmarks">maplandmarks.locationID</a><br>
                <a href="#map-location-scenes">maplocationscenes.locationID</a><br>
                <a href="#map-location-wormhole-classes">maplocationwormholeclasses.locationID</a><br>
            </td>
            <td>Item location ID.</td>
        </tr>
        <tr>
            <td nowrap>
                flagID
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>SMALLINT</strong>
            </td>
            <td></td>
            <td>
                <a href="#inventory-flags">invflags.flagID</a>
            </td>
            <td>Item flags.</td>
        </tr>
        <tr>
            <td nowrap>
                quantity
                <code title="Not Null">NN</code>
            </td>
            <td>
                <strong>INTEGER</strong>
            </td>
            <td></td>
            <td></td>
            <td>Item quantity.</td>
        </tr>
    </tbody>
</table>


## Inventory Positions

## Inventory Unique Names

## Inventory Meta Types

## Inventory Traits

## Inventory Type Materials

## Inventory Type Reactions

## Inventory Types

## Inventory Volumes

## Map Denormalize

## Map Landmarks

## Map Lcoation Scenes

## Map Location Wormhole Classes

## RAM Assembly Line Stations
