# CREST Technical Specification 

This section of the documentation contains detailed information about the JSON object graphs returned by each endpoint.  A Unique Identifier (UID) in the form of a JSON mime is obtained from HTTP OPTIONS verb requests from each endpoint.  These UID's also reflect the current version of the data object being returned along with structure, naming and typing metadata about the data structures that will be returned via the HTTP GET verb.   

Using an HTTP GET verb, the CREST root URL provides a collection of all of the endpoints available in the system.  This collection used in connection with the HTTP OPTIONS verb can (and should) be used by client applications to dynamically build URL's to the endpoints as well as utilizing the versioning per UID to determine what versions the client is coded to and to identify when newer versions become available. (TDB link to detailed description of implementing dynamic urls and version checking.)

This section of the documentation is laid out based on the tree like URL structure to each endpoint as well as the OPTIONS metadata.  Starting at the CREST host URL, the following nodes and leafs are found off of this root.

## Specification Tree
      

* [alliances](alliances/alliances.md) `application/vnd.ccp.eve.AllianceCollection`
* [bloodlines](bloodlines/bloodlines.md) `application/vnd.ccp.eve.BloodlineCollection`
* [characters](characters/characters.md) `application/vnd.ccp.eve.Character`
* ...[contacts](characters/contacts/contacts.md) `application/vnd.ccp.eve.CharacterContacts`
* ......[contact](characters/contacts/contact.md) `application/vnd.ccp.eve.CharacterContact`
* ...[fittings](characters/fittings/fittings.md) `application/vnd.ccp.eve.CharacterFittings`
* ......[fitting](characters/fittings/fitting.md) `application/vnd.ccp.eve.CharacterFitting`
* ...[opportunities](characters/characterOpportunitiesRead/opportunities.md) `application/vnd.ccp.eve.CharacterOpportunities`
* ...[waypoints](characters/ui/autopilot/waypoints/waypoints.md) `application/vnd.ccp.eve.CharacterWaypoints`
* ...[location](characters/location/location.md) `application/vnd.ccp.eve.CharacterLocation`
* ...[openWindow](characters/ui/autopilot/marketdetails/openWindow.md) `application/vnd.ccp.eve.CharacterOpenWindow`
* [constellations](constellations/constellations.md) `application/vnd.ccp.eve.ConstellationCollection`
* [corporation](corporations/corporation.md) `application/vnd.ccp.eve.Corporation`
* ...[corporation](corporations/corporation.md) `application/vnd.ccp.eve.CorporationCollection`
* ......[npcCorporation](corporations/npccorps/npcCorporation.md) `application/vnd.ccp.eve.NPCCorporationsCollection`
* [dogma](dogma/dogma.md) `application/vnd.ccp.eve.Dogma`
* ...[attributes](dogma/attributes/attributes.md) `application/vnd.ccp.eve.(TBD)`
* ...[effects](dogma/effects/effects.md) `application/vnd.ccp.eve.(TBD)`
* [fleet](fleets/fleet.md) `application/vnd.ccp.eve.Fleet`
* ...[fleets](fleets/fleets.md) `application/vnd.ccp.eve.Fleet`
* ......[fleetWings](fleets/wings/fleetWings.md) `application/vnd.ccp.eve.FleetWings`
* .........[fleetSquads](fleets/wings/squads/fleetSquads.md) `application/vnd.ccp.eve.FleetSquads(TBD)`
* ......[fleetMembers](fleets/members/fleetMembers.md) `application/vnd.ccp.eve.FleetMembers`
* [incursions](incursions/incursions.md) `application/vnd.ccp.eve.IncursionCollection`
* [industry](industry/industry.md) `application/vnd.ccp.eve.Industry`
* ...[facility](industry/facility/facility.md) `application/vnd.ccp.eve.IndustryFacilityCollection`
* ...[system](industry/system/system.md) `application/vnd.ccp.eve.IndustrySystemCollection`
* [inventory](inventory/inventory.md) `application/vnd.ccp.eve.Inventory(TBD)`
* ...[categories](inventory/categories/categories.md) `application/vnd.ccp.eve.ItemCategoryCollection`
* ...[groups](inventory/groups/groups.md) `application/vnd.ccp.eve.ItemGroupCollection`
* ...[types](inventory/types/types.md) `application/vnd.ccp.eve.ItemGroupCollection`
* [market](market/market.md) `application/vnd.ccp.eve.Market(TBD)`
* ...[groups](market/groups/groups.md) `application/vnd.ccp.eve.MarketGroupCollection`
* ...[prices](market/prices/prices.md) `application/vnd.ccp.eve.MarketTypePriceCollection`
* ...[types](market/types/types.md) `application/vnd.ccp.eve.MarketTypeCollection`
* [opportunity](opportunities/opportunity.md) `application/vnd.ccp.eve.Opportunity(TBD)`
* ...[groups](opportunities/groups/groups.md) `application/vnd.ccp.eve.OpportunityGroupsCollection`
* ...[tasks](opportunities/tasks/tasks.md) `application/vnd.ccp.eve.OpportunityTasksCollection`
* [planetsGroup](planets/planetsGroup.md) `application/vnd.ccp.eve.PlanetsGroup`
* ...[planets](planets/planets.md) `application/vnd.ccp.eve.Planets`
* ...[planet](planets/planet.md) `application/vnd.ccp.eve.Planets`
* [sovereignty](sovereignty/sovereignty.md) `application/vnd.ccp.eve.Sovereignty(TBD)`
* ...[campaigns](sovereignty/campaigns/campaigns.md) `application/vnd.ccp.eve.SovCampaignsCollection`
* ...[structures](sovereignty/structure/structures.md) `application/vnd.ccp.eve.SovStructureCollection`
* [stargateGroup](stargate/stargateGroup.md) `application/vnd.ccp.eve.Stargates`
* ...[stargates](stargate/stargate/stargates.md) `application/vnd.ccp.eve.Stargates`
* ...[stargate](stargate/stargate/stargate.md) `application/vnd.ccp.eve.Stargate`
* [races](races/races.md) `application/vnd.ccp.eve.RaceCollection`
* [regions](regions/regions.md) `application/vnd.ccp.eve.RegionCollection`
* [schema](schema/schema.md) `application/vnd.ccp.eve.Schema(TBD)`
* ...[endpoints](schema/endpoints/endpoints.md) `application/vnd.ccp.eve.SchemaEndpointCollection(TBD)`
* ...[options](schema/options/options.md) `application/vnd.ccp.eve.SchemaOptionCollection`
* [tournaments](tournaments/tournaments.md) `application/vnd.ccp.eve.Tournaments(TBD)`
* ...[tournaments](tournaments/tournaments.md) `application/vnd.ccp.eve.TournamentCollection`
* ......[tournament](tournaments/tournament.md) `application/vnd.ccp.eve.Tournament`
* .........[series](tournaments/series/series.md) `application/vnd.ccp.eve.TournamentSeries`
* ............[bans](tournaments/series/bans/bans.md) `application/vnd.ccp.eve.TournamentSeries`
* ............[matches](tournaments/series/matches/matches.md) `application/vnd.ccp.eve.TournamentMatchCollection(TBD)`
* ...............[match](tournaments/series/matches/match.md) `application/vnd.ccp.eve.TournamentMatch(TBD)`
* ..................[static](tournaments/series/matches/static/static.md) `application/vnd.ccp.eve.TournamentMatchStatic(TBD)`
* ..................[pilotStats](tournaments/series/matches/pilotstats/pilotStats.md) `application/vnd.ccp.eve.TournamentMatchPilotStats(TBD)`
* ..................[realtime](tournaments/series/matches/realtime/realtime.md) `application/vnd.ccp.eve.TournamentMatchRealtime(TBD)`
* .....................[pilotStats](tournaments/series/matches/realtime/pilotStats.md) `application/vnd.ccp.eve.TournamentMatchRealtime(TBD)`
* .........[teams](tournaments/teams/teams.md) `application/vnd.ccp.eve.TournamentTeams(TBD)`
* ............[team](tournaments/teams/team.md) `application/vnd.ccp.eve.TournamentTeam(TBD)`
* ......[teams](tournaments/teams/teams.md) `application/vnd.ccp.eve.TournamentTeams2(TBD)`
* .........[team](tournaments/teams/team.md) `application/vnd.ccp.eve.TournamentTeam2(TBD)`
* ............[members](tournaments/teams/members/members.md) `application/vnd.ccp.eve.TournamentTeam2Members(TBD)`
* [solarsystems](solarsystems/solarsystems.md) `application/vnd.ccp.eve.SystemCollection`
* [time](time/time.md) `application/vnd.ccp.eve.Time`
* [decode](decode/decode.md) `application/vnd.ccp.eve.TokenDecode`
* [virtualGoodStore](virtualGoodStore/virtualGoodStore.md) `application/vnd.ccp.eve.VirtualGoodStore`
* [wars](wars/wars.md) `application/vnd.ccp.eve.Wars`
* ...[war](wars/wars/war.md) `application/vnd.ccp.eve.War`
