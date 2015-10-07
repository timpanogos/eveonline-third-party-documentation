# Warp-in Points

A warp-in point is where your ship will land in space when warping to an object.

Many external factors may disrupt a warp, e.g. warp disruption fields, insufficient electrical capacity, warp jitter, etc.; these formulas do not account for these phenomenas, they assume perfect conditions.

## Ordinary Objects

An ordinary object is any object that does not fall withing any of the other categories described below.

Let the 3D vectors \(p_d\) and \(p_s\) represent the object's position and the warp's origin, respectively; and \(\vec{v}\) the directional vector from \(p_s\) to \(p_d\). Let \(r\) be the object's radius.

The object's warp-in point is the vector \(p_s + \vec{v} - r\hat{v}\).

## Large Objects

A large object is any celestial body whose radius exceeds 90 kilometres (180 kilometres in diameter), except planets.

Let \(x\), \(y\), and \(z\) represent the object's coordinates. Let \(r\) be the object's radius.

The object's warp-in point is the vector
\(\left(x + (r + 5000000)\cos{r} \\,
  y + 1.3r - 7500 \\,
  z - (r + 5000000)\sin{r} \\\right).\)

## Planets

The warp-in point of a planet is determined by the planet's ID, its location, and radius.

Let \(x\), \(y\), and \(z\) represent the planet's coordinates. Let \(r\) be the planet's radius.

The planet's warp-in point is the vector
\(\left(d \sin{\theta},
  \frac{1}{2} r \sin{j},
  d \cos{\theta}\right)\)
where:

$$ d = r(s + 1) + 1000000 $$

$$ \theta = j - \sin^{-1}\left(\frac{x}{|x|} \cdot \frac{z}{\sqrt{x^2 + z^2}}\right) $$

$$ s|_{0.5 \leq s \leq 10.5} = 20\left(\frac{1}{40}\left(10\log_{10}\left(\frac{r}{10^6}\right) - 39\right)\right)^{20} + \frac{1}{2} $$

Now, \(j\) is a special case. Its value is the Python equivalent of
`(random.Random(planetID).random() - 1.0) / 3.0`.
