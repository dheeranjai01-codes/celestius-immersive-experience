import {
    $ as e,
    At as t,
    B as n,
    Bn as r,
    Bt as i,
    Ct as a,
    Dn as o,
    Dt as s,
    Et as c,
    Ft as l,
    G as u,
    H as d,
    Ht as f,
    I as p,
    Jt as m,
    Lt as h,
    Nt as g,
    O as _,
    P as v,
    Pt as y,
    Qn as b,
    Sn as x,
    St as S,
    Tn as C,
    U as w,
    Un as T,
    Vn as E,
    W as D,
    Y as O,
    Z as ee,
    _r as k,
    _t as A,
    at as te,
    bn as ne,
    bt as j,
    en as M,
    g as re,
    hn as ie,
    it as N,
    j as P,
    jt as F,
    kn as ae,
    ln as I,
    lr as oe,
    mt as se,
    n as ce,
    ot as le,
    pt as ue,
    q as L,
    qn as de,
    qt as fe,
    r as pe,
    rr as me,
    rt as he,
    s as ge,
    sn as R,
    sr as _e,
    t as ve,
    tr as ye,
    un as be,
    vn as xe,
    vr as z,
    vt as Se,
    wn as Ce,
    wt as we,
    x as B,
    xt as V,
    yr as H,
    yt as U,
    zn as W
} from "./post-DJ5SZDIO.js";
import {
    d as Te,
    s as G,
    u as Ee
} from "./index-BSu4tWCh.js";
import {
    _ as De,
    a as Oe,
    c as ke,
    f as Ae,
    l as je,
    m as Me,
    o as Ne,
    p as Pe,
    r as Fe,
    s as Ie,
    t as Le,
    u as Re,
    v as ze,
    y as Be
} from "./kit-D_lqBZ3L.js";
import {
    i as Ve,
    n as He,
    r as Ue,
    t as We
} from "./white-ClVCx_SB.js";
async function Ge(e) {
    let [t, n] = await Promise.all([e.json(`gen/logo/logo.json`), e.binary(`gen/logo/logo.bin`), B.ready]), r = new Uint8Array(n), i = t.vertices, a = t.indices, o = t.bytes, s = new Uint8Array(i * 8), c = new Uint8Array(i * 4), l = new Uint8Array(a * 2), u = 0;
    B.decodeVertexBuffer(s, i, 8, r.subarray(u, u + o.pos)), u += o.pos, B.decodeVertexBuffer(c, i, 4, r.subarray(u, u + o.nor), `OCTAHEDRAL`), u += o.nor, B.decodeIndexBuffer(l, a, 2, r.subarray(u, u + o.idx));
    let d = new Uint16Array(s.buffer),
        f = new Int8Array(c.buffer),
        p = new Uint16Array(l.buffer),
        m = new Float32Array(i * 3),
        h = new Float32Array(i * 3),
        g = new Float32Array(i),
        _ = t.min,
        v = t.max;
    for (let e = 0; e < i; e++) {
        for (let t = 0; t < 3; t++) m[e * 3 + t] = _[t] + d[e * 4 + t] / 65535 * (v[t] - _[t]);
        g[e] = d[e * 4 + 3];
        let t = f[e * 4] / 127,
            n = f[e * 4 + 1] / 127,
            r = f[e * 4 + 2] / 127,
            i = Math.hypot(t, n, r) || 1;
        h[e * 3] = t / i, h[e * 3 + 1] = n / i, h[e * 3 + 2] = r / i
    }
    let y = new be;
    y.setAttribute(`position`, new I(m, 3)), y.setAttribute(`normal`, new I(h, 3)), y.setAttribute(`shell`, new I(g, 1)), y.setIndex(new I(p, 1)), y.boundingBox = new R(new z(..._), new z(...v)), y.boundingSphere = y.boundingBox.getBoundingSphere(new oe);
    let b = t.shells,
        x = new Uint32Array(b.length);
    for (let e = 0; e < a; e += 3) x[g[p[e]]]++;
    let S = b.map((e, t) => new Uint32Array(x[t])),
        C = new Uint32Array(b.length);
    for (let e = 0; e < a; e += 3) {
        let t = g[p[e]];
        S[t][C[t]++] = e
    }
    let w = (e, t, n) => {
        let r = 0,
            i = 1 / 0;
        for (let a = 0; a < 3; a++) {
            let o = a === 0 ? t.x : a === 1 ? t.y : t.z,
                s = a === 0 ? n.x : a === 1 ? n.y : n.z,
                c = e.min[a] - .01,
                l = e.max[a] + .01;
            if (Math.abs(s) < 1e-9) {
                if (o < c || o > l) return !1;
                continue
            }
            let u = (c - o) / s,
                d = (l - o) / s;
            if (u > d) {
                let e = u;
                u = d, d = e
            }
            if (r = Math.max(r, u), i = Math.min(i, d), r > i) return !1
        }
        return !0
    };

    function T(e, t, n = 1e9) {
        let r = n,
            i = -1,
            a = 0,
            o = 0,
            s = -1;
        for (let n = 0; n < b.length; n++) {
            if (!w(b[n], e, t)) continue;
            let c = S[n];
            for (let l = 0; l < c.length; l++) {
                let u = c[l],
                    d = p[u] * 3,
                    f = p[u + 1] * 3,
                    h = p[u + 2] * 3,
                    g = m[f] - m[d],
                    _ = m[f + 1] - m[d + 1],
                    v = m[f + 2] - m[d + 2],
                    y = m[h] - m[d],
                    b = m[h + 1] - m[d + 1],
                    x = m[h + 2] - m[d + 2],
                    S = t.y * x - t.z * b,
                    C = t.z * y - t.x * x,
                    w = t.x * b - t.y * y,
                    T = g * S + _ * C + v * w;
                if (T > -1e-12 && T < 1e-12) continue;
                let E = 1 / T,
                    D = e.x - m[d],
                    O = e.y - m[d + 1],
                    ee = e.z - m[d + 2],
                    k = (D * S + O * C + ee * w) * E;
                if (k < 0 || k > 1) continue;
                let A = O * v - ee * _,
                    te = ee * g - D * v,
                    ne = D * _ - O * g,
                    j = (t.x * A + t.y * te + t.z * ne) * E;
                if (j < 0 || k + j > 1) continue;
                let M = (y * A + b * te + x * ne) * E;
                M > 1e-5 && M < r && (r = M, i = u, a = k, o = j, s = n)
            }
        }
        if (i < 0) return null;
        let c = p[i] * 3,
            l = p[i + 1] * 3,
            u = p[i + 2] * 3,
            d = 1 - a - o,
            f = new z(h[c] * d + h[l] * a + h[u] * o, h[c + 1] * d + h[l + 1] * a + h[u + 1] * o, h[c + 2] * d + h[l + 2] * a + h[u + 2] * o).normalize();
        return {
            point: e.clone().addScaledVector(t, r),
            normal: f,
            shell: s,
            dist: r
        }
    }

    function E(e, t, n, r, i) {
        let a = n.elements,
            o = [a[0], a[1], a[2]],
            s = [a[4], a[5], a[6]],
            c = [a[8], a[9], a[10]],
            l = [],
            u = S[e],
            d = [0, 0, 0],
            f = [0, 0, 0],
            h = [0, 0, 0];
        for (let e = 0; e < u.length; e++) {
            let n = u[e],
                a = p[n],
                g = p[n + 1],
                _ = p[n + 2],
                v = a * 3,
                y = g * 3,
                b = _ * 3,
                x = m[y] - m[v],
                S = m[y + 1] - m[v + 1],
                C = m[y + 2] - m[v + 2],
                w = m[b] - m[v],
                T = m[b + 1] - m[v + 1],
                E = m[b + 2] - m[v + 2],
                D = S * E - C * T,
                O = C * w - x * E,
                ee = x * T - S * w;
            if (D * i.x + O * i.y + ee * i.z <= 0) continue;
            let k = [v, y, b];
            for (let e = 0; e < 3; e++) {
                let n = m[k[e]] - t.x,
                    r = m[k[e] + 1] - t.y,
                    i = m[k[e] + 2] - t.z;
                d[e] = n * o[0] + r * o[1] + i * o[2], f[e] = n * s[0] + r * s[1] + i * s[2], h[e] = n * c[0] + r * c[1] + i * c[2]
            }
            Math.min(d[0], d[1], d[2]) > r.x || Math.max(d[0], d[1], d[2]) < -r.x || Math.min(f[0], f[1], f[2]) > r.y || Math.max(f[0], f[1], f[2]) < -r.y || Math.min(h[0], h[1], h[2]) > r.z || Math.max(h[0], h[1], h[2]) < -r.z || l.push(a, g, _)
        }
        return new Uint32Array(l)
    }
    return {
        geometry: y,
        shells: b,
        pos: m,
        nor: h,
        index: p,
        raycast: T,
        crop: E,
        dispose() {
            y.dispose()
        }
    }
}
var K = e => {
    let t = u(e.mul(.1031)),
        r = t.add(n(t, t.zyx.add(31.32)));
    return u(r.x.add(r.y).mul(r.z))
};

function Ke(e) {
    let t = D(e),
        n = u(e),
        r = n.mul(n).mul(c(3).sub(n.mul(2))),
        i = n.mul(c(1).sub(n)).mul(6),
        a = K(t),
        o = K(t.add(c(1, 0, 0))),
        l = K(t.add(c(0, 1, 0))),
        d = K(t.add(c(1, 1, 0))),
        f = K(t.add(c(0, 0, 1))),
        p = K(t.add(c(1, 0, 1))),
        m = K(t.add(c(0, 1, 1))),
        h = K(t.add(c(1, 1, 1))),
        g = o.sub(a),
        _ = l.sub(a),
        v = f.sub(a),
        y = a.sub(o).sub(l).add(d),
        b = a.sub(l).sub(f).add(m),
        x = a.sub(o).sub(f).add(p),
        S = a.negate().add(o).add(l).sub(d).add(f).sub(p).sub(m).add(h),
        C = a.add(g.mul(r.x)).add(_.mul(r.y)).add(v.mul(r.z)).add(y.mul(r.x).mul(r.y)).add(b.mul(r.y).mul(r.z)).add(x.mul(r.z).mul(r.x)).add(S.mul(r.x).mul(r.y).mul(r.z)),
        w = g.add(y.mul(r.y)).add(x.mul(r.z)).add(S.mul(r.y).mul(r.z)),
        T = _.add(b.mul(r.z)).add(y.mul(r.x)).add(S.mul(r.z).mul(r.x)),
        E = v.add(x.mul(r.x)).add(b.mul(r.y)).add(S.mul(r.x).mul(r.y));
    return s(C, c(w, T, E).mul(i))
}
var qe = e => Ke(e).x;

function Je(e) {
    let t = Be(e.map(e => new H(e.x, e.y, e.z, e.h)), `vec4`),
        n = e.map(() => new H(-100, 0, 0, 0)),
        r = Be(n, `vec4`),
        i = {
            time: S(0),
            land: S(-100),
            amp: S(.09),
            ix: S(0),
            breath: S(0)
        };
    return {
        U: i,
        hits: n,
        apply(e, n) {
            let a = L(n.add(.5)),
                o = t.element(a),
                s = r.element(a),
                l = i.time.sub(i.land).sub(_(o.x.sub(i.ix)).mul(.1)),
                u = A(l.greaterThan(0), i.amp.mul(d(l.mul(-6))).mul(p(l.mul(21))), w(0)),
                f = i.time.sub(s.x),
                m = A(f.greaterThan(0), s.y.mul(d(f.mul(-9))).mul(Se(f.mul(30))), w(0)),
                h = u.add(i.breath).add(m),
                g = w(1).sub(h),
                v = w(1).div(De(O(g, .3))),
                y = c(o.x, o.y, o.z);
            return y.add(e.sub(y).mul(c(v, g, v)))
        },
        poke(e, t, r = .06) {
            let i = n[e];
            i && i.set(t, r, 0, 0)
        }
    }
}

function Ye(t) {
    let n = new M({
        color: 328966,
        roughness: .22,
        metalness: 0,
        specularIntensity: .8,
        envMap: t.env,
        envMapIntensity: 1
    });
    n.name = `logo-vinyl`, t.detail && (n.clearcoat = 1, n.clearcoatRoughness = .085), n.lightsNode = Pe([]), n.positionNode = t.jelly.apply(le, P(`shell`, `float`));
    let r = le,
        i = qe(r.mul(7)).mul(.6).add(qe(r.mul(23)).mul(.4));
    if (n.roughnessNode = we(v(w(.22).add(i.sub(.5).mul(.16)).add(U(.72, .95, qe(r.mul(3.1).add(7))).mul(.12)), .04, 1)), t.detail) {
        let t = Ke(r.mul(160)).yzw,
            i = e.mul(s(t, 0)).xyz,
            a = N(he.sub(i.mul(.049)));
        n.normalNode = a, n.clearcoatNormalNode = N(ee(he, a, .35))
    }
    return n
}

function Xe(e) {
    let t = new Float32Array(192);
    for (let e = 0; e < 48; e++) t[e * 4] = -100, t[e * 4 + 1] = -1;
    let r = new xe(t, 48, 1, b, C);
    r.minFilter = r.magFilter = T, r.generateMipmaps = !1, r.needsUpdate = !0;
    let i = S(0),
        o = new M({
            roughness: .36,
            metalness: 0,
            specularIntensity: .8,
            envMap: e.env,
            envMapIntensity: .9,
            side: 2,
            alphaTest: .5,
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -4
        });
    o.name = `logo-sticker`, e.detail && (o.clearcoat = .55, o.clearcoatRoughness = .22), o.alphaToCoverage = e.aa, o.lightsNode = Pe(e.light);
    let s = P(`sA`, `vec4`),
        l = P(`sB`, `vec4`),
        u = P(`sD`, `vec2`),
        f = ze(r, Ae(L(s.w.add(.5)), L(0))),
        m = e.jelly.U.time,
        h = m.sub(f.x),
        g = v(h.add(.07).div(.07), 0, 1),
        _ = g.mul(g),
        y = h.lessThan(0),
        x = A(y, ee(w(1.8), w(1), _).mul(j(-.07, h)), w(1).add(d(h.mul(-15)).mul(p(h.mul(44))).mul(.1)).sub(d(h.mul(-30)).mul(.05))),
        E = A(y, w(1).sub(_).mul(.25), w(0)),
        D = m.sub(f.y),
        O = A(f.y.greaterThan(0).and(D.greaterThan(0)), v(D.div(.2), 0, 1), w(0)),
        k = x.mul(w(1).sub(O)),
        te = n(a().sub(.5), u).div(.42),
        ne = U(.5, 1.05, te),
        re = l.w,
        ie = ne.mul(ne).mul(re.mul(.035).add(i.mul(.035).mul(j(.001, re)))),
        N = s.xyz,
        F = l.xyz,
        ae = N.add(le.sub(N).mul(k)).add(F.mul(E.add(O.mul(.12)))).add(Me.mul(ie.add(.0015)));
    o.positionNode = e.jelly.apply(ae, P(`shell`, `float`));
    let I = V(e.atlas, P(`aUV`, `vec2`));
    return o.colorNode = A(Re, I.rgb, c(.93, .92, .9)), o.opacityNode = I.a, {
        material: o,
        slots: r,
        data: t,
        flap: i,
        dispose() {
            o.dispose(), r.dispose()
        }
    }
}
var q = class extends be {
        constructor(e = new E, t = new z, n = new x, i = new z(1, 1, 1)) {
            super();
            let a = [],
                o = [],
                s = [],
                c = new z,
                l = new W().getNormalMatrix(e.matrixWorld),
                u = new r;
            u.makeRotationFromEuler(n), u.setPosition(t);
            let d = new r;
            d.copy(u).invert(), f(), this.setAttribute(`position`, new Ce(a, 3)), this.setAttribute(`uv`, new Ce(s, 2)), o.length > 0 && this.setAttribute(`normal`, new Ce(o, 3));

            function f() {
                let t = [],
                    n = new z,
                    r = new z,
                    l = e.geometry,
                    d = l.attributes.position,
                    f = l.attributes.normal;
                if (l.index !== null) {
                    let e = l.index;
                    for (let i = 0; i < e.count; i++) n.fromBufferAttribute(d, e.getX(i)), f ? (r.fromBufferAttribute(f, e.getX(i)), p(t, n, r)) : p(t, n)
                } else {
                    if (d === void 0) return;
                    for (let e = 0; e < d.count; e++) n.fromBufferAttribute(d, e), f ? (r.fromBufferAttribute(f, e), p(t, n, r)) : p(t, n)
                }
                t = m(t, c.set(1, 0, 0)), t = m(t, c.set(-1, 0, 0)), t = m(t, c.set(0, 1, 0)), t = m(t, c.set(0, -1, 0)), t = m(t, c.set(0, 0, 1)), t = m(t, c.set(0, 0, -1));
                for (let e = 0; e < t.length; e++) {
                    let n = t[e];
                    s.push(.5 + n.position.x / i.x, .5 + n.position.y / i.y), n.position.applyMatrix4(u), a.push(n.position.x, n.position.y, n.position.z), n.normal !== null && o.push(n.normal.x, n.normal.y, n.normal.z)
                }
            }

            function p(t, n, r = null) {
                n.applyMatrix4(e.matrixWorld), n.applyMatrix4(d), r ? (r.applyNormalMatrix(l), t.push(new Ze(n.clone(), r.clone()))) : t.push(new Ze(n.clone()))
            }

            function m(e, t) {
                let n = [],
                    r = .5 * Math.abs(i.dot(t));
                for (let i = 0; i < e.length; i += 3) {
                    let a = 0,
                        o, s, c, l, u = e[i + 0].position.dot(t) - r,
                        d = e[i + 1].position.dot(t) - r,
                        f = e[i + 2].position.dot(t) - r,
                        p = u > 0,
                        m = d > 0,
                        g = f > 0;
                    switch (a = +!!p + +!!m + +!!g, a) {
                        case 0:
                            n.push(e[i]), n.push(e[i + 1]), n.push(e[i + 2]);
                            break;
                        case 1:
                            if (p && (o = e[i + 1], s = e[i + 2], c = h(e[i], o, t, r), l = h(e[i], s, t, r)), m) {
                                o = e[i], s = e[i + 2], c = h(e[i + 1], o, t, r), l = h(e[i + 1], s, t, r), n.push(c), n.push(s.clone()), n.push(o.clone()), n.push(s.clone()), n.push(c.clone()), n.push(l);
                                break
                            }
                            g && (o = e[i], s = e[i + 1], c = h(e[i + 2], o, t, r), l = h(e[i + 2], s, t, r)), n.push(o.clone()), n.push(s.clone()), n.push(c), n.push(l), n.push(c.clone()), n.push(s.clone());
                            break;
                        case 2:
                            p || (o = e[i].clone(), s = h(o, e[i + 1], t, r), c = h(o, e[i + 2], t, r), n.push(o), n.push(s), n.push(c)), m || (o = e[i + 1].clone(), s = h(o, e[i + 2], t, r), c = h(o, e[i], t, r), n.push(o), n.push(s), n.push(c)), g || (o = e[i + 2].clone(), s = h(o, e[i], t, r), c = h(o, e[i + 1], t, r), n.push(o), n.push(s), n.push(c))
                    }
                }
                return n
            }

            function h(e, t, n, r) {
                let i = e.position.dot(n) - r,
                    a = i / (i - (t.position.dot(n) - r)),
                    o = new z(e.position.x + a * (t.position.x - e.position.x), e.position.y + a * (t.position.y - e.position.y), e.position.z + a * (t.position.z - e.position.z)),
                    s = null;
                return e.normal !== null && t.normal !== null && (s = new z(e.normal.x + a * (t.normal.x - e.normal.x), e.normal.y + a * (t.normal.y - e.normal.y), e.normal.z + a * (t.normal.z - e.normal.z))), new Ze(o, s)
            }
        }
    },
    Ze = class {
        constructor(e, t = null) {
            this.position = e, this.normal = t
        }
        clone() {
            let e = this.position.clone(),
                t = this.normal === null ? null : this.normal.clone();
            return new this.constructor(e, t)
        }
    },
    Qe = new z(0, 1, 0),
    $e = new z(0, 0, -1),
    et = class {
        logo;
        sm;
        rects;
        reserved;
        group = new o;
        meshes = Array(48).fill(null);
        order = [];
        peelDone = new Map;
        constructor(e, t, n, r) {
            this.logo = e, this.sm = t, this.rects = n, this.reserved = r, this.group.name = `logo-stickers`
        }
        get count() {
            return this.meshes.filter(Boolean).length
        }
        place(e, t = -1, n = 0) {
            t < 0 && (t = this.freeSlot());
            let r = this.decal(e, t);
            if (!r) return -1;
            this.drop(t);
            let i = new E(r, this.sm.material);
            i.frustumCulled = !1, i.renderOrder = 3, i.name = `sticker-` + e.ti, this.group.add(i), this.meshes[t] = i;
            let a = this.sm.data;
            return a[t * 4] = e.at, a[t * 4 + 1] = -1, this.sm.slots.needsUpdate = !0, t >= this.reserved && (this.order.push(t), this.order.length > 48 - this.reserved - 4 && this.peel(this.order[0], n)), t
        }
        peel(e, t) {
            this.meshes[e] && (this.sm.data[e * 4 + 1] = t, this.sm.slots.needsUpdate = !0, this.peelDone.set(e, t + .22), this.order = this.order.filter(t => t !== e))
        }
        update(e) {
            for (let [t, n] of this.peelDone) e >= n && (this.drop(t), this.peelDone.delete(t))
        }
        freeSlot() {
            for (let e = this.reserved; e < 48; e++)
                if (!this.meshes[e]) return e;
            for (let [e] of this.peelDone) return this.drop(e), this.peelDone.delete(e), e;
            let e = this.order.shift();
            return this.drop(e), e
        }
        drop(e) {
            let t = this.meshes[e];
            t && (this.group.remove(t), t.geometry.dispose(), this.meshes[e] = null)
        }
        decal(e, t) {
            let {
                hit: n
            } = e, i = n.normal.clone();
            e.toward && i.lerp(e.toward, .3).normalize();
            let a = Math.abs(i.dot(Qe)) > .94 ? $e : Qe,
                o = new z().crossVectors(a, i).normalize(),
                s = new z().crossVectors(i, o),
                c = new r().makeBasis(o, s, i).multiply(new r().makeRotationZ(e.roll)),
                l = new z(e.size / 2, e.size / 2, e.size * .7),
                u = this.logo.crop(n.shell, n.point, c, l, i);
            if (!u.length) return null;
            let d = new be;
            d.setAttribute(`position`, this.logo.geometry.getAttribute(`position`)), d.setAttribute(`normal`, this.logo.geometry.getAttribute(`normal`)), d.setIndex(new I(u, 1));
            let f = new E(d);
            f.updateMatrixWorld(!0);
            let p = new q(f, n.point, new x().setFromRotationMatrix(c), new z(e.size, e.size, e.size * 1.4));
            d.dispose();
            let m = p.getAttribute(`position`).count;
            if (!m) return p.dispose(), null;
            let h = this.rects[String(e.ti)],
                g = p.getAttribute(`uv`),
                _ = new Float32Array(m * 2),
                v = new Float32Array(m * 4),
                y = new Float32Array(m * 4),
                b = new Float32Array(m * 2),
                S = new Float32Array(m),
                C = new k(...e.liftDir ? ? [1, 1]).normalize();
            for (let r = 0; r < m; r++) {
                let a = g.getX(r),
                    o = g.getY(r);
                _[r * 2] = h.x + a * h.w, _[r * 2 + 1] = 1 - (h.y + (1 - o) * h.h), v[r * 4] = n.point.x, v[r * 4 + 1] = n.point.y, v[r * 4 + 2] = n.point.z, v[r * 4 + 3] = t, y[r * 4] = i.x, y[r * 4 + 1] = i.y, y[r * 4 + 2] = i.z, y[r * 4 + 3] = e.lift ? ? 0, b[r * 2] = C.x, b[r * 2 + 1] = C.y, S[r] = n.shell
            }
            return p.setAttribute(`aUV`, new I(_, 2)), p.setAttribute(`sA`, new I(v, 4)), p.setAttribute(`sB`, new I(y, 4)), p.setAttribute(`sD`, new I(b, 2)), p.setAttribute(`shell`, new I(S, 1)), p.computeBoundingSphere(), p
        }
        dispose() {
            for (let e = 0; e < 48; e++) this.drop(e)
        }
    },
    tt = 5,
    nt = 4,
    J = e => `${e%tt/4*100}% ${Math.floor(e/tt)/3*100}%`,
    rt = (e, t) => `${e%tt/4*100}% ${(Math.floor(e/tt)+(t?nt:0))/7*100}%`;

function Y(e, t, n, r) {
    let i = {};
    for (let a of r) {
        let r = document.createElement(`i`);
        r.className = a === `art` ? `lg-art` : `lg-sh lg-sh--${a}`, r.style.backgroundImage = `url("${a===`art`?t:n}")`, e.appendChild(r), i[a] = r
    }
    return i
}
var it = class {
        root;
        actions;
        hello;
        held;
        heldArt;
        heldSh;
        heldTi = -1;
        heldSince = 0;
        state = [!1, !1];
        constructor(e, t, n, r) {
            let i = document.createElement(`div`);
            i.className = `lg-card`, i.innerHTML = `
      <div class="lg-actions" role="group" aria-label="この先" data-en-aria="What’s next">
        <button type="button" class="lg-btn" data-act="again"><span aria-hidden="true">↺</span><span data-en="Play again">もう一度</span></button>
        <button type="button" class="lg-btn lg-btn--primary" data-act="watch"><span aria-hidden="true">▶</span><span data-en="Watch the film">本編を見る</span></button>
        <a class="lg-btn lg-btn--site" href="https://www.funtech.inc/ja" data-en-href="https://www.funtech.inc/en" target="_blank" rel="noopener"><span data-en="funtech.inc">funtech.inc へ</span><span aria-hidden="true">↗</span></a>
      </div>
      <div class="lg-hello" aria-hidden="true"></div>`, G(i), e.appendChild(i), this.root = i, this.actions = i.querySelector(`.lg-actions`), this.hello = i.querySelector(`.lg-hello`);
            let a = Y(this.hello, t, n, [`far`, `near`, `art`]);
            a.art.style.backgroundPosition = J(r.helloTi), a.near.style.backgroundPosition = rt(r.helloTi, !1), a.far.style.backgroundPosition = rt(r.helloTi, !0), i.querySelector(`[data-act="again"]`).addEventListener(`click`, () => r.again()), i.querySelector(`[data-act="watch"]`).addEventListener(`click`, () => r.watch()), this.held = document.createElement(`div`), this.held.className = `lg-held`, this.held.setAttribute(`aria-hidden`, `true`);
            let o = Y(this.held, t, n, [`far`, `art`]);
            this.heldArt = o.art, this.heldSh = o.far, e.appendChild(this.held), this.reset()
        }
        set(e, t) {
            if (this.state[e] !== t) {
                if (this.state[e] = t, e === 0) {
                    this.actions.classList.toggle(`is-on`, t);
                    for (let e of this.actions.querySelectorAll(`button, a`)) e.tabIndex = t ? 0 : -1
                } else this.hello.classList.toggle(`is-on`, t)
            }
        }
        reset() {
            for (let e of [0, 1]) this.state[e] = !0, this.set(e, !1);
            this.setHeld(!1)
        }
        get shown() {
            return this.state[0]
        }
        setHeld(e, t = 0, n = 0, r = 100, i = 0, a = -1, o = !1) {
            let s = this.held.classList.contains(`is-on`);
            if (this.held.classList.toggle(`is-on`, e), !e) return;
            let c = performance.now() / 1e3;
            s || (this.heldSince = c), a !== this.heldTi && a >= 0 && (this.heldTi = a, this.heldSince = c, this.heldArt.style.backgroundPosition = J(a), this.heldSh.style.backgroundPosition = rt(a, !0));
            let l = o ? 0 : Math.exp(-(c - this.heldSince) / 1.6);
            i += .05 * Math.sin(c * 5.7) * l, n -= 3 * Math.sin(c * 5.7 + .8) * l;
            let u = Math.max(24, Math.min(420, r));
            this.held.style.width = this.held.style.height = `${u}px`, this.held.style.margin = `${-u/2}px 0 0 ${-u/2}px`, this.held.style.transform = `translate3d(${t.toFixed(1)}px, ${n.toFixed(1)}px, 0) rotate(${i.toFixed(3)}rad)`
        }
        place(e) {
            for (let [t, n] of Object.entries(e)) this.root.style.setProperty(`--lg-${t}`, String(n))
        }
    },
    at = {
        label: Ee(`クリックでステッカーを貼る`, `Click to slap on a sticker`),
        touchLabel: Ee(`タップでステッカーを貼る`, `Tap to slap on a sticker`)
    },
    X = {
        drop: [`logo_drop`],
        slap: [`sticker_slap_1`, `sticker_slap_2`, `sticker_slap_3`, `sticker_slap_4`],
        hop: [`jump`],
        land: [`land`],
        pi: [`pi`],
        peel: [`sticker_peel`]
    },
    ot = .45,
    st = new z(-.15, 0, -.45),
    ct = new z(-3.1, 6.6, 3.4),
    lt = 8,
    Z = -fe,
    Q = -.4 * m,
    ut = .15,
    dt = -.3,
    ft = m,
    pt = 1.5 * m,
    mt = [4, 9, 13, 3, 7, 17, 10, 5, 14, 8, 19, 15, 0, 6, 18, 12, 11, 16, 1, 2],
    ht = {
        0: .44,
        3: .4,
        7: .4,
        17: .4,
        19: .4,
        15: .42,
        8: .34,
        9: .36
    },
    gt = () => new Promise(e => requestAnimationFrame(() => e())),
    _t = e => {
        let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
        return t - Math.floor(t)
    },
    vt = (e, t, n, r, i) => f(e, t, n, i * g * r, r);

function yt(e, t) {
    if (e <= t[0][0]) return t[0][1];
    for (let n = 0; n < t.length - 1; n++) {
        let [r, i] = t[n], [a, o] = t[n + 1];
        if (e <= a) {
            let t = (e - r) / (a - r);
            return i + (o - i) * t * t * (3 - 2 * t)
        }
    }
    return t[t.length - 1][1]
}

function bt() {
    let e = m,
        t = [{
            t: .005,
            amp: .05,
            decay: 7,
            freq: 9
        }, {
            t: ft + .005,
            amp: .016,
            decay: 9
        }, {
            t: pt + .005,
            amp: .006,
            decay: 10
        }];
    return {
        land: {
            side: new z(1.95, 0, .25),
            yawLook: -.95,
            yawCard: -.45,
            design: 16 / 9,
            pre: new Le([{
                t: Z,
                pos: [0, .42, 2.7],
                target: [0, .56, 0],
                fov: 30
            }, {
                t: Z + .8,
                pos: [.4, 3.3, 3.2],
                target: [0, 0, -.25],
                fov: 40
            }, {
                t: 0,
                pos: [.36, 3, 2.9],
                target: [0, 0, -.25],
                fov: 40,
                ease: e => e
            }], {
                handheld: .003
            }),
            shot: new Le([{
                t: 0,
                pos: [.95, .3, 4.9],
                target: [.4, .62, -.25],
                fov: 36
            }, {
                t: e,
                pos: [.88, .36, 5.1],
                target: [.42, .6, -.25],
                fov: 35,
                ease: F.out
            }, {
                t: 3 * e,
                pos: [.6, .62, 5.7],
                target: [.42, .38, -.3],
                fov: 32.5
            }, {
                t: 4 * e,
                pos: [.492, .63, 5.235],
                target: [.42, .36, -.3],
                fov: 32,
                ease: F.out
            }, {
                t: 12 * e,
                pos: [.438, .649, 4.92],
                target: [.42, .37, -.3],
                fov: 32
            }], {
                handheld: .003,
                shakes: t
            }),
            card: {
                "act-y": 850,
                "hello-x": 1596,
                "hello-y": 760,
                "hello-s": 290
            }
        },
        port: {
            side: new z(.1, 0, 2.4),
            yawLook: -.6,
            yawCard: 0,
            design: 9 / 16,
            pre: new Le([{
                t: Z,
                pos: [0, .5, 3.3],
                target: [0, .56, 0],
                fov: 44
            }, {
                t: Z + .8,
                pos: [.3, 4.4, 3.4],
                target: [0, 0, -.2],
                fov: 50
            }, {
                t: 0,
                pos: [.27, 4.1, 3.1],
                target: [0, 0, -.2],
                fov: 50,
                ease: e => e
            }], {
                handheld: .003
            }),
            shot: new Le([{
                t: 0,
                pos: [.25, 2.3, 7.9],
                target: [.08, .15, .1],
                fov: 50
            }, {
                t: e,
                pos: [.22, 2.45, 8],
                target: [.08, .1, .1],
                fov: 50,
                ease: F.out
            }, {
                t: 3 * e,
                pos: [.15, 3.1, 7.5],
                target: [.06, -.5, .15],
                fov: 47
            }, {
                t: 4 * e,
                pos: [.1, 3.5, 7.1],
                target: [.05, -.52, .2],
                fov: 46,
                ease: F.out
            }, {
                t: 12 * e,
                pos: [.1, 3.6, 6.85],
                target: [.05, -.57, .2],
                fov: 46
            }], {
                handheld: .003,
                shakes: t
            }),
            card: {
                "act-y": 1330,
                "hello-x": 735,
                "hello-y": 900,
                "hello-s": 300
            }
        }
    }
}

function $(e) {
    let n, u, d = !1,
        p = !1,
        _ = [],
        b = [],
        x, C, T, D, O, A, j, M, N, P, I, le, L, he = {},
        R, be, xe, Se = null,
        Ce = new ce,
        we = {
            invert: S(0)
        },
        B = bt(),
        V = B.land,
        H = 0,
        U = 0,
        W = 1e9,
        G = 1e9,
        Ee = !1,
        De = !1,
        Ae = !1,
        Me = 0,
        Pe = 0,
        Le = 0,
        Re = 0,
        ze = -10,
        Be = -10,
        K = -10,
        Ke = 2,
        qe = new z,
        q = new z,
        Ze = new z,
        Qe = 0,
        $e = 0,
        tt = -10,
        nt = [0, 0],
        J = null,
        rt = -1,
        Y = new ye,
        $ = new z,
        xt = new r,
        St = () => U < W ? `intro` : U < W + .35 ? `drop` : `card`;
    async function Ct() {
        let e = n.renderer,
            t = n.perf.settings,
            r = n.assets.lease();
        _.push(r), x = new _e, x.background = new ie(1, 1, 1), C = new de(32, 16 / 9, .05, 80), x.add(C);
        let i = await We(e, Te(t));
        if (p) {
            i.dispose();
            return
        }
        _.push(i);
        let l = new ne(16777215, 1.35);
        l.position.copy(ct), l.target.position.set(.2, 0, -.2);
        let u = new ae(16777215, 15790318, .9);
        x.add(l, l.target, u), A = Ue({
            dir: ct.clone().normalize(),
            center: new z(.35, .4, -.15),
            halfSize: 2.7,
            distance: 9,
            res: t.tier === `low` ? 512 : 1024
        }), _.push(A), j = He(12);
        let f = Ve({
            shadow: A,
            ao: j,
            shadowAmt: S(.26)
        });
        x.add(f.mesh), _.push(f);
        let m = performance.now(),
            [h, g, y, b] = await Promise.all([Ge(n.assets), ke(r, {
                lod: t.lod,
                detail: t.detail,
                env: i.texture,
                envIntensity: 1
            }), n.assets.loadTexture(`gen/logo/stickers.webp`), n.assets.json(`gen/logo/stickers.json`)]);
        if (M = h, T = g, performance.measure(`logo · assets`, {
                start: m,
                end: performance.now()
            }), p) {
            M.dispose(), T.dispose(), y.dispose();
            return
        }
        if (await gt(), p) {
            M.dispose(), T.dispose(), y.dispose();
            return
        }
        _.push(M, y), y.anisotropy = 8, he = b.rects, N = Je(M.shells);
        let k = Ye({
            env: i.texture,
            jelly: N,
            detail: t.detail
        });
        _.push(k), I = new E(M.geometry, k), I.frustumCulled = !1, I.layers.enable(2), P = new o, P.add(I), P.position.copy(st), x.add(P), le = Xe({
            atlas: y,
            env: i.texture,
            jelly: N,
            light: [l, u],
            detail: t.detail,
            aa: t.msaa > 0
        }), _.push(le), L = new et(M, le, he, lt), I.add(L.group), _.push(L);
        let F = new z(0, 0, -1),
            oe = new z(0, 0, 1);
        for (let e = 0; e < b.logo.length; e++) {
            let t = b.logo[e],
                n = performance.now(),
                r = M.raycast(new z(t.x * 1.08, t.y * 1.08, 10), F);
            if (r && L.place({
                    ti: t.ti,
                    hit: r,
                    size: t.size * 1.08,
                    roll: t.roll,
                    lift: t.lift,
                    liftDir: t.liftDir ? ? [1, 1],
                    toward: oe,
                    at: -100
                }, e), performance.measure(`logo · sticker`, {
                    start: n,
                    end: performance.now()
                }), await gt(), p) return
        }
        D = new o, O = new o, D.add(O), O.position.y = -.45, O.add(T.object), x.add(D), T.shadowProxies(2);
        let ce = te(x, C, {
            samples: t.msaa
        });
        Se = ce;
        let fe = ce.getTextureNode();
        xe = ge(fe, .2, .3, 1.25), xe.setResolutionScale(t.bloom * (n.backend === `webgl2` ? .5 : 1)), Ce.grade({
            contrast: 1.02,
            saturation: 1,
            vignette: 0,
            grain: .02
        });
        let R = Fe(c(fe).add(xe), Ce, w(1), a(), w(1)),
            ye = se(v(R.rgb, 0, 1)),
            B = s(ue(ee(ye, w(1).sub(ye), we.invert)), 1);
        be = new pe(e, B);
        let V = new me(64, 64, { ...ve,
            depthBuffer: !1
        });
        W = 0, U = 1, Ot(.016), At(), await Ne(e, [y, ...Oe(T.mats)], () => p);
        let H = e => n.own ? n.own(e) : e();
        await re(e, x, () => H(() => {
            A.render(e, x), be.renderTo(V)
        }), {
            cancelled: () => p
        }), V.dispose(), d = !0
    }

    function wt(e, t, n) {
        I.updateMatrixWorld(!0), xt.copy(I.matrixWorld).invert();
        let r = u,
            i = (e, t) => {
                Y.setFromCamera(new k(e, t), C);
                let n = Y.ray.origin.clone().applyMatrix4(xt),
                    r = Y.ray.direction.clone().transformDirection(xt);
                return M.raycast(n, r)
            },
            a = i(e, t);
        if (a || !n) return a;
        for (let n of [14, 28])
            for (let a = 0; a < 8; a++) {
                let o = a / 8 * g,
                    s = i(e + Math.cos(o) * n * 2 / r.cssW, t + Math.sin(o) * n * 2 / r.cssH);
                if (s) return s
            }
        return null
    }

    function Tt(e, t = !1) {
        let r = mt[Pe % mt.length];
        Pe++;
        let i = (ht[r] ? ? .32) * 1.08 * (.9 + _t(Re * 3.1) * .2),
            a = n.audio.play(X.slap[Me % 4], {
                quantize: `16th`
            });
        Me++;
        let o = a > 0 ? a : U + .05,
            s = Y.ray.direction.clone().transformDirection(xt).negate();
        L.place({
            ti: r,
            hit: e,
            size: i,
            roll: Le,
            toward: s,
            at: o
        }, -1, U), Re++, Le = (_t(Re * 7.7) - .5) * .7, N.poke(e.shell, o, n.reducedMotion ? .015 : .06), ze = o, qe.copy(e.point).applyMatrix4(I.matrixWorld), Me % 4 == 0 && (Be = o), n.ui.dismissHint(`logo-sticker`)
    }

    function Et() {
        for (let e = 0; e < 12; e++) {
            let t = M.shells[Math.floor(_t(Re * 5.3 + e) * M.shells.length)],
                n = i(t.min[0], t.max[0], .25 + _t(e * 1.7 + Re) * .5),
                r = i(t.min[1], t.max[1], .25 + _t(e * 2.9 + Re) * .5);
            if ($.set(n, r, t.max[2]).applyMatrix4(I.matrixWorld).project(C), Math.abs($.x) > .95 || Math.abs($.y) > .95) continue;
            let a = wt($.x, $.y, !1);
            if (a) {
                Tt(a, !0);
                return
            }
        }
    }

    function Dt() {
        let e = U - W,
            t = n.reducedMotion;
        P.visible = e >= (t ? -.6 : dt);
        let r = 0,
            a = 1;
        if (t) e < 0 && (r = .5 * (1 - F.out(y((e + .6) / .6))));
        else if (e < 0) {
            let t = y((e - dt) / .3);
            r = 7 * (1 - t * t), a = 1 + .3 * t
        } else {
            a = 1 - vt(e, 0, .4, 3.1, .32) - vt(e, ft, .14, 4.5, .35) - vt(e, pt, .05, 6, .4);
            let t = .09,
                n = ft + .03;
            if (e > t && e < ft) {
                let n = (e - t) / (ft - t);
                r = .3 * Math.sin(n * Math.PI), a *= 1 + .06 * Math.sin(n * Math.PI)
            }
            if (e > n && e < pt) {
                let t = (e - n) / (pt - n);
                r = .06 * Math.sin(t * Math.PI)
            }
        }
        let o = 1 / Math.sqrt(Math.max(.35, a)),
            s = 0;
        if (U >= G) {
            let e = (U - G) / m % 1;
            s = (.028 * Math.exp(-e * 7) - .006 * Math.sin(e * Math.PI)) * (t ? .3 : 1)
        }
        P.position.set(st.x, r - (e >= 0 ? .02 : 0), st.z), P.scale.set(o, a, o), N.U.time.value = U, N.U.land.value = W, N.U.amp.value = t ? 0 : .09, N.U.breath.value = s, le.flap.value = t ? 0 : vt(e, 0, 1, 5, .22) + vt(e, ft, .4, 6, .25), r < 1.2 ? I.layers.enable(2) : I.layers.disable(2);
        let c = e < Z ? 99 : e < dt ? i(9, 7, y((e - Z) / (dt - Z))) : r,
            l = y((e - Z) / .25);
        M.shells.forEach((e, t) => {
            let n = (e.max[0] - e.min[0]) * .5 * o * (.95 + c * .13) + .08,
                r = c > 50 ? 0 : l * (c > .05 ? y(.62 - c * .045, .2, .62) : .4);
            j.vals[4 + t].set(st.x + e.x * o, st.z + e.z, n, r)
        })
    }

    function Ot(e) {
        let t = U - W,
            r = n.reducedMotion,
            i = T.rig.idle(H * 1.4),
            a = 0,
            o = 0,
            s = 0,
            c = 0,
            u = 0,
            d = 0,
            f = `text`,
            p = [0, 0],
            h = V.side,
            g = r ? -1.1 : Q,
            _ = r ? .45 : ut;
        if (t >= Z && t < g - .05) {
            let e = F.out(y((t - Z) / .3));
            f = `open`, p = [0, 2.5 * e], i.upper.pitch = -.28 * e, d = -.06 * e, i.antenna = .45 * e * Math.sin((t - Z) * 30) * Math.exp(-(t - Z) * 3) + .2 * e, c = -.03 * e
        }
        if (t >= g - .05) {
            let e = y((t - (g - .05)) / .05),
                n = y((t - g) / _),
                l = F.inOut(n);
            if (a = h.x * l, s = h.z * l, o = t >= g && !r ? .4 * Math.sin(n * Math.PI) : 0, c = r ? 0 : t < Q ? .24 * F.out(e) : n < 1 ? -.16 * Math.sin(n * Math.PI) : .24 * Math.exp(-(t - Q - ut) * 9) * Math.cos((t - Q - ut) * 24), i.upper.pitch = t < 0 ? -.3 : 0, d = t < 0 ? -.2 * (1 - n) : 0, t >= 0 && !r && (o += .24 * Math.max(0, Math.sin(y(t / .26) * Math.PI)) + (t >= ft ? .05 * Math.max(0, Math.sin(y((t - ft) / .14) * Math.PI)) : 0)), u = yt(t, [
                    [Q, 0],
                    [Q + ut, -.35],
                    [.1, -.35],
                    [.4, V.yawLook],
                    [fe + .05, V.yawLook],
                    [fe + .5, V.yawCard]
                ]), i.shoeL.pitch = i.shoeR.pitch = t >= Q && n < 1 ? .5 * Math.sin(n * Math.PI) : 0, i.antenna = n < 1 ? -.6 * Math.sin(n * Math.PI) : .5 * Math.exp(-(t - Q - ut) * 5) * Math.sin((t - Q) * 26), f = t < 0 ? `open` : t < .6 ? `star` : `happy`, p = t < .6 ? [-2.2, 1.2] : [-1, 0], U >= G) {
                let e = (U - G) / m,
                    t = Math.floor(e),
                    n = e - t;
                i.upper.squash += r ? 0 : .07 * Math.exp(-n * 6) - .02 * Math.sin(n * Math.PI), i.upper.y += .02 * Math.sin(n * Math.PI), i.upper.roll += (r ? .3 : 1) * [.1, -.08, .07, -.1][t % 4] * Math.sin(Math.min(1, n * 2.5) * Math.PI * .5), i.antenna = .3 * Math.exp(-n * 5) * Math.sin(n * 18), u = V.yawCard + nt[0] * .05, p = [Math.round(nt[0]), Math.round(nt[1])], f = `happy`
            }
            let v = U - ze;
            if (v > -.1 && v < 1.2) {
                $.copy(qe).project(C);
                let e = new z(q.x, Ie, q.z).project(C);
                p = [y(($.x - e.x) * 9, -3, 3), y(($.y - e.y) * 6, -2, 2)], f = v < .45 ? `wide` : `happy`, v > 0 && !r && (i.upper.squash += .05 * Math.exp(-v * 10) * Math.cos(v * 30), i.antenna += .4 * Math.exp(-v * 5) * Math.sin(v * 28))
            }
            let b = Math.max(U - Be, 0) < .8 ? U - Be : U - K;
            b >= 0 && b < .6 && !r && (o += .28 * Math.sin(Math.PI * y(b / .42)), c += b > .42 ? .14 * Math.exp(-(b - .42) * 10) * Math.cos((b - .42) * 30) : -.06 * Math.sin(Math.PI * y(b / .42)), f = U - Be < .8 ? `star` : `happy`)
        }
        Ze.set(a, 0, s), t >= g + _ && t > .5 ? q.set(l(q.x, Ze.x, 6, e), 0, l(q.z, Ze.z, 6, e)) : q.copy(Ze), T.rig.apply(i), D.position.set(q.x, o + ot, q.z), D.rotation.set(d, u, 0, `YXZ`);
        let v = 1 - c,
            b = 1 / Math.sqrt(Math.max(.3, v));
        O.scale.set(b, v, b), D.updateMatrixWorld(!0), T.syncLed(), kt(f, p);
        let x = Math.max(0, o),
            S = y(1 - x / 2.5),
            w = q.x,
            E = q.z;
        j.vals[0].set(w - .11, E + .03, .14 + x * .1, .62 * S), j.vals[1].set(w + .11, E + .03, .14 + x * .1, .62 * S), j.vals[2].set(w, E + .01, .34 + x * .25, .3 * S), j.vals[3].set(w, E - .02, .62 + x * .3, .12 * S), Dt()
    }

    function kt(e, t) {
        let n = T.led;
        if (n.clear(), n.u.time.value = H, n.u.scan.value = 0, e === `text`) n.text4(`HELLO,`, 4, je, 1.05), n.text4(`WORLD.`, -4, je, 1.05);
        else {
            let r = H > Ke && H < Ke + .09 && e !== `star`;
            H > Ke + .09 && (Ke = H + 2.2 + _t(Math.floor(H * 7)) * 2.6);
            let i = r ? `blink` : e;
            n.eyes(i, je, 1, i === `blink` ? [0, -2] : t)
        }
        n.upload()
    }

    function At() {
        let e = U - W,
            r = n.reducedMotion,
            i = e < 0 && !r ? V.pre : V.shot,
            a = i.eval(Math.max(r ? 4 * m : Z, e)),
            o = a.pos.clone().sub(a.target);
        o.applyAxisAngle(new z(0, 1, 0), Qe);
        let s = new z(o.z, 0, -o.x).normalize();
        o.applyAxisAngle(s, $e), C.position.copy(a.target).add(o), C.up.set(0, 1, 0), C.lookAt(a.target);
        let c = i.o.handheld ? ? 0,
            l = h(H * .6, 1) * c,
            d = h(H * .6, 6) * c,
            p = a.roll + h(H * .42, 10) * c * .6;
        if (!r)
            for (let t of i.o.shakes ? ? []) l += f(e, t.t, t.amp, t.decay ? ? 9, t.freq ? ? 11), d += f(e, t.t, t.amp * .8, t.decay ? ? 9, (t.freq ? ? 11) * 1.3), p += f(e, t.t, t.amp * .5, t.decay ? ? 9, (t.freq ? ? 11) * .8);
        if (!r) {
            let e = U - ze;
            l += f(e, 0, .004, 14, 12)
        }
        C.translateX(l), C.translateY(d), C.rotateZ(p);
        let g = u ? .aspect ? ? 16 / 9;
        C.fov = g < V.design ? 2 * Math.atan(Math.tan(a.fov * t / 2) * (V.design / g)) / t : a.fov, C.aspect = g, C.updateProjectionMatrix(), C.updateMatrixWorld(!0)
    }
    let jt = {
        id: e.id,
        async load(e) {
            n = e, u = n.stage.info, V = u.portrait ? B.port : B.land, n.audio.preloadShots([...X.drop, ...X.slap, ...X.hop, ...X.land, ...X.pi, ...X.peel]), await Ct(), !p && (R = new it(n.layer, n.assets.url(`gen/logo/stickers.webp`), n.assets.url(`gen/logo/stickers_shadow.webp`), {
                helloTi: 15,
                again: () => n.restart(),
                watch: () => document.getElementById(`ui-watch`) ? .click()
            }), R.place(V.card), b.push(n.input.onTap(() => {
                n.layer.hidden || n.audio.unlock()
            }), n.input.onKey(e => {
                !n.layer.hidden && (e.code === `Space` || e.code === `Enter` || e.code === `NumpadEnter`) && n.audio.unlock()
            })), Object.assign(window, {
                __logo: {
                    get phase() {
                        return St()
                    },
                    get ready() {
                        return d
                    },
                    get stickers() {
                        return L.count
                    },
                    get tau() {
                        return U - W
                    },
                    get hover() {
                        return J ? {
                            shell: J.shell,
                            p: J.point.toArray().map(e => +e.toFixed(3))
                        } : null
                    },
                    tune: e => {
                        if (e.key !== void 0) {
                            let t = V.shot.keys[e.key];
                            e.pos && t.P.fromArray(e.pos), e.target && t.T.fromArray(e.target), e.fov && (t.fov = e.fov)
                        }
                        e.side && V.side.fromArray(e.side), e.card && (Object.assign(V.card, e.card), R.place(V.card))
                    },
                    slap: (e = 0, t = .2) => {
                        let n = wt(e, t, !0);
                        return n && Tt(n), !!n
                    },
                    slapRandom: () => Et(),
                    restart: () => jt.enter(null),
                    get scene() {
                        return x
                    }
                }
            }))
        },
        enter() {
            H = 0, U = n.clock.now(), W = n.clock.next(`bar`, 1.6, U), G = W + fe, Ee = De = Ae = !1, ze = Be = K = -10, q.set(0, 0, 0), R ? .reset(), n.audio.bed(1, .1)
        },
        update(e) {
            let r = e.dt;
            if (H += r, U = e.clock, !d) return;
            let i = n.reducedMotion,
                a = e.input.p;
            if (!Ee && U >= W - .3) {
                Ee = !0;
                let e = n.audio.play(X.drop, {
                    quantize: `bar`
                });
                e > 0 && Math.abs(e - W) > .02 && e > U && (W = e, G = W + fe)
            }!Ae && U >= W + Q + ut && (Ae = !0, n.audio.play(X.land, {
                quantize: `none`,
                gain: .6
            })), we.invert.value = +(!i && U >= W && U < W + 2 / 60 + 1e-4);
            let o = St();
            R.set(0, U >= G + 4 * m - .02);
            let s = G + 7 * m;
            !De && U >= s - .12 && (De = !0, n.audio.play(X.slap[Me % 4], {
                quantize: `beat`
            }), Me++), R.set(1, U >= s - .06);
            let c = o === `card` && e.active;
            if (c && (a.clicked || a.longPress)) {
                let e = a.nx,
                    t = a.ny;
                Y.setFromCamera(new k(e, t), C);
                let r = Y.ray.intersectsSphere(new oe(new z(q.x, .5, q.z), .42)),
                    i = wt(e, t, a.touch),
                    o = r ? Y.ray.origin.distanceTo($.set(q.x, .5, q.z)) : 1e9,
                    s = i ? Y.ray.origin.distanceTo(i.point.clone().applyMatrix4(I.matrixWorld)) : 1e9;
                r && o < s ? (K = U, n.audio.play(X.hop, {
                    quantize: `none`
                }), n.audio.play(X.pi, {
                    quantize: `16th`
                })) : i && Tt(i)
            }
            let f = !!document.activeElement ? .closest ? .(`button, a, [data-ui]`);
            c && !f && e.input.pressed(`Space`, `Enter`, `NumpadEnter`) && Et(), L.update(U), a.down && (tt = H);
            let p = a.touch ? a.down || H - tt < 1.5 ? 1 : 0 : a.presence,
                h = new z(q.x, Ie, q.z).project(C),
                g = p > .3 && e.active ? y((a.nx - h.x) * 7, -3, 3) : Math.sin(H * .7) * 1.2,
                _ = p > .3 && e.active ? y((a.ny - h.y) * 5, -2, 2) : Math.sin(H * .43 + 1) * .6;
            if (nt[0] = l(nt[0], g, 12, r), nt[1] = l(nt[1], _, 12, r), Qe = l(Qe, e.active && o === `card` && !i ? a.nx * p * .1 : 0, 3, r), $e = l($e, e.active && o === `card` && !i ? -a.ny * p * .05 : 0, 3, r), Ot(r), At(), c && !a.touch && a.presence > .5 ? H - rt > .05 && (J = wt(a.nx, a.ny, !1), rt = H) : J = null, J) {
                let e = mt[Pe % mt.length],
                    n = (ht[e] ? ? .32) * 1.08;
                $.copy(J.point).applyMatrix4(I.matrixWorld);
                let r = $.distanceTo(C.position),
                    o = n * u.cssH / (2 * Math.tan(C.fov * t / 2) * r);
                R.setHeld(!0, a.cx, a.cy, o * 1.08, -Le, e, i)
            } else R.setHeld(!1);
            Ce.time.value = U, Ce.aspect.value = u.aspect
        },
        render(e) {
            let t = n.renderer;
            if (!d) {
                t.setRenderTarget(e), t.setClearColor(16777215, 1), t.clear(), t.setRenderTarget(null);
                return
            }
            A.render(t, x), be.renderTo(e)
        },
        layout(e) {
            u = e, V = e.portrait ? B.port : B.land, R ? .place(V.card)
        },
        exit() {
            R ? .setHeld(!1)
        },
        dispose() {
            p = !0;
            for (let e of b) e();
            be ? .dispose(), xe ? .dispose(), Se ? .dispose(), T ? .dispose();
            for (let e of _) e.dispose();
            R ? .root.remove()
        },
        hints() {
            if (!d || !R ? .shown || n.ui.isDismissed(`logo-sticker`)) return [];
            $.set(.2, .62, .2).applyMatrix4(I.matrixWorld).project(C);
            let [e, t] = n.stage.toLogical(($.x + 1) / 2 * u.cssW, (1 - $.y) / 2 * u.cssH);
            return [{
                id: `logo-sticker`,
                kind: `click`,
                point: !0,
                at: [e, t],
                p: [e, t],
                lead: {
                    dx: 40,
                    dy: -150,
                    attach: `edge`
                },
                leadP: {
                    dx: 20,
                    dy: -70,
                    attach: `edge`
                },
                ...at
            }]
        },
        cursor: () => St() === `card` && J ? `pointer` : `default`,
        hud: () => `dark`
    };
    return jt
}
export {
    $ as
    default
};