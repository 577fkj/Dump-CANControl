var __wxAppData = __wxAppData || {};
var __wxRoute = __wxRoute || "";
var __wxRouteBegin = __wxRouteBegin || "";
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {};
var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
var Component = Component || function () {};
var definePlugin = definePlugin || function () {};
var requirePlugin = requirePlugin || function () {};
var Behavior = Behavior || function () {};
var __vd_version_info__ = __vd_version_info__ || {};
/*v0.5vv_20211229_syb_scopedata*/ global.__wcc_version__ =
  "v0.5vv_20211229_syb_scopedata";
global.__wcc_version_info__ = {
  customComponents: true,
  fixZeroRpx: true,
  propValueDeepCopy: false,
};
var $gwxc;
var $gaic = {};
$gwx = function (path, global) {
  if (typeof global === "undefined") global = {};
  if (typeof __WXML_GLOBAL__ === "undefined") {
    __WXML_GLOBAL__ = {};
  }
  __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
  function _(a, b) {
    if (typeof b != "undefined") a.children.push(b);
  }
  function _v(k) {
    if (typeof k != "undefined")
      return { tag: "virtual", wxKey: k, children: [] };
    return { tag: "virtual", children: [] };
  }
  function _n(tag) {
    $gwxc++;
    if ($gwxc >= 16000) {
      throw "Dom limit exceeded, please check if there's any mistake you've made.";
    }
    return {
      tag: "wx-" + tag,
      attr: {},
      children: [],
      n: [],
      raw: {},
      generics: {},
    };
  }
  function _p(a, b) {
    b && a.properities.push(b);
  }
  function _s(scope, env, key) {
    return typeof scope[key] != "undefined" ? scope[key] : env[key];
  }
  function _wp(m) {
    console.warn("WXMLRT_$gwx:" + m);
  }
  function _wl(tname, prefix) {
    _wp(
      prefix +
        ":-1:-1:-1: Template `" +
        tname +
        "` is being called recursively, will be stop."
    );
  }
  $gwn = console.warn;
  $gwl = console.log;
  function $gwh() {
    function x() {}
    x.prototype = {
      hn: function (obj, all) {
        if (typeof obj == "object") {
          var cnt = 0;
          var any1 = false,
            any2 = false;
          for (var x in obj) {
            any1 = any1 | (x === "__value__");
            any2 = any2 | (x === "__wxspec__");
            cnt++;
            if (cnt > 2) break;
          }
          return cnt == 2 &&
            any1 &&
            any2 &&
            (all || obj.__wxspec__ !== "m" || this.hn(obj.__value__) === "h")
            ? "h"
            : "n";
        }
        return "n";
      },
      nh: function (obj, special) {
        return { __value__: obj, __wxspec__: special ? special : true };
      },
      rv: function (obj) {
        return this.hn(obj, true) === "n" ? obj : this.rv(obj.__value__);
      },
      hm: function (obj) {
        if (typeof obj == "object") {
          var cnt = 0;
          var any1 = false,
            any2 = false;
          for (var x in obj) {
            any1 = any1 | (x === "__value__");
            any2 = any2 | (x === "__wxspec__");
            cnt++;
            if (cnt > 2) break;
          }
          return (
            cnt == 2 &&
            any1 &&
            any2 &&
            (obj.__wxspec__ === "m" || this.hm(obj.__value__))
          );
        }
        return false;
      },
    };
    return new x();
  }
  wh = $gwh();
  function $gstack(s) {
    var tmp = s.split("\n " + " " + " " + " ");
    for (var i = 0; i < tmp.length; ++i) {
      if (0 == i) continue;
      if (")" === tmp[i][tmp[i].length - 1])
        tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
      else tmp[i] = "at anonymous function";
    }
    return tmp.join("\n " + " " + " " + " ");
  }
  function $gwrt(should_pass_type_info) {
    function ArithmeticEv(ops, e, s, g, o) {
      var _f = false;
      var rop = ops[0][1];
      var _a, _b, _c, _d, _aa, _bb;
      switch (rop) {
        case "?:":
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) === "h";
          _d = wh.rv(_a)
            ? rev(ops[2], e, s, g, o, _f)
            : rev(ops[3], e, s, g, o, _f);
          _d = _c && wh.hn(_d) === "n" ? wh.nh(_d, "c") : _d;
          return _d;
          break;
        case "&&":
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) === "h";
          _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
          _d = _c && wh.hn(_d) === "n" ? wh.nh(_d, "c") : _d;
          return _d;
          break;
        case "||":
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) === "h";
          _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
          _d = _c && wh.hn(_d) === "n" ? wh.nh(_d, "c") : _d;
          return _d;
          break;
        case "+":
        case "*":
        case "/":
        case "%":
        case "|":
        case "^":
        case "&":
        case "===":
        case "==":
        case "!=":
        case "!==":
        case ">=":
        case "<=":
        case ">":
        case "<":
        case "<<":
        case ">>":
          _a = rev(ops[1], e, s, g, o, _f);
          _b = rev(ops[2], e, s, g, o, _f);
          _c =
            should_pass_type_info && (wh.hn(_a) === "h" || wh.hn(_b) === "h");
          switch (rop) {
            case "+":
              _d = wh.rv(_a) + wh.rv(_b);
              break;
            case "*":
              _d = wh.rv(_a) * wh.rv(_b);
              break;
            case "/":
              _d = wh.rv(_a) / wh.rv(_b);
              break;
            case "%":
              _d = wh.rv(_a) % wh.rv(_b);
              break;
            case "|":
              _d = wh.rv(_a) | wh.rv(_b);
              break;
            case "^":
              _d = wh.rv(_a) ^ wh.rv(_b);
              break;
            case "&":
              _d = wh.rv(_a) & wh.rv(_b);
              break;
            case "===":
              _d = wh.rv(_a) === wh.rv(_b);
              break;
            case "==":
              _d = wh.rv(_a) == wh.rv(_b);
              break;
            case "!=":
              _d = wh.rv(_a) != wh.rv(_b);
              break;
            case "!==":
              _d = wh.rv(_a) !== wh.rv(_b);
              break;
            case ">=":
              _d = wh.rv(_a) >= wh.rv(_b);
              break;
            case "<=":
              _d = wh.rv(_a) <= wh.rv(_b);
              break;
            case ">":
              _d = wh.rv(_a) > wh.rv(_b);
              break;
            case "<":
              _d = wh.rv(_a) < wh.rv(_b);
              break;
            case "<<":
              _d = wh.rv(_a) << wh.rv(_b);
              break;
            case ">>":
              _d = wh.rv(_a) >> wh.rv(_b);
              break;
            default:
              break;
          }
          return _c ? wh.nh(_d, "c") : _d;
          break;
        case "-":
          _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
          _b =
            ops.length === 3
              ? rev(ops[2], e, s, g, o, _f)
              : rev(ops[1], e, s, g, o, _f);
          _c =
            should_pass_type_info && (wh.hn(_a) === "h" || wh.hn(_b) === "h");
          _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
          return _c ? wh.nh(_d, "c") : _d;
          break;
        case "!":
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) == "h";
          _d = !wh.rv(_a);
          return _c ? wh.nh(_d, "c") : _d;
        case "~":
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) == "h";
          _d = ~wh.rv(_a);
          return _c ? wh.nh(_d, "c") : _d;
        default:
          $gwn("unrecognized op" + rop);
      }
    }
    function rev(ops, e, s, g, o, newap) {
      var op = ops[0];
      var _f = false;
      if (typeof newap !== "undefined") o.ap = newap;
      if (typeof op === "object") {
        var vop = op[0];
        var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
        switch (vop) {
          case 2:
            return ArithmeticEv(ops, e, s, g, o);
            break;
          case 4:
            return rev(ops[1], e, s, g, o, _f);
            break;
          case 5:
            switch (ops.length) {
              case 2:
                _a = rev(ops[1], e, s, g, o, _f);
                return should_pass_type_info ? [_a] : [wh.rv(_a)];
                return [_a];
                break;
              case 1:
                return [];
                break;
              default:
                _a = rev(ops[1], e, s, g, o, _f);
                _b = rev(ops[2], e, s, g, o, _f);
                _a.push(should_pass_type_info ? _b : wh.rv(_b));
                return _a;
                break;
            }
            break;
          case 6:
            _a = rev(ops[1], e, s, g, o);
            var ap = o.ap;
            _ta = wh.hn(_a) === "h";
            _aa = _ta ? wh.rv(_a) : _a;
            o.is_affected |= _ta;
            if (should_pass_type_info) {
              if (_aa === null || typeof _aa === "undefined") {
                return _ta ? wh.nh(undefined, "e") : undefined;
              }
              _b = rev(ops[2], e, s, g, o, _f);
              _tb = wh.hn(_b) === "h";
              _bb = _tb ? wh.rv(_b) : _b;
              o.ap = ap;
              o.is_affected |= _tb;
              if (
                _bb === null ||
                typeof _bb === "undefined" ||
                _bb === "__proto__" ||
                _bb === "prototype" ||
                _bb === "caller"
              ) {
                return _ta || _tb ? wh.nh(undefined, "e") : undefined;
              }
              _d = _aa[_bb];
              if (typeof _d === "function" && !ap) _d = undefined;
              _td = wh.hn(_d) === "h";
              o.is_affected |= _td;
              return _ta || _tb ? (_td ? _d : wh.nh(_d, "e")) : _d;
            } else {
              if (_aa === null || typeof _aa === "undefined") {
                return undefined;
              }
              _b = rev(ops[2], e, s, g, o, _f);
              _tb = wh.hn(_b) === "h";
              _bb = _tb ? wh.rv(_b) : _b;
              o.ap = ap;
              o.is_affected |= _tb;
              if (
                _bb === null ||
                typeof _bb === "undefined" ||
                _bb === "__proto__" ||
                _bb === "prototype" ||
                _bb === "caller"
              ) {
                return undefined;
              }
              _d = _aa[_bb];
              if (typeof _d === "function" && !ap) _d = undefined;
              _td = wh.hn(_d) === "h";
              o.is_affected |= _td;
              return _td ? wh.rv(_d) : _d;
            }
          case 7:
            switch (ops[1][0]) {
              case 11:
                o.is_affected |= wh.hn(g) === "h";
                return g;
              case 3:
                _s = wh.rv(s);
                _e = wh.rv(e);
                _b = ops[1][1];
                if (g && g.f && g.f.hasOwnProperty(_b)) {
                  _a = g.f;
                  o.ap = true;
                } else {
                  _a =
                    _s && _s.hasOwnProperty(_b)
                      ? s
                      : _e && _e.hasOwnProperty(_b)
                      ? e
                      : undefined;
                }
                if (should_pass_type_info) {
                  if (_a) {
                    _ta = wh.hn(_a) === "h";
                    _aa = _ta ? wh.rv(_a) : _a;
                    _d = _aa[_b];
                    _td = wh.hn(_d) === "h";
                    o.is_affected |= _ta || _td;
                    _d = _ta && !_td ? wh.nh(_d, "e") : _d;
                    return _d;
                  }
                } else {
                  if (_a) {
                    _ta = wh.hn(_a) === "h";
                    _aa = _ta ? wh.rv(_a) : _a;
                    _d = _aa[_b];
                    _td = wh.hn(_d) === "h";
                    o.is_affected |= _ta || _td;
                    return wh.rv(_d);
                  }
                }
                return undefined;
            }
            break;
          case 8:
            _a = {};
            _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
            return _a;
            break;
          case 9:
            _a = rev(ops[1], e, s, g, o, _f);
            _b = rev(ops[2], e, s, g, o, _f);
            function merge(_a, _b, _ow) {
              var ka, _bbk;
              _ta = wh.hn(_a) === "h";
              _tb = wh.hn(_b) === "h";
              _aa = wh.rv(_a);
              _bb = wh.rv(_b);
              for (var k in _bb) {
                if (_ow || !_aa.hasOwnProperty(k)) {
                  _aa[k] = should_pass_type_info
                    ? _tb
                      ? wh.nh(_bb[k], "e")
                      : _bb[k]
                    : wh.rv(_bb[k]);
                }
              }
              return _a;
            }
            var _c = _a;
            var _ow = true;
            if (typeof ops[1][0] === "object" && ops[1][0][0] === 10) {
              _a = _b;
              _b = _c;
              _ow = false;
            }
            if (typeof ops[1][0] === "object" && ops[1][0][0] === 10) {
              var _r = {};
              return merge(merge(_r, _a, _ow), _b, _ow);
            } else return merge(_a, _b, _ow);
            break;
          case 10:
            _a = rev(ops[1], e, s, g, o, _f);
            _a = should_pass_type_info ? _a : wh.rv(_a);
            return _a;
            break;
          case 12:
            var _r;
            _a = rev(ops[1], e, s, g, o);
            if (!o.ap) {
              return should_pass_type_info && wh.hn(_a) === "h"
                ? wh.nh(_r, "f")
                : _r;
            }
            var ap = o.ap;
            _b = rev(ops[2], e, s, g, o, _f);
            o.ap = ap;
            _ta = wh.hn(_a) === "h";
            _tb = _ca(_b);
            _aa = wh.rv(_a);
            _bb = wh.rv(_b);
            snap_bb = $gdc(_bb, "nv_");
            try {
              _r =
                typeof _aa === "function"
                  ? $gdc(_aa.apply(null, snap_bb))
                  : undefined;
            } catch (e) {
              e.message = e.message.replace(/nv_/g, "");
              e.stack = e.stack.substring(
                0,
                e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_"))
              );
              e.stack = e.stack.replace(/\snv_/g, " ");
              e.stack = $gstack(e.stack);
              if (g.debugInfo) {
                e.stack +=
                  "\n " +
                  " " +
                  " " +
                  " at " +
                  g.debugInfo[0] +
                  ":" +
                  g.debugInfo[1] +
                  ":" +
                  g.debugInfo[2];
                console.error(e);
              }
              _r = undefined;
            }
            return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, "f") : _r;
        }
      } else {
        if (op === 3 || op === 1) return ops[1];
        else if (op === 11) {
          var _a = "";
          for (var i = 1; i < ops.length; i++) {
            var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
            _a += typeof xp === "undefined" ? "" : xp;
          }
          return _a;
        }
      }
    }
    function wrapper(ops, e, s, g, o, newap) {
      if (ops[0] == "11182016") {
        g.debugInfo = ops[2];
        return rev(ops[1], e, s, g, o, newap);
      } else {
        g.debugInfo = null;
        return rev(ops, e, s, g, o, newap);
      }
    }
    return wrapper;
  }
  gra = $gwrt(true);
  grb = $gwrt(false);
  function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
    {
      var o = { is_affected: false };
      var a = gra(ops, e, s, g, o);
      if (
        JSON.stringify(a) != JSON.stringify(expect_a) ||
        o.is_affected != expect_affected
      ) {
        console.warn(
          "A. " +
            expr +
            " get result " +
            JSON.stringify(a) +
            ", " +
            o.is_affected +
            ", but " +
            JSON.stringify(expect_a) +
            ", " +
            expect_affected +
            " is expected"
        );
      }
    }
    {
      var o = { is_affected: false };
      var a = grb(ops, e, s, g, o);
      if (
        JSON.stringify(a) != JSON.stringify(expect_b) ||
        o.is_affected != expect_affected
      ) {
        console.warn(
          "B. " +
            expr +
            " get result " +
            JSON.stringify(a) +
            ", " +
            o.is_affected +
            ", but " +
            JSON.stringify(expect_b) +
            ", " +
            expect_affected +
            " is expected"
        );
      }
    }
  }

  function wfor(
    to_iter,
    func,
    env,
    _s,
    global,
    father,
    itemname,
    indexname,
    keyname
  ) {
    var _n = wh.hn(to_iter) === "n";
    var scope = wh.rv(_s);
    var has_old_item = scope.hasOwnProperty(itemname);
    var has_old_index = scope.hasOwnProperty(indexname);
    var old_item = scope[itemname];
    var old_index = scope[indexname];
    var full = Object.prototype.toString.call(wh.rv(to_iter));
    var type = full[8];
    if (type === "N" && full[10] === "l") type = "X";
    var _y;
    if (_n) {
      if (type === "A") {
        var r_iter_item;
        for (var i = 0; i < to_iter.length; i++) {
          scope[itemname] = to_iter[i];
          scope[indexname] = _n ? i : wh.nh(i, "h");
          r_iter_item = wh.rv(to_iter[i]);
          var key =
            keyname && r_iter_item
              ? keyname === "*this"
                ? r_iter_item
                : wh.rv(r_iter_item[keyname])
              : undefined;
          _y = _v(key);
          _(father, _y);
          func(env, scope, _y, global);
        }
      } else if (type === "O") {
        var i = 0;
        var r_iter_item;
        for (var k in to_iter) {
          scope[itemname] = to_iter[k];
          scope[indexname] = _n ? k : wh.nh(k, "h");
          r_iter_item = wh.rv(to_iter[k]);
          var key =
            keyname && r_iter_item
              ? keyname === "*this"
                ? r_iter_item
                : wh.rv(r_iter_item[keyname])
              : undefined;
          _y = _v(key);
          _(father, _y);
          func(env, scope, _y, global);
          i++;
        }
      } else if (type === "S") {
        for (var i = 0; i < to_iter.length; i++) {
          scope[itemname] = to_iter[i];
          scope[indexname] = _n ? i : wh.nh(i, "h");
          _y = _v(to_iter[i] + i);
          _(father, _y);
          func(env, scope, _y, global);
        }
      } else if (type === "N") {
        for (var i = 0; i < to_iter; i++) {
          scope[itemname] = i;
          scope[indexname] = _n ? i : wh.nh(i, "h");
          _y = _v(i);
          _(father, _y);
          func(env, scope, _y, global);
        }
      } else {
      }
    } else {
      var r_to_iter = wh.rv(to_iter);
      var r_iter_item, iter_item;
      if (type === "A") {
        for (var i = 0; i < r_to_iter.length; i++) {
          iter_item = r_to_iter[i];
          iter_item =
            wh.hn(iter_item) === "n" ? wh.nh(iter_item, "h") : iter_item;
          r_iter_item = wh.rv(iter_item);
          scope[itemname] = iter_item;
          scope[indexname] = _n ? i : wh.nh(i, "h");
          var key =
            keyname && r_iter_item
              ? keyname === "*this"
                ? r_iter_item
                : wh.rv(r_iter_item[keyname])
              : undefined;
          _y = _v(key);
          _(father, _y);
          func(env, scope, _y, global);
        }
      } else if (type === "O") {
        var i = 0;
        for (var k in r_to_iter) {
          iter_item = r_to_iter[k];
          iter_item =
            wh.hn(iter_item) === "n" ? wh.nh(iter_item, "h") : iter_item;
          r_iter_item = wh.rv(iter_item);
          scope[itemname] = iter_item;
          scope[indexname] = _n ? k : wh.nh(k, "h");
          var key =
            keyname && r_iter_item
              ? keyname === "*this"
                ? r_iter_item
                : wh.rv(r_iter_item[keyname])
              : undefined;
          _y = _v(key);
          _(father, _y);
          func(env, scope, _y, global);
          i++;
        }
      } else if (type === "S") {
        for (var i = 0; i < r_to_iter.length; i++) {
          iter_item = wh.nh(r_to_iter[i], "h");
          scope[itemname] = iter_item;
          scope[indexname] = _n ? i : wh.nh(i, "h");
          _y = _v(to_iter[i] + i);
          _(father, _y);
          func(env, scope, _y, global);
        }
      } else if (type === "N") {
        for (var i = 0; i < r_to_iter; i++) {
          iter_item = wh.nh(i, "h");
          scope[itemname] = iter_item;
          scope[indexname] = _n ? i : wh.nh(i, "h");
          _y = _v(i);
          _(father, _y);
          func(env, scope, _y, global);
        }
      } else {
      }
    }
    if (has_old_item) {
      scope[itemname] = old_item;
    } else {
      delete scope[itemname];
    }
    if (has_old_index) {
      scope[indexname] = old_index;
    } else {
      delete scope[indexname];
    }
  }

  function _ca(o) {
    if (wh.hn(o) == "h") return true;
    if (typeof o !== "object") return false;
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        if (_ca(o[i])) return true;
      }
    }
    return false;
  }
  function _da(node, attrname, opindex, raw, o) {
    var isaffected = false;
    var value = $gdc(raw, "", 2);
    if (o.ap && value && value.constructor === Function) {
      attrname = "$wxs:" + attrname;
      node.attr["$gdc"] = $gdc;
    }
    if (o.is_affected || _ca(raw)) {
      node.n.push(attrname);
      node.raw[attrname] = raw;
    }
    node.attr[attrname] = value;
  }
  function _r(node, attrname, opindex, env, scope, global) {
    global.opindex = opindex;
    var o = {},
      _env;
    var a = grb(z[opindex], env, scope, global, o);
    _da(node, attrname, opindex, a, o);
  }
  function _rz(z, node, attrname, opindex, env, scope, global) {
    global.opindex = opindex;
    var o = {},
      _env;
    var a = grb(z[opindex], env, scope, global, o);
    _da(node, attrname, opindex, a, o);
  }
  function _o(opindex, env, scope, global) {
    global.opindex = opindex;
    var nothing = {};
    var r = grb(z[opindex], env, scope, global, nothing);
    return r && r.constructor === Function ? undefined : r;
  }
  function _oz(z, opindex, env, scope, global) {
    global.opindex = opindex;
    var nothing = {};
    var r = grb(z[opindex], env, scope, global, nothing);
    return r && r.constructor === Function ? undefined : r;
  }
  function _1(opindex, env, scope, global, o) {
    var o = o || {};
    global.opindex = opindex;
    return gra(z[opindex], env, scope, global, o);
  }
  function _1z(z, opindex, env, scope, global, o) {
    var o = o || {};
    global.opindex = opindex;
    return gra(z[opindex], env, scope, global, o);
  }
  function _2(
    opindex,
    func,
    env,
    scope,
    global,
    father,
    itemname,
    indexname,
    keyname
  ) {
    var o = {};
    var to_iter = _1(opindex, env, scope, global);
    wfor(
      to_iter,
      func,
      env,
      scope,
      global,
      father,
      itemname,
      indexname,
      keyname
    );
  }
  function _2z(
    z,
    opindex,
    func,
    env,
    scope,
    global,
    father,
    itemname,
    indexname,
    keyname
  ) {
    var o = {};
    var to_iter = _1z(z, opindex, env, scope, global);
    wfor(
      to_iter,
      func,
      env,
      scope,
      global,
      father,
      itemname,
      indexname,
      keyname
    );
  }

  function _m(tag, attrs, generics, env, scope, global) {
    var tmp = _n(tag);
    var base = 0;
    for (var i = 0; i < attrs.length; i += 2) {
      if (base + attrs[i + 1] < 0) {
        tmp.attr[attrs[i]] = true;
      } else {
        _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
        if (base === 0) base = attrs[i + 1];
      }
    }
    for (var i = 0; i < generics.length; i += 2) {
      if (base + generics[i + 1] < 0) {
        tmp.generics[generics[i]] = "";
      } else {
        var $t = grb(z[base + generics[i + 1]], env, scope, global);
        if ($t != "") $t = "wx-" + $t;
        tmp.generics[generics[i]] = $t;
        if (base === 0) base = generics[i + 1];
      }
    }
    return tmp;
  }
  function _mz(z, tag, attrs, generics, env, scope, global) {
    var tmp = _n(tag);
    var base = 0;
    for (var i = 0; i < attrs.length; i += 2) {
      if (base + attrs[i + 1] < 0) {
        tmp.attr[attrs[i]] = true;
      } else {
        _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
        if (base === 0) base = attrs[i + 1];
      }
    }
    for (var i = 0; i < generics.length; i += 2) {
      if (base + generics[i + 1] < 0) {
        tmp.generics[generics[i]] = "";
      } else {
        var $t = grb(z[base + generics[i + 1]], env, scope, global);
        if ($t != "") $t = "wx-" + $t;
        tmp.generics[generics[i]] = $t;
        if (base === 0) base = generics[i + 1];
      }
    }
    return tmp;
  }

  var nf_init = function () {
    if (
      typeof __WXML_GLOBAL__ === "undefined" ||
      undefined === __WXML_GLOBAL__.wxs_nf_init
    ) {
      nf_init_Object();
      nf_init_Function();
      nf_init_Array();
      nf_init_String();
      nf_init_Boolean();
      nf_init_Number();
      nf_init_Math();
      nf_init_Date();
      nf_init_RegExp();
    }
    if (typeof __WXML_GLOBAL__ !== "undefined")
      __WXML_GLOBAL__.wxs_nf_init = true;
  };
  var nf_init_Object = function () {
    Object.defineProperty(Object.prototype, "nv_constructor", {
      writable: true,
      value: "Object",
    });
    Object.defineProperty(Object.prototype, "nv_toString", {
      writable: true,
      value: function () {
        return "[object Object]";
      },
    });
  };
  var nf_init_Function = function () {
    Object.defineProperty(Function.prototype, "nv_constructor", {
      writable: true,
      value: "Function",
    });
    Object.defineProperty(Function.prototype, "nv_length", {
      get: function () {
        return this.length;
      },
      set: function () {},
    });
    Object.defineProperty(Function.prototype, "nv_toString", {
      writable: true,
      value: function () {
        return "[function Function]";
      },
    });
  };
  var nf_init_Array = function () {
    Object.defineProperty(Array.prototype, "nv_toString", {
      writable: true,
      value: function () {
        return this.nv_join();
      },
    });
    Object.defineProperty(Array.prototype, "nv_join", {
      writable: true,
      value: function (s) {
        s = undefined == s ? "," : s;
        var r = "";
        for (var i = 0; i < this.length; ++i) {
          if (0 != i) r += s;
          if (null == this[i] || undefined == this[i]) r += "";
          else if (typeof this[i] == "function") r += this[i].nv_toString();
          else if (
            typeof this[i] == "object" &&
            this[i].nv_constructor === "Array"
          )
            r += this[i].nv_join();
          else r += this[i].toString();
        }
        return r;
      },
    });
    Object.defineProperty(Array.prototype, "nv_constructor", {
      writable: true,
      value: "Array",
    });
    Object.defineProperty(Array.prototype, "nv_concat", {
      writable: true,
      value: Array.prototype.concat,
    });
    Object.defineProperty(Array.prototype, "nv_pop", {
      writable: true,
      value: Array.prototype.pop,
    });
    Object.defineProperty(Array.prototype, "nv_push", {
      writable: true,
      value: Array.prototype.push,
    });
    Object.defineProperty(Array.prototype, "nv_reverse", {
      writable: true,
      value: Array.prototype.reverse,
    });
    Object.defineProperty(Array.prototype, "nv_shift", {
      writable: true,
      value: Array.prototype.shift,
    });
    Object.defineProperty(Array.prototype, "nv_slice", {
      writable: true,
      value: Array.prototype.slice,
    });
    Object.defineProperty(Array.prototype, "nv_sort", {
      writable: true,
      value: Array.prototype.sort,
    });
    Object.defineProperty(Array.prototype, "nv_splice", {
      writable: true,
      value: Array.prototype.splice,
    });
    Object.defineProperty(Array.prototype, "nv_unshift", {
      writable: true,
      value: Array.prototype.unshift,
    });
    Object.defineProperty(Array.prototype, "nv_indexOf", {
      writable: true,
      value: Array.prototype.indexOf,
    });
    Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
      writable: true,
      value: Array.prototype.lastIndexOf,
    });
    Object.defineProperty(Array.prototype, "nv_every", {
      writable: true,
      value: Array.prototype.every,
    });
    Object.defineProperty(Array.prototype, "nv_some", {
      writable: true,
      value: Array.prototype.some,
    });
    Object.defineProperty(Array.prototype, "nv_forEach", {
      writable: true,
      value: Array.prototype.forEach,
    });
    Object.defineProperty(Array.prototype, "nv_map", {
      writable: true,
      value: Array.prototype.map,
    });
    Object.defineProperty(Array.prototype, "nv_filter", {
      writable: true,
      value: Array.prototype.filter,
    });
    Object.defineProperty(Array.prototype, "nv_reduce", {
      writable: true,
      value: Array.prototype.reduce,
    });
    Object.defineProperty(Array.prototype, "nv_reduceRight", {
      writable: true,
      value: Array.prototype.reduceRight,
    });
    Object.defineProperty(Array.prototype, "nv_length", {
      get: function () {
        return this.length;
      },
      set: function (value) {
        this.length = value;
      },
    });
  };
  var nf_init_String = function () {
    Object.defineProperty(String.prototype, "nv_constructor", {
      writable: true,
      value: "String",
    });
    Object.defineProperty(String.prototype, "nv_toString", {
      writable: true,
      value: String.prototype.toString,
    });
    Object.defineProperty(String.prototype, "nv_valueOf", {
      writable: true,
      value: String.prototype.valueOf,
    });
    Object.defineProperty(String.prototype, "nv_charAt", {
      writable: true,
      value: String.prototype.charAt,
    });
    Object.defineProperty(String.prototype, "nv_charCodeAt", {
      writable: true,
      value: String.prototype.charCodeAt,
    });
    Object.defineProperty(String.prototype, "nv_concat", {
      writable: true,
      value: String.prototype.concat,
    });
    Object.defineProperty(String.prototype, "nv_indexOf", {
      writable: true,
      value: String.prototype.indexOf,
    });
    Object.defineProperty(String.prototype, "nv_lastIndexOf", {
      writable: true,
      value: String.prototype.lastIndexOf,
    });
    Object.defineProperty(String.prototype, "nv_localeCompare", {
      writable: true,
      value: String.prototype.localeCompare,
    });
    Object.defineProperty(String.prototype, "nv_match", {
      writable: true,
      value: String.prototype.match,
    });
    Object.defineProperty(String.prototype, "nv_replace", {
      writable: true,
      value: String.prototype.replace,
    });
    Object.defineProperty(String.prototype, "nv_search", {
      writable: true,
      value: String.prototype.search,
    });
    Object.defineProperty(String.prototype, "nv_slice", {
      writable: true,
      value: String.prototype.slice,
    });
    Object.defineProperty(String.prototype, "nv_split", {
      writable: true,
      value: String.prototype.split,
    });
    Object.defineProperty(String.prototype, "nv_substring", {
      writable: true,
      value: String.prototype.substring,
    });
    Object.defineProperty(String.prototype, "nv_toLowerCase", {
      writable: true,
      value: String.prototype.toLowerCase,
    });
    Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
      writable: true,
      value: String.prototype.toLocaleLowerCase,
    });
    Object.defineProperty(String.prototype, "nv_toUpperCase", {
      writable: true,
      value: String.prototype.toUpperCase,
    });
    Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
      writable: true,
      value: String.prototype.toLocaleUpperCase,
    });
    Object.defineProperty(String.prototype, "nv_trim", {
      writable: true,
      value: String.prototype.trim,
    });
    Object.defineProperty(String.prototype, "nv_length", {
      get: function () {
        return this.length;
      },
      set: function (value) {
        this.length = value;
      },
    });
  };
  var nf_init_Boolean = function () {
    Object.defineProperty(Boolean.prototype, "nv_constructor", {
      writable: true,
      value: "Boolean",
    });
    Object.defineProperty(Boolean.prototype, "nv_toString", {
      writable: true,
      value: Boolean.prototype.toString,
    });
    Object.defineProperty(Boolean.prototype, "nv_valueOf", {
      writable: true,
      value: Boolean.prototype.valueOf,
    });
  };
  var nf_init_Number = function () {
    Object.defineProperty(Number, "nv_MAX_VALUE", {
      writable: false,
      value: Number.MAX_VALUE,
    });
    Object.defineProperty(Number, "nv_MIN_VALUE", {
      writable: false,
      value: Number.MIN_VALUE,
    });
    Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
      writable: false,
      value: Number.NEGATIVE_INFINITY,
    });
    Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
      writable: false,
      value: Number.POSITIVE_INFINITY,
    });
    Object.defineProperty(Number.prototype, "nv_constructor", {
      writable: true,
      value: "Number",
    });
    Object.defineProperty(Number.prototype, "nv_toString", {
      writable: true,
      value: Number.prototype.toString,
    });
    Object.defineProperty(Number.prototype, "nv_toLocaleString", {
      writable: true,
      value: Number.prototype.toLocaleString,
    });
    Object.defineProperty(Number.prototype, "nv_valueOf", {
      writable: true,
      value: Number.prototype.valueOf,
    });
    Object.defineProperty(Number.prototype, "nv_toFixed", {
      writable: true,
      value: Number.prototype.toFixed,
    });
    Object.defineProperty(Number.prototype, "nv_toExponential", {
      writable: true,
      value: Number.prototype.toExponential,
    });
    Object.defineProperty(Number.prototype, "nv_toPrecision", {
      writable: true,
      value: Number.prototype.toPrecision,
    });
  };
  var nf_init_Math = function () {
    Object.defineProperty(Math, "nv_E", { writable: false, value: Math.E });
    Object.defineProperty(Math, "nv_LN10", {
      writable: false,
      value: Math.LN10,
    });
    Object.defineProperty(Math, "nv_LN2", { writable: false, value: Math.LN2 });
    Object.defineProperty(Math, "nv_LOG2E", {
      writable: false,
      value: Math.LOG2E,
    });
    Object.defineProperty(Math, "nv_LOG10E", {
      writable: false,
      value: Math.LOG10E,
    });
    Object.defineProperty(Math, "nv_PI", { writable: false, value: Math.PI });
    Object.defineProperty(Math, "nv_SQRT1_2", {
      writable: false,
      value: Math.SQRT1_2,
    });
    Object.defineProperty(Math, "nv_SQRT2", {
      writable: false,
      value: Math.SQRT2,
    });
    Object.defineProperty(Math, "nv_abs", { writable: false, value: Math.abs });
    Object.defineProperty(Math, "nv_acos", {
      writable: false,
      value: Math.acos,
    });
    Object.defineProperty(Math, "nv_asin", {
      writable: false,
      value: Math.asin,
    });
    Object.defineProperty(Math, "nv_atan", {
      writable: false,
      value: Math.atan,
    });
    Object.defineProperty(Math, "nv_atan2", {
      writable: false,
      value: Math.atan2,
    });
    Object.defineProperty(Math, "nv_ceil", {
      writable: false,
      value: Math.ceil,
    });
    Object.defineProperty(Math, "nv_cos", { writable: false, value: Math.cos });
    Object.defineProperty(Math, "nv_exp", { writable: false, value: Math.exp });
    Object.defineProperty(Math, "nv_floor", {
      writable: false,
      value: Math.floor,
    });
    Object.defineProperty(Math, "nv_log", { writable: false, value: Math.log });
    Object.defineProperty(Math, "nv_max", { writable: false, value: Math.max });
    Object.defineProperty(Math, "nv_min", { writable: false, value: Math.min });
    Object.defineProperty(Math, "nv_pow", { writable: false, value: Math.pow });
    Object.defineProperty(Math, "nv_random", {
      writable: false,
      value: Math.random,
    });
    Object.defineProperty(Math, "nv_round", {
      writable: false,
      value: Math.round,
    });
    Object.defineProperty(Math, "nv_sin", { writable: false, value: Math.sin });
    Object.defineProperty(Math, "nv_sqrt", {
      writable: false,
      value: Math.sqrt,
    });
    Object.defineProperty(Math, "nv_tan", { writable: false, value: Math.tan });
  };
  var nf_init_Date = function () {
    Object.defineProperty(Date.prototype, "nv_constructor", {
      writable: true,
      value: "Date",
    });
    Object.defineProperty(Date, "nv_parse", {
      writable: true,
      value: Date.parse,
    });
    Object.defineProperty(Date, "nv_UTC", { writable: true, value: Date.UTC });
    Object.defineProperty(Date, "nv_now", { writable: true, value: Date.now });
    Object.defineProperty(Date.prototype, "nv_toString", {
      writable: true,
      value: Date.prototype.toString,
    });
    Object.defineProperty(Date.prototype, "nv_toDateString", {
      writable: true,
      value: Date.prototype.toDateString,
    });
    Object.defineProperty(Date.prototype, "nv_toTimeString", {
      writable: true,
      value: Date.prototype.toTimeString,
    });
    Object.defineProperty(Date.prototype, "nv_toLocaleString", {
      writable: true,
      value: Date.prototype.toLocaleString,
    });
    Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
      writable: true,
      value: Date.prototype.toLocaleDateString,
    });
    Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
      writable: true,
      value: Date.prototype.toLocaleTimeString,
    });
    Object.defineProperty(Date.prototype, "nv_valueOf", {
      writable: true,
      value: Date.prototype.valueOf,
    });
    Object.defineProperty(Date.prototype, "nv_getTime", {
      writable: true,
      value: Date.prototype.getTime,
    });
    Object.defineProperty(Date.prototype, "nv_getFullYear", {
      writable: true,
      value: Date.prototype.getFullYear,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
      writable: true,
      value: Date.prototype.getUTCFullYear,
    });
    Object.defineProperty(Date.prototype, "nv_getMonth", {
      writable: true,
      value: Date.prototype.getMonth,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
      writable: true,
      value: Date.prototype.getUTCMonth,
    });
    Object.defineProperty(Date.prototype, "nv_getDate", {
      writable: true,
      value: Date.prototype.getDate,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCDate", {
      writable: true,
      value: Date.prototype.getUTCDate,
    });
    Object.defineProperty(Date.prototype, "nv_getDay", {
      writable: true,
      value: Date.prototype.getDay,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCDay", {
      writable: true,
      value: Date.prototype.getUTCDay,
    });
    Object.defineProperty(Date.prototype, "nv_getHours", {
      writable: true,
      value: Date.prototype.getHours,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCHours", {
      writable: true,
      value: Date.prototype.getUTCHours,
    });
    Object.defineProperty(Date.prototype, "nv_getMinutes", {
      writable: true,
      value: Date.prototype.getMinutes,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
      writable: true,
      value: Date.prototype.getUTCMinutes,
    });
    Object.defineProperty(Date.prototype, "nv_getSeconds", {
      writable: true,
      value: Date.prototype.getSeconds,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
      writable: true,
      value: Date.prototype.getUTCSeconds,
    });
    Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
      writable: true,
      value: Date.prototype.getMilliseconds,
    });
    Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
      writable: true,
      value: Date.prototype.getUTCMilliseconds,
    });
    Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
      writable: true,
      value: Date.prototype.getTimezoneOffset,
    });
    Object.defineProperty(Date.prototype, "nv_setTime", {
      writable: true,
      value: Date.prototype.setTime,
    });
    Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
      writable: true,
      value: Date.prototype.setMilliseconds,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
      writable: true,
      value: Date.prototype.setUTCMilliseconds,
    });
    Object.defineProperty(Date.prototype, "nv_setSeconds", {
      writable: true,
      value: Date.prototype.setSeconds,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
      writable: true,
      value: Date.prototype.setUTCSeconds,
    });
    Object.defineProperty(Date.prototype, "nv_setMinutes", {
      writable: true,
      value: Date.prototype.setMinutes,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
      writable: true,
      value: Date.prototype.setUTCMinutes,
    });
    Object.defineProperty(Date.prototype, "nv_setHours", {
      writable: true,
      value: Date.prototype.setHours,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCHours", {
      writable: true,
      value: Date.prototype.setUTCHours,
    });
    Object.defineProperty(Date.prototype, "nv_setDate", {
      writable: true,
      value: Date.prototype.setDate,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCDate", {
      writable: true,
      value: Date.prototype.setUTCDate,
    });
    Object.defineProperty(Date.prototype, "nv_setMonth", {
      writable: true,
      value: Date.prototype.setMonth,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
      writable: true,
      value: Date.prototype.setUTCMonth,
    });
    Object.defineProperty(Date.prototype, "nv_setFullYear", {
      writable: true,
      value: Date.prototype.setFullYear,
    });
    Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
      writable: true,
      value: Date.prototype.setUTCFullYear,
    });
    Object.defineProperty(Date.prototype, "nv_toUTCString", {
      writable: true,
      value: Date.prototype.toUTCString,
    });
    Object.defineProperty(Date.prototype, "nv_toISOString", {
      writable: true,
      value: Date.prototype.toISOString,
    });
    Object.defineProperty(Date.prototype, "nv_toJSON", {
      writable: true,
      value: Date.prototype.toJSON,
    });
  };
  var nf_init_RegExp = function () {
    Object.defineProperty(RegExp.prototype, "nv_constructor", {
      writable: true,
      value: "RegExp",
    });
    Object.defineProperty(RegExp.prototype, "nv_exec", {
      writable: true,
      value: RegExp.prototype.exec,
    });
    Object.defineProperty(RegExp.prototype, "nv_test", {
      writable: true,
      value: RegExp.prototype.test,
    });
    Object.defineProperty(RegExp.prototype, "nv_toString", {
      writable: true,
      value: RegExp.prototype.toString,
    });
    Object.defineProperty(RegExp.prototype, "nv_source", {
      get: function () {
        return this.source;
      },
      set: function () {},
    });
    Object.defineProperty(RegExp.prototype, "nv_global", {
      get: function () {
        return this.global;
      },
      set: function () {},
    });
    Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
      get: function () {
        return this.ignoreCase;
      },
      set: function () {},
    });
    Object.defineProperty(RegExp.prototype, "nv_multiline", {
      get: function () {
        return this.multiline;
      },
      set: function () {},
    });
    Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
      get: function () {
        return this.lastIndex;
      },
      set: function (v) {
        this.lastIndex = v;
      },
    });
  };
  nf_init();
  var nv_getDate = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(Date);
    return new (Function.prototype.bind.apply(Date, args))();
  };
  var nv_getRegExp = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(RegExp);
    return new (Function.prototype.bind.apply(RegExp, args))();
  };
  var nv_console = {};
  nv_console.nv_log = function () {
    var res = "WXSRT:";
    for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
    console.log(res);
  };
  var nv_parseInt = parseInt,
    nv_parseFloat = parseFloat,
    nv_isNaN = isNaN,
    nv_isFinite = isFinite,
    nv_decodeURI = decodeURI,
    nv_decodeURIComponent = decodeURIComponent,
    nv_encodeURI = encodeURI,
    nv_encodeURIComponent = encodeURIComponent;
  function $gdc(o, p, r) {
    o = wh.rv(o);
    if (o === null || o === undefined) return o;
    if (
      typeof o === "string" ||
      typeof o === "boolean" ||
      typeof o === "number"
    )
      return o;
    if (o.constructor === Object) {
      var copy = {};
      for (var k in o)
        if (Object.prototype.hasOwnProperty.call(o, k))
          if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
          else copy[p + k] = $gdc(o[k], p, r);
      return copy;
    }
    if (o.constructor === Array) {
      var copy = [];
      for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
      return copy;
    }
    if (o.constructor === Date) {
      var copy = new Date();
      copy.setTime(o.getTime());
      return copy;
    }
    if (o.constructor === RegExp) {
      var f = "";
      if (o.global) f += "g";
      if (o.ignoreCase) f += "i";
      if (o.multiline) f += "m";
      return new RegExp(o.source, f);
    }
    if (r && typeof o === "function") {
      if (r == 1) return $gdc(o(), undefined, 2);
      if (r == 2) return o;
    }
    return null;
  }
  var nv_JSON = {};
  nv_JSON.nv_stringify = function (o) {
    JSON.stringify(o);
    return JSON.stringify($gdc(o));
  };
  nv_JSON.nv_parse = function (o) {
    if (o === undefined) return undefined;
    var t = JSON.parse(o);
    return $gdc(t, "nv_");
  };

  function _af(p, a, r, c) {
    p.extraAttr = { t_action: a, t_rawid: r };
    if (typeof c != "undefined") p.extraAttr.t_cid = c;
  }

  function _ai(i, p, e, me, r, c) {
    var x = _grp(p, e, me);
    if (x) i.push(x);
    else {
      i.push("");
      _wp(
        me +
          ":import:" +
          r +
          ":" +
          c +
          ": Path `" +
          p +
          "` not found from `" +
          me +
          "`."
      );
    }
  }
  function _grp(p, e, me) {
    if (p[0] != "/") {
      var mepart = me.split("/");
      mepart.pop();
      var ppart = p.split("/");
      for (var i = 0; i < ppart.length; i++) {
        if (ppart[i] == "..") mepart.pop();
        else if (!ppart[i] || ppart[i] == ".") continue;
        else mepart.push(ppart[i]);
      }
      p = mepart.join("/");
    }
    if (me[0] == "." && p[0] == "/") p = "." + p;
    if (e[p]) return p;
    if (e[p + ".wxml"]) return p + ".wxml";
  }
  function _gd(p, c, e, d) {
    if (!c) return;
    if (d[p][c]) return d[p][c];
    for (var x = e[p].i.length - 1; x >= 0; x--) {
      if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c];
    }
    for (var x = e[p].ti.length - 1; x >= 0; x--) {
      var q = _grp(e[p].ti[x], e, p);
      if (q && d[q][c]) return d[q][c];
    }
    var ii = _gapi(e, p);
    for (var x = 0; x < ii.length; x++) {
      if (ii[x] && d[ii[x]][c]) return d[ii[x]][c];
    }
    for (var k = e[p].j.length - 1; k >= 0; k--)
      if (e[p].j[k]) {
        for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
          var pp = _grp(e[e[p].j[k]].ti[q], e, p);
          if (pp && d[pp][c]) {
            return d[pp][c];
          }
        }
      }
  }
  function _gapi(e, p) {
    if (!p) return [];
    if ($gaic[p]) {
      return $gaic[p];
    }
    var ret = [],
      q = [],
      h = 0,
      t = 0,
      put = {},
      visited = {};
    q.push(p);
    visited[p] = true;
    t++;
    while (h < t) {
      var a = q[h++];
      for (var i = 0; i < e[a].ic.length; i++) {
        var nd = e[a].ic[i];
        var np = _grp(nd, e, a);
        if (np && !visited[np]) {
          visited[np] = true;
          q.push(np);
          t++;
        }
      }
      for (var i = 0; a != p && i < e[a].ti.length; i++) {
        var ni = e[a].ti[i];
        var nm = _grp(ni, e, a);
        if (nm && !put[nm]) {
          put[nm] = true;
          ret.push(nm);
        }
      }
    }
    $gaic[p] = ret;
    return ret;
  }
  var $ixc = {};
  function _ic(p, ent, me, e, s, r, gg) {
    var x = _grp(p, ent, me);
    ent[me].j.push(x);
    if (x) {
      if ($ixc[x]) {
        _wp(
          "-1:include:-1:-1: `" +
            p +
            "` is being included in a loop, will be stop."
        );
        return;
      }
      $ixc[x] = true;
      try {
        ent[x].f(e, s, r, gg);
      } catch (e) {}
      $ixc[x] = false;
    } else {
      _wp(
        me +
          ":include:-1:-1: Included path `" +
          p +
          "` not found from `" +
          me +
          "`."
      );
    }
  }
  function _w(tn, f, line, c) {
    _wp(
      f + ":template:" + line + ":" + c + ": Template `" + tn + "` not found."
    );
  }
  function _ev(dom) {
    var changed = false;
    delete dom.properities;
    delete dom.n;
    if (dom.children) {
      do {
        changed = false;
        var newch = [];
        for (var i = 0; i < dom.children.length; i++) {
          var ch = dom.children[i];
          if (ch.tag == "virtual") {
            changed = true;
            for (var j = 0; ch.children && j < ch.children.length; j++) {
              newch.push(ch.children[j]);
            }
          } else {
            newch.push(ch);
          }
        }
        dom.children = newch;
      } while (changed);
      for (var i = 0; i < dom.children.length; i++) {
        _ev(dom.children[i]);
      }
    }
    return dom;
  }
  function _tsd(root) {
    if (root.tag == "wx-wx-scope") {
      root.tag = "virtual";
      root.wxCkey = "11";
      root["wxScopeData"] = root.attr["wx:scope-data"];
      delete root.n;
      delete root.raw;
      delete root.generics;
      delete root.attr;
    }
    for (var i = 0; root.children && i < root.children.length; i++) {
      _tsd(root.children[i]);
    }
    return root;
  }

  var e_ = {};
  if (typeof global.entrys === "undefined") global.entrys = {};
  e_ = global.entrys;
  var d_ = {};
  if (typeof global.defines === "undefined") global.defines = {};
  d_ = global.defines;
  var f_ = {};
  if (typeof global.modules === "undefined") global.modules = {};
  f_ = global.modules || {};
  var p_ = {};
  __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
  __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
  __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
  var z = __WXML_GLOBAL__.ops_set.$gwx || [];
  function gz$gwx_1() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_1)
      return __WXML_GLOBAL__.ops_cached.$gwx_1;
    __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
    (function (z) {
      var a = 11;
      function Z(ops) {
        z.push(ops);
      }
      Z([[7], [3, "mask"]]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_1);
    return __WXML_GLOBAL__.ops_cached.$gwx_1;
  }
  function gz$gwx_2() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_2)
      return __WXML_GLOBAL__.ops_cached.$gwx_2;
    __WXML_GLOBAL__.ops_cached.$gwx_2 = [];
    (function (z) {
      var a = 11;
      function Z(ops) {
        z.push(ops);
      }
      Z([3, "pickColor"]);
      Z([[7], [3, "rgb"]]);
      Z(z[1]);
      Z([[7], [3, "pick"]]);
      Z([[7], [3, "title"]]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_2);
    return __WXML_GLOBAL__.ops_cached.$gwx_2;
  }
  function gz$gwx_3() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_3)
      return __WXML_GLOBAL__.ops_cached.$gwx_3;
    __WXML_GLOBAL__.ops_cached.$gwx_3 = [];
    (function (z) {
      var a = 11;
      function Z(ops) {
        z.push(ops);
      }
      Z([
        a,
        [3, "display:"],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "Panel"]],
            [1, 2],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 0],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z([[7], [3, "UEN"]]);
      Z([
        [2, "!"],
        [[7], [3, "UEN"]],
      ]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 1],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 20],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 5],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 6],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 16],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([3, "SetBox"]);
      Z([3, "SendLayout"]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 17],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 18],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, ">="],
            [[7], [3, "Panel"]],
            [1, 2],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[19]);
      Z(z[20]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 8],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z([3, "btnLayout"]);
      Z(z[2]);
      Z(z[3]);
      Z(z[2]);
      Z(z[3]);
      Z(z[19]);
      Z(z[20]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 21],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 19],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 9],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z(z[19]);
      Z(z[20]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 4],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 7],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 11],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z(z[19]);
      Z(z[20]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 12],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 13],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[35]);
      Z(z[2]);
      Z(z[3]);
      Z(z[2]);
      Z(z[3]);
      Z(z[19]);
      Z(z[20]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 14],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
      Z([
        a,
        z[0][1],
        [
          [2, "?:"],
          [
            [2, "=="],
            [[7], [3, "ShowBar"]],
            [1, 10],
          ],
          [1, "block"],
          [1, "none"],
        ],
      ]);
      Z(z[2]);
      Z(z[3]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_3);
    return __WXML_GLOBAL__.ops_cached.$gwx_3;
  }
  function gz$gwx_4() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_4)
      return __WXML_GLOBAL__.ops_cached.$gwx_4;
    __WXML_GLOBAL__.ops_cached.$gwx_4 = [];
    (function (z) {
      var a = 11;
      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_4);
    return __WXML_GLOBAL__.ops_cached.$gwx_4;
  }
  function gz$gwx_5() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_5)
      return __WXML_GLOBAL__.ops_cached.$gwx_5;
    __WXML_GLOBAL__.ops_cached.$gwx_5 = [];
    (function (z) {
      var a = 11;
      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_5);
    return __WXML_GLOBAL__.ops_cached.$gwx_5;
  }
  function gz$gwx_6() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_6)
      return __WXML_GLOBAL__.ops_cached.$gwx_6;
    __WXML_GLOBAL__.ops_cached.$gwx_6 = [];
    (function (z) {
      var a = 11;
      function Z(ops) {
        z.push(ops);
      }
      Z([
        [2, "&&"],
        [
          [2, "!"],
          [[6], [[7], [3, "deviceListDataShow"]], [3, "length"]],
        ],
        [[7], [3, "Start"]],
      ]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_6);
    return __WXML_GLOBAL__.ops_cached.$gwx_6;
  }
  __WXML_GLOBAL__.ops_set.$gwx = z;
  __WXML_GLOBAL__.ops_init.$gwx = true;
  var nv_require = (function () {
    var nnm = {
      "m_./pages/NewUI1/NewUI.wxml:CX": np_0,
      "m_./pages/index/index.wxml:tools": np_1,
    };
    var nom = {};
    return function (n) {
      if (n[0] === "p" && n[1] === "_" && f_[n.slice(2)]) return f_[n.slice(2)];
      return function () {
        if (!nnm[n]) return undefined;
        try {
          if (!nom[n]) nom[n] = nnm[n]();
          return nom[n];
        } catch (e) {
          e.message = e.message.replace(/nv_/g, "");
          var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
          e.stack = tmp.substring(0, tmp.lastIndexOf("\n"));
          e.stack = e.stack.replace(/\snv_/g, " ");
          e.stack = $gstack(e.stack);
          e.stack += "\n    at " + n.substring(2);
          console.error(e);
        }
      };
    };
  })();
  f_["./pages/NewUI1/NewUI.wxml"] = {};
  f_["./pages/NewUI1/NewUI.wxml"]["CX"] = nv_require(
    "m_./pages/NewUI1/NewUI.wxml:CX"
  );
  function np_0() {
    var nv_module = { nv_exports: {} };
    var nv_toFixed = function (nv_str, nv_v) {
      return nv_str.nv_toFixed(nv_v);
    };
    nv_module.nv_exports.nv_toFixed = nv_toFixed;
    return nv_module.nv_exports;
  }

  f_["./pages/index/index.wxml"] = {};
  f_["./pages/index/index.wxml"]["tools"] = nv_require(
    "m_./pages/index/index.wxml:tools"
  );
  function np_1() {
    var nv_module = { nv_exports: {} };
    var nv_strFirst = function (nv_str) {
      return nv_str.nv_slice(0, 4);
    };
    nv_module.nv_exports.nv_strFirst = nv_strFirst;
    var nv_StrFirst = function (nv_str) {
      return nv_str.nv_slice(0, 1);
    };
    nv_module.nv_exports.nv_StrFirst = nv_StrFirst;
    return nv_module.nv_exports;
  }

  var x = [
    "./components/color-picker/color-picker.wxml",
    "./pages/NewUI/NewUI.wxml",
    "./pages/NewUI1/NewUI.wxml",
    "./pages/device/device.wxml",
    "./pages/device2/device.wxml",
    "./pages/index/index.wxml",
  ];
  d_[x[0]] = {};
  var m0 = function (e, s, r, gg) {
    var z = gz$gwx_1();
    var oB = _v();
    _(r, oB);
    if (_oz(z, 0, e, s, gg)) {
      oB.wxVkey = 1;
    }
    oB.wxXCkey = 1;
    return r;
  };
  e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
  d_[x[1]] = {};
  var m1 = function (e, s, r, gg) {
    var z = gz$gwx_2();
    var oD = _mz(
      z,
      "color-picker",
      [
        "bindchangeColor",
        0,
        "colorRes",
        1,
        "initColor",
        1,
        "show",
        2,
        "title",
        3,
      ],
      [],
      e,
      s,
      gg
    );
    _(r, oD);
    return r;
  };
  e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
  d_[x[2]] = {};
  var m2 = function (e, s, r, gg) {
    var z = gz$gwx_3();
    var cF = _n("view");
    _rz(z, cF, "style", 0, e, s, gg);
    var hG = _n("view");
    _rz(z, hG, "style", 1, e, s, gg);
    var oH = _v();
    _(hG, oH);
    if (_oz(z, 2, e, s, gg)) {
      oH.wxVkey = 1;
    }
    var cI = _v();
    _(hG, cI);
    if (_oz(z, 3, e, s, gg)) {
      cI.wxVkey = 1;
    }
    oH.wxXCkey = 1;
    cI.wxXCkey = 1;
    _(cF, hG);
    var oJ = _n("view");
    _rz(z, oJ, "style", 4, e, s, gg);
    var lK = _v();
    _(oJ, lK);
    if (_oz(z, 5, e, s, gg)) {
      lK.wxVkey = 1;
    }
    var aL = _v();
    _(oJ, aL);
    if (_oz(z, 6, e, s, gg)) {
      aL.wxVkey = 1;
    }
    lK.wxXCkey = 1;
    aL.wxXCkey = 1;
    _(cF, oJ);
    var tM = _n("view");
    _rz(z, tM, "style", 7, e, s, gg);
    var eN = _v();
    _(tM, eN);
    if (_oz(z, 8, e, s, gg)) {
      eN.wxVkey = 1;
    }
    var bO = _v();
    _(tM, bO);
    if (_oz(z, 9, e, s, gg)) {
      bO.wxVkey = 1;
    }
    eN.wxXCkey = 1;
    bO.wxXCkey = 1;
    _(cF, tM);
    var oP = _n("view");
    _rz(z, oP, "style", 10, e, s, gg);
    var xQ = _v();
    _(oP, xQ);
    if (_oz(z, 11, e, s, gg)) {
      xQ.wxVkey = 1;
    }
    var oR = _v();
    _(oP, oR);
    if (_oz(z, 12, e, s, gg)) {
      oR.wxVkey = 1;
    }
    xQ.wxXCkey = 1;
    oR.wxXCkey = 1;
    _(cF, oP);
    var fS = _n("view");
    _rz(z, fS, "style", 13, e, s, gg);
    var cT = _v();
    _(fS, cT);
    if (_oz(z, 14, e, s, gg)) {
      cT.wxVkey = 1;
    }
    var hU = _v();
    _(fS, hU);
    if (_oz(z, 15, e, s, gg)) {
      hU.wxVkey = 1;
    }
    cT.wxXCkey = 1;
    hU.wxXCkey = 1;
    _(cF, fS);
    var oV = _n("view");
    _rz(z, oV, "style", 16, e, s, gg);
    var cW = _v();
    _(oV, cW);
    if (_oz(z, 17, e, s, gg)) {
      cW.wxVkey = 1;
    }
    var oX = _v();
    _(oV, oX);
    if (_oz(z, 18, e, s, gg)) {
      oX.wxVkey = 1;
    }
    cW.wxXCkey = 1;
    oX.wxXCkey = 1;
    _(cF, oV);
    var lY = _n("view");
    _rz(z, lY, "class", 19, e, s, gg);
    var aZ = _n("view");
    _rz(z, aZ, "class", 20, e, s, gg);
    var t1 = _v();
    _(aZ, t1);
    if (_oz(z, 21, e, s, gg)) {
      t1.wxVkey = 1;
    }
    var e2 = _v();
    _(aZ, e2);
    if (_oz(z, 22, e, s, gg)) {
      e2.wxVkey = 1;
    }
    t1.wxXCkey = 1;
    e2.wxXCkey = 1;
    _(lY, aZ);
    var b3 = _n("view");
    _rz(z, b3, "style", 23, e, s, gg);
    var o4 = _v();
    _(b3, o4);
    if (_oz(z, 24, e, s, gg)) {
      o4.wxVkey = 1;
    }
    var x5 = _v();
    _(b3, x5);
    if (_oz(z, 25, e, s, gg)) {
      x5.wxVkey = 1;
    }
    o4.wxXCkey = 1;
    x5.wxXCkey = 1;
    _(lY, b3);
    _(cF, lY);
    var o6 = _n("view");
    _rz(z, o6, "style", 26, e, s, gg);
    var f7 = _v();
    _(o6, f7);
    if (_oz(z, 27, e, s, gg)) {
      f7.wxVkey = 1;
    }
    var c8 = _v();
    _(o6, c8);
    if (_oz(z, 28, e, s, gg)) {
      c8.wxVkey = 1;
    }
    f7.wxXCkey = 1;
    c8.wxXCkey = 1;
    _(cF, o6);
    _(r, cF);
    var h9 = _n("view");
    _rz(z, h9, "style", 29, e, s, gg);
    var o0 = _n("view");
    _rz(z, o0, "class", 30, e, s, gg);
    var cAB = _n("view");
    _rz(z, cAB, "class", 31, e, s, gg);
    var oBB = _v();
    _(cAB, oBB);
    if (_oz(z, 32, e, s, gg)) {
      oBB.wxVkey = 1;
    }
    var lCB = _v();
    _(cAB, lCB);
    if (_oz(z, 33, e, s, gg)) {
      lCB.wxVkey = 1;
    }
    oBB.wxXCkey = 1;
    lCB.wxXCkey = 1;
    _(o0, cAB);
    var aDB = _n("view");
    _rz(z, aDB, "style", 34, e, s, gg);
    var bGB = _n("view");
    _rz(z, bGB, "class", 35, e, s, gg);
    var oHB = _v();
    _(bGB, oHB);
    if (_oz(z, 36, e, s, gg)) {
      oHB.wxVkey = 1;
    }
    var xIB = _v();
    _(bGB, xIB);
    if (_oz(z, 37, e, s, gg)) {
      xIB.wxVkey = 1;
    }
    oHB.wxXCkey = 1;
    xIB.wxXCkey = 1;
    _(aDB, bGB);
    var tEB = _v();
    _(aDB, tEB);
    if (_oz(z, 38, e, s, gg)) {
      tEB.wxVkey = 1;
    }
    var eFB = _v();
    _(aDB, eFB);
    if (_oz(z, 39, e, s, gg)) {
      eFB.wxVkey = 1;
    }
    tEB.wxXCkey = 1;
    eFB.wxXCkey = 1;
    _(o0, aDB);
    _(h9, o0);
    var oJB = _n("view");
    _rz(z, oJB, "class", 40, e, s, gg);
    var fKB = _n("view");
    _rz(z, fKB, "class", 41, e, s, gg);
    var cLB = _v();
    _(fKB, cLB);
    if (_oz(z, 42, e, s, gg)) {
      cLB.wxVkey = 1;
    }
    var hMB = _v();
    _(fKB, hMB);
    if (_oz(z, 43, e, s, gg)) {
      hMB.wxVkey = 1;
    }
    cLB.wxXCkey = 1;
    hMB.wxXCkey = 1;
    _(oJB, fKB);
    var oNB = _n("view");
    _rz(z, oNB, "style", 44, e, s, gg);
    var cOB = _v();
    _(oNB, cOB);
    if (_oz(z, 45, e, s, gg)) {
      cOB.wxVkey = 1;
    }
    var oPB = _v();
    _(oNB, oPB);
    if (_oz(z, 46, e, s, gg)) {
      oPB.wxVkey = 1;
    }
    cOB.wxXCkey = 1;
    oPB.wxXCkey = 1;
    _(oJB, oNB);
    _(h9, oJB);
    var lQB = _n("view");
    _rz(z, lQB, "style", 47, e, s, gg);
    var aRB = _v();
    _(lQB, aRB);
    if (_oz(z, 48, e, s, gg)) {
      aRB.wxVkey = 1;
    }
    var tSB = _v();
    _(lQB, tSB);
    if (_oz(z, 49, e, s, gg)) {
      tSB.wxVkey = 1;
    }
    aRB.wxXCkey = 1;
    tSB.wxXCkey = 1;
    _(h9, lQB);
    var eTB = _n("view");
    _rz(z, eTB, "style", 50, e, s, gg);
    var bUB = _v();
    _(eTB, bUB);
    if (_oz(z, 51, e, s, gg)) {
      bUB.wxVkey = 1;
    }
    var oVB = _v();
    _(eTB, oVB);
    if (_oz(z, 52, e, s, gg)) {
      oVB.wxVkey = 1;
    }
    bUB.wxXCkey = 1;
    oVB.wxXCkey = 1;
    _(h9, eTB);
    var xWB = _n("view");
    _rz(z, xWB, "class", 53, e, s, gg);
    var oXB = _n("view");
    _rz(z, oXB, "class", 54, e, s, gg);
    var fYB = _v();
    _(oXB, fYB);
    if (_oz(z, 55, e, s, gg)) {
      fYB.wxVkey = 1;
    }
    var cZB = _v();
    _(oXB, cZB);
    if (_oz(z, 56, e, s, gg)) {
      cZB.wxVkey = 1;
    }
    fYB.wxXCkey = 1;
    cZB.wxXCkey = 1;
    _(xWB, oXB);
    var h1B = _n("view");
    _rz(z, h1B, "style", 57, e, s, gg);
    var o2B = _v();
    _(h1B, o2B);
    if (_oz(z, 58, e, s, gg)) {
      o2B.wxVkey = 1;
    }
    var c3B = _v();
    _(h1B, c3B);
    if (_oz(z, 59, e, s, gg)) {
      c3B.wxVkey = 1;
    }
    o2B.wxXCkey = 1;
    c3B.wxXCkey = 1;
    _(xWB, h1B);
    _(h9, xWB);
    var o4B = _n("view");
    _rz(z, o4B, "style", 60, e, s, gg);
    var l5B = _v();
    _(o4B, l5B);
    if (_oz(z, 61, e, s, gg)) {
      l5B.wxVkey = 1;
    }
    var a6B = _v();
    _(o4B, a6B);
    if (_oz(z, 62, e, s, gg)) {
      a6B.wxVkey = 1;
    }
    l5B.wxXCkey = 1;
    a6B.wxXCkey = 1;
    _(h9, o4B);
    var t7B = _n("view");
    _rz(z, t7B, "style", 63, e, s, gg);
    var e8B = _v();
    _(t7B, e8B);
    if (_oz(z, 64, e, s, gg)) {
      e8B.wxVkey = 1;
    }
    var b9B = _v();
    _(t7B, b9B);
    if (_oz(z, 65, e, s, gg)) {
      b9B.wxVkey = 1;
    }
    e8B.wxXCkey = 1;
    b9B.wxXCkey = 1;
    _(h9, t7B);
    var o0B = _n("view");
    _rz(z, o0B, "class", 66, e, s, gg);
    var xAC = _n("view");
    _rz(z, xAC, "class", 67, e, s, gg);
    var oBC = _v();
    _(xAC, oBC);
    if (_oz(z, 68, e, s, gg)) {
      oBC.wxVkey = 1;
    }
    var fCC = _v();
    _(xAC, fCC);
    if (_oz(z, 69, e, s, gg)) {
      fCC.wxVkey = 1;
    }
    oBC.wxXCkey = 1;
    fCC.wxXCkey = 1;
    _(o0B, xAC);
    var cDC = _n("view");
    _rz(z, cDC, "style", 70, e, s, gg);
    var hEC = _v();
    _(cDC, hEC);
    if (_oz(z, 71, e, s, gg)) {
      hEC.wxVkey = 1;
    }
    var oFC = _v();
    _(cDC, oFC);
    if (_oz(z, 72, e, s, gg)) {
      oFC.wxVkey = 1;
    }
    hEC.wxXCkey = 1;
    oFC.wxXCkey = 1;
    _(o0B, cDC);
    _(h9, o0B);
    var cGC = _n("view");
    _rz(z, cGC, "style", 73, e, s, gg);
    var aJC = _n("view");
    _rz(z, aJC, "class", 74, e, s, gg);
    var tKC = _v();
    _(aJC, tKC);
    if (_oz(z, 75, e, s, gg)) {
      tKC.wxVkey = 1;
    }
    var eLC = _v();
    _(aJC, eLC);
    if (_oz(z, 76, e, s, gg)) {
      eLC.wxVkey = 1;
    }
    tKC.wxXCkey = 1;
    eLC.wxXCkey = 1;
    _(cGC, aJC);
    var oHC = _v();
    _(cGC, oHC);
    if (_oz(z, 77, e, s, gg)) {
      oHC.wxVkey = 1;
    }
    var lIC = _v();
    _(cGC, lIC);
    if (_oz(z, 78, e, s, gg)) {
      lIC.wxVkey = 1;
    }
    oHC.wxXCkey = 1;
    lIC.wxXCkey = 1;
    _(h9, cGC);
    var bMC = _n("view");
    _rz(z, bMC, "class", 79, e, s, gg);
    var oNC = _n("view");
    _rz(z, oNC, "class", 80, e, s, gg);
    var xOC = _v();
    _(oNC, xOC);
    if (_oz(z, 81, e, s, gg)) {
      xOC.wxVkey = 1;
    }
    var oPC = _v();
    _(oNC, oPC);
    if (_oz(z, 82, e, s, gg)) {
      oPC.wxVkey = 1;
    }
    xOC.wxXCkey = 1;
    oPC.wxXCkey = 1;
    _(bMC, oNC);
    var fQC = _n("view");
    _rz(z, fQC, "style", 83, e, s, gg);
    var cRC = _v();
    _(fQC, cRC);
    if (_oz(z, 84, e, s, gg)) {
      cRC.wxVkey = 1;
    }
    var hSC = _v();
    _(fQC, hSC);
    if (_oz(z, 85, e, s, gg)) {
      hSC.wxVkey = 1;
    }
    cRC.wxXCkey = 1;
    hSC.wxXCkey = 1;
    _(bMC, fQC);
    _(h9, bMC);
    var oTC = _n("view");
    _rz(z, oTC, "style", 86, e, s, gg);
    var cUC = _v();
    _(oTC, cUC);
    if (_oz(z, 87, e, s, gg)) {
      cUC.wxVkey = 1;
    }
    var oVC = _v();
    _(oTC, oVC);
    if (_oz(z, 88, e, s, gg)) {
      oVC.wxVkey = 1;
    }
    cUC.wxXCkey = 1;
    oVC.wxXCkey = 1;
    _(h9, oTC);
    _(r, h9);
    return r;
  };
  e_[x[2]] = { f: m2, j: [], i: [], ti: [], ic: [] };
  d_[x[3]] = {};
  var m3 = function (e, s, r, gg) {
    var z = gz$gwx_4();
    return r;
  };
  e_[x[3]] = { f: m3, j: [], i: [], ti: [], ic: [] };
  d_[x[4]] = {};
  var m4 = function (e, s, r, gg) {
    var z = gz$gwx_5();
    return r;
  };
  e_[x[4]] = { f: m4, j: [], i: [], ti: [], ic: [] };
  d_[x[5]] = {};
  var m5 = function (e, s, r, gg) {
    var z = gz$gwx_6();
    var eZC = _v();
    _(r, eZC);
    if (_oz(z, 0, e, s, gg)) {
      eZC.wxVkey = 1;
    }
    eZC.wxXCkey = 1;
    return r;
  };
  e_[x[5]] = { f: m5, j: [], i: [], ti: [], ic: [] };
  if (path && e_[path]) {
    return function (env, dd, global) {
      $gwxc = 0;
      var root = { tag: "wx-page" };
      root.children = [];
      var main = e_[path].f;
      if (typeof global === "undefined") global = {};
      global.f = $gdc(f_[path], "", 1);
      try {
        main(env, {}, root, global);
        _tsd(root);
      } catch (err) {
        console.log(err);
      }
      return root;
    };
  }
};
__wxAppCode__["components/color-picker/color-picker.json"] = {
  component: true,
  usingComponents: {},
};
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/color-picker/color-picker.wxml"] = [
    $gwx,
    "./components/color-picker/color-picker.wxml",
  ];
else
  __wxAppCode__["components/color-picker/color-picker.wxml"] = $gwx(
    "./components/color-picker/color-picker.wxml"
  );
__wxAppCode__["pages/NewUI/NewUI.json"] = {
  backgroundColorContent: "#000000ff",
  navigationBarBackgroundColor: "#001",
  navigationBarTextStyle: "white",
  navigationBarTitleText: "CAN-Coltrol",
  backgroundColor: "#001",
  backgroundTextStyle: "light",
  backgroundColorTop: "#001",
  backgroundColorBottom: "#001",
  usingComponents: {
    "color-picker": "../../components/color-picker/color-picker",
  },
};
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/NewUI/NewUI.wxml"] = [$gwx, "./pages/NewUI/NewUI.wxml"];
else __wxAppCode__["pages/NewUI/NewUI.wxml"] = $gwx("./pages/NewUI/NewUI.wxml");
__wxAppCode__["pages/NewUI1/NewUI.json"] = {
  backgroundColorContent: "#000000ff",
  navigationBarBackgroundColor: "#001",
  navigationBarTextStyle: "white",
  navigationBarTitleText: "CAN-Coltrol",
  backgroundColor: "#001",
  backgroundTextStyle: "light",
  backgroundColorTop: "#001",
  backgroundColorBottom: "#001",
  usingComponents: {},
};
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/NewUI1/NewUI.wxml"] = [
    $gwx,
    "./pages/NewUI1/NewUI.wxml",
  ];
else
  __wxAppCode__["pages/NewUI1/NewUI.wxml"] = $gwx("./pages/NewUI1/NewUI.wxml");
__wxAppCode__["pages/device/device.json"] = { usingComponents: {} };
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/device/device.wxml"] = [
    $gwx,
    "./pages/device/device.wxml",
  ];
else
  __wxAppCode__["pages/device/device.wxml"] = $gwx(
    "./pages/device/device.wxml"
  );
__wxAppCode__["pages/device2/device.json"] = { usingComponents: {} };
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/device2/device.wxml"] = [
    $gwx,
    "./pages/device2/device.wxml",
  ];
else
  __wxAppCode__["pages/device2/device.wxml"] = $gwx(
    "./pages/device2/device.wxml"
  );
__wxAppCode__["pages/index/index.json"] = {
  usingComponents: {},
  enablePullDownRefresh: true,
  backgroundTextStyle: "dark",
};
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/index.wxml"] = [$gwx, "./pages/index/index.wxml"];
else __wxAppCode__["pages/index/index.wxml"] = $gwx("./pages/index/index.wxml");

define(
  "056882B19E166AAF630EEAB6C1362D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var e = require("@babel/runtime/helpers/regeneratorRuntime.js"),
      r = require("@babel/runtime/helpers/asyncToGenerator.js"),
      n = (require("89A1EFA29E166AAFEFC787A556762D70.js"), []),
      t = "",
      o = "",
      s = "",
      c = "",
      i = function (e) {
        console.log(e);
      },
      a = function () {
        return new Promise(function (e, r) {
          wx.openBluetoothAdapter({
            success: function (r) {
              e({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (r) {
              i(r), e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
            },
          });
        });
      },
      u = function () {
        return new Promise(function (e, r) {
          wx.closeBluetoothAdapter({
            success: function (r) {
              e({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (r) {
              e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
            },
          });
        });
      },
      d = function (e) {
        return new Promise(function (r, o) {
          for (var s = !1, c = 0, a = n; c < a.length; c++) {
            var u = a[c];
            if (u.name === e) {
              (s = !0), (t = u.deviceId);
              break;
            }
          }
          s
            ? wx.createBLEConnection({
                deviceId: t,
                success: function (e) {
                  i(e), r({ ok: !0, errCode: 0, errMsg: "" });
                },
                fail: function (e) {
                  i("connect fail"),
                    i(e),
                    r({ ok: !1, errCode: e.errCode, errMsg: e.errMsg });
                },
              })
            : r({
                ok: !1,
                errCode: -1,
                errMsg: "Name error,Device does not exist",
              });
        });
      },
      f = function () {
        return new Promise(function (e, r) {
          wx.closeBLEConnection({
            deviceId: t,
            success: function (r) {
              e({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (r) {
              e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
            },
          });
        });
      },
      g = function (e) {
        return new Promise(function (r, n) {
          wx.setBLEMTU({
            deviceId: t,
            mtu: e,
            success: function (e) {
              r({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (e) {
              r({ ok: !1, errCode: e.errCode, errMsg: e.errMsg });
            },
          });
        });
      },
      C = (function () {
        var n = r(
          e().mark(function r(n, C) {
            var l;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (l = {}), (e.next = 3), u();
                  case 3:
                    return (e.next = 5), a();
                  case 5:
                    return (e.next = 7), d(n);
                  case 7:
                    if ((l = e.sent).ok) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (l = {
                        ok: !1,
                        errMsg: "蓝牙连接失败|" + l.errCode + "|" + l.errMsg,
                        errCode: 10001,
                      }),
                      C(l),
                      e.abrupt("return", l)
                    );
                  case 12:
                    return (
                      (e.next = 14),
                      new Promise(function (e, r) {
                        wx.getBLEDeviceServices({
                          deviceId: t,
                          success: function (r) {
                            i("device services:"), i(r.services);
                            for (var n = 0; n < r.services.length; n++) {
                              var t;
                              if (
                                (i(r.services[n].uuid),
                                "0000FFF0-0000-1000-8000-00805F9B34FB" ===
                                  (t = r.services[n].uuid.toUpperCase()))
                              )
                                return (
                                  (o = "0000FFF0-0000-1000-8000-00805F9B34FB"),
                                  e({ ok: !0, errCode: 0, errMsg: "" })
                                );
                              if ("FFF0" === t)
                                return (
                                  (o = "FFF0"),
                                  e({ ok: !0, errCode: 0, errMsg: "" })
                                );
                            }
                            e({ ok: !1, errCode: 2e4, errMsg: "服务未找到" });
                          },
                          fail: function (r) {
                            e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
                          },
                        });
                      })
                    );
                  case 14:
                    if ((l = e.sent).ok) {
                      e.next = 20;
                      break;
                    }
                    return (
                      f(),
                      (l = {
                        ok: !1,
                        errMsg: "获取服务失败|" + l.errCode + "|" + l.errMsg,
                        errCode: 10002,
                      }),
                      C(l),
                      e.abrupt("return", l)
                    );
                  case 20:
                    return (
                      (e.next = 22),
                      new Promise(function (e, r) {
                        wx.getBLEDeviceCharacteristics({
                          deviceId: t,
                          serviceId: o,
                          success: function (r) {
                            var n, t;
                            (i("device getBLEDeviceCharacteristics:"),
                            i(r.characteristics),
                            r.characteristics.length < 2)
                              ? e({
                                  ok: !1,
                                  errCode: 2e4,
                                  errMsg: "特征值出错",
                                })
                              : ((n = r.characteristics[0].uuid.toUpperCase()),
                                (t = r.characteristics[1].uuid.toUpperCase()),
                                ("0000FFF2-0000-1000-8000-00805F9B34FB" === n &&
                                  "0000FFF1-0000-1000-8000-00805F9B34FB" ===
                                    t) ||
                                ("0000FFF1-0000-1000-8000-00805F9B34FB" === n &&
                                  "0000FFF2-0000-1000-8000-00805F9B34FB" === t)
                                  ? ((s =
                                      "0000FFF2-0000-1000-8000-00805F9B34FB"),
                                    (c =
                                      "0000FFF1-0000-1000-8000-00805F9B34FB"),
                                    e({ ok: !0, errCode: 0, errMsg: "" }))
                                  : ("FFF2" === n && "FFF1" === t) ||
                                    ("FFF1" === n && "FFF2" === t)
                                  ? ((s = "FFF2"),
                                    (c = "FFF1"),
                                    e({ ok: !0, errCode: 0, errMsg: "" }))
                                  : e({
                                      ok: !1,
                                      errCode: 2e4,
                                      errMsg: "特征值出错",
                                    }));
                          },
                          fail: function (r) {
                            e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
                          },
                        });
                      })
                    );
                  case 22:
                    if ((l = e.sent).ok) {
                      e.next = 28;
                      break;
                    }
                    return (
                      f(),
                      (l = {
                        ok: !1,
                        errMsg: "获取特性失败|" + l.errCode + "|" + l.errMsg,
                        errCode: 10003,
                      }),
                      C(l),
                      e.abrupt("return", l)
                    );
                  case 28:
                    return (
                      (e.next = 30),
                      new Promise(function (e, r) {
                        wx.notifyBLECharacteristicValueChange({
                          state: !0,
                          deviceId: t,
                          serviceId: o,
                          characteristicId: c,
                          success: function (r) {
                            e({ ok: !0, errCode: 0, errMsg: "" });
                          },
                          fail: function (r) {
                            e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
                          },
                        });
                      })
                    );
                  case 30:
                    if ((l = e.sent).ok) {
                      e.next = 36;
                      break;
                    }
                    return (
                      f(),
                      (l = {
                        ok: !1,
                        errMsg: "订阅失败|" + l.errCode + "|" + l.errMsg,
                        errCode: 10004,
                      }),
                      C(l),
                      e.abrupt("return", l)
                    );
                  case 36:
                    return (e.next = 38), g(250);
                  case 38:
                    return (
                      C((l = { ok: !0, errMsg: "", errCode: 0 })),
                      e.abrupt("return", l)
                    );
                  case 41:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        );
        return function (e, r) {
          return n.apply(this, arguments);
        };
      })(),
      l = function (e) {
        return new Promise(function (r, n) {
          wx.writeBLECharacteristicValue({
            deviceId: t,
            serviceId: o,
            characteristicId: s,
            value: e,
            success: function (e) {
              r({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (e) {
              r({ ok: !1, errCode: e.errCode, errMsg: e.errMsg });
            },
          });
        });
      },
      v = (function () {
        var n = r(
          e().mark(function r(n, t) {
            var o, s, c, i, a, u;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (0 !== n.length) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (!t) {
                      e.next = 12;
                      break;
                    }
                    for (
                      n = unescape(encodeURIComponent(n)),
                        o = new ArrayBuffer(2 * n.length),
                        s = new Uint8Array(o),
                        c = 0;
                      c < s.length;
                      c++
                    )
                      s[c] = n.charCodeAt(c);
                    return (e.next = 9), l(o);
                  case 9:
                    return e.abrupt("return", e.sent);
                  case 12:
                    for (
                      i = new ArrayBuffer(n.length),
                        a = new Uint8Array(i),
                        u = 0;
                      u < a.length;
                      u++
                    )
                      a[u] = n.charCodeAt(u);
                    return (e.next = 17), l(i);
                  case 17:
                    return e.abrupt("return", e.sent);
                  case 18:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        );
        return function (e, r) {
          return n.apply(this, arguments);
        };
      })(),
      F = (function () {
        var n = r(
          e().mark(function r(n, t) {
            var o, s, c, i, a, u;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (0 !== n.length) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (!t) {
                      e.next = 11;
                      break;
                    }
                    for (
                      o = new ArrayBuffer(n.length / 2),
                        s = new Uint8Array(o),
                        c = 0;
                      c < s.length;
                      c++
                    )
                      s[c] = parseInt(n.substr(2 * c, 2), 16);
                    return (e.next = 8), l(o);
                  case 8:
                    return e.abrupt("return", e.sent);
                  case 11:
                    for (
                      i = new ArrayBuffer(n.length),
                        a = new Uint8Array(i),
                        u = 0;
                      u < a.length;
                      u++
                    )
                      a[u] = n.charCodeAt(u);
                    return (e.next = 16), l(i);
                  case 16:
                    return e.abrupt("return", e.sent);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        );
        return function (e, r) {
          return n.apply(this, arguments);
        };
      })();
    module.exports = {
      openBluetoothAdapter: a,
      closeBluetoothAdapter: u,
      getBluetoothAdapterState: function () {
        return new Promise(function (e, r) {
          wx.getBluetoothAdapterState({
            success: function (r) {
              r.available
                ? e({ ok: !0, errCode: 0, errMsg: "" })
                : (i(r), e({ ok: !1, errCode: 2e4, errMsg: "蓝牙适配器关闭" }));
            },
            fail: function (r) {
              i(r), e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
            },
          });
        });
      },
      startBluetoothDevicesDiscovery: function (e) {
        (n = []),
          wx.onBluetoothDeviceFound(function (r) {
            var t = r.devices[0].name
              ? r.devices[0].name
              : r.devices[0].localName;
            if (t) {
              for (var o = 0, s = n; o < s.length; o++) {
                var c = s[o];
                if (c.name === t)
                  return (c.rssi = r.devices[0].RSSI), void e(t, c.rssi);
              }
              n.push({
                name: t,
                rssi: r.devices[0].RSSI,
                deviceId: r.devices[0].deviceId,
              }),
                e(t, r.devices[0].RSSI);
            }
          }),
          wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: !0,
            success: function (e) {},
            fail: function (e) {},
          });
      },
      stopBluetoothDevicesDiscovery: function () {
        return new Promise(function (e, r) {
          wx.stopBluetoothDevicesDiscovery({
            success: function (r) {
              e({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (r) {
              e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
            },
          });
        });
      },
      easyConnect: C,
      closeBLEConnection: f,
      onBLEConnectionStateChange: function (e) {
        wx.onBLEConnectionStateChange(function (r) {
          r.connected || e();
        });
      },
      onBLECharacteristicValueChange: function (e) {
        wx.onBLECharacteristicValueChange(function (r) {
          for (
            var n = new Uint8Array(r.value), t = "", o = "", s = 0;
            s < n.length;
            s++
          )
            (t += n[s].toString(16).padStart(2, "0")),
              (o += String.fromCharCode(n[s]));
          e(decodeURIComponent(escape(o)), t);
        });
      },
      onBLECharacteristicValueChange1: function (e) {
        wx.onBLECharacteristicValueChange(function (r) {
          for (
            var n = new Uint8Array(r.value), t = "", o = 0;
            o < n.length;
            o++
          )
            (t += n[o].toString(16).padStart(2, "0")),
              String.fromCharCode(n[o]);
          e(0, t.toUpperCase());
        });
      },
      easySendData: v,
      easySendData1: F,
    };
  }
);
define(
  "14592FB29E166AAF723F47B5D7662D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var e =
        (function () {
          return this;
        })() || Function("return this")(),
      r =
        e.regeneratorRuntime &&
        Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime") >= 0,
      t = r && e.regeneratorRuntime;
    if (
      ((e.regeneratorRuntime = void 0),
      (module.exports = require("89A1EFA29E166AAFEFC787A556762D70.js")),
      r)
    )
      e.regeneratorRuntime = t;
    else
      try {
        delete e.regeneratorRuntime;
      } catch (r) {
        e.regeneratorRuntime = void 0;
      }
  }
);
define(
  "445F65219E166AAF22390D2641262D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }),
      (exports.GetCFG = function (A) {
        return wx.getStorageSync(A);
      }),
      (exports.GetGIF = function (B) {
        return A[B];
      }),
      (exports.SetCFG = function (A, B) {
        wx.setStorageSync(A, B);
      }),
      (exports.Toast = function (A) {
        var B =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
        wx.showToast({ title: A, icon: "none", duration: B });
      });
    var A = ["0", "0", "0", "GIF3", "GIF4", "GIF5"];
    (A[5] =
      "DataStart=logo.gif{R0lGODlhSQBJALMPAOw8MxqvvPmrDQkMG//MCRJYYmgkG3dPFhaBjbx9D6WjTnhqYlqZhQk0QCYmJv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNENTNCMTYyN0MwRjExRUU5MDhEOUVDMTBFQTEzRDE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNENTNCMTYzN0MwRjExRUU5MDhEOUVDMTBFQTEzRDE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q1M0IxNjA3QzBGMTFFRTkwOEQ5RUMxMEVBMTNEMTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q1M0IxNjE3QzBGMTFFRTkwOEQ5RUMxMEVBMTNEMTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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}DataEnd"),
      (A[1] =
        "DataStart=logo.gif{R0lGODlhSQBJALMPACIiImBgYM7Nzvj4+K6uroB/gOXl5dra2u/u77+/v5qamj4+Pg0NDf///wAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIzN0QzMjhCNzhEODExRUU4QTk5RTAzQTk0RTBDNUE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIzN0QzMjhDNzhEODExRUU4QTk5RTAzQTk0RTBDNUE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjM3RDMyODk3OEQ4MTFFRThBOTlFMDNBOTRFMEM1QTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjM3RDMyOEE3OEQ4MTFFRThBOTlFMDNBOTRFMEM1QTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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}DataEnd"),
      (A[4] =
        "DataStart=logo.gif{R0lGODlhSQBJALMPAKPu+dP3/GGb9UZtrRAeIGadppWy3ycsS3vN9DBGa0aTf0VfeiMiKiMiK////////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM5RjYxREE1N0NCRjExRUVCRTYyRDhDMjgzNjczMDg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM5RjYxREE2N0NCRjExRUVCRTYyRDhDMjgzNjczMDg3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzlGNjFEQTM3Q0JGMTFFRUJFNjJEOEMyODM2NzMwODciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzlGNjFEQTQ3Q0JGMTFFRUJFNjJEOEMyODM2NzMwODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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}DataEnd"),
      (A[2] =
        "DataStart=logo.gif{R0lGODlhSQBJALMPAFddXYaOjfz+/i8zMxUWFsnS0a22teDp6AEBAQICAgYGBgMDAwQEBAAAAAUFBf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RDhEREU5N0NCRDExRUVCNERERTg1NzVCOEJCQzAzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1RDhEREVBN0NCRDExRUVCNERERTg1NzVCOEJCQzAzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTVEOERERTc3Q0JEMTFFRUI0RERFODU3NUI4QkJDMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTVEOERERTg3Q0JEMTFFRUI0RERFODU3NUI4QkJDMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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}DataEnd"),
      (A[3] =
        "DataStart=logo.gif{R0lGODlhSQBJALMPAF9fXxcXF/Dw8NLS0q2trY6OjkhISHd3d7q6uuDg4KCgoMXFxTAwMP///wAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJGNDhEMjEwN0MwRTExRUU5ODEyQUZGMThERDYxMjU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJGNDhEMjExN0MwRTExRUU5ODEyQUZGMThERDYxMjU1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkY0OEQyMEU3QzBFMTFFRTk4MTJBRkYxOERENjEyNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkY0OEQyMEY3QzBFMTFFRTk4MTJBRkYxOERENjEyNTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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}DataEnd");
  }
);
define(
  "7C453ED19E166AAF1A2356D60B562D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var e = function (e) {
      return (e = e.toString())[1] ? e : "0" + e;
    };
    module.exports = {
      formatTime: function (t) {
        var n = t.getFullYear(),
          r = t.getMonth() + 1,
          o = t.getDate(),
          a = t.getHours(),
          u = t.getMinutes(),
          i = t.getSeconds();
        return [n, r, o].map(e).join("/") + " " + [a, u, i].map(e).join(":");
      },
      newAb2Str: function (e) {
        var t = new Uint8Array(e),
          n = String.fromCharCode.apply(null, t);
        return decodeURIComponent(escape(n));
      },
    };
  }
);
define(
  "89A1EFA29E166AAFEFC787A556762D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t = require("@babel/runtime/helpers/typeof.js");
    !(function (r) {
      var e = Object.prototype,
        n = e.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        c = o.toStringTag || "@@toStringTag",
        u =
          "object" === ("undefined" == typeof module ? "undefined" : t(module)),
        h = r.regeneratorRuntime;
      if (h) u && (module.exports = h);
      else {
        (h = r.regeneratorRuntime = u ? module.exports : {}).wrap = y;
        var s = {},
          f = {};
        f[i] = function () {
          return this;
        };
        var l = Object.getPrototypeOf,
          p = l && l(l(O([])));
        p && p !== e && n.call(p, i) && (f = p);
        var d = (w.prototype = g.prototype = Object.create(f));
        (m.prototype = d.constructor = w),
          (w.constructor = m),
          (w[c] = m.displayName = "GeneratorFunction"),
          (h.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return (
              !!r &&
              (r === m || "GeneratorFunction" === (r.displayName || r.name))
            );
          }),
          (h.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), c in t || (t[c] = "GeneratorFunction")),
              (t.prototype = Object.create(d)),
              t
            );
          }),
          (h.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          (L.prototype[a] = function () {
            return this;
          }),
          (h.AsyncIterator = L),
          (h.async = function (t, r, e, n) {
            var o = new L(y(t, r, e, n));
            return h.isGeneratorFunction(r)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          x(d),
          (d[c] = "Generator"),
          (d[i] = function () {
            return this;
          }),
          (d.toString = function () {
            return "[object Generator]";
          }),
          (h.keys = function (t) {
            var r = [];
            for (var e in t) r.push(e);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (h.values = O),
          (j.prototype = {
            constructor: j,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(_),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function e(e, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (r.next = e),
                  n && ((r.method = "next"), (r.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return e("end");
                if (i.tryLoc <= this.prev) {
                  var c = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= r &&
                r <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), s)
                  : this.complete(a)
              );
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                s
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), _(e), s;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    _(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, e) {
              return (
                (this.delegate = { iterator: O(t), resultName: r, nextLoc: e }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          });
      }
      function y(t, r, e, n) {
        var o = r && r.prototype instanceof g ? r : g,
          i = Object.create(o.prototype),
          a = new j(n || []);
        return (
          (i._invoke = (function (t, r, e) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return k();
              }
              for (e.method = o, e.arg = i; ; ) {
                var a = e.delegate;
                if (a) {
                  var c = E(a, e);
                  if (c) {
                    if (c === s) continue;
                    return c;
                  }
                }
                if ("next" === e.method) e.sent = e._sent = e.arg;
                else if ("throw" === e.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
                  e.dispatchException(e.arg);
                } else "return" === e.method && e.abrupt("return", e.arg);
                n = "executing";
                var u = v(t, r, e);
                if ("normal" === u.type) {
                  if (
                    ((n = e.done ? "completed" : "suspendedYield"), u.arg === s)
                  )
                    continue;
                  return { value: u.arg, done: e.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
              }
            };
          })(t, e, a)),
          i
        );
      }
      function v(t, r, e) {
        try {
          return { type: "normal", arg: t.call(r, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      function g() {}
      function m() {}
      function w() {}
      function x(t) {
        ["next", "throw", "return"].forEach(function (r) {
          t[r] = function (t) {
            return this._invoke(r, t);
          };
        });
      }
      function L(r) {
        var e;
        this._invoke = function (o, i) {
          function a() {
            return new Promise(function (e, a) {
              !(function e(o, i, a, c) {
                var u = v(r[o], r, i);
                if ("throw" !== u.type) {
                  var h = u.arg,
                    s = h.value;
                  return s && "object" === t(s) && n.call(s, "__await")
                    ? Promise.resolve(s.__await).then(
                        function (t) {
                          e("next", t, a, c);
                        },
                        function (t) {
                          e("throw", t, a, c);
                        }
                      )
                    : Promise.resolve(s).then(function (t) {
                        (h.value = t), a(h);
                      }, c);
                }
                c(u.arg);
              })(o, i, e, a);
            });
          }
          return (e = e ? e.then(a, a) : a());
        };
      }
      function E(t, r) {
        var e = t.iterator[r.method];
        if (void 0 === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (
              t.iterator.return &&
              ((r.method = "return"),
              (r.arg = void 0),
              E(t, r),
              "throw" === r.method)
            )
              return s;
            (r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return s;
        }
        var n = v(e, t.iterator, r.arg);
        if ("throw" === n.type)
          return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), s;
        var o = n.arg;
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              s)
            : o
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            s);
      }
      function b(t) {
        var r = { tryLoc: t[0] };
        1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
      }
      function _(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function j(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(b, this),
          this.reset(!0);
      }
      function O(t) {
        if (t) {
          var r = t[i];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var e = -1,
              o = function r() {
                for (; ++e < t.length; )
                  if (n.call(t, e)) return (r.value = t[e]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        return { next: k };
      }
      function k() {
        return { value: void 0, done: !0 };
      }
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  }
);
define(
  "@babel/runtime/helpers/Arrayincludes.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    Array.prototype.includes ||
      Object.defineProperty(Array.prototype, "includes", {
        value: function (r, e) {
          if (null == this)
            throw new TypeError('"this" is null or not defined');
          var t = Object(this),
            n = t.length >>> 0;
          if (0 == n) return !1;
          for (
            var i, o, a = 0 | e, u = Math.max(0 <= a ? a : n - Math.abs(a), 0);
            u < n;

          ) {
            if (
              (i = t[u]) === (o = r) ||
              ("number" == typeof i &&
                "number" == typeof o &&
                isNaN(i) &&
                isNaN(o))
            )
              return !0;
            u++;
          }
          return !1;
        },
      });
  }
);
define(
  "@babel/runtime/helpers/arrayLikeToArray.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    module.exports = function (n, r) {
      (null == r || r > n.length) && (r = n.length);
      for (var e = 0, l = new Array(r); e < r; e++) l[e] = n[e];
      return l;
    };
  }
);
define(
  "@babel/runtime/helpers/asyncToGenerator.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    function n(n, t, o, r, e, i, u) {
      try {
        var c = n[i](u),
          v = c.value;
      } catch (n) {
        return void o(n);
      }
      c.done ? t(v) : Promise.resolve(v).then(r, e);
    }
    module.exports = function (t) {
      return function () {
        var o = this,
          r = arguments;
        return new Promise(function (e, i) {
          var u = t.apply(o, r);
          function c(t) {
            n(u, e, i, c, v, "next", t);
          }
          function v(t) {
            n(u, e, i, c, v, "throw", t);
          }
          c(void 0);
        });
      };
    };
  }
);
define(
  "@babel/runtime/helpers/createForOfIteratorHelper.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    var r = require("./unsupportedIterableToArray");
    module.exports = function (n, e) {
      var t =
        ("undefined" != typeof Symbol && n[Symbol.iterator]) || n["@@iterator"];
      if (!t) {
        if (
          Array.isArray(n) ||
          (t = r(n)) ||
          (e && n && "number" == typeof n.length)
        ) {
          t && (n = t);
          var o = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
            },
            e: function (r) {
              throw r;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        u = !0,
        f = !1;
      return {
        s: function () {
          t = t.call(n);
        },
        n: function () {
          var r = t.next();
          return (u = r.done), r;
        },
        e: function (r) {
          (f = !0), (i = r);
        },
        f: function () {
          try {
            u || null == t.return || t.return();
          } finally {
            if (f) throw i;
          }
        },
      };
    };
  }
);
define(
  "@babel/runtime/helpers/defineProperty.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    var e = require("./toPropertyKey");
    module.exports = function (r, t, n) {
      return (
        (t = e(t)) in r
          ? Object.defineProperty(r, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[t] = n),
        r
      );
    };
  }
);
define(
  "@babel/runtime/helpers/regeneratorRuntime.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    var t = require("./typeof");
    function e() {
      (module.exports = e =
        function () {
          return r;
        }),
        (module.exports.__esModule = !0),
        (module.exports.default = module.exports);
      var r = {},
        n = Object.prototype,
        o = n.hasOwnProperty,
        i =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        a = "function" == typeof Symbol ? Symbol : {},
        u = a.iterator || "@@iterator",
        c = a.asyncIterator || "@@asyncIterator",
        l = a.toStringTag || "@@toStringTag";
      function h(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        h({}, "");
      } catch (t) {
        h = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function f(t, e, r, n) {
        var o = e && e.prototype instanceof d ? e : d,
          a = Object.create(o.prototype),
          u = new k(n || []);
        return i(a, "_invoke", { value: E(t, r, u) }), a;
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      r.wrap = f;
      var p = {};
      function d() {}
      function v() {}
      function y() {}
      var g = {};
      h(g, u, function () {
        return this;
      });
      var m = Object.getPrototypeOf,
        w = m && m(m(G([])));
      w && w !== n && o.call(w, u) && (g = w);
      var x = (y.prototype = d.prototype = Object.create(g));
      function L(t) {
        ["next", "throw", "return"].forEach(function (e) {
          h(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(e, r) {
        function n(i, a, u, c) {
          var l = s(e[i], e, a);
          if ("throw" !== l.type) {
            var h = l.arg,
              f = h.value;
            return f && "object" == t(f) && o.call(f, "__await")
              ? r.resolve(f.__await).then(
                  function (t) {
                    n("next", t, u, c);
                  },
                  function (t) {
                    n("throw", t, u, c);
                  }
                )
              : r.resolve(f).then(
                  function (t) {
                    (h.value = t), u(h);
                  },
                  function (t) {
                    return n("throw", t, u, c);
                  }
                );
          }
          c(l.arg);
        }
        var a;
        i(this, "_invoke", {
          value: function (t, e) {
            function o() {
              return new r(function (r, o) {
                n(t, e, r, o);
              });
            }
            return (a = a ? a.then(o, o) : o());
          },
        });
      }
      function E(t, e, r) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return { value: void 0, done: !0 };
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var u = _(a, r);
              if (u) {
                if (u === p) continue;
                return u;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var c = s(t, e, r);
            if ("normal" === c.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), c.arg === p))
                continue;
              return { value: c.arg, done: r.done };
            }
            "throw" === c.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
          }
        };
      }
      function _(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n)
          return (
            (e.delegate = null),
            ("throw" === r &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              _(t, e),
              "throw" === e.method)) ||
              ("return" !== r &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            p
          );
        var o = s(n, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), p;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              p)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            p);
      }
      function O(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function j(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function k(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(O, this),
          this.reset(!0);
      }
      function G(t) {
        if (t) {
          var e = t[u];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              n = function e() {
                for (; ++r < t.length; )
                  if (o.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (n.next = n);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: void 0, done: !0 };
      }
      return (
        (v.prototype = y),
        i(x, "constructor", { value: y, configurable: !0 }),
        i(y, "constructor", { value: v, configurable: !0 }),
        (v.displayName = h(y, l, "GeneratorFunction")),
        (r.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === v || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (r.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, y)
              : ((t.__proto__ = y), h(t, l, "GeneratorFunction")),
            (t.prototype = Object.create(x)),
            t
          );
        }),
        (r.awrap = function (t) {
          return { __await: t };
        }),
        L(b.prototype),
        h(b.prototype, c, function () {
          return this;
        }),
        (r.AsyncIterator = b),
        (r.async = function (t, e, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(f(t, e, n, o), i);
          return r.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        L(x),
        h(x, l, "Generator"),
        h(x, u, function () {
          return this;
        }),
        h(x, "toString", function () {
          return "[object Generator]";
        }),
        (r.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (r.values = G),
        (k.prototype = {
          constructor: k,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  o.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var u = o.call(i, "catchLoc"),
                  c = o.call(i, "finallyLoc");
                if (u && c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                o.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var i = n;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              p
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), j(r), p;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  j(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: G(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        r
      );
    }
    (module.exports = e),
      (module.exports.__esModule = !0),
      (module.exports.default = module.exports);
  }
);
define(
  "@babel/runtime/helpers/toPrimitive.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    var r = require("./typeof");
    module.exports = function (e, t) {
      if ("object" !== r(e) || null === e) return e;
      var i = e[Symbol.toPrimitive];
      if (void 0 !== i) {
        var o = i.call(e, t || "default");
        if ("object" !== r(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    };
  }
);
define(
  "@babel/runtime/helpers/toPropertyKey.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    var r = require("./typeof"),
      e = require("./toPrimitive");
    module.exports = function (i) {
      var t = e(i, "string");
      return "symbol" === r(t) ? t : String(t);
    };
  }
);
define(
  "@babel/runtime/helpers/typeof.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    function o(t) {
      return (
        (module.exports = o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  "function" == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              }),
        o(t)
      );
    }
    module.exports = o;
  }
);
define(
  "@babel/runtime/helpers/unsupportedIterableToArray.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    var r = require("./arrayLikeToArray");
    module.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === o && t.constructor && (o = t.constructor.name),
          "Map" === o || "Set" === o
            ? Array.from(t)
            : "Arguments" === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            ? r(t, e)
            : void 0
        );
      }
    };
  }
);
define(
  "B110F0819E166AAFD7769886CD362D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }),
      (exports.default = void 0);
    var r = {};
    function n(r, n) {
      (r[n >> 5] |= 128 << n % 32), (r[14 + (((n + 64) >>> 9) << 4)] = n);
      for (
        var t = 1732584193,
          a = -271733879,
          h = -1732584194,
          i = 271733878,
          l = 0;
        l < r.length;
        l += 16
      ) {
        var v = t,
          d = a,
          g = h,
          m = i;
        (t = e(t, a, h, i, r[l + 0], 7, -680876936)),
          (i = e(i, t, a, h, r[l + 1], 12, -389564586)),
          (h = e(h, i, t, a, r[l + 2], 17, 606105819)),
          (a = e(a, h, i, t, r[l + 3], 22, -1044525330)),
          (t = e(t, a, h, i, r[l + 4], 7, -176418897)),
          (i = e(i, t, a, h, r[l + 5], 12, 1200080426)),
          (h = e(h, i, t, a, r[l + 6], 17, -1473231341)),
          (a = e(a, h, i, t, r[l + 7], 22, -45705983)),
          (t = e(t, a, h, i, r[l + 8], 7, 1770035416)),
          (i = e(i, t, a, h, r[l + 9], 12, -1958414417)),
          (h = e(h, i, t, a, r[l + 10], 17, -42063)),
          (a = e(a, h, i, t, r[l + 11], 22, -1990404162)),
          (t = e(t, a, h, i, r[l + 12], 7, 1804603682)),
          (i = e(i, t, a, h, r[l + 13], 12, -40341101)),
          (h = e(h, i, t, a, r[l + 14], 17, -1502002290)),
          (t = u(
            t,
            (a = e(a, h, i, t, r[l + 15], 22, 1236535329)),
            h,
            i,
            r[l + 1],
            5,
            -165796510
          )),
          (i = u(i, t, a, h, r[l + 6], 9, -1069501632)),
          (h = u(h, i, t, a, r[l + 11], 14, 643717713)),
          (a = u(a, h, i, t, r[l + 0], 20, -373897302)),
          (t = u(t, a, h, i, r[l + 5], 5, -701558691)),
          (i = u(i, t, a, h, r[l + 10], 9, 38016083)),
          (h = u(h, i, t, a, r[l + 15], 14, -660478335)),
          (a = u(a, h, i, t, r[l + 4], 20, -405537848)),
          (t = u(t, a, h, i, r[l + 9], 5, 568446438)),
          (i = u(i, t, a, h, r[l + 14], 9, -1019803690)),
          (h = u(h, i, t, a, r[l + 3], 14, -187363961)),
          (a = u(a, h, i, t, r[l + 8], 20, 1163531501)),
          (t = u(t, a, h, i, r[l + 13], 5, -1444681467)),
          (i = u(i, t, a, h, r[l + 2], 9, -51403784)),
          (h = u(h, i, t, a, r[l + 7], 14, 1735328473)),
          (t = o(
            t,
            (a = u(a, h, i, t, r[l + 12], 20, -1926607734)),
            h,
            i,
            r[l + 5],
            4,
            -378558
          )),
          (i = o(i, t, a, h, r[l + 8], 11, -2022574463)),
          (h = o(h, i, t, a, r[l + 11], 16, 1839030562)),
          (a = o(a, h, i, t, r[l + 14], 23, -35309556)),
          (t = o(t, a, h, i, r[l + 1], 4, -1530992060)),
          (i = o(i, t, a, h, r[l + 4], 11, 1272893353)),
          (h = o(h, i, t, a, r[l + 7], 16, -155497632)),
          (a = o(a, h, i, t, r[l + 10], 23, -1094730640)),
          (t = o(t, a, h, i, r[l + 13], 4, 681279174)),
          (i = o(i, t, a, h, r[l + 0], 11, -358537222)),
          (h = o(h, i, t, a, r[l + 3], 16, -722521979)),
          (a = o(a, h, i, t, r[l + 6], 23, 76029189)),
          (t = o(t, a, h, i, r[l + 9], 4, -640364487)),
          (i = o(i, t, a, h, r[l + 12], 11, -421815835)),
          (h = o(h, i, t, a, r[l + 15], 16, 530742520)),
          (t = c(
            t,
            (a = o(a, h, i, t, r[l + 2], 23, -995338651)),
            h,
            i,
            r[l + 0],
            6,
            -198630844
          )),
          (i = c(i, t, a, h, r[l + 7], 10, 1126891415)),
          (h = c(h, i, t, a, r[l + 14], 15, -1416354905)),
          (a = c(a, h, i, t, r[l + 5], 21, -57434055)),
          (t = c(t, a, h, i, r[l + 12], 6, 1700485571)),
          (i = c(i, t, a, h, r[l + 3], 10, -1894986606)),
          (h = c(h, i, t, a, r[l + 10], 15, -1051523)),
          (a = c(a, h, i, t, r[l + 1], 21, -2054922799)),
          (t = c(t, a, h, i, r[l + 8], 6, 1873313359)),
          (i = c(i, t, a, h, r[l + 15], 10, -30611744)),
          (h = c(h, i, t, a, r[l + 6], 15, -1560198380)),
          (a = c(a, h, i, t, r[l + 13], 21, 1309151649)),
          (t = c(t, a, h, i, r[l + 4], 6, -145523070)),
          (i = c(i, t, a, h, r[l + 11], 10, -1120210379)),
          (h = c(h, i, t, a, r[l + 2], 15, 718787259)),
          (a = c(a, h, i, t, r[l + 9], 21, -343485551)),
          (t = f(t, v)),
          (a = f(a, d)),
          (h = f(h, g)),
          (i = f(i, m));
      }
      return Array(t, a, h, i);
    }
    function t(r, n, t, e, u, o) {
      return f(((c = f(f(n, r), f(e, o))) << (a = u)) | (c >>> (32 - a)), t);
      var c, a;
    }
    function e(r, n, e, u, o, c, a) {
      return t((n & e) | (~n & u), r, n, o, c, a);
    }
    function u(r, n, e, u, o, c, a) {
      return t((n & u) | (e & ~u), r, n, o, c, a);
    }
    function o(r, n, e, u, o, c, a) {
      return t(n ^ e ^ u, r, n, o, c, a);
    }
    function c(r, n, e, u, o, c, a) {
      return t(e ^ (n | ~u), r, n, o, c, a);
    }
    function a(r, t) {
      var e = h(r);
      e.length > 16 && (e = n(e, 8 * r.length));
      for (var u = Array(16), o = Array(16), c = 0; c < 16; c++)
        (u[c] = 909522486 ^ e[c]), (o[c] = 1549556828 ^ e[c]);
      var a = n(u.concat(h(t)), 512 + 8 * t.length);
      return n(o.concat(a), 640);
    }
    function f(r, n) {
      var t = (65535 & r) + (65535 & n);
      return (((r >> 16) + (n >> 16) + (t >> 16)) << 16) | (65535 & t);
    }
    function h(r) {
      for (var n = Array(), t = 0; t < 8 * r.length; t += 8)
        n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << t % 32;
      return n;
    }
    function i(r) {
      for (var n = "", t = 0; t < 32 * r.length; t += 8)
        n += String.fromCharCode((r[t >> 5] >>> t % 32) & 255);
      return n;
    }
    function l(r) {
      for (var n = "0123456789abcdef", t = "", e = 0; e < 4 * r.length; e++)
        t +=
          n.charAt((r[e >> 2] >> ((e % 4) * 8 + 4)) & 15) +
          n.charAt((r[e >> 2] >> ((e % 4) * 8)) & 15);
      return t;
    }
    function v(r) {
      for (var n = "", t = 0; t < 4 * r.length; t += 3)
        for (
          var e =
              (((r[t >> 2] >> ((t % 4) * 8)) & 255) << 16) |
              (((r[(t + 1) >> 2] >> (((t + 1) % 4) * 8)) & 255) << 8) |
              ((r[(t + 2) >> 2] >> (((t + 2) % 4) * 8)) & 255),
            u = 0;
          u < 4;
          u++
        )
          8 * t + 6 * u > 32 * r.length
            ? (n += "")
            : (n +=
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                  (e >> (6 * (3 - u))) & 63
                ));
      return n;
    }
    (r.hex_md5 = function (r) {
      return l(n(h(r), 8 * r.length));
    }),
      (r.b64_md5 = function (r) {
        return v(n(h(r), 8 * r.length));
      }),
      (r.str_md5 = function (r) {
        return i(n(h(r), 8 * r.length));
      }),
      (r.hex_hmac_md5 = function (r, n) {
        return l(a(r, n));
      }),
      (r.b64_hmac_md5 = function (r, n) {
        return v(a(r, n));
      }),
      (r.str_hmac_md5 = function (r, n) {
        return i(a(r, n));
      });
    exports.default = r;
  }
);
define(
  "BF8C0DC69E166AAFD9EA65C1FF462D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    function r(r) {
      var n,
        t,
        e = new Uint8Array(
          (function (r) {
            var n,
              t,
              e,
              u = [];
            for (n = 0; n < r.length; n++)
              (t = r.charCodeAt(n)) < 128
                ? u.push(t)
                : t < 2048
                ? u.push(192 + ((t >> 6) & 31), 128 + (63 & t))
                : ((e = 55296 ^ t) >> 10 == 0
                    ? ((t = (e << 10) + (56320 ^ r.charCodeAt(++n)) + 65536),
                      u.push(240 + ((t >> 18) & 7), 128 + ((t >> 12) & 63)))
                    : u.push(224 + ((t >> 12) & 15)),
                  u.push(128 + ((t >> 6) & 63), 128 + (63 & t)));
            return u;
          })(r)
        ),
        u = 16 + (((e.length + 8) >>> 6) << 4);
      for (
        (r = new Uint8Array(u << 2)).set(new Uint8Array(e.buffer)),
          r = new Uint32Array(r.buffer),
          t = new DataView(r.buffer),
          h = 0;
        h < u;
        h++
      )
        r[h] = t.getUint32(h << 2);
      (r[e.length >> 2] |= 128 << (24 - 8 * (3 & e.length))),
        (r[u - 1] = e.length << 3);
      var f = [],
        o = [
          function () {
            return (l[1] & l[2]) | (~l[1] & l[3]);
          },
          function () {
            return l[1] ^ l[2] ^ l[3];
          },
          function () {
            return (l[1] & l[2]) | (l[1] & l[3]) | (l[2] & l[3]);
          },
          function () {
            return l[1] ^ l[2] ^ l[3];
          },
        ],
        i = function (r, n) {
          return (r << n) | (r >>> (32 - n));
        },
        a = [1518500249, 1859775393, -1894007588, -899497514],
        l = [1732584193, -271733879, null, null, -1009589776];
      for (l[2] = ~l[0], l[3] = ~l[1], h = 0; h < r.length; h += 16) {
        var c = l.slice(0);
        for (n = 0; n < 80; n++)
          (f[n] =
            n < 16
              ? r[h + n]
              : i(f[n - 3] ^ f[n - 8] ^ f[n - 14] ^ f[n - 16], 1)),
            (t =
              (i(l[0], 5) + o[(n / 20) | 0]() + l[4] + f[n] + a[(n / 20) | 0]) |
              0),
            (l[1] = i(l[1], 30)),
            l.pop(),
            l.unshift(t);
        for (n = 0; n < 5; n++) l[n] = (l[n] + c[n]) | 0;
      }
      t = new DataView(new Uint32Array(l).buffer);
      for (var h = 0; h < 5; h++) l[h] = t.getUint32(h << 2);
      return Array.prototype.map
        .call(new Uint8Array(new Uint32Array(l).buffer), function (r) {
          return (r < 16 ? "0" : "") + r.toString(16);
        })
        .join("");
    }
    Object.defineProperty(exports, "__esModule", { value: !0 }),
      (exports.default = void 0),
      (r.sha = function (n) {
        return r(n);
      });
    exports.default = r;
  }
);
define(
  "C40EFDB59E166AAFA26895B2B7162D70.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    function o(o, n) {
      wx.getSetting({
        success: function (t) {
          t.authSetting[o]
            ? "function" == typeof n &&
              (console.log("授权状态获取成功", o), n(!0))
            : "function" == typeof n &&
              (console.log("授权状态获取失败", o), n(!1));
        },
        fail: function (t) {
          console.log("授权状态获取失败", o), "function" == typeof n && n(!1);
        },
      });
    }
    module.exports = {
      permission_check: o,
      permission_request: function (n, t, c) {
        o(n, function (o) {
          o
            ? "function" == typeof c && c(!0)
            : wx.authorize({
                scope: n,
                success: function () {
                  "function" == typeof c && c(!0);
                },
                fail: function () {
                  console.log("用户拒绝授权", n),
                    wx.showModal({
                      title: "申请权限",
                      content: "需要使用" + t + "权限，请前往设置打开权限",
                      success: function (o) {
                        o.confirm
                          ? (console.log("用户点击确定"),
                            wx.openSetting({
                              success: function (o) {
                                "function" == typeof c && c(!1);
                              },
                              fail: function (o) {
                                "function" == typeof c && c(!1);
                              },
                            }))
                          : o.cancel && "function" == typeof c && c(!1);
                      },
                    });
                },
              });
        });
      },
    };
  }
);
define(
  "app.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    App({
      onLaunch: function () {},
      onShow: function () {
        console.log("App Show");
      },
      onHide: function () {
        console.log("App Hide");
      },
      global: { userInfo: null, form: "1245dsa" },
    });
  }
);
require("app.js");
__wxRoute = "components/color-picker/color-picker";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/color-picker/color-picker.js";
define(
  "components/color-picker/color-picker.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    Component({
      properties: {
        initColor: { type: String, value: "rgb(255,0,0)" },
        maskClosable: { type: Boolean, value: !0 },
        mask: { type: Boolean, value: !0 },
        show: { type: Boolean, value: !1 },
        title: { type: String, value: "标题栏" },
        colorRes: { type: String, value: "rgb(255,0,0)" },
      },
      data: {},
      lifetimes: {
        attached: function () {
          var t = this.data.initColor;
          this.setData({ hueColor: this.hsv2rgb(this.rgb2hsv(t).h, 100, 100) });
        },
        ready: function () {
          var t = this;
          console.log("ready");
          var e = this.createSelectorQuery();
          e.select(".target").boundingClientRect(),
            e.exec(function (e) {
              var a = e[0];
              if (a) {
                t.SV = {
                  W: a.width - 28,
                  H: a.height - 28,
                  Step: (a.width - 28) / 100,
                };
                var s = t.rgb2hsv(t.data.initColor),
                  o = s.h,
                  i = s.s,
                  r = s.v;
                t.setData({
                  hsv: { h: o, s: i, v: r },
                  x: Math.round(i * t.SV.Step),
                  y: Math.round((100 - r) * t.SV.Step),
                });
              }
            });
        },
      },
      methods: {
        areaTap: function (t) {
          var e = this,
            a = this.createSelectorQuery();
          a.select(".target").boundingClientRect(),
            a.exec(function (a) {
              var s = a[0];
              s &&
                (e.setData({
                  x: t.detail.x - s.left - 14,
                  y: t.detail.y - s.top - 14,
                }),
                e.changeSV({ detail: { x: e.data.x, y: e.data.y } }),
                e.onEnd());
            });
        },
        onEnd: function () {
          this.triggerEvent("changeColor", { color: this.data.colorRes });
        },
        changeHue: function (t) {
          var e = t.detail.value;
          this.setData({
            "hsv.h": e,
            hueColor: this.hsv2rgb(e, 100, 100),
            colorRes: this.hsv2rgb(e, this.data.hsv.s, this.data.hsv.v),
          });
        },
        changeSV: function (t) {
          var e = t.detail,
            a = e.x,
            s = e.y;
          (a = Math.round(a / this.SV.Step)),
            (s = 100 - Math.round(s / this.SV.Step)),
            this.setData({
              "hsv.s": a,
              "hsv.v": s,
              colorRes: this.hsv2rgb(this.data.hsv.h, a, s),
            });
        },
        close: function (t) {
          this.data.maskClosable &&
            (this.setData({ show: !1 }), this.triggerEvent("close"));
        },
        preventdefault: function () {},
        hsv2rgb: function (t, e, a) {
          var s = (t / 360).toFixed(2),
            o = (e / 100).toFixed(2),
            i = (a / 100).toFixed(2),
            r = Math.floor(6 * s),
            h = 6 * s - r,
            n = i * (1 - o),
            l = i * (1 - h * o),
            c = i * (1 - (1 - h) * o),
            v = 0,
            d = 0,
            u = 0;
          switch (r % 6) {
            case 0:
              (v = i), (d = c), (u = n);
              break;
            case 1:
              (v = l), (d = i), (u = n);
              break;
            case 2:
              (v = n), (d = i), (u = c);
              break;
            case 3:
              (v = n), (d = l), (u = i);
              break;
            case 4:
              (v = c), (d = n), (u = i);
              break;
            case 5:
              (v = i), (d = n), (u = l);
          }
          return (
            "rgb(" +
            Math.floor(255 * v) +
            "," +
            Math.floor(255 * d) +
            "," +
            Math.floor(255 * u) +
            ")"
          );
        },
        rgb2hsv: function (t) {
          var e,
            a,
            s = t.split(","),
            o = parseInt(s[0].split("(")[1]) / 255,
            i = parseInt(s[1]) / 255,
            r = parseInt(s[2].split(")")[0]) / 255,
            h = Math.max(o, i, r),
            n = Math.min(o, i, r),
            l = h,
            c = h - n;
          if (((a = 0 == h ? 0 : c / h), h == n)) e = 0;
          else {
            switch (h) {
              case o:
                e = (i - r) / c + (i < r ? 6 : 0);
                break;
              case i:
                e = (r - o) / c + 2;
                break;
              case r:
                e = (o - i) / c + 4;
            }
            e /= 6;
          }
          return {
            h: (360 * e).toFixed(),
            s: (100 * a).toFixed(),
            v: (100 * l).toFixed(),
          };
        },
      },
    });
  }
);
require("components/color-picker/color-picker.js");
__wxRoute = "pages/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/index.js";
define(
  "pages/index/index.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      a = require("../../@babel/runtime/helpers/asyncToGenerator"),
      r = n(require("../../B110F0819E166AAFD7769886CD362D70.js"));
    n(require("../../BF8C0DC69E166AAFD9EA65C1FF462D70.js"));
    function n(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var i = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
      s = 0,
      o = 0,
      c = 0,
      u = 0;
    function h(t, e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (d = a(
        e().mark(function t(a, r) {
          return e().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    i.stopBluetoothDevicesDiscovery(),
                    (t.next = 3),
                    i.easyConnect(a, function () {})
                  );
                case 3:
                  t.sent.ok
                    ? a.startsWith("@")
                      ? (i.easySendData("CONNECT OK\n", !1),
                        wx.navigateTo({
                          url: "../device/device?Ver=3.47&GM=" + r.data.GM,
                        }),
                        r.hideLoading())
                      : a.startsWith("CAN-")
                      ? r.data.NewUI
                        ? (wx.navigateTo({
                            url: "../device2/device?Ver=3.47&GM=" + r.data.GM,
                          }),
                          r.hideLoading())
                        : (wx.navigateTo({
                            url: "../NewUI/NewUI?GM=" + r.data.GM,
                          }),
                          r.hideLoading())
                      : a.startsWith("CAN_") &&
                        (wx.navigateTo({
                          url: "../NewUI1/NewUI?GM=" + r.data.GM,
                        }),
                        r.hideLoading())
                    : o < 5
                    ? ((o += 1), h(a, r), console.log("失败！正在重新连接" + o))
                    : (r.hideLoading(), v("连接失败"), r.startDiscovery());
                case 5:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function v(t) {
      wx.showToast({ title: t, icon: "none", duration: 2e3 });
    }
    function l(t) {
      return wx.getStorageSync(t);
    }
    function w(t, e) {
      wx.setStorageSync(t, e);
    }
    Page({
      data: {
        deviceListData: [],
        deviceListDataShow: [],
        CMD: "0x",
        GM: 0,
        SOC: 35,
        NewUI: 1,
        ShowUI: 0,
        Start: 0,
      },
      onShareAppMessage: function () {},
      onLoad: function (t) {
        var e = wx.getAccountInfoSync();
        (c = 1 == t.GM ? 1 : l("GM")),
          "release" != e.miniProgram.envVersion && (c = 1),
          "develop" == e.miniProgram.envVersion && (u = 0);
        var a = l("UI");
        this.setData({ NewUI: 0 == a ? 0 : a }), this.setData({ GM: c });
        var r = this;
        setInterval(function () {
          r.setData({ deviceListDataShow: r.data.deviceListData });
        }, 600);
      },
      onShow: function () {
        var t = this;
        this.setData({ deviceListData: [], Start: 0 }),
          this.setData({ deviceListDataShow: [] }),
          setTimeout(function () {
            t.startDiscovery();
          }, 500),
          1 == this.data.GM &&
            wx.getClipboardData({
              success: function (t) {
                var e = t.data;
                if ((e = e.replace(/[Oo]/g, "0")).startsWith("0x")) {
                  r.default
                    .hex_md5("Check" + e + "@t*s$e#T.'1)`")
                    .match(/(....)$/);
                  for (
                    var a = (Number(e) + 19880914).toString(16).substring(4, 8),
                      n = RegExp.$1,
                      i = Number(e),
                      s = 0,
                      o = i.toString(),
                      c = 0;
                    c < o.length;
                    c++
                  )
                    s += o.charCodeAt(c);
                  var u = (Math.trunc(i / 655) * s).toString(16),
                    h = u.substr(u.length - 6, 6);
                  wx.setClipboardData({
                    data:
                      "设备ID:" +
                      e +
                      "\n5.0之前蓝牙密码:" +
                      n +
                      "\n5.0及之后蓝牙密码:" +
                      a +
                      "\n5.24及之后系统密码:" +
                      h,
                  });
                }
              },
            });
      },
      Scan: function () {
        this.setData({ Start: 1 }), this.startDiscovery();
      },
      onPullDownRefresh: function () {
        this.setData({ deviceListData: [] }),
          this.setData({ deviceListDataShow: [] });
        var t = this;
        setTimeout(function () {
          wx.stopPullDownRefresh(), t.startDiscovery();
        }, 500);
      },
      listViewTap: function (t) {
        var r = this;
        return a(
          e().mark(function a() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    t.currentTarget.dataset.name.match(/^(CAN[\-\_]|@)/)
                      ? ((n = r),
                        (o = 0),
                        i.stopBluetoothDevicesDiscovery(),
                        (s = t.currentTarget.dataset.name),
                        wx.showToast({
                          title: "设备连接中",
                          icon: "loading",
                          duration: 46e5,
                          mask: !0,
                        }),
                        h(s, n))
                      : ((a = "未知设备"),
                        (c = "不支持此蓝牙设备"),
                        wx.showModal({ title: a, content: c, showCancel: !1 }));
                  case 1:
                  case "end":
                    return e.stop();
                }
              var a, c;
            }, a);
          })
        )();
      },
      hideLoading: function () {
        wx.hideLoading();
      },
      CMDInput: function (t) {
        this.setData({ CMD: t.detail.value });
      },
      SetUI1: function () {
        this.setData({ NewUI: 1 }),
          w("UI", 1),
          u && wx.navigateTo({ url: "../NewUI/NewUI" });
      },
      SetUI0: function () {
        this.setData({ NewUI: 0 }),
          w("UI", 0),
          u && wx.navigateTo({ url: "../device2/device?Ver=3.47&GM=" + c });
      },
      startDiscovery: function () {
        var r = this;
        return a(
          e().mark(function a() {
            var n, s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r).setData({ ShowUI: u ? 1 : 0 }),
                      (e.next = 4),
                      i.openBluetoothAdapter()
                    );
                  case 4:
                    (s = e.sent).ok
                      ? (console.log("start search"),
                        i.startBluetoothDevicesDiscovery(function (e, a) {
                          n.setData({ Start: 1 });
                          var r,
                            i = t(n.data.deviceListData);
                          try {
                            for (i.s(); !(r = i.n()).done; ) {
                              var s = r.value;
                              if (
                                (s.name.startsWith("CAN-") &&
                                  n.setData({ ShowUI: 1 }),
                                s.name === e)
                              )
                                return void (s.rssi = a);
                            }
                          } catch (t) {
                            i.e(t);
                          } finally {
                            i.f();
                          }
                          n.data.deviceListData.push({ name: e, rssi: a });
                        }))
                      : s.errMsg.match("调试") &&
                        (wx.navigateTo({ url: "../NewUI1/NewUI?GM=1" }),
                        wx.hideLoading());
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )();
      },
    });
  }
);
require("pages/index/index.js");
__wxRoute = "pages/device/device";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/device/device.js";
define(
  "pages/device/device.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var s = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      f = require("../../@babel/runtime/helpers/asyncToGenerator");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var a = t(require("../../B110F0819E166AAFD7769886CD362D70.js")),
      e = t(require("../../BF8C0DC69E166AAFD9EA65C1FF462D70.js"));
    function t(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var u = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
      d = "3.48",
      i = null,
      r = ["#bt1", "设置电压", "NV", "V", "", ""],
      l = ["#bt2", "预约开机", "", "", "", ""],
      n = ["#bt3", "缓启设置", "", "S", "", ""],
      o = ["#bt4", "按键设置", "", "", "", ""],
      c = ["#bt5", "设置电流", "NA", "A", "", ""],
      b = ["#bt6", "开关电源", "", "", "", ""],
      m = ["#bt7", "二段设置", "", "A", "", ""],
      x = ["#bt8", "超温限制", "", "", "", ""],
      z = ["#bt9", "功率限制", "MW", "W", "", ""],
      y = ["#bt10", "设置风速", "FS", "", "", ""],
      k = ["#bt11", "延时关机", "", "M", "", ""],
      h = ["#bt12", "累计清零", "", "", "", ""],
      I = ["#BtKS1", "快速设置", "", "串", "", ""],
      p = ["#BtKS2", "快速设置", "", "串", "", ""],
      g = ["#BtKS3", "快速设置", "", "串", "", ""],
      S = ["#BtKS4", "快速设置", "", "串", "", ""],
      w = ["#bt21", "最大电压", "", "", "", ""],
      P = ["#bt22", "电压校正", "", "", "", ""],
      C = ["#bt23", "屏幕驱动", "", "", "", ""],
      v = ["#bt24", "返回上级", "", "", "", ""],
      D = ["#bt25", "最大电流", "", "", "", ""],
      _ = ["#bt26", "电流校正", "", "", "", ""],
      F = ["#bt27", "屏幕方向", "", "", "", ""],
      T = ["#bt28", "固件更新", "", "", "", ""],
      N = ["#bt29", "功率限制", "", "", "", ""],
      M = ["#bt30", "重置设置", "", "", "", ""],
      B = ["#bt31", "协议切换", "", "", "", ""],
      A = ["#bt32", "修改密码", "", "", "", ""],
      W = "APP:1.0",
      G = 8888,
      V = 0,
      q = null,
      E = [null],
      Y = E[0],
      R = E[1],
      j = E[4],
      O = E[6],
      K = E[7],
      $ = E[8],
      L = E[10],
      J = [null],
      X = J[0],
      H = J[1],
      Q = J[2],
      Z = J[3],
      U = J[4],
      ss = J[5],
      fs = J[6],
      as = J[7],
      es = J[8],
      ts = J[9],
      us = [null],
      ds = us[0],
      is = us[1],
      rs = us[2],
      ls = us[3],
      ns = us[4],
      os = us[5],
      cs = us[6],
      bs = [null],
      ms = bs[0],
      xs = bs[1],
      zs = bs[2],
      ys = bs[3],
      ks = bs[4],
      hs = bs[5],
      Is = bs[6],
      ps = bs[7],
      gs = bs[8],
      Ss = [null],
      ws = Ss[1],
      Ps = Ss[3],
      Cs = Ss[4],
      vs = Ss[5],
      Ds = Ss[8],
      _s = Ss[9],
      Fs = [null],
      Ts = Fs[0],
      Ns = ((j = Fs[1]), Fs[2]),
      Ms = Fs[3],
      Bs = ((ds = Fs[5]), (is = Fs[6]), (os = Fs[7]), [null]),
      As = ((ns = Bs[0]), (ls = Bs[1]), (rs = Bs[2]), Bs[3]),
      Ws = Bs[4],
      Gs = Bs[7],
      Vs = Bs[8],
      qs = Bs[9],
      Es = 0,
      Ys = d,
      Rs = "Cxjdwx";
    function js(s) {
      for (
        var f = function (f) {
            wx.createSelectorQuery()
              .select(s[f][0])
              .fields({ node: !0, size: !0 })
              .exec(function (a) {
                var e = a[0].node,
                  t = e.getContext("2d"),
                  u = wx.getSystemInfoSync().pixelRatio;
                (e.width = a[0].width * u),
                  (e.height = a[0].height * u),
                  t.scale(u, u),
                  (t.font = "normal bold 16px PingFangSC-Regular"),
                  (t.fillStyle = "#ff9900"),
                  (t.textAlign = "center"),
                  t.fillText(s[f][1], a[0].width / 2, 27),
                  (t.font = "normal bold 9px PingFangSC-Regular"),
                  (t.textAlign = "left"),
                  (t.fillStyle = "#22aa22"),
                  t.fillText(s[f][2] + s[f][3], 3, 9),
                  (t.textAlign = "right"),
                  (t.fillStyle = "#dd0000"),
                  "" != s[f][4] && t.fillText(s[f][4], a[0].width - 3, 9),
                  (t.textAlign = "center"),
                  (t.fillStyle = "#cc0088"),
                  "" != s[f][5] &&
                    t.fillText(s[f][5], a[0].width / 2, a[0].height - 3),
                  (t.strokeStyle = "#eee"),
                  t.rect(0, 0, a[0].width, a[0].height),
                  t.stroke();
              });
          },
          a = 0;
        a < s.length;
        a++
      )
        f(a);
    }
    Page({
      data: {
        title: "设备连接失败,点击重试",
        text: "",
        CMD: "",
        ShowPan: 1,
        Ver: " APP:3.48 CAN:Unknown",
        TIP: "点击需要设置参数",
        CKStr: "设备认证失败,请输入设备认证码",
        SOC: 100,
        STS1: 0,
        STS2: 0,
        STS3: 0,
        STS4: 0,
        STS5: 0,
        STS6: 0,
        STS7: 0,
        STS8: 0,
        STS9: 0,
        STS10: 0,
        STS0: 0,
        IsICR: 0,
        fontFamily: "Bitstream Vera Serif Bold",
      },
      CMDInput: function (s) {
        this.setData({ CMD: s.detail.value });
      },
      Send: function () {
        var s = this;
        this.data.CMD.match(/^([^=]+)=([\d\.]+)/);
        var f = RegExp.$1,
          t = RegExp.$2,
          u = this.data.CMD;
        if (3 == this.data.ShowPan)
          if ("打开WIFI" == u) u = "Dofile('Wifi.lua')";
          else if (u.startsWith("0x")) {
            a.default
              .hex_md5("Check" + u + "@t*s$e#T.'1)`")
              .match(/(........)$/),
              1 == Es && wx.setClipboardData({ data: RegExp.$1 });
          } else
            "重置设置" == u
              ? ((u =
                  "CFile.remove('Huawei.inf');CFile.remove('ZTE.inf');CFile.remove('Increase.inf');CXJDWX.restart()"),
                ff("重置已发送,设备正在重启!"),
                wx.navigateBack({ delta: 0 }))
              : Zs(
                  '<C>print("Reg=' + this.data.CMD + ' Key="..CXJDWX.chipid())'
                );
        else if (1 == this.data.ShowPan) {
          if ("系统设置" == u) Es >= 1 && this.setData({ ShowPan: 2 });
          else {
            if (u.startsWith("<C>")) return Zs(u), void Zs("<C>GetINF()");
            if (u.startsWith("0x")) af(u, 1, this);
            else if ("对调加减按键" == u)
              u = "SetCFG('KUP',KUP==2 and 15 or 2,1)";
            else if ("重启" == u)
              (u = "CXJDWX.restart()"),
                ff("重启已发送,设备正在重启!"),
                wx.navigateBack({ delta: 0 });
            else if ("重置设置" == u)
              (u =
                "CFile.remove('Huawei.inf');CFile.remove('ZTE.inf');CFile.remove('Increase.inf');CXJDWX.restart()"),
                ff("重置已发送,设备正在重启!"),
                wx.navigateBack({ delta: 0 });
            else if ("清除累计数据" == u)
              u = "SetCFG('MAH',0);SetCFG('MWH',0);SetCFG('MTi',0,1)";
            else if ("关闭电源输出" == u) u = "TurnON(1)";
            else if ("关机息屏" == u)
              (u = "SetCFG('SDP',1,1)"), Qs("屏幕已设置为关机后息灭");
            else if ("关机亮屏" == u)
              (u = "SetCFG('SDP',0,1)"), Qs("屏幕已设置为关机后常亮");
            else if ("打开电源输出" == u) u = "Mode='WT';YS=0;TurnON(0)";
            else if ("打开WIFI" == u)
              (u = "Setcfg('WFi',1,1);CXJDWX.restart()"),
                ff("WIFI已设置为打开,设备正在重启!"),
                wx.navigateBack({ delta: 0 });
            else if ("关闭WIFI" == u)
              (u = "Setcfg('WFi',0,1)"),
                Qs("WIFI已设置为长期关闭模式\n重启生效");
            else if ("打开按键功能" == u) u = "SetCFG('KEY',1,1)";
            else if ("关闭按键功能" == u)
              (u = "SetCFG('KEY',0,1)"),
                wx.showModal({
                  title: "提示",
                  content: "是否录入按键解锁?",
                  success: function (s) {
                    s.confirm &&
                      (Qs("请在10秒内录入解锁按键"),
                      (u = "SetCFG('KEY',0,1);RegKey(10)"));
                  },
                });
            else if (u.startsWith("SetGM")) {
              u = u.replace("SetGM=", "");
              var d =
                new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate() +
                " " +
                new Date().getHours() +
                "-" +
                new Date().getMinutes();
              d = "Cxjdwx-GM " + d;
              var i = e.default.sha(d);
              u == i
                ? (Qs("管理员权限设置成功"), tf("GM", "1"))
                : ((d =
                    "Cxjdwx-GM " +
                    (d =
                      new Date().getFullYear() +
                      "-" +
                      (new Date().getMonth() + 1) +
                      "-" +
                      new Date().getDate() +
                      " " +
                      new Date().getHours() +
                      "-" +
                      (new Date().getMinutes() - 1))),
                  (i = e.default.sha(d)),
                  u == i
                    ? (Qs("管理员权限设置成功"), tf("GM", "1"))
                    : Qs("管理员权限设置失败"));
            } else if (u.startsWith("设置信息=")) {
              if (Es >= 1)
                return (
                  Zs(
                    "<C>" +
                      (u =
                        "Setcfg('QQ','" + u.replace("设置信息=", "") + "',1)")
                  ),
                  Zs("<C>BSend('CAN:'..Ver..' QQ:'..QQ)"),
                  this.setData({ CMD: "" }),
                  void Qs("设置已发送")
                );
            } else {
              if ("LOGO" == f) {
                if (
                  ((t = u.match(/=(0\d\d\d[\u4e00-\u9fa5\w]{4,6})$/)),
                  console.log(t),
                  null != t)
                )
                  (t = RegExp.$1),
                    wx
                      .createSelectorQuery()
                      .select("#myCanvas")
                      .fields({ node: !0, size: !0 })
                      .exec(function (f) {
                        var a = f[0].node,
                          e = a.getContext("2d");
                        (a.width = 16),
                          (a.height = 16),
                          e.scale(2, 2),
                          (e.font = "normal bold 8px SimSun"),
                          (e.fillStyle = "#fff");
                        for (
                          var u = [t.slice(0, 2), t.slice(2, 4), t.slice(4)],
                            d = u[0],
                            i = u[1],
                            r = u[2],
                            l = "",
                            n = "",
                            o = 0;
                          o < r.length;
                          o += 1
                        ) {
                          e.clearRect(0, 0, 16, 16),
                            e.fillText(r.charAt(o), 0, 7);
                          for (
                            var c = "", b = "", m = "", x = "", z = 0;
                            z < 16;
                            z += 1
                          ) {
                            for (var y = 0; y < 16; y += 1) {
                              var k = e.getImageData(y, z, 1, 1).data;
                              y > 7
                                ? (b = (k[3] < 140 ? "0" : "1") + b)
                                : (c = (k[3] < 140 ? "0" : "1") + c);
                            }
                            (m =
                              m +
                              "0x" +
                              parseInt(Number(c), 2).toString(16) +
                              ","),
                              (c = ""),
                              (m =
                                m +
                                "0x" +
                                parseInt(Number(b), 2).toString(16) +
                                ","),
                              (b = "");
                          }
                          for (var h = 15; h > -1; h -= 1) {
                            for (var I = 15; I > -1; I -= 1) {
                              var p = e.getImageData(I, h, 1, 1).data;
                              I > 7
                                ? (c = (p[3] < 140 ? "0" : "1") + c)
                                : (b = (p[3] < 140 ? "0" : "1") + b);
                            }
                            (x =
                              x +
                              "0x" +
                              parseInt(Number(c), 2).toString(16) +
                              ","),
                              (c = ""),
                              (x =
                                x +
                                "0x" +
                                parseInt(Number(b), 2).toString(16) +
                                ","),
                              (b = "");
                          }
                          (l =
                            l +
                            "Tx" +
                            (o + 1) +
                            "=string.char(" +
                            m.slice(0, -1) +
                            ")\n"),
                            (n =
                              n +
                              "Tx" +
                              (r.length - o) +
                              "=string.char(" +
                              x.slice(0, -1) +
                              ")\n");
                        }
                        var g = 11,
                          S = 41,
                          w = 71,
                          P = 101,
                          C = 0,
                          v = 0;
                        5 == r.length &&
                          ((g = 6), (S = 31), (w = 56), (P = 81), (C = 106)),
                          6 == r.length &&
                            ((g = 3),
                            (S = 24),
                            (w = 45),
                            (P = 66),
                            (C = 87),
                            (v = 108));
                        var D =
                          "<S>Logo.run\nVT=" +
                          Number(i) +
                          ";if SR==0 then\n" +
                          l +
                          "else\n" +
                          n +
                          "end ";
                        (D =
                          (D =
                            (D =
                              (D =
                                (D +=
                                  "function ShowLogo(disp) disp:clearBuffer()\n") +
                                "disp:drawXBM(" +
                                g +
                                ",(SR==0 and 25 or 30),16,16,Tx1)\n") +
                              "disp:drawXBM(" +
                              S +
                              ",(SR==0 and 25 or 30),16,16,Tx2)\n") +
                            "disp:drawXBM(" +
                            w +
                            ",(SR==0 and 25 or 30),16,16,Tx3)\n") +
                          "disp:drawXBM(" +
                          P +
                          ",(SR==0 and 25 or 30),16,16,Tx4)\n"),
                          0 != C &&
                            (D =
                              D +
                              "disp:drawXBM(" +
                              C +
                              ",(SR==0 and 25 or 30),16,16,Tx5)\n"),
                          0 != v &&
                            (D =
                              D +
                              "disp:drawXBM(" +
                              v +
                              ",(SR==0 and 25 or 30),16,16,Tx6)\n"),
                          "01" == d &&
                            (D +=
                              "disp:drawStr((SR==0 and 80 or 50),(SR==0 and 63 or 5),'Ver:'..Ver:match('-(.+)'))\n"),
                          (Ls = 0),
                          (Ks = 0),
                          (Os = []),
                          (Js = 0);
                        var _ = (D +=
                          "disp:sendBuffer();end|<E>Logo.run").replace(
                          /\n/g,
                          "|<W>"
                        );
                        (Os[Os.length] = _.split("|")),
                          (Js += Os[Os.length - 1].length),
                          Xs(s),
                          Qs("正在发送设置参数");
                      });
                else Qs("设置参数错误");
                return this.setData({ CMD: "" }), void (u = "");
              }
              if ("设置输出电流" == f)
                t > Y || t < 1
                  ? Qs("超出限制范围")
                  : (u = "SetVA(SV," + t + ",KSi,1)");
              else if ("设置输出电压" == f)
                t > (0 == R ? X : R) || t < (L < H ? L : H)
                  ? Qs("超出限制范围")
                  : (u = "SetVA(" + t + ",SA,KSi,1)");
              else if ("设置PWM加速值" == f)
                t > 1 && t <= 35 && (u = 'SetCFG("FS",' + t + ",1)");
              else if ("设置最小风速" == f)
                t >= 300 &&
                  t <= 800 &&
                  (u = 'SetCFG("MFs",' + t + ",1);SetFan(0)");
              else if ("充满延时关机" == f)
                t >= 0 &&
                  t < 1200 &&
                  (u = 'SetCFG("SD",' + t + ",1);SDT=SD*60");
              else if ("设置功率限制" == f)
                t > j || t < 100
                  ? Qs("超出设置范围")
                  : (u = 'SetCFG("MW",' + t + ",1)");
              else if ("设置缓启时间" == f)
                t < 0 || t > 60
                  ? Qs("设置范围0-60")
                  : (u = 'SetCFG("HQ",' + t + ",1)");
              else if ("设置预约时间" == f)
                t < 0 || t > 1200
                  ? Qs("设置范围0-1200")
                  : (u = "Mode='T';YS=" + 60 * t);
              else if ("设置过滤电流" == f) u = "SetCFG('CLV'," + t + ",1)";
              else if ("设置二段充电" == f)
                if (u.match(/([\d\.]+)V([\d\.]+)A/)) {
                  var r = Number(RegExp.$1),
                    l = Number(RegExp.$2);
                  r > (R > X ? X : R) || r < (L < H ? L : H) || l > Y
                    ? Qs("超出设置范围")
                    : (u = "SetCFG('GV'," + r + ");SetCFG('SA2'," + l + ",1)");
                } else Qs("参数设置错误");
              else if ("最低电压" == f) u = "SetCFG('DBL'," + t + ",1)";
              else if ("设置超温限制" == f)
                if (u.match(/([\d\.]+)C([\d\.]+)W/)) {
                  var n = Number(RegExp.$1),
                    o = Number(RegExp.$2);
                  n < 50 || n > 150 || o < 500 || o > 1e4
                    ? Qs("超出设置范围")
                    : (u = "SetCFG('TMC'," + n + ");SetCFG('TMW'," + o + ",1)");
                } else Qs("参数设置错误");
              else if ("快速设置电压电流" == f)
                if (u.match(/([\d\.]+)V([\d\.]+)A([\d\.]+)[串S]/)) {
                  var c = Number(RegExp.$1),
                    b = Number(RegExp.$2),
                    m = Number(RegExp.$3);
                  c > (R > X ? X : R) || c < (L < H ? L : H) || b > Y || b < 1
                    ? Qs("超出设置范围")
                    : (u =
                        (u = "SetVA(" + c + "," + b + "," + gs + ",1)") +
                        ";SetCFG('DC" +
                        gs +
                        "'," +
                        m +
                        ",1);DCA[" +
                        gs +
                        "]=" +
                        m);
                } else Qs("参数设置错误");
              else
                "系统设置" == f &&
                  ((u = 'print("PWD="..(PWD or "18888"))'), (G = "1" + t));
            }
          }
          Zs("<C>" + u), Zs("<C>GetINF()"), this.setData({ CMD: "" });
        } else if (2 == this.data.ShowPan) {
          if ("设置最高限压" == f) u = 'SetCFG("LSV",' + t + ",1)";
          else if (u.startsWith("升级码="))
            u = "Unlock('" + u.replace("升级码=", "") + "')";
          else if ("设置最低限压" == f) u = 'SetCFG("MSV",' + t + ",1)";
          else if ("强制升级" == u);
          else if ("修改密码" == f)
            (u = 'Setcfg("PWD","' + G + '",1)'), (G = "1" + t);
          else if ("设置最大功率" == f) u = 'SetCFG("LMW",' + t + ",1)";
          else if ("实际输出电压" == f)
            if (as < 10) Qs("当前电压小于10V 不能进行校正");
            else {
              var x = Number(t / as).toFixed(6),
                z = Number(t / vs).toFixed(6);
              Ys.includes("Increase")
                ? (u =
                    "SetCFG('OVT'," +
                    x +
                    ");SetCFG('OVD'," +
                    z +
                    ");SetCFG('LSV'," +
                    (100 * z).toFixed(2) +
                    ");SetCFG('MSV'," +
                    (20 * z).toFixed(2) +
                    ",1)")
                : Ys.includes("Huawei")
                ? (u =
                    "SetCFG('OVT'," +
                    x +
                    ");SetCFG('OVD'," +
                    z +
                    ");SetCFG('LSV'," +
                    (58.5 * z).toFixed(2) +
                    ");SetCFG('MSV'," +
                    (41 * z).toFixed(2) +
                    ",1);Set.OV[3]=" +
                    1024 / x)
                : Ys.includes("ZTE") &&
                  (u =
                    "SetCFG('OVT'," +
                    x +
                    ");SetCFG('OVD'," +
                    z +
                    ");SetCFG('LSV'," +
                    (59 * z).toFixed(2) +
                    ");SetCFG('MSV'," +
                    (41.5 * z).toFixed(2) +
                    ",1)");
            }
          else if ("实际输出电流" == f)
            if (es < 5) Qs("输出电流必须大于5A且处于恒流状态");
            else {
              var y = Number(t / es).toFixed(6),
                k = Number(t / Ps).toFixed(6);
              u =
                "SetCFG('OAT'," +
                y +
                ");SetCFG('OAD'," +
                k +
                ",1);Set.OA[3]=" +
                1024 / y;
            }
          else if ("实际输入电流" == f)
            if (fs < 2) Qs("电流校正时 输入电流必须大于2A 否则不能进行校正");
            else {
              var h = Number(t / fs).toFixed(6);
              u = "SetCFG('IAT'," + h + ",1)";
            }
          else
            "设置最大限流" == f
              ? (u = 'SetCFG("LSA",' + t + ",1)")
              : "重置设置" == u &&
                ((u =
                  "CFile.remove('Huawei.inf');CFile.remove('ZTE.inf');CFile.remove('Increase.inf');CXJDWX.restart()"),
                ff("重置已发送,设备正在重启!"),
                wx.navigateBack({ delta: 0 }));
          Zs("<C>" + u), Zs("<C>GetINF()"), this.setData({ CMD: "" });
        } else Qs("输入错误,参数值只允许数字");
      },
      bt1: function () {
        this.setData({ CMD: "设置输出电压=" }), Qs("输入需要设置的电压");
      },
      bt2: function () {
        this.setData({ CMD: "设置预约时间=30" }),
          Qs("预约充电功能 启用后会关闭电源 单位分钟");
      },
      bt3: function () {
        this.setData({ CMD: "设置缓启时间=15" }),
          Qs("电流缓启设置 输入0关闭缓启功能 单位秒");
      },
      bt4: function () {
        this.data.CMD.includes("按键功能")
          ? this.setData({ CMD: "对调加减按键" })
          : (this.setData({ CMD: (1 == As ? "关闭" : "打开") + "按键功能" }),
            Qs("打开或者关闭按键功能"));
      },
      bt5: function () {
        this.setData({ CMD: "设置输出电流=" }), Qs("输入需要设置的电流");
      },
      bt6: function () {
        this.setData({ CMD: (0 == Ts ? "关闭" : "打开") + "电源输出" }),
          Qs("打开或者关闭电源输出");
      },
      bt7: function () {
        this.setData({ CMD: "设置二段充电=" + Ms + "V" + Ds + "A" }),
          Qs("设置0A关闭二段功能");
      },
      bt8: function () {
        this.setData({ CMD: "设置超温限制=" + Gs });
      },
      bt9: function () {
        this.setData({ CMD: "设置功率限制=3000" });
      },
      bt10: function () {
        this.data.CMD.startsWith("设置PWM加速值")
          ? this.setData({ CMD: "设置最小风速=500" })
          : this.setData({ CMD: "设置PWM加速值=20" }),
          Qs("每升温一度风速PWM\n范围1-35");
      },
      bt11: function () {
        this.setData({ CMD: "充满延时关机=30" }), Qs("输入0关闭关机功能");
      },
      bt12: function () {
        this.setData({ CMD: "清除累计数据" });
      },
      BtKS1: function () {
        this.setData({ CMD: "快速设置电压电流=" + ms + ks + "串" }), (gs = 1);
      },
      BtKS2: function () {
        this.setData({ CMD: "快速设置电压电流=" + xs + hs + "串" }), (gs = 2);
      },
      BtKS3: function () {
        this.setData({ CMD: "快速设置电压电流=" + zs + Is + "串" }), (gs = 3);
      },
      BtKS4: function () {
        this.setData({ CMD: "快速设置电压电流=" + ys + ps + "串" }), (gs = 4);
      },
      bt21: function () {
        this.data.CMD.startsWith("设置最高限压")
          ? (this.setData({ CMD: "设置最低限压=" }), Qs("设置最低限制电压"))
          : (this.setData({ CMD: "设置最高限压=" }), Qs("设置最高限制电压"));
      },
      bt22: function () {
        this.setData({ CMD: "实际输出电压=" }),
          Zs("<C>OVT=1;OVD=1;Set.OV[3]=1024"),
          W.match("[中华]") || W.match("Huawei") || W.match("ZTE")
            ? Zs("<C>SetVA(55,SA,KSi)")
            : Zs("<C>SetVA(SV,SA,KSi)"),
          Zs("<C>GetINF()");
      },
      bt23: function () {
        1 == os
          ? (Zs("<C>SetDV(" + (1 - rs) + ")"),
            Zs("<C>GetINF()"),
            Qs("显示驱动切换需断电重启后生效"))
          : Qs("此为无屏版 未解锁此功能\n" + q);
      },
      bt24: function () {
        this.setData({ ShowPan: 1, TIP: "点击需要设置的参数" }),
          Zs("<C>Setcfg('CAN',1,1)"),
          Zs("<C>GetINF()");
      },
      bt25: function () {
        this.setData({ CMD: "设置最大限流=" });
      },
      bt26: function () {
        this.setData({ CMD: "实际输出电流=" }),
          Zs("<C>OAT=1;OAD=1;Set.OA[3]=1024"),
          Zs("<C>GetINF()");
      },
      bt27: function () {
        1 == os
          ? (Zs(
              "<C>SetSR(" +
                (ls = 2 == ls ? 0 : ls + 1) +
                ");disp:setFontDirection(SR)"
            ),
            Zs("<C>GetINF()"),
            Qs("屏幕倒转需断电重启后生效"))
          : Qs("此为无屏版 未解锁此功能\n" + q);
      },
      bt28: function () {
        var s = Number(Ys.match(/-([\d\.]+)/)[1]);
        if (s < 3.37) ff("当前固件版本过低 需要用WIFI安卓APP升级！");
        else if ("强制升级" == this.data.CMD)
          this.setData({ ShowPan: 4 }), Hs();
        else {
          if (s >= Number(d)) return void ff("当前固件已是最新版本！");
          this.setData({ ShowPan: 4 }), Hs();
        }
      },
      bt29: function () {
        this.setData({ CMD: "设置最大功率=" });
      },
      bt30: function () {
        this.setData({ CMD: "重置设置" });
      },
      bt31: function () {
        ds + is + Ws > 1
          ? (Zs("<C>SetDR(" + (0 == ns ? 1 : 1 == ns ? 2 : 0) + ")"),
            Zs("<C>GetINF()"),
            Qs("协议切换需断电重启后生效"))
          : Qs("此为单协议版 未解锁此功能\n" + q);
      },
      bt32: function () {
        this.setData({ CMD: "修改密码=" }), Qs("密码只允许数字");
      },
      Check5: function () {
        Es >= 2 && (this.setData({ ShowPan: 4 }), Hs());
      },
      onLoad: function (s) {
        (Es = 1 == s.GM ? 1 : ef("GM")),
          wx
            .createSelectorQuery()
            .select("#canvas")
            .fields({ node: !0, size: !0 })
            .exec(function (s) {
              var f = s[0].node;
              i = f.getContext("2d");
              var a = wx.getSystemInfoSync().pixelRatio;
              (f.width = s[0].width * a),
                (f.height = s[0].height * a),
                i.scale(a, a);
            });
        var f = this;
        f.setData({
          title: "设备连接成功",
          CKStr: "设备认证失败,请输入设备认证码",
          ShowPan: 3,
          TIP: "输入认证码",
        }),
          u.onBLEConnectionStateChange(function () {
            wx.navigateBack({ delta: 0 });
          }),
          u.onBLECharacteristicValueChange(function (s, t) {
            s.trim()
              .split("\n")
              .forEach(function (s) {
                if ((console.log("Msg:" + s), s.match(/(<R><S>|<R><W>)/)))
                  Xs(f);
                else if (s.startsWith("<R><E>")) {
                  if ($s < Os.length - 1) ($s += 1), (Ks = 0), Xs(f);
                  else
                    null == s.match("Logo.run")
                      ? (Zs(
                          "<C>CFile.rename('UPData.UP','UPData');CXJDWX.restart()"
                        ),
                        ff("固件升级完成，设备正在重启!"),
                        wx.navigateBack({ delta: 0 }))
                      : (Zs(
                          "<C>CFile.remove('Logo.run');CFile.rename('Logo.run.UP','Logo.run');CXJDWX.restart()"
                        ),
                        ff("开机Logo设置完成，设备正在重启!"),
                        wx.navigateBack({ delta: 0 }));
                } else if (s.startsWith("CK"))
                  setTimeout(function () {
                    Zs(e.default.sha(s + "@t*s$e#T.'1)`"));
                  }, 200);
                else if (s.startsWith("CAN"))
                  (Rs = sf(s, "QQ", "Cxjdwx")),
                    (Ys = sf(s, "CAN")),
                    (W = " APP:3.48 CAN:" + Ys + " TAG:" + Rs),
                    f.setData({ Ver: W });
                else if (s.startsWith("CheckOK"))
                  Zs("<C>print('CHIP=0 Key='..CXJDWX.chipid())");
                else if (s.startsWith("Reg")) {
                  var t = sf(s, "Reg", "1");
                  af((q = sf(s, "Key")), t, f);
                } else if (s.startsWith("PWD"))
                  G == sf(s, "PWD")
                    ? f.setData({ ShowPan: 2, TIP: "输入0取消限制", CMD: "" })
                    : Qs("密码错误,请重试");
                else if (s.startsWith("CHIP"))
                  (q = sf(s, "Key", "1")),
                    f.setData({ CKStr: "设备认证失败,请输入设备认证码\n" + q }),
                    (rf = q),
                    (lf = a.default.hex_md5("Check" + rf + "@t*s$e#T.'1)`")),
                    (lf = e.default.sha(lf)),
                    ef("CFG").match(lf) || 1 == Es
                      ? (f.setData({
                          title: "设备认证成功",
                          ShowPan: 1,
                          TIP: "点击需要设置的参数",
                        }),
                        1 == Es
                          ? (a.default
                              .hex_md5("Check" + q + "@t*s$e#T.'1)`")
                              .match(/(....)$/),
                            Zs("<C>GetINF()"),
                            Qs("设备认证成功" + RegExp.$1))
                          : (Zs("<C>GetINF()"), Qs("设备认证成功")))
                      : (f.setData({ title: "设备认证失败" }),
                        Qs("设备认证失败\n" + q));
                else if (s.startsWith("Mode")) {
                  var u = sf(s, "Mode", "");
                  "0" == sf(s, "OL")
                    ? f.setData({ title: "CAN通讯异常" })
                    : "SP" == u
                    ? f.setData({ title: "充电器已关机" })
                    : "WT" == u
                    ? f.setData({ title: "等待接入电池" })
                    : "A" == u
                    ? f.setData({ title: "第一段充电中" })
                    : "B" == u
                    ? f.setData({ title: "第二段充电中" })
                    : "T" == u
                    ? f.setData({ title: "预约等待中" })
                    : "C" == u
                    ? f.setData({ title: "充电完成" })
                    : "S" == u && f.setData({ title: "充电完成(已关机)" }),
                    i.clearRect(0, 0, V, 300),
                    (i.font = "normal normal 15px sans-serif"),
                    (Z = Number(sf(s, "OW"))),
                    (ss = Number(sf(s, "IW"))),
                    (Q = sf(s, "SDT")),
                    (U = sf(s, "Fan")),
                    (as = Number(sf(s, "OV"))),
                    (es = Number(sf(s, "OA"))),
                    (fs = Number(sf(s, "IA"))),
                    (cs = sf(s, "SOC", "100")),
                    0 == (ts = Number(sf(s, "IV", "0"))) &&
                      (ts = Number(sf(s, "IV1", "0"))),
                    as * es - Z > 50 &&
                      0 != Z &&
                      (0 != ss && ss > Z && (ss *= (as * es) / Z),
                      (Z = as * es),
                      (fs = ss / ts));
                  var d = 0,
                    E = 0;
                  ss > 0 && ((d = (Z / ss) * 100), (E = ss - Z));
                  var J = [
                      "输入电压",
                      "输入电流",
                      "输入功率",
                      "输入温度",
                      "转换效率",
                      "本次充电",
                      "本次电量",
                      "本次时间",
                    ],
                    us = [
                      "输出电压",
                      "输出电流",
                      "输出功率",
                      "输出温度",
                      "转换损耗",
                      "累计充电",
                      "累计电量",
                      "累计时间",
                    ],
                    bs = [ts, fs, ss, "IT", d, "AH", "WH", "Ti"],
                    gs = [as, es, Z, "OT", E, "MAH", "MWH", "MTi"],
                    Ss = ["V", "A", "W", "℃", "%", "Ah", "Wh", ""],
                    Fs = ["V", "A", "W", "℃", "W", "Ah", "Wh", ""],
                    Bs = V / 2,
                    Ls = 25;
                  if (
                    ((i.strokeStyle = "#eee"),
                    i.moveTo(0, 0),
                    i.lineTo(V, 0),
                    i.moveTo(Bs, 0),
                    i.lineTo(Bs, 300),
                    1 == f.data.IsICR)
                  ) {
                    var Js = sf(s, "ST0", "0"),
                      Hs = sf(s, "ST1", "0");
                    (Js = uf(Number(Js).toString(2), 8)),
                      (Hs = uf(Number(Hs).toString(2), 8)),
                      f.setData({
                        STS0: Js.charAt(7),
                        STS1: Js.charAt(6),
                        STS2: Js.charAt(5),
                        STS3: Js.charAt(4),
                        STS4: Js.charAt(3),
                        STS5: Js.charAt(2),
                        STS6: Js.charAt(1),
                        STS7: Js.charAt(0),
                        STS8: Hs.charAt(7),
                        STS9: Hs.charAt(6),
                        STS10: Hs.charAt(5),
                      });
                  }
                  f.setData({ SOC: cs }),
                    (l[5] = "T" == u ? sf(s, "Ti", "") : ""),
                    (z[5] = Z.toFixed(2)),
                    (y[5] = U),
                    (k[5] = 0 == _s ? "关闭" : Q),
                    js([k, z, y, l]);
                  for (var Us = 0; Us < 8; Us++) {
                    (i.fillStyle = "#2222ff"),
                      (i.textAlign = "left"),
                      i.fillText(J[Us], 5, Us * Ls + 22),
                      i.fillText(us[Us], Bs + 5, Us * Ls + 22),
                      i.moveTo(0, Us * Ls + 29),
                      i.lineTo(V, Us * Ls + 29),
                      (i.fillStyle = "#ffa000"),
                      (i.textAlign = "right");
                    var tf =
                        "string" == typeof bs[Us]
                          ? Number(sf(s, bs[Us]))
                          : bs[Us],
                      df =
                        "string" == typeof gs[Us]
                          ? Number(sf(s, gs[Us]))
                          : gs[Us];
                    "Ti" == bs[Us]
                      ? ((tf = sf(s, bs[Us])), (df = sf(s, gs[Us])))
                      : ((tf = tf.toFixed(2)), (df = df.toFixed(2))),
                      i.fillText(tf, Bs - 30, Us * Ls + 22),
                      i.fillText(df, V - 30, Us * Ls + 22),
                      (i.fillStyle = "#aaaaaa"),
                      i.fillText(Ss[Us], Bs - 2, Us * Ls + 22),
                      i.fillText(Fs[Us], V - 2, Us * Ls + 22),
                      i.stroke();
                  }
                } else
                  s.startsWith("SA=")
                    ? ((ms = sf(s, "KS1", "58.8V15A") + "A"),
                      (xs = sf(s, "KS2", "67.2V15A") + "A"),
                      (zs = sf(s, "KS3", "71.4V15A") + "A"),
                      (ys = sf(s, "KS4", "84V15A") + "A"),
                      (Gs = sf(s, "TMS", "70C3000W")).match(
                        /([\d\.]+)C([\d\.]+)W/
                      ),
                      (Vs = Number(RegExp.$1)),
                      (qs = Number(RegExp.$2)),
                      (ks = Number(sf(s, "DC1", "13"))),
                      (hs = Number(sf(s, "DC2", "14"))),
                      (Is = Number(sf(s, "DC3", "17"))),
                      (ps = Number(sf(s, "DC4", "20"))),
                      Number(sf(s, "DBL", "3.0")),
                      (ws = Number(sf(s, "FS", "0"))),
                      Number(sf(s, "AJH", "0")),
                      (Ps = Number(sf(s, "SA", es))),
                      (Cs = Number(sf(s, "MW", "0"))),
                      (vs = Number(sf(s, "SV", as))),
                      Number(sf(s, "FON", 0)),
                      Number(sf(s, "SPM", "0")),
                      (Ds = Number(sf(s, "SA2", "0"))),
                      (_s = Number(sf(s, "SD", "0"))),
                      (Ts = Number(sf(s, "PON", "0"))),
                      (j = Number(sf(s, "LMW", "0"))),
                      (Ns = Number(sf(s, "HQ", "0"))),
                      (Ms = Number(sf(s, "GV", "0"))),
                      Number(sf(s, "LFS", "0")),
                      (R = Number(sf(s, "LSV", "0"))),
                      (Y = Number(sf(s, "LSA", "0"))),
                      (As = Number(sf(s, "KEY", "1"))),
                      (L = Number(sf(s, "MSV", "20"))),
                      Number(sf(s, "FMT", "45")),
                      Number(sf(s, "FMW", "1500")),
                      (O = Number(sf(s, "OVT", "0"))),
                      ($ = Number(sf(s, "OAT", "0"))),
                      (K = Number(sf(s, "OVD", "0"))),
                      Number(sf(s, "OAD", "0")),
                      f.data.Ver.includes("Increase")
                        ? (as > 532
                            ? ((X = 750), (H = 200))
                            : as > 422
                            ? ((X = 530), (H = 200))
                            : as > 120
                            ? ((X = 420), (H = 200))
                            : ((X = 100), (H = 20)),
                          f.setData({ IsICR: 1 }))
                        : f.data.Ver.includes("Huawei")
                        ? ((X = (58.5 * K).toFixed(2)),
                          (H = (41.5 * K).toFixed(2)))
                        : f.data.Ver.includes("ZTE")
                        ? ((X = (59 * K).toFixed(2)),
                          (H = (41.5 * K).toFixed(2)))
                        : ((X = R), (H = L)),
                      (X = Number(X)),
                      (H = Number(H)),
                      (r[2] = vs),
                      (n[2] = Ns),
                      (c[2] = Ps),
                      (m[2] = Ds),
                      (x[2] = Vs + "°C"),
                      (z[2] = Cs),
                      (y[2] = ws),
                      (k[2] = _s),
                      (r[5] = H + "-" + X),
                      (r[4] = R > 0 ? R + "🔒" : ""),
                      (c[4] = Y > 0 ? Y + "🔒" : ""),
                      (n[5] = 0 == Ns ? "关闭" : "开启"),
                      (o[5] = 0 == As ? "关闭" : "开启"),
                      (b[5] = 1 == Ts ? "关机" : "开机"),
                      (m[5] = 0 == Ds ? "关闭" : Ms),
                      (x[5] = qs + "W"),
                      (z[4] = j > 0 ? j + "🔒" : ""),
                      (k[5] = 0 == _s ? "关闭" : 60 * _s),
                      (I[2] = ks),
                      (p[2] = hs),
                      (g[2] = Is),
                      (S[2] = ps),
                      (I[5] = ms),
                      (p[5] = xs),
                      (g[5] = zs),
                      (S[5] = ys),
                      js([r, l, n, o, c, b, m, x, z, y, k, h, I, p, g, S]))
                    : s.startsWith(" SYS=") &&
                      ((os = Number(sf(s, "DSP", "0"))),
                      (ns = Number(sf(s, "DR", "0"))),
                      (ls = Number(sf(s, "SR", "0"))),
                      (ds = Number(sf(s, "ZTE", "0"))),
                      (is = Number(sf(s, "Huawei", "0"))),
                      (rs = Number(sf(s, "DV", "1"))),
                      (Ws = Number(sf(s, "Increase", "0"))),
                      (w[4] = r[4]),
                      (P[5] = O),
                      (C[5] =
                        1 == rs
                          ? "IIC1306"
                          : 0 == rs
                          ? "IIC1106"
                          : 3 == rs
                          ? "SPI1309"
                          : "SPI7567"),
                      (D[4] = c[4]),
                      (_[5] = $),
                      (F[5] = 1 == ls ? "竖显" : 0 == ls ? "倒显" : "正显"),
                      (N[4] = z[4]),
                      (M[4] = y[4]),
                      (B[5] =
                        ds + is + Ws == 1
                          ? "单协议版"
                          : 1 == ns
                          ? "华为"
                          : 2 == ns
                          ? "英可瑞"
                          : "中兴"),
                      js([w, P, C, v, D, _, F, T, N, M, B, A]));
                var rf, lf;
              });
          });
      },
      onUnload: function () {
        u.onBLEConnectionStateChange(function () {}),
          u.closeBLEConnection(),
          console.log("Unload device");
      },
    });
    var Os = [],
      Ks = 0,
      $s = 0,
      Ls = 0,
      Js = 0;
    function Xs(s) {
      u.easySendData(Os[$s][Ks] + "\n", !1),
        (Ks += 1),
        (Ls += 1),
        s.setData({ SOC: ((Ls / Js) * 100).toFixed(2) });
    }
    function Hs() {
      var s = [
        "<S>convert.run~30~51 ~c~m~f~56~d~57~30~54 not ~d ~26 ~32 `s ~27~30~54 type~56~d~57==~u~14~u ~26 ~d=tonumber~56~d~3`f`c~57 ~27~30~50 sign = ~62~6floor~56~d/~56`z^`y`f~57~57~30~50 exp = ~d % ~56`z^`y`f~57~30exp = ~62~6floor~56exp/~56`z^`z`y~57~57~2`f`z`b~30~50 man = ~d % ~56`z^`z`y~57~30~37 i=`f~3`z`y do man=man/`z ~27~30~50 result = ~56~2`f~57^sign * ~56`f~1man~57 * `z^exp~30~32 result~30~27~30~51 ~f~m~c~56~d~57~30~50 ~a~3~p~3~h~3~o~3~k=`s~3`s~3`s~3`s~3`s~30~54 ~d==`s ~26 ~32 ~u`s`s`s`s`s`s`s`s~u ~27~30~50 ~t=~62~6floor~56~d~57~30~50 ~f~3P=~56~d~2~t~57~3~t~30~a=~56~d>`s ~58 `s or `f~57 * `z^`y`f~30repeat  ~t=~62~6floor~56~t/`z~57~7~k=~k~1`f until~56~t==`s~57~30~p=~k~2`f~7~o=`z`y~2~p~7P=P % ~56`z^~p~57~30P=P*~56`z^~o~57~7~p=~p~1`f`z`b~7~p=~p*`z^`z`y~30~37 i=`f~3~o do~30~f=~f*`z~7~t=~62~6floor~56~f~57~7~f=~56~f~2~t~57~30~h = ~h ~1 ~t*`z^~56~o~2i~57~30~27~30~32 ~14~6~15~56~u%`s`d~q~u~3~56~a~1~p~1~56P~1~h~57~57~57~30~27|<E>convert.run",
        "<S>Display~30~50 Y~3~k~3~q=~4`y~3`f`w~3`a`d~5~3`f~3`s~30~50 ~s~k~t`f~3~s~p~t`z=`z`f~3`f`a~30~50 ~s`f~3~s`z~3P`f~3P`z~3P`y~3P`a~3~f`f~3~f`z~3~f`y~3~f`a~3~f`e~3~f`b~3B`f~3~f`d=`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~30~d~m=~d~m or `s~30~38~6~65~56~4~38=`f`w~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~38~6~65~56~4~38=`z`y~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~54 ~t~d>=`z ~26 ~q=`a~30bus = spi~6master~56spi~6~c~aPI~3 ~4sclk=`f`w~3 mosi=`z`y~5~57~30~54 ~t~d==`z ~58 u`dg`z~6st`b`e`c`b_pi_`f`y`zx`c`a ~26 ~25 = u`dg`z~6st`b`e`c`b_pi_`f`y`zx`c`a~56bus~3 `z`z~3 `f`c~3 `f`b~57 ~27~30~54 ~t~d==`y ~58 u`dg`z~6ssd`f`y`s`w_`f`z`dx`c`a_noname`s ~26 ~25 = u`dg`z~6ssd`f`y`s`w_`f`z`dx`c`a_noname`s~56bus~3 `z`z~3 `f`c~3 `f`b~57 ~27~30~38~6~65~56~4~38=~s~p~t`z~3dir=~38~6~b~r~m~5~57~7~38~6~39~56~s~p~t`z~3`f~57~30~s~k~t`f=ledc~6new~khannel~56~4~38=~s~k~t`f~3bits=`f`s~3mode=`s~3timer=`f~3channel=`z~3frequency=`e`s`s`s~3duty=`e`e`s~5~57~30~48~30~38~6~65~56~4~38=~4`f`c~3`f`b~5~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30i`zc~6setup~56i`zc~6~c~e`s~3 `f`c~3 `f`b~3 i`zc~6~f~l~a~m~57~30~54 ~t~d==`s ~26 ~25=u`dg`z~6sh`f`f`s`c_i`zc_`f`z`dx`c`a_noname~56i`zc~6~c~e`s~3 `sx`yc~57 ~27~30~54 ~t~d==`f ~26 ~25=u`dg`z~6ssd`f`y`s`c_i`zc_`f`z`dx`c`a_noname~56i`zc~6~c~e`s~3 `sx`yc~57 ~27~30~27~30~25:set~font~56u`dg`z~6font_`cx`f`s_tf~57~30~25:set~font~tirection~56~a~n~57~30~54 ~d~m>`s ~58 ~ahow~sogo ~26 ~ahow~sogo~56~25~57 ~27~30~51 ~42~56x~3y~3x`f~3y`f~3x`z~3y`z~57 ~54 ~a~n==`f ~26 ~tr~24~56`f`z`d~2y~3x~3`f`z`d~2y`f~3x`f~57 ~48 ~tr~24~56x~3y~3x`f~3y`f~57 ~27 ~27~30~51 ~42x~56x~3y~3z~3t~57~54 ~a~n==`f ~26 ~tr~24~56`f`z`d~2y~3x~3`f`z`d~2t~3z~57~7~tr~24~56`f`z`d~2y~3x~1`f~3`f`z`d~2t~3z~1`f~57 ~48 ~tr~24~56x~3y~3z~3t~57~7~tr~24~56x~1`f~3y~3z~1`f~3t~57 ~27 ~27~30~51 ~42y~56x~3y~3z~3t~57~54 ~a~n==`f ~26 ~tr~24~56`f`z`d~2y~3x~3`f`z`d~2t~3z~57~7~tr~24~56`f`z`b~2y~3x~3`f`z`b~2t~3z~57 ~48 ~tr~24~56x~3y~3z~3t~57~7~tr~24~56x~3y~1`f~3z~3t~1`f~57 ~27 ~27~30~50 ~51 ~18~atr~56x~3y~3t~57~30~25:clearBuffer~56~57~30~54 ~a~n==`z ~26 t=~14~6reverse~56t~57 ~27~30~37 i = `f ~3#t~3`f do~30v=t:~61~56i~3i~57~30~54 v==~u~6~u ~26 x=x~1`a ~48 x=x~1`c~1`a ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`f`y`a`e`c`b`d`w`s~8~u or ~u~9`a`e`c`d`w`s~8~u~57 ~26 ~42x~56x~3 y~3 x~3y~1`c~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`z`y`e`c`d`s~8~u or ~u~9`z`y`e`c`b`d`w`s~8~u~57 ~26 ~42y~56x~3 y~3 x~1`b~3y~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`z`c`d`s~8~u or ~u~9`f`z`y`a`b`d`w`s~8~u~57 ~26 ~42x~56x~1`c~3 y~3 x~1`c~3y~1`c~57 ~27~30~54 v:~47~56~u~9`z`y`a`e`c`d`w~8~u~57 ~26 ~42y~56x~3 y~1`c~3 x~1`b~3y~1`c~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`f`z`y`a`b`d`w`s~8~u or ~u~9`z`c`d`s~8~u~57 ~26 ~42x~56x~3 y~1`c~3 x~3y~1`f`y~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`z`y`e`c`b`d`w`s~8~u or ~u~9`z`y`e`c`d`s~8~u~57 ~26 ~42y~56x~3 y~1`f`z~3 x~1`b~3y~1`f`z~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`a`e`c`d`w`s~8~u or ~u~9`f`y`a`e`c`b`d`w`s~8~u~57 ~26 ~42x~56x~1`c~3 y~1`c~3 x~1`c~3y~1`f`y~57 ~27~30~54 v==~u~6~u ~26 ~54 ~a~n==`z ~26 ~42y~56x~1`c~3 y~3 x~1`b~3y~57 ~48 ~42y~56x~1`c~3 y~1`f`z~3 x~1`b~3y~1`f`z~57 ~27 ~27~30~54 v==~ua~u ~26~30~54 ~a~n==`z ~26~30~42~56x~3 y~1`f~3 x~3y~1`c~57~7~42~56x~1`c~3 y~1`f~3 x~1`c~3y~1`c~57~7~42~56x~3y~1`y~3x~1`c~3y~1`y~57~30~42~56x~3 y~1`e~3 x~1`y~3y~1`f`f~57~7~42~56x~1`c~3 y~1`e~3 x~1`y~3y~1`f`f~57~30~48~30~42~56x~3 y~1`d~3 x~3y~1`f`y~57~7~42~56x~1`c~3 y~1`d~3 x~1`c~3y~1`f`y~57~7~42~56x~3y~1`f`s~3x~1`c~3y~1`f`s~57~30~42~56x~3 y~1`d~3 x~1`y~3y~1`z~57~7~42~56x~1`y~3 y~1`z~3 x~1`c~3y~1`d~57~30~27~30~27~30~54 v==~uv~u ~26~30~54 ~a~n==`z ~26~30~42~56x~3 y~1`d~3 x~3y~1`f`z~57~7~42~56x~1`c~3 y~1`d~3 x~1`c~3y~1`f`z~57~30~42~56x~3 y~1`d~3 x~1`y~3y~1`z~57~7~42~56x~1`y~3 y~1`z~3 x~1`c~3y~1`d~57~30~48~30~42~56x~3 y~1`z~3 x~3y~1`b~57~7~42~56x~1`c~3 y~1`z~3 x~1`c~3y~1`b~57~30~42~56x~3 y~1`c~3 x~1`y~3y~1`f`z~57~7~42~56x~1`c~3 y~1`c~3 x~1`y~3y~1`f`z~57~30~54 ~a~n==`f ~26 x=~2`f`y ~7 y=y~1`f`w ~27~30~27~30~27~30~27~30~tr~24~56~f`f~9`f~8~3~f`f~9`z~8~3~f`f~9`y~8~3~f`f~9`a~8~57~30~tr~24~56~f`z~9`f~8~3~f`z~9`z~8~3~f`z~9`y~8~3~f`z~9`a~8~57~30~tr~24~56~f`y~9`f~8~3~f`y~9`z~8~3~f`y~9`y~8~3~f`y~9`a~8~57~30~54 ~a~n==`f ~26~30~a`a_=~uI~o  ~u~6~6~63~56~u%`s`ad~u~3I~e~57~6~6~u~e~u~30~20~56`e`s~3`e~3~u~b~r~m ~u~6~6~a~b~e_~6~6~u~e~u~57~30~20~56`a`s~3`e~3~u~o~m~k ~u~6~6~63~56~u%`e~6`zf~u~3~b~m~57~57~30~48~54 ~a~t~s==`f ~26~30~25:~44Box~56~56~a~n==`z ~58 ~56~t~d>`f ~58 `f`y`f or `f`z`d~57~2~a~b~k or B`f~9`f~8~1~56~t~d>`f ~58 `s or ~2`y~57~57~3B`f~9`z~8~3~a~b~k~1`e~3B`f~9`a~8~57~30~tr~64~56~f`b~9`f~8~3~f`b~9`z~8~3~f`b~9`y~8~3~f`b~9`a~8~57~30~tr~24~56~f`d~9`f~8~3~f`d~9`z~8~3~f`d~9`y~8~3~f`d~9`a~8~57~30~20~56~s`y~9`f~8~3~s`y~9`z~8~3~63~56~u%`y~6`sf~u~3~a~b~k~3~u%~u~57~57~30~27~30~54 ~66==`f ~26 ~tr~64~56~f`a~9`f~8~3~f`a~9`z~8~3~f`a~9`y~8~3~f`a~9`a~8~57~30~48~54 ~66==`z ~26 ~tr~64~56~f`e~9`f~8~3~f`e~9`z~8~3~f`e~9`y~8~3~f`e~9`a~8~57~30~48~54 ~66==`y ~26 ~tr~64~56~f`c~9`f~8~3~f`c~9`z~8~3~f`c~9`y~8~3~f`c~9`a~8~57 ~27~30~20~56~s`f~9`f~8~3~s`f~9`z~8~3~a~a~d_~6~6~a`y_~6~6~a~a~l_~57~7~20~56~s`z~9`f~8~3~s`z~9`z~8~3~a`a_~57~30~20~56P`z~9`f~8~3P`z~9`z~8~3~a~e~c_~57~7~20~56P`y~9`f~8~3P`y~9`z~8~3~a~l~c_~57~7~20~56P`a~9`f~8~3P`a~9`z~8~3~a~mI_~57~30~25:s~27Buffer~56~57~30~27~30~51 ~53~a~n~56~d~3~a~57~30~54 ~d==`f ~26~30~f`a~3~f`e~3~f`c=~4`f`f`e~3`z~3`f`f~3`y`e~5~3~4`f`f`e~3`z`c~3`f`f~3`y`c~5~3~4`f`f`e~3`z~3`f`f~3`c`s~5~30~s`f~3~s`z=~4`f`f`c~3`e~5~3~4`c`s~3`e~5~30P`f~3P`z~3P`y~3P`a=~4`z`d~3`z~5~3~4`z`y~3`f`s~5~3~4`f`y~3`f`s~5~3~4`z~3`f`s~5~30~f`f~3~f`z~3~f`y=~4`f`f`y~3`s~3`f`f`y~3`c`a~5~3~4`b`y~3`s~3`b`y~3`c`a~5~3~4`y`e~3`s~3`y`e~3`c`a~5~30~48~54 ~a~t~s==`s ~26~30~54 ~d==`s ~26~30~f`a~3~f`e~3~f`c=~4`z~3`z`w~3`y`y~3`f`f~5~3~4`y`d~3`z`w~3`y`y~3`f`f~5~3~4`z~3`z`w~3`c`w~3`f`f~5~30~s`f~3~s`z=~4`a~3`y`d~5~3~4`a~3`e`b~5~30P`f~3P`z~3P`y~3P`a=~4`b`e~3`z`d~5~3~4`b`b~3`y`e~5~3~4`b`b~3`a`b~5~3~4`b`b~3`e`w~5~30~f`f~3~f`z~3~f`y=~4`s~3`z`a~3`f`z`d~3`z`a~5~3~4`s~3`a`a~3`b`y~3`a`a~5~3~4`b`y~3`z`a~3`b`y~3`c`a~5~30~48~54 ~d==`z ~26~30~f`a~3~f`e~3~f`c=~4`w`y~3`z`e~3`y`y~3`f`f~5~3~4`e`b~3`z`e~3`y`y~3`f`f~5~3~4`e`b~3`z`e~3`c`w~3`f`f~5~30~s`f~3~s`z=~4`f`z`y~3`z`c~5~3~4`f`z`a~3`b~5~30P`f~3P`z~3P`y~3P`a=~4`a`w~3`y`e~5~3~4`e`f~3`z`w~5~3~4`e`f~3`f`b~5~3~4`e`f~3`e~5~30~f`f~3~f`z~3~f`y=~4`s~3`a`s~3`f`z`d~3`a`s~5~3~4`e`e~3`z`s~3`f`z`d~3`z`s~5~3~4`e`e~3`s~3`e`e~3`a`s~5~30~27~30~48~30~54 ~d==`s ~26~30~f`a~3~f`e~3~f`c=~4`z~3`z`e~3`y`y~3`f`f~5~3~4`y`d~3`z`e~3`y`y~3`f`f~5~3~4`z~3`z`e~3`c`w~3`f`f~5~30~s`f~3~s`z~3~s`y=~4`a~3`y`a~5~3~4`a~3`e`s~5~3~4`f`s`e~3`c`a~5~30P`f~3P`z~3P`y~3P`a=~4`b`e~3`z`f~5~3~4`d`s~3`y`f~5~3~4`d`s~3`a`f~5~3~4`d`s~3`e`f~5~30~f`f~3~f`z~3~f`y=~4`s~3`z`s~3`f`z`d~3`z`s~5~3~4`s~3`y`d~3`b`y~3`y`d~5~3~4`b`y~3`z`s~3`b`y~3`e`a~5~30~f`b~3B`f~3~f`d=~4`s~3`e`c~3`f`s`z~3`d~5~3~4`s~3`e`c~3`c`s~3`d~5~3~4`s~3`e`a~3`f`z`d~3`e`a~5~30~48~54 ~d==`z ~26~30~f`a~3~f`e~3~f`c=~4`w`y~3`y`s~3`y`y~3`f`f~5~3~4`e`b~3`y`s~3`y`y~3`f`f~5~3~4`e`b~3`y`s~3`c`w~3`f`f~5~30~s`f~3~s`z~3~s`y=~4`f`z`y~3`y`f~5~3~4`f`z`a~3`f`a~5~3~4`z`z~3`s~5~30P`f~3P`z~3P`y~3P`a=~4`a`w~3`y`e~5~3~4`a`d~3`y`a~5~3~4`a`d~3`z`a~5~3~4`a`d~3`f`a~5~30~f`f~3~f`z~3~f`y=~4`s~3`a`e~3`f`z`d~3`a`e~5~3~4`e`e~3`z`c~3`f`z`d~3`z`c~5~3~4`e`e~3`f`s~3`e`e~3`a`e~5~30~f`b~3B`f~3~f`d=~4`z`c~3`s~3`f`s`z~3`d~5~3~4`b`z~3`s~3`c`s~3`d~5~3~4`s~3`f`s~3`f`z`d~3`f`s~5~30~27~30~27~30~a~n=~d~7~25:set~font~tirection~56~a~n~57~30~54 ~a==~60 ~26 ~53cfg~56~u~a~n~u~3~d~3`f~57 ~27~30~27~30~51 ~tr~64~56x~3y~3x`f~3y`f~57 ~25:~44~64~56x~1~q~3y~3x`f~3y`f~57 ~27~30~51 ~20~56x~3y~3s~57 ~25:~44~atr~56x~1~q~3y~3s~57 ~27~30~51 ~tr~24~56x~3y~3x`f~3y`f~57 ~25:~44~24~56x~1~q~3y~3x`f~1~q~3y`f~57 ~27~30~51 ~63~56~a~3~d~3~b~57 ~32 ~14~6~15~56~a~3~d~57~6~6~56~b or ~u~u~57 ~27~30~a~l~c_~3~a~e~c_~3~a~b~e_~3~a~b~m_~3~a~b~d_~3~a~b~l_~3~a~mI_~3~a~a~l_~3~a~a~d_~3~aI~o~f_=~u~u~30~a`f_~3~a`z_~3~a`y_~3~a`a_=~u%`z~6`ff~u~3~u%`z~6`ff~u~3~u~u~30~a~t~s=`s~30~51 ~69~56~a~3~n~57~30~54 ~d~m>`s ~26 ~d~m=~d~m~2`f~7~32 ~27~30~54 P~b~o==`f ~58 ~a~tP==`f ~26 ~25:clearBuffer~56~57~7~25:s~27Buffer~56~57~7~32 ~27~30~54 ~t~k~l~9~i~ai~8~=`s ~26 ~54 ~a~t~s==`s ~26 ~a~t~s=`f~7~53~a~n~56~a~n~57 ~27~30~48 ~54 ~a~t~s==`f ~26 ~a~t~s=`s~7~53~a~n~56~a~n~57 ~27  ~27~30~a`f_~3~a`z_~3~a`y_=~u%`z~6`ff~u~3~u%`z~6`ff~u~3~u~u~30~54 ~a~b~d_==~60 ~58 ~n ~26 ~32 ~27~30~54 ~a~n==`f ~26~30~54 ~66==`f ~26 ~a`z_=~u%`s`zd~u ~48~54 ~66==`z ~26 ~a`f_=~u%`s`zd~u ~48 ~a`f_=~u%`s`zd~u~7~a`z_=~a`f_~7~a`y_=~u  ~u~27~30~27~30~54 ~n==~60 ~26~30~a~b~d_=~63~56~b~d>=`f`s`s ~58 ~u%`e~6`ff~u or ~u%`e~6`zf~u~3~b~d~3~uv ~u~57~30~a~b~l_=~63~56~u%`e~6`zf~u~3~b~l~3~ua~u~57~30~a~e~c_=~63~56~u%`c~6`sf~u~3~e~c~3~u~e~c~u~57~30~a~l~c_=~63~56~u%`c~6`zf~u~3~l~c~3~u~l~c~u~57~30~a~mI_=~mo~a~56~mi~57~30~a~b~e_=~63~56~u%`s`ad~u~3~b~e~57~30~a~b~m_=~63~56~u%`s`zd~u~3~b~m~57~30~a`a_=~u~m=~u~6~6~a~b~m_~6~6~u ~e=~u~6~6~a~b~e_~30~27~30~a~a~d_=~63~56~a`f_~3~a~d~3~56~a~d>=`f`s`s ~58 ~u ~u or ~u~d ~u~57~57~30~a~a~l_=~63~56~a`z_~3~a~l~3~u~l~u~57~30~18~atr~56~2`y~3Y~9~a~n~1`f~8 ~3~a~b~d_~6~6~a~b~l_~57~30~27~30~53~a~n~56~a~n~3`f~57~7~19~56~u~iey~u~57|<E>Display",
        "<S>EPS6020~30~der=~u~pP~a`c`s`z`s~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3I~m~3~o~m~k~3~q`s=`s~3`s~3`s~3`s~3`s~3`s~3`s~3~13~6~12~56~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~30id=~2`f~30~mi~3~l~c~3~e~c~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`f~3`s~30~53=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`z=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~51 Init~56~57~30~m~h~e~3~h~a~d~3~s~a~d~3~s~a~l~3~s~h~e=`f`s`s`s~3`a`a~3`b`s~3`z`s~3`f`z`s`s~30~27~30Init~56~57~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~50 ~d`f~3~d`z=~56~d or ~a~d~57/~b~d~t*`f`s`s`s~3~56~l or ~a~l~57/~b~l~t*`f`s`s`s~30can~6s~27~56`f~3~56`sx`s`z`w~k`s`s~f`s~1id*`z`e`c~57~3~13~6~12~56~t~m~c~56~d`f~3~u%`s`d~q~u~57~6~6~t~m~c~56~d`z~3~u%`s`d~q~u~57~57~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30can~6s~27~56`f~3~56`sx`s`z`w~l`s`s~f`s~1id*`z`e`c~57~3~13~6~12~56~t~m~c~56P~b~o~3~u%`s`z~q~u~57~6~6~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`e~30~54 id==~2`f ~26 id=~c~m~t~56~t~m~c~56I~t~57:~47~56~u~6~6$~u~57~57 ~27~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~6~6~u  ~u~6~6id~57 ~27~30~54 ~rP~tate ~26 ~32 ~27~30~54 I~t~=~56`sx`s`z`d`cf`s`s`s~1id~57 ~58 I~t~=`sx`s`z`d`ff`s`yf ~58 I~t~=~56`sx`s`z`d`wf`s`s`s~1id~57 ~58 I~t~=~56`sx`s`z`d~l~f`s`s`s~1id~57 ~26 ~32 ~27~30~50 ~m~3~k~3~i=~13~6~41~56~tata~57~3~k~3~i~30~54 I~t==~56`sx`s`z`d`wf`s`s`s~1id~57 ~26~30~k=~m:~61~56`f~3`d~57~7~i=~m:~61~56`w~3`f`c~57~30~b~d=~56~c~m~t~56~k~57/`f`s`s`s*~b~d~m~57~7~b~l=~56~c~m~t~56~i~57/`f`s`s`s*~b~l~m~57~30~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~53~6~b~d=~b~d~7~53~6~b~l=~b~l~30~b~e=~b~d*~b~l~7~53~6~b~e=~b~e~30can~6s~27~56`f~3`sx`s`z`d`d`y~f~f`s~3~q`s~57~30~27~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~30~54 ~rP~tate ~26 ~32 ~27~30~50 ~36=~u~u~7 ~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~ahow~h~a~g~56~36~57~7 can~6s~27~56`f~3~56`sx`s`z`d`w`s`s~f`s~1id*`z`e`c~57~3~q`s~57~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57 ~67~b~o~56`s~57 ~27~57~30~46~6~45~56~57:~33~56`z`e`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~57~57 ~27~57~30~46~6~45~56~57:~33~56`y`s`s`s~3 `s~3 ~51~56~57 can~6s~27~56`f~3~56`sx`s`z`d~l`s`s~f`s~1id*`z`e`c~57~3~q`s~57 ~27~57|<E>EPS6020",
        "<S>Huawei~30~der=~u~35~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3Init=`s~3`s~3`s~3`s~3`s~3`s~30~s~a~d=~s~a~d or ~56`e`d~6`e*~b~d~t~57~7~h~a~d=~h~a~d or ~56`a`f*~b~d~t~57~30~mi~3~l~c~3~e~c~3~o~m~k~3Y~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`s~30~53=~4I~d=~4~u`s`f`b`d`s`s`s`s~u~3`s~5~3I~e=~4~u`s`f`b`s`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3~b~l=~4~u`s`f`d`f`s`s`s`s~u~3`s~3`f`s`z`a/~b~l~m~5~3I~d`f=~4~u`s`f`b`d`s`s`s`y~u~3`s~5~3~b~l`z=~4~u`s`s`s`f`s`s`s`s~u~3`s~3`z`s/~b~l~m~5~3~30~b~d=~4~u`s`f`b`e`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3I~l=~4~u`s`f`b`z`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3~h~l=~4~u`s`f`b`c`s`s`s`s~u~3`s~3`z`s/~b~l~m~5~3~b~l`f=~4~u`s`f`d`z`s`s`s`s~u~3`s~3`f`s`z`a/~b~l~m~5~3~30I~m=~4~u`s`f`d`s`s`s`s`s~u~3`s~5~3~b~m=~4~u`s`f`bf`s`s`s`s~u~3`s~5~3~b~e=~4~u`s`f`b`y`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3~q~e=~4~u`s`f`s`e`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~5~30~51 ~16~56I~t~3~i~3~d~57 can~6s~27~56`f~3I~t~3~13~6~12~56~i~6~6~14~6~15~56~u%`s`d~q~u~3~d~57~57~57 ~27~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`s`s`s`s`s~u~3~d/~b~d~t*`f`s`z`a~57~7~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`f`s`s`s`s~u~3~d/~b~d~t*`f`s`z`a~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`y`s`s`s`s~u~3~l/~b~l~t*`z`s~57~7~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`a`s`s`s`s~u~3~l/~b~l~t*`z`s~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`e`s`s`s`s~u~3~a~h~e*`f`s`z`a~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~53~a~10~56~d~57  ~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`y`a`s`s`s~u~6~6~56~d==`s ~58 `s or `f~57~3`s~57~7~f~b~o=~d ~27~30~51 ~67~b~o~56~d~57 P~b~o=~d or `f~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`y`z`s`s`s~u~6~6~56~d or `f~57~3`s~57~7~53~10~56`s~57~30~27~30~51 Init`f~56~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`z`s`s`s`s~u~3`c`s`a`f`c~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`w`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`sc`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`sd`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`f`s`s`s`s~u~3`e`a`b`d`a~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`a`s`s`s`s~u~3`f`a`d~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`c`s`s`s`s~u~3`f`s`z`a~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`y~30~54 ~56~rP~tate ~58 ~g~h==~60~57 or I~t==`sx`f`s`s`f`f`f`b~p ~26 ~32 ~60 ~27~30~50 ~m~3I~3~d=`s~3`s~3`s~30~54 I~t==`sx`f`s`d`f`a`s`b~f or I~t==`sx`f`s`d`f`d`s`b~p or I~t==`sx`f`s`s`f`f`f`b~p ~26~30~m=~p~m~c~56~tata~57~7I=~m:~61~56`f~3`d~57~7~d=~c~m~t~56~m:~61~56`w~3`f`c~57~57~30~37 ~i~3~m ~55 pairs~56~53~57 do~30~54 I==~m~9`f~8 ~26 ~m~9`z~8=~14~6~15~56~u%`s~6`zf~u~3~56~d/~56~m~9`y~8 or `f`s`z`a~57~57~57~7break ~27~30~27~30~48~54 I~t==`sx`f`s`d`f`e`s`b~f ~26~30~54 Init ~26 ~17~56~uInit~u~57~7Init`f~56~57~7Init=~60~7~17~56~uInit~u~57 ~27~30~27~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57~6~6~u  ~u~6~6~56~m==`s ~58 ~p~m~c~56~tata~57 or ~56I~6~6~u  ~u~6~6~d~57~57~57 ~27~30~27~30~m~b~l=~4`s~3`s~3`s~3`s~3`s~3`s~5~30~51 ~lvg~56~d~57~30~50 ~lve=`s~30~37 i = `f~3#~m~b~l~3`f do~30~m~b~l~9i~8=~56i==#~m~b~l ~58 ~d or ~m~b~l~9i~1`f~8~57~30~lve = ~lve ~1 ~m~b~l~9i~8~30~27~30~2~2~lve = ~lve / #~m~b~l~30~32 ~56~d==`s ~58 `s or ~56~lve / #~m~b~l~57~57~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~7 ~54 ~rP~tate ~26 ~32 ~27~30~54 ~56~53~6~b~m~9`z~8~1`s~57<=`s or ~56~53~6~b~m~9`z~8~1`s~57>`f`e`s ~26 ~53~6~b~m~9`z~8=`s ~27~30~b~d=~53~6~b~d~9`z~8~1`s~7I~e=~53~6I~e~9`z~8~1`s~7~b~m=~53~6~b~m~9`z~8~1`s~7~b~e=~53~6~b~e~9`z~8~1`s~30~b~l=~56~53~6~b~l~9`z~8~1`s~57~7~53~6~b~l~9`z~8=~b~l~30~50 ~36=~u~u~30~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m~9`z~8 ~27~30~ahow~h~a~g~56~36~57~30~54 ~b~e>=~f~h~e ~26 ~53~a~10~56`f~57 ~48~54 ~b~m>=~f~h~m ~26 ~53~a~10~56`z~57 ~48  ~53~a~10~56`s~57 ~27~30~54 Init ~26 ~16~56`sx`f`s`d`f`e`s~f~p~3~u`s`s`s`s`s`s`s`s~u~3`s~57 ~27~30~16~56`sx`f`s`d`f`a`s~f~p~3~u`s`s`s`s`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`s`s`s`s`s~u~3~a~d/~b~d~t*`f`s`z`a~57~7~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`e`s`s`s`s~u~3~a~h~e*`f`s`z`a~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`s`s`s`s`s~u~3~a~d/~b~d~t*`f`s`z`a~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~57~57~7 ~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`e`s`s`s`s~u~3~a~h~e*`f`s`z`a~57 ~27~57|<E>Huawei",
        "<S>Increase~30~der=~uIncrease~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3~o~m~k=`s~3`s~3`s~3`s~3`s~3`s~30~s~a~d=~s~a~d or ~56`f`s`s*~b~d~t~57~7~h~a~d=~h~a~d or ~56`z`s*~b~d~t~57~30~mi~3~l~c~3~e~c~3~kI~t~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`sx`f`y`s`b~k`s`d`s~3`s~3`s~3`f~3`s~30~53`f=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`z=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`y=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`a=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`s=~4~53`f~3~53`z~3~53`y~3~53`a~5~7~53=~53`s~9~t~a~8~30~51 ~a~27`f~56~57~30can~6s~27~56`f~3`sx`f`y`s`s`d`s`d`f~3~u~u~57~30can~6s~27~56`f~3`sx`f`y`s`b~l`s`d`f~3~13~6~12~56~u`y`f`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~57~30~27~30~51 ~16~56~k~3~d`f~3~d`z~3~d`y~57~30~d`f=~14~6~15~56~u%`s`a~q~u~3~d`f~57~7~d`z=~14~6~15~56~u%`s`d~q~u~3~d`z~57~30~k=~13~6~12~56~k~6~6~d`f~6~6~d`z~57~7can~6s~27~56`f~3~kI~t~1~56~d`y or ~t~a~57~3~k~57~30~27~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~16~56~u`s`s`s`s~u~3~56~l or ~a~l~57/~b~l~t*`f`s`s`s~3~56~d or ~a~d~57/~b~d~t*`f`s`s`s~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30~16~56~u`s`z`s`s~u~3`s~3P~b~o==`f ~58 `f`b`s or `d`e~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`y~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~57 ~27~30~54 ~rP~tate ~26 ~32 ~27~30~54 I~t~=`sx`f`z`s`b~k`s`d`f ~58 I~t~=`sx`f`z`s`b~l`s`d`f ~58 I~t~=`sx`f`z`s`s`d`s`d`f ~26 ~32 ~27~30~50 ~m=~13~6~41~56~tata~57~30~50 ~k~3i~3J~3~i=~m:~61~56`f~3`z~57~1`s~3`f~30~54 I~t==`sx`f`z`s`b~k`s`d`f ~58 ~k==`f ~26~30J~3~i=~c~m~t~56~m:~61~56`e~3`d~57~57~3~c~m~t~56~m:~61~56`w~3`f`z~57~57~30~53`s~9i~8~6~a~m`f=~c~m~t~56~m:~61~56`f`y~3`f`a~57~57~30~53`s~9i~8~6~a~m`s=~c~m~t~56~m:~61~56`f`e~3`f`c~57~57~30~b~l=~56J/`f`s*~b~l~m~57~7~b~d=~i/`f`s*~b~d~m~30~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~53`s~9i~8~6~b~l=~b~l~7~53`s~9i~8~6~b~d=~b~d~30~b~e=~b~d*~b~l~7~53~6~b~e=~b~e~30~48~54 I~t==`sx`f`z`s`s`d`s`d`f ~26 ~b~m=~c~m~t~56~m:~61~56`w~3`f`z~57~57/`f`s~7~53`s~9i~8~6~b~m=~b~m~30~48~54 I~t==`sx`f`z`s`b~l`s`d`f ~26 I~d=~c~m~t~56~m:~61~56`e~3`d~57~57/`y`z~7~53`s~9i~8~6I~d=I~d ~27~30~27~30~m~b~l=~4`s~3`s~3`s~3`s~3`s~3`s~5~30~51 ~lvg~56~d~57~30~50 ~lve=`s~30~37 i = `f~3#~m~b~l~3`f do~30~m~b~l~9i~8=~56i==#~m~b~l ~58 ~d or ~m~b~l~9i~1`f~8~57~30~lve = ~lve ~1 ~m~b~l~9i~8~30~27~30~lve = ~lve / #~m~b~l~30~32 ~56~d==`s ~58 `s or ~lve~57~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~7~53=~53`s~9~t~a~8~30~54 ~rP~tate ~26 ~32 ~27~30~50 ~36=~u~u~30~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~16~56~u`s`f`s`s~u~3`s~3`s~57~30~ahow~h~a~g~56~36~57~30~a~27`f~56~57~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~6`d~57~57~7~67~b~o~56`s~57 ~27~57|<E>Increase",
        "<S>INFY~30~der=~uI~o~fY~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3I~m~3~o~m~k~3~q`s=`s~3`s~3`s~3`s~3`s~3`s~3`s~3~13~6~12~56~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~30~s~a~d=~s~a~d or ~56`b`e`s*~b~d~t~57~7~h~a~d=~h~a~d or ~56`z`s`s*~b~d~t~57~30~mi~3~l~c~3~e~c~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`f~3`s~30~53=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`z=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~50 ~d`f~3~d`z=~56~d or ~a~d~57/~b~d~t*`f`s`s`s~3~56~l or ~a~l~57/~b~l~t*`f`s`s`s~30can~6s~27~56`f~3`sx`s`z`wB`y~f~f`s~3~13~6~12~56~t~m~c~56~d`f~3~u%`s`d~q~u~57~6~6~t~m~c~56~d`z~3~u%`s`d~q~u~57~57~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30can~6s~27~56`f~3`sx`s`z`w~l`y~f~f`s~3~13~6~12~56~t~m~c~56P~b~o~3~u%`s`z~q~u~57~6~6~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`e~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~57 ~27~30~54 ~rP~tate ~26 ~32 ~27~30~54 I~t~=`sx`s`z`d`cf`s`s`s ~58 I~t~=`sx`s`z`d`ff`s`yf ~58 I~t~=`sx`s`z`d`a~f`s`s`s ~58 I~t~=`sx`s`z`d~l~f`s`s`s ~26 ~32 ~27~30~50 ~m~3~k~3~i=~13~6~41~56~tata~57~3~k~3~i~30~54 I~t==`sx`s`z`d`cf`s`s`s ~26~30I~d=~m:~61~56`f~3`a~57~30~54 I~d==~u`s`s`s`s~u ~26 I~d=~m:~61~56`w~3`f`z~57 ~27~30I~d=~c~m~t~56I~d~57/`f`s~7~53~6I~d=I~d~30can~6s~27~56`f~3`sx`s`z`d`f`y~f~f`s~3~q`s~57~30~48~54 I~t==`sx`s`z`d`ff`s`yf ~26~30~k=~m:~61~56`f~3`d~57~7~i=~m:~61~56`w~3`f`c~57~30~b~d=~c~m~f~56~k~57*~b~d~m~7~b~l=~c~m~f~56~i~57*~b~l~m~30~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~53~6~b~d=~b~d~7~53~6~b~l=~b~l~30~b~e=~b~d*~b~l~7~53~6~b~e=~b~e~30can~6s~27~56`f~3`sx`s`z`d`d`y~f~f`s~3~q`s~57~30~48~54 I~t==`sx`s`z`d`a~f`s`s`s ~26~30I~m=~c~m~t~56~m:~61~56`w~3`f`s~57~57~7~53~6I~m=I~m~7~53~6~a~m`z=~c~m~t~56~m:~61~56`f`f~3`f`z~57~57~30~53~6~a~m`f=~c~m~t~56~m:~61~56`f`y~3`f`a~57~57~7~53~6~a~m`s=~c~m~t~56~m:~61~56`f`e~3`f`c~57~57~30can~6s~27~56`f~3`sx`s`z`d`c`s`s~f`s~3~q`s~57~30~48~54 I~t==`sx`s`z`d~l~f`s`s`s ~26~30~54 ~h~a~d==`s ~26 ~h~a~d=~c~m~t~56~m:~61~56`e~3`d~57~57*~b~d~t ~27~30~54 ~s~a~d==`s ~26 ~s~a~d=~c~m~t~56~m:~61~56`f~3`a~57~57*~b~d~t ~27~30~54 ~s~a~l==`s ~26 ~s~a~l=~c~m~t~56~m:~61~56`w~3`f`z~57~57*~b~l~t ~27~30~27~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~30~54 ~rP~tate ~26 ~32 ~27~30~50 ~36=~u~u~7 ~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~ahow~h~a~g~56~36~57~7 can~6s~27~56`f~3`sx`s`z`d`a`s`s~f`s~3~q`s~57~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`f`s`s`s~3 `s~3 ~51~56~57 ~67~b~o~56`s~57 ~27~57~30~46~6~45~56~57:~33~56`f`e`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~57~57 ~27~57~30~46~6~45~56~57:~33~56`f`d`s`s~3 `s~3 ~51~56~57 can~6s~27~56`f~3`sx`s`z`d~l`s`s~f`s~3~q`s~57 ~27~57|<E>INFY",
        "<S>init.lua~30~28=node~7~21=file~7~18=~17~7~k~rart=uart~7~k~rart_~n~m=~4tx=`s~3rx=`s~5~7~k~f=~21~7~k~q=~28~30~50 ~g~h=~k~f~6exists~56~u~g~h~u~57 or ~60~30~54 ~g~h==~60 ~26~30~k~q~6~29~56~51~56~a~57 ~27~3 `s~57~7uart=`s~7node=`s~7file=`s~7~k~rart_~n~m=~4tx=`f~3rx=`y~5~30~k~rart~6setup~56`z~3`f`f`e`z`s`s~3`d~3~k~rart~6P~l~nI~mY_~o~b~o~p~3~k~rart~6~a~m~bPBI~m~a_`f~3~4tx=`f~3rx=`y~5~57~30~27~30~oet~3~h~f~3~n~a~m~3~a~aI~t~3~der~3~e~fi=~60~3~60~3`f~3~u~p~aP`y`z~2~prr~u~3~u`f~6`s~u~3`z~30~51 ~to~atr~56~atr~57 ~32 pcall~56load~14~56~atr~57~57 ~27~30~51 ~19~56~o~57 ~54 ~k~f~6exists~56~o~57 ~26 ~52~56~o~57 ~27 ~27~30~51 ~aave~56~a~3~o~57 ~k~f~6~22~56~o~3~uw~u~57~7~k~f~6~39~56~a~57~7~k~f~6close~56~57 ~27~30~51 ~bpen~56~o~57 ~54 ~k~f~6exists~56~o~57 ~26 ~k~f~6~22~56~o~3~ur~u~57~7~50 ~a=~k~f~6~40~56~57~7~k~f~6close~56~57~7~32 ~a ~27 ~27~30~51 ~get~a~c~l`f~56~a~57 ~50 ~m=crypto~6new_hash~56~u~a~c~l`f~u~57~7~m:update~56~a~57~7~32 ~13~6~41~56~m:f~55alize~56~57~57 ~27~30~51 ~get~file~56~d~57 ~50 ~s~7~k~f~6~22~56~d~3~ur~u~57~7repeat ~s=~k~f~6~40~42~56~57 ~m~kP~a~27~56~u<~f>~u~6~6~s~57 until ~s==~60~7~k~f~6close~56~57 ~27~30~51 ~k~53~56~o~3~d~3~k~3~a~57~30~50 ~m~3~mP=~u~56~vn~u~6~6~o~6~6~u=~57~9^~vn~8~1~u~3type~56~d~57~30~54 ~mP==~u~14~u ~26 ~d= ~u'~u~6~6~d~6~6~u'~u~30~48~54 ~mP==~utable~u ~26 ~d=~u~4~u~6~6~d~9`f~8~6~6~u~3~u~6~6~d~9`z~8~6~6~u~5~u ~27~30~to~atr~56~o~6~6~u=~u~6~6~d~57~30~54 ~d==~60 ~26 ~k=~k:~59~56~m~3~u~u~57~30~48~54 ~k:~47~56~m~57 ~26 ~k=~k:~59~56~m~3~u%`f~u~6~6~d~57~30~48 ~k=~k~6~6~u~vn~u~6~6~o~6~6~u=~u~6~6~d ~27~30~54 ~a ~26 ~aave~56~k~3~a~57 ~27~7~32 ~k~30~27~30~51 ~53~k~f~g~56~o~3~d~3~a~57 ~konfig=~k~53~56~o~3~d~3~konfig~3~a ~58 ~u~konfig~u or ~60~57  ~27~30~konfig=~bpen~56~u~konfig~u~57~7~19~56~u~konfig~u~57~7~19~56~u~rP~tata~u~57~30~51 ~17~56~6~6~6~57 B~a~27~56~6~6~6~57~7~54 ~g~h ~26 ~18~56~6~6~6~57 ~27~7~54 ~m~kP ~26 ~m~kP~a~27~56~6~6~6~57 ~27 ~27~30~51 B~a~27~56~d~57 ~54 ~k~i ~26 ~k~rart~6~39~56`z~3~d~6~6~u~vn~u~57 ~27 ~27~30~51 ~m~kP~a~27~56~6~6~6~57 ~18~56~6~6~6~57 ~27~30~51 ~rncode~56~d~57~30~54 ~rn==~60 ~26 ~19~56~u~rncode~u~57 ~27~30~37 i=#~rn~3`f~3~2`f do~30~d=~d:~59~56~rn~9i~8~9`z~8~3~rn~9i~8~9`f~8~57~30~27~30~32 ~d~30~27~30~k~i=~60~30~k~rart~6setup~56`z~3`f`f`e`z`s`s~3`d~3`s~3`f~3~k~rart_~n~m~3`s~57~30~k~rart~6on~56`z~3 ~udata~u~3 ~u~vn~u~3~51~56~m~57~30~50 ~t=~m:~47~56~u~56~6~1~57~vn~u~57~30~54 ~t:~47~56~u~tI~a~k~b~o~o~p~k~m~u~57 ~26 ~k~i=~60~30~48~54 ~k~i==`f ~26~30~50 ~k~3~a=~14~6~47~56~t~3~u<~56~9^>~8~1~57>~56~6*~57~u~57~30~54     ~k==~u~a~u ~26 ~k~f~6~22~56~a~6~6~u~6~rP~u~3~uw~1~u~57~7~rP~tate=`f~30~48~54 ~k==~u~p~u ~26 ~k~f~6close~56~57~7~rP~tate=~60~30~48~54 ~k==~u~e~u ~26 ~a=~rncode~56~a~57 ~7 ~k~f~6~39~56~a~6~6~u~vn~u~57~30~48~54 ~k==~u~k~u ~26 ~54 ~a:~47~56~u~56uart~57~u~57==~a:~47~56~u~56file~57~u~57 ~26 ~to~atr~56~a~57 ~27  ~27~30B~a~27~56~u<~n>~u~6~6~t~57~30~48~54 ~t:~47~56~u~k~b~o~o~p~k~m~u~57 ~26~30~46~6~45~56~57:~33~56`y`s`s~3 `s~3 ~51~56~57~30~54 ~k~i~=`f ~26~30~k~i=~u~k~i~u~6~6~get~a~c~l`f~56~u~k~q~u~6~6~k~q~6uptime~56~57~57~30B~a~27~56~k~i~6~6~u~vn~k~l~o:~u~6~6~56~der or `f~57~6~6~u ~j~j:~u~6~6~56~j~j or `f~57~57~30~k~i=~get~a~c~l`f~56~k~i~6~6~u@t*s$e#~m~6'`f~57`~u~57~30~27~30~27~57~30~48~54 ~t==~k~i ~26~30~k~i=`f~7B~a~27~56~u~70~b~i~u~57~30B~a~27~56~u~k~cIP=`s ~iey=~u~6~6~k~q~6chipid~56~57~57~30~54 ~e~fi==`z ~26 ~53cfg~56~u~e~fi~u~3`s~3`f~57 ~27~30~27~30~27~57~30~k~rart~6start~56`z~57~30B~a~27~56~u~l~m~1P~b~e~p=`w~vr~u~57~30~54 ~e~fi>`s ~26 ~19~56~u~e~54i~6lua~u~57 ~27~30~50 ~n~3~q~3~p = ~k~q~6bootreason~56~57~30~17~56~u~n~a~m=~u~6~6~n~6~6~u ~u~6~6~56~q or `s~57~6~6~u ~u~6~6~56~p or `s~57~57~30~54 not ~56~n==`z ~58 ~q==`f`w ~58 ~p>~56~nestart or `z~57~57 ~26~30~37 ~o~3~a ~55 pairs~56~k~f~6list~56~57~57 do~30~54 ~o:~47~56~u%~6run$~u~57 ~26 ~19~56~o~57 ~27~30~54 ~o:~47~56~u%~6mf$~u~57 ~26 ~h~f=~o ~27~30~54 ~o:~47~56~u%~6net$~u~57 ~26 ~oet=~o ~27~30~27~30~54 ~h~f ~26 ~19~56~h~f~57 ~27~30~48 ~19~56~u~e~54i~6lua~u~57 ~27|<E>init.lua",
        "<S>Key~30~66=`s~30~50 ~o~l~3~o~d=`s~3`s~30~50 ~iey~3~aave=~2`f~30~50 ~m_i~3~ieep~3~m~b~r~m=`s~3`s~3~2`f~30~50 ~mick=~46~6~45~56~57~30~50 ~rP~3~town~3~b~i=`z~3`f`e~3`s~30~51 ~iey~town~56~i~3~d~57~30~54 ~iey==~2`f ~26~30~38~6trig~56~i~57~7~iey=~i~7~mick:start~56~57~30~54 ~i~=~b~i ~26~30~54 ~66==`f ~26 ~a~d=~a~d~1~56~i==~i~rP ~58 ~56~a~d<~h~a~d ~58 `s or ~2`s~6`f~57 or `s~6`f~57 ~27~30~54 ~66==`z ~26 ~a~l=~a~l~1~56~i==~i~rP ~58 ~56~a~l<`f ~58 `s or ~2`s~6`f~57 or `s~6`f~57 ~27~30~54 ~66==`y ~26~30~i~ai=~i~ai~1~56~i==`z ~58 ~56~i~ai==`f ~58 `y or ~2`f~57 or ~56~i~ai==`a ~58 ~2`y or `f~57~57~30~a~d=~i~a~l~9~i~ai~8~9`f~8~7~a~l=~i~a~l~9~i~ai~8~9`z~8~30~27~30~27~30~54 ~a~d>~s~a~d ~26 ~a~d=~s~a~d ~27~30~54 ~a~l>~s~a~l ~26 ~a~l=~s~a~l ~27~30~69~56`f~3`f~57~30~27~30~27~30~51 ~ieyPress~56~i~3~d~57~30~54 ~i==~b~i ~26 ~54 ~ieep==`s ~26 ~66=`y~7~69~56`f~3`f~57 ~27 ~32  ~27~30~54 ~66==`f ~26 ~a~d=~a~d~1~56~i==~i~rP ~58 ~56~a~d<~h~a~d ~58 `s or ~2`f~57 or `f~57~30~48~54 ~66==`z ~26 ~a~l=~a~l~1~56~i==~i~rP ~58 ~56~a~l<`z ~58 `s or ~2`f~57 or `f~57 ~27~30~54 ~a~d>~s~a~d ~26 ~a~d=~s~a~d ~27~30~54 ~a~l>~s~a~l ~26 ~a~l=~s~a~l ~27~30~69~56`f~3`f~57~30~27~30~51 ~iey~rP~56~i~3~d~57~30~54 ~56~r~s~b~i>`s or ~i~pY==`f~57 ~58 ~ieep==`s ~26   ~2~2~rnlock~30~54 ~i==~b~i ~26~30~66=~56~66>=`z ~58 `s or ~56~66~1`f~57~57~30~54 ~66==`s ~26 ~53~d~l~56~a~d~3~a~l~3~i~ai~3`f~57 ~27~30~27~30~69~56`f~3`f~57~30~48~2~2~54 ~n~p~g~m>`s or ~i~pY==`s ~26 ~2~2~neg~30~n~p~g~i`f=~n~p~g~i`f~6~6~i~30~54 ~n~p~g~m==~2`f ~26 ~54 ~n~p~g~i~pY==~n~p~g~i`f ~26 ~66=`f~7~69~56`f~3`f~57~7~r~s~b~i=`a~7~n~p~g~i`f=~u~u  ~27 ~27~30~17~56~r~s~b~i~6~6~u  ~u~6~6~i~pY~6~6~u  ~u~6~6~i~6~6~u  ~u~6~6~n~p~g~i`f~6~6type~56~n~p~g~i`f~57~6~6~u  ~u~6~6~n~p~g~i~pY~6~6type~56~n~p~g~i~pY~57~6~6~u ~u~6~6~n~p~g~m~6~6~u  ~u~6~6~56~n~p~g~i`f==~n~p~g~i~pY ~58 ~u~b~i~u or ~u~pr~u~57~57~30~27~30~27~30~mick:register~56`e`s~3 `f~3 ~51~56~57 ~m~b~r~m=`a~7~i~b~r~m=`z~2~2~7~r~s~b~i=~56~r~s~b~i==~2`f ~58 ~2`f or `z`s~57~30~54 ~38~6~40~56~iey~57==`f ~26 ~mick:stop~56~57~7~iey~rP~56~iey~3`f~57~7~m_i=`s~7~ieep=`s~7~38~6trig~56~iey~3~38~6I~o~m~n_~t~b~e~o~3 ~iey~town~57~7~iey=~2`f~30~48~30~54 ~m_i==`z`z ~26 ~m_i=`f`d~7~ieyPress~56~iey~3`s~57~7~ieep=`f ~48 ~m_i=~m_i~1`f ~27~30~27~30~27~57~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~54 ~m~b~r~m > `s ~26 ~m~b~r~m=~m~b~r~m~2`f ~48~54 ~m~b~r~m == `s ~26 ~66=`s~7~53~d~l~56~a~d~3~a~l~3~i~ai~3`f~57~7~m~b~r~m=~2`f~7~r~s~b~i=~2`f ~27  ~2~2~mout~30~54 ~n~p~g~m > `s ~26 ~n~p~g~m=~n~p~g~m~2`f ~48~54 ~n~p~g~m == `s ~26 ~n~p~g~m=~2`f~7~53cfg~56~u~n~p~g~i~pY~u~3~n~p~g~i`f~3`f~57~7~n~p~g~i~pY=~n~p~g~i`f~7~n~p~g~i`f=~u~u~7~17~56~u~neg~iey ~27~u~57 ~27   ~2~2~aave ~iey~30~54 ~i~b~r~m > `s ~26 ~i~b~r~m=~i~b~r~m~2`f ~48~54 ~i~b~r~m == `s ~26 ~54 ~n~p~g~m==~2`f ~26 ~n~p~g~i`f=~u~u ~27~7~i~b~r~m=~2`f~7~17~56~i~b~r~m~57  ~27   ~2~2~rnlock~30~2~2 ~54 ~r~s~b~i > `s ~26 ~r~s~b~i=~r~s~b~i~2`f ~48~54 ~r~s~b~i == `s ~26 ~r~s~b~i=~2`f ~27~30~27~57~30~38~6~65~56~4~38=~4~b~i~3~rP~3~town~5~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~38~6trig~56~rP~3~38~6I~o~m~n_~t~b~e~o~3 ~iey~town~57~30~38~6trig~56~town~3~38~6I~o~m~n_~t~b~e~o~3 ~iey~town~57~30~38~6trig~56~b~i~3~38~6I~o~m~n_~t~b~e~o~3~iey~town~57~30~n~p~g~i~pY=~n~p~g~i~pY or ~u`s`z`f`e~u~30~n~p~g~i`f=~u~u~30~n~p~g~m=~2`f~30~i~b~r~m=~2`f~30~r~s~b~i=~2`f~30~51 ~neg~iey~56~d~57 ~n~p~g~m=~d~7~n~p~g~i`f=~u~u ~27|<E>Key",
        "<S>Logo.run~30~sogo=~sogo or '`s`f`s`a'~7~d~m=~sogo:~61~56`y~3`a~57~1`s~7~50 ~d~d=~sogo:~61~56`f~3`z~57~1`s~30~54 ~a~n==`s ~26~30~mx`f=~14~6char~56`sx`s`s~3`sx`s`y~3`sx`s`s~3`sx`s`y~3`sx`b~f~3`sx`s`y~3`sx`c`s~3`sx`b~f~3`sx~p`s~3`sx`c`f~3`sxB`c~3`sx`y`f~3`sx~f~k~3`sx`s`c~3~30`sx`b`d~3`sx`s`c~3`sx`f`d~3`sx`s`c~3`sx`y~k~3`sx`s~f~3`sx`c~k~3`sx`s~f~3`sx~p`c~3`sx`f`w~3`sx`d`y~3`sx`f`w~3`sx~k`s~3`sx`y`s~3`sx`c`s~3`sx`c`s~3`sx`y`s~3`sx~k`s~57~30~mx`z=~14~6char~56`sx`s`s~3`sx`s`s~3`sx`s~k~3`sx`s`y~3`sx~t`d~3`sx`b~t~3`sx~t`d~3`sx`c~k~3`sx~k`s~3`sx`c~k~3`sx~k`s~3`sx`c~k~3`sx~t~f~3`sx`c~k~3~30`sx~t`d~3`sx`c~k~3`sx~t`d~3`sx`c~k~3`sx~t`d~3`sx`b~f~3`sx~t`d~3`sx`y~t~3`sx~t`d~3`sx`s~k~3`sx`f`d~3`sx`s~k~3`sx`y~k~3`sx`s~k~3`sx~p`c~3`sx~f~f~3`sx`s`s~3`sx`s`s~57~30~mx`y=~14~6char~56`sx`f`d~3`sx`s`c~3`sx`f`d~3`sx`s`c~3`sx~f`d~3`sx~f~f~3`sx`s~k~3`sx`s`c~3`sx`s~k~3`sx`s`c~3`sx~p~p~3`sx`b~f~3`sx`c~p~3`sx`c`c~3~30`sx`c~f~3`sx`c`c~3`sx~p~k~3`sx`b~f~3`sx`s~k~3`sx`s`c~3`sx~k~k~3`sx`s`c~3`sx`d~k~3`sx`s`b~3`sx`s~k~3`sx`s`y~3`sx`d~k~3`sx`s`b~3`sx~k~k~3`sx`f~k~3`sx`b~k~3`sx~f`s~57~30~mx`a=~14~6char~56`sx`s`s~3`sx`s`s~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3~30`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d`c~3`sx`y`f~3`sx`d`c~3`sx`y~t~3`sx`s`y~3`sx`f`d~57~30~48~30~mx`a=~14~6char~56`sx`s`y~3`sx`s~k~3`sx`s`c~3`sx`s`c~3`sx`s~k~3`sx`s`y~3`sx`w`d~3`sx~k`f~3`sx`w`d~3`sx`c`b~3`sx~f`s~3`sx`y`c~3`sx~f`s~3`sx`y~k~3~30`sx`c`s~3`sx`f`d~3`sx`c`s~3`sx`f~p~3`sx`c`s~3`sx`y~f~3`sx`d~k~3`sx`c~t~3`sx`d`c~3`sx`s`b~3`sx~f~p~3`sx`s`c~3`sx~k`s~3`sx~f~p~3`sx~k`s~3`sx`s`s~3`sx~k`s~3`sx`s`s~57~30~mx`y=~14~6char~56`sx`s`s~3`sx`s`s~3`sx~f~f~3`sx`c`b~3`sx`y`s~3`sx`y~k~3`sx`y`s~3`sx`f`d~3`sx`y`s~3`sx`fB~3`sxB~k~3`sx`fB~3`sx~f~p~3`sx`fB~3~30`sx`y`c~3`sx`fB~3`sx`y`c~3`sx`fB~3`sx`y`c~3`sx~fB~3`sx`y`c~3`sx`s`y~3`sx`y`c~3`sx`s`y~3`sx`y`c~3`sx`fB~3`sxB~p~3`sx`fB~3`sx~k`s~3`sx`y`s~3`sx`s`s~3`sx`s`s~57~30~mx`z=~14~6char~56`sx`s~f~3`sx`y~p~3`sx`y`d~3`sx`y`y~3`sx~p`s~3`sx`y`f~3`sx~k`s~3`sx`y`s~3`sx~p`s~3`sx`y`f~3`sx`c`s~3`sx`y`y~3`sx`c`s~3`sx`y`s~3~30`sx~f~p~3`sx`y`b~3`sx`c`c~3`sx~f`c~3`sx`c`c~3`sx`b`c~3`sx~f~p~3`sx`b`b~3`sx`c`s~3`sx`y`s~3`sx`c`s~3`sx`y`s~3`sx~f~f~3`sx`f~f~3`sx`c`s~3`sx`f`d~3`sx`c`s~3`sx`f`d~57~30~mx`f=~14~6char~56`sx`f`d~3`sx~k`s~3`sxB~k~3`sx`c`f~3`sx`d~k~3`sx`c`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3~30`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`s`s~3`sx`s`s~57~30~27~30~51 ~ahow~sogo~56~25~57 ~25:clearBuffer~56~57~30~25:~44~qB~h~56`f`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`f~57~30~25:~44~qB~h~56`a`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`z~57~30~25:~44~qB~h~56`b`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`y~57~30~25:~44~qB~h~56`f`s`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`a~57~30~54 ~d~d==`f ~26 ~25:~44~atr~56~56~a~n==`s ~58 `d`s or `e`s~57~3~56~a~n==`s ~58 `c`y or `e~57~3'~der:'~6~6~der:~47~56'~2~56~6~1~57'~57~57 ~27~30~25:s~27Buffer~56~57~7~27|<E>Logo.run",
        "<S>NTC10.run~30~50 ~o~m~k_`f`s~i = ~4`w`b`f`z`s~3`w`f`c`c`s~3`d`c`e`a`s~3`d`f`b`z`s~3`b`b`z`z`s~3`b`z`w`d`s~3`c`w`s`s`s~3`c`e`z`c`s~3`c`f`b`c`s~3`e`d`a`c`s~3~30`e`e`y`a`s~3`e`z`a`z`s~3`a`w`c`c`s~3`a`b`s`d`s~3`a`a`c`a`s~3`a`z`y`a`s~3`a`s`f`c`s~3`y`d`f`z`s~3`y`c`z`s`s~3`y`a`y`d`s~3~30`y`z`c`c`s~3`y`f`s`a`s~3`z`w`e`s`s~3`z`d`s`c`s~3`z`c`c`d`s~3`z`e`a`s`s~3`z`a`f`d`s~3`z`y`s`z`s~3`z`f`w`z`s~3`z`s`d`d`s~3~30`f`w`w`s`s~3`f`d`w`b`s~3`f`d`s`w`s~3`f`b`z`c`s~3`f`c`a`c`s~3`f`e`b`f`s~3`f`e`s`s`s~3`f`a`y`z`s~3`f`y`c`d`s~3`f`y`s`b`s~3~30`f`z`a`w`s~3`f`f`w`a`s~3`f`f`a`z`s~3`f`s`w`z`s~3`f`s`a`e`s~3`f`s`s`s`s~3`w`e`b`a~3`w`f`c`c~3`d`b`b`d~3`d`a`s`d~3~30`d`s`e`d~3`b`b`z`z~3`b`a`s`a~3`b`s`w`d~3`c`d`s`d~3`c`e`y`z~3`c`z`c`d~3`c`s`f`c~3`e`b`b`c~3`e`e`a`c~3~30`e`y`z`c~3`e`f`f`d~3`a`w`f`d~3`a`b`z`c~3`a`e`a`a~3`a`y`c`d~3`a`z`s`z~3`a`s`a`z~3`y`d`d`d~3`y`b`a`z~3~30`y`c`s`z~3`y`a`c`d~3`y`y`a`s~3`y`z`f`c~3`y`s`w`d~3`z`w`d`c~3`z`d`b`d~3`z`b`b`a~3`z`c`b`a~3`z`e`d`s~3~30`z`a`d`d~3`z`a`s`s~3`z`y`f`c~3`z`z`y`a~3`z`f`e`d~3`z`s`d`z~3`z`s`f`z~3`f`w`a`z~3`f`d`b`c~3`f`d`f`y~3~30`f`b`e`f~3`f`c`w`y~3`f`c`y`b~3`f`e`d`z~3`f`e`y`s~3`f`a`d`s~3`f`a`y`z~3`f`y`d`e~3`f`y`a`f~3`f`z`w`d~3~30`f`z`e`c~3`f`z`f`c~3`f`f`b`d~3`f`f`a`f~3`f`f`s`e~3`f`s`b`f~3`f`s`y`d~3`f`s`s`c~3`w`b`e~3`w`a`e~6`z~3~30`w`f`c~6`a~3`d`d`d~6`d~3`d`c`z~3`d`y`c~6`a~3`d`f`f~6`a~3`b`d`b~6`a~3`b`c`a~6`z~3`b`a`f~6`d~3`b`z`s~6`z~5~30~2~2 ~2`z`s ~m~b `w`d~30~50 Index = `z     ~2~2~aave the last tag ~55dex~30~51 ~nead~l~t~k~56I~b~57~30~50 ~l~t~k~3~hax~3~h~55~3~hean=~4~5~3`s~3`a`s`w`e~3`s~30~37 i = `f~3`b~3`f do~30~l~t~k~9i~8=adc~6~40~56`f~3I~b~57~30~54 ~hax < ~l~t~k~9i~8 ~26 ~hax = ~l~t~k~9i~8 ~27~30~54 ~h~55 > ~l~t~k~9i~8 ~26 ~h~55 = ~l~t~k~9i~8 ~27~30~hean = ~hean ~1 ~l~t~k~9i~8~30~2~2 ~17~56~l~t~k~9i~8~57~30~27~30~hean = ~56~hean ~2 ~hax ~2 ~h~55~57 / `e~30~2~2 ~17~56~h~55~3~hax~3~hean~57~30~32 ~hean~30~27~30~51 ~get~68~56I~b~3~n~a~3~d~k~k~57~30~d~k~k = ~d~k~k or `y~6`y ~7 ~n~a = ~n~a or `f`s`s`s`s~30~50 ~d_~o~m~k~3 ~68 = ~56`a`s`w`c~2~nead~l~t~k~56I~b~57~1`f`e`s~57/`f`z`s`s~3 `z          ~2~2~a~b~s~b~30~54 ~d_~o~m~k > `z~6`e or ~d_~o~m~k < `s~6`z`z ~26 ~32 ~2`f ~27~30~50 ~n_~o~m~k = ~56~n~a * ~d_~o~m~k~57 / ~56~d~k~k ~2 ~d_~o~m~k~57~30~2~2~17~56~d_~o~m~k~57~30~54 ~o~m~k_`f`s~i~9Index~8 < ~n_~o~m~k ~26 Index = `z ~27~30~37 i = Index ~3 `f`f`w ~3 `f do~30~54 ~o~m~k_`f`s~i~9i~8 <= ~n_~o~m~k ~26 Index = i~2`e ~7 ~68 = i ~7 break ~27~30~27~30~50 ~atr`f = ~o~m~k_`f`s~i~9~68~2`f~8 ~2 ~o~m~k_`f`s~i~9~68~8~30~50 ~atr`z = ~56~o~m~k_`f`s~i~9~68~2`f~8 ~2 ~n_~o~m~k~57 / ~atr`f~30~32 tonumber~56~14~6~15~56~u%~6`ff~u~3~56~68 ~2 `z`f ~1 ~atr`z~57~57~57~30~27|<E>NTC10.run",
        "<S>UPData~30~k~f=~56~21 or file~57~30~53~k~f~g~56~u~der~u~3~u`y~6`a`d~u~57~30~k~f~6remove~56~u~rP~tata~u~57~30~k~f~6remove~56~u~g~h~u~57~30~37 ~o~3~a ~55 pairs~56~k~f~6list~56~57~57 do~30~54 ~o:~47~56~u%~6Bak$~u~57 ~26 ~k~f~6remove~56~o~57 ~27~30~50 ~a~o=~o:~47~56~u~56~6~1~57%~6~rP$~u~57~30~54 ~a~o==~u~sogo~6run~u ~58 ~k~f~6exists~56~a~o~57 ~26~30~k~f~6remove~56~a~o~6~6~u~6~rP~u~57~30~48~30~54 ~a~o ~26 ~k~f~6remove~56~a~o~57~7~k~f~6rename~56~o~3~a~o~57 ~27~30~27~30~27|<E>UPData",
        "<S>Wifi.lua~30~e~54i=~4~4ssid=~u~65~u~3pwd=~u`d`d`d`d`d`d`d`d~u~5~3~4ssid=~u~k~h~k~k~2~kxjdwx~u~3pwd=~u`e`s`s`y`d`f`w`b`f`e~u~5~5~30~19~56~u~e~54i~u~57~30~m~kP~3IP~3~konnected=~60~3~60~3~34~30~50 ~51 ~a~27~56~36~57 ~m~kP:s~27~56~36~6~6~u~vn~u~57  ~27~30~51 ~m~kP~a~27~56~d~57 ~m~kP=~56pcall~56~a~27~3~d~57 ~58 ~m~kP or ~60~57 ~27~30~50 ~m~i~3~k~i~3~e~m~3~mick~3~n~m~i=`f~3~34~3`f~3~46~6~45~56~57~3`f~30sv = net~6~45~aerver~56net~6~m~kP~3 `y`s~57~30sv:listen~56`f`w`w`d~3 ~51~56coon~57 ~m~kP=coon~7~k~i=~34~30coon:on~56~ureceive~u~3 ~51~56~r~3~m~57~30~54 ~k~i ~26~30~37 ~t ~55 ~m:g~47~56'~56~6~2~57~vn'~57 do~30~50 ~k~3~a=~14~6~47~56~t~3~u<~56~9^>~8~1~57>~56~6*~57~u~57~30~54     ~k==~u~a~u ~26 ~21~6remove~56~a~6~6~u~6Bak~u~57~7~21~6~22~56~u~rpdate~6tmp~u~3~uw~1~u~57~7~rP~tate=`f~30~48~54 ~k==~u~p~u ~26 ~21~6close~56~57~7~21~6rename~56~a~3~a~6~6~u~6Bak~u~57~7~21~6rename~56~u~rpdate~6tmp~u~3~a~57~7~rP~tate=~60~30~48~54 ~k==~u~e~u ~26 ~21~6~39~56~a~6~6~u~vn~u~57~30~48~54 ~k==~u~k~u ~26 ~to~atr~56~a~57 ~27~30~m~kP~a~27~56~u<~n>~u~6~6~t~57~30~27~30~48~30~54 ~m==~m~i~6~6~u~vn~u ~26 ~k~i= true ~7~m~kP~a~27~56~u~70~b~i~vn~u~57 ~27~30~27~30~27~57~30~m~i=~u~k~i~u~6~6~get~a~c~l`f~56~u~kxjdwx~u~6~6~28~6uptime~56~57~57~7~m~kP~a~27~56~m~i~6~6~u~vn~k~l~o:~u~6~6~56~der or `f~57~6~6~u ~j~j:~u~6~6~56~j~j or `f~57~57~30~m~i=~get~a~c~l`f~56~m~i~6~6~u@t*s$e#~m~6'`f~57`~u~57~7~m~kP~a~27~56~u<~r>~u~6~6~56IP or `s~57~57~30~27~57~30~51 ~53~e~54i~56~a~3P~57~30~50 add~3~atr=`f~3~u~u~30~37 i = `f~3#~e~54i~3`f do~30~54 ~e~54i~9i~8~6ssid==~a ~26 ~e~54i~9i~8~6pwd=P~7add=`s~7~17~56~u~l~t~t~u~57 ~27~30~atr=~atr~6~6~u      ~4ssid=~v~u~u~6~6~e~54i~9i~8~6ssid~6~6~u~v~u~3pwd=~v~u~u~6~6~e~54i~9i~8~6pwd~6~6~u~v~u~5~3~vn~u~30~27~30~54 add == `f ~26~30table~6~55sert~56~e~54i~3~4ssid=~a~3pwd=P~5~57~30~atr=~atr~6~6~u      ~4ssid=~v~u~u~6~6~a~6~6~u~v~u~3pwd=~v~u~u~6~6P~6~6~u~v~u~5~3~vn~u~30~27~30~atr=~atr:~59~56~u^ ~1~u~3~u~u~57:~59~56~u~9~vn~3~8~1$~u~3~u~u~57~30~atr=~u~e~54i=~4~u~6~6~atr~6~6~u~5~u~7 ~aave~56~atr~3~u~e~54i~u~57~30~27~30w~54i~6mode~56~lP==`s ~58 `f or `y~57~7w~54i~6start~56~57~30w~54i~6sta~6on~56~ugot_ip~u~3~51~56~p~3I~57~30~54 ~oet ~58 ~n~a~m==`f ~26 ~19~56~oet~57 ~27~30IP=I~6ip~7~n~a~m=`s~7~17~56IP~57~7~konnected=true~30~54 ~53IP ~26 ~53IP~56IP~3I~6netmask~3I~6gw~57 ~27~30~54 ~koned ~26 ~koned~56IP~3I~6netmask~3I~6gw~57 ~27~30~27~57~30w~54i~6sta~6on~56~udisconnected~u~3~51~56~p~3I~57 ~konnected=~34~30w~54i~6sta~6disconnect~56~57~7 ~mick:start~56~57~30~54 ~t~pB~r~g ~26 ~17~56~u~tisconnect~u~57 ~27~30~27~57~30~51 ~a~k~l~o~56~57~30~54 ~t~pB~r~g ~26 ~17~56~u~acan ~e~54i~u~57 ~27~30w~54i~6sta~6scan~56~4hidden=`s~5~3 ~51~56err~3arr~57~30~54 err ~26 w~54i~6sta~6disconnect~56~57~30~48~30~37 i~3ap ~55 ipairs~56arr~57 do~30~37 j~3ap`f ~55 pairs~56~e~54i~57 do~30~54 ap~6ssid==ap`f~6ssid ~26 ~mick:stop~56~57~7w~54i~6sta~6~65~56ap`f~57~7~32 ~27~30~27~30~27~30~27~30~27~57~30~54 ~t~pB~r~g ~26 ~17~56~u~kan~3t ~f~55d~u~57 ~27~30~27~30~mick:register~56`f`e`s`s`s~3 `f~3 ~a~k~l~o~57~7~mick:start~56~57~30~r~tP = net~6~45~r~tP~aocket~56~57~7~r~tP:listen~56`f`w`d`d~57~30~r~tP:on~56~ureceive~u~3 ~51~56s~3d~3p~3ip~57 s:s~27~56p~3ip~3~a~aI~t~6~6~u:~u~6~6~56ip:~47~56~u`f`w`z%~6`f`c`d%~6`a%~6~u~57 ~58 ~u`f`w`z~6`f`c`d~6`a~6`f~u or IP~57~57 ~27~57~30~54 ~lP==`f ~26 w~54i~6ap~6~65~56~4ssid=~a~aI~t~3pwd=~u`d`d`d`d`d`d`d`d~u~5~57 ~27~30~a~k~l~o~56~57|<E>Wifi.lua",
        "<S>ZTE~30~der=~uZ~m~p~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m=`s~3`s~3`s~3`s~3`s~30~s~a~d=~s~a~d or ~56`e`w*~b~d~t~57~7~h~a~d=~h~a~d or ~56`a`f~6`e*~b~d~t~57~30~mi~3~l~c~3~e~c~3~kI~t~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`s~3`f~3`s~30~53=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~5~30~51 ~16~56I~t~3~d`f~3~d`z~3~d`y~3~d`a~57~30~d`z=~14~6~15~56~u%`s`a~q~u~3~d`z~57~7~d`y=~14~6~15~56~u%`s`a~q~u~3~d`y~57~7 ~d`a=~14~6~15~56~u%`s`a~q~u~3~d`a~57 ~7~30~d`f=~13~6~12~56~d`f~6~6~d`z~6~6~d`y~6~6~d`a~57 ~7 can~6s~27~56`f~3I~t~3~d`f~57~30~27~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~16~56`sx`f`z`b`d`s`s`z`s~3~u`b`d`z`s~u~3~u`c`s`s~u~3~d/~b~d~t*`f`s~3~l/~b~l~t*`f`s~57~30~16~56`sx`f`z`b`d`s`s`z`z~3~u`b`d`z`z~u~3~u`c`s`s~u~3~d/~b~d~t*`f`s~3~l/~b~l~t*`f`s~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~16~56`sx`f`z`b`d`s`s`y`s~1~kI~t~3~u`b`d`y`s~u~3P~b~o==`f ~58 `s or `z`e`c~3`s~3`s~57~7~53~10~56`s~57~30~27~30~2~2~51 ~aPI~b~56~57 ~aP~h=`f~2~aP~h~7~38~6~39~56`z`b~3~aP~h~57~7~53~k~f~g~56~u~aP~h~u~3~aP~h~3`f~57 ~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`y~30~54 ~g~h ~26 ~17~56~14~6~15~56~u%`s`d~q~u~3I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~57 ~27~30~54 ~rP~tate ~58 ~g~h==~60 ~26 ~32 ~27~30~54 ~kI~t==`s ~26 ~kI~t=~c~m~t~56~14~6~15~56~u%`s`d~q~u~3I~t~57:~61~56`y~3`a~57~57*`z`e`c ~27~30~54 I~t~=`sx`fa`s`s`b`d`f`s~1~kI~t*`z`e`c ~26 ~32 ~27~30~50 ~m=~p~m~c~56~tata~57~30~50 I~3J~3~i~3~d=~m:~61~56`y~3`a~57~3~c~m~t~56~m:~61~56`e~3`d~57~57~3~c~m~t~56~m:~61~56`w~3`f`z~57~57~3~c~m~t~56~m:~61~56`f`y~3`f`c~57~57~30~54 I==~u`s`s~u ~26 ~53~6I~d=J/`f`s~30~48~54 I==~u`a`f~u ~26 ~53~6I~l=J/`f`s*I~l~m~7I~e=~53~6I~l*~53~6I~d~7~53~6I~e=I~e~30~48~54 I==~u`a`z~u ~26~30~b~l=~lvg~56~i/`f`s*~b~l~m~57~7~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~b~m=~d/`f`s~7~b~d=J/`f`s*~b~d~m~7~b~e=~b~l*~b~d~30~53~6~b~l=~b~l~7~53~6~b~m=~b~m~7~53~6~b~d=~b~d~7~53~6~b~e=~b~e~30~48~54 I==~u`d`a~u ~26 ~53~6~h~l=~d/`f`s ~27~30~54 ~g~h ~26~30~17~56~14~6~15~56~u%`s`d~q~u~3I~t~57 ~6~6~u  ~u~6~6~m:~61~56`f~3`z~57~6~6~u  ~u~6~6I~6~6~u  ~u~6~6~56J/`f`s~57~6~6~u  ~u~6~6~56~i/`f`s~57~6~6~u  ~u~6~6~56~d/`f`s~57~57~30~27~30~27~30~m~b~l=~4`s~3`s~3`s~3`s~3`s~3`s~5~30~51 ~lvg~56~d~57~30~50 ~lve=`s~30~37 i = `f~3#~m~b~l~3`f do~30~m~b~l~9i~8=~56i==#~m~b~l ~58 ~d or ~m~b~l~9i~1`f~8~57~30~lve = ~lve ~1 ~m~b~l~9i~8~30~27~30~lve = ~lve / #~m~b~l~30~32 ~56~d==`s ~58 `s or ~lve~57~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~30~54 ~rP~tate ~26 ~32 ~27~30~54 ~o~m~k>=`s ~58 ~o~m~k<=`w`e ~26 ~o~m~k=~get~68~56`e~57~7~53~6I~m=~53~6~b~m~7~53~6~b~m=~o~m~k~7~b~m=~o~m~k ~27~30~50 ~36=~u~u~30~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~ahow~h~a~g~56~36~57~30~54 id ~= ~u`s`s~u ~26 ~16~56`sx`f~l`b`d`s`s`f`z~1~kI~t~3~u`b`d`f`s~u~3`s~3`s~3`s~57 ~27~30~27~57~30can~6setup~56~4speed=`e`s`s~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57  ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `z~57~57 ~27~57|<E>ZTE",
        "<S>Check.mf~30~50 ~s~p~t=`f`z~30~fI~b=`f`y~7~49=~u~e~m~u~7~k~f~g`f=~u~u~30~aY~a=~aY~a or `f~7~j~j=~j~j or '~kxjdwx'~30~f~h~e~3~f~h~m~3~aP~h~3~i~pY~3~lJ~c~3P~b~o~3~f~b~o=`f`e`s`s~3`a`e~3`s~3`f~3`s~3`s~3`s~30~b~l~t~3~b~l~m~3~b~d~t~3~b~d~m~3I~l~m=`f~3`f~3`f~3`f~3`f~30~a~h~e~3~c~j~3~i~rP~3~tB~s~3~a~tP=`f~3`s~3`z~3`y~3`s~30~m~h~k~3~m~h~e~3~h~a~d~3~s~a~d~3~k~s~d=`b`s~3`y`s`s`s~3~60~3~60~3`s~6`a`e~30~a~b~k~3~c~ji~3~l~m=`f`s`s~3`s~3`s~30~m~atr=~4~uZ~m~p~6~55f~u~3~u~35~6~55f~u~3~uIncrease~6~55f~u~3~uI~o~fY~6~55f~u~3~u~pP~a`c`s`z`s~6~55f~u~5~30I~o~f=~m~atr~9~t~n~1`f~8~30~50 ~m~3~k=~46~6~45~56~57~3`f~30~38~6~65~56~4~38=~s~p~t~3dir=~38~6~b~r~m~5~57~30~m:~33~56`e`s`s~3 `f~3 ~51~56~57 ~k=`f~2~k~7~38~6~39~56~s~p~t~3 ~56~konnected ~58 `f or ~k~57~57~27~57~30~53cfg=~53~k~f~g~30~51 ~53~k~f~g~56~o~3~d~3~a~57 ~k~f~g`f=~k~53~56~o~3~d~3~k~f~g`f~3~a ~58 I~o~f or ~60~57  ~27~30~51 ~aave~mi~56~57 ~53~k~f~g~56~u~h~l~c~u~3~h~l~c~57~7~53~k~f~g~56~u~h~e~c~u~3~h~e~c~57~7~53~k~f~g~56~u~h~mi~u~3~h~mi~3`f~57 ~27~30~51 ~53~t~n~56~d~57~30~54 ~35~1Z~m~p~1Increase<=`f ~26 ~32 ~27~30~50 ~a=~56~t~n==`z ~58 `f or ~56~t~n~1`z~57~57~30~37 ~i~3~m ~55 pairs~56~4Z~m~p~3~35~3Increase~5~57 do~30~54 ~i>=~a ~58 ~m==`f ~26 ~53cfg~56~u~t~n~u~3~i~2`f~3`f~57~7~32 ~27~30~27~30~t~n=`z~7~53~t~n~56~57~30~27~30~51 ~53~a~n~56~d~57 ~54 ~t~aP==`f ~26 ~53cfg~56~u~a~n~u~3~d~3`f~57 ~27 ~27~30~51 ~53~t~d~56~d~57~30~54 ~t~aP==`f ~26~30~54 ~t~d==`s ~26 ~t~d=`f~30~48~54 ~t~d==`f ~26 ~t~d= u`dg`z~6st`b`e`c`b_pi_`f`y`zx`c`a ~58 `z or `s~30~48~54 ~t~d==`z ~26 ~t~d= u`dg`z~6ssd`f`y`s`w_`f`z`dx`c`a_noname`s ~58 `y or `s~30~48~54 ~t~d==`y ~26 ~t~d=`s ~27~30~53cfg~56~u~t~d~u~3~t~d~3`f~57~30~27~30~27~30~51 ~getI~o~f~56~57~30~50 ~m~atr=~u ~a~l=~u~6~6~a~l~6~6~u ~a~d=~u~6~6~a~d~6~6~u ~b~d~m=~u~6~6~b~d~m~6~6~u ~b~l~m=~u~6~6~b~l~m~6~6~30~u ~h~e=~u~6~6~h~e~6~6~u ~a~l`z=~u~6~6~a~l`z~6~6~u ~aP~h=~u~6~6~aP~h~6~6~30~u ~g~d=~u~6~6~g~d~6~6~u ~f~a=~u~6~6~f~a~6~6~u ~a~t=~u~6~6~a~t~6~6~u ~s~h~e=~u~6~6~s~h~e~30~m~atr=~m~atr~6~6~u ~b~d~t=~u~6~6~b~d~t~6~6~u ~s~a~d=~u~6~6~s~a~d~6~6~u ~s~a~l=~u~6~6~s~a~l~6~6~30~u P~b~o=~u~6~6P~b~o~6~6~u ~c~j=~u~6~6~c~j~6~6~u ~h~a~d=~u~6~6~h~a~d~6~6~30~u ~i~pY=~u~6~6~i~pY~6~6~u ~m~h~a=~u~6~6~m~h~k~6~6~u~k~u~6~6~m~h~e~6~6~u~e~u~30~m~atr=~m~atr~6~6~u ~i~a`f=~u~6~6~i~a`f~9`f~8~6~6~u~d~u~6~6~i~a`f~9`z~8~6~6~u ~i~a`z=~u~6~6~i~a`z~9`f~8~6~6~u~d~u~6~6~i~a`z~9`z~8~6~6~30~u ~i~a`y=~u~6~6~i~a`y~9`f~8~6~6~u~d~u~6~6~i~a`y~9`z~8~6~6~u ~i~a`a=~u~6~6~i~a`a~9`f~8~6~6~u~d~u~6~6~i~a`a~9`z~8~6~6~30~u ~t~k`f=~u~6~6~t~k`f~6~6~u ~t~k`z=~u~6~6~t~k`z~6~6~u ~t~k`y=~u~6~6~t~k`y~6~6~u ~t~k`a=~u~6~6~t~k`a~30~m~atr=~m~atr~6~6~u ~lJ~c=~u~6~6~lJ~c~6~6~u ~tB~s=~u~6~6~tB~s~6~6~u ~h~fs=~u~6~6~h~fs~6~6~u ~i~ai=~u~6~6~i~ai~30~50 ~aY~a`f=~u ~aY~a=~u~6~6~aY~a~6~6~u ~35=~u~6~6~35~6~6~u Increase=~u~6~6Increase~6~6~u Z~m~p=~u~6~6Z~m~p~6~6~30~u ~t~aP=~u~6~6~t~aP~6~6~u ~t~n=~u~6~6~t~n~6~6~u ~a~n=~u~6~6~a~n~6~6~u ~t~d=~u~6~6~t~d~30~17~56~m~atr~6~6~aY~a`f~57~7B~a~27~56~aY~a`f~57~30~27~30~51 ~rnlock~56~d~57~30~50 ~m~3~a~c~l`f=~4~u~t~aP~u~3~u~35~u~3~uZ~m~p~u~3~uIncrease~u~3~uI~o~fY~u~3~u~pP~a`c`s`z`s~u~5~3`s~30~37 ~i~3~a ~55 pairs~56~m~57 do~30~a~c~l`f = crypto~6new_hash~56~u~a~c~l`f~u~57~30~a~c~l`f:update~56~u>~6<~kxjdwx~6~rnlock>~6<~u~6~6~28~6chipid~56~57~6~6~a~57~30~a~c~l`f=~13~6~41~56~a~c~l`f:f~55alize~56~57~57~30~54 ~a~c~l`f:~47~56~u~6~6~6~6~6~6~6~6$~u~57==~d ~26 ~17~56~u~rnlock=~u~6~6~a~57~7~53cfg~56~a~3`f~3`f~57 ~27~30~27~30~27~30~51 ~53~10~56~m~57~30~50 ~m~fs=~h~fs~1~56tonumber~56~m~57~2`y`s~57*~f~a ~7~m~fs=~56~m~fs>`f`s`f`y ~58 `f`s`f`y or~56~m~fs < ~h~fs ~58 ~h~fs or ~m~fs~57~57~30~54 ~62~6abs~56~m~fs~2~fs~57>`f`s ~26 ~10:~11~56`f`s`z`y~2~56P~b~o==`s ~58 ~m~fs or `s~57~57~7~fs=~m~fs ~27~30~27~30~51 ~70~dal~56~57~30~54 ~lJ~c > `s ~26  ~54 ~56~a~d~2~b~d~57<`f ~26 ~53~d~l~56~a~d~2~lJ~c~3~a~l~57 ~48~54 ~56~a~d~2~lJ~c~2~b~d~57<`f ~26 ~53~d~l~56~a~d~3~a~l~57 ~27 ~27~30~27~30~51 ~mo~a~56~d~57~30~50 ~c~c=~62~6floor~56~d/`y`c`s`s~57~7~50 ~h~h=~62~6floor~56~56~d~2~c~c*`y`c`s`s~57/`c`s~57~7~50 ~a~a=~62~6floor~56~d~2~h~h*`c`s~2~c~c*`y`c`s`s~57~30~32 ~14~6~15~56~u%`s`zd~u~3~c~c~57~6~6~u:~u~6~6~14~6~15~56~u%`s`zd~u~3~h~h~57~6~6~u:~u~6~6~14~6~15~56~u%`s`zd~u~3~a~a~57~30~27~30~51 ~c~m~t~56~d~57 ~32  ~14~6~15~56~u%d~u~3~u`sx~u~6~6~d~57 ~27         ~2~2~cex ~m~b ~tec~30~51 ~t~m~c~56~d~3~a~57 ~32 ~14~6~15~56~a or ~u%`s`a~q~u~3~d~57 ~27              ~2~2 ~tec ~mo ~cex~30~51 ~p~m~c~56~d~57 ~32 ~13~6~41~56~d~57 ~27                     ~2~2 ~pncoder ~tata ~mo ~cex~30~51 ~63~56~a~3~d~3~b~57 ~32 ~14~6~15~56~a~3~d~57~6~6~56~b or ~u~u~57 ~27~30~51 ~neset~56~57~30~k~f~g`f=~u~s~h~e=`y`e`s`s~vn~s~f~a=`s~vn~s~a~l=`a`s~vn~vn~h~l~c=`s~vn~h~e~c=`s~vn~h~mi=`s~vn~vn~b~d~t=`f~vn~u~6~6~30~u~b~d~m=`f~vnI~l~m=`f~vn~b~l~m=`f~vn~f~a=`z`s~vn~fs=`e`s`s~vn~h~fs=`a`s`s~vn~vn~a~t=`s~vn~a~d=`e`a~6`c~vn~g~d=`e`z~6`c~vn~u~6~6~30~u~a~l=`f`e~vn~a~l`z=`s~vn~a~h~e=`f~vn~h~e=`y`e`s`s~vn~vn~a~t~m=~a~t*`c`s~vn~vn~c~j=`s~vn~u~30~aave~56~k~f~g`f~3I~o~f~57~30~27~30~51 ~ahow~h~a~g~56~36~57~30~50 ~l`f~3~l`z=~h~e/~b~d~3~m~h~e/~b~d~30~36=~u~49=~u~6~6~49~6~6~u ~10=~u~6~6~fs~6~6~u ~a~t~m=~u~6~6~a~t~m~6~6~u ~a~b~k=~u~6~6~a~b~k~6~6~30~u ~l~c=~u~6~6~63~56~u%`s~6`zf~u~3~l~c~57~6~6~u ~mi=~u~6~6~mo~a~56Y~a==`s ~58 ~mi or Y~a~57~6~6~u ~e~c=~u~6~6~63~56~u%`s~6`zf~u~3~e~c~57~6~6~30~u ~h~e~c=~u~6~6~63~56~u%`s~6`zf~u~3~h~e~c~57~6~6~u ~h~l~c=~u~6~6~63~56~u%`s~6`zf~u~3~h~l~c~57~6~6~u ~h~mi=~u~6~6~mo~a~56~h~mi~57~6~6~u ~b~s=~u~6~6~b~s~6~6~36~30~54 ~b~e > ~56~h~e~1`z`e~57 ~26 ~54 ~a~l>~l`f ~26 ~53~d~l~56~a~d~3~l`f~57 ~27 ~27~30~54 ~b~m >= ~m~h~k ~58 ~b~e > ~56~m~h~e~1`z`e~57 ~26 ~54 ~b~l>~l`z ~26 ~53~d~l~56~a~d~3~l`z~57~27 ~27~30~50 ~lh~3~eh=~56~b~l/`y`c`s`s~57~3~56~56I~e==`s ~58 ~b~e or I~e~57/`y`c`s`s~57~30~l~c=~l~c~1~lh~7~h~l~c=~h~l~c~1~lh~7~e~c=~e~c~1~eh~7~h~e~c=~h~e~c~1~eh~30~54 ~49==~u~e~m~u ~26~30~54 ~b~l > `s~6`e ~26 ~49=~u~l~u ~27~30~48~54 ~49==~u~m~u ~26~30~54 Y~a==`s ~26 ~67~b~o~56`s~57~7~49=~u~e~m~u ~48 Y~a=Y~a~2`f~7~67~b~o~56`f~57 ~27~30~48~54 ~49==~u~l~u ~26~30~54 ~a~l`z == `s ~26 ~54 ~l~m > `f`e ~26 ~49=~u~k~u~7~aave~mi~56~57 ~27~30~48~54 ~b~d>=~g~d ~58 ~l~m>`e ~58 ~b~l>`f ~26 ~49=~uB_~u~7~53~d~l~56~a~d~3~a~l`z~57~7~o~a~l=~a~l`z ~27~30~2~2~5~48 ~54~56~b~d>=~a~d`z&&~l~m>`e&&~b~l>`f~57~4~49=~uB_~u~7~aave~m~56~57~7~5~30~48~54 ~49==~uB_~u ~26~30~54 ~b~l > `f ~26 ~49=~uB~u~7~53~d~l~56~a~d~3~a~l`z~57 ~48 ~70~dal~56~57 ~27~30~48~54 ~49==~uB~u ~26~30~54 ~l~m > `f`e ~26 ~49=~u~k~u~7~aave~mi~56~57 ~27~30~54 ~b~d > ~g~d ~26~30~50 ~d`s=~56~a~d~2~g~d~57~30~50 ~d`f=~d`s~2~56~b~d~2~g~d~57~30~50 ~d`z=~a~l`z/~d`s~30~50 ~d`y=~d`f*~d`z~7~54 ~d`y<`f ~26 ~d`y=`f ~27~30~54 ~d`y<~o~a~l ~26 ~53~d~l~56~a~d~3~d`y~57~7~o~a~l=~d`y ~27~30~27~30~48~54 ~49==~u~k~u ~58 ~a~t > `s ~26~30~54 ~b~l < `s~6`e ~26 ~70~dal~56~57 ~27 ~7 ~a~t~m=~a~t~m~2`f~30~54 ~a~t~m==`s ~26 ~aave~mi~56~57~7~49=~u~a~u~7~10:~11~56`f`s`z`y~57 ~27~30~48~54 ~49==~u~a~u ~26 ~67~b~o~56`f~57 ~27~30~54 ~a~l~2~b~l<`f ~58 ~49 ~=~u~a~u ~26 ~49=~u~l~u ~27~30~54 ~49:~47~56~u^~9~lB~k~8$~u~57 ~26 ~53~10~56~b~m~57~7~h~mi=~h~mi~1`f~7~mi=~mi~1`f ~27~30~54 ~t~k~l~9~i~ai~8~=`s ~26~30B~h~55=~t~k~l~9~i~ai~8*~tB~s~7BPi=~56~a~d~2B~h~55~57/`f`s`s~30~a~b~k=~56~b~d~2B~h~55~57/BPi~7~a~b~k=~63~56~u%`s~6`zf~u~3~a~b~k~57~1`s~30~a~b~k=~56~a~b~k>`f`s`s ~58 `f`s`s or ~56~a~b~k<`s ~58 `s or ~a~b~k~57~57~30~27~30~54 ~c~j > `s ~26~30~54 ~b~l > `f ~26~30~54 ~c~ji <= ~c~j ~26~30~c~ji = ~c~ji ~1 `f~30~53~d~l~56~a~d~3~56~56~a~l ~2 `z~57 / ~c~j~57 * ~c~ji ~1 `z ~57~30~27~30~48  ~c~ji = `s ~7~53~d~l~56~a~d~3`z~57 ~27~30~27~30~l~m=~56~b~l<`f ~58 ~l~m~1`f or `s~57~30~17~56~36~57~7~54 ~69 ~26 ~69~56~36~57 ~27~30~54 ~s~b~g ~26 ~s~b~g~56~36~57 ~27~30~27~30~54 ~21~6exists~56I~o~f~57 ~26 ~k~f~g`f=~bpen~56I~o~f~57 ~48 ~neset~56~57 ~27~30~19~56I~o~f~57~7~19~56I~o~f:~47~56'~56~6~2~57%~6~55f'~57~57~7~k~f~g`f=~bpen~56I~o~f~57~30~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a=~i~a`f or ~4`e`a~6`c~3`f`e~5~3~i~a`z or ~4`e`d~6`d~3`f`e~5~3~i~a`y or ~4`b`f~6`a~3`f`e~5~3~i~a`a or ~4`d`a~6`s~3`f`e~5~30~i~a~l~3~i~ai=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~56~i~ai or `f~57~30~a~d=~i~a~l~9~i~ai~8~9`f~8~7~a~l=~i~a~l~9~i~ai~8~9`z~8~30~t~k`f~3~t~k`z~3~t~k`y~3~t~k`a=~t~k`f or `f`y~3~t~k`z or `f`a~3~t~k`y or `f`b~3~t~k`a or `z`s~30~t~k~l=~4~t~k`f~3~t~k`z~3~t~k`y~3~t~k`a~5~30~fs=~h~fs~30~38~6~65~56~4~38=`z`b~3dir=~38~6I~o_~b~r~m~3 pull=~38~6P~r~s~s_~t~b~e~o~5~57~7~38~6~39~56`z`b~3~aP~h or `s~57~30~38~6~65~56~4~38=`z`y~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~10=ledc~6new~khannel~56~4~38=~56~38~6~40~56`z`y~57==`s ~58 `z`y or `f`y~57~3bits=`f`s~3mode=`s~3timer=`s~3channel=`s~3frequency=`f`s`s`s~3duty=`f`s`z`y~2~fs~5~57~30~54 ~56u`dg`z ~58 ~t~aP or `s~57==`f ~26 ~19~56~u~69~u~57 ~27|<E>Check.mf",
      ];
      (Ls = 0), (Ks = 0), (Os = []), (Js = 0);
      for (var f = 0; f < s.length; f++) {
        var a = s[f].replace(/~30/g, "|<W>");
        (Os[Os.length] = a.split("|")), (Js += Os[Os.length - 1].length);
      }
      Xs(this);
    }
    function Qs(s) {
      wx.showToast({ title: s, icon: "none", duration: 2e3 });
    }
    function Zs(s) {
      return Us.apply(this, arguments);
    }
    function Us() {
      return (Us = f(
        s().mark(function f(a) {
          return s().wrap(function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  return (s.next = 2), u.easySendData(a + "\n", !1);
                case 2:
                case "end":
                  return s.stop();
              }
          }, f);
        })
      )).apply(this, arguments);
    }
    function sf(s, f, a) {
      return s.match(f + "[=:]([^ ]+)") ? RegExp.$1 : null == a ? 0 : a;
    }
    function ff(s) {
      wx.showModal({ title: "MSG", content: s, showCancel: !1 });
    }
    function af(s, f, t) {
      var u = a.default.hex_md5("Check" + s + "@t*s$e#T.'1)`");
      if (
        (4 != (f = f.toLowerCase()).length && 8 != f.length) ||
        !u.endsWith(f)
      )
        wx.showToast({
          title: "设备认证失败\n" + s,
          icon: "error",
          duration: 2e3,
        });
      else {
        if (
          (tf("CFG", (f = ef("CFG")) + "|" + e.default.sha(u)),
          t.setData({ CMD: "", ShowPan: 1, TIP: "点击需要设置的参数" }),
          "Cxjdwx" == Rs)
        )
          Zs(
            "<C>Setcfg('QQ','" +
              (new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getDate()) +
              "',1)"
          ),
            Zs("<C>BSend('CAN:'..Ver..' QQ:'..QQ)");
        Zs("<C>GetINF()"), Qs("设备认证成功");
      }
    }
    function ef(s) {
      return wx.getStorageSync(s);
    }
    function tf(s, f) {
      wx.setStorageSync(s, f);
    }
    function uf(s, f) {
      return (Array(f).join(0) + s).slice(-f);
    }
    wx.getSystemInfo({
      success: function (s) {
        V = s.windowWidth;
      },
    });
  }
);
require("pages/device/device.js");
__wxRoute = "pages/device2/device";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/device2/device.js";
define(
  "pages/device2/device.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../@babel/runtime/helpers/asyncToGenerator");
    require("../../@babel/runtime/helpers/Arrayincludes");
    i(require("../../B110F0819E166AAFD7769886CD362D70.js"));
    var a = i(require("../../BF8C0DC69E166AAFD9EA65C1FF462D70.js"));
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var s = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
      n = "5.13",
      r = 1,
      l = null,
      S = ["#bt1", "设置电压", "NV", "V", "", ""],
      o = ["#bt2", "预约开机", "", "", "", ""],
      h = ["#bt3", "缓启设置", "", "S", "", ""],
      f = ["#bt4", "蓝牙名称", "", "", "", ""],
      u = ["#bt5", "设置电流", "NA", "A", "", ""],
      c = ["#bt6", "开关电源", "", "", "", ""],
      D = ["#bt7", "二段设置", "", "A", "", ""],
      d = ["#bt8", "蓝牙密码", "", "", "", ""],
      b = ["#bt9", "功率限制", "MW", "W", "", ""],
      C = ["#bt10", "按键设置", "", "", "", ""],
      T = ["#bt11", "延时关机", "", "M", "", ""],
      g = ["#bt12", "累计清零", "", "", "", ""],
      m = ["#BtKS1", "快速设置", "", "", "", ""],
      x = ["#BtKS2", "快速设置", "", "", "", ""],
      M = ["#BtKS3", "快速设置", "", "", "", ""],
      N = ["#BtKS4", "快速设置", "", "", "", ""],
      A = ["#bt21", "电压范围", "", "", "", ""],
      w = ["#bt22", "电压校正", "", "", "", ""],
      F = ["#bt23", "屏幕驱动", "", "", "", ""],
      v = ["#bt24", "返回上级", "", "", "", ""],
      I = ["#bt25", "最大电流", "", "", "", ""],
      W = ["#bt26", "电流校正", "", "", "", ""],
      G = ["#bt27", "屏幕方向", "", "", "", ""],
      p = ["#bt28", "重置设置", "", "", "", ""],
      P = ["#bt29", "功率限制", "", "", "", ""],
      O = ["#bt30", "超温限制", "", "", "", ""],
      R = ["#bt31", "风速设置", "", "", "", ""],
      L = ["#bt32", "系统密码", "", "", "", ""],
      V = "APP:1.0",
      y = 0,
      E = "",
      K = [null],
      B = K[0],
      k = K[1],
      U = K[5],
      $ = K[7],
      H = K[8],
      Q = [null],
      Y = Q[0],
      _ = Q[1],
      j = Q[2],
      q = Q[3],
      X = Q[4],
      z = Q[5],
      Z = Q[6],
      J = Q[7],
      tt = Q[8],
      et = Q[9],
      at = [null],
      it = at[2],
      st = at[3],
      nt = at[6],
      rt = [null],
      lt = rt[0],
      St = rt[1],
      ot = [null],
      ht = ot[0],
      ft = ot[1],
      ut = ot[2],
      ct = ot[3],
      Dt = ot[8],
      dt = [null],
      bt = dt[1],
      Ct = dt[3],
      Tt = dt[4],
      gt = dt[5],
      mt = dt[8],
      xt = dt[9],
      Mt = [null],
      Nt = Mt[0],
      At = Mt[1],
      wt = Mt[2],
      Ft = Mt[3],
      vt = [null],
      It = ((st = vt[1]), (it = vt[2]), vt[3]),
      Wt = vt[8],
      Gt = vt[9],
      pt = "",
      Pt = 0,
      Ot = n,
      Rt = "Cxjdwx",
      Lt = "",
      Vt = 0;
    function yt(t, e) {
      wx.createSelectorQuery()
        .select("#myCanvas")
        .fields({ node: !0, size: !0 })
        .exec(function (e) {
          var a = e[0].node,
            i = a.getContext("2d");
          (a.width = 60),
            (a.height = 60),
            i.scale(1, 1),
            (i.font = "normal bold 18px SimSun"),
            (i.fillStyle = "#000"),
            i.fillRect(0, 0, 60, 60),
            (i.fillStyle = "#fff");
          for (var s = t.split("|"), n = 0; n < s.length; n += 1) {
            var r = s[n].split(","),
              l = r[0],
              S = r[1],
              o = r[2],
              h = r[3];
            (i.font = "normal bold " + o + "px Kaiti"), i.fillText(h, l, S);
          }
          for (var f = "", u = [], c = -1, D = 0; D < 60; D += 1)
            for (var d = 0; d < 60; d += 1) {
              d % 8 == 0 && (c += 1);
              var b = i.getImageData(d, D, 1, 1).data,
                C = 0.299 * b[0] + 0.587 * b[1] + 0.114 * b[2];
              u[c] = (C < 140 ? "0" : "1") + (null == u[c] ? "" : u[c]);
            }
          for (var T = 0; T < u.length; T++)
            f = f + parseInt(Number(u[T]), 2) + ",";
          Lt = f.slice(0, -1);
        });
    }
    var Et = [],
      Kt = 0;
    function Bt(t) {
      s.easySendData(Et[Kt], !1),
        Ut("发送进度:" + ((Kt / Et.length) * 100).toFixed(2) + "%"),
        console.log("ID=" + Kt + "  Str=" + Et[Kt]),
        Kt++;
    }
    function kt(t) {
      for (
        var e = function (e) {
            wx.createSelectorQuery()
              .select(t[e][0])
              .fields({ node: !0, size: !0 })
              .exec(function (a) {
                var i = a[0].node,
                  s = i.getContext("2d"),
                  n = wx.getSystemInfoSync().pixelRatio;
                (i.width = a[0].width * n),
                  (i.height = a[0].height * n),
                  s.scale(n, n),
                  (s.fillStyle = "#ddFFdd"),
                  t[e][0] == "#BtKS" + Dt &&
                    s.fillRect(0, 0, a[0].width, a[0].height),
                  (s.fillStyle = "#ddFFdd"),
                  "#bt9" == t[e][0] &&
                    1 == St &&
                    s.fillRect(0, 0, a[0].width, a[0].height),
                  (s.fillStyle = "#ffdddd"),
                  "#bt9" == t[e][0] &&
                    1 == lt &&
                    s.fillRect(0, 0, a[0].width, a[0].height),
                  (s.font = "normal bold 16px PingFangSC-Regular"),
                  (s.fillStyle = "#ff9900"),
                  (s.textAlign = "center"),
                  s.fillText(t[e][1], a[0].width / 2, 27),
                  (s.font = "normal bold 9px PingFangSC-Regular"),
                  (s.textAlign = "left"),
                  (s.fillStyle = "#22aa22"),
                  s.fillText(t[e][2] + t[e][3], 3, 9),
                  (s.textAlign = "right"),
                  (s.fillStyle = "#dd0000"),
                  "" != t[e][4] && s.fillText(t[e][4], a[0].width - 3, 9),
                  (s.textAlign = "center"),
                  (s.fillStyle = "#cc0088"),
                  "" != t[e][5] &&
                    s.fillText(t[e][5], a[0].width / 2, a[0].height - 3),
                  (s.strokeStyle = "#eee"),
                  s.rect(0, 0, a[0].width, a[0].height),
                  s.stroke();
              });
          },
          a = 0;
        a < t.length;
        a++
      )
        e(a);
    }
    Page({
      data: {
        title: "设备连接失败,点击重试",
        text: "",
        CMD: "",
        ShowPan: 1,
        Ver: " APP:5.13 CAN:Unknown",
        TIP: "点击需要设置参数",
        CKStr: "密码验证失败,请输入设备密码",
        SOC: 100,
        ID: "",
        XBM: "1",
        STX: "发送",
        STS1: 0,
        STS2: 0,
        STS3: 0,
        STS4: 0,
        STS5: 0,
        STS6: 0,
        STS7: 0,
        STS8: 0,
        STS9: 0,
        STS10: 0,
        STS11: 0,
        STS0: 0,
        IsICR: 0,
        IsIFY: 0,
        LG_T1: "1,26,26,创 新",
        LG_T2: "1,55,26,科 技",
        LG_FT: "Kaiti",
        fontFamily: "Bitstream Vera Serif Bold",
      },
      LGT1: function (t) {
        this.setData({ LG_T1: t.detail.value }),
          SetUI(this, this.data.LG_T1, this.data.LG_T2);
      },
      LGT2: function (t) {
        this.setData({ LG_T2: t.detail.value }),
          SetUI(this, this.data.LG_T1, this.data.LG_T2);
      },
      CheckLOGO: function (t) {
        wx.getClipboardData({
          success: function (t) {
            var e = t.data;
            e.startsWith("SetLOGO=") &&
              (e.match(/SetLOGO=(.+)$/),
              (Lt = RegExp.$1),
              Ut("已成功导入剪切板数据 点击发送生效"),
              console.log(Lt));
          },
        });
      },
      CMDInput: function (t) {
        4 == this.data.ShowPan && this.setData({ STX: "预览" }),
          this.setData({ CMD: t.detail.value });
      },
      Send: function () {
        var t = this.data.CMD;
        "" == t &&
          wx.getClipboardData({
            success: function (t) {
              var e = t.data;
              if (e.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/))
                wx.showModal({
                  title: "是否发送剪切板中的设置代码",
                  editable: !1,
                  placeholderText: "",
                  success: function (t) {
                    t.confirm &&
                      (function (t) {
                        if (0 == Kt) {
                          t.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
                          var e = RegExp.$2;
                          ((Et = [])[0] = RegExp.$1), (Kt = 0);
                          for (var a = 0; a < e.length; a += 252)
                            Kt++, (Et[Kt] = e.slice(a, a + 252));
                          (Et[Et.length] = "DataEnd"), (Kt = 0), Bt();
                        } else Ut("有发送任务正在进行中");
                      })(e);
                  },
                });
              else
                for (var a = e.split("\n"), i = 0; i < a.length; i++)
                  if (a[i].startsWith("SetMSG="))
                    s.easySendData(a[i] + "\n", !0), Ut("信息已发送");
                  else if (a[i].startsWith("SetLOGO=")) {
                    if ((a[i].match(/SetLOGO=(.+)$/), "" != (Lt = RegExp.$1))) {
                      $t("SetLOGO=S");
                      for (var n = 0; n < Lt.length; n += 200)
                        $t("SetLOGO=" + Lt.slice(n, n + 200));
                      $t("SetLOGO=E"), Ut("信息已发送");
                    }
                  } else a[i].startsWith("Restart") && $t("Restart");
            },
          }),
          this.data.CMD.match(/^([^=]+)=(.+)/);
        var e = RegExp.$1,
          i = RegExp.$2;
        if (3 == this.data.ShowPan)
          "SetMSG" == e
            ? (s.easySendData(t + "\n", !0), Yt("设置已发送,重启生效!"))
            : ((pt = this.data.CMD.toLowerCase()),
              jt(E, pt),
              $t("CheckUPWD=" + pt));
        else if (4 == this.data.ShowPan) {
          if ("预览" == this.data.STX)
            yt(this.data.CMD), this.setData({ STX: "发送" });
          else if ("" != Lt) {
            $t("SetLOGO=S");
            for (var n = 0; n < Lt.length; n += 200)
              $t("SetLOGO=" + Lt.slice(n, n + 200));
            $t("SetLOGO=E"),
              Ut("LOGO信息已发送"),
              this.setData({ CMD: "", STX: "发送", ShowPan: 1 });
          }
        } else if (1 == this.data.ShowPan) {
          if ("系统设置" == t) t = "CheckGPWD=8888";
          else if ("重启" == t)
            (t = "Restart"),
              Yt("重启已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 });
          else if ("重置设置" == t)
            (t = "Reset"),
              Yt("重置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 });
          else if ("关闭电源输出" == t) t = "SetPWR=0";
          else if ("清除累计数据" == t) t = "Clear";
          else if ("打开电源输出" == t) t = "SetPWR=1";
          else if ("打开按键功能" == t) t = "SetKEY=1";
          else if ("关闭按键功能" == t) t = "SetKEY=0";
          else if ("打开wifi" == t.toLowerCase())
            $t("SetWIFI=1"),
              (t = "Restart"),
              Yt("WIFI已设置为打开,设备正在重启!"),
              wx.navigateBack({ delta: 0 });
          else if ("关闭wifi" == t.toLowerCase())
            (t = "SetWIFI=0"), Ut("WIFI已设置为长期关闭模式\n重启生效");
          else if (t.startsWith("setgm")) {
            t = t.replace("SetGM=", "");
            var r =
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate() +
              " " +
              new Date().getHours() +
              "-" +
              new Date().getMinutes();
            r = "Cxjdwx-GM " + r;
            var l = a.default.sha(r);
            t == l
              ? (Ut("管理员权限设置成功"), jt("GM", "1"))
              : ((r =
                  "Cxjdwx-GM " +
                  (r =
                    new Date().getFullYear() +
                    "-" +
                    (new Date().getMonth() + 1) +
                    "-" +
                    new Date().getDate() +
                    " " +
                    new Date().getHours() +
                    "-" +
                    (new Date().getMinutes() - 1))),
                t == (l = a.default.sha(r))
                  ? (Ut("管理员权限设置成功"), jt("GM", "1"))
                  : Ut("管理员权限设置失败"));
          } else if (t.startsWith("设置信息=")) {
            if (Pt >= 1)
              return (
                $t(
                  "<C>" +
                    (t = "Setcfg('QQ','" + t.replace("设置信息=", "") + "',1)")
                ),
                $t("<C>BSend('CAN:'..Ver..' QQ:'..QQ)"),
                this.setData({ CMD: "" }),
                void Ut("设置已发送")
              );
          } else if ("LOGO" == e) {
            if (it > 1)
              return (
                (i = i.replace("0104", "")),
                this.setData({
                  ShowPan: 4,
                  CMD:
                    "1,27,30," +
                    i.substring(0, 2) +
                    "|1,57,30," +
                    i.substring(2),
                }),
                void yt(this.data.CMD)
              );
            (t = t.replace("0104", "")),
              s.easySendData(t + "\n", !0),
              (t = "Restart"),
              Yt("设置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 });
          } else {
            if ("LOGO" == t)
              return (
                this.setData({ ShowPan: 4, CMD: "1,27,30,创新|1,57,30,科技" }),
                void yt(this.data.CMD)
              );
            if ("设置输出电流" == e)
              i > k || i < B
                ? Ut("超出限制范围")
                : (t = "SetVA=" + gt + "," + i + ",KSi");
            else if ("设置输出电压" == e)
              i > Y || i < _
                ? Ut("超出限制范围")
                : (t = "SetVA=" + i + "," + Ct + ",KSi,1");
            else if ("设置蓝牙名称" == e)
              s.easySendData(
                "SetCFG=SSID," +
                  (function (t) {
                    for (var e = 0, a = "CAN-", i = 0; i < t.length; i++)
                      if (
                        ((a += t[i]),
                        t[i].match(/[\u4e00-\u9fa5]/g) ? (e += 3) : e++,
                        e >= 24)
                      )
                        return a;
                    return a;
                  })(i) +
                  "\n",
                !0
              ),
                (t = ""),
                Ut("名称已修改 重启生效");
            else if ("设置蓝牙密码" == e)
              (t = "SetUPWD=" + i.toLowerCase()),
                jt(E, ""),
                Ut("密码已修改 重启生效");
            else if ("充满延时关机" == e)
              i >= 0 && i < 1200 && (t = "SetUSD=" + i);
            else if ("设置功率限制" == e)
              i > At || i < 100 ? Ut("超出设置范围") : (t = "SetUMW=" + i);
            else if ("设置缓启时间" == e)
              i < 0 || i > 20 ? Ut("设置范围0-20,单位秒") : (t = "SetHQ=" + i);
            else if ("设置预约时间" == e)
              i < 0 || i > 1200 ? Ut("设置范围0-1200") : (t = "SetYS=" + i);
            else if ("设置过滤电流" == e) t = "SetCLV=" + i;
            else if ("设置二段充电" == e)
              if (t.match(/([\d\.]+)V([\d\.]+)A/)) {
                var S = Number(RegExp.$1),
                  o = Number(RegExp.$2);
                0 == S || 0 == o
                  ? (t = "SetVA2=" + S + ",0")
                  : S > Y || S < _ || o > k || o < B
                  ? Ut("超出设置范围")
                  : (t = "SetVA2=" + S + "," + o);
              } else Ut("参数设置错误");
            else if ("快速设置电压电流" == e)
              if (t.match(/([\d\.]+)V([\d\.]+)A/)) {
                var h = Number(RegExp.$1),
                  f = Number(RegExp.$2);
                h > Y || h < _ || f > k || f < B
                  ? Ut("超出设置范围")
                  : (t = "SetKS=" + h + "," + f + "," + Dt);
              } else Ut("参数设置错误");
            else "系统设置" == e && (t = "CheckGPWD=" + i);
          }
          $t(t), $t("GetINF"), this.setData({ CMD: "" });
        } else if (2 == this.data.ShowPan) {
          if ("设置调压范围" == e) {
            if (t.match(/([\d\.]+)-([\d\.]+)/))
              t = "SetSVF=" + Number(RegExp.$1) + "," + Number(RegExp.$2);
          } else if ("修改系统密码" == e) t = "SetGPWD=" + i;
          else if ("设置最大功率" == e) t = "SetSMW=" + i;
          else if ("设置每度加速值" == e)
            i >= 3 && i <= 15 && (t = "SetUFS=" + i);
          else if ("设置电流加速值" == e)
            i >= 0 && i <= 3 && (t = "SetUFS=" + bt + "," + i);
          else if ("设置最小风速" == e)
            i >= 30 && i <= 120 && (t = "SetLFS=" + i);
          else if ("实际输出电压" == e)
            if (J < 10) Ut("当前电压小于10V 不能进行校正");
            else {
              var u = Number(i / J).toFixed(6),
                c = Number(i / gt).toFixed(6);
              (t = "SetOVD=" + c + "," + u),
                Ot.includes("Increase")
                  ? $t(
                      "SetSVF=" +
                        (20 * c).toFixed(2) +
                        "," +
                        (100 * c).toFixed(2)
                    )
                  : Ot.includes("Huawei")
                  ? $t(
                      "SetSVF=" +
                        (41 * c).toFixed(2) +
                        "," +
                        (58.5 * c).toFixed(2)
                    )
                  : Ot.includes("ZTE")
                  ? $t(
                      "SetSVF=" +
                        (41.5 * c).toFixed(2) +
                        "," +
                        (59 * c).toFixed(2)
                    )
                  : Ot.includes("EPS")
                  ? $t(
                      "SetSVF=" +
                        (44 * c).toFixed(2) +
                        "," +
                        (61 * c).toFixed(2)
                    )
                  : Ot.includes("INFY");
            }
          else if ("实际输出电流" == e)
            if (tt < 5) Ut("输出电流必须大于5A且处于恒流状态");
            else {
              var D = Number(i / tt).toFixed(6);
              t = "SetOAD=" + Number(i / Ct).toFixed(6) + "," + D;
            }
          else if ("实际输入电流" == e) {
            if (tt < 2) Ut("电流校正时 输入电流必须大于2A 否则不能进行校正");
            else t = "SetCFG('IAT'," + Number(i / Z).toFixed(6) + ",1)";
          } else if ("设置超温限制" == e)
            if (t.match(/([\d\.]+)℃([\d\.]+)W/)) {
              var d = Number(RegExp.$1),
                b = Number(RegExp.$2);
              d < 30 || d > 100 || b < 500 || b > 1e4
                ? Ut("超出设置范围")
                : (t = "SetUMT=" + d + "," + b);
            } else Ut("参数设置错误");
          else
            "设置最大限流" == e
              ? (t = "SetHSA=" + i)
              : "重置设置" == t &&
                ((t = "Reset"),
                Yt("重置已发送,设备正在重启!"),
                wx.navigateBack({ delta: 0 }));
          $t(t), $t("GetINF"), this.setData({ CMD: "" });
        } else Ut("输入错误,参数值只允许数字");
      },
      bt1: function () {
        this.setData({ CMD: "设置输出电压=" }), Ut("输入需要设置的电压");
      },
      bt2: function () {
        this.setData({ CMD: "设置预约时间=30" }),
          Ut("预约充电功能 启用后会关闭电源 单位分钟");
      },
      bt3: function () {
        this.setData({ CMD: "设置缓启时间=15" }),
          Ut("电流缓启设置 输入0关闭缓启功能 单位秒");
      },
      bt4: function () {
        this.setData({ CMD: "设置蓝牙名称=" }),
          Ut("设置设备蓝牙名字 重启后生效");
      },
      bt5: function () {
        this.setData({ CMD: "设置输出电流=" }), Ut("输入需要设置的电流");
      },
      bt6: function () {
        this.setData({ CMD: (0 == Nt ? "打开" : "关闭") + "电源输出" }),
          Ut("打开或者关闭电源输出");
      },
      bt7: function () {
        this.setData({
          CMD:
            "设置二段充电=" +
            (0 == Ft ? gt - 4 : Ft) +
            "V" +
            (0 == mt ? 10 : mt) +
            "A",
        }),
          Ut("设置0A关闭二段功能");
      },
      bt8: function () {
        this.setData({ CMD: "设置蓝牙密码=" }), Ut("设置用户蓝牙密码");
      },
      bt9: function () {
        this.setData({ CMD: "设置功率限制=3000" });
      },
      bt10: function () {
        this.data.CMD.includes("按键功能")
          ? this.setData({ CMD: "对调加减按键" })
          : (this.setData({ CMD: (1 == It ? "关闭" : "打开") + "按键功能" }),
            Ut("打开或者关闭按键功能"));
      },
      bt11: function () {
        this.setData({ CMD: "充满延时关机=30" }), Ut("输入0关闭关机功能");
      },
      bt12: function () {
        this.setData({ CMD: "清除累计数据" });
      },
      BtKS1: function () {
        this.setData({ CMD: "快速设置电压电流=" + ht }), (Dt = 1);
      },
      BtKS2: function () {
        this.setData({ CMD: "快速设置电压电流=" + ft }), (Dt = 2);
      },
      BtKS3: function () {
        this.setData({ CMD: "快速设置电压电流=" + ut }), (Dt = 3);
      },
      BtKS4: function () {
        this.setData({ CMD: "快速设置电压电流=" + ct }), (Dt = 4);
      },
      bt21: function () {
        this.setData({ CMD: "设置调压范围=" + _ + "-" + Y }),
          Ut("请按照电压型号允许的电压范围设置");
      },
      bt22: function () {
        this.setData({ CMD: "实际输出电压=" }), $t("ResetOVD"), $t("GetINF");
      },
      bt23: function () {
        $t("SetDDV=1306"), $t("GetINF"), Ut("显示驱动切换需断电重启后生效");
      },
      bt24: function () {
        this.setData({ ShowPan: 1, TIP: "点击需要设置的参数" }), $t("GetINF");
      },
      bt25: function () {
        this.setData({ CMD: "设置最大限流=" });
      },
      bt26: function () {
        this.setData({ CMD: "实际输出电流=" }), $t("ResetOAD"), $t("GetINF");
      },
      bt27: function () {
        $t("SetDDT=" + (st = 2 == st ? 0 : st + 1)),
          $t("GetINF"),
          Ut("屏幕倒转需断电重启后生效");
      },
      bt28: function () {
        this.setData({ CMD: "重置设置" });
      },
      bt29: function () {
        this.setData({ CMD: "设置最大功率=" });
      },
      bt30: function () {
        this.setData({ CMD: "设置超温限制=" + Wt + "℃" + Gt + "W" });
      },
      bt31: function () {
        this.data.CMD.startsWith("设置每度加速值")
          ? (this.setData({ CMD: "设置电流加速值=1" }),
            Ut("电流每A增加PWM值\n范围0-3"))
          : this.data.CMD.startsWith("设置电流加速值")
          ? (this.setData({ CMD: "设置最小风速=50" }),
            Ut("设置初始风速PWM值\\n范围30-120"))
          : (this.setData({ CMD: "设置每度加速值=10" }),
            Ut("温度每度增加PWM值\n范围3-15"));
      },
      bt32: function () {
        this.setData({ CMD: "修改系统密码=" }), Ut("密码只允许数字");
      },
      onLoad: function (t) {
        (Pt = 1 == t.GM ? 1 : _t("GM")),
          (Vt = 0),
          wx
            .createSelectorQuery()
            .select("#canvas")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node;
              l = e.getContext("2d");
              var a = wx.getSystemInfoSync().pixelRatio;
              (e.width = t[0].width * a),
                (e.height = t[0].height * a),
                l.scale(a, a);
            });
        var e = this;
        e.setData({
          title: "设备连接成功",
          CKStr: "密码验证失败,请输入设备密码",
          ShowPan: 3,
          TIP: "请输入设备密码",
        }),
          s.onBLEConnectionStateChange(function () {
            wx.navigateBack({ delta: 0 });
          }),
          s.onBLECharacteristicValueChange(function (t, a) {
            r ||
              t
                .trim()
                .split("\n")
                .forEach(function (t) {
                  if ((console.log("Msg:" + t), t.match(/Receive Data End/)))
                    (Kt = 0), (Et = []), Ut("发送完成!");
                  else if (t.startsWith("Receive")) Bt();
                  else if (t.startsWith("CAN") && 0 == Vt)
                    if (
                      ((Vt = 1),
                      (Rt = Qt(t, "TAG", "Cxjdwx")),
                      (Ot = Qt(t, "CAN")),
                      (E = Qt(t, "CHIP")),
                      (V = " APP:5.13 CAN:" + Ot + " TAG:" + Rt),
                      e.setData({ Ver: V, ID: E }),
                      Ot.startsWith("Increase") && e.setData({ IsICR: 1 }),
                      Ot.startsWith("INFY") && e.setData({ IsIFY: 1 }),
                      Pt)
                    ) {
                      var a = (Number(E) + 19880914)
                        .toString(16)
                        .substring(4, 8);
                      $t("CheckUPWD=" + a), Ut(a);
                    } else
                      e.setData({ CKStr: "密码验证失败,请输入设备密码" }),
                        $t("CheckUPWD=" + _t(E));
                  else if (t.startsWith("Admin Password Check Passed"))
                    e.setData({
                      ShowPan: 2,
                      TIP: "点击需要设置的参数",
                      CMD: "",
                    });
                  else if (t.startsWith("Admin Password Check Failed"))
                    Ut("系统设置密码错误!");
                  else if (t.startsWith("User Password Check Failed!"))
                    e.setData({ CMD: "" }), Ut("密码错误,请重试");
                  else if (t.startsWith("User Password Check Passed!")) {
                    if ("Cxjdwx" == Rt && !Pt) {
                      var i = new Date();
                      $t(
                        "SetTAG=" +
                          i.getFullYear() +
                          "-" +
                          (i.getMonth() + 1) +
                          "-" +
                          i.getDate()
                      );
                    }
                    (pt = ""),
                      $t("GetINF"),
                      e.setData({
                        title: "密码验证成功",
                        ShowPan: 1,
                        TIP: "点击需要设置的参数",
                        CMD: "",
                      });
                  } else if (t.startsWith("Mode")) {
                    var s = Qt(t, "Mode", "");
                    "0" == Qt(t, "OL")
                      ? e.setData({ title: "CAN通讯异常" })
                      : "SP" == s
                      ? e.setData({ title: "充电器已关机" })
                      : "WT" == s
                      ? e.setData({ title: "等待接入电池" })
                      : "A" == s
                      ? e.setData({ title: "第一段充电中" })
                      : "B" == s
                      ? e.setData({ title: "第二段充电中" })
                      : "T" == s
                      ? e.setData({ title: "预约等待中" })
                      : "C" == s
                      ? e.setData({ title: "充电完成" })
                      : "S" == s && e.setData({ title: "充电完成(已关机)" }),
                      l.clearRect(0, 0, y, 300),
                      (l.font = "normal normal 15px sans-serif"),
                      (q = Number(Qt(t, "OW"))),
                      (z = Number(Qt(t, "IW"))),
                      (j = Qt(t, "SDT")),
                      (X = Qt(t, "NFS")),
                      (J = Number(Qt(t, "OV"))),
                      (tt = Number(Qt(t, "OA"))),
                      (Z = Number(Qt(t, "IA"))),
                      (St = Number(Qt(t, "SWT", "0"))),
                      (lt = Number(Qt(t, "SMT", "0"))),
                      (nt = Qt(t, "SOC", "100")),
                      (et = Number(Qt(t, "IV", "0"))),
                      Ot.startsWith("ZTE") && (z = (Z *= H) * H),
                      0 != z && 0 != et && (Z = z / et);
                    var n = 0,
                      r = 0;
                    z > 0 && ((n = (q / z) * 100), (r = z - q));
                    var K = [
                        "输入电压",
                        "输入电流",
                        "输入功率",
                        "输入温度",
                        "转换效率",
                        "本次充电",
                        "本次电量",
                        "本次时间",
                      ],
                      Q = [
                        "输出电压",
                        "输出电流",
                        "输出功率",
                        "输出温度",
                        "转换损耗",
                        "累计充电",
                        "累计电量",
                        "累计时间",
                      ],
                      at = [et, Z, z, "IT", n, "AH", "WH", "Ti"],
                      rt = [J, tt, q, "OT", r, "MAH", "MWH", "MTi"],
                      ot = ["V", "A", "W", "℃", "%", "Ah", "Wh", ""],
                      dt = ["V", "A", "W", "℃", "W", "Ah", "Wh", ""],
                      Mt = y / 2,
                      vt = 25;
                    if (
                      ((l.strokeStyle = "#eee"),
                      l.moveTo(0, 0),
                      l.lineTo(y, 0),
                      l.moveTo(Mt, 0),
                      l.lineTo(Mt, 300),
                      1 == e.data.IsICR)
                    ) {
                      var Lt = Qt(t, "ST0", "0"),
                        yt = Qt(t, "ST1", "0");
                      (Lt = qt(Number(Lt).toString(2), 8)),
                        (yt = qt(Number(yt).toString(2), 8)),
                        e.setData({
                          STS0: Lt.charAt(7),
                          STS1: Lt.charAt(6),
                          STS2: Lt.charAt(5),
                          STS3: Lt.charAt(4),
                          STS4: Lt.charAt(3),
                          STS5: Lt.charAt(2),
                          STS6: Lt.charAt(1),
                          STS7: Lt.charAt(0),
                          STS8: yt.charAt(7),
                          STS9: yt.charAt(6),
                          STS10: yt.charAt(5),
                        });
                    }
                    if (1 == e.data.IsIFY) {
                      var Ht = Qt(t, "ST0", "0"),
                        Yt = Qt(t, "ST1", "0"),
                        jt = Qt(t, "ST2", "0");
                      (Ht = qt(Number(Ht).toString(2), 8)),
                        (Yt = qt(Number(Yt).toString(2), 8)),
                        (jt = qt(Number(jt).toString(2), 8)),
                        e.setData({
                          STS0: Yt.charAt(7),
                          STS1: Yt.charAt(6),
                          STS2: Yt.charAt(5),
                          STS3: Yt.charAt(4),
                          STS4: jt.charAt(1),
                          STS5: jt.charAt(2),
                          STS6: Yt.charAt(2),
                          STS7: jt.charAt(4),
                          STS8: jt.charAt(7),
                          STS9: Yt.charAt(3),
                          STS10: Ht.charAt(2),
                          STS11: Ht.charAt(7),
                        });
                    }
                    e.setData({ SOC: nt }),
                      (o[5] = "T" == s ? Qt(t, "Ti", "") : ""),
                      (b[5] = q.toFixed(2)),
                      (R[5] = X),
                      (T[5] = 0 == xt ? "关闭" : j),
                      kt([T, b, R, o]);
                    for (var Xt = 0; Xt < 8; Xt++) {
                      (l.fillStyle = "#2222ff"),
                        (l.textAlign = "left"),
                        l.fillText(K[Xt], 5, Xt * vt + 22),
                        l.fillText(Q[Xt], Mt + 5, Xt * vt + 22),
                        l.moveTo(0, Xt * vt + 29),
                        l.lineTo(y, Xt * vt + 29),
                        (l.fillStyle = "#ffa000"),
                        (l.textAlign = "right");
                      var zt =
                          "string" == typeof at[Xt]
                            ? Number(Qt(t, at[Xt]))
                            : at[Xt],
                        Zt =
                          "string" == typeof rt[Xt]
                            ? Number(Qt(t, rt[Xt]))
                            : rt[Xt];
                      "Ti" == at[Xt]
                        ? ((zt = Qt(t, at[Xt])), (Zt = Qt(t, rt[Xt])))
                        : ((zt = zt.toFixed(2)), (Zt = Zt.toFixed(2))),
                        l.fillText(zt, Mt - 30, Xt * vt + 22),
                        l.fillText(Zt, y - 30, Xt * vt + 22),
                        (l.fillStyle = "#aaaaaa"),
                        l.fillText(ot[Xt], Mt - 2, Xt * vt + 22),
                        l.fillText(dt[Xt], y - 2, Xt * vt + 22),
                        l.stroke();
                    }
                  } else
                    t.startsWith("USV=")
                      ? ((Dt = Number(Qt(t, "KSV", "1"))),
                        (Wt = Number(Qt(t, "UMT", "75"))),
                        (Gt = Number(Qt(t, "TMW", "3000"))),
                        (bt = Number(Qt(t, "UFS", "0"))),
                        Number(Qt(t, "AJH", "0")),
                        (Ct = Number(Qt(t, "USA", tt))),
                        (Tt = Number(Qt(t, "UMW", "0"))),
                        (gt = Number(Qt(t, "USV", J))),
                        Number(Qt(t, "FON", 0)),
                        Number(Qt(t, "SPM", "0")),
                        (mt = Number(Qt(t, "SA2", "0"))),
                        (xt = Number(Qt(t, "SD", "0"))),
                        (Nt = Number(Qt(t, "PON", "0"))),
                        (At = Number(Qt(t, "SMW", "0"))),
                        (wt = Number(Qt(t, "HQ", "0"))),
                        (Ft = Number(Qt(t, "SV2", "0"))),
                        Number(Qt(t, "LFS", "0")),
                        (Y = Number(Qt(t, "HSV", "100"))),
                        (B = Number(Qt(t, "LSA", "1"))),
                        (k = Number(Qt(t, "HSA", "35"))),
                        (It = Number(Qt(t, "KON", "1"))),
                        (_ = Number(Qt(t, "LSV", "20"))),
                        Number(Qt(t, "FMT", "45")),
                        Number(Qt(t, "FMW", "1500")),
                        (U = Number(Qt(t, "OVT", "0"))),
                        ($ = Number(Qt(t, "OAT", "0"))),
                        Number(Qt(t, "OVD", "0")),
                        (H = Number(Qt(t, "OAD", "0"))),
                        (S[2] = gt),
                        (h[2] = wt),
                        (u[2] = Ct),
                        (D[2] = mt),
                        (O[2] = Wt + "°C"),
                        (b[2] = Tt),
                        (R[2] = bt),
                        (T[2] = xt),
                        (S[5] = _ + "-" + Y),
                        (A[5] = _ + "-" + Y),
                        (u[5] = B + "-" + k),
                        (h[5] = 0 == wt ? "关闭" : "开启"),
                        (C[5] = 0 == It ? "关闭" : "开启"),
                        (c[5] = 0 == Nt ? "关机" : "开机"),
                        (D[5] = 0 == mt ? "关闭" : Ft),
                        (O[5] = Gt + "W"),
                        (b[4] = At),
                        (T[5] = 0 == xt ? "关闭" : 60 * xt),
                        kt([S, o, h, f, u, c, D, d, b, C, T, g]))
                      : t.startsWith("KS1=") &&
                        (Number(Qt(t, "DSP", "0")),
                        Number(Qt(t, "DR", "0")),
                        (st = Number(Qt(t, "DDT", "0"))),
                        Number(Qt(t, "ZTE", "0")),
                        Number(Qt(t, "HW", "0")),
                        (it = Number(Qt(t, "DDV", "1"))),
                        Number(Qt(t, "ICR", "0")),
                        (ht = Qt(t, "KS1", "58.8,15").replace(",", "V") + "A"),
                        (ft = Qt(t, "KS2", "67.2,15").replace(",", "V") + "A"),
                        (ut = Qt(t, "KS3", "71.4,15").replace(",", "V") + "A"),
                        (ct = Qt(t, "KS4", "84,15").replace(",", "V") + "A"),
                        (A[4] = S[4]),
                        (w[5] = U),
                        (F[5] =
                          1 == it
                            ? "IIC1306"
                            : 0 == it
                            ? "IIC1106"
                            : 2 == it
                            ? "ST7789"
                            : "GC9107"),
                        (I[5] = k),
                        (W[5] = $),
                        (G[5] = "方向" + st),
                        (P[5] = At),
                        (O[4] = C[4]),
                        (m[5] = ht),
                        (x[5] = ft),
                        (M[5] = ut),
                        (N[5] = ct),
                        kt([A, w, F, v, I, W, G, p, P, O, R, L, m, x, M, N]));
                });
          });
      },
      onUnload: function () {
        s.onBLEConnectionStateChange(function () {}), s.closeBLEConnection();
      },
      onShow: function () {
        (r = 0), console.log("Show");
      },
      onHide: function () {
        (r = 1), console.log("Hide");
      },
    });
    function Ut(t) {
      wx.showToast({ title: t, icon: "none", duration: 2e3 });
    }
    function $t(t) {
      return Ht.apply(this, arguments);
    }
    function Ht() {
      return (Ht = e(
        t().mark(function e(a) {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), s.easySendData(a + "\n", !1);
                case 2:
                case "end":
                  return t.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Qt(t, e, a) {
      return t.match(e + "[=:]([^ ]+)") ? RegExp.$1 : null == a ? 0 : a;
    }
    function Yt(t) {
      wx.showModal({ title: "MSG", content: t, showCancel: !1 });
    }
    function _t(t) {
      return wx.getStorageSync(t);
    }
    function jt(t, e) {
      wx.setStorageSync(t, e);
    }
    function qt(t, e) {
      return (Array(e).join(0) + t).slice(-e);
    }
    wx.getSystemInfo({
      success: function (t) {
        y = t.windowWidth;
      },
    });
  }
);
require("pages/device2/device.js");
__wxRoute = "pages/NewUI/NewUI";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/NewUI/NewUI.js";
define(
  "pages/NewUI/NewUI.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../@babel/runtime/helpers/defineProperty");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var i,
      n,
      a,
      o,
      r,
      l,
      s,
      c,
      f,
      d = require("../../@babel/runtime/helpers/asyncToGenerator"),
      u = require("../../445F65219E166AAF22390D2641262D70.js"),
      h = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
      S = 0,
      F = 0,
      g = 0,
      x = "设备连接成功",
      m = 1,
      b = 1,
      w = "WT",
      N = 0,
      T = 220,
      C = 0,
      p = 35.21,
      I = 3156,
      D = 15,
      G = 1,
      B = 30.5,
      v = 84,
      A = 83.14,
      y = 23.45,
      V = 16.15,
      W = "00:02:30",
      E = 10.01,
      M = 72.25,
      K = 1,
      O = 60,
      P = 2,
      k = ["54.6", "15.00"],
      R = ["64.8", "15.00"],
      L = ["72.4", "15.00"],
      U = ["84.0", "15.00"],
      $ = 1,
      Q = 100;
    function z(t) {
      return (
        t.match(/rgb\((\d+),(\d+),(\d+)\)/),
        (
          ((RegExp.$1 >> 3) << 11) +
          ((RegExp.$2 >> 2) << 5) +
          (RegExp.$3 >> 3)
        ).toString(16)
      );
    }
    function H(t) {
      return wx.getStorageSync(t);
    }
    function Y(t, e) {
      wx.setStorageSync(t, e);
    }
    function Z(t) {
      wx.showToast({ title: t, icon: "none", duration: 2e3 });
    }
    function q(t, e, i) {
      return t.match(e + "[=:]([^ ]+)") ? RegExp.$1 : null == i ? 0 : i;
    }
    function j(t) {
      var e = Math.floor(t / 3600),
        i = Math.floor((t - 3600 * e) / 60),
        n = t - 60 * i - 3600 * e;
      return (
        (1 == e.toString().length ? "0" + e : e) +
        ":" +
        (1 == i.toString().length ? "0" + i : i) +
        ":" +
        (1 == n.toString().length ? "0" + n : n)
      );
    }
    function _(t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (J = d(
        t().mark(function e(i) {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (0 == pt) {
                    t.next = 3;
                    break;
                  }
                  return Z("有发送任务正在进行中"), t.abrupt("return");
                case 3:
                  return (t.next = 5), h.easySendData(i + "\n", !1);
                case 5:
                case "end":
                  return t.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function X(t, e) {
      var i =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : function () {};
      wx.showModal({
        title: t,
        editable: !0,
        placeholderText: e,
        success: function (t) {
          t.confirm && i(t.content);
        },
      });
    }
    var tt,
      et,
      it,
      nt,
      at,
      ot,
      rt,
      lt,
      st,
      ct,
      ft,
      dt,
      ut,
      ht,
      St,
      Ft,
      gt,
      xt,
      mt,
      bt,
      wt,
      Nt,
      Tt,
      Ct = [],
      pt = 0;
    function It(t) {
      0 == pt
        ? wx.showModal({
            title: "确认是否修改充电动画",
            editable: !1,
            placeholderText: "",
            success: function (e) {
              if (e.confirm) {
                t.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
                var i = RegExp.$2;
                ((Ct = [])[0] = RegExp.$1), (pt = 0);
                for (var n = 0; n < i.length; n += 252)
                  pt++, (Ct[pt] = i.slice(n, n + 252));
                (Ct[Ct.length] = "DataEnd"), (pt = 0), Dt();
              }
            },
          })
        : Z("有发送任务正在进行中");
    }
    function Dt(t) {
      h.easySendData(Ct[pt], !1),
        Z("发送进度:" + ((pt / Ct.length) * 100).toFixed(2) + "%"),
        console.log("ID=" + pt + "  Str=" + Ct[pt]),
        pt++;
    }
    function Gt(t, e, i, n, a, o) {
      o.moveTo(t + a, e),
        o.lineTo(t + i - a, e),
        o.arc(t + i - a, e + a, a, (Math.PI / 180) * 270, 0, !1),
        o.lineTo(t + i, e + n - a),
        o.arc(t + i - a, e + n - a, a, 0, (Math.PI / 180) * 90, 0, !1),
        o.lineTo(t + a, e + n),
        o.arc(
          t + a,
          e + n - a,
          a,
          (Math.PI / 180) * 90,
          (Math.PI / 180) * 180,
          !1
        ),
        o.lineTo(t, e + a),
        o.arc(
          t + a,
          e + a,
          a,
          (Math.PI / 180) * 180,
          (Math.PI / 180) * 270,
          !1
        ),
        o.stroke();
    }
    function Bt() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      m ||
        S ||
        ((S = 1),
        (et != w || lt != N || t) &&
          wx
            .createSelectorQuery()
            .select("#btbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                o = e.getContext("2d"),
                r = wx.getWindowInfo().pixelRatio;
              (e.width = i * r), (e.height = n * r), o.scale(r, r);
              var l = e.createImage();
              (l.src = "/img/bt.png"),
                (l.onload = function () {
                  o.drawImage(l, 0, 0, i, n),
                    (o.fillStyle =
                      N < 30
                        ? "rgba(250, 0, 0, 0.9)"
                        : N < 80
                        ? "rgba(200, 255, 0, 0.9)"
                        : "rgba(0, 255, 0, 0.9)"),
                    o.fillRect(
                      0.115 * i,
                      0.19 * n,
                      0.76 * i * (0.01 * N),
                      0.61 * n
                    ),
                    (o.lineWidth = 6),
                    (o.strokeStyle = "#fff"),
                    Gt(0.11 * i, 0.18 * n, 0.77 * i, 0.63 * n, 15, o),
                    o.strokeRect(0.89 * i, n / 2 - 15, 5, 27),
                    (o.fillStyle = "#fff"),
                    (o.textAlign = "center"),
                    (o.font = "normal bold 30px Kaiti"),
                    o.fillText(x, i / 2, n / 2 - 20),
                    (o.font = "normal bold 50px Kaiti"),
                    o.fillText(N + "%", i / 2, n / 2 + 40),
                    (o.font = "normal bold 15px Kaiti"),
                    (o.fillStyle = "#666"),
                    o.fillText(a, i / 2, 0.95 * n),
                    o.fillText("APP-1.08", i / 2, 0.12 * n);
                });
            }),
        (st != A || nt != v || t) &&
          wx
            .createSelectorQuery()
            .select("#nvbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o),
                (e.height = n * o),
                a.scale(o, o),
                (a.fillStyle = "#f00"),
                (a.textAlign = "left"),
                (a.font = "normal bold 30px Kaiti");
              var r = e.createImage();
              (r.src = "/img/vt.png"),
                (r.onload = function () {
                  a.drawImage(r, 1, 0, i, n),
                    (a.fillStyle = "#fff"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 30px Kaiti"),
                    a.fillText(A.toFixed(2) + "V", i / 2, 50),
                    (a.textAlign = "right"),
                    (a.font = "normal bold 15px Kaiti"),
                    a.fillText(v.toFixed(2) + "V", i - 15, 80);
                });
            }),
        (ct != D || it != B || t) &&
          wx
            .createSelectorQuery()
            .select("#nabt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/cu.png"),
                (r.onload = function () {
                  a.drawImage(r, 1, 0, i, n),
                    (a.fillStyle = "#fff"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 30px Kaiti"),
                    a.fillText(D.toFixed(2) + "A", i / 2, 50),
                    (a.textAlign = "left"),
                    (a.font = "normal bold 15px Kaiti"),
                    a.fillText(B.toFixed(2) + "A", 15, 80);
                });
            }),
        (at != T || tt != b || t) &&
          wx
            .createSelectorQuery()
            .select("#ivbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = b ? "/img/iv.png" : "/img/iv1.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(Math.trunc(T) + "V", i / 2, n - 28);
                });
            }),
        (rt != p || t) &&
          wx
            .createSelectorQuery()
            .select("#otbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/ot.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(
                      Number(0 == p ? C : p).toFixed(1) + "℃",
                      i / 2,
                      n - 28
                    );
                });
            }),
        (ot != I || t) &&
          wx
            .createSelectorQuery()
            .select("#owbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/ow.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(Math.trunc(I) + "W", i / 2, n - 28);
                });
            }),
        (ft != y || t) &&
          wx
            .createSelectorQuery()
            .select("#ahbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/ah.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(Number(y).toFixed(2), i / 2, n - 28);
                });
            }),
        (dt != V || t) &&
          wx
            .createSelectorQuery()
            .select("#whbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/wh.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(Number(V).toFixed(2), i / 2, n - 28);
                });
            }),
        (ut != W || t) &&
          wx
            .createSelectorQuery()
            .select("#tibt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/ti.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(W, i / 2, n - 28);
                });
            }),
        (ht != G || t) &&
          wx
            .createSelectorQuery()
            .select("#hqbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/sb.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(G + "秒", i / 2, 0.4 * n),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = "#00deff"),
                    a.fillText("电流缓启", i / 2 + 7, 0.73 * n),
                    a.arc(0.25 * i, 0.69 * n, 0.08 * i, 0, 2 * Math.PI),
                    (a.fillStyle = 0 == G ? "#888" : "#0f0"),
                    a.fill(),
                    (a.lineWidth = 1.5),
                    (a.strokeStyle = "#00deff"),
                    Gt(0.15 * i, 0.59 * n, 0.7 * i, 0.2 * n, 10, a);
                });
            }),
        (St != E || Ft != M || t) &&
          wx
            .createSelectorQuery()
            .select("#sa2bt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/sb.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 18px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(Number(M).toFixed(2) + "V", i / 2, 0.3 * n),
                    (a.fillStyle = "#fff"),
                    a.fillText(Number(E).toFixed(2) + "A", i / 2, 0.5 * n),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = "#00deff"),
                    a.fillText("二段功能", i / 2 + 7, 0.73 * n),
                    a.arc(0.25 * i, 0.69 * n, 0.08 * i, 0, 2 * Math.PI),
                    (a.fillStyle = 0 == E ? "#888" : "#0f0"),
                    a.fill(),
                    (a.lineWidth = 1.5),
                    (a.strokeStyle = "#00deff"),
                    Gt(0.15 * i, 0.59 * n, 0.7 * i, 0.2 * n, 10, a);
                });
            }),
        (gt != K || xt != O || t) &&
          wx
            .createSelectorQuery()
            .select("#sdbt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = "/img/sb.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 16px Kaiti"),
                    (a.fillStyle = "#fff"),
                    a.fillText(j(O), i / 2, 0.4 * n),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = "#00deff"),
                    a.fillText("充满关机", i / 2 + 7, 0.73 * n),
                    a.arc(0.25 * i, 0.69 * n, 0.08 * i, 0, 2 * Math.PI),
                    (a.fillStyle = 0 == K ? "#888" : "#0f0"),
                    a.fill(),
                    (a.lineWidth = 1.5),
                    (a.strokeStyle = "#00deff"),
                    Gt(0.15 * i, 0.59 * n, 0.7 * i, 0.2 * n, 10, a);
                });
            }),
        (mt != P || bt != k || t) &&
          wx
            .createSelectorQuery()
            .select("#ks1bt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = 1 == P ? "/img/ks2.png" : "/img/ks1.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = 1 == P ? "#fff" : "#999"),
                    a.fillText(Number(k[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                    a.fillText(Number(k[1]).toFixed(2) + "A", i / 2, 0.6 * n);
                });
            }),
        (mt != P || wt != R || t) &&
          wx
            .createSelectorQuery()
            .select("#ks2bt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = 2 == P ? "/img/ks2.png" : "/img/ks1.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = 2 == P ? "#fff" : "#999"),
                    a.fillText(Number(R[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                    a.fillText(Number(R[1]).toFixed(2) + "A", i / 2, 0.6 * n);
                });
            }),
        (tt = b),
        (mt != P || Nt != L || t) &&
          wx
            .createSelectorQuery()
            .select("#ks3bt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = 3 == P ? "/img/ks2.png" : "/img/ks1.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = 3 == P ? "#fff" : "#999"),
                    a.fillText(Number(L[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                    a.fillText(Number(L[1]).toFixed(2) + "A", i / 2, 0.6 * n);
                });
            }),
        (tt = b),
        (mt != P || Tt != U || t) &&
          wx
            .createSelectorQuery()
            .select("#ks4bt")
            .fields({ node: !0, size: !0 })
            .exec(function (t) {
              var e = t[0].node,
                i = t[0].width,
                n = t[0].height,
                a = e.getContext("2d"),
                o = wx.getWindowInfo().pixelRatio;
              (e.width = i * o), (e.height = n * o), a.scale(o, o);
              var r = e.createImage();
              (r.src = 4 == P ? "/img/ks2.png" : "/img/ks1.png"),
                (r.onload = function () {
                  a.drawImage(r, 0, 0, i, n),
                    (a.fillStyle = "#f00"),
                    (a.textAlign = "center"),
                    (a.font = "normal bold 13px Kaiti"),
                    (a.fillStyle = 4 == P ? "#fff" : "#999"),
                    a.fillText(Number(U[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                    a.fillText(Number(U[1]).toFixed(2) + "A", i / 2, 0.6 * n);
                });
            }),
        (tt = b),
        (gt = K),
        (xt = O),
        (St = E),
        (Ft = M),
        (ht = G),
        (ut = W),
        (dt = V),
        (ft = y),
        (ot = I),
        (rt = p),
        (tt = b),
        (at = T),
        (it = B),
        (ct = D),
        (st = A),
        (nt = v),
        (et = w),
        (lt = N),
        (bt = k),
        (wt = R),
        (Nt = L),
        (Tt = U),
        (mt = P),
        (S = 0));
    }
    Page({
      data: {
        rgb: "rgb(0,154,97)",
        pick: !1,
        Cr0: "rgb(255,255,255)",
        Cr1: "rgb(0,255,0)",
        Cr2: "rgb(0,200,255)",
        Cr3: "rgb(255,255,255)",
        Cr4: "rgb(96,255,200)",
        Cr5: "rgb(255,255,255)",
        Cr6: "rgb(255,148,48)",
        Cr7: "rgb(248,12,160)",
        Cr8: "rgb(255,255,255)",
        BIMG: "",
        Panel: 1,
        CAN: 10,
        SCAN: "Huawei",
        Mode: "A",
        OVT: 1,
        OAT: 1,
        OVF: 1,
        OAF: 1,
        FAN: 50,
        ShowBar: 0,
        TMW: "75℃3000W",
        UPDate: 5.2,
      },
      BTUP: function (t) {
        this.setData({ ShowBar: 4 != this.data.ShowBar ? 4 : -1 });
      },
      BTDDT: function (t) {
        this.setData({ ShowBar: 7 != this.data.ShowBar ? 7 : -1 });
      },
      BTKEY: function (t) {
        this.setData({ ShowBar: 8 != this.data.ShowBar ? 8 : -1 });
      },
      BTBLE: function (t) {
        this.setData({ ShowBar: 9 != this.data.ShowBar ? 9 : -1 });
      },
      BTCr: function (t) {
        this.setData({ ShowBar: 10 != this.data.ShowBar ? 10 : -1 });
      },
      BTLEDK: function (t) {
        this.setData({ ShowBar: 11 != this.data.ShowBar ? 11 : -1 });
      },
      BTLEDKS: function (t) {
        this.setData({ ShowBar: 12 != this.data.ShowBar ? 12 : -1 });
      },
      BTStart: function (t) {
        this.setData({ ShowBar: 13 != this.data.ShowBar ? 13 : -1 });
      },
      BTGIF: function (t) {
        this.setData({ ShowBar: 14 != this.data.ShowBar ? 14 : -1 });
      },
      BTOVT: function (t) {
        this.setData({ ShowBar: 0 != this.data.ShowBar ? 0 : -1 });
      },
      BTOAT: function (t) {
        this.setData({ ShowBar: 1 != this.data.ShowBar ? 1 : -1 });
      },
      BTOVF: function (t) {
        this.setData({ ShowBar: 2 != this.data.ShowBar ? 2 : -1 });
      },
      BTOAF: function (t) {
        this.setData({ ShowBar: 3 != this.data.ShowBar ? 3 : -1 });
      },
      BTUMT: function (t) {
        this.setData({ ShowBar: 5 != this.data.ShowBar ? 5 : -1 });
      },
      BTFAN: function (t) {
        this.setData({ ShowBar: 6 != this.data.ShowBar ? 6 : -1 });
      },
      BTCAN: function (t) {
        this.setData({ ShowBar: 16 != this.data.ShowBar ? 16 : -1 });
      },
      BTNTC: function (t) {
        this.setData({ ShowBar: 17 != this.data.ShowBar ? 17 : -1 });
      },
      BTSMW: function (t) {
        this.setData({ ShowBar: 18 != this.data.ShowBar ? 18 : -1 });
      },
      BTEN: function (t) {
        this.setData({ ShowBar: 19 != this.data.ShowBar ? 19 : -1 });
      },
      uset: function (t) {
        this.setData({ Panel: 3, ShowBar: 8 });
      },
      BTSMW1: function (t) {
        X("设置输出最大功率", "范围500-10000", function (t) {
          return (t = parseFloat(t)) > 1e4 || t < 500 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetSMW=" + t), void _("GetINF"));
        });
      },
      BTNTC1: function (t) {
        _("SetCFG=NTC," + (1 == this.data.NTC ? -1 : this.data.NTC + 1)),
          _("GetINF");
      },
      BTCAN1: function (t) {
        wx.showModal({
          title: "确认是否切换为华为",
          editable: !1,
          success: function (t) {
            t.confirm &&
              (_("SetCAN=1"),
              MSG("设置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 }));
          },
        });
      },
      BTCAN2: function (t) {
        wx.showModal({
          title: "确认是否切换为英可瑞",
          editable: !1,
          success: function (t) {
            t.confirm &&
              (_("SetCAN=2"),
              MSG("设置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 }));
          },
        });
      },
      BTCAN4: function (t) {
        wx.showModal({
          title: "确认是否切换为中兴",
          editable: !1,
          success: function (t) {
            t.confirm &&
              (_("SetCAN=4"),
              MSG("设置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 }));
          },
        });
      },
      BTCAN8: function (t) {
        wx.showModal({
          title: "确认是否切换为英飞源",
          editable: !1,
          success: function (t) {
            t.confirm &&
              (_("SetCAN=8"),
              MSG("设置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 }));
          },
        });
      },
      BTCAN16: function (t) {
        wx.showModal({
          title: "确认是否切换为EPS6020",
          editable: !1,
          success: function (t) {
            t.confirm &&
              (_("SetCAN=16"),
              MSG("设置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 }));
          },
        });
      },
      BTLEDK2: function (t) {
        X("设置关机屏幕亮度", "范围0-255", function (t) {
          return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=LEDK0," + t), void _("GetINF"));
        });
      },
      BTLEDK1: function (t) {
        X("设置开机屏幕亮度", "范围0-255", function (t) {
          return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=LEDK1," + t), void _("GetINF"));
        });
      },
      BTLEDKS1: function (t) {
        X("设置息屏时间", "范围0-255(秒)", function (t) {
          return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=Sleep," + t), void _("GetINF"));
        });
      },
      BTLEDKS2: function (t) {
        X("设置息屏屏幕亮度", "范围0-255", function (t) {
          return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=LEDK2," + t), void _("GetINF"));
        });
      },
      BTStart1: function (t) {
        X("设置初始页面时间", "范围3-15(秒)", function (t) {
          return (t = parseFloat(t)) > 15 || t < 3 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=WTi," + t), void _("GetINF"));
        });
      },
      BTStart2: function (t) {
        _("SetCFG=WTs," + (1 - this.data.WTs)), _("GetINF");
      },
      BTGIF1: function (t) {
        _("SetCFG=GIF," + (1 - this.data.GIF)), _("GetINF");
      },
      BT_GIF1: function (t) {
        It(GIF1);
      },
      BT_GIF2: function (t) {
        It(GIF2);
      },
      BT_GIF3: function (t) {
        It(GIF3);
      },
      BT_GIF4: function (t) {
        It(GIF4);
      },
      BT_GIF5: function (t) {
        It(GIF5);
      },
      pickColor: function (t) {
        "顶部标题" == this.data.title
          ? this.setData({ Cr0: t.detail.color })
          : "输出电压" == this.data.title
          ? this.setData({ Cr1: t.detail.color })
          : "输出电流" == this.data.title
          ? this.setData({ Cr2: t.detail.color })
          : "设置信息" == this.data.title
          ? this.setData({ Cr3: t.detail.color })
          : "统计信息" == this.data.title
          ? this.setData({ Cr4: t.detail.color })
          : "LOGO显示" == this.data.title
          ? this.setData({ Cr5: t.detail.color })
          : "功率显示" == this.data.title
          ? this.setData({ Cr6: t.detail.color })
          : "温度显示" == this.data.title
          ? this.setData({ Cr7: t.detail.color })
          : "电量显示" == this.data.title &&
            this.setData({ Cr8: t.detail.color });
      },
      Cr0: function () {
        this.setData({ pick: !0, title: "顶部标题", rgb: this.data.Cr0 });
      },
      Cr1: function () {
        this.setData({ rgb: this.data.Cr1, title: "输出电压", pick: !0 });
      },
      Cr2: function () {
        this.setData({ pick: !0, title: "输出电流", rgb: this.data.Cr2 });
      },
      Cr3: function () {
        this.setData({ pick: !0, title: "设置信息", rgb: this.data.Cr3 });
      },
      Cr4: function () {
        this.setData({ pick: !0, title: "统计信息", rgb: this.data.Cr4 });
      },
      Cr5: function () {
        this.setData({ pick: !0, title: "LOGO显示", rgb: this.data.Cr5 });
      },
      Cr6: function () {
        this.setData({ pick: !0, title: "功率显示", rgb: this.data.Cr6 });
      },
      Cr7: function () {
        this.setData({ pick: !0, title: "温度显示", rgb: this.data.Cr7 });
      },
      Cr8: function () {
        this.setData({ pick: !0, title: "电量显示", rgb: this.data.Cr8 });
      },
      BTCr1: function (t) {
        _("SetCFG=P0,00" + z(this.data.Cr0) + "0000 f01c"),
          _("SetCFG=P1,01" + z(this.data.Cr1) + "0020 9F26"),
          _("SetCFG=P2,02" + z(this.data.Cr2) + "0047 9F26"),
          _("SetCFG=P3,03" + z(this.data.Cr3) + "006e 9F26"),
          _("SetCFG=P4,04" + z(this.data.Cr4) + "0096 9F3e"),
          _("SetCFG=P5,05" + z(this.data.Cr5) + "A320 4d4d"),
          _("SetCFG=P6,06" + z(this.data.Cr6) + "50d6 4f1A"),
          _("SetCFG=P7,07" + z(this.data.Cr7) + "00d6 4f1A"),
          _("SetUI=08" + z(this.data.Cr8) + "A377 4d68");
      },
      BTEN1: function (t) {
        _("SetCFG=EN," + (1 - this.data.EN)), _("GetINF");
      },
      BTBLE1: function (t) {
        X("设置蓝牙名称", "", function (t) {
          return "" == t
            ? void Z("名字不能为空")
            : (h.easySendData(
                "SetCFG=SSID," +
                  (function (t) {
                    for (var e = 0, i = "CAN-", n = 0; n < t.length; n++)
                      if (
                        ((i += t[n]),
                        t[n].match(/[\u4e00-\u9fa5]/g) ? (e += 3) : e++,
                        e >= 24)
                      )
                        return i;
                    return i;
                  })(t) +
                  "\n",
                !0
              ),
              void _("GetINF"));
        });
      },
      BTBLE2: function (t) {
        X("设置蓝牙密码", "", function (t) {
          return "" == t
            ? void Z("密码不能为空")
            : (_("SetCFG=UPWD," + t), _("GetINF"), void Y(o, ""));
        });
      },
      BTKEY1: function (t) {
        _("SetKEY=" + (1 - this.data.KEY)), _("GetINF");
      },
      BTKEY2: function (t) {
        _("SetCFG=KRC," + (1 - this.data.KRC)), _("GetINF");
      },
      BTDDT1: function (t) {
        _("SetCFG=DDT," + (this.data.DDT >= 3 ? 0 : this.data.DDT + 1)),
          _("GetINF");
      },
      BTUP1: function (t) {
        this.data.CAN >= this.data.UPDate ||
          wx.showModal({
            title: "确认是否开始固件升级",
            editable: !1,
            content:
              "新版本不再支持专业版,所有功能已迁入炫酷版,已支持中英双语.",
            success: function (t) {
              if (t.confirm)
                return (
                  _(
                    "UPDate=http://bin.bemfa.com/b/3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin"
                  ),
                  void Z("已进入升级状态,请观察屏幕显示.")
                );
            },
          });
      },
      BTUP2: function (t) {
        wx.setClipboardData({ data: "设备ID:" + o });
      },
      BTUP0: function (t) {
        wx.showModal({
          title: "确认是否开始固件回退",
          editable: !1,
          success: function (t) {
            if (t.confirm)
              return (
                _(
                  "UPDate=http://bin.bemfa.com/b/233BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin"
                ),
                void Z("已进入升级状态,请观察屏幕显示.")
              );
          },
        });
      },
      BTUFS: function (t) {
        X("设置温度加速值", "范围3-15", function (t) {
          return (t = parseFloat(t)) > 15 || t < 3 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=UFS," + t), void _("GetINF"));
        });
      },
      BTAFS: function (t) {
        X("设置电流加速值", "范围0.1-2.0", function (t) {
          return (t = parseFloat(t)) > 2 || t < 0.1 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=AFS," + t), void _("GetINF"));
        });
      },
      BTLFS: function (t) {
        X("设置初始风速值", "范围30-100", function (t) {
          return (t = parseFloat(t)) > 100 || t < 30 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=LFS," + t), void _("GetINF"));
        });
      },
      BTTMC: function (t) {
        X("设置超温限制温度", "范围50-90", function (t) {
          return (t = parseFloat(t)) > 90 || t < 50 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=UMT," + t), void _("GetINF"));
        });
      },
      BTTMC1: function (t) {
        X("设置超温退出温度", "范围40-90", function (t) {
          return (t = parseFloat(t)) > 90 || t < 40 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=OMT," + t), void _("GetINF"));
        });
      },
      BTTMW: function (t) {
        X("设置超温限制功率", "范围500-4000", function (t) {
          return (t = parseFloat(t)) > 4e3 || t < 500 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=TMW," + t), void _("GetINF"));
        });
      },
      BTOAF1: function (t) {
        X("设置输出电流补偿系数", "范围0.1-5.0", function (t) {
          return (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=OAF," + t), void _("GetINF"));
        });
      },
      BTOVF1: function (t) {
        X("设置输出电压补偿系数", "范围0.1-5.0", function (t) {
          return (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetCFG=OVF," + t), void _("GetINF"));
        });
      },
      BTOVT0: function (t) {
        A < 10
          ? Z("当前电压小于10V 不能进行校正")
          : (_("ResetOVD"),
            _("GetINF"),
            X("输入实际测量出的输出电压", "", function (t) {
              if ((t = parseFloat(t)) > 1e3 || t < 0.1 || !isFinite(t))
                Z("超出设置范围");
              else {
                var e = Number(t / A).toFixed(6),
                  i = Number(t / v).toFixed(6);
                _("SetOVD=" + i + "," + e),
                  a.includes("Increase")
                    ? _(
                        "SetSVF=" +
                          (20 * i).toFixed(2) +
                          "," +
                          (100 * i).toFixed(2)
                      )
                    : a.includes("Huawei")
                    ? _(
                        "SetSVF=" +
                          (41 * i).toFixed(2) +
                          "," +
                          (58.5 * i).toFixed(2)
                      )
                    : a.includes("ZTE")
                    ? _(
                        "SetSVF=" +
                          (41 * i).toFixed(2) +
                          "," +
                          (59 * i).toFixed(2)
                      )
                    : a.includes("EPS")
                    ? _(
                        "SetSVF=" +
                          (44 * i).toFixed(2) +
                          "," +
                          (61 * i).toFixed(2)
                      )
                    : a.includes("INFY"),
                  _("GetINF");
              }
            }));
      },
      BTOVT1: function (t) {
        X("显示电压补偿", "当前补偿值:" + this.data.OVT, function (t) {
          (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
            ? Z("超出设置范围")
            : (_("SetCFG=OVT," + t), _("GetINF"));
        });
      },
      BTOVD1: function (t) {
        X("设置电压补偿", "当前补偿值:" + this.data.OVD, function (t) {
          (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
            ? Z("超出设置范围")
            : (_("SetCFG=OVD," + t), _("GetINF"));
        });
      },
      BTOVS: function (t) {
        X(
          "设置电压范围",
          "当前范围:" + this.data.LSV + "-" + this.data.HSV,
          function (t) {
            (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
              ? (_("SetSVF=" + RegExp.$1 + "," + RegExp.$2), _("GetINF"))
              : Z("输入格式错误!");
          }
        );
      },
      BTOST0: function (t) {
        A < 10
          ? Z("当前电压小于10V 不能进行校正")
          : (_("ResetO2D"),
            _("GetINF"),
            X("输入实际测量出的输出电压", "", function (t) {
              if ((t = parseFloat(t)) > 1e3 || t < 0.1 || !isFinite(t))
                Z("超出设置范围");
              else {
                var e = Number(t / A).toFixed(6),
                  i = Number(t / v).toFixed(6);
                _("SetO2D=" + i + "," + e),
                  _(
                    "SetS2F=" +
                      (41 * i).toFixed(2) +
                      "," +
                      (58.5 * i).toFixed(2)
                  ),
                  _("GetINF");
              }
            }));
      },
      BTOAT0: function (t) {
        D < 5
          ? Z("电流校正时输出电流必须大于5A且处于恒流状态")
          : (_("ResetOAD"),
            _("GetINF"),
            X("输入实际测量出的输出电流", "", function (t) {
              if ((t = parseFloat(t)) > 100 || t < 0.1 || !isFinite(t))
                Z("超出设置范围");
              else {
                var e = Number(t / D).toFixed(4);
                _("SetOAD=" + Number(t / B).toFixed(4) + "," + e), _("GetINF");
              }
            }));
      },
      BTOAT1: function (t) {
        X("显示电流补偿", "当前补偿值:" + this.data.OAT, function (t) {
          (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
            ? Z("超出设置范围")
            : (_("SetCFG=OAT," + t), _("GetINF"));
        });
      },
      BTOAD1: function (t) {
        X("设置电流补偿", "当前补偿值:" + this.data.OAD, function (t) {
          (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
            ? Z("超出设置范围")
            : (_("SetCFG=OAD," + t), _("GetINF"));
        });
      },
      BTOAS: function (t) {
        X(
          "设置流范围",
          "当前范围:" + this.data.LSA + "-" + this.data.HSA,
          function (t) {
            (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
              ? (_("SetCFG=LSA," + RegExp.$1 + ",0"),
                _("SetCFG=HSA," + RegExp.$2),
                _("GetINF"))
              : Z("输入格式错误!");
          }
        );
      },
      BTGPWD: function (t) {
        X("修改系统设置密码", "", function (t) {
          "" != (t = t.trim())
            ? (_("SetGPWD=" + t), _("GetINF"))
            : Z("输入格式错误!");
        });
      },
      BTRST: function (t) {
        wx.showModal({
          title: "确认是否重置设置",
          editable: !1,
          success: function (t) {
            t.confirm &&
              (_("Reset"),
              MSG("重置已发送,设备正在重启!"),
              wx.navigateBack({ delta: 0 }));
          },
        });
      },
      BTBC: function (t) {
        this.setData({ Panel: 1 }), Bt(1);
      },
      pwrbt: function (t) {
        _("SetPWR=" + (1 - b)), _("GetINF");
      },
      owbt: function (t) {
        X("设置输出功率限制", "范围300-" + this.data.SMW + "W", function (t) {
          return (t = parseFloat(t)) > i.data.SMW || t < 300 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetUMW=" + t), void _("GetINF"));
        });
      },
      tibt: function (t) {
        X("设置预约时间", "范围0-1200分钟", function (t) {
          return (t = parseFloat(t)) > 1200 || t < 0 || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetYS=" + t), void _("GetINF"));
        });
      },
      ks1bt: function (t) {
        var e = Number(k[0]),
          i = Number(k[1]);
        e > r || e < l
          ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
              return (t = parseFloat(t)) > r || t < l || !isFinite(t)
                ? void Z("超出设置范围")
                : ((P = 1),
                  Bt(),
                  _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",1"),
                  void _("GetINF"));
            })
          : ((P = 1), Bt(), _("SetKS=" + e + "," + i + ",1"), _("GetINF"));
      },
      ks2bt: function (t) {
        var e = Number(R[0]),
          i = Number(R[1]);
        e > r || e < l
          ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
              return (t = parseFloat(t)) > r || t < l || !isFinite(t)
                ? void Z("超出设置范围")
                : ((P = 2),
                  Bt(),
                  _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",2"),
                  void _("GetINF"));
            })
          : ((P = 2), Bt(), _("SetKS=" + e + "," + i + ",2"), _("GetINF"));
      },
      ks3bt: function (t) {
        var e = Number(L[0]),
          i = Number(L[1]);
        e > r || e < l
          ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
              return (t = parseFloat(t)) > r || t < l || !isFinite(t)
                ? void Z("超出设置范围")
                : ((P = 4),
                  Bt(),
                  _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",3"),
                  void _("GetINF"));
            })
          : ((P = 3), Bt(), _("SetKS=" + e + "," + i + ",3"), _("GetINF"));
      },
      ks4bt: function (t) {
        var e = Number(U[0]),
          i = Number(U[1]);
        e > r || e < l
          ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
              return (t = parseFloat(t)) > r || t < l || !isFinite(t)
                ? void Z("超出设置范围")
                : ((P = 4),
                  Bt(),
                  _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",4"),
                  void _("GetINF"));
            })
          : ((P = 4), Bt(), _("SetKS=" + e + "," + i + ",4"), _("GetINF"));
      },
      hqbt2: function (t) {
        s = t.touches[0];
      },
      hqbt1: function (t) {
        s = t.touches[0];
      },
      hqbt0: function (t) {
        s.y < 0 ||
          s.y > 120 ||
          s.x < 0 ||
          s.x > 120 ||
          (s.y > 70
            ? (_("SetHQ=" + (0 == G ? 10 : 0)), _("GetINF"))
            : X("设置缓启时间", "范围0-20秒", function (t) {
                (t = parseFloat(t)) >= 0 && t <= 20 && isFinite(t)
                  ? (_("SetHQ=" + t), _("GetINF"))
                  : Z("输入错误");
              }));
      },
      nvbt: function (t) {
        X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
          return (
            _("CheckGPWD=" + t),
            (t = parseFloat(t)) > r || t < l || !isFinite(t)
              ? void Z("超出设置范围")
              : (_("SetVA=" + t + "," + B), void _("GetINF"))
          );
        });
      },
      nabt: function (t) {
        X("设置输出电流", "范围" + $ + "-" + Q + "A", function (t) {
          return (t = parseFloat(t)) > Q || t < $ || !isFinite(t)
            ? void Z("超出设置范围")
            : (_("SetVA=" + v + "," + t), void _("GetINF"));
        });
      },
      sa2bt2: function (t) {
        c = t.touches[0];
      },
      sa2bt1: function (t) {
        c = t.touches[0];
      },
      sa2bt0: function (t) {
        c.y < 0 ||
          c.y > 120 ||
          c.x < 0 ||
          c.x > 120 ||
          (c.y > 70
            ? (_("SetVA2=" + (v - 3) + "," + (0 == E ? 10 : 0)), _("GetINF"))
            : c.y > 40
            ? X("设置二段电流", "范围" + $ + "-" + Q + "A", function (t) {
                return (t = parseFloat(t)) > Q || t < $ || !isFinite(t)
                  ? void Z("超出设置范围")
                  : (_("SetVA2=" + M + "," + t), void _("GetINF"));
              })
            : c.y > 0 &&
              X("设置二段电压", "范围" + l + "-" + r + "V", function (t) {
                return (t = parseFloat(t)) > r || t < l || !isFinite(t)
                  ? void Z("超出设置范围")
                  : (_("SetVA2=" + t + "," + E), void _("GetINF"));
              }));
      },
      sdbt2: function (t) {
        f = t.touches[0];
      },
      sdbt1: function (t) {
        f = t.touches[0];
      },
      sdbt0: function (t) {
        f.y < 0 ||
          f.y > 120 ||
          f.x < 0 ||
          f.x > 120 ||
          (f.y > 70
            ? (_("SetUSD=" + (0 == K ? 30 : 0)), _("GetINF"))
            : X("设置延时时间(分钟)", "电流小于0.5A时倒计时", function (t) {
                (t = parseFloat(t)) >= 0 && t <= 600 && isFinite(t)
                  ? (_("SetUSD=" + t), _("GetINF"))
                  : Z("输入错误");
              }));
      },
      onLoad: function (t) {
        (F = 1 == t.GM ? 1 : H("GM")),
          (g = 0),
          (i = this).setData({ UPDate: "5.25", APP: "1.08" });
        var s = (0, u.GetGIF)(1);
        s.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var c = RegExp.$2;
        (s = (0, u.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var f = RegExp.$2;
        (s = (0, u.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var d = RegExp.$2;
        (s = (0, u.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var S = RegExp.$2;
        (s = (0, u.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var m = RegExp.$2;
        i.setData({
          GIF1: "data:image/gif;base64," + c,
          GIF2: "data:image/gif;base64," + f,
          GIF3: "data:image/gif;base64," + d,
          GIF4: "data:image/gif;base64," + S,
          GIF5: "data:image/gif;base64," + m,
        }),
          h.onBLEConnectionStateChange(function () {
            wx.navigateBack({ delta: 0 });
          }),
          h.onBLECharacteristicValueChange(function (t, s) {
            t.trim()
              .split("\n")
              .forEach(function (t) {
                if ((console.log("Msg:" + t), t.match(/Receive Data End/)))
                  (pt = 0), (Ct = []), Z("发送完成!");
                else if (t.startsWith("Receive")) Dt();
                else if (t.startsWith("CAN") && 0 == g) {
                  (g = 1),
                    (n = q(t, "TAG", "Cxjdwx")),
                    (a = q(t, "CAN")),
                    (o = q(t, "CHIP")),
                    Bt(1),
                    "Cxjdwx" == n && (n = "未激活"),
                    a.match(/([^-]+)-([\d\.]+)/),
                    i.setData({
                      CAN: RegExp.$2,
                      SCAN: RegExp.$1,
                      ID: o,
                      ACT: n,
                    });
                  var s = H(o);
                  F &&
                    (s = (Number(o) + 19880914).toString(16).substring(4, 8)),
                    _("CheckUPWD=" + s);
                } else if (t.startsWith("Admin Password Check Passed"))
                  i.setData({ Panel: 2 });
                else if (t.startsWith("User Password Check Failed!"))
                  wx.showModal({
                    title: "输入蓝牙密码",
                    editable: !0,
                    showCancel: !1,
                    placeholderText: "设备ID:" + o,
                    success: function (t) {
                      t.confirm &&
                        (Y(o, t.content), _("CheckUPWD=" + t.content));
                    },
                  });
                else if (t.startsWith("User Password Check Passed!")) {
                  if (("Cxjdwx" == n || "未激活" == n) && !F) {
                    var c = new Date();
                    _(
                      "SetTAG=" +
                        c.getFullYear() +
                        "-" +
                        (c.getMonth() + 1) +
                        "-" +
                        c.getDate()
                    );
                  }
                  _("GetINF");
                } else if (t.startsWith("Mode")) {
                  (w = q(t, "Mode", "")),
                    "0" == q(t, "OL")
                      ? (x = "CAN通讯异常")
                      : "SP" == w
                      ? (x = "充电器已关机")
                      : "WT" == w
                      ? (x = "等待接入电池")
                      : "A" == w
                      ? (x = "正在充电中")
                      : "B" == w
                      ? (x = "第二段充电中")
                      : "T" == w
                      ? (x = "预约等待中")
                      : "C" == w
                      ? (x = "充电完成")
                      : "S" == w && (x = "充电完成(已关机)"),
                    (I = Number(q(t, "OW"))),
                    Number(q(t, "IW")),
                    (O = q(t, "SDT")),
                    (A = Number(q(t, "OV"))),
                    (D = Number(q(t, "OA"))),
                    (y = q(t, "AH")),
                    (V = q(t, "WH")),
                    (N = Math.trunc(q(t, "SOC", "100"))),
                    (T = Number(q(t, "IV", "0"))),
                    (C = Number(q(t, "IT"))),
                    (p = Number(q(t, "OT"))),
                    (W = q(t, "Ti", "")),
                    i.setData({ NFS: Number(q(t, "NFS", "1")) }),
                    Bt();
                } else
                  t.startsWith("OV=")
                    ? ((A = Number(q(t, "OV"))),
                      (D = Number(q(t, "OA"))),
                      (I = Number(q(t, "OW"))),
                      Bt())
                    : t.startsWith("USV=")
                    ? ((P = Number(q(t, "KSV", "1"))),
                      (G = Number(q(t, "HQ", "0"))),
                      (r = Number(q(t, "HSV", "100"))),
                      (l = Number(q(t, "LSV", "20"))),
                      ($ = Number(q(t, "LSA", "1"))),
                      (Q = Number(q(t, "HSA", "35"))),
                      (B = Number(q(t, "USA", D))),
                      (v = Number(q(t, "USV", A))),
                      (M = Number(q(t, "SV2", A))),
                      (E = Number(q(t, "SA2", "0"))),
                      (K = Number(q(t, "SD", "0"))),
                      (b = Number(q(t, "PON", "0"))),
                      i.setData({
                        OVT: Number(q(t, "OVT", "1")),
                        OVD: Number(q(t, "OVD", "1")),
                        OAT: Number(q(t, "OAT", "1")),
                        OAD: Number(q(t, "OAD", "1")),
                        UFS: Number(q(t, "UFS", "1")),
                        UMT: Number(q(t, "UMT", "1")),
                        TMW: Number(q(t, "TMW", "1")),
                        KEY: Number(q(t, "KON", "1")),
                        NTC: Number(q(t, "NTC", "-1")),
                        SMW: Number(q(t, "SMW", "0")),
                        EN: Number(q(t, "EN", "0")),
                        LSA: $,
                        HSA: Q,
                        LSV: l,
                        HSV: r,
                      }))
                    : t.startsWith("KS1=") &&
                      ((k = q(t, "KS1", "58.8,15")
                        .replace("V", ",")
                        .split(",")),
                      (R = q(t, "KS2", "67.2,15").replace("V", ",").split(",")),
                      (L = q(t, "KS3", "71.4,15").replace("V", ",").split(",")),
                      (U = q(t, "KS4", "84,15").replace("V", ",").split(",")),
                      i.setData(
                        e(
                          e(
                            e(
                              e(
                                e(
                                  e(
                                    e(
                                      e(
                                        e(
                                          {
                                            L2V: Number(q(t, "L2V", "1")),
                                            H2V: Number(q(t, "H2V", "35")),
                                            CKUD: Number(q(t, "CKUD", "0")),
                                            CKA2: Number(q(t, "CKA2", "0")),
                                            KRC: Number(q(t, "KRC", "0")),
                                            DDT: Number(q(t, "DDT", "1")),
                                            GIF: Number(q(t, "GIF", "0")),
                                            O2D: Number(q(t, "O2D", "1")),
                                            SWV: Number(q(t, "SWV", "0")),
                                            AFS: Number(q(t, "AFS", "0")),
                                            LFS: Number(q(t, "LFS", "0")),
                                            OMT: Number(q(t, "OMT", "0")),
                                          },
                                          "KRC",
                                          Number(q(t, "KRC", "1"))
                                        ),
                                        "LEDK0",
                                        Number(q(t, "LED0", "0"))
                                      ),
                                      "LEDK1",
                                      Number(q(t, "LED1", "0"))
                                    ),
                                    "LEDK2",
                                    Number(q(t, "LED2", "0"))
                                  ),
                                  "Sleep",
                                  Number(q(t, "SLP", "0"))
                                ),
                                "StartTi",
                                Number(q(t, "STi", "0"))
                              ),
                              "WTs",
                              Number(q(t, "WTs", "0"))
                            ),
                            "UBLE",
                            q(t, "UBLE", "")
                          ),
                          "UPWD",
                          q(t, "UPWD", "")
                        )
                      ),
                      Bt());
              });
          });
      },
      onReady: function () {},
      onShow: function () {
        (m = 0), Bt(1);
      },
      onHide: function () {
        m = 1;
      },
      onUnload: function () {
        h.onBLEConnectionStateChange(function () {}), h.closeBLEConnection();
      },
      onPullDownRefresh: function () {},
      onReachBottom: function () {},
      onShareAppMessage: function () {},
    });
  }
);
require("pages/NewUI/NewUI.js");
__wxRoute = "pages/NewUI1/NewUI";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/NewUI1/NewUI.js";
define(
  "pages/NewUI1/NewUI.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var t,
      e,
      a,
      n,
      i,
      o,
      r,
      s,
      c,
      u,
      f,
      h,
      F,
      d,
      S,
      l,
      p,
      g,
      T,
      C,
      B,
      x,
      D,
      m,
      w,
      E,
      O,
      v,
      I,
      A,
      G,
      b,
      R,
      $,
      N,
      L,
      W,
      M,
      U,
      K,
      V,
      P,
      y,
      k,
      Y,
      H,
      j,
      q,
      _,
      Q,
      Z,
      z,
      X,
      J,
      tt,
      et,
      at,
      nt,
      it,
      ot,
      rt,
      st,
      ct,
      ut,
      ft,
      ht,
      Ft,
      dt,
      St,
      lt,
      pt,
      gt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      Tt = require("../../@babel/runtime/helpers/asyncToGenerator"),
      Ct = require("../../445F65219E166AAF22390D2641262D70.js"),
      Bt = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
      xt = 0,
      Dt = 0,
      mt = "设备连接成功",
      wt = "1,27,30,欢迎",
      Et = "1,57,30,使用",
      Ot = 0,
      vt = "ff",
      It = "ff",
      At = "ff",
      Gt = wx;
    function bt(t, e) {
      var a =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : function () {};
      Gt.showModal({
        title: t,
        editable: !0,
        placeholderText: e,
        confirmText: $ ? "YES" : "确定",
        cancelText: $ ? "NO" : "取消",
        success: function (t) {
          t.confirm && a(t.content);
        },
      });
    }
    function Rt(t, e, a, n) {
      var i =
        arguments.length > 4 && void 0 !== arguments[4]
          ? arguments[4]
          : function () {};
      Gt.showModal({
        title: $ ? e : t,
        editable: !0,
        placeholderText: ($ ? "Range:" : "范围:") + a + "-" + n,
        confirmText: $ ? "YES" : "确定",
        cancelText: $ ? "NO" : "取消",
        success: function (t) {
          if (t.confirm) {
            var e = parseFloat(t.content);
            if (e > Number(n) || e < Number(a) || !isFinite(e))
              return void (0, Ct.Toast)(
                $ ? "Beyond the set range" : "超出设置范围"
              );
            i(e);
          }
        },
      });
    }
    function $t(t, e, a, n) {
      var i =
        arguments.length > 4 && void 0 !== arguments[4]
          ? arguments[4]
          : function () {};
      Gt.showModal({
        title: $ ? e : t,
        editable: !0,
        placeholderText: $ ? n : a,
        confirmText: $ ? "YES" : "确定",
        cancelText: $ ? "NO" : "取消",
        success: function (t) {
          if (t.confirm) {
            var e = t.content.trim();
            if ("" == e)
              return void (0, Ct.Toast)(
                $ ? "Input cannot be empty" : "输入不能为空"
              );
            i(e);
          }
        },
      });
    }
    function Nt(t, e) {
      var a =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : function () {};
      Gt.showModal({
        title: $ ? e : t,
        editable: !1,
        placeholderText: $ ? n : a,
        confirmText: $ ? "YES" : "确定",
        cancelText: $ ? "NO" : "取消",
        success: function (t) {
          t.confirm && i(t);
        },
      });
    }
    function Lt(t) {
      return (
        t.match(/#(..)(..)(..)/),
        (
          ((parseInt(RegExp.$1, 16) >> 3) << 11) +
          ((parseInt(RegExp.$2, 16) >> 2) << 5) +
          (parseInt(RegExp.$3, 16) >> 3)
        )
          .toString(16)
          .padStart(4, "0")
      );
    }
    function Wt(t) {
      var e = Math.floor(t / 3600),
        a = Math.floor((t % 3600) / 60),
        n = Math.floor(t % 60);
      return (
        String(e).padStart(2, "0") +
        ":" +
        String(a).padStart(2, "0") +
        ":" +
        String(n).padStart(2, "0")
      );
    }
    function Mt(t) {
      return Ut.apply(this, arguments);
    }
    function Ut() {
      return (Ut = Tt(
        gt().mark(function t(e) {
          return gt().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if ((console.log("Send:" + e), 0 == Vt)) {
                    t.next = 4;
                    break;
                  }
                  return (
                    (0, Ct.Toast)(
                      $
                        ? "There are unfinished sending tasks"
                        : "有发送任务未完成"
                    ),
                    t.abrupt("return")
                  );
                case 4:
                  return (
                    (e = e.substring(0, 40)),
                    console.log("Send:" + e),
                    (t.next = 8),
                    Bt.easySendData1(e, !0)
                  );
                case 8:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    var Kt = [""],
      Vt = 0;
    function Pt(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      0 == Vt
        ? Gt.showModal({
            title: $ ? "Confirm whether to send" : "确认是否发送",
            editable: !1,
            confirmText: $ ? "YES" : "确定",
            cancelText: $ ? "NO" : "取消",
            success: function (a) {
              if (a.confirm) {
                t.match(/^DataStart=([^{]+){(.+)}(DataEnd)$/),
                  (Vt = 0),
                  ((Kt = [])[0] = "F1" + Ht(RegExp.$1));
                for (
                  var n = e ? RegExp.$2 : kt(RegExp.$2), i = 0;
                  i < n.length;
                  i += 240
                )
                  Vt++, (Kt[Vt] = "F2" + n.slice(i, i + 240));
                (Kt[Kt.length] = "F3"), (Vt = 0), yt();
              }
            },
          })
        : (0, Ct.Toast)(
            $ ? "There are unfinished sending tasks" : "有发送任务未完成"
          );
    }
    function yt(t) {
      var e = Kt[Vt];
      Bt.easySendData1(e, !0),
        (0, Ct.Toast)(
          ($ ? "Sending:" : "发送进度:") +
            ((Vt / Kt.length) * 100).toFixed(2) +
            "%"
        ),
        Vt++;
    }
    function kt(t) {
      if (!t) return t;
      var e,
        a,
        n,
        i,
        o,
        r,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        c = 0,
        u = 0,
        f = [];
      t += "";
      do {
        (e =
          ((r =
            (s.indexOf(t.charAt(c++)) << 18) |
            (s.indexOf(t.charAt(c++)) << 12) |
            ((i = s.indexOf(t.charAt(c++))) << 6) |
            (o = s.indexOf(t.charAt(c++)))) >>
            16) &
          255),
          (a = (r >> 8) & 255),
          (n = 255 & r),
          (f[u++] =
            64 === i
              ? e.toString(16).padStart(2, "0")
              : 64 === o
              ? e.toString(16).padStart(2, "0") +
                a.toString(16).padStart(2, "0")
              : e.toString(16).padStart(2, "0") +
                a.toString(16).padStart(2, "0") +
                n.toString(16).padStart(2, "0"));
      } while (c < t.length);
      return f.join("");
    }
    function Yt() {
      0 == Ot
        ? t.setData({ Cr0: "#" + vt + It + At })
        : 1 == Ot
        ? t.setData({ Cr1: "#" + vt + It + At })
        : 2 == Ot
        ? t.setData({ Cr2: "#" + vt + It + At })
        : 3 == Ot
        ? t.setData({ Cr3: "#" + vt + It + At })
        : 4 == Ot
        ? t.setData({ Cr4: "#" + vt + It + At })
        : 5 == Ot
        ? t.setData({ Cr5: "#" + vt + It + At })
        : 6 == Ot
        ? t.setData({ Cr6: "#" + vt + It + At })
        : 7 == Ot
        ? t.setData({ Cr7: "#" + vt + It + At })
        : 8 == Ot && t.setData({ Cr8: "#" + vt + It + At });
    }
    function Ht(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      t = String(t);
      for (var a = "", n = 0; n < t.length; n++)
        a += t.charCodeAt(n).toString(16).padStart(2, "0");
      return e && (a = a.padEnd(2 * e, "0")), a;
    }
    function jt(t) {
      for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
        var o = t.substr(2 * i, 2),
          r = parseInt(o, 16);
        a && r
          ? ((n += "%" + o),
            (a -= 1) || ((e += decodeURIComponent(n)), (n = "")))
          : (r >= 224) & (r <= 239)
          ? ((n += "%" + o), (a = 2))
          : r && (e += String.fromCharCode(r));
      }
      return e;
    }
    function qt(t) {
      return Math.floor(100 * t)
        .toString(16)
        .padStart(8, "0");
    }
    function _t(t) {
      return Math.floor(t).toString(16).padStart(2, "0");
    }
    function Qt(t, e) {
      return 0.01 * parseInt(t.substring(e, e + 8), 16);
    }
    function Zt(t, e) {
      return parseInt(t.substring(e, e + 2), 16);
    }
    Page({
      data: {
        nbsp: "　",
        Cr0: "#ffffff",
        Cr1: "#00ff00",
        Cr2: "#00c8ff",
        Cr3: "#ffffff",
        Cr4: "#60ffc8",
        Cr5: "#ffffff",
        Cr6: "#ff9430",
        Cr7: "#f80ca0",
        Cr8: "#ffffff",
        Cri: 0,
        CR: 255,
        CG: 255,
        CB: 255,
        LOGO: "欢迎使用",
        LOGO1: "1,27,30,欢迎",
        LOGO2: "1,57,30,使用",
        BIMG: "",
        SA: "0.00",
        SV: "0.00",
        Sv: "0.00",
        Sa: "0.00",
        SOC: 0,
        Sd: "00:00:00",
        SD: 0,
        EEI: "0.00",
        EES: "0.00",
        IV: "0.00",
        IA: "0.00",
        IT: "0.00",
        IW: "0.00",
        Ah: "0.00",
        Wh: "0.00",
        Ti: "00:00:00",
        KS1: [54.6, 15],
        KS2: [64.8, 15],
        KS3: [72.4, 15],
        KS4: [84, 15],
        KSi: 1,
        OV: "0.00",
        OA: "0.00",
        OT: "0.00",
        OW: "0.00",
        AH: "0.00",
        WH: "0.00",
        TI: "00:00:00",
        HQ: 14,
        ShowM: 0,
        APP: "1.09",
        STR: "设备连接异常",
        CVer: 5.5,
        Panel: 1,
        CAN: 10,
        SCAN: "Unknown",
        Mode: "A",
        OVT: 1,
        OAT: 1,
        OVF: 1,
        OAF: 1,
        FAN: 50,
        ShowBar: 0,
        TMW: "75℃3000W",
        UPDate: 5.2,
      },
      BTUP: function (t) {
        this.setData({ ShowBar: 4 != this.data.ShowBar ? 4 : -1 });
      },
      BTDDT: function (t) {
        this.setData({ ShowBar: 7 != this.data.ShowBar ? 7 : -1 });
      },
      BTKEY: function (t) {
        this.setData({ ShowBar: 8 != this.data.ShowBar ? 8 : -1 });
      },
      BTBLE: function (t) {
        this.setData({ ShowBar: 9 != this.data.ShowBar ? 9 : -1 });
      },
      BTCr: function (t) {
        this.setData({ ShowBar: 10 != this.data.ShowBar ? 10 : -1 });
      },
      BTLEDK: function (t) {
        this.setData({ ShowBar: 11 != this.data.ShowBar ? 11 : -1 });
      },
      BTLEDKS: function (t) {
        this.setData({ ShowBar: 12 != this.data.ShowBar ? 12 : -1 });
      },
      BTStart: function (t) {
        this.setData({ ShowBar: 13 != this.data.ShowBar ? 13 : -1 });
      },
      BTGIF: function (t) {
        this.setData({ ShowBar: 14 != this.data.ShowBar ? 14 : -1 });
      },
      BTOVT: function (t) {
        this.setData({ ShowBar: 0 != this.data.ShowBar ? 0 : -1 });
      },
      BTOAT: function (t) {
        this.setData({ ShowBar: 1 != this.data.ShowBar ? 1 : -1 });
      },
      BTOVF: function (t) {
        this.setData({ ShowBar: 2 != this.data.ShowBar ? 2 : -1 });
      },
      BTOAF: function (t) {
        this.setData({ ShowBar: 3 != this.data.ShowBar ? 3 : -1 });
      },
      BTUMT: function (t) {
        this.setData({ ShowBar: 5 != this.data.ShowBar ? 5 : -1 });
      },
      BTFAN: function (t) {
        this.setData({ ShowBar: 6 != this.data.ShowBar ? 6 : -1 });
      },
      BTCAN: function (t) {
        this.setData({ ShowBar: 16 != this.data.ShowBar ? 16 : -1 });
      },
      BTNTC: function (t) {
        this.setData({ ShowBar: 17 != this.data.ShowBar ? 17 : -1 });
      },
      BTSMW: function (t) {
        this.setData({ ShowBar: 18 != this.data.ShowBar ? 18 : -1 });
      },
      BTEN: function (t) {
        this.setData({ ShowBar: 19 != this.data.ShowBar ? 19 : -1 });
      },
      BTLOGO: function (t) {
        this.setData({ ShowBar: 20 != this.data.ShowBar ? 20 : -1 });
      },
      BTCKA: function (t) {
        this.setData({ ShowBar: 21 != this.data.ShowBar ? 21 : -1 });
      },
      uset: function (t) {
        (2 == Dt || xt) &&
          this.setData({ Panel: 3, ShowBar: 8, LOGO: $ ? "Preview" : "预览" });
      },
      SetSM: function (t) {
        0 == this.data.ShowM
          ? this.setData({ ShowM: 1 })
          : (this.data.ShowM, this.setData({ ShowM: 0 })),
          (0, Ct.SetCFG)("ShowM", this.data.ShowM);
      },
      BTSMW1: function (t) {
        Rt(
          "设置输出最大功率",
          "Set maximum output power",
          "500",
          "10000",
          function (t) {
            Mt("F84E" + qt(t)), Mt("FF");
          }
        );
      },
      BTLOGO0: function (e) {
        "预览" == t.data.LOGO || "Preview" == t.data.LOGO
          ? (Gt.showToast({
              content: "正在生成预览",
              title: "正在生成预览",
              type: "loading",
              icon: "loading",
              duration: 46e5,
              mask: !0,
            }),
            t.SetLOGO(wt + "|" + Et, t))
          : ("发送" != t.data.LOGO && "Send" != t.data.LOGO) || Pt(n, 1),
          t.setData({ ShowBar: 20, LOGO: $ ? "Preview" : "预览" });
      },
      BTLOGO1: function (e) {
        $t("设置第一行LOGO", "Set the first line logo", wt, wt, function (e) {
          if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) wt = e;
          else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/))
            (wt = "1,27,30," + RegExp.$1), (Et = "1,57,30," + RegExp.$2);
          else {
            if (!e.match(/^([\u4e00-\u9fa5]{2})$/))
              return void (0, Ct.Toast)(
                $ ? "Input format error" : "输入格式错误"
              );
            wt = "1,27,30," + RegExp.$1;
          }
          t.setData({ LOGO1: wt, LOGO2: Et, LOGO: $ ? "Preview" : "预览" });
        });
      },
      BTLOGO2: function (e) {
        $t("设置第二行LOGO", "Set second line logo", Et, Et, function (e) {
          if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Et = e;
          else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/))
            (wt = "1,27,30," + RegExp.$1), (Et = "1,57,30," + RegExp.$2);
          else {
            if (!e.match(/^([\u4e00-\u9fa5]{2})$/))
              return void (0, Ct.Toast)(
                $ ? "Input format error" : "输入格式错误"
              );
            Et = "1,57,30," + RegExp.$1;
          }
          t.setData({ LOGO1: wt, LOGO2: Et, LOGO: $ ? "Preview" : "预览" });
        });
      },
      SetLOGO: function (t, e) {
        Gt.createSelectorQuery()
          .select("#LOGO")
          .fields({ node: !0, size: !0 })
          .exec(function (a) {
            var i = a[0].node,
              o = i.getContext("2d");
            (i.width = 60),
              (i.height = 60),
              (o.fillStyle = "#000"),
              o.scale(1, 1),
              o.fillRect(0, 0, 60, 60),
              (o.fillStyle = "#fff");
            var r = t.split("|");
            ("");
            for (var s = 0; s < r.length; s += 1) {
              var c = r[s].split(",");
              c[3];
              var u = c[0],
                f = c[1],
                h = c[2],
                F = c[3];
              (o.font = "normal " + h + "px Kaiti"), o.fillText(F, u, f);
            }
            var d = [0],
              S = -1;
            n = "DataStart=LOGO{";
            for (var l = 0; l < 60; l += 1) {
              for (
                var p = o.getImageData(0, l, 60, 1).data, g = 0;
                g < 60;
                g += 1
              ) {
                g % 8 == 0 &&
                  (g && (n += d[S].toString(16).padStart(2, "0")), (S += 1));
                var T =
                  0.299 * p[4 * g] +
                  0.587 * p[4 * g + 1] +
                  0.114 * p[4 * g + 2];
                (d[S] = d[S] >> 1), (d[S] = d[S] | (T < 100 ? 0 : 128));
              }
              n += (d[S] >> 4).toString(16).padStart(2, "0");
            }
            (n += "}DataEnd"),
              Gt.hideToast(),
              e.setData({ LOGO: $ ? "Send" : "发送" });
          });
      },
      BTNTC1: function (t) {
        Mt("F962" + _t(1 - St)), Mt("FF");
      },
      BTCAN1: function (t) {
        Nt(
          "确认是否切换为华为",
          "Switch to Huawei",
          "将会清除所有设置",
          "All settings will be cleared",
          function (t) {
            Mt("FC530101"),
              (0, Ct.Toast)(
                $ ? "The device is restarting" : "重置已发送,设备正在重启!"
              ),
              Gt.navigateBack({ delta: 0 });
          }
        );
      },
      BTCAN2: function (t) {
        Nt(
          "确认是否切换为英可瑞",
          "Switch to Increase",
          "将会清除所有设置",
          "All settings will be cleared",
          function (t) {
            Mt("FC530201"),
              (0, Ct.Toast)(
                $ ? "The device is restarting" : "重置已发送,设备正在重启!"
              ),
              Gt.navigateBack({ delta: 0 });
          }
        );
      },
      BTCAN4: function (t) {
        Nt(
          "确认是否切换为中兴",
          "Switch to ZTE",
          "将会清除所有设置",
          "All settings will be cleared",
          function (t) {
            Mt("FC530401"),
              (0, Ct.Toast)(
                $ ? "The device is restarting" : "重置已发送,设备正在重启!"
              ),
              Gt.navigateBack({ delta: 0 });
          }
        );
      },
      BTCAN8: function (t) {
        Nt(
          "确认是否切换为英飞源",
          "Switch to Infy",
          "将会清除所有设置",
          "All settings will be cleared",
          function (t) {
            Mt("FC530801"),
              (0, Ct.Toast)(
                $ ? "The device is restarting" : "重置已发送,设备正在重启!"
              ),
              Gt.navigateBack({ delta: 0 });
          }
        );
      },
      BTCAN16: function (t) {
        Nt(
          "确认是否切换为EPS6020",
          "Switch to EPS6020",
          "将会清除所有设置",
          "All settings will be cleared",
          function (t) {
            Mt("FC531001"),
              (0, Ct.Toast)(
                $ ? "The device is restarting" : "重置已发送,设备正在重启!"
              ),
              Gt.navigateBack({ delta: 0 });
          }
        );
      },
      BTLEDK2: function (t) {
        Rt(
          "设置关机屏幕亮度",
          "Set shutdown screen brightness",
          "0",
          "255",
          function (t) {
            Mt("F968" + _t(t)), Mt("FF");
          }
        );
      },
      BTLEDK1: function (t) {
        Rt(
          "设置开机屏幕亮度",
          "Set the brightness of the startup screen",
          "10",
          "255",
          function (t) {
            Mt("F969" + _t(t)), Mt("FF");
          }
        );
      },
      BTLEDKS1: function (t) {
        Rt("设置息屏时间", "Set screen rest time", "5", "255", function (t) {
          Mt("F96D" + _t(t)), Mt("FF");
        });
      },
      BTLEDKS2: function (t) {
        Rt(
          "设置息屏屏幕亮度",
          "Set the brightness of the breath screen",
          "0",
          "255",
          function (t) {
            Mt("F96A" + _t(t)), Mt("FF");
          }
        );
      },
      BTStart1: function (t) {
        Rt(
          "设置初始页面时间",
          "Set initial page time",
          "3",
          "15",
          function (t) {
            Mt("F96B" + _t(t)), Mt("FF");
          }
        );
      },
      BTStart2: function (t) {
        Mt("F96C" + _t(1 - V)), Mt("FF");
      },
      BTGIF1: function (t) {
        Mt("F96F" + _t(1 - ct)), Mt("FF");
      },
      BT_GIF1: function (t) {
        Pt((0, Ct.GetGIF)(1));
      },
      BT_GIF2: function (t) {
        Pt((0, Ct.GetGIF)(2));
      },
      BT_GIF3: function (t) {
        Pt((0, Ct.GetGIF)(3));
      },
      BT_GIF4: function (t) {
        Pt((0, Ct.GetGIF)(4));
      },
      BT_GIF5: function (t) {
        Pt((0, Ct.GetGIF)(5));
      },
      BTCr1: function (t) {
        Mt("F53000" + Lt(this.data.Cr0) + "0000f01c"),
          Mt("F53100" + Lt(this.data.Cr1) + "00209F26"),
          Mt("F53200" + Lt(this.data.Cr2) + "00479F26"),
          Mt("F53300" + Lt(this.data.Cr3) + "006e9F26"),
          Mt("F53400" + Lt(this.data.Cr4) + "00969F3e"),
          Mt("F53500" + Lt(this.data.Cr5) + "A3204d4d"),
          Mt("F53600" + Lt(this.data.Cr6) + "50d64f1A"),
          Mt("F53700" + Lt(this.data.Cr7) + "00d64f1A"),
          Mt("F53801" + Lt(this.data.Cr8) + "A3774d68");
      },
      CK0: function (t) {
        (Ot = 0),
          this.data.Cr0.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK1: function (t) {
        (Ot = 1),
          this.data.Cr1.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK2: function (t) {
        (Ot = 2),
          this.data.Cr2.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK3: function (t) {
        (Ot = 3),
          this.data.Cr3.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK4: function (t) {
        (Ot = 4),
          this.data.Cr4.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK5: function (t) {
        (Ot = 5),
          this.data.Cr5.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK6: function (t) {
        (Ot = 6),
          this.data.Cr6.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK7: function (t) {
        (Ot = 7),
          this.data.Cr7.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CK8: function (t) {
        (Ot = 8),
          this.data.Cr8.match(/#(..)(..)(..)/),
          (vt = RegExp.$1),
          (It = RegExp.$2),
          (At = RegExp.$3),
          this.setData({
            CR: parseInt(vt, 16),
            CG: parseInt(It, 16),
            CB: parseInt(At, 16),
          });
      },
      CRC: function (t) {
        (vt = t.detail.value.toString(16).padStart(2, "0")), Yt();
      },
      CGC: function (t) {
        (It = t.detail.value.toString(16).padStart(2, "0")), Yt();
      },
      CBC: function (t) {
        (At = t.detail.value.toString(16).padStart(2, "0")), Yt();
      },
      BTCKA2: function (t) {
        Mt("F972" + _t(1 - ut)), Mt("FF");
      },
      BTEN1: function (t) {
        (0, Ct.SetCFG)("UEN", 1 - $), Mt("F970" + _t(1 - $)), Mt("FF");
      },
      BTBLE1: function (t) {
        $t(
          "设置蓝牙名称",
          "Set Bluetooth name",
          "最多6个汉字或18个字符",
          "Up to 18 characters",
          function (t) {
            Mt("FA73" + Ht((t = unescape(encodeURIComponent(t))))), Mt("FF");
          }
        );
      },
      BTBLE2: function (t) {
        $t(
          "设置蓝牙密码",
          "Set Bluetooth password",
          "最多18个字符",
          "Up to 18 characters",
          function (t) {
            Mt("FA74" + Ht(t)), Mt("FF");
          }
        );
      },
      BTKEY1: function (t) {
        Mt("F967" + _t(1 - A)), Mt("FF");
      },
      BTKEY2: function (t) {
        Mt("F966" + _t(1 - N)), Mt("FF");
      },
      BTDDT1: function (t) {
        Mt("F96E" + _t(lt >= 3 ? 0 : lt + 1)), Mt("FF");
      },
      BTUP6: function (t) {
        $t(
          "设置WIFI热点名称",
          "Set WIFI name",
          "最多6个汉字或18个字符",
          "Up to 18 characters",
          function (t) {
            Mt("AB00" + Ht((t = unescape(encodeURIComponent(t))))), Mt("FF");
          }
        );
      },
      BTUP7: function (t) {
        $t(
          "设置WIFI热点密码",
          "Set WIFI password",
          "最多6个汉字或18个字符",
          "Up to 18 characters",
          function (t) {
            Mt("AB01" + Ht((t = unescape(encodeURIComponent(t))))), Mt("FF");
          }
        );
      },
      BTUP1: function (t) {
        (this.data.CVer >= this.data.UPDate && !xt) ||
          Gt.showModal({
            title: $ ? "Start Upgrade" : "开始升级",
            editable: !1,
            confirmText: $ ? "YES" : "确定",
            cancelText: $ ? "NO" : "取消",
            success: function (t) {
              if (t.confirm)
                return (
                  Mt("A700000000" + Ht("CANControl")),
                  void (0, Ct.Toast)(
                    $
                      ? "Upgrading, please pay attention to the screen display"
                      : "已进入升级状态,请观察屏幕显示."
                  )
                );
            },
          });
      },
      BTUP8: function (t) {
        Gt.setClipboardData({
          data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888",
        });
      },
      BTUP2: function (t) {
        Gt.setClipboardData({ data: "设备ID:" + T });
      },
      BTUP0: function (t) {
        Gt.showModal({
          title: $ ? "Firmware rollback" : "固件回退",
          editable: !1,
          confirmText: $ ? "YES" : "确定",
          cancelText: $ ? "NO" : "取消",
          success: function (t) {
            if (t.confirm)
              return (
                Mt("A7" + Ht("24", 4) + Ht("CANControl")),
                void (0, Ct.Toast)(
                  $
                    ? "Upgrading, please pay attention to the screen display"
                    : "已进入升级状态,请观察屏幕显示."
                )
              );
          },
        });
      },
      BTUFS: function (t) {
        Rt(
          "设置温度加速值",
          "Set temperature acceleration value",
          "3",
          "15",
          function (t) {
            Mt("F963" + _t(t)), Mt("FF");
          }
        );
      },
      BTAFS: function (t) {
        Rt(
          "设置电流加速值",
          "Set current acceleration value",
          "0.1",
          "2.0",
          function (t) {
            Mt("F964" + _t(10 * t)), Mt("FF");
          }
        );
      },
      BTLFS: function (t) {
        Rt(
          "设置初始风速值",
          "Set initial wind speed value",
          "30",
          "120",
          function (t) {
            Mt("F965" + _t(t)), Mt("FF");
          }
        );
      },
      BTTMC: function (t) {
        Rt(
          "设置超温限制温度",
          "Set over temperature limit temperature",
          "40",
          "90",
          function (t) {
            Mt("F84A" + qt(t)), Mt("FF");
          }
        );
      },
      BTTMC1: function (t) {
        Rt(
          "设置超温退出温度",
          "Set the exit temperature for over temperature",
          "40",
          "90",
          function (t) {
            Mt("F84B" + qt(t)), Mt("FF");
          }
        );
      },
      BTTMW: function (t) {
        Rt(
          "设置超温限制功率",
          "Set over temperature limit power",
          "500",
          "4000",
          function (t) {
            Mt("F84C" + qt(t)), Mt("FF");
          }
        );
      },
      BTOVT0: function (t) {
        i < 10 || o > 0
          ? (0, Ct.Toast)(
              $
                ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A"
                : "电压校正必须要输出电压高于10V且输出电流为0A"
            )
          : (Mt("C1"),
            Mt("FF"),
            Rt(
              "输入实际测量出的输出电压",
              "Input the actual measured output voltage",
              "10",
              "1000",
              function (t) {
                var e = Number(t / i).toFixed(4),
                  a = Number(t / y).toFixed(4);
                Mt("C3" + qt(100 * a) + qt(100 * e)),
                  2 == R
                    ? (Mt("F876" + qt(20 * a)), Mt("F877" + qt(100 * a)))
                    : 1 == R
                    ? (Mt("F876" + qt(41 * a)), Mt("F877" + qt(58.5 * a)))
                    : 4 == R
                    ? (Mt("F876" + qt(41 * a)), Mt("F877" + qt(59 * a)))
                    : 16 == R &&
                      (Mt("F876" + qt(44 * a)), Mt("F877" + qt(61 * a))),
                  Mt("FF");
              }
            ));
      },
      BTOVT1: function (t) {
        Rt(
          "显示电压补偿",
          "Display voltage compensation",
          "0.1",
          "5",
          function (t) {
            Mt("FB47" + qt(100 * t)), Mt("FF");
          }
        );
      },
      BTOVD1: function (t) {
        Rt(
          "设置电压补偿",
          "Set voltage compensation",
          "0.1",
          "5",
          function (t) {
            Mt("FB46" + qt(100 * t)), Mt("FF");
          }
        );
      },
      BTOVS: function (t) {
        bt(
          $ ? "Set voltage range" : "设置电压范围",
          ($ ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV,
          function (t) {
            (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
              ? (Mt("F876" + qt(Number(RegExp.$1))),
                Mt("F877" + qt(Number(RegExp.$2))),
                Mt("FF"))
              : (0, Ct.Toast)($ ? "Input format error" : "输入格式错误!");
          }
        );
      },
      BTOST0: function (t) {
        i < 10 || o > 0
          ? (0, Ct.Toast)("电压校正必须要输出电压高于10V且输出电流为0A")
          : (Mt("ResetO2D"),
            Mt("FF"),
            Rt(
              "输入实际测量出的输出电压",
              "Input the actual measured output voltage",
              "10",
              "1000",
              function (t) {
                var e = Number(t / i).toFixed(6),
                  a = Number(t / y).toFixed(6);
                Mt("SetO2D=" + a + "," + e),
                  Mt(
                    "SetS2F=" +
                      (41 * a).toFixed(2) +
                      "," +
                      (58.5 * a).toFixed(2)
                  ),
                  Mt("FF");
              }
            ));
      },
      BTOAT0: function (t) {
        o < 5 || y - i < 0.2
          ? (0, Ct.Toast)(
              $
                ? "During current correction, the output current must be greater than 5A and in a constant current state"
                : "电流校正时输出电流必须大于5A且处于恒流状态"
            )
          : (Mt("C0"),
            Mt("FF"),
            Rt(
              "输入实际测量出的输出电流",
              "Input the actual measured output current",
              "3",
              "100",
              function (t) {
                var e = Number(t / o).toFixed(4);
                Mt("C5" + qt(100 * Number(t / k).toFixed(4)) + qt(100 * e)),
                  Mt("FF");
              }
            ));
      },
      BTOAT1: function (t) {
        Rt(
          "显示电流补偿",
          "Display current compensation",
          "0.1",
          "5",
          function (t) {
            Mt("FB45" + qt(100 * t)), Mt("FF");
          }
        );
      },
      BTOAD1: function (t) {
        Rt(
          "设置电流补偿",
          "Set current compensation",
          "0.1",
          "5",
          function (t) {
            Mt("FB44" + qt(100 * t)), Mt("FF");
          }
        );
      },
      BTOAS: function (t) {
        bt(
          $ ? "Set current range" : "设置电流范围",
          ($ ? "Now:" : "当前范围:") + z + "-" + X,
          function (t) {
            (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
              ? (Mt("F878" + qt(Number(RegExp.$1))),
                Mt("F879" + qt(Number(RegExp.$2))),
                Mt("FF"))
              : (0, Ct.Toast)($ ? "Input format error" : "输入格式错误!");
          }
        );
      },
      BTGPWD: function (t) {
        $t(
          "设置系统密码",
          "Set System password",
          "最多18个字符",
          "Up to 18 characters",
          function (t) {
            Mt("FA75" + Ht(t)), Mt("FF");
          }
        );
      },
      BTRST: function (t) {
        Nt(
          "确认是否重置设置",
          "Confirm whether to reset the settings",
          "将会清除所有图片和设置",
          "All images and settings will be cleared",
          function (t) {
            Mt("F601"),
              (0, Ct.Toast)(
                $ ? "The device is restarting" : "重置已发送,设备正在重启!"
              ),
              Gt.navigateBack({ delta: 0 });
          }
        );
      },
      BTBC: function (t) {
        this.setData({ Panel: 1 });
      },
      pwrbt: function (t) {
        Mt("A6" + _t(1 - I)), Mt("FF");
      },
      owbt: function (t) {
        Rt(
          "设置输出功率限制",
          "Set output power limit",
          "300",
          M,
          function (t) {
            Mt("F84D" + qt(t)), Mt("FF");
          }
        );
      },
      tibt: function (t) {
        Rt("设置预约时间", "Set appointment time", "0", 1200, function (t) {
          Mt(
            "A9" +
              (function (t) {
                return Math.floor(t).toString(16).padStart(4, "0");
              })(t)
          ),
            Mt("FF");
        });
      },
      ks1bt: function (t) {
        var e = E[0],
          a = E[1] > X ? X : E[1];
        e > tt || e < J
          ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
              Mt("A80" + (v = 1) + qt(t) + qt(a)), Mt("FF");
            })
          : (Mt("A80" + (v = 1) + qt(e) + qt(a)), Mt("FF"));
      },
      ks2bt: function (t) {
        var e = O[0],
          a = O[1] > X ? X : O[1];
        e > tt || e < J
          ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
              Mt("A80" + (v = 2) + qt(t) + qt(a)), Mt("FF");
            })
          : (Mt("A80" + (v = 2) + qt(e) + qt(a)), Mt("FF"));
      },
      ks3bt: function (t) {
        var e = G[0],
          a = G[1] > X ? X : G[1];
        e > tt || e < J
          ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
              Mt("A80" + (v = 3) + qt(t) + qt(a)), Mt("FF");
            })
          : (Mt("A80" + (v = 3) + qt(e) + qt(a)), Mt("FF"));
      },
      ks4bt: function (t) {
        var e = b[0],
          a = b[1] > X ? X : b[1];
        e > tt || e < J
          ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
              Mt("A80" + (v = 4) + qt(t) + qt(a)), Mt("FF");
            })
          : (Mt("A80" + (v = 4) + qt(e) + qt(a)), Mt("FF"));
      },
      hqbt1: function (t) {
        Rt("设置软启时间", "Set soft start time", 5, 20, function (t) {
          Mt("F961" + _t(t)), Mt("FF");
        });
      },
      hqbt0: function (t) {
        Mt("F961" + _t(0 == st ? 10 : 0)), Mt("FF");
      },
      nvbt: function (t) {
        bt(
          $ ? "Set Output Voltage" : "设置输出电压",
          ($ ? "Range:" : "范围:") + J + "-" + tt,
          function (t) {
            if (t) {
              if (
                (Mt("A1" + Ht(t)),
                (t = parseFloat(t)) > tt || t < J || !isFinite(t))
              )
                return void ERange();
              Mt("A80" + v + qt(t) + qt(k)), Mt("FF");
            } else
              wx.getClipboardData({
                success: function (t) {
                  var e = t.data;
                  e.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/) &&
                    wx.showModal({
                      title: "是否发送剪切板中的设置代码",
                      editable: !1,
                      placeholderText: "",
                      success: function (t) {
                        t.confirm && Pt(e);
                      },
                    });
                },
              });
          }
        );
      },
      nabt: function (t) {
        Rt("设置输出电流", "Set output current", z, X, function (t) {
          Mt("A80" + v + qt(y) + qt(t)), Mt("FF");
        });
      },
      sa2bt2: function (t) {
        Rt("设置二段电流", "Set second stage current", z, X, function (t) {
          Mt("F857" + qt(t)), Mt("FF");
        });
      },
      sa2bt1: function (t) {
        Rt("设置二段电压", "Set second stage voltage", J, tt, function (t) {
          Mt("F858" + qt(t)), Mt("FF");
        });
      },
      sa2bt0: function (t) {
        Mt("F858" + (0 == W ? qt(y - 3) : "00000000")),
          Mt("F857" + (0 == W ? qt(10) : "00000000")),
          Mt("FF");
      },
      sdbt1: function (t) {
        Rt(
          "设置延时时间(分钟)",
          "Set delay time (minutes)",
          1,
          600,
          function (t) {
            Mt("F859" + qt(t)), Mt("FF");
          }
        );
      },
      sdbt0: function (t) {
        Mt("F859" + (0 == Ft ? qt(30) : "00000000")), Mt("FF");
      },
      onLoad: function (n) {
        var gt = this;
        (t = this),
          (Dt = 0),
          (Vt = 0),
          (xt = 1 == n.GM || (0, Ct.GetCFG)("GM") ? 1 : 0);
        var Tt = (0, Ct.GetGIF)(1);
        Tt.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var wt = RegExp.$2;
        (Tt = (0, Ct.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var Et = RegExp.$2;
        (Tt = (0, Ct.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var Ot = RegExp.$2;
        (Tt = (0, Ct.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var vt = RegExp.$2;
        (Tt = (0, Ct.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var It = RegExp.$2;
        $ = (0, Ct.GetCFG)("UEN") ? 1 : 0;
        var At = (0, Ct.GetCFG)("ShowM") ? 1 : 0;
        t.setData({
          GIF1: "data:image/gif;base64," + wt,
          GIF2: "data:image/gif;base64," + Et,
          GIF3: "data:image/gif;base64," + Ot,
          GIF4: "data:image/gif;base64," + vt,
          GIF5: "data:image/gif;base64," + It,
          UEN: $,
          ShowM: At,
          RollV: 5.24,
          Test: 0,
          UPDate: "5.25",
          APP: "1.08",
        }),
          (0, Ct.GetCFG)("TVer"),
          Bt.onBLEConnectionStateChange(function () {
            Gt.navigateBack({ delta: 0 });
          }),
          Bt.onBLECharacteristicValueChange1(function (n, Tt) {
            if (!a) {
              console.log("Msg:" + Tt);
              var Bt = Tt;
              if ("EE" == Bt.substring(0, 2) && 0 == Dt) {
                (Dt = 1),
                  (e = jt(Bt.substring(20, 40))),
                  console.log(Bt.substring(16, 20));
                var wt = 0.01 * parseInt(Bt.substring(16, 20), 16);
                (R =
                  16 ==
                  (R =
                    8 ==
                    (R =
                      4 ==
                      (R =
                        2 ==
                        (R =
                          1 == (R = Number(Bt.substring(14, 16)))
                            ? "Huawei"
                            : R)
                          ? "Increase"
                          : R)
                        ? "ZXD3000"
                        : R)
                      ? "INFY"
                      : R)
                    ? "EPS6020"
                    : R),
                  (T = "0x" + Bt.substring(2, 14)),
                  e.startsWith("Cxjdwx") && (e = "未激活"),
                  t.setData({ CVer: wt.toFixed(2), SCAN: R, ID: T, ACT: e });
                var Et = (0, Ct.GetCFG)(T);
                xt &&
                  (Et = (Number(T) + 19880914).toString(16).substring(4, 8)),
                  Mt("A0" + Ht(Et));
              } else if (Bt.startsWith("A101"))
                t.setData({
                  ShowBar: 0,
                  Panel: 2,
                  LOGO: $ ? "Preview" : "预览",
                });
              else if (Bt.startsWith("A001")) {
                if (((Dt = 2), ("Cxjdwx" == e || "未激活" == e) && !xt)) {
                  var Ot = new Date();
                  Mt(
                    "FD48" +
                      Ht(
                        Ot.getFullYear() +
                          "-" +
                          (Ot.getMonth() + 1) +
                          "-" +
                          Ot.getDate()
                      )
                  );
                }
                Mt("FF");
              } else if (Bt.startsWith("A000"))
                Gt.showModal({
                  title: $ ? "Enter Bluetooth password" : "输入蓝牙密码",
                  editable: !0,
                  showCancel: !1,
                  placeholderText: "ID:" + T,
                  confirmText: $ ? "YES" : "确定",
                  cancelText: $ ? "NO" : "取消",
                  success: function (t) {
                    t.confirm &&
                      ((0, Ct.SetCFG)(T, t.content), Mt("A0" + Ht(t.content)));
                  },
                });
              else if (Bt.startsWith("F101")) yt();
              else if (Bt.startsWith("F201")) yt();
              else if (Bt.startsWith("F301"))
                (Vt = 0),
                  (Kt = []),
                  (0, Ct.Toast)($ ? "Send End!" : "发送完成!");
              else if (Bt.startsWith("01"))
                (i = Qt(Bt, 2)),
                  (o = Qt(Bt, 10)),
                  (r = Qt(Bt, 18)),
                  (s = Qt(Bt, 26)),
                  (c = Zt(Bt, 34)),
                  (u = Zt(Bt, 36)),
                  (f = Zt(Bt, 38)),
                  gt.data.UEN
                    ? "0" == f
                      ? (mt = "Communication Abnormality")
                      : 0 == i
                      ? (mt = "Charger Output Abnormality")
                      : 4 == c
                      ? (mt = "Charger Shutdown")
                      : 0 == c
                      ? (mt = "Waiting For Battery Connection")
                      : 1 == c
                      ? (mt = "Charging")
                      : 2 == c
                      ? (mt = "In The Second Stage Of Charging")
                      : 40 == c
                      ? (mt = "Appointment Waiting")
                      : 3 == c
                      ? (mt = "Charging Completed")
                      : 43 == c && (mt = "Charging Completed(Turned Off)")
                    : "0" == f
                    ? (mt = "CAN通讯异常")
                    : 4 == c
                    ? (mt = "充电器已关机")
                    : 0 == c
                    ? (mt = "等待接入电池")
                    : 1 == c
                    ? (mt = "正在充电中")
                    : 2 == c
                    ? (mt = "第二段充电中")
                    : 40 == c
                    ? (mt = "预约等待中")
                    : 3 == c
                    ? (mt = "充电完成")
                    : 43 == c && (mt = "充电完成(已关机)"),
                  t.setData({
                    STR: mt,
                    NFS: u,
                    OL: f,
                    OV: i.toFixed(2),
                    OA: o.toFixed(2),
                    OW: r.toFixed(2),
                    OT: s.toFixed(2),
                  });
              else if (Bt.startsWith("02")) {
                (h = Qt(Bt, 2)),
                  (F = Qt(Bt, 10)),
                  (d = Qt(Bt, 18)),
                  (S = Qt(Bt, 26)),
                  (l = Zt(Bt, 34)),
                  (p = Zt(Bt, 36)),
                  (g = Zt(Bt, 38));
                var vt = ((r / d) * 100).toFixed(2),
                  It = (d - r).toFixed(2);
                t.setData({
                  IV: h.toFixed(2),
                  IA: F.toFixed(2),
                  IW: d.toFixed(2),
                  IT: S.toFixed(2),
                  ST0: l,
                  ST1: p,
                  ST2: g,
                  EEI: d ? vt : "0.00",
                  EES: d ? It : "0.00",
                });
              } else if (Bt.startsWith("03"))
                (C = Qt(Bt, 2)),
                  (B = Qt(Bt, 10)),
                  (x = Qt(Bt, 18)),
                  (D = Qt(Bt, 26)),
                  (m = Zt(Bt, 34)),
                  (w = Zt(Bt, 36)),
                  t.setData({
                    Ah: C.toFixed(2),
                    Wh: B.toFixed(2),
                    AH: x.toFixed(2),
                    WH: D.toFixed(2),
                    SWT: m,
                    SMT: w,
                  });
              else if (Bt.startsWith("04"))
                t.setData({
                  Ti: Wt(Qt(Bt, 2)),
                  TI: Wt(Qt(Bt, 10)),
                  NSD: Wt(Qt(Bt, 18)),
                  SOC: Qt(Bt, 26).toFixed(0),
                });
              else if (Bt.startsWith("10"))
                (E = [Qt(Bt, 2).toFixed(2), Qt(Bt, 10).toFixed(2)]),
                  (O = [Qt(Bt, 18).toFixed(2), Qt(Bt, 26).toFixed(2)]),
                  (v = Zt(Bt, 34)),
                  (I = Zt(Bt, 36)),
                  (A = Zt(Bt, 38)),
                  1 == v
                    ? ((k = E[1]), (y = E[0]))
                    : 2 == v && ((k = O[1]), (y = O[0])),
                  3 == v
                    ? ((k = G[1]), (y = G[0]))
                    : 4 == v && ((k = b[1]), (y = b[0])),
                  t.setData({
                    KS1: E,
                    KS2: O,
                    KSi: v,
                    PON: I,
                    KON: A,
                    SV: y,
                    SA: k,
                  });
              else if (Bt.startsWith("11"))
                (G = [Qt(Bt, 2).toFixed(2), Qt(Bt, 10).toFixed(2)]),
                  (b = [Qt(Bt, 18).toFixed(2), Qt(Bt, 26).toFixed(2)]),
                  (R = Zt(Bt, 34)),
                  ($ = Zt(Bt, 36)),
                  (N = Zt(Bt, 38)),
                  (0, Ct.SetCFG)("UEN", $),
                  1 == v
                    ? ((k = E[1]), (y = E[0]))
                    : 2 == v && ((k = O[1]), (y = O[0])),
                  3 == v
                    ? ((k = G[1]), (y = G[0]))
                    : 4 == v && ((k = b[1]), (y = b[0])),
                  t.setData({
                    KS3: G,
                    KS4: b,
                    CAN: R,
                    UEN: $,
                    KRC: N,
                    SV: y,
                    SA: k,
                  });
              else if (Bt.startsWith("12"))
                (L = Qt(Bt, 2)),
                  (W = Qt(Bt, 10)),
                  (M = Qt(Bt, 18)),
                  (U = Qt(Bt, 26)),
                  (K = Zt(Bt, 34)),
                  (V = Zt(Bt, 36)),
                  (P = Zt(Bt, 38)),
                  t.setData({
                    SV2: L.toFixed(2),
                    SA2: W.toFixed(2),
                    SMW: M,
                    UMW: U,
                    WTi: K,
                    ETi: V,
                    Sleep: P,
                  });
              else if (Bt.startsWith("13"))
                (Y = Qt(Bt, 2)),
                  (H = Qt(Bt, 10)),
                  (j = Qt(Bt, 18)),
                  (q = 0.01 * Qt(Bt, 26)),
                  (_ = Zt(Bt, 34)),
                  (Q = Zt(Bt, 36)),
                  (Z = Zt(Bt, 38)),
                  t.setData({
                    TMW: Y,
                    UMT: H,
                    OMT: j,
                    O2D: q,
                    LEDK0: _,
                    LEDK1: Q,
                    LEDK2: Z,
                  });
              else if (Bt.startsWith("14"))
                (z = Qt(Bt, 2)),
                  (X = Qt(Bt, 10)),
                  (J = Qt(Bt, 18)),
                  (tt = Qt(Bt, 26)),
                  (et = Zt(Bt, 34)),
                  (at = Zt(Bt, 36)),
                  (nt = 0.1 * Zt(Bt, 38)),
                  t.setData({
                    LSA: z,
                    HSA: X,
                    LSV: J,
                    HSV: tt,
                    UFS: et,
                    LFS: at,
                    AFS: nt.toFixed(1),
                  });
              else if (Bt.startsWith("15"))
                (it = 0.01 * Qt(Bt, 2)),
                  (ot = 0.01 * Qt(Bt, 10)),
                  (rt = 0.01 * Qt(Bt, 18)),
                  (dt = 0.01 * Qt(Bt, 26)),
                  (st = Zt(Bt, 34)),
                  (ct = Zt(Bt, 36)),
                  (ut = Zt(Bt, 38)),
                  t.setData({
                    OVT: it.toFixed(4),
                    OAT: ot.toFixed(4),
                    OVD: rt.toFixed(4),
                    OAD: dt.toFixed(4),
                    UHQ: st,
                    GIF: ct,
                    CKA2: ut,
                  });
              else if (Bt.startsWith("16"))
                (ft = Qt(Bt, 2)),
                  (ht = Qt(Bt, 10)),
                  (Ft = Qt(Bt, 18)),
                  (St = Zt(Bt, 34)),
                  (lt = Zt(Bt, 36)),
                  (pt = Zt(Bt, 38)),
                  t.setData({
                    L2V: ft,
                    H2V: ht,
                    USD: Ft,
                    NTC: St,
                    DDT: lt,
                    DDV: pt,
                  });
              else if (Bt.startsWith("20")) {
                var At = jt(Bt.substring(2, 40));
                t.setData({ SSID: At });
              } else
                Bt.startsWith("21")
                  ? t.setData({ UPWD: jt(Bt.substring(2, 40)) })
                  : Bt.startsWith("22")
                  ? t.setData({ WID: jt(Bt.substring(2, 40)) })
                  : Bt.startsWith("23") &&
                    t.setData({ WPD: jt(Bt.substring(2, 40)) });
            }
          });
      },
      onUnload: function () {
        Bt.onBLEConnectionStateChange(function () {}), Bt.closeBLEConnection();
      },
      onShow: function (t) {
        a = 0;
      },
      onHide: function () {
        a = 1;
      },
    });
  }
);
require("pages/NewUI1/NewUI.js");
