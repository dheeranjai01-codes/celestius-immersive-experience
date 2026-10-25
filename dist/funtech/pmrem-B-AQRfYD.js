import {
    $n as e,
    Fn as t,
    gr as n,
    vn as r,
    yn as i
} from "./post-DJ5SZDIO.js";
var a = typeof location > `u` || new URLSearchParams(location.search).get(`pmrem9e5`) !== `0`,
    o = null;

function s() {
    if (o) return o;
    let e = new Float32Array(65536);
    for (let t = 0; t < 65536; t++) e[t] = i.fromHalfFloat(t);
    return o = e
}
var c = new Float32Array(1),
    l = new Uint32Array(c.buffer),
    u = 65408,
    d = Float64Array.from({
        length: 33
    }, (e, t) => 2 ** (24 - t));

function f(e, t, n) {
    e = e > 0 ? e < u ? e : u : 0, t = t > 0 ? t < u ? t : u : 0, n = n > 0 ? n < u ? n : u : 0;
    let r = e > t ? e > n ? e : n : t > n ? t : n;
    if (r === 0) return 0;
    c[0] = r;
    let i = Math.max(-16, (l[0] >>> 23 & 255) - 127) + 16,
        a = d[i];
    return Math.floor(r * a + .5) >= 512 && (i++, a = d[i]), (Math.floor(e * a + .5) | Math.floor(t * a + .5) << 9 | Math.floor(n * a + .5) << 18 | i << 27) >>> 0
}
async function p(i, o, c = {}) {
    let l = {
        texture: o.texture,
        dispose: () => o.dispose()
    };
    if (!a) return l;
    let u = o.width,
        d = o.height,
        p = performance.now(),
        m;
    try {
        let e = await i.readRenderTargetPixelsAsync(o, 0, 0, u, d);
        if (!(e instanceof Uint16Array)) return l;
        m = e
    } catch {
        return l
    }
    let h = m.length === u * d * 4 ? u * 4 : Math.ceil(u * 8 / 256) * 128,
        g = s(),
        _ = new Uint32Array(u * d),
        v = !1,
        y = performance.now();
    for (let e = 0; e < d; e++) {
        let t = e * h,
            n = e * u;
        for (let e = 0; e < u; e++) {
            let r = t + e * 4,
                i = f(g[m[r]], g[m[r + 1]], g[m[r + 2]]);
            _[n + e] = i, i && (v = !0)
        }
        c.frame && (e & 15) == 15 && performance.now() - y > 4 && (await c.frame(), y = performance.now())
    }
    if (!v) return l;
    let b = new r(_, u, d, e, n);
    b.name = `PMREM.cubeUv.rgb9e5`, b.mapping = 306, b.isPMREMTexture = !0, b.colorSpace = o.texture.colorSpace, b.minFilter = b.magFilter = t, b.generateMipmaps = !1, b.flipY = !1, b.userData.reupload = !1, b.needsUpdate = !0, i.initTexture(b), b.image = {
        data: null,
        width: u,
        height: d
    }, b.isRenderTargetTexture = !0, o.dispose();
    try {
        performance.measure(`pmrem · rgb9e5 ${u}×${d}`, {
            start: p,
            end: performance.now()
        })
    } catch {}
    return {
        texture: b,
        dispose: () => b.dispose()
    }
}
export {
    p as t
};