import {
    I as e,
    Tt as t,
    U as n,
    _r as r,
    bt as i,
    mn as a,
    vt as o,
    w as s,
    xt as c,
    yr as l,
    yt as u
} from "./post-DJ5SZDIO.js";
var d = {
    web: {
        path: `gen/breakout/glass_web.webp`,
        c: [2052, 1104],
        size: [4096, 2286]
    },
    dust: {
        path: `gen/breakout/glass_dust.webp`,
        c: [2065, 1160],
        size: [4096, 2731]
    },
    burst: {
        path: `gen/breakout/glass_burst.webp`,
        c: [2030, 1140],
        size: [4096, 2286]
    }
};
async function f(e, t) {
    let n = await e.texture(d[t].path, {
        srgb: !1,
        channels: 1,
        anisotropy: 8
    });
    return n.wrapS = n.wrapT = a, n
}
var p = (e, t, n = 0) => new l(d[e].c[0], d[e].c[1], t, n),
    m = e => new r(d[e].size[0], d[e].size[1]);

function h(r, i, a) {
    let s = e(i.w),
        c = o(i.w),
        l = t(s.mul(r.x).sub(c.mul(r.y)), c.mul(r.x).add(s.mul(r.y))),
        u = i.xy.add(l.mul(i.z));
    return t(u.x.div(a.x), n(1).sub(u.y.div(a.y)))
}

function g(e, t) {
    let n = i(0, t.x).mul(i(t.x, 1)).mul(i(0, t.y)).mul(i(t.y, 1));
    return c(e, t).r.mul(n)
}

function _(r, i, a, c, l = 2) {
    return s(() => {
        let s = t(n(l).div(c.x), 0),
            u = t(0, n(l).div(c.y)),
            d = g(r, i.add(s)).sub(g(r, i.sub(s))),
            f = g(r, i.add(u)).sub(g(r, i.sub(u))),
            p = t(d, f.negate()),
            m = e(a.w),
            h = o(a.w);
        return t(m.mul(p.x).add(h.mul(p.y)), h.negate().mul(p.x).add(m.mul(p.y)))
    })()
}
var v = (e, t) => n(1).sub(u(e.mul(.8).sub(.01), e, t));
export {
    m as a, p as i, _ as n, h as o, g as r, v as s, f as t
};