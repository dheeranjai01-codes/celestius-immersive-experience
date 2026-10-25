import {
    $t as e,
    At as t,
    Bt as n,
    Ct as r,
    Et as i,
    Fn as a,
    Ft as o,
    Gt as s,
    Ht as c,
    J as l,
    Jn as u,
    Jt as d,
    Lt as f,
    M as p,
    Pt as m,
    Sn as h,
    St as g,
    Tt as _,
    U as v,
    Vn as y,
    Wt as b,
    Yn as x,
    Zn as ee,
    _r as te,
    dn as ne,
    g as re,
    hn as ie,
    it as ae,
    j as oe,
    jt as S,
    ln as se,
    lt as ce,
    rr as le,
    st as ue,
    t as de,
    tr as fe,
    un as pe,
    vr as C,
    xt as me,
    yt as he,
    zt as w
} from "./post-DJ5SZDIO.js";
import {
    u as ge
} from "./index-BSu4tWCh.js";
import {
    a as _e
} from "./target-DNdmBkK8.js";
import {
    a as ve,
    i as ye,
    o as be,
    s as xe,
    t as Se
} from "./kit-D_lqBZ3L.js";
import {
    _ as Ce,
    c as we,
    d as Te,
    g as Ee,
    h as De,
    i as Oe,
    l as ke,
    m as Ae,
    n as je,
    o as Me,
    r as T,
    s as E,
    t as Ne,
    u as Pe
} from "./rest-CKA-rbml.js";
import {
    c as Fe,
    n as Ie,
    s as Le,
    t as Re
} from "./shards-Bvh-kNQZ.js";
var ze = new C(-.95, 0, 2.75),
    D = {
        knock: [`knock_1`, `knock_2`, `knock_3`],
        crack: [`glass_crack`],
        brk: [`glass_break`],
        land: [`land`]
    },
    Be = () => new Promise(e => requestAnimationFrame(() => e())),
    Ve = 3,
    He = ge(`画面をノック`, `Knock on the screen`),
    Ue = ge(`タップでノック`, `Tap to knock`),
    We = [
        [.14, .78],
        [.15, .2],
        [.86, .2]
    ],
    Ge = [{
        dx: -200,
        dy: 60
    }, {
        dx: -200,
        dy: -40
    }, {
        dx: 200,
        dy: -40
    }],
    Ke = [{
        dx: 30,
        dy: 110,
        attach: `edge`
    }, {
        dx: 30,
        dy: -110,
        attach: `edge`
    }, {
        dx: -30,
        dy: -110,
        attach: `edge`
    }];

function qe(e, t, n) {
    let r = e.geometry.attributes.position,
        i = new C;
    e.updateMatrixWorld(!0);
    let a = 0;
    for (let o = 0; o < r.count; o++) {
        i.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld).sub(t.pc0);
        let s = i.dot(t.vr),
            c = i.dot(t.vu);
        Math.abs(s - n.cx) > n.hw || c > n.cy + n.hh || c < n.sy - n.sh || (a = Math.max(a, i.dot(t.vn)))
    }
    return a
}

function O(ge) {
    let O, k = null,
        A, Je, j, Ye, M, Xe, Ze, N = !1,
        Qe = !1,
        $e = [],
        et = [],
        P, tt, nt, F, I, L, R, rt, z, B, it, V, at, ot, st, ct, lt, ut, H, dt = [],
        ft = {
            pts: null
        },
        pt = new ee,
        mt = new C,
        ht = new C,
        gt = new C,
        _t = 0,
        vt = 0,
        yt = 0,
        U = [.78, .36],
        bt = new C,
        W = `idle`,
        G = 0,
        K = 0,
        q = 0,
        J = [1e9, 1e9, 1e9],
        xt = -1e9,
        St = -1,
        Y = 1e9,
        Ct = !1,
        wt = 1e9,
        X = 1e9,
        Tt = !1,
        Et = !1,
        Dt = null,
        Ot = null,
        kt = ``,
        At = 0,
        jt = 0,
        Z = [0, 0],
        Mt = 2,
        Nt = 0,
        Pt = -10,
        Ft = 0,
        It = -2,
        Q = [],
        Lt = [null, null, null],
        Rt = e => e <= Y || !Dt ? e - Y : Dt.tau(e - Y),
        zt = e => !Dt || e <= Y + .03 || e >= X ? 0 : m((1 - Dt.rate(e - Y)) / .94),
        Bt = [0, 0],
        Vt = new C,
        Ht = ``;

    function Ut() {
        let e = J.reduce((e, t) => e + +(G >= t), 0),
            t = Math.min(Math.max(e, 0), 2),
            n = e < 0 ? null : _e(O.stage, j, Wt(We[t], Vt), Bt),
            r = e < 0 ? null : qt(),
            i = e => Math.round(e / 2),
            a = `${e}|${n?`${i(n[0])},${i(n[1])}`:``}|${r?r.map(i).join(`,`):``}`;
        (e !== It || a !== Ht) && (It = e, Ht = a, O.gate(e < 0 ? null : {
            kind: `count`,
            text: He,
            touchText: Ue,
            count: [e, Ve],
            unit: `回`,
            progress: e / Ve,
            marks: `knock`,
            target: n ? [n[0], n[1]] : null,
            spot: t,
            move: `glide`,
            lead: Ge[t],
            leadP: Ke[t],
            keepClear: r ? [r] : void 0
        }))
    }
    let Wt = (e, t) => t.copy(P.domToWorld(e[0] * P.FW, e[1])[0]),
        Gt = new C,
        Kt = [0, 0];

    function qt() {
        let e = 1 / 0,
            t = 1 / 0,
            n = -1 / 0,
            r = -1 / 0;
        for (let [i, a] of [
                [0, 0],
                [1, 0],
                [0, 1],
                [1, 1],
                [.5, 0],
                [.5, 1],
                [0, .5],
                [1, .5]
            ]) _e(O.stage, j, Wt([i, a], Gt), Kt) && (e = Math.min(e, Kt[0]), t = Math.min(t, Kt[1]), n = Math.max(n, Kt[0]), r = Math.max(r, Kt[1]));
        return n > e ? [e - 6, t - 6, n + 6, r + 6] : null
    }

    function Jt(e, t) {
        let n = performance.now();
        rt = Le({
            w: e.FW,
            h: 1,
            ix: t[0],
            iy: t[1],
            seed: 2210,
            rays: 12,
            r0: .045,
            growth: 1.5,
            branch: [2, 4],
            jitterR: .6,
            core: 7
        });
        for (let e of rt.edges) e.keep = e.radial > .62 || E(e.i, e.j, 3) < .95 * Math.exp(-e.dMin / .3) + .04;
        return z = document.createElement(`canvas`), z.width = O.perf.settings.tier === `low` ? 1024 : 1536, z.height = Math.round(z.width / e.FW), z.getContext(`2d`).clearRect(0, 0, z.width, z.height), B = new ne(z), B.colorSpace = ``, B.flipY = !1, B.generateMipmaps = !1, B.minFilter = a, B.userData.reupload = !0, performance.measure(`breakout · fracture`, {
            start: n,
            end: performance.now()
        }), B
    }
    async function Yt() {
        let t = O.renderer,
            n = O.perf.settings,
            a = Promise.all([O.assets.texture(`gen/breakout/floor.webp`, {
                srgb: !1,
                channels: 1,
                half: !0,
                anisotropy: 8
            }), O.assets.texture(`gen/breakout/ono.webp`, {
                half: !0
            })]),
            o = null;
        try {
            o = await Oe(O, {
                cancelled: () => N,
                label: `breakout`,
                crack: Jt,
                burst: !0
            })
        } finally {
            o || a.then(e => {
                for (let t of e) t.dispose()
            }).catch(() => {})
        }
        if (!o) return;
        let [s, c] = await a.catch(e => {
            throw o.dispose(), e
        });
        if (N) {
            o.dispose(), s.dispose(), c.dispose();
            return
        }
        k = o, $e.push(s, c), {
            scene: A,
            inner: Je,
            camera: j,
            f: P,
            fk: tt,
            fA: H,
            backP: nt,
            PU: it,
            C: V,
            bodyU: at,
            key: ot,
            hemi: st,
            rim: ct,
            spillA: lt,
            spillB: ut,
            yIn: _t,
            zRest: vt,
            zHit: yt,
            IMP: U,
            glow: Ye,
            look: M,
            tmNeutral: Xe
        } = k, pt.copy(k.frames.endQuat), mt.copy(k.frames.fwdC), ht.copy(k.frames.upC), gt.copy(k.frames.rightC);
        let u = new x(26, 14);
        u.rotateX(-Math.PI / 2);
        let d = new e,
            f = _(ce.x.add(6).div(12), v(1).sub(ce.z.add(1.8).div(8)));
        d.colorNode = Ee(it, k.print, me(s, f), f.mul(_(12 / 8.2, 8 * De / 8.2)), Ce(it, k.shadowRT.texture, ce, .02), ce.xz), F = new y(u, d), F.position.set(0, 0, 4.2), F.visible = !1, A.add(F), $e.push(u, d); {
            let t = document.createElement(`canvas`);
            t.width = 256, t.height = 128;
            let n = t.getContext(`2d`);
            n.fillStyle = `#fff`;
            for (let e = 2; e < 128; e += 5)
                for (let t = 2 + e / 5 % 2 * 2.5; t < 256; t += 5) {
                    let r = Math.hypot((t - 128) / 128, (e - 64) / 64),
                        i = Math.max(0, 1 - r) ** .7 * 2.9;
                    i > .3 && (n.beginPath(), n.arc(t, e, i, 0, Math.PI * 2), n.fill())
                }
            let a = new ne(t);
            a.colorSpace = ``, a.userData.reupload = !0;
            let o = new e({
                    transparent: !0,
                    depthWrite: !1,
                    premultipliedAlpha: !0,
                    blending: 4
                }),
                s = new ie(1, 1, 1).lerp(new ie(.07, .08, .2), .92);
            o.colorNode = i(s.r, s.g, s.b), o.opacityNode = me(a, r()).a.mul(g(.9)), I = new y(new x(.62, .31), o), I.rotation.x = -Math.PI / 2, I.renderOrder = 1, I.visible = !1, A.add(I), $e.push(a, o, I.geometry)
        }[bt] = P.domToWorld(U[0], U[1]); {
            let e = e => {
                    let t = e.clone().sub(P.pc0);
                    return [t.dot(P.vr), t.dot(P.vu)]
                },
                [t, n] = e(P.pa),
                [r] = e(P.pb),
                [, i] = e(P.pcc);
            $.sx = (t + r) / 2, $.sy = (n + i) / 2, $.sw = Math.abs(r - t) / 2, $.sh = Math.abs(i - n) / 2, $.cx = $.sx, $.cy = $.sy - .06, $.hw = $.sw + .22, $.hh = $.sh + .3, $.front = qe(k.body, P, $)
        }
        if (en.setFromNormalAndCoplanarPoint(P.vn, P.pc0.clone().addScaledVector(P.vn, $.front)), await Be(), N) return;
        let m = performance.now();
        L = Re(rt.cells, (e, t) => P.domToWorld(e, t), (e, t) => [e / P.FW, t], .02 / 1);
        for (let e of L.bodies) {
            let t = e.cell,
                n = t.labels.some(e => e < 0);
            e.data.stays = n && t.d > .62 && E(t.id, 5, 1) < .7 ? 1 : 0;
            let r = new te(t.c[0] - U[0], t.c[1] - U[1]),
                i = r.length() || 1;
            r.multiplyScalar(1 / i);
            let a = new C().addScaledVector(P.vr, r.x).addScaledVector(P.vu, -r.y),
                o = Math.exp(-i / .3);
            e.data.pulver = +(i < .2), e.delay = i * .035, e.v.copy(a.multiplyScalar(1.4 + 4.2 * o + E(t.id, 1, 2) * .9)).addScaledVector(P.vn, 2.2 + 5 * o + E(t.id, 2, 2) * 2), e.v.y += .5 + E(t.id, 3, 2) * .8, e.data.vx = e.v.x, e.data.vy = e.v.y, e.data.vz = e.v.z;
            let s = new C(E(t.id, 4, 1) - .5, E(t.id, 5, 1) - .5, E(t.id, 6, 1) - .5).normalize(),
                c = (6 + E(t.id, 7, 1) * 14) * (E(t.id, 8, 1) < .5 ? -1 : 1);
            e.w.copy(s.multiplyScalar(c)), e.data.wx = e.w.x, e.data.wy = e.w.y, e.data.wz = e.w.z
        }
        let h = new e({
            transparent: !0,
            depthWrite: !1,
            side: 2
        });
        h.positionNode = L.node.position;
        let b = ae(p.sub(ce)),
            ee = Ie(L, {
                key: i(Ne.x, Ne.y, Ne.z),
                tint: i(.78, .95, .88),
                view: b,
                edgeGain: 1.1,
                camDist: l(p.sub(ce)),
                plates: {
                    web: k.plates.web,
                    dust: k.plates.dust,
                    imp: U,
                    fw: P.FW
                }
            });
        h.colorNode = ee.rgb, h.opacityNode = ee.a, R = new y(L.geometry, h), R.frustumCulled = !1, R.renderOrder = 4, R.visible = !1, A.add(R), $e.push(h), L.upload(); {
            let t = n.tier === `low` ? 140 : 300,
                r = new pe,
                a = new Float32Array(t * 9),
                o = new Float32Array(t * 9),
                s = new Float32Array(t * 3);
            for (let e = 0; e < t; e++) {
                let t = E(e, 1, 9) * Math.PI * 2,
                    n = .3 + E(e, 2, 9) * 3.4,
                    r = E(e, 3, 9) * .16,
                    i = new C().addScaledVector(P.vr, Math.cos(t) * r).addScaledVector(P.vu, Math.sin(t) * r * .8).add(bt),
                    c = new C().addScaledVector(P.vr, Math.cos(t) * n).addScaledVector(P.vu, Math.sin(t) * n).addScaledVector(P.vn, 1 + E(e, 4, 9) * 4.5);
                for (let t = 0; t < 3; t++) {
                    let n = e * 9 + t * 3;
                    a[n] = i.x, a[n + 1] = i.y, a[n + 2] = i.z, o[n] = c.x, o[n + 1] = c.y, o[n + 2] = c.z, s[e * 3 + t] = t + E(e, 6, 9) * .9
                }
            }
            r.setAttribute(`position`, new se(a, 3)), r.setAttribute(`vel`, new se(o, 3)), r.setAttribute(`corner`, new se(s, 1)), r.computeBoundingSphere(), r.boundingSphere.radius = 100;
            let c = new e({
                    transparent: !0,
                    depthWrite: !1,
                    blending: 2,
                    side: 2
                }),
                l = g(0),
                u = g(0),
                d = oe(`vel`, `vec3`),
                f = oe(`corner`, `float`),
                p = ue.add(d.mul(l)).add(i(0, -4.9 * .4, 0).mul(l.mul(l))),
                m = f.floor().mul(2.0944).add(f.fract().mul(6.28)),
                h = v(.004).add(f.fract().mul(.006));
            c.positionNode = p.add(i(m.cos(), m.sin(), 0).mul(h)), c.colorNode = i(.92, .99, 1).mul(v(1.1)).mul(u);
            let _ = new y(r, c);
            _.frustumCulled = !1, _.visible = !1, _.renderOrder = 5, _.userData = {
                T: l,
                A: u
            }, A.add(_), ft.pts = _, $e.push(r, c)
        }
        performance.measure(`breakout · shards`, {
            start: m,
            end: performance.now()
        });
        for (let t = 0; t < Ve; t++) {
            let n = k.prints.ono[t],
                a = [.62, .5, .95][t],
                o = a * n.aspect,
                s = new x(o, a, 16, 8),
                l = {
                    curl: g(0),
                    lift: g(0),
                    alpha: g(1)
                },
                u = r().mul(_(n.w, n.h)).add(_(n.x, 1 - n.y - n.h)),
                d = new e({
                    transparent: !0,
                    depthWrite: !1,
                    side: 2
                }),
                f = ue.x.div(o);
            d.positionNode = ue.add(i(0, 0, l.curl.mul(f.mul(f)).mul(o).mul(.5)));
            let p = me(c, u),
                m = he(.35, 0, r().x.add(r().y).sub(.9).abs()).mul(.06);
            d.colorNode = p.rgb.mul(.97).add(m), d.opacityNode = p.a.mul(l.alpha), d.alphaTest = .02;
            let h = new y(s, d);
            h.visible = !1, h.renderOrder = 6;
            let v = new e({
                transparent: !0,
                depthWrite: !1
            });
            v.colorNode = i(.05, .02, .01), v.opacityNode = me(c, u).a.mul(.32).mul(l.alpha);
            let b = new y(new x(o, a), v);
            b.visible = !1, b.renderOrder = 5, A.add(h, b), dt.push({
                mesh: h,
                shadow: b,
                u: l,
                at: -1e9,
                pos: new C,
                n: new C(0, 0, 1),
                roll: 0,
                on: !1,
                bezel: !1,
                vel: new C,
                spin: new C,
                h: a
            }), $e.push(s, d, v, b.geometry)
        }
        let S = new le(64, 64, { ...de,
                depthBuffer: !1
            }),
            fe = {
                sh: R.visible,
                fl: F.visible,
                gl: ft.pts.visible
            };
        R.visible = !0, F.visible = !0, ft.pts.visible = !0, I.visible = !0;
        for (let e of dt) e.mesh.visible = !0, e.shadow.visible = !0;
        A.add(H), hn(0), k.updatePortal(j.position, 1, 0);
        for (let e of tt.meshes) e.frustumCulled = !1;
        let w = k,
            ge = e => O.own ? O.own(e) : e(),
            _e = () => ge(() => w.render(S)),
            ye = () => ge(() => w.renderInner());
        await be(t, [...k.textures(), s, c, B, ...ve(tt.mats)], () => N);
        let xe = performance.now();
        await re(t, A, _e, {
            cancelled: () => N
        }), Je.add(H);
        let Se = performance.now();
        if (await re(t, Je, ye, {
                cancelled: () => N
            }), performance.measure(`breakout · warm outer`, {
                start: xe,
                end: Se
            }), performance.measure(`breakout · warm inner`, {
                start: Se,
                end: performance.now()
            }), S.dispose(), !N) {
            for (let e of tt.meshes) e.frustumCulled = !0;
            R.visible = fe.sh, F.visible = fe.fl, ft.pts.visible = fe.gl, I.visible = !1;
            for (let e of dt) e.mesh.visible = !1, e.shadow.visible = !1;
            k.layout(Ze), Xt(), Qe = !0
        }
    }

    function Xt() {
        if (W = `idle`, q = 0, J.fill(1e9), xt = -1e9, Q.length = 0, Lt.fill(null), St = -1, Y = 1e9, Ct = !1, wt = 1e9, X = 1e9, Tt = !1, Et = !1, Dt = null, Ot = null, kt = ``, Nt = 0, Ft = 0, Qe || L) {
            L.reset(), R.visible = !1;
            for (let e of dt) e.on = !1, e.mesh.visible = !1, e.shadow.visible = !1, e.at = -1e9;
            F.visible = !1, I.visible = !1, H.parent !== Je && Je.add(H), V.glass.value = 1, V.crt.value = 1, dn()
        }
    }

    function Zt(e, t) {
        if (W !== `idle` || q >= Ve || !Qe || q > 0 && G - xt < .22) return;
        xt = G;
        let n = q++,
            r = O.audio.play(D.knock[n], {
                quantize: `16th`
            }),
            i = r > 0 ? Math.max(.03, r - K) : .08;
        J[n] = G + i, n === 2 && O.audio.play(D.crack, {
            quantize: `16th`,
            minGap: 0
        });
        let a = e !== null && t !== null ? sn(e, t) : null;
        if (Q[n] = a ? ? We[Math.min(n, We.length - 1)], Lt[n] = Le({
                w: P.FW,
                h: 1,
                ix: Q[n][0] * P.FW,
                iy: Q[n][1],
                seed: 4100 + 37 * n,
                rays: n === 2 ? 10 : 8,
                r0: .03,
                growth: 1.55,
                branch: [2, 4],
                jitterR: .55,
                core: 5
            }), cn(n, e, t), n === 2) {
            let e = K + i;
            St = O.clock.next(`beat`, 0, e + 1.5 * d)
        }
    }
    let Qt = new fe,
        $t = new te,
        en = new u,
        $ = {
            cx: 0,
            cy: 0,
            hw: 0,
            hh: 0,
            sx: 0,
            sy: 0,
            sw: 0,
            sh: 0,
            front: 0
        },
        tn = new C,
        nn = new C,
        rn = new C,
        an = new C,
        on = new u;

    function sn(e, t) {
        if (Wt([0, 0], tn), Wt([1, 0], nn), Wt([0, 1], rn), on.setFromCoplanarPoints(tn, nn, rn), $t.set(e, t), Qt.setFromCamera($t, j), !Qt.ray.intersectPlane(on, an)) return null;
        let n = nn.sub(tn),
            r = rn.sub(tn),
            i = an.sub(tn),
            a = i.dot(n) / n.lengthSq(),
            o = i.dot(r) / r.lengthSq();
        return [m(a, .07, .93), m(o, .09, .91)]
    }

    function cn(e, t, n) {
        let r = dt[e];
        r.at = J[e], r.on = !0, r.roll = (E(e, 11, G) - .5) * .5;
        let i = [
                [-.62, -.28],
                [.42, .1],
                [.62, .42]
            ][e],
            a = i[0],
            o = i[1];
        t !== null && n !== null && (a = t, o = n), $t.set(a, o), Qt.setFromCamera($t, j), r.bezel = !1;
        let s = new C;
        if (Qt.ray.intersectPlane(en, s)) {
            let e = s.clone().sub(P.pc0),
                t = e.dot(P.vr),
                n = e.dot(P.vu),
                i = Math.abs(t - $.cx) < $.hw && Math.abs(n - $.cy) < $.hh,
                a = Math.abs(t - $.sx) < $.sw && Math.abs(n - $.sy) < $.sh,
                o = i && !a && n < $.sy - $.sh;
            if (i && !a && !o) r.pos.copy(s).addScaledVector(P.vn, .015), r.n.copy(P.vn), r.bezel = !0;
            else if (a || o) {
                let e = t < $.sx ? -1 : 1,
                    i = r.mesh.geometry.parameters.width;
                an.copy(P.pc0).addScaledVector(P.vr, $.cx + e * ($.hw + .12 + .45 * i)).addScaledVector(P.vu, m(n, $.sy - $.sh, $.sy + $.sh)).project(j), $t.set(m(an.x, -.92, .92), m(an.y, -.8, .8)), Qt.setFromCamera($t, j)
            }
        }
        if (!r.bezel) {
            let e = new u().setFromNormalAndCoplanarPoint(mt.clone().negate(), nt.position),
                t = new C;
            Qt.ray.intersectPlane(e, t), r.pos.copy(t).addScaledVector(mt, -.01), r.n.copy(mt).negate()
        }
        r.vel.copy(gt).multiplyScalar((E(e, 1, 7) < .5 ? -1 : 1) * (1.6 + E(e, 2, 7) * .8)).add(new C(0, 1.8 + E(e, 3, 7) * .8, 0)).addScaledVector(mt, -.6), r.spin.set(E(e, 4, 7) - .5, E(e, 5, 7) - .5, E(e, 6, 7) - .5).multiplyScalar(9)
    }
    let ln = [
        [.3, .09, .028],
        [.36, .11, .034],
        [.5, .16, .046]
    ];

    function un() {
        let e = (e, t) => {
                let n = G - J[e];
                return n < 0 ? 0 : t * (1 - 2 ** (-10 * m(n / .1)))
            },
            t = [0, 1, 2].filter(e => G >= J[e] && Lt[e] && G < Y).map(t => ({
                k: t,
                rr: e(t, ln[t][0]),
                rc: e(t, ln[t][1]),
                core: ln[t][2],
                haze: .28 + .05 * t
            })),
            n = new Set;
        if (G >= Y) {
            let e = Rt(G);
            for (let t of L.bodies) !t.data.stays && e >= t.delay && n.add(t.cell.id)
        }
        return {
            knocksNow: t,
            broken: G >= Y,
            gone: n
        }
    }

    function dn() {
        let e = un(),
            t = e.knocksNow.map(e => `${e.k}:${e.rr.toFixed(3)}`).join(`,`) + `|${e.broken}|${e.gone.size}`;
        if (t === kt) return;
        kt = t;
        let n = 2.2 * (z.width / 2048),
            r = z.getContext(`2d`);
        r.setTransform(1, 0, 0, 1, 0, 0), r.fillStyle = `#000`, r.fillRect(0, 0, z.width, z.height);
        for (let t of e.knocksNow) Fe(Lt[t.k], z, {
            rr: t.rr,
            rc: t.rc,
            haze: t.haze,
            core: t.core,
            lineW: n,
            over: !0,
            chips: 24
        });
        if (e.broken) {
            for (let e of rt.edges) e.keep = !0;
            Fe(rt, z, {
                rr: 2,
                rc: 2,
                haze: .4,
                core: .058,
                gone: e.gone,
                lineW: n,
                over: !0
            })
        }
        B.needsUpdate = !0
    }

    function fn(e) {
        let t = vt - T.back,
            r = 0,
            i = 0;
        for (let a = 0; a < 3; a++) {
            let o = e - J[a];
            if (!(o < -.14 || o > .45)) {
                if (o < -.045) {
                    let e = S.out(w(-.14, -.045, o));
                    t -= .1 * e, r -= .1 * e
                } else if (o < 0) {
                    let e = S.in(w(-.045, 0, o));
                    t = n(vt - .22, yt, e), r += n(-.1, .18, e)
                } else {
                    let e = 1 - s(o, 0, 4.2, .45);
                    t = n(vt - T.back, yt, e) - .035 * Math.sin(Math.min(1, o / .3) * Math.PI) * (1 - e), r += .18 * e, i += .1 * Math.exp(-o * 16) * Math.cos(o * 30)
                }
            }
        }
        return {
            z: t,
            pitch: r,
            sq: i
        }
    }

    function pn() {
        let e = tt.rig.idle(G * T.idleRate),
            t = K / d % 1,
            r = 0,
            i = _t,
            a = vt - T.back,
            o = 0,
            c = 0,
            l = 0,
            u = `open`,
            f = Y;
        if (W === `idle` || W === `windup` && G < J[2] + .35) {
            let n = fn(G);
            a = n.z, o = n.pitch, l = n.sq + T.squash * Math.exp(-t / .08), e.antenna = q > 0 ? .25 * Math.sin(G * 30) * Math.exp(-Math.max(0, G - J[q - 1]) * 6) : 0, u = q > 0 && G - J[Math.max(0, q - 1)] < .6 ? `angry` : `open`, c = Z[0] * .05, o += -Z[1] * .04;
            for (let e = 0; e < 3; e++) {
                let t = G - J[e],
                    n = Q[e];
                if (!n || t < -.14 || t > .6) continue;
                let r = t < 0 ? S.out(w(-.14, 0, t)) : 1 - S.inOut(w(.05, .6, t));
                c += r * (.5 - n[0]) * .55, o += r * (n[1] - .45) * .4
            }
        } else if (G < f) {
            let t = J[2] + .35,
                r = S.out(w(t, t + .2, G)),
                s = S.in(w(f - .085, f, G));
            a = n(vt - .95 * r, yt, s), i = _t + .06 * Math.sin(Math.PI * r) * (1 - s), l = .2 * r * (1 - s) - .16 * s + .012 * Math.sin(G * 90) * r * (1 - s), o = -.22 * r * (1 - s) + .4 * s, e.antenna = .7 * r * (1 - s) - .5 * s, e.shoeL.z = e.shoeR.z = -.08 * r * (1 - s), u = `angry`
        } else {
            let t = Rt(G),
                d = Rt(X),
                f = yt,
                p = _t;
            if (t < .1) a = f + 7 * t, r = 0, i = p + .5 * t, o = .4 - t * 2.5, l = -.16 + t * .6, e.antenna = -.9, e.shoeL.z = e.shoeR.z = -.1;
            else {
                let s = w(.1, d, t),
                    u = f + 7 * .1,
                    m = p + .05;
                a = n(u, ze.z, s), r = n(0, ze.x, S.inOut(s)), i = n(m, ze.y, s) + 2.48 * s * (1 - s), o = n(.15, 0, s) + Math.PI * 2 * S.inOut(w(.25, .85, s)), c = -.35 * S.inOut(s), l = -.1 * Math.sin(Math.PI * s), e.shoeL.y = e.shoeR.y = .08 * Math.sin(Math.PI * s), e.shoeL.pitch = e.shoeR.pitch = .7 * Math.sin(Math.PI * s), e.antenna = -.8 * Math.sin(Math.PI * s)
            }
            if (u = `wide`, G >= X) {
                let t = G - X;
                r = ze.x, a = ze.z, i = 0, o = 0, l = .26 * Math.exp(-t * 9) * Math.cos(t * 24), e.upper.squash = .1 * Math.exp(-t * 8) * Math.cos(t * 20 + .6), e.antenna = .6 * Math.exp(-t * 5) * Math.sin(t * 26), e.shoeL.y = e.shoeR.y = 0, e.shoeL.pitch = e.shoeR.pitch = 0;
                let d = X + .12,
                    f = s(G, d, 3.4, .45);
                c = n(-.35, 1.3, f), i = .08 * Math.max(0, Math.sin(m((G - d) / .2) * Math.PI)), e.upper.pitch = .2 * f, e.upper.z = .03 * f, e.shoeR.z = .07 * f, e.shoeL.z = -.06 * f;
                let p = b(X + 1, X + 1.3, G);
                e.upper.pitch += .16 * p, l += .08 * p, r -= .03 * p, u = t < .06 ? `blink` : G < d ? `happy` : `star`
            }
        }
        return we(k, e, r, i, a, o, c, l), {
            head: new C(0, xe - je, 0).applyEuler(H.rotation).add(H.position),
            expr: u
        }
    }

    function mn(e) {
        let t = G > Mt && G < Mt + .09;
        G > Mt + .09 && (Mt = G + 2.2 + E(Math.floor(G * 7), 1, 1) * 2.6), Me(k, G, e === `open` && t ? `blink` : e, Z)
    }

    function hn(e, r) {
        let i = !!Ze ? .portrait,
            a = Ze ? .aspect ? ? 16 / 9,
            l = O.reducedMotion;
        if (j.near = .03, j.far = 200, G < Y || !Ot) {
            Nt = o(Nt, q * .055, 7, e);
            let r = k.frames.restDist * (1 - Nt),
                s = Te(a, i);
            if (W === `windup` && Y < 1e8 && !l) {
                let e = J[2] + .3,
                    i = S.inOut(w(e, Y, G)),
                    a = r * .42,
                    o = n(r, a, i);
                s = 2 * Math.atan(Math.tan(s * t / 2) * r / o) / t, r = o
            }
            if (Pe(k, j, G, r), j.rotateY(At), j.rotateX(jt), !l)
                for (let e = 0; e < 3; e++) {
                    let t = [.014, .018, .026][e] * (1 + e * .3);
                    j.translateX(c(G, J[e], t, 12, 11)), j.translateY(c(G, J[e], t * .8, 12, 14)), j.rotateZ(c(G, J[e], t * .45, 12, 9))
                }
            j.fov = s
        } else {
            let e, i, o, u = 0,
                d = (r ? ? bt).clone();
            if (l) e = new C(.8, .37, 4.85), i = new C(-.62, .44, 2.5).lerp(d, .2), o = 32;
            else if (G < wt) {
                let t = Ot.eval(G - Y);
                e = t.pos, i = t.target, o = t.fov, u = t.roll, l || (e.x += c(G - Y, 0, .018, 10, 11), e.y += c(G - Y, 0, .014, 10, 14), u += c(G - Y, 0, .009, 10, 9)), e.x += f(G * .6, 1) * .002, e.y += f(G * .6, 6) * .002
            } else {
                let t = wt - Y,
                    r = Ot.eval(t),
                    a = w(wt, X + .06, G),
                    p = S.inOut(a),
                    m = new C(1.2, .34, 5.35),
                    h = new C(-.62, .44, 2.5);
                e = r.pos.clone().lerp(m, p), e.y += .3 * Math.sin(Math.PI * a), i = d.clone().lerp(h, b(.45, 1, a)), G > X + .06 && e.lerp(new C(.8, .37, 4.85), S.inOut(w(X + .06, X + 2.2, G))), e.x += f(G * .6, 3) * .006, e.y += f(G * .6, 8) * .006, o = n(r.fov, 30, p) - (l ? 0 : 3.5 * s(G, X + .12, 3.4, .45)), u = l ? 0 : n(-.07, .015, p) + c(G, X, .014, 9, 12), l || (e.y += c(G, X, .02, 9, 11))
            }
            if (a < 16 / 9) {
                let n = a < 1.25,
                    r = Math.tan(o * t / 2) * (16 / 9) / a * (n ? .6 : 1);
                if (o = Math.min(70, 2 * Math.atan(r) / t), n) {
                    let t = i.clone().lerp(d, .75),
                        n = e.clone().sub(i).multiplyScalar(1.08);
                    e = t.clone().add(n), i = t
                }
            }
            j.position.copy(e), j.up.set(0, 1, 0), j.lookAt(i), j.rotateZ(u), j.fov = o
        }
        j.aspect = a, j.updateProjectionMatrix(), j.updateMatrixWorld(!0)
    }
    let gn = new C;
    return {
        id: ge.id,
        async load(e) {
            O = e, Ze = O.stage.info, O.audio.preloadShots([...D.knock, ...D.crack, ...D.brk, ...D.land]), await Yt(), !N && k && (Ut(), et.push(O.input.onTap(() => {
                O.layer.hidden || O.audio.unlock()
            }), O.input.onKey(e => {
                !O.layer.hidden && (e.code === `Space` || e.code === `Enter` || e.code === `NumpadEnter`) && O.audio.unlock()
            })), Object.assign(window, {
                __breakout: {
                    get phase() {
                        return W
                    },
                    get knocks() {
                        return q
                    },
                    get ready() {
                        return Qe
                    },
                    get t() {
                        return G
                    },
                    knock: (e = 0, t = 0) => Zt(e, t),
                    reset: Xt,
                    get camera() {
                        return j
                    },
                    get world() {
                        return k
                    },
                    get hits() {
                        return J.map(e => +e.toFixed(3))
                    },
                    onos: () => dt.map(e => ({
                        on: e.on,
                        at: +e.at.toFixed(3),
                        bezel: e.bezel,
                        pos: e.pos.toArray().map(e => +e.toFixed(2)),
                        vis: e.mesh.visible
                    }))
                }
            }))
        },
        enter(e) {
            (W !== `idle` || q > 0) && Xt(), G = 0, Mt = 1.2, At = 0, jt = 0, Z[0] = 0, Z[1] = 0, Nt = 0, Pt = -10, It = -2, Qe && Ut()
        },
        update(e) {
            let t = e.dt;
            if (G += t, K = e.clock, !Qe || !k) return;
            let r = e.input.p;
            if (e.active && W === `idle` && (r.clicked ? Zt(r.nx, r.ny) : e.input.pressed(`Space`, `Enter`, `NumpadEnter`) && Zt(null, null)), r.down && (Pt = G), Ut(), q === Ve && W === `idle` && G >= J[2] && (W = `windup`), W === `windup` && !Ct && St > 0 && K >= St - .3) {
                Ct = !0;
                let e = O.audio.play(D.brk, {
                    quantize: `beat`
                });
                Y = G + ((e > 0 ? e : St) - K), wt = Y + .36, X = Y + 3 * d, Dt = ye([
                    [.03, 1],
                    [.075, .06],
                    [.34, .06],
                    [3 * d - .04, 1]
                ], {
                    t0: 0,
                    t1: 3 * d + 2
                }), Ot = new Se([{
                    t: 0,
                    pos: [-1.05, .64, 2.4],
                    target: [0, .86, .95],
                    fov: 34,
                    roll: .05
                }, {
                    t: .36,
                    pos: [.62, .96, 2.52],
                    target: [0, .86, 1.05],
                    fov: 31,
                    roll: -.07,
                    ease: S.inOut
                }], {
                    handheld: .002,
                    shakes: [{
                        t: 0,
                        amp: .018,
                        decay: 10
                    }]
                })
            }
            W === `windup` && G >= Y && (W = `break`, Ft = O.reducedMotion ? 0 : 2), W === `break` && G >= X && (W = `landed`, Tt || (Tt = !0, O.audio.play(D.land, {
                quantize: `none`
            }))), W === `landed` && !Et && G > X + 1.45 && e.active && (Et = !0, O.advance());
            let i = b(.1, .6, G),
                a = (r.touch ? r.down || G - Pt < 1.5 ? 1 : 0 : r.presence) * i,
                s = gn.copy(P.SC).project(j),
                c = a > .3 && e.active ? m((r.nx - s.x) * 7, -3, 3) : Math.sin(G * .7) * 1.2,
                l = a > .3 && e.active ? m((r.ny - s.y) * 5, -2, 2) : Math.sin(G * .43 + 1) * .6;
            Z[0] = o(Z[0], c, 12, t), Z[1] = o(Z[1], l, 12, t);
            let u = e.active && W === `idle` ? r.nx * a : 0,
                f = e.active && W === `idle` ? r.ny * a : 0;
            At = o(At, -u * .012, 3, t), jt = o(jt, f * .008, 3, t), G >= Y - .02 && H.parent !== A && A.add(H);
            let p = pn();
            mn(p.expr), hn(t, p.head), k.updatePortal(j.position, G < Y ? T.portalZoom : 1, G < Y ? T.portalDrop : 0), dn(), V.time.value = G, V.glass.value = G >= Y ? 0 : 1, V.curve.value = T.curve * (1 - b(Y - d, Y, G));
            let g = 0,
                _ = 1,
                v = -1;
            for (let e = 0; e < 3; e++) G >= J[e] && (g = 1, _ = G - J[e], v = e);
            V.ripple.value = g, V.rippleT.value = _, G >= Y || v < 0 || !Q[v] ? V.impact.value.set(U[0] / P.FW, U[1]) : V.impact.value.set(Q[v][0], Q[v][1]), V.flash.value = J.reduce((e, t) => e + (G >= t ? Math.exp(-(G - t) / .025) * .8 : 0), 0) + (G >= Y ? Math.exp(-(G - Y) / .018) * 1.2 : 0), V.haze.value = G >= J[0] ? .25 + .15 * (G >= J[1]) + .2 * (G >= J[2]) : 0, V.bright.value = T.bright * (1 + .25 * J.reduce((e, t) => e + (G >= t ? Math.exp(-(G - t) / .06) : 0), 0)), V.refr.value = .004 * Math.min(1, q / 3);
            for (let e = 0; e < 3; e++) {
                let t = [V.k0, V.k1, V.k2][e].value,
                    n = Q[e],
                    r = G - J[e],
                    i = 1 - 2 ** (-10 * m(r / .1));
                r < 0 || G >= Y || !n ? t.set(0, 0, 0, 0) : t.set(n[0], n[1], .65 * ln[e][0] * i, 1.2 * ln[e][1] * i)
            }
            ke(k, K, t);
            let y = Rt(G),
                x = G >= Y;
            if (R.visible = x, x) {
                let e = (e, t) => e > -1.25 && e < 1.42 && t > .95 && t < 2.05 ? .14 : 0;
                for (let t of L.bodies) {
                    if (t.visible = !t.data.stays && y >= t.delay && !(t.data.pulver && y > t.delay + .012), t.data.stays) {
                        t.visible = !0, t.p.copy(t.p0), t.q.identity(), t.scale = 1;
                        continue
                    }
                    if (!t.visible) continue;
                    let n = y - t.delay,
                        r = t.p0.clone(),
                        i = new C(t.data.vx, t.data.vy, t.data.vz),
                        a = 0,
                        o = -1,
                        s = 0,
                        c = 1 / 120;
                    for (let l = 0; l < n; l += c) {
                        let u = Math.min(c, n - l);
                        i.y += -9.8 * u, r.addScaledVector(i, u), o < 0 && (a += u);
                        let d = e(r.x, r.z) + (o < 0 ? t.r * .3 : .01);
                        r.y < d && (r.y = d, o < 0 && (o = l, s = a), i.y < 0 && (i.y = -i.y * .25, i.x *= .5, i.z *= .5), Math.abs(i.y) < .25 && (i.y = 0, i.x *= .8, i.z *= .8))
                    }
                    let l = Math.hypot(t.data.wx, t.data.wy, t.data.wz),
                        u = new C(t.data.wx, t.data.wy, t.data.wz).divideScalar(l || 1),
                        d = new ee().setFromAxisAngle(u, (o < 0 ? a : s) * l);
                    if (o >= 0) {
                        let e = t.n0.clone().applyQuaternion(d),
                            r = new C(0, e.y >= 0 ? 1 : -1, 0),
                            i = new ee().setFromUnitVectors(e, r).multiply(d);
                        d.slerp(i, m((n - o) / .14))
                    }
                    t.p.copy(r), t.q.copy(d), t.scale = 1
                }
                L.upload()
            }
            let te = ft.pts;
            te.visible = x && y < .9 && y >= 0, te.userData.T.value = Math.max(0, y), te.userData.A.value = m(1 - y / .6);
            for (let e of dt) {
                let t = G - e.at,
                    r = e.on && t >= -.05;
                if (e.mesh.visible = e.shadow.visible = r, !r) continue;
                let i = m((t + .05) / .05),
                    a = t >= 0 ? 1 + .16 * Math.exp(-t * 18) * Math.cos(t * 46) - .08 * Math.exp(-t * 40) : 0,
                    o = t < 0 ? n(1.9, 1, S.in(i)) : a,
                    s = t < 0 ? n(.35, 0, S.in(i)) : 0,
                    c = t < 0 ? (1 - S.in(i)) * .5 : .03 * Math.exp(-t * 10) * Math.sin(t * 40),
                    l = new ee().setFromUnitVectors(new C(0, 0, 1), e.n).multiply(new ee().setFromAxisAngle(new C(0, 0, 1), e.roll + c)),
                    u = e.pos.clone().addScaledVector(e.n, s * 1.5);
                if (e.u.curl.value = t < 0 ? .25 : .05 * Math.exp(-t * 12), x && e.bezel) {
                    let t = Math.max(0, y - .01);
                    u.addScaledVector(e.vel, t), u.y -= 4.9 * .4 * t * t, l.multiply(new ee().setFromEuler(new h(e.spin.x * t, e.spin.y * t, e.spin.z * t))), e.u.curl.value = Math.min(.5, t * 6), e.u.alpha.value = m(1 - (t - .25) / .2)
                } else e.u.alpha.value = 1;
                e.mesh.position.copy(u), e.mesh.quaternion.copy(l), e.mesh.scale.setScalar(Math.max(.001, o)), e.shadow.position.copy(e.pos).addScaledVector(e.n, -.004).addScaledVector(gt, .03 + s * .6).addScaledVector(ht, -.04 - s * .6), e.shadow.quaternion.copy(l), e.shadow.scale.setScalar(Math.max(.001, o * (1 + s * .4))), e.shadow.visible = r && !(x && e.bezel), e.mesh.visible = r && !(x && e.bezel && e.mesh.position.y < -.3)
            }
            F.visible = x;
            let ne = zt(G) * b(Y + .05, Y + .12, G),
                re = 1 - .45 * ne;
            it.level.value = re, at.level.value = re, at.shade.value = 1, ot.intensity = T.key * re, st.intensity = T.hemi * re, ct.intensity = x ? 14 * (.6 + .4 * re) : 0;
            let ie = Math.exp(-Math.max(0, G - Y) / .12);
            if (lt.intensity = x ? (2 + 1.6 * ie) * (.9 + .1 * Math.sin(G * 17)) : 0, ut.intensity = x ? (1.8 + 1.6 * ie) * (.9 + .1 * Math.sin(G * 13 + 1)) : 0, at.dot.value = T.dot * O.renderer.domElement.height / 1080, I.visible = x && G >= Y + .4, I.visible) {
                let e = Math.max(0, H.position.y - je);
                I.position.set(H.position.x, .006, H.position.z - .02), I.scale.setScalar(1 + e * .8)
            }
            M.time.value = K, M.impact.value = 0, Ft > 0 && G >= Y && (M.impact.value = 1, Ft--); {
                let e = G - Y,
                    t = k.burst,
                    n = !O.reducedMotion && e >= 2 / 60 && e < .07 ? 1 - b(.042, .064, e) : 0;
                if (t.amt.value = .95 * n, n > 0) {
                    let e = gn.copy(bt).project(j),
                        n = p.head.clone().project(j);
                    t.c.value.set(e.x * .5 + .5, e.y * .5 + .5), t.face.value.set(n.x * .5 + .5, n.y * .5 + .5, .24)
                }
            }
            M.flash.value = G >= Y ? .05 * Math.exp(-(G - Y - 2 / 60) / .011) * (G >= Y + 2 / 60) : J.reduce((e, t) => e + (G >= t ? .045 * Math.exp(-(G - t) / .025) : 0), 0), O.reducedMotion && (M.flash.value *= .3), M.ca.value = T.ca + .0022 * ne, M.saturation.value = T.saturation - .05 * ne, Ye.strength.value = T.bloom + (x ? .08 * ie : 0), Xe.value = 0
        },
        render(e) {
            if (!Qe || !k) {
                let t = O.renderer;
                t.setRenderTarget(e), t.setClearColor(new ie(Ae), 1), t.clear(), t.setRenderTarget(null);
                return
            }
            k.renderInner(), k.render(e)
        },
        layout(e) {
            Ze = e, k ? .layout(e)
        },
        exit() {},
        dispose() {
            N = !0;
            for (let e of et) e();
            L ? .dispose();
            for (let e of $e) e.dispose();
            k ? .dispose(), k = null
        },
        hints: () => [],
        cursor: () => W === `idle` ? `pointer` : `default`,
        hud: () => `dark`
    }
}
export {
    O as
    default
};