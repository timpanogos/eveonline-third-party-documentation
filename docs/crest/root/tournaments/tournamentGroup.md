# application/vnd.ccp.eve.Tournament`*`-v`*`+json

## Description

>Back in the day (by which I mean late 2013), CCP provided a neat-o set of endpoints that allowed CREST developers to request tick-by-tick gameplay recordings of Alliance Tournament matches, and create visualisation tools to reconstruct and play back AT matches. This functionality broke in early 2014, and has been unusable for two years. They're now back online and ready for use in Alliance Tournament XIV! You can also retrieve the replay data from tournaments that ran while the endpoint was non-operational, for your viewing pleasure.
-CCP Bartender  


The `/tournaments/` route off of the CREST root URL is the base route for eleven unique endpoint data structures which are documented under this group.

## Navigation 
* [back](../index.md)
* [tournaments](tournamentCollection.md) `/tournaments/`
* [tournament](tournament.md) `/tournaments/<Long:tournamentId>/`
* [series](tournamentSeries.md) `/tournaments/<Long:tournamentId>/series/`
(TBD the following bullets links)
* bans `/tournaments/<Long:tournamentId>/series/<LongseriesID:seriesIdType>/bans/`
* matches    `/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/`
* match      `/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matchId>/`
* static     `/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matchId>/static/`
* pilotStats `/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matcheId>/pilotstats/`
* frame      `/tournaments/<Long:tournamentId>/series/<Long:seriesId>/matches/<Long:matchId>/realtime/<Long:frameId>/`
* teamStats  `/tournaments/<Long:tournamentId>/teams/<Long:teamId>/`
* teams      `/tournaments/teams/<Long: teamId>/`
* members    `/tournaments/teams/<Long:teamId>/members/`

  

