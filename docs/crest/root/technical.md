# CREST Technical Specification 

This section of the documentation contains detailed information about the JSON object graphs returned by each endpoint.  A Unique Identifier (UID) in the form of a JSON mime is obtained from HTTP OPTIONS verb requests from each endpoint.  These UID's also reflect the current version of the data object being returned along with structure, naming and typing metadata about the data structures that will be returned via the HTTP GET verb.   

Using an HTTP GET verb, the CREST root URL provides a collection of all of the endpoints available in the system.  This collection used in connection with the HTTP OPTIONS verb can (and should) be used by client applications to dynamically build URL's to the endpoints as well as utilizing the versioning per UID to determine what versions the client is coded to and to identify when newer versions become available. (TDB link to detailed description of implementing dynamic urls and version checking.)

This section of the documentation is laid out based on the tree like URL structure to each endpoint as well as the OPTIONS metadata.  Starting at the CREST host URL, the following nodes and leafs are found off of this root.

## Specification Tree
      
* [Endpoints](Api.md) `application/vnd.ccp.eve.Api-v5+json`
* [Options](Options.md) `application/vnd.ccp.eve.Options-v1+json`
* [Alliances](alliances/AllianceCollection.md) `application/vnd.ccp.eve.AllianceCollection-v2+json`
* [Bloodlines](bloodlines/BloodlineCollection.md) `application/vnd.ccp.eve.BloodlineCollection-v2+json`
* [Characters](characters/CharacterSearch.md) `application/vnd.ccp.eve.CharacterSearch-v1+json`
* ......[Contacts](characters/contacts/ContactCreate.md) `application/vnd.ccp.eve.ContactCreate-v1+json`
* ......[Contacts](characters/contacts/ContactCollection.md) `application/vnd.ccp.eve.ContactCollection-v2+json`
* ............[Contact](characters/contacts/id/ContactCreate.md) `application/vnd.ccp.eve.ContactCreate-v1+json`
* ............[Contact](characters/contacts/id/ContactDelete.md) `application/vnd.ccp.eve.ContactDelete-v1+json`
* ......[Fittings](characters/fittings/FittingCreate.md) `application/vnd.ccp.eve.FittingCreate-v1+json`
* ......[Fittings](characters/fittings/FittingCollection.md) `application/vnd.ccp.eve.FittingCollection-v1+json`
* ............[Fitting](characters/fittings/id/Fitting.md) `application/vnd.ccp.eve.Fitting-v1+json`
* ............[Fitting](characters/fittings/id/FittingDelete.md) `application/vnd.ccp.eve.FittingDelete-v1+json`
* ......[Opportunities](characters/opportunities/CharacterOpportunitiesCollection.md) `application/vnd.ccp.eve.CharacterOpportunitiesCollection-v1+json`
* ......[Location](characters/location/CharacterLocation.md) `application/vnd.ccp.eve.CharacterLocation-v1+json`
* ......ui
* ............autopilot
* ..................[Waypoints](characters/waypoints/PostWaypoint.md) `application/vnd.ccp.eve.PostWaypoint-v1+json`
* ............openwindow
* ..................[Mail](characters/newmail/NewMail.md) `application/vnd.ccp.eve.NewMail-v1+json`
* ......[MarketDetails](characters/marketdetails/ShowMarketDetails.md) `application/vnd.ccp.eve.ShowMarketDetails-v1+json`
* [Constellations](constellations/ConstellationCollection.md) `application/vnd.ccp.eve.ConstellationCollection-v1+json`
* Corporations
* ......[NPCCorporation](corporations/1000004/Corporation.md) `application/vnd.ccp.eve.Corporation-v1+json`
* ............[LoyaltyStore](corporations/1000004/loyaltystore/LoyaltyStoreOffersCollection.md) `application/vnd.ccp.eve.LoyaltyStoreOffersCollection-v1+json`
* ......[NPCCorporations](corporations/npccorps/NPCCorporationsCollection.md) `application/vnd.ccp.eve.NPCCorporationsCollection-v1+json`
* Dogma
* ......[Attributes](dogma/attributes/DogmaAttributeCollection.md) `application/vnd.ccp.eve.DogmaAttributeCollection-v1+json`
* ......[Effects](dogma/effects/DogmaEffectCollection.md) `application/vnd.ccp.eve.DogmaEffectCollection-v1+json`
* Fleets
* ......[Fleet](fleets/id/Fleet.md) `application/vnd.ccp.eve.Fleet-v1+json`
* ......[Fleet](fleets/id/FleetUpdate.md) `application/vnd.ccp.eve.FleetUpdate-v1+json`
* ............[Wings](fleets/id/wings/FleetWingCreate.md) `application/vnd.ccp.eve.FleetWingCreate-v1+json`
* ............[Wings](fleets/id/wings/FleetWings.md) `application/vnd.ccp.eve.FleetWings-v1+json`
* ..................Wing
* ........................[Squads](fleets/id/wings/id/squads/FleetSquadCreate.md) `application/vnd.ccp.eve.FleetSquadCreate-v1+json`
* ..............................[Members](fleets/id/wings/id/squads/members/FleetMemberInvite.md) `application/vnd.ccp.eve.FleetMemberInvite-v1+json`
* ..............................[Members](fleets/id/wings/id/squads/members/FleetMembers.md) `application/vnd.ccp.eve.FleetMembers-v1+json`
* [Incursions](incursions/IncursionCollection.md) `application/vnd.ccp.eve.IncursionCollection-v1+json`
* Industry
* ......[Facility](industry/facilities/IndustryFacilityCollection.md) `application/vnd.ccp.eve.IndustryFacilityCollection-v1+json`
* ......[Systems](industry/systems/IndustrySystemCollection.md) `application/vnd.ccp.eve.IndustrySystemCollection-v1+json`
* inventory
* ......[Categories](inventory/categories/ItemCategoryCollection.md) `application/vnd.ccp.eve.ItemCategoryCollection-v1+json`
* ......[Groups](inventory/groups/ItemGroupCollection.md) `application/vnd.ccp.eve.ItemGroupCollection-v1+json`
* ......[Types](inventory/types/ItemTypeCollection.md) `application/vnd.ccp.eve.ItemTypeCollection-v1+json`
* Market
* ......[Groups](market/groups/MarketGroupCollection.md) `application/vnd.ccp.eve.MarketGroupCollection-v1+json`
* ......[Prices](market/prices/MarketTypePriceCollection.md) `application/vnd.ccp.eve.MarketTypePriceCollection-v1+json`
* ......[Types](market/types/MarketTypeCollection.md) `application/vnd.ccp.eve.MarketTypeCollection-v1+json`
* Opportunity
* ......[Groups](opportunities/groups/OpportunityGroupsCollection.md) `application/vnd.ccp.eve.OpportunityGroupsCollection-v1+json`
* ......[Tasks](opportunities/tasks/OpportunityTasksCollection.md) `application/vnd.ccp.eve.OpportunityTasksCollection-v1+json`
* Planets
* ......[Planet](planets/id/Planet.md) `application/vnd.ccp.eve.Planet-v2+json`
* Sovereignty
* ......[Campaigns](sovereignty/campaigns/SovCampaignsCollection.md) `application/vnd.ccp.eve.SovCampaignsCollection-v1+json`
* ......[Structures](sovereignty/structures/SovStructureCollection.md) `application/vnd.ccp.eve.SovStructureCollection-v1+json`
* Stargates
* ......[Stargate](stargates/3875/Stargate.md) `application/vnd.ccp.eve.Stargate-v1+json`
* Stations
* ......[Station](stations/60000004/Station.md) `application/vnd.ccp.eve.Station-v1+json`
* [Races](races/RaceCollection.md) `application/vnd.ccp.eve.RaceCollection-v3+json`
* [Regions](regions/RegionCollection.md) `application/vnd.ccp.eve.RegionCollection-v1+json`
* [Tournaments](tournaments/TournamentCollection.md) `application/vnd.ccp.eve.TournamentCollection-v1+json`
* ......[Tournament](tournaments/7/Tournament.md) `application/vnd.ccp.eve.Tournament-v1+json`
* ............[Series](tournaments/7/series/TournamentSeriesCollection.md) `application/vnd.ccp.eve.TournamentSeriesCollection-v1+json`
* ..................[Matches](tournaments/7/series/matches/TournamentMatchCollection.md) `application/vnd.ccp.eve.TournamentMatchCollection-v1+json`
* ........................[Match](tournaments/7/series/matches/id/TournamentMatch.md) `application/vnd.ccp.eve.TournamentMatch-v1+json`
* ..............................[Bans](tournaments/7/series/matches/id/bans/TournamentTypeBanCollection.md) `application/vnd.ccp.eve.TournamentTypeBanCollection-v1+json`
* ..............................[Static](tournaments/7/series/matches/id/static/TournamentStaticSceneData.md) `application/vnd.ccp.eve.TournamentStaticSceneData-v2+json`
* ..............................[PilotStats](tournaments/7/series/matches/id/pilotstats/TournamentPilotStatsCollection.md) `application/vnd.ccp.eve.TournamentPilotStatsCollection-v1+json`
* ..............................Realtime
* ....................................[Frame](tournaments/7/series/matches/id/realtime/id/TournamentRealtimeMatchFrame.md) `application/vnd.ccp.eve.TournamentRealtimeMatchFrame-v2+json`
* ............Teams
* ..................[Team](tournaments/7/teams/id/TournamentTeam.md) `application/vnd.ccp.eve.TournamentTeam-v1+json`
* ............[Teams](tournaments/7/teams/TournamentTeamCollection.md) `application/vnd.ccp.eve.TournamentTeamCollection-v1+json`
* ..................[Team](tournaments/7/teams/id/TournamentTeam2.md) `application/vnd.ccp.eve.TournamentTeam2-v1+json`
* ........................[Members](tournaments/7/teams/id/members/TournamentTeamMemberCollection.md) `application/vnd.ccp.eve.TournamentTeamMemberCollection-v1+json`
* [SolarSystems](solarsystems/SystemCollection.md) `application/vnd.ccp.eve.SystemCollection-v1+json`
* [Time](time/Time.md) `application/vnd.ccp.eve.Time-v1+json`
* [Decode](decode/TokenDecode.md) `application/vnd.ccp.eve.TokenDecode-v1+json`
* [Wars](wars/WarsCollection.md) `application/vnd.ccp.eve.WarsCollection-v1+json`
* ......[war](wars/wars/id/War.md) `application/vnd.ccp.eve.War-v1+json`

