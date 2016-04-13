# Combat

## Target lock time

The target lock time (`$ t_{targetlock} $`) in seconds depends on the ship's scan resolution (`$ s $`) and the target's signature radius (`$ r $`)

```math
t_{targetlock} = {40000 \over s \cdot asinh(r)^2}
```

## Alignment time

The ship alignment time (`$ t_{align} $`) depends on the ship's inertia modifier (`$ i $`) and the ships mass (`$ m $`) 

```math
t_{align} = { ln(2) \cdot i \cdot m \over 500000 }
```
