# CREST Technical Specification 

This section of the documentation contains detailed information about the JSON object graphs returned by each endpoint.  A Unique Identifier (UID) in the form of a JSON mime is obtained from HTTP OPTIONS verb requests from each endpoint.  These UID's also reflect the current version of the data object being returned along with structure, naming and typing metadata about the data structures that will be returned via the HTTP GET verb.   

Using an HTTP GET verb, the CREST root URL provides a collection of all of the endpoints available in the system.  This collection used in connection with the HTTP OPTIONS verb can (and should) be used by client applications to dynamically build URL's to the endpoints as well as utilizing the versioning per UID to determine what versions the client is coded to and to identify when newer versions become available. (TDB link to detailed description of implementing dynamic urls and version checking.)

This section of the documentation is laid out based on the tree like URL structure to each endpoint as well as the OPTIONS metadata.  Starting at the CREST host URL, the following nodes and leafs are found off of this root.

## Specification Tree
      
* [Endpoints](Api.md) `vnd.ccp.eve.Api-v5+json`
* [Options](Options.md) `vnd.ccp.eve.Options-v1+json`
* [Alliances](alliances/AllianceCollection.md) `vnd.ccp.eve.AllianceCollection-v2+json`
* [Bloodlines](bloodlines/BloodlineCollection.md) `vnd.ccp.eve.BloodlineCollection-v2+json`
* [Characters](characters/CharacterSearch.md) `vnd.ccp.eve.CharacterSearch-v1+json`
* ......[Contacts](characters/contacts/ContactCreate.md) `vnd.ccp.eve.ContactCreate-v1+json`
* ......[Contacts](characters/contacts/ContactCollection.md) `vnd.ccp.eve.ContactCollection-v2+json`
* ............[Contact](characters/contacts/id/ContactCreate.md) `vnd.ccp.eve.ContactCreate-v1+json`
* ............[Contact](characters/contacts/id/ContactDelete.md) `vnd.ccp.eve.ContactDelete-v1+json`
* ......[Fittings](characters/fittings/FittingCreate.md) `vnd.ccp.eve.FittingCreate-v1+json`
* ......[Fittings](characters/fittings/FittingCollection.md) `vnd.ccp.eve.FittingCollection-v1+json`
* ............[Fitting](characters/fittings/id/Fitting.md) `vnd.ccp.eve.Fitting-v1+json`
* ............[Fitting](characters/fittings/id/FittingDelete.md) `vnd.ccp.eve.FittingDelete-v1+json`
* ......[Opportunities](characters/opportunities/CharacterOpportunitiesCollection.md) `vnd.ccp.eve.CharacterOpportunitiesCollection-v1+json`
* ......[Waypoints](characters/waypoints/PostWaypoint.md) `vnd.ccp.eve.PostWaypoint-v1+json`
* ......[Location](characters/location/CharacterLocation.md) `vnd.ccp.eve.CharacterLocation-v1+json`
* ......[MarketDetails](characters/marketdetails/ShowMarketDetails.md) `vnd.ccp.eve.ShowMarketDetails-v1+json`
* [Constellations](constellations/ConstellationCollection.md) `vnd.ccp.eve.ConstellationCollection-v1+json`
* Corporations
* ......[NPCCorporations](corporations/npccorps/NPCCorporationsCollection.md) `vnd.ccp.eve.NPCCorporationsCollection-v1+json`
* Dogma
* ......[Attributes](dogma/attributes/DogmaAttributeCollection.md) `vnd.ccp.eve.DogmaAttributeCollection-v1+json`
* ......[Effects](dogma/effects/DogmaEffectCollection.md) `vnd.ccp.eve.DogmaEffectCollection-v1+json`
* Fleets
* ......[Fleet](fleets/id/Fleet.md) `vnd.ccp.eve.Fleet-v1+json`
* ......[Fleet](fleets/id/FleetUpdate.md) `vnd.ccp.eve.FleetUpdate-v1+json`
* ............[Wings](fleets/id/wings/FleetWingCreate.md) `vnd.ccp.eve.FleetWingCreate-v1+json`
* ............[Wings](fleets/id/wings/FleetWings.md) `vnd.ccp.eve.FleetWings-v1+json`
* ..................Wing
* ........................[Squads](fleets/id/wings/id/squads/FleetSquadCreate.md) `vnd.ccp.eve.FleetSquadCreate-v1+json`
* ..............................[Members](fleets/id/wings/id/squads/members/FleetMemberInvite.md) `vnd.ccp.eve.FleetMemberInvite-v1+json`
* ..............................[Members](fleets/id/wings/id/squads/members/FleetMembers.md) `vnd.ccp.eve.FleetMembers-v1+json`
* [Incursions](incursions/IncursionCollection.md) `vnd.ccp.eve.IncursionCollection-v1+json`
* Industry
* ......[Facility](industry/facilities/IndustryFacilityCollection.md) `vnd.ccp.eve.IndustryFacilityCollection-v1+json`
* ......[Systems](industry/systems/IndustrySystemCollection.md) `vnd.ccp.eve.IndustrySystemCollection-v1+json`
* inventory
* ......[Categories](inventory/categories/ItemCategoryCollection.md) `vnd.ccp.eve.ItemCategoryCollection-v1+json`
* ......[Groups](inventory/groups/ItemGroupCollection.md) `vnd.ccp.eve.ItemGroupCollection-v1+json`
* ......[Types](inventory/types/ItemTypeCollection.md) `vnd.ccp.eve.ItemTypeCollection-v1+json`
* Market
* ......[Groups](market/groups/MarketGroupCollection.md) `vnd.ccp.eve.MarketGroupCollection-v1+json`
* ......[Prices](market/prices/MarketTypePriceCollection.md) `vnd.ccp.eve.MarketTypePriceCollection-v1+json`
* ......[Types](market/types/MarketTypeCollection.md) `vnd.ccp.eve.MarketTypeCollection-v1+json`
* Opportunity
* ......[Groups](opportunities/groups/OpportunityGroupsCollection.md) `vnd.ccp.eve.OpportunityGroupsCollection-v1+json`
* ......[Tasks](opportunities/tasks/OpportunityTasksCollection.md) `vnd.ccp.eve.OpportunityTasksCollection-v1+json`
* Planets
* ......[Planet](planets/id/Planet.md) `vnd.ccp.eve.Planet-v2+json`
* Sovereignty
* ......[Campaigns](sovereignty/campaigns/SovCampaignsCollection.md) `vnd.ccp.eve.SovCampaignsCollection-v1+json`
* ......[Structures](sovereignty/structures/SovStructureCollection.md) `vnd.ccp.eve.SovStructureCollection-v1+json`
* Stargates
* ......[Stargate](stargates/stargates/id/Stargate.md) `vnd.ccp.eve.Stargate-v1+json`
* [Races](races/RaceCollection.md) `vnd.ccp.eve.RaceCollection-v3+json`
* [Regions](regions/RegionCollection.md) `vnd.ccp.eve.RegionCollection-v1+json`
* [Tournaments](tournaments/TournamentCollection.md) `vnd.ccp.eve.TournamentCollection-v1+json`
* ......[Tournament](tournaments/7/Tournament.md) `vnd.ccp.eve.Tournament-v1+json`
* ............[Series](tournaments/7/series/TournamentSeriesCollection.md) `vnd.ccp.eve.TournamentSeriesCollection-v1+json`
* ..................[Matches](tournaments/7/series/matches/TournamentMatchCollection.md) `vnd.ccp.eve.TournamentMatchCollection-v1+json`
* ........................[Match](tournaments/7/series/matches/id/TournamentMatch.md) `vnd.ccp.eve.TournamentMatch-v1+json`
* ..............................[Bans](tournaments/7/series/matches/id/bans/vnd.ccp.eve.TournamentBans(TBD).md) `vnd.ccp.eve.TournamentBans(TBD)`
* ..............................[Static](tournaments/7/series/matches/id/static/TournamentStaticSceneData.md) `vnd.ccp.eve.TournamentStaticSceneData-v2+json`
* ..............................[PilotStats](tournaments/7/series/matches/id/pilotstats/TournamentPilotStatsCollection.md) `vnd.ccp.eve.TournamentPilotStatsCollection-v1+json`
* ..............................Realtime
* ....................................[Frame](tournaments/7/series/matches/id/realtime/id/TournamentRealtimeMatchFrame.md) `vnd.ccp.eve.TournamentRealtimeMatchFrame-v2+json`
* ............Teams
* ..................[Team](tournaments/7/teams/id/TournamentTeam.md) `vnd.ccp.eve.TournamentTeam-v1+json`
* ............[Teams](tournaments/7/teams/TournamentTeamCollection.md) `vnd.ccp.eve.TournamentTeamCollection-v1+json`
* ..................[Team](tournaments/7/teams/id/TournamentTeam.md) `vnd.ccp.eve.TournamentTeam-v1+json`
* ........................[Members](tournaments/7/teams/id/members/TournamentTeamMemberCollection.md) `vnd.ccp.eve.TournamentTeamMemberCollection-v1+json`
* [SolarSystems](solarsystems/SystemCollection.md) `vnd.ccp.eve.SystemCollection-v1+json`
* [Time](time/Time.md) `vnd.ccp.eve.Time-v1+json`
* [Decode](decode/TokenDecode.md) `vnd.ccp.eve.TokenDecode-v1+json`
* [Wars](wars/WarsCollection.md) `vnd.ccp.eve.WarsCollection-v1+json`
* ......[war](wars/wars/id/War.md) `vnd.ccp.eve.War-v1+json`

