# API Walking

## Journal Walking
Corporation and character journals are configured to provide up to one month of data. 
Since each journal request returns at most 2560 entries, you may need to "walk" the journal forward or backward to retrieve all entries for a given month.
Journal walking is based on a reference ID (wallet journal) or transaction ID (wallet transactions) which is used to bound the journal entries or transactions returned by an API call.
**Note**: the sort order for the rows returned by a journal API call is undefined.  More often than not, the rows will be ordered "new to old", but this can't be relied upon for determining the minimum or maximum ID for journal walking.

### Walking Forward
Walking forward is normally done by omitting the "fromID" parameter from a journal API call.  That is, walking forward occurs automatically with each new request that does not specify a fromID.

### Walking Backward
Walking backward is normally performed by setting "fromID" to the lowest reference ID (wallet journal) or transaction ID (wallet transaction) from your previous journal API request.
You will then receive the latest journal entries or transactions prior to "fromID".  You can not walk backwards more than one month.

### Journal Walking Pseudo-Code
The following pseudo-code illustrates a simple way to implement journal walking to collect all entries for a given month:

```erlang
  let entries = []
  let next = get_entries(limit=2560)
  while (next.size > 0)
    entries += next
    next = get_entries(limit=2560)
  let from = minID(entries)
  next = get_entries(limit=2560, fromID=from)
  while (next.size > 0)
    entries += next
    from = min(from, minID(next))
    next = get_entries(limit=2560, fromID=from)
```
