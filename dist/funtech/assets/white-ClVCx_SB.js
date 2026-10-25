import {
    $t as e,
    B as t,
    Bn as n,
    Dt as r,
    Et as i,
    G as a,
    Gn as o,
    H as s,
    I as c,
    J as l,
    On as u,
    St as d,
    Tt as f,
    U as p,
    Vn as m,
    Y as h,
    Yn as g,
    bt as _,
    hn as v,
    lt as y,
    rr as b,
    vt as x,
    w as S,
    xt as C,
    yr as w
} from "./post-DJ5SZDIO.js";
import {
    n as T,
    y as E
} from "./kit-D_lqBZ3L.js";
var D = [{
        type: `rect`,
        position: [0, 4.2, .6],
        size: [3.8, 2.4],
        color: `#ffffff`,
        intensity: 3.2,
        softness: .6
    }, {
        type: `rect`,
        position: [-3.2, 2.2, 2.6],
        size: [2.6, 2.2],
        color: `#fffaf2`,
        intensity: 3.6,
        softness: .55
    }, {
        type: `rect`,
        position: [3.4, 1.6, 1.8],
        size: [2.2, 2],
        color: `#f4f7ff`,
        intensity: 1.4,
        softness: .6
    }, {
        type: `rect`,
        position: [0, 1.2, -3.6],
        size: [7, 2.6],
        color: `#ffffff`,
        intensity: .9,
        softness: .7
    }],
    O = null;
async function k(e, t = 256) {
    (!O || O.size !== t) && (O = {
        size: t,
        users: 0,
        rt: T(e, {
            top: `#d9d9d6`,
            bottom: `#f2f2ef`,
            horizon: `#ffffff`,
            k: .95,
            size: t,
            center: [0, .6, 0],
            floor: `#efefec`,
            cards: D,
            behind: `#2a2a2c`
        })
    });
    let n = O;
    n.users++;
    let r = await n.rt,
        i = !0;
    return {
        texture: r.texture,
        dispose() {
            i && (i = !1, !(--n.users > 0) && (r.dispose(), O === n && (O = null)))
        }
    }
}

function A(s) {
    let l = s.res ? ? 1024,
        m = new b(l, l, {
            type: u,
            depthBuffer: !0
        });
    m.texture.userData.sleeps = !0;
    let h = new o(-s.halfSize, s.halfSize, s.halfSize, -s.halfSize, .05, s.distance * 2);
    h.position.copy(s.center).addScaledVector(s.dir, s.distance), h.lookAt(s.center), h.updateMatrixWorld(!0), h.updateProjectionMatrix(), h.layers.set(2);
    let g = {
            VP: d(new n().multiplyMatrices(h.projectionMatrix, h.matrixWorldInverse)),
            pos: d(h.position.clone()),
            dir: d(s.center.clone().sub(h.position).normalize()),
            near: d(s.distance - s.halfSize * 1.5),
            range: d(s.halfSize * 3),
            texel: d(1 / l)
        },
        w = new e;
    w.colorNode = i(t(y.sub(g.pos), g.dir).sub(g.near).div(g.range)), w.side = 2, w.blending = 0;
    let T = new v().setRGB(1e4, 1e4, 1e4);
    return {
        rt: m,
        cam: h,
        mat: w,
        U: g,
        render(e, t) {
            let n = e.getRenderTarget(),
                r = e.getClearColor(new v),
                i = e.getClearAlpha(),
                a = t.background,
                o = t.overrideMaterial;
            t.background = null, t.overrideMaterial = w, e.setRenderTarget(m), e.setClearColor(T, 1), e.clear(), e.render(t, h), t.background = a, t.overrideMaterial = o, e.setRenderTarget(n), e.setClearColor(r, i)
        },
        factor(e, n = 3.2) {
            return S(() => {
                let i = g.VP.mul(r(e, 1)),
                    o = f(i.x.div(i.w).mul(.5).add(.5), i.y.div(i.w).mul(.5).add(.5)),
                    s = t(e.sub(g.pos), g.dir).sub(g.near).sub(.02).div(g.range),
                    l = p(0).toVar(),
                    u = a(x(t(e.xz, f(12.9898, 78.233))).mul(43758.5453)).mul(6.2832);
                for (let e = 0; e < 12; e++) {
                    let t = e / 12 * Math.PI * 2,
                        r = Math.sqrt((e + .5) / 12),
                        i = f(c(u.add(t)), x(u.add(t))).mul(r * n).mul(g.texel);
                    l.addAssign(_(C(m.texture, o.add(i)).r, s))
                }
                return l.div(12)
            })()
        },
        dispose() {
            m.dispose(), w.dispose()
        }
    }
}

function j(e = 12) {
    let t = Array.from({
            length: e
        }, () => new w(0, 0, .01, 0)),
        n = E(t, `vec4`);
    return {
        vals: t,
        arr: n,
        node: S(() => {
            let t = p(1).toVar();
            for (let r = 0; r < e; r++) {
                let e = n.element(r),
                    i = l(y.xz.sub(e.xy)).div(h(e.z, .001));
                t.mulAssign(p(1).sub(e.w.mul(s(i.mul(i).negate().mul(2.2)))))
            }
            return t
        })(),
        n: e
    }
}

function M(t) {
    let n = new g(t.size ? ? 60, t.size ? ? 60);
    n.rotateX(-Math.PI / 2);
    let r = new e,
        a = t.shadowAmt ? ? d(.26);
    r.colorNode = S(() => {
        let e = i(t.white ? ? 1);
        return t.shadow && (e = e.mul(p(1).sub(t.shadow.factor(y).mul(a)))), t.ao && (e = e.mul(t.ao.node)), e
    })();
    let o = new m(n, r);
    return o.renderOrder = -1, {
        mesh: o,
        material: r,
        amt: a,
        dispose() {
            n.dispose(), r.dispose()
        }
    }
}
export {
    M as i, j as n, A as r, k as t
};