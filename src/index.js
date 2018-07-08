const iterate = (itr, val) => {
  const res = [itr.next(val)].map(
    x =>
      !x.done
        ? "then" in x.value
          ? x.value.then(y => iterate(itr, y))
          : setTimeout(_ => iterate(itr, x.value), 0)
        : itr
  );
};

const a = g =>
  new Promise((resolve, reject) => {
    const itr = g(resolve, reject);
    iterate(itr);
  });

module.exports = a;
