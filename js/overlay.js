(function() {

    window.javascriptgrid = {
        columns: {
            "default": {
                columns: 24
            }
        },
        columnWidth: 15,
        gapWidth: 30
    }


    var k, d, e, g, j, a, m, h, l, c, o, n, b, f;
    c = {
        columns: {
            "default": {
                columns: 12
            }
        },
        gapWidth: 20,
        columnWidth: 60,
        opacity: 0.1,
        color: "#ff2a84"
    };
    l = window.javascriptgrid || {};
    for (o in c) {
        if (!l[o]) {
            l[o] = c[o]
        }
    }
    e = l.columns["default"].columns;
    m = (l.columnWidth + l.gapWidth) * e;
    k = document.getElementsByTagName("BODY")[0];
    a = document.getElementById("jsg-grid");
    if (a) {
        k.removeChild(a)
    }
    a = document.createElement("div");
    a.id = "jsg-grid";
    b = document.getElementById("jsg-style");
    if (b) {
        k.removeChild(b)
    }
    b = document.createElement("style");
    b.id = "jsg-style";
    for (h = 1; 1 <= e ? h <= e : h >= e; 1 <= e ? h++ : h--) {
        a.appendChild(document.createElement("div"))
    }
    b.type = "text/css";
    j = "#jsg-grid {\n  bottom: 0;\n  _bottom: auto;\n  left: 50%;\n  height: 0;\n  margin-left: -" + ((m - l.gapWidth) / 2) + "px;\n  overflow: hidden;\n  position: fixed;\n  _position: absolute;\n  z-index: 99998;\n  width: " + m + "px;\n  -moz-transition-property: height;\n  -webkit-transition-property: height;\n  -o-transition-property: height;\n  _top: 0;\n  transition-property: height;\n  -moz-transition-duration: 0.5s;\n  -webkit-transition-duration: 0.5s;\n  -o-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n#jsg-grid.jsg-visible {\n  height: 100%;\n  _height: expression(document.documentElement.scrollHeight + 'px');\n}\n#jsg-grid div {\n  background: " + l.color + ";\n  filter: alpha(opacity=" + (l.opacity * 100) + ");\n  float: left;\n  height: 100%;\n  _height: expression(document.documentElement.scrollHeight + 'px');\n  margin-right: " + l.gapWidth + "px;\n  opacity: " + l.opacity + ";\n  width: " + l.columnWidth + 'px;\n}\n';
    f = l.columns;
    for (o in f) {
        d = f[o];
        if (o !== "default") {
            m = (l.columnWidth + l.gapWidth) * d.columns;
        }
    }
    if (b.styleSheet) {
        b.styleSheet.cssText = j
    } else {
        b.innerHTML = j
    }
    g = document.getElementById("jsg-control");
    if (g) {
        k.removeChild(g)
    }
    g = document.createElement("div");
    g.id = "jsg-control";
    n = document.createElement("a");
    n.href = "#";
    n.innerHTML = "Hide Grid";
    n.onclick = function() {
        if (a.className) {
            n.innerHTML = "Show Grid";
            a.className = ""
        } else {
            n.innerHTML = "Hide Grid";
            a.className = "jsg-visible"
        }
        return false
    };
    g.appendChild(n);
    k.appendChild(b);
    k.appendChild(g);
    k.appendChild(a);
    setTimeout(function() {
        g.className = "jsg-visible";
        return a.className = "jsg-visible"
    }, 500)
})();