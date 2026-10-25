import {
    Bn as e,
    vr as t
} from "./post-DJ5SZDIO.js";
var n = new t;

function r(e, t, r, i = [0, 0]) {
    if (n.copy(r).applyMatrix4(t.matrixWorldInverse), n.z > -.001) return null;
    n.copy(r).project(t);
    let [a, o] = e.fromNdc(n.x, n.y);
    return i[0] = a, i[1] = o, i
}

function i(e, t) {
    n.copy(t).applyMatrix4(e.matrixWorldInverse);
    let r = Math.atan(Math.tan(e.fov * Math.PI / 360) * e.aspect),
        i = Math.atan2(n.x, -n.z);
    return Math.abs(i) <= r ? null : i > 0 ? `right` : `left`
}

function a(n) {
    let i = null;
    if (n.traverse(e => {
            !i && e.name === `EarMuffs_Mesh01` && (i = e)
        }), !i) return null;
    let a = i;
    n.updateMatrixWorld(!0);
    let o = new e().copy(a.matrixWorld).invert(),
        s = new e,
        c = new t,
        l = [
            [],
            []
        ];
    a.traverse(e => {
        let t = e;
        if (!t.isMesh) return;
        s.multiplyMatrices(o, t.matrixWorld);
        let n = t.geometry.attributes.position;
        for (let e = 0; e < n.count; e += 2) c.fromBufferAttribute(n, e).applyMatrix4(s), l[c.x >= 0 ? 0 : 1].push({
            p: c.clone(),
            lx: Math.abs(c.x)
        })
    });
    let u = e => {
            if (!e.length) return new t;
            let n = Math.max(...e.map(e => e.lx)),
                r = new t,
                i = new t,
                a = 0;
            for (let t of e) r.add(t.p), t.lx > n * .9 && (i.add(t.p), a++);
            return r.multiplyScalar(1 / e.length), i.multiplyScalar(1 / Math.max(1, a)), r.lerp(i, .5)
        },
        d = [u(l[0]), u(l[1])],
        f = new t,
        p = new t,
        m = [0, 0],
        h = [0, 0];
    return {
        at(e, t, n = [0, 0], i = `right`) {
            a.updateWorldMatrix(!0, !1), f.copy(d[0]).applyMatrix4(a.matrixWorld), p.copy(d[1]).applyMatrix4(a.matrixWorld);
            let o = r(e, t, f, m),
                s = r(e, t, p, h),
                c = o && s ? o[0] >= s[0] == (i === `right`) ? o : s : o ? ? s;
            return c ? (n[0] = c[0], n[1] = c[1], n) : null
        }
    }
}

function o(n, i, a = .15) {
    let o = null;
    if (n.traverse(e => {
            !o && e.name === i && (o = e)
        }), !o) return null;
    let s = o;
    n.updateMatrixWorld(!0);
    let c = new e().copy(s.matrixWorld).invert(),
        l = new e,
        u = new t,
        d = [];
    if (s.traverse(e => {
            let n = e;
            if (!n.isMesh) return;
            l.multiplyMatrices(c, n.matrixWorld);
            let r = n.geometry.attributes.position;
            for (let e = 0; e < r.count; e += 2) u.fromBufferAttribute(r, e).applyMatrix4(n.matrixWorld), d.push({
                p: new t().fromBufferAttribute(r, e).applyMatrix4(l),
                y: u.y
            })
        }), !d.length) return null;
    let f = 1 / 0,
        p = -1 / 0;
    for (let e of d) f = Math.min(f, e.y), p = Math.max(p, e.y);
    let m = p - (p - f) * a,
        h = new t,
        g = 0;
    for (let e of d) e.y >= m && (h.add(e.p), g++);
    h.multiplyScalar(1 / Math.max(1, g));
    let _ = new t;
    return {
        world(e = _) {
            return s.updateWorldMatrix(!0, !1), e.copy(h).applyMatrix4(s.matrixWorld)
        },
        at(e, t, n = [0, 0]) {
            return r(e, t, this.world(), n)
        }
    }
}

function s(n, i, a = 64) {
    let o = [];
    if (n.updateMatrixWorld(!0), n.traverse(n => {
            if (!i.includes(n.name)) return;
            let r = new e().copy(n.matrixWorld).invert(),
                s = new e,
                c = [];
            n.traverse(e => {
                let n = e;
                if (!n.isMesh) return;
                s.multiplyMatrices(r, n.matrixWorld);
                let i = n.geometry.attributes.position,
                    o = Math.max(1, Math.floor(i.count / a));
                for (let e = 0; e < i.count; e += o) c.push(new t().fromBufferAttribute(i, e).applyMatrix4(s))
            }), c.length && o.push({
                node: n,
                pts: c
            })
        }), !o.length) return null;
    let s = new t,
        c = [0, 0];
    return {
        at(e, t) {
            let n = 1 / 0,
                i = 1 / 0,
                a = -1 / 0,
                l = -1 / 0;
            for (let u of o) {
                u.node.updateWorldMatrix(!0, !1);
                for (let o of u.pts) r(e, t, s.copy(o).applyMatrix4(u.node.matrixWorld), c) && (n = Math.min(n, c[0]), i = Math.min(i, c[1]), a = Math.max(a, c[0]), l = Math.max(l, c[1]))
            }
            return a > n ? [n, i, a, l] : null
        }
    }
}
export {
    r as a, i, o as n, s as r, a as t
};