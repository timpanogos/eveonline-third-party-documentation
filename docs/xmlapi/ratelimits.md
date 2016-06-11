# Rate Limits
Rate limits are tracked by IP address. Certain endpoints also consider some parameters combined with your IP for rate limiting.

## Limit Overview
- General rate limit: 30 requests per second
- Error rate limit: 300 exceptions per 3 minutes
- Error rate limit ban duration: 15 minutes

## General Rate Limit
The general rate limit is 30 requests per second.

If for some reason you require more than 30 requests per second on the API please feel free to contact us and we can discuss giving you a higher limit.
For the most part very few people should need that, 30 requests per second is a fairly large number.
The white listing is not an excuse for you as a developer being lazy or ignoring the cache timers.

## Error Rate Limit
The error rate limit is a secondary rate limit meant to prevent the abuse of the API.
If your application generates more than 300 exceptions within 3 minutes, you will automatically be banned from the API for 15 minutes.

Any request to the API which does not succeed is considered an exception.
This may happen due to faulty parameters, missing or incorrect authentication, internal API errors or any other reason.
