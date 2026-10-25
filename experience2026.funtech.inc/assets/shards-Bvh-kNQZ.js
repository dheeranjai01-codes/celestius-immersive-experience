import {
    Dt as e,
    Et as t,
    L as n,
    Qn as r,
    St as i,
    Tn as a,
    Tt as o,
    U as s,
    Un as c,
    Y as l,
    Z as u,
    Zn as d,
    it as f,
    j as p,
    ln as m,
    lr as h,
    un as g,
    ut as _,
    vn as v,
    vr as y,
    wt as b,
    yt as x
} from "./post-DJ5SZDIO.js";
import {
    d as S,
    f as C,
    v as w
} from "./kit-D_lqBZ3L.js";
import {
    a as T,
    i as E,
    o as D,
    r as O
} from "./plates-CXqkOo0_.js";
var k = Math.PI * 2;

function A(e = 1) {
    let t = e >>> 0 || 1;
    return () => (t ^= t << 13, t >>>= 0, t ^= t >>> 17, t ^= t << 5, t >>>= 0, t / 4294967296)
}

function j(e, t, n, r, i, a, o) {
    let s = [],
        c = [],
        l = e.length;
    for (let u = 0; u < l; u++) {
        let d = e[u],
            f = e[(u + 1) % l],
            p = (d[0] - n) * i + (d[1] - r) * a,
            m = (f[0] - n) * i + (f[1] - r) * a,
            h = p <= 0,
            g = m <= 0;
        if (h && g) s.push(d), c.push(t[u]);
        else if (h && !g) {
            let e = p / (p - m);
            s.push(d), c.push(t[u]), s.push([d[0] + (f[0] - d[0]) * e, d[1] + (f[1] - d[1]) * e]), c.push(o)
        } else if (!h && g) {
            let e = p / (p - m);
            s.push([d[0] + (f[0] - d[0]) * e, d[1] + (f[1] - d[1]) * e]), c.push(t[u])
        }
    }
    return [s, c]
}
var M = e => {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = e[(n + 1) % e.length];
        t += r[0] * i[1] - i[0] * r[1]
    }
    return t / 2
};

function N(e) {
    let t = 0,
        n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let a = e[i],
            o = e[(i + 1) % e.length],
            s = a[0] * o[1] - o[0] * a[1];
        r += s, t += (a[0] + o[0]) * s, n += (a[1] + o[1]) * s
    }
    return r *= .5, Math.abs(r) < 1e-12 ? [e[0][0], e[0][1]] : [t / (6 * r), n / (6 * r)]
}

function P(e, t, n, r) {
    let i = r[0] - n[0],
        a = r[1] - n[1],
        o = i * i + a * a || 1e-12,
        s = Math.max(0, Math.min(1, ((e - n[0]) * i + (t - n[1]) * a) / o));
    return Math.hypot(n[0] + i * s - e, n[1] + a * s - t)
}

function F(e = {}) {
    let t = I(e),
        n = t.next();
    for (; !n.done;) n = t.next();
    return n.value
}

function* I({
    w: e = 1,
    h: t = 1,
    ix: n = .5,
    iy: r = .5,
    seed: i = 7,
    rays: a = 9,
    r0: o = .03,
    growth: s = 1.4,
    branch: c = [2, 4, 7],
    wobble: l = .05,
    jitterA: u = .35,
    jitterR: d = .22,
    core: f = 7,
    coreR: p = .6
} = {}) {
    let m = A(i),
        h = Math.max(Math.hypot(n, r), Math.hypot(e - n, r), Math.hypot(n, t - r), Math.hypot(e - n, t - r)) * 1.08,
        g = [],
        _ = m() * k;
    for (let e = 0; e < a; e++) g.push(_ + (e + (m() - .5) * u) / a * k);
    let v = [],
        y = [],
        b = o,
        x = 0;
    for (; b < h * 1.25;) {
        if (x > 0 && (g = g.map(e => e + (m() - .5) * l * 2), c.includes(x))) {
            let e = [];
            for (let t = 0; t < g.length; t++) {
                let n = g[t],
                    r = t + 1 < g.length ? g[t + 1] : g[0] + k;
                e.push(n), r - n > .16 && e.push(n + (r - n) * (.32 + m() * .36))
            }
            g = e
        }
        for (let e = 0; e < g.length; e++) {
            let t = g[e],
                i = e + 1 < g.length ? g[e + 1] : g[0] + k,
                a = (t + i) / 2 + (m() - .5) * (i - t) * .12,
                o = b * (1 + (m() - .5) * 2 * d * (1 - 1 / s));
            v.push([n + Math.cos(a) * o, r + Math.sin(a) * o]), y.push(x)
        }
        b *= s * (1 + (m() - .5) * .12), x++
    }
    for (let e = 0; e < f; e++) {
        let e = m() * k,
            t = o * p * Math.sqrt(m());
        v.push([n + Math.cos(e) * t, r + Math.sin(e) * t]), y.push(-1)
    }
    let S = [],
        C = v.length,
        w = new Float64Array(C),
        T = 1 / 0,
        E = 1 / 0,
        D = -1 / 0,
        O = -1 / 0;
    for (let e of v) T = Math.min(T, e[0]), E = Math.min(E, e[1]), D = Math.max(D, e[0]), O = Math.max(O, e[1]);
    let F = Math.max(.001, Math.sqrt((D - T) * (O - E) / Math.max(1, C)) * 1.2),
        I = Math.max(1, Math.ceil((D - T) / F) + 1),
        L = Math.max(1, Math.ceil((O - E) / F) + 1),
        R = new Int32Array(I * L).fill(-1),
        z = new Int32Array(C);
    for (let e = 0; e < C; e++) {
        let t = Math.min(L - 1, Math.floor((v[e][1] - E) / F)) * I + Math.min(I - 1, Math.floor((v[e][0] - T) / F));
        z[e] = R[t], R[t] = e
    }
    let B = [],
        V = (e, t) => w[e] - w[t],
        H = (e, t) => {
            let n = 0;
            for (let r of e) n = Math.max(n, (r[0] - t[0]) ** 2 + (r[1] - t[1]) ** 2);
            return n
        };
    for (let i = 0; i < C; i++) {
        i % 48 == 47 && (yield);
        let a = v[i],
            o = [
                [0, 0],
                [e, 0],
                [e, t],
                [0, t]
            ],
            s = [-1, -2, -3, -4],
            c = F * 1.5,
            l = -1,
            u = !0;
        for (; u;) {
            B.length = 0;
            let e = Math.max(0, Math.floor((a[0] - c - T) / F)),
                t = Math.min(I - 1, Math.floor((a[0] + c - T) / F)),
                n = Math.max(0, Math.floor((a[1] - c - E) / F)),
                r = Math.min(L - 1, Math.floor((a[1] + c - E) / F));
            for (let o = n; o <= r; o++)
                for (let n = e; n <= t; n++)
                    for (let e = R[o * I + n]; e >= 0; e = z[e]) {
                        if (e === i) continue;
                        let t = (v[e][0] - a[0]) ** 2 + (v[e][1] - a[1]) ** 2;
                        t <= c * c && (l < 0 || t > l * l) && (w[e] = t, B.push(e))
                    }
            B.sort(V);
            for (let e of B) {
                if (w[e] > 4 * H(o, a)) {
                    u = !1;
                    break
                }
                let t = v[e];
                if ([o, s] = j(o, s, (a[0] + t[0]) / 2, (a[1] + t[1]) / 2, t[0] - a[0], t[1] - a[1], e), !o.length) {
                    u = !1;
                    break
                }
            }
            if (!u || 4 * H(o, a) <= c * c || e === 0 && n === 0 && t === I - 1 && r === L - 1) break;
            l = c, c *= 2
        }
        if (o.length < 3) {
            S.push(null);
            continue
        }
        let d = Math.abs(M(o));
        if (d < 1e-9) {
            S.push(null);
            continue
        }
        let f = N(o),
            p = 1 / 0,
            h = 0;
        for (let e = 0; e < o.length; e++) p = Math.min(p, P(n, r, o[e], o[(e + 1) % o.length])), h = Math.max(h, Math.hypot(o[e][0] - n, o[e][1] - r));
        let g = !0;
        for (let e = 0; e < o.length; e++) {
            let t = o[e],
                i = o[(e + 1) % o.length];
            if ((i[0] - t[0]) * (r - t[1]) - (i[1] - t[1]) * (n - t[0]) < 0) {
                g = !1;
                break
            }
        }
        S.push({
            id: i,
            poly: o,
            labels: s,
            c: f,
            d: Math.hypot(f[0] - n, f[1] - r),
            dMin: g ? 0 : p,
            dMax: h,
            area: d,
            ring: y[i],
            rand: m(),
            rand2: m(),
            rand3: m()
        })
    }
    let U = [];
    for (let e of S) {
        if (!e) continue;
        let t = e.poly,
            i = e.labels;
        for (let a = 0; a < t.length; a++) {
            let o = i[a];
            if (o < 0 || o < e.id || !S[o]) continue;
            let s = t[a],
                c = t[(a + 1) % t.length],
                l = Math.hypot(c[0] - s[0], c[1] - s[1]);
            if (l < 1e-6) continue;
            let u = (s[0] + c[0]) / 2 - n,
                d = (s[1] + c[1]) / 2 - r,
                f = Math.abs(((c[0] - s[0]) * u + (c[1] - s[1]) * d) / (l * (Math.hypot(u, d) || 1))),
                p = Math.hypot(s[0] - n, s[1] - r),
                h = Math.hypot(c[0] - n, c[1] - r),
                [g, _] = p <= h ? [s, c] : [c, s];
            U.push({
                a: g,
                b: _,
                i: e.id,
                j: o,
                len: l,
                dMin: P(n, r, s, c),
                dMax: Math.max(p, h),
                radial: f,
                w: .65 + m() * .7,
                br: .55 + m() * .45,
                ph: m()
            })
        }
    }
    return {
        w: e,
        h: t,
        ix: n,
        iy: r,
        cells: S,
        edges: U
    }
}

function L(e, t, n, r, i) {
    let a = t[0] - e[0],
        o = t[1] - e[1],
        s = e[0] - n,
        c = e[1] - r,
        l = a * a + o * o,
        u = 2 * (s * a + c * o),
        d = s * s + c * c - i * i;
    if (l < 1e-12) return d <= 0 ? [0, 1] : null;
    let f = u * u - 4 * l * d;
    if (f < 0) return null;
    let p = Math.sqrt(f),
        m = Math.max(0, (-u - p) / (2 * l)),
        h = Math.min(1, (-u + p) / (2 * l));
    return h > m ? [m, h] : null
}

function R(e, t, n) {
    let {
        w: r,
        h: i,
        ix: a,
        iy: o
    } = e, s = t.getContext(`2d`), c = t.width, l = t.height, u = c / r, d = l / i;
    s.setTransform(1, 0, 0, 1, 0, 0), s.globalCompositeOperation = `source-over`, n.over || (s.fillStyle = `#000`, s.fillRect(0, 0, c, l));
    let f = n.gone ? ? new Set;
    if (n.haze > 0) {
        let e = n.core * u,
            t = s.createRadialGradient(a * u, o * d, 0, a * u, o * d, e * 3.2);
        t.addColorStop(0, `rgba(255,255,255,${.9*n.haze})`), t.addColorStop(.25, `rgba(255,255,255,${.35*n.haze})`), t.addColorStop(1, `rgba(255,255,255,0)`), s.fillStyle = t, s.fillRect(0, 0, c, l)
    }
    s.lineCap = `round`, s.lineJoin = `round`, s.globalCompositeOperation = `lighter`;
    for (let t of e.edges) {
        if (t.keep === !1) continue;
        let e = f.has(t.i),
            r = f.has(t.j);
        if (e && r) continue;
        let i = t.radial > .62 ? n.rr : n.rc,
            c = L(t.a, t.b, a, o, i);
        if (!c) continue;
        let l = t.a[0] + (t.b[0] - t.a[0]) * c[0],
            p = t.a[1] + (t.b[1] - t.a[1]) * c[0],
            m = t.a[0] + (t.b[0] - t.a[0]) * c[1],
            h = t.a[1] + (t.b[1] - t.a[1]) * c[1],
            g = Math.exp(-t.dMin / .18),
            _ = n.lineW * t.w * (.7 + 1.5 * g) * (t.radial > .62 ? 1 : .8) * (e || r ? 1.5 : 1),
            v = Math.round(255 * Math.min(1, t.br * (.75 + .5 * g)));
        s.strokeStyle = `rgba(${v},${v},${v},0.18)`, s.lineWidth = _ * 3.2, s.beginPath(), s.moveTo(l * u, p * d), s.lineTo(m * u, h * d), s.stroke(), s.strokeStyle = `rgb(${v},${v},${v})`, s.lineWidth = _, s.beginPath(), s.moveTo(l * u, p * d), s.lineTo(m * u, h * d), s.stroke()
    }
    if (n.core > 0) {
        s.fillStyle = `rgba(255,255,255,0.9)`;
        let e = A(99),
            t = n.chips ? ? 40;
        for (let r = 0; r < t; r++) {
            let t = e() * k,
                r = Math.sqrt(e()) * n.core * 1.1,
                i = (1 + e() * 2.5) * (c / 2048);
            s.fillRect((a + Math.cos(t) * r) * u, (o + Math.sin(t) * r) * d, i, i)
        }
    }
    s.globalCompositeOperation = `source-over`
}

function z(e) {
    let t = new v(new Float32Array(e * 2 * 4), e, 2, r, a);
    return t.minFilter = t.magFilter = c, t.generateMipmaps = !1, t.needsUpdate = !0, t
}

function B(e) {
    let t = p(`sid`, `float`),
        r = S(t.add(.5)),
        i = w(e, C(r, S(0))),
        a = w(e, C(r, S(1))),
        o = e => {
            let t = n(a.xyz, e).mul(2);
            return e.add(t.mul(a.w)).add(n(a.xyz, t))
        };
    return {
        position: o(p(`position`, `vec3`).mul(i.w)).add(i.xyz),
        normal: b(f(o(p(`normal`, `vec3`)))),
        edge: p(`edge`, `float`),
        side: p(`side`, `float`),
        uvp: p(`uv`, `vec2`),
        sid: t,
        cellv: p(`cellv`, `float`)
    }
}

function V(e, t, n, r, i = () => !0, a = () => 0, o) {
    let s = e.filter(e => !!e && i(e)),
        c = 0;
    for (let e of s) c += e.poly.length * 12;
    let l = new Float32Array(c * 3),
        u = new Float32Array(c * 3),
        f = new Float32Array(c * 2),
        p = new Float32Array(c),
        _ = new Float32Array(c),
        v = new Float32Array(c),
        b = new Float32Array(c),
        x = [],
        S = 0,
        C = (e, t, n, r, i, a, o, s, c, d, m, h) => {
            l[S * 3] = e, l[S * 3 + 1] = t, l[S * 3 + 2] = n, u[S * 3] = r, u[S * 3 + 1] = i, u[S * 3 + 2] = a, f[S * 2] = o, f[S * 2 + 1] = s, p[S] = c, _[S] = d, v[S] = m, b[S] = h, S++
        },
        w = (e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) => {
            let y = r - e,
                b = i - t,
                x = a - n,
                S = o - e,
                w = s - t,
                T = c - n,
                E = (b * T - x * w) * l + (x * S - y * T) * u + (y * w - b * S) * d;
            C(e, t, n, l, u, d, f[0], f[1], h, g, _, v), E >= 0 ? (C(r, i, a, l, u, d, p[0], p[1], 0, g, _, v), C(o, s, c, l, u, d, m[0], m[1], 0, g, _, v)) : (C(o, s, c, l, u, d, m[0], m[1], 0, g, _, v), C(r, i, a, l, u, d, p[0], p[1], 0, g, _, v))
        };
    s.forEach((e, i) => {
        let o = e.poly.length,
            s = new Float32Array(o * 3),
            c = Array(o),
            l = 0,
            u = 0,
            f = 0,
            [p] = t(e.c[0], e.c[1]);
        for (let r = 0; r < o; r++) {
            let [i, a] = e.poly[r], [o, d] = t(i, a);
            s[r * 3] = o.x - p.x, s[r * 3 + 1] = o.y - p.y, s[r * 3 + 2] = o.z - p.z, l += d.x, u += d.y, f += d.z, c[r] = n(i, a)
        }
        let m = Math.hypot(l, u, f) || 1,
            h = l / m,
            g = u / m,
            _ = f / m,
            v = n(e.c[0], e.c[1]),
            b = a(e),
            S = typeof r == `number` ? r : r(e),
            C = -h * S,
            T = -g * S,
            E = -_ * S;
        for (let e = 0; e < o; e++) {
            let t = (e + 1) % o,
                n = s[e * 3],
                r = s[e * 3 + 1],
                a = s[e * 3 + 2],
                l = s[t * 3],
                u = s[t * 3 + 1],
                d = s[t * 3 + 2],
                f = c[e],
                p = c[t];
            w(0, 0, 0, n, r, a, l, u, d, h, g, _, v, f, p, 1, 0, i, b), w(C, T, E, l + C, u + T, d + E, n + C, r + T, a + E, -h, -g, -_, v, p, f, 1, 0, i, b);
            let m = l - n,
                y = u - r,
                x = d - a,
                S = y * _ - x * g,
                D = x * h - m * _,
                O = m * g - y * h,
                k = Math.hypot(S, D, O) || 1;
            S /= k, D /= k, O /= k, S * (n + l) + D * (r + u) + O * (a + d) < 0 && (S = -S, D = -D, O = -O), w(n, r, a, n + C, r + T, a + E, l, u, d, S, D, O, f, f, p, 0, 1, i, b), w(l, u, d, n + C, r + T, a + E, l + C, u + T, d + E, S, D, O, p, f, p, 0, 1, i, b)
        }
        let D = new y(h, g, _);
        x.push({
            id: i,
            cell: e,
            p0: p.clone(),
            n0: D,
            p: p.clone(),
            v: new y,
            q: new d,
            w: new y,
            scale: 1,
            visible: !1,
            landed: !1,
            r: Math.sqrt(e.area),
            delay: 0,
            data: {}
        })
    });
    let T = new g;
    T.setAttribute(`position`, new m(l, 3)), T.setAttribute(`normal`, new m(u, 3)), T.setAttribute(`uv`, new m(f, 2)), T.setAttribute(`edge`, new m(p, 1)), T.setAttribute(`side`, new m(_, 1)), T.setAttribute(`sid`, new m(v, 1)), T.setAttribute(`cellv`, new m(b, 1)), T.boundingSphere = new h(new y, 1e4);
    let E = x.length;
    if (o && o.image.width < E) throw Error(`shard texture too small: ${o.image.width} < ${E}`);
    let D = o ? ? z(Math.max(1, E)),
        O = D.image.data,
        k = D.image.width,
        A = {
            geometry: T,
            tex: D,
            bodies: x,
            node: B(D),
            reset() {
                for (let e of x) e.p.copy(e.p0), e.v.set(0, 0, 0), e.q.identity(), e.w.set(0, 0, 0), e.scale = 1, e.visible = !1, e.landed = !1;
                A.upload()
            },
            upload() {
                for (let e of x) {
                    let t = e.id * 4,
                        n = (k + e.id) * 4;
                    O[t] = e.p.x, O[t + 1] = e.p.y, O[t + 2] = e.p.z, O[t + 3] = e.visible ? e.scale : 0, O[n] = e.q.x, O[n + 1] = e.q.y, O[n + 2] = e.q.z, O[n + 3] = e.q.w
                }
                D.needsUpdate = !0
            },
            dispose() {
                T.dispose(), o || D.dispose()
            }
        };
    return A.reset(), A
}
var H = i(E(`web`, 2800, .4)),
    U = i(T(`web`)),
    W = i(E(`dust`, 3600, -.7)),
    G = i(T(`dust`));

function K(n, r) {
    let i = n.node.normal,
        a = r.view,
        c = i.dot(a).abs().clamp(0, 1),
        d = s(1).sub(c).pow(3).mul(.9).add(.06),
        p = i.dot(f(a.add(r.key))).abs().clamp(0, 1).pow(90),
        m = s(1).sub(n.node.edge).pow(14).mul(s(1).sub(n.node.side)).add(n.node.side.mul(.55)),
        h = t(r.tint).mul(s(r.base ? ? .04).add(d.mul(.7))).add(t(1, .98, .95).mul(p.mul(1.2))).add(t(.9, 1, .97).mul(m.mul(r.edgeGain ? ? .9))),
        g = s(0);
    if (r.plates) {
        let e = r.plates,
            i = n.node.uvp.mul(o(e.fw, 1)).sub(o(e.imp[0], e.imp[1])),
            a = l(O(e.web, D(i, H, U)), O(e.dust, D(i, W, G)).mul(.9));
        g = _(a, 1.2), h = h.add(t(.85, .92, 1).mul(g.mul(1.1)))
    }
    let v = r.camDist ? x(.18, .7, r.camDist) : s(1);
    return e(h.min(t(.97)), u(s(.06), s(.7), d.max(m.mul(.7)).max(p).max(g.mul(.8))).mul(v))
}
export {
    L as a, R as c, z as i, K as n, I as o, B as r, F as s, V as t
};