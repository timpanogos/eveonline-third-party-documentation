# Caching
Cache timers listed on endpoint pages may not be 100% accurate and shouldn't be used in your application. Instead, you should read the cachedUntil values returned in every response, and obey them to the best of your ability. This is generally best accomplished with some kind of local caching mechanism.

## Very long cache timers
Some endpoints, most notably [ContractItems](character/char_contractitems.md) and [MailBodies](character/char_mailbodies.md) have very long cache timers (10 years). The reason for such long cache timers is the fact that their contents never change (once a contract is created or a mail sent, it cannot be edited), so in theory they can be cached forever. In the past, this has caused [some problems](https://developers.eveonline.com/blog/article/cache-timer-for-skilltree-reduced-1) when present on endpoints whose contents actually change from time to time.

If you are making lots of requests to those endpoints, locally caching the responses may take up a lot of space, so you might want to implement some kind of garbage collection to prevent them from filling up all available storage.
