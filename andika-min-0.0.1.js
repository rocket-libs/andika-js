const _0x2a83d8 = _0x24cb;
function _0x24cb(t, e) {
  const n = _0x52c2();
  return (_0x24cb = function (t, e) {
    return n[(t -= 385)];
  })(t, e);
}
!(function (t, e) {
  const n = _0x24cb,
    o = _0x52c2();
  for (;;)
    try {
      if (
        410182 ===
        (-parseInt(n(391)) / 1) * (-parseInt(n(387)) / 2) +
          parseInt(n(403)) / 3 +
          parseInt(n(385)) / 4 +
          (-parseInt(n(400)) / 5) * (-parseInt(n(402)) / 6) +
          parseInt(n(392)) / 7 +
          -parseInt(n(399)) / 8 +
          (-parseInt(n(414)) / 9) * (parseInt(n(418)) / 10)
      )
        break;
      o.push(o.shift());
    } catch (t) {
      o.push(o.shift());
    }
})();
const _0x53e191 = document.getElementById(_0x2a83d8(413)),
  _0x5b5978 = JSON[_0x2a83d8(419)](_0x53e191.value);
function _0x3f00be() {
  const t = _0x2a83d8;
  try {
    _0xd5a9f2();
  } catch (e) {
    const n = _0x265b87(document, t(396));
    if (!n) throw e;
    {
      const o = document.createElement(t(404));
      o.setAttribute("style", t(389)),
        (o[t(397)] = e + ""),
        n.appendChild(o),
        console[t(398)](e);
    }
  }
}
function _0xd5a9f2() {
  const t = _0x2a83d8;
  for (var e in _0x5b5978)
    if (_0x5b5978[t(408)](e) && typeof _0x5b5978[e] !== t(412)) {
      const n = document[t(388)](e);
      if (n) {
        const o = Reflect.get(_0x5b5978, e) ?? "";
        Array.isArray(o) ? _0xe9fb8(e, o) : (n[t(397)] = o);
      } else console.warn(t(407));
    }
}
function _0xe9fb8(t, e) {
  const n = _0x2a83d8;
  if (!e || 0 === e[n(401)]) return void console[n(410)](n(405) + t + n(395));
  const o = document[n(388)](t);
  if (!o || !1 === _0x4b130f(o, n(417))) throw new Error(n(411) + t + n(416));
  for (let t = 0; t < o[n(393)].length; t++)
    if (_0x4b130f(o[n(393)][t], "tr")) {
      return void _0xdac9c8(o, o[n(393)][t], e);
    }
  throw new Error("Found tbody tag with id " + t + n(390));
}
function _0x52c2() {
  const t = [
    "color:#870000; background:#f5a6a6; padding:7px; border-radius:10px;",
    " but no template row. Please add a tr with child td tags that match the property names of the elements of the array",
    "18sKsxsS",
    "5673507GDsrjZ",
    "childNodes",
    "appendChild",
    "' has no data.",
    "body",
    "innerHTML",
    "error",
    "2015256ZRmJNb",
    "115KWTiUo",
    "length",
    "111966ONVeru",
    "2429772lEyimc",
    "div",
    "Array with key '",
    "toLocaleLowerCase",
    "Could not find an element with id '{key}'. A value might not be populated",
    "hasOwnProperty",
    "tagName",
    "warn",
    "Expected to find tbody tag with id '",
    "function",
    "json",
    "17105004wxpKAP",
    "get",
    "' but it is missing. Cannot tabulate data.",
    "tbody",
    "10wGDVtk",
    "parse",
    "531644IwUYVO",
    "cloneNode",
    "42234cEqSjS",
    "getElementById",
  ];
  return (_0x52c2 = function () {
    return t;
  })();
}
function _0xdac9c8(t, e, n) {
  const o = _0x2a83d8;
  for (let r = 0; r < n.length; r++) {
    const a = n[r],
      c = e[o(386)]();
    for (let t = 0; t < e.childNodes[o(401)]; t++) {
      const n = e[o(393)][t];
      if ((n.id && _0x4b130f(n, "td")) || _0x4b130f(n, "th")) {
        const t = a[o(408)](n.id),
          e = n.cloneNode();
        (e.id = "" + e.id + r),
          t && (e.innerHTML = Reflect[o(415)](a, n.id) ?? ""),
          c[o(394)](e);
      }
    }
    t[o(394)](c);
  }
  e.remove();
}
function _0x265b87(t, e) {
  const n = _0x2a83d8;
  if (!t) return null;
  if (_0x4b130f(t, e)) return t;
  for (let o = 0; o < t.childNodes.length; o++) {
    const r = _0x265b87(t[n(393)][o], e);
    if (r) return r;
  }
  return null;
}
function _0x4b130f(t, e) {
  const n = _0x2a83d8;
  return (
    !!(t && t.tagName && e) && t[n(409)][n(406)]() === e.toLocaleLowerCase()
  );
}
_0x3f00be();
