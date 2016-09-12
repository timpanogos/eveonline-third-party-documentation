# CREST Technical Specification 

This section of the documentation contains detailed information about the JSON object graphs returned by each endpoint.  A Unique Identifier (UID) in the form of a JSON mime is obtained from HTTP OPTIONS verb requests from each endpoint.  These UID's also reflect the current version of the data object being returned along with structure, naming and typing metadata about the data structures that will be returned via the HTTP GET verb.   

Using an HTTP GET verb, the CREST root URL provides a collection of all of the endpoints available in the system.  This collection used in connection with the HTTP OPTIONS verb can (and should) be used by client applications to dynamically build URL's to the endpoints as well as utilizing the versioning per UID to determine what versions the client is coded to and to identify when newer versions become available. (TDB link to detailed description of implementing dynamic urls and version checking.)

This section of the documentation is laid out based on the tree like URL structure to each endpoint as well as the OPTIONS metadata.  Starting at the CREST host URL, the following nodes and leafs are found off of this root.

## Specification Tree
      
* [Endpoints](rootApi.md) `vnd.ccp.eve.Api-v5+json`
* [Options](rootOptions.md) `vnd.ccp.eve.Options-v1+json`
* [Alliances](alliances/AllianceCollection.md) `vnd.ccp.eve.AllianceCollection-v2+json`
* [Bloodlines](bloodlines/BloodlineCollection.md) `vnd.ccp.eve.BloodlineCollection-v2+json`
* [Characters](characters/CharacterSearch.md) `vnd.ccp.eve.CharacterSearch-v1+json`
* ......[Contacts](contacts/contacts/ContactCreate.md) `vnd.ccp.eve.ContactCreate-v1+json`
* ......[Contacts](contacts/contacts/ContactCollection.md) `vnd.ccp.eve.ContactCollection-v2+json`
* ............[Contact](contacts/0/ContactCreate.md) `vnd.ccp.eve.ContactCreate-v1+json`
* ............[Contact](contacts/0/ContactDelete.md) `vnd.ccp.eve.ContactDelete-v1+json`
* ......[Fittings](fittings/fittings/FittingCreate.md) `vnd.ccp.eve.FittingCreate-v1+json`
* ......[Fittings](fittings/fittings/FittingCollection.md) `vnd.ccp.eve.FittingCollection-v1+json`
* ............[Fitting](fittings/0/Fitting.md) `vnd.ccp.eve.Fitting-v1+json`
* ............[Fitting](fittings/0/FittingDelete.md) `vnd.ccp.eve.FittingDelete-v1+json`
* ......[Opportunities](opportunities/opportunities/CharacterOpportunitiesCollection.md) `vnd.ccp.eve.CharacterOpportunitiesCollection-v1+json`
* ......[Waypoints](waypoints/waypoints/PostWaypoint.md) `vnd.ccp.eve.PostWaypoint-v1+json`
* ......[Location](location/location/CharacterLocation.md) `vnd.ccp.eve.CharacterLocation-v1+json`
* ......[MarketDetails](marketdetails/marketdetails/ShowMarketDetails.md) `vnd.ccp.eve.ShowMarketDetails-v1+json`
* [Constellations](constellations/ConstellationCollection.md) `vnd.ccp.eve.ConstellationCollection-v1+json`
* ......[NPCCorporations](npccorps/npccorps/NPCCorporationsCollection.md) `vnd.ccp.eve.NPCCorporationsCollection-v1+json`
* ......[Attributes](attributes/attributes/DogmaAttributeCollection.md) `vnd.ccp.eve.DogmaAttributeCollection-v1+json`
* ......[Effects](effects/effects/DogmaEffectCollection.md) `vnd.ccp.eve.DogmaEffectCollection-v1+json`
* [Fleets](Fleet.md) `vnd.ccp.eve.Fleet-v1+json`
* [Fleets](FleetUpdate.md) `vnd.ccp.eve.FleetUpdate-v1+json`
* ......[Wings](wings/FleetWingCreate.md) `vnd.ccp.eve.FleetWingCreate-v1+json`
* ......[Wings](wings/FleetWings.md) `vnd.ccp.eve.FleetWings-v1+json`
* ............[Squads](squads/squads/FleetSquadCreate.md) `vnd.ccp.eve.FleetSquadCreate-v1+json`
* ............[Members](members/members/FleetMemberInvite.md) `vnd.ccp.eve.FleetMemberInvite-v1+json`
* ............[Members](members/members/FleetMembers.md) `vnd.ccp.eve.FleetMembers-v1+json`
* [Incursions](incursions/IncursionCollection.md) `vnd.ccp.eve.IncursionCollection-v1+json`
* [Facility](facilities/IndustryFacilityCollection.md) `vnd.ccp.eve.IndustryFacilityCollection-v1+json`
* [Systems](systems/IndustrySystemCollection.md) `vnd.ccp.eve.IndustrySystemCollection-v1+json`
* [Categories](categories/ItemCategoryCollection.md) `vnd.ccp.eve.ItemCategoryCollection-v1+json`
* [Groups](groups/ItemGroupCollection.md) `vnd.ccp.eve.ItemGroupCollection-v1+json`
* [Types](types/ItemTypeCollection.md) `vnd.ccp.eve.ItemTypeCollection-v1+json`
* [Groups](groups/MarketGroupCollection.md) `vnd.ccp.eve.MarketGroupCollection-v1+json`
* [Prices](prices/MarketTypePriceCollection.md) `vnd.ccp.eve.MarketTypePriceCollection-v1+json`
* [Types](types/MarketTypeCollection.md) `vnd.ccp.eve.MarketTypeCollection-v1+json`
* [Groups](groups/OpportunityGroupsCollection.md) `vnd.ccp.eve.OpportunityGroupsCollection-v1+json`
* [Tasks](tasks/OpportunityTasksCollection.md) `vnd.ccp.eve.OpportunityTasksCollection-v1+json`
* [Planet](Planet.md) `vnd.ccp.eve.Planet-v2+json`
* [Campaigns](campaigns/SovCampaignsCollection.md) `vnd.ccp.eve.SovCampaignsCollection-v1+json`
* [Structures](structures/SovStructureCollection.md) `vnd.ccp.eve.SovStructureCollection-v1+json`
* [Stargate](stargates/0/Stargate.md) `vnd.ccp.eve.Stargate-v1+json`
* [Races](races/RaceCollection.md) `vnd.ccp.eve.RaceCollection-v3+json`
* [Regions](regions/RegionCollection.md) `vnd.ccp.eve.RegionCollection-v1+json`
* [Tournaments](tournaments/TournamentCollection.md) `vnd.ccp.eve.TournamentCollection-v1+json`
* ......[Tournament](7/7/Tournament.md) `vnd.ccp.eve.Tournament-v1+json`
* ............[Series](7/series/series/TournamentSeriesCollection.md) `vnd.ccp.eve.TournamentSeriesCollection-v1+json`
* ..................[Matches](7/series/matches/matches/TournamentMatchCollection.md) `vnd.ccp.eve.TournamentMatchCollection-v1+json`
* ........................[Match](7/series/matches/0/TournamentMatch.md) `vnd.ccp.eve.TournamentMatch-v1+json`
* ..............................[Bans](7/series/matches/bans/bans/vnd.ccp.eve.TournamentBans(TBD).md) `vnd.ccp.eve.TournamentBans(TBD)`
* ..............................[Static](7/series/matches/static/static/TournamentStaticSceneData.md) `vnd.ccp.eve.TournamentStaticSceneData-v2+json`
* ..............................[PilotStats](7/series/matches/pilotstats/pilotstats/TournamentPilotStatsCollection.md) `vnd.ccp.eve.TournamentPilotStatsCollection-v1+json`
* ....................................[Frame](7/series/matches/realtime/0/TournamentRealtimeMatchFrame.md) `vnd.ccp.eve.TournamentRealtimeMatchFrame-v2+json`
* ..................[Team](7/teams/0/TournamentTeam.md) `vnd.ccp.eve.TournamentTeam-v1+json`
* ............[Teams](7/teams/teams/TournamentTeamCollection.md) `vnd.ccp.eve.TournamentTeamCollection-v1+json`
* ..................[Team](7/teams/0/TournamentTeam.md) `vnd.ccp.eve.TournamentTeam-v1+json`
* ........................[Members](7/teams/members/members/TournamentTeamMemberCollection.md) `vnd.ccp.eve.TournamentTeamMemberCollection-v1+json`
* [SolarSystems](solarsystems/SystemCollection.md) `vnd.ccp.eve.SystemCollection-v1+json`
* [Time](time/Time.md) `vnd.ccp.eve.Time-v1+json`
* [Decode](decode/TokenDecode.md) `vnd.ccp.eve.TokenDecode-v1+json`
* [Wars](wars/WarsCollection.md) `vnd.ccp.eve.WarsCollection-v1+json`
* ......[war](wars/wars/0/War.md) `vnd.ccp.eve.War-v1+json`

