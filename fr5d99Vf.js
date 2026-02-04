/*
    HACKING MINI-GAME

    CREATED BY: JEFFREY BRIAN NILLO ROMERO
    GITHUB: https://github.com/jeff-romero
            https://jeff-romero.github.io/
    DATE: December 2026

    OBFUSCATED MANUALLY BY: JEFFREY BRIAN NILLO ROMERO

    NO AI USED. JUST MY SKILLS. I AM PROUD OF THAT.
*/

const QbDyvZXQ_N = "0123456789ABCDEF";
const oE407s1opN5zcK = [0, 1];
const cYISXD4 = [1, 0];
const HxaX9Ly2Z8HX = 30.0;
const bmeRal3 = 4;
const QtBWm6v65 = "SUCCESS!";
const QOU890m08EdvHa = "FAILURE.";
const N0WmFjcd = 5;
const OvqFWbmgSRXd = 5;
const GnxW1crY = "#35383e";


class GT5NXy9gLd {
    constructor(kpDc68bqIF6VBJ=N0WmFjcd, DVNr7Ut=OvqFWbmgSRXd) {
        let g2L7SLXwn5FT = kpDc68bqIF6VBJ;
        let klYQJniqDG3q9 = DVNr7Ut;
        let GNCrG_WY9vw1CB = [];
        for (let BMM2peIRlVcOn = 0; BMM2peIRlVcOn < g2L7SLXwn5FT; BMM2peIRlVcOn++) {
            let rB9uEvW1 = [];
            for (let C0NNfFblBQOCja = 0; C0NNfFblBQOCja < klYQJniqDG3q9; C0NNfFblBQOCja++) {
                let NZeBzA4 = QbDyvZXQ_N[Math.floor(Math.random() * QbDyvZXQ_N.length)];
                let QXOe60t = QbDyvZXQ_N[Math.floor(Math.random() * QbDyvZXQ_N.length)];
                let IEmko3jVS = NZeBzA4 + QXOe60t;
                rB9uEvW1.push(IEmko3jVS);
            }
            GNCrG_WY9vw1CB.push(rB9uEvW1);
        }
        this.kHXnrG1xUJM = function() {
            return g2L7SLXwn5FT;
        };
        this.SGRhV9y = function() {
            return klYQJniqDG3q9;
        };
        this.xt8yCJfq = function() {
            return GNCrG_WY9vw1CB;
        };
        this.LTSfy0Mc = function() {
            return GNCrG_WY9vw1CB;
        };
        this.umhXd9NqNdHos = function() {
            for (let IAeQSW6izXz7 = 0; IAeQSW6izXz7 < g2L7SLXwn5FT; IAeQSW6izXz7++) {
                let p6HOIERftbZ4 = "";
                for (let ATZm4tG = 0; ATZm4tG < klYQJniqDG3q9; ATZm4tG++) {
                    p6HOIERftbZ4 += GNCrG_WY9vw1CB[IAeQSW6izXz7][ATZm4tG] + " ";
                }
                console.log(p6HOIERftbZ4);
            }
        };
    }
}


class JlXtmgv8O3qU1Xr extends GT5NXy9gLd {
    constructor() {
        let q1H5BaiWa = document.getElementById("pxOykobqFT");
        while (q1H5BaiWa.firstChild) {
            q1H5BaiWa.removeChild(q1H5BaiWa.firstChild);
        }
        super();
        let SNJrzPb = this.kHXnrG1xUJM();
        let roqIker_0B5Ad0K = this.SGRhV9y();
        let SvFm3kKgK2 = this.LTSfy0Mc();
        let bcpAcPYmjnn = document.createElement("div");
        bcpAcPYmjnn.id = "jchrezRdopmwdA";
        let ficp2rIUA = document.createElement("p");
        ficp2rIUA.innerText = "CODE MATRIX";
        bcpAcPYmjnn.appendChild(ficp2rIUA);
        q1H5BaiWa.appendChild(bcpAcPYmjnn);
        let gnc_OIP = document.createElement("div");
        gnc_OIP.id = "eaCbdZiYDyS29lr";
        q1H5BaiWa.appendChild(gnc_OIP);
        let XA3ndwlZ0M7 = false;
        let qZbzI92P = null;
        let eDjl3lq4fIH = 0;
        let Q2X1ftABr = 0;
        for (; eDjl3lq4fIH < SNJrzPb; eDjl3lq4fIH++) {
            let OOFN6gY6yxY7I7M = document.createElement("div");
            OOFN6gY6yxY7I7M.className = "yXzDpnx";
            gnc_OIP.appendChild(OOFN6gY6yxY7I7M);
            for (Q2X1ftABr = 0; Q2X1ftABr < roqIker_0B5Ad0K; Q2X1ftABr++) {
                qZbzI92P = document.createElement("div");
                qZbzI92P.className = "rEpd__WL";
                qZbzI92P.innerText = SvFm3kKgK2[eDjl3lq4fIH][Q2X1ftABr];
                qZbzI92P.id = "C" + eDjl3lq4fIH + Q2X1ftABr;
                qZbzI92P.addEventListener("click", function (e) {
                    let cmN4aAaW = w1CUl5YHcTRxXIC(this);
                    let NJy2VqIx = cmN4aAaW[0];
                    let m6PYE5xvt = cmN4aAaW[1];
                    fB1Woj7fkpWyt.click(NJy2VqIx, m6PYE5xvt, this);
                });
                qZbzI92P.disabled = true;
                OOFN6gY6yxY7I7M.appendChild(qZbzI92P);
            }
        }
        this.MuQqvjcslwD3e = function() {
            if (!XA3ndwlZ0M7) {
                fB1Woj7fkpWyt.oON9foqJ();
                XA3ndwlZ0M7 = true;
            }
        };
        for (let mPt2M5NV = 0; mPt2M5NV < roqIker_0B5Ad0K; mPt2M5NV++) {
            gnc_OIP.children[0].children[mPt2M5NV].addEventListener("click", this.MuQqvjcslwD3e);
        }
        this.fU1ZRenrbpEY_ = function() {
            return gnc_OIP;
        };
    }
}


class ExNe6Bd6cZgnSbR {
    constructor(ofzNEeddS_3Ddeh=HxaX9Ly2Z8HX) {
        let cFceQ18jM6AR = document.getElementById("xJ7p8pWgQe");
        let cgEcx1_8 = document.getElementById("aQUOW9n2kq0N3bg");
        let nx4U0NtPhAh = null;
        cFceQ18jM6AR.removeChild(cFceQ18jM6AR.lastChild);
        cgEcx1_8.removeChild(cgEcx1_8.lastChild);
        let C7kOM0Uz8tOaS = document.createElement("div");
        C7kOM0Uz8tOaS.id = "fdYq1uC0jSNM";
        C7kOM0Uz8tOaS.style.width = "100%";
        let Pn__eFK45ya = document.createElement("p");
        Pn__eFK45ya.id = "p7uTGTGam1NI8n3";
        Pn__eFK45ya.innerText = ofzNEeddS_3Ddeh.toFixed(2);
        cFceQ18jM6AR.appendChild(C7kOM0Uz8tOaS);
        cgEcx1_8.appendChild(Pn__eFK45ya);
        function kIhXGK_SOcL(f00R0D6dMSTm, ouRetjkv3ZR) {
            for (let sVx3vB2ADdMbG of f00R0D6dMSTm) {
                for (let ojzABDE3eySQ of sVx3vB2ADdMbG.addedNodes) {
                    if (ojzABDE3eySQ.textContent == 0) {
                        clearInterval(nx4U0NtPhAh);
                        fB1Woj7fkpWyt.QnXi_qrTwYY();
                    }
                }
            }
        };
        let qrD4kdqm = {
            childList: true,
            subtree: true
        };
        let ouRetjkv3ZR = new MutationObserver(kIhXGK_SOcL);
        ouRetjkv3ZR.observe(Pn__eFK45ya, qrD4kdqm);
        this.EAnDnBPrw = function() {
            if (nx4U0NtPhAh) {
                clearInterval(nx4U0NtPhAh);
            }
            nx4U0NtPhAh = setInterval(function(Pn__eFK45ya, C7kOM0Uz8tOaS, ofzNEeddS_3Ddeh) {
                if (Pn__eFK45ya.innerText <= 0) {
                    fB1Woj7fkpWyt.rgkTOGY2QIzM(QOU890m08EdvHa);
                    return 0;
                }
                Pn__eFK45ya.innerText = (Pn__eFK45ya.innerText - 0.01).toFixed(2);
                C7kOM0Uz8tOaS.style.width = ((Pn__eFK45ya.innerText / ofzNEeddS_3Ddeh).toFixed(3) * 100) + "%";
            }, 10, Pn__eFK45ya, C7kOM0Uz8tOaS, ofzNEeddS_3Ddeh);
        };
        this.dJWLKdQT1V8ec7 = function() {
            clearInterval(nx4U0NtPhAh);
            return 1;
        };
        this.cgEcx1_8 = function() {
            return Pn__eFK45ya.innerText;
        };
    }
}


class UfEezhOqF {
    constructor(ZV2SzknTM5KAad=bmeRal3) {
        let ujRF8og1eZ = [];
        let NaqdLkHy4G = ZV2SzknTM5KAad;
        this.Thvjs9mniC = function(mH8h0XC52dyAC_K) {
            if (ujRF8og1eZ.length == NaqdLkHy4G) {
                return 0;
            }
            ujRF8og1eZ.push(mH8h0XC52dyAC_K);
            return 1;
        };
        this.aoYSHfNykHe = function() {
            return ujRF8og1eZ.length;
        };
        this.miEERaQgb = function() {
            return NaqdLkHy4G;
        };
        this.njNFGHJ9eFv = function() {
            return ujRF8og1eZ;
        };
    }
}


class I7Vmb4nv4 extends UfEezhOqF {
    constructor(QW0SBSlb4J=bmeRal3) {
        super(QW0SBSlb4J);
        let XIplZ0QJPzhU = this.njNFGHJ9eFv();
        let GQe4HhZxObF = document.getElementById("bcOPD1XZzI9o");
        while (GQe4HhZxObF.firstChild) {
            GQe4HhZxObF.removeChild(GQe4HhZxObF.firstChild);
        }
        for (let vS3Dx1c6oE = 0; vS3Dx1c6oE < this.aoYSHfNykHe(); vS3Dx1c6oE++) {
            GQe4HhZxObF.appendChild(XIplZ0QJPzhU[vS3Dx1c6oE]);
        }
        this.ygI7UuqCz3HNlev = function() {
            return GQe4HhZxObF;
        };
        this.jkRhyI9QJpAJIYL = function(HRraP9c) {
            if (GQe4HhZxObF.children.length == XIplZ0QJPzhU.length) {
                return 0;
            }
            GQe4HhZxObF.appendChild(HRraP9c);
            return 1;
        };
    }
}


class MTfbuad_0v0ck {
    constructor(eU1xljAriCSBS, w1xbmUD, MQw5cbaMp5gQ0jY) {
        let Kb91U2i = eU1xljAriCSBS;
        let GdSLIOX = w1xbmUD;
        let zL_Iq9EqIkgMgKu = MQw5cbaMp5gQ0jY;
        this.vW7ypw_lUG6C5Lo = function() {
            return Kb91U2i;
        };
        this.hAGny9iOIxpqG = function() {
            return GdSLIOX;
        };
        this.v0xppP_IQxxNx = function() {
            return zL_Iq9EqIkgMgKu;
        };
    }
}


class GQe4HhZxObF {
    constructor(S8d0rl3jRJ7kBeP, AGPEHeq) {
        let nH_pE9JmpyJxz = [];
        let wMkTBLwRqbkfI = S8d0rl3jRJ7kBeP;
        this.zIyVrwvMRN = function() {
            return nH_pE9JmpyJxz;
        };
        this.rboZ4G1DqXamc = function() {
            return nH_pE9JmpyJxz.length;
        };
        this.jWiKoPeHRYnBt = function() {
            return wMkTBLwRqbkfI;
        };
        let A2G_DdKnr = AGPEHeq.LTSfy0Mc();
        let jkbNEDzo4H7nsYb = 0;
        let hke_mvOAScTnrZ = -1;
        let Cs2G9N5xHu = 0;
        let GwIkeFCHnZ53n = false;
        for (let zGX1jysZCGEZ = 0; zGX1jysZCGEZ < wMkTBLwRqbkfI; zGX1jysZCGEZ++) {
            Cs2G9N5xHu = zGX1jysZCGEZ % oE407s1opN5zcK.length;
            if (oE407s1opN5zcK[Cs2G9N5xHu] == 0) {
                let FGflp3R1Ur5r = hke_mvOAScTnrZ;
                do {
                    hke_mvOAScTnrZ = Math.floor(Math.random() * AGPEHeq.SGRhV9y());
                    GwIkeFCHnZ53n = false;
                    for (let rc7rFNOjPQsETT1 = 0; rc7rFNOjPQsETT1 < nH_pE9JmpyJxz.length; rc7rFNOjPQsETT1++) {
                        if (nH_pE9JmpyJxz[rc7rFNOjPQsETT1].hAGny9iOIxpqG() == jkbNEDzo4H7nsYb && nH_pE9JmpyJxz[rc7rFNOjPQsETT1].v0xppP_IQxxNx() == hke_mvOAScTnrZ) {
                            GwIkeFCHnZ53n = true;
                        }
                    }
                } while (FGflp3R1Ur5r == hke_mvOAScTnrZ || GwIkeFCHnZ53n);
                nH_pE9JmpyJxz.push(new MTfbuad_0v0ck(A2G_DdKnr[jkbNEDzo4H7nsYb][hke_mvOAScTnrZ], jkbNEDzo4H7nsYb, hke_mvOAScTnrZ));
            }
            else {
                let AtSrPG0BkMs = jkbNEDzo4H7nsYb;
                do {
                    jkbNEDzo4H7nsYb = Math.floor(Math.random() * AGPEHeq.kHXnrG1xUJM());
                    GwIkeFCHnZ53n = false;
                    for (let thcPYDWawmgfy = 0; thcPYDWawmgfy < nH_pE9JmpyJxz.length; thcPYDWawmgfy++) {
                        if (nH_pE9JmpyJxz[thcPYDWawmgfy].hAGny9iOIxpqG() == jkbNEDzo4H7nsYb && nH_pE9JmpyJxz[thcPYDWawmgfy].v0xppP_IQxxNx() == hke_mvOAScTnrZ) {
                            GwIkeFCHnZ53n = true;
                        }
                    }
                } while (AtSrPG0BkMs == jkbNEDzo4H7nsYb || GwIkeFCHnZ53n);
                nH_pE9JmpyJxz.push(new MTfbuad_0v0ck(A2G_DdKnr[jkbNEDzo4H7nsYb][hke_mvOAScTnrZ], jkbNEDzo4H7nsYb, hke_mvOAScTnrZ));
            }
        }
    }
}


class JscWXJtzFikUwqk extends GQe4HhZxObF {
    constructor(rR8X1dLon, Aa0jvNfkUG) {
        let Pd7241mmUsnu = document.getElementById("eknydJpWYtsUo");
        while (Pd7241mmUsnu.firstChild) {
            Pd7241mmUsnu.removeChild(Pd7241mmUsnu.firstChild);
        }
        super(rR8X1dLon, Aa0jvNfkUG);
        let tGgMIwyvJA = document.createElement("div");
        tGgMIwyvJA.className = "bh9jBjvLe4";
        Pd7241mmUsnu.appendChild(tGgMIwyvJA);
        let P8_8whHCVUsThJ = this.zIyVrwvMRN();
        for (let xUNI48HWMbSP0Do = 0; xUNI48HWMbSP0Do < P8_8whHCVUsThJ.length; xUNI48HWMbSP0Do++) {
            let YURIKcKmwHMy = document.createElement("div");
            YURIKcKmwHMy.className = "rEpd__WL";
            YURIKcKmwHMy.innerText = P8_8whHCVUsThJ[xUNI48HWMbSP0Do].vW7ypw_lUG6C5Lo();
            tGgMIwyvJA.appendChild(YURIKcKmwHMy);
        }
        this.fjuKHN9V4aARuoa = function() {
            return tGgMIwyvJA;
        }
    }
}


class MaiIjwUhSL6 {
    constructor(YQuzQ1FBgV2, ufP8cRf7FL) {
        let CBKWkBfHJYZBve = [
            "rgba(255, 0, 0, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(0, 0, 255, 0.5)", "rgba(255, 255, 0, 0.5)", "rgba(0, 255, 255, 0.5)", "rgba(128, 0, 0, 0.5)"
        ];
        let NP0hWbCCnhao = YQuzQ1FBgV2.fjuKHN9V4aARuoa().children;
        let SRUAEKRz = YQuzQ1FBgV2.zIyVrwvMRN();
        let sogT2tveeX_t = ufP8cRf7FL.fU1ZRenrbpEY_().children;
        for (let q5gnRXBs69K = 0; q5gnRXBs69K < NP0hWbCCnhao.length; q5gnRXBs69K++) {
            NP0hWbCCnhao[q5gnRXBs69K].style.backgroundColor = CBKWkBfHJYZBve[q5gnRXBs69K];
            let KEyNXtX43k3CM = SRUAEKRz[q5gnRXBs69K].hAGny9iOIxpqG();
            let mQded5aBY8IAkFM = SRUAEKRz[q5gnRXBs69K].v0xppP_IQxxNx();
            sogT2tveeX_t[KEyNXtX43k3CM].children[mQded5aBY8IAkFM].style.backgroundColor = CBKWkBfHJYZBve[q5gnRXBs69K % CBKWkBfHJYZBve.length];
        }
    }
}


class Kdj3gEanFx {
    constructor(dKviQ43, IfK5yLUmoJ) {
        let zOY2XMLhrO4VV_ = dKviQ43.fU1ZRenrbpEY_();
        let kHXnrG1xUJM = dKviQ43.kHXnrG1xUJM();
        let SGRhV9y = dKviQ43.SGRhV9y();
        let q4woREW3H = IfK5yLUmoJ.fjuKHN9V4aARuoa();
        let ds_LBumvGy = q4woREW3H.children.length;
        let LtudaDP0Y0h2 = {};
        for (let jjGupcMjMMXHyxs = 0; jjGupcMjMMXHyxs < kHXnrG1xUJM; jjGupcMjMMXHyxs++) {
            for (let ZNfZCZ5NTFY = 0; ZNfZCZ5NTFY < SGRhV9y; ZNfZCZ5NTFY++) {
                let jK_DoaPgn = zOY2XMLhrO4VV_.children[jjGupcMjMMXHyxs].children[ZNfZCZ5NTFY];
                let ozFHtrX6VW9rBZZ = "" + jK_DoaPgn.innerText;
                if (!(LtudaDP0Y0h2.hasOwnProperty(ozFHtrX6VW9rBZZ))) {
                    LtudaDP0Y0h2[ozFHtrX6VW9rBZZ] = [];
                    LtudaDP0Y0h2[ozFHtrX6VW9rBZZ].push(jK_DoaPgn.id);
                }
                else {
                    LtudaDP0Y0h2[ozFHtrX6VW9rBZZ].push(jK_DoaPgn.id);
                }
            }
        }
        for (let axET3Ou = 0; axET3Ou < ds_LBumvGy; axET3Ou++) {
            let uLkFA_v7dEGLRp = q4woREW3H.children[axET3Ou];
            let J9qc7afD_sEw = uLkFA_v7dEGLRp.innerText;
            uLkFA_v7dEGLRp.addEventListener("mouseover", function (s9optM6_bCh5ITO) {
                s9optM6_bCh5ITO.target.innerText = "[" + J9qc7afD_sEw + "]";
                let Vpqum3ZM0 = LtudaDP0Y0h2[J9qc7afD_sEw];
                for (let yFANmJ9zx3w5Igs = 0; yFANmJ9zx3w5Igs < Vpqum3ZM0.length; yFANmJ9zx3w5Igs++) {
                    let GrJEznlDl6 = document.getElementById(Vpqum3ZM0[yFANmJ9zx3w5Igs]);
                    let zQkja986w = GrJEznlDl6.innerText;
                    GrJEznlDl6.innerText = "[" + zQkja986w + "]";
                }
            });
            uLkFA_v7dEGLRp.addEventListener("mouseleave", function (XhcVcnwoPqIs) {
                XhcVcnwoPqIs.target.innerText = J9qc7afD_sEw;
                let N2xFwHXYD5P = LtudaDP0Y0h2[J9qc7afD_sEw];
                for (let r5ECp9cvIS33mKV = 0; r5ECp9cvIS33mKV < N2xFwHXYD5P.length; r5ECp9cvIS33mKV++) {
                    let m2TbUP9MlpeIZA = document.getElementById(N2xFwHXYD5P[r5ECp9cvIS33mKV]);
                    m2TbUP9MlpeIZA.innerText = m2TbUP9MlpeIZA.innerText.slice(1, m2TbUP9MlpeIZA.innerText.length - 1);
                }
            });
        }
    }
}


class FejOKV6LWz5Pi {
    constructor(wtlQbZGH=HxaX9Ly2Z8HX, ubOXWlj3_SD=bmeRal3) {
        let q3BC94w2oT = -1;
        let zBjimElAH7YGFT8 = -1;
        let XCHOpqsCsJq = -1;
        let _4hEsUO4nnn = [];
        let Erd8eAqR = document.getElementById("svXWWNtVg");
        Erd8eAqR.style.display = "none";
        let UueMwZJ1G = new JlXtmgv8O3qU1Xr();
        let hHkRPFL = new ExNe6Bd6cZgnSbR(wtlQbZGH);
        let fbgtB19t7AnmaE = new I7Vmb4nv4(ubOXWlj3_SD);
        let b8KPUXI = fbgtB19t7AnmaE.miEERaQgb();
        let HfBJwVSb = new JscWXJtzFikUwqk(b8KPUXI, UueMwZJ1G);
        let L50PzcM0 = new Kdj3gEanFx(UueMwZJ1G, HfBJwVSb);
        this.oON9foqJ = function() {
            _RPGQ9YDgchYYW.o82y22H();
            Erd8eAqR.style.display = "none";
            hHkRPFL.EAnDnBPrw();
        };
        this.rgkTOGY2QIzM = function(_mQVpuTvN) {
            hHkRPFL.dJWLKdQT1V8ec7();
            let PiIat07W5CsedE = document.getElementById("aOEfEPvoFChadK");
            PiIat07W5CsedE.innerHTML = _mQVpuTvN;
            if (_mQVpuTvN == QOU890m08EdvHa) {
                PiIat07W5CsedE.style.color = "red";
            }
            else {
                PiIat07W5CsedE.style.color = "lightgreen";
            }
            Erd8eAqR.style.display = "flex";
        };
        this.QnXi_qrTwYY = function() {
            if (_4hEsUO4nnn.length == fbgtB19t7AnmaE.miEERaQgb()) {
                let uCm27iGNvd2 = HfBJwVSb.zIyVrwvMRN();
                for (let skoH8fgr8J = 0; skoH8fgr8J < fbgtB19t7AnmaE.miEERaQgb(); skoH8fgr8J++) {
                    if (uCm27iGNvd2[skoH8fgr8J].vW7ypw_lUG6C5Lo() != _4hEsUO4nnn[skoH8fgr8J].innerText) {
                        this.rgkTOGY2QIzM(QOU890m08EdvHa);
                        return;
                    }
                }
                this.rgkTOGY2QIzM(QtBWm6v65);
                return;
            }
            else if (hHkRPFL.cgEcx1_8() == 0) {
                this.rgkTOGY2QIzM(QOU890m08EdvHa);
            }
        };
        const EjFVRV4t8 = "rgb(53, 56, 62)";
        const SkdohiIKokk = "rgb(144, 238, 144)";
        const JmH4eV7D4 = "rgb(128, 128, 128)";
        this.click = function(kdeLz67u, FbyvYpezDENx, iYQC5qfiSELB) {
            if (_4hEsUO4nnn.length == fbgtB19t7AnmaE.miEERaQgb() || hHkRPFL.cgEcx1_8() == 0) {
                return;
            }
            let kDCvu0Oyg4_hBy = getComputedStyle(iYQC5qfiSELB).color;
            if (kDCvu0Oyg4_hBy == EjFVRV4t8) {
                return;
            }
            else if (kDCvu0Oyg4_hBy == JmH4eV7D4) {
                return;
            }
            else if (_4hEsUO4nnn.length == 0 && kdeLz67u > 0 && q3BC94w2oT == -1 && XCHOpqsCsJq == -1) {
                return;
            }
            let bn8RcqwgxW2M9 = UueMwZJ1G.fU1ZRenrbpEY_();
            if (q3BC94w2oT == -1 && zBjimElAH7YGFT8 == -1) {
                for (let jvqqCwEMJuJjy = 0; jvqqCwEMJuJjy < UueMwZJ1G.kHXnrG1xUJM(); jvqqCwEMJuJjy++) {
                    for (let wVlcsVx0H = 0; wVlcsVx0H < UueMwZJ1G.SGRhV9y(); wVlcsVx0H++) {
                        bn8RcqwgxW2M9.children[jvqqCwEMJuJjy].children[wVlcsVx0H].style.color = JmH4eV7D4;
                    }
                }
                for (let tkOCERC1sr7hbi = 1; tkOCERC1sr7hbi < UueMwZJ1G.kHXnrG1xUJM(); tkOCERC1sr7hbi++) {
                    bn8RcqwgxW2M9.children[tkOCERC1sr7hbi].children[FbyvYpezDENx].style.color = SkdohiIKokk;
                }
                XCHOpqsCsJq = q3BC94w2oT;
                q3BC94w2oT = kdeLz67u;
                zBjimElAH7YGFT8 = FbyvYpezDENx;
            }
            else if (q3BC94w2oT == kdeLz67u && XCHOpqsCsJq != -1 && XCHOpqsCsJq != kdeLz67u) {
                for (let xKzBIGV0f = 0; xKzBIGV0f < UueMwZJ1G.SGRhV9y(); xKzBIGV0f++) {
                    bn8RcqwgxW2M9.children[q3BC94w2oT].children[xKzBIGV0f].style.color = JmH4eV7D4;
                }
                for (let ue6mt59 = 0; ue6mt59 < UueMwZJ1G.kHXnrG1xUJM(); ue6mt59++) {
                    bn8RcqwgxW2M9.children[ue6mt59].children[FbyvYpezDENx].style.color = SkdohiIKokk;
                }
                zBjimElAH7YGFT8 = FbyvYpezDENx;
            }
            else if (zBjimElAH7YGFT8 == FbyvYpezDENx) {
                for (let tCBmliFrT = 0; tCBmliFrT < UueMwZJ1G.kHXnrG1xUJM(); tCBmliFrT++) {
                    bn8RcqwgxW2M9.children[tCBmliFrT].children[zBjimElAH7YGFT8].style.color = JmH4eV7D4;
                }
                for (let alrGmqDRN = 0; alrGmqDRN < UueMwZJ1G.SGRhV9y(); alrGmqDRN++) {
                    bn8RcqwgxW2M9.children[kdeLz67u].children[alrGmqDRN].style.color = SkdohiIKokk;
                }
                XCHOpqsCsJq = q3BC94w2oT;
                q3BC94w2oT = kdeLz67u;
            }
            else {
                return;
            }
            _4hEsUO4nnn.push(iYQC5qfiSELB);
            for (let bFNXljsI76v = 0; bFNXljsI76v < _4hEsUO4nnn.length; bFNXljsI76v++) {
                if (_4hEsUO4nnn[bFNXljsI76v].style.color != GnxW1crY) {
                    _4hEsUO4nnn[bFNXljsI76v].style.color = GnxW1crY;
                }
            }
            fbgtB19t7AnmaE.Thvjs9mniC(iYQC5qfiSELB);
            let cnoM0ZFi668m = document.createElement("div");
            cnoM0ZFi668m.className = "rEpd__WL";
            cnoM0ZFi668m.classList.toggle(iYQC5qfiSELB.id);
            cnoM0ZFi668m.innerText = iYQC5qfiSELB.innerText;
            fbgtB19t7AnmaE.jkRhyI9QJpAJIYL(cnoM0ZFi668m);
            this.QnXi_qrTwYY();
        };
    }
}


function w1CUl5YHcTRxXIC(fIpHa_lsVAycsRu) {
    let Nxmfw6IDn3Fyib = [];
    if (fIpHa_lsVAycsRu.id === undefined || fIpHa_lsVAycsRu.id == null || fIpHa_lsVAycsRu.id.length == 0) {
        return Nxmfw6IDn3Fyib;
    }
    let hlkxNhyE0eKh = fIpHa_lsVAycsRu.id;
    hlkxNhyE0eKh = hlkxNhyE0eKh.slice(1);
    Nxmfw6IDn3Fyib.push(hlkxNhyE0eKh[0]);
    Nxmfw6IDn3Fyib.push(hlkxNhyE0eKh[1]);
    return Nxmfw6IDn3Fyib;
}


class GQdxSMx {
    constructor(xBdpdeK5FCdd8=HxaX9Ly2Z8HX, Y5fUCYocCYtP1Nd=bmeRal3) {
        const iFs8MT7r4si2 = 1.0;
        const hppxYHqMts7 = 300.0;
        const ZPc96vahIgp = bmeRal3;
        const bbaUl1Fqk = 10;
        const _NFjMz1E27i = "Min: " + iFs8MT7r4si2 + ", Max: " + hppxYHqMts7;
        const yqA3G86 = "Min: " + ZPc96vahIgp + ", Max: " + bbaUl1Fqk;
        let AEHxMgwUgJ = document.getElementById("avKKXWFb4rHHI");
        let PxAxm3qpBuX = document.getElementById("tYlNKjOyPeFCKyY");
        let i7LUN56LiGvZ = document.getElementById("jLgG0WVizIHJBVv");
        this.BNvuqiUOFLM = function(EG5765qx0=null, fmGVud4="") {
            if (EG5765qx0 == null || fmGVud4.length == 0) {
                return false;
            }
            let LRXO5tSKbCes = document.createElement("p");
            LRXO5tSKbCes.className = "ub4VMkph1cGq";
            LRXO5tSKbCes.innerText = fmGVud4;
            EG5765qx0.appendChild(LRXO5tSKbCes);
            return true;
        };
        this.OcnuwO7svQ2pja = function(JXcYIQrzoTi86Yy=null) {
            if (JXcYIQrzoTi86Yy == null) {
                return false;
            }
            let kgAvAqMC = JXcYIQrzoTi86Yy.children[JXcYIQrzoTi86Yy.children.length - 1];
            if (getComputedStyle(kgAvAqMC).opacity > 0) {
                kgAvAqMC.style.opacity = 0;
            }
            else {
                kgAvAqMC.style.opacity = 1;
            }
            return true;
        };
        this.BNvuqiUOFLM(PxAxm3qpBuX, "tP3");
        this.OcnuwO7svQ2pja(PxAxm3qpBuX);
        this.BNvuqiUOFLM(i7LUN56LiGvZ, "tP3");
        this.OcnuwO7svQ2pja(i7LUN56LiGvZ);
        this.cO4FhbiJ = function(beZ7GJrMMwnw5=null, CeybqVJnCBx73p="") {
            if (beZ7GJrMMwnw5 == null || CeybqVJnCBx73p.length == 0) {
                return -1;
            }
            let N2iVP1FE9Z = beZ7GJrMMwnw5.children[beZ7GJrMMwnw5.children.length - 1];
            N2iVP1FE9Z.innerText = CeybqVJnCBx73p;
            return 0;
        };
        this.pUG3T_XP8 = function() {
            if (getComputedStyle(AEHxMgwUgJ).display == "flex") {
                AEHxMgwUgJ.style.display = "none";
            }
            else {
                AEHxMgwUgJ.style.display = "flex";
            }
        };
        this.o82y22H = function() {
            if (getComputedStyle(AEHxMgwUgJ).display == "flex") {
                AEHxMgwUgJ.style.display = "none";
            }
        };
        this.aotrhwkGkGz2VC = function(aKtYHhB_0) {
            let xVG2VfAXzm = parseFloat(aKtYHhB_0.value);
            if (isNaN(xVG2VfAXzm) || xVG2VfAXzm < iFs8MT7r4si2 || xVG2VfAXzm > hppxYHqMts7) {
                if (PxAxm3qpBuX.children.length > 1) {
                    PxAxm3qpBuX.children[PxAxm3qpBuX.children.length - 1].style.opacity = 1;
                    this.cO4FhbiJ(PxAxm3qpBuX, _NFjMz1E27i);
                }
                else {
                    this.BNvuqiUOFLM(PxAxm3qpBuX, _NFjMz1E27i);
                }
                return false;
            }
            xBdpdeK5FCdd8 = xVG2VfAXzm;
            if (PxAxm3qpBuX.children.length > 1) {
                PxAxm3qpBuX.children[PxAxm3qpBuX.children.length - 1].style.opacity = 0;
            }
            return true;
        };
        this.gmr6auWGwj = function(m5luchLNIX2) {
            let o4mMQWt8ja8 = parseInt(m5luchLNIX2.value);
            if (isNaN(o4mMQWt8ja8) || o4mMQWt8ja8 < ZPc96vahIgp || o4mMQWt8ja8 > bbaUl1Fqk) {
                if (i7LUN56LiGvZ.children.length > 1) {
                    i7LUN56LiGvZ.children[i7LUN56LiGvZ.children.length - 1].style.opacity = 1;
                    this.cO4FhbiJ(i7LUN56LiGvZ, yqA3G86);
                }
                else {
                    this.BNvuqiUOFLM(i7LUN56LiGvZ, yqA3G86);
                }
                return false;
            }
            Y5fUCYocCYtP1Nd = o4mMQWt8ja8;
            if (i7LUN56LiGvZ.children.length > 1) {
                i7LUN56LiGvZ.children[i7LUN56LiGvZ.children.length - 1].style.opacity = 0;
            }
            return true;
        };
        this.rOxaVKiTLb0_h = function() {
            let SUMyML9Nzk = document.getElementById("qrEGhyDbaxaoAl");
            let auMzx9PE3F = document.getElementById("jnjg3wgWueMbmll");
            if (!this.aotrhwkGkGz2VC(SUMyML9Nzk)) {
                return false;
            }
            if (!this.gmr6auWGwj(auMzx9PE3F)) {
                return false;
            }
            AEHxMgwUgJ.style.display = "none";
            fB1Woj7fkpWyt = new FejOKV6LWz5Pi(xBdpdeK5FCdd8, Y5fUCYocCYtP1Nd);
            return true;
        };
    }
}


let _RPGQ9YDgchYYW = new GQdxSMx();
let fB1Woj7fkpWyt = new FejOKV6LWz5Pi();
