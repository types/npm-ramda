Takes a function and two values in its domain and returns `true` if the
values map to the same value in the codomain; `false` otherwise.

@func
@memberOf R
@since v0.18.0
@category Relation
@sig (a -> b) -> a -> a -> Boolean
@param {Function} f
@param {*} x
@param {*} y
@return {Boolean}
@example

     R.eqBy(Math.abs, 5, -5); //=> true