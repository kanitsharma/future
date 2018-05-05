const iterate = (itr, val) => {
    [itr.next(val)]
    .map(x => (
        !x.done
        ? "then" in x.value
            ? x.value.then(y => iterate(itr, y))
            : setTimeout(_ => iterate(itr, x.value), 0)
        : itr
    ))
}

const a = g => {
    const itr = g()
    iterate(itr)
}

module.exports= a