define.alias("shared/access/service", "istio/access/service");
define.alias("shared/all-dns-records/service", "istio/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "istio/all-storage-classes/service");
define.alias("shared/all-workloads/service", "istio/all-workloads/service");
define.alias("shared/amazon/util", "istio/amazon/util");
define.alias("shared/azure-ad/service", "istio/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "istio/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "istio/calculate-position/util");
define.alias("shared/capabilities/service", "istio/capabilities/service");
define.alias("shared/catalog/service", "istio/catalog/service");
define.alias("shared/cis-helpers/service", "istio/cis-helpers/service");
define("istio/cldrs/ar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ar-SA",
    "parentLocale": "ar"
  }, {
    "locale": "ar",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          t0 = Number(s[0]) == n,
          n100 = t0 && s[0].slice(-2);
      if (ord) return "other";
      return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "السنة",
        "relative": {
          "0": "السنة الحالية",
          "1": "السنة القادمة",
          "-1": "السنة الماضية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} سنة",
            "one": "خلال سنة واحدة",
            "two": "خلال سنتين",
            "few": "خلال {0} سنوات",
            "many": "خلال {0} سنة",
            "other": "خلال {0} سنة"
          },
          "past": {
            "zero": "قبل {0} سنة",
            "one": "قبل سنة واحدة",
            "two": "قبل سنتين",
            "few": "قبل {0} سنوات",
            "many": "قبل {0} سنة",
            "other": "قبل {0} سنة"
          }
        }
      },
      "year-short": {
        "displayName": "السنة",
        "relative": {
          "0": "السنة الحالية",
          "1": "السنة القادمة",
          "-1": "السنة الماضية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} سنة",
            "one": "خلال سنة واحدة",
            "two": "خلال سنتين",
            "few": "خلال {0} سنوات",
            "many": "خلال {0} سنة",
            "other": "خلال {0} سنة"
          },
          "past": {
            "zero": "قبل {0} سنة",
            "one": "قبل سنة واحدة",
            "two": "قبل سنتين",
            "few": "قبل {0} سنوات",
            "many": "قبل {0} سنة",
            "other": "قبل {0} سنة"
          }
        }
      },
      "month": {
        "displayName": "الشهر",
        "relative": {
          "0": "هذا الشهر",
          "1": "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} شهر",
            "one": "خلال شهر واحد",
            "two": "خلال شهرين",
            "few": "خلال {0} أشهر",
            "many": "خلال {0} شهرًا",
            "other": "خلال {0} شهر"
          },
          "past": {
            "zero": "قبل {0} شهر",
            "one": "قبل شهر واحد",
            "two": "قبل شهرين",
            "few": "قبل {0} أشهر",
            "many": "قبل {0} شهرًا",
            "other": "قبل {0} شهر"
          }
        }
      },
      "month-short": {
        "displayName": "الشهر",
        "relative": {
          "0": "هذا الشهر",
          "1": "الشهر القادم",
          "-1": "الشهر الماضي"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} شهر",
            "one": "خلال شهر واحد",
            "two": "خلال شهرين",
            "few": "خلال {0} أشهر",
            "many": "خلال {0} شهرًا",
            "other": "خلال {0} شهر"
          },
          "past": {
            "zero": "قبل {0} شهر",
            "one": "قبل شهر واحد",
            "two": "قبل شهرين",
            "few": "خلال {0} أشهر",
            "many": "قبل {0} شهرًا",
            "other": "قبل {0} شهر"
          }
        }
      },
      "day": {
        "displayName": "يوم",
        "relative": {
          "0": "اليوم",
          "1": "غدًا",
          "2": "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} يوم",
            "one": "خلال يوم واحد",
            "two": "خلال يومين",
            "few": "خلال {0} أيام",
            "many": "خلال {0} يومًا",
            "other": "خلال {0} يوم"
          },
          "past": {
            "zero": "قبل {0} يوم",
            "one": "قبل يوم واحد",
            "two": "قبل يومين",
            "few": "قبل {0} أيام",
            "many": "قبل {0} يومًا",
            "other": "قبل {0} يوم"
          }
        }
      },
      "day-short": {
        "displayName": "يوم",
        "relative": {
          "0": "اليوم",
          "1": "غدًا",
          "2": "بعد الغد",
          "-2": "أول أمس",
          "-1": "أمس"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} يوم",
            "one": "خلال يوم واحد",
            "two": "خلال يومين",
            "few": "خلال {0} أيام",
            "many": "خلال {0} يومًا",
            "other": "خلال {0} يوم"
          },
          "past": {
            "zero": "قبل {0} يوم",
            "one": "قبل يوم واحد",
            "two": "قبل يومين",
            "few": "قبل {0} أيام",
            "many": "قبل {0} يومًا",
            "other": "قبل {0} يوم"
          }
        }
      },
      "hour": {
        "displayName": "الساعات",
        "relative": {
          "0": "الساعة الحالية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ساعة",
            "one": "خلال ساعة واحدة",
            "two": "خلال ساعتين",
            "few": "خلال {0} ساعات",
            "many": "خلال {0} ساعة",
            "other": "خلال {0} ساعة"
          },
          "past": {
            "zero": "قبل {0} ساعة",
            "one": "قبل ساعة واحدة",
            "two": "قبل ساعتين",
            "few": "قبل {0} ساعات",
            "many": "قبل {0} ساعة",
            "other": "قبل {0} ساعة"
          }
        }
      },
      "hour-short": {
        "displayName": "الساعات",
        "relative": {
          "0": "الساعة الحالية"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ساعة",
            "one": "خلال ساعة واحدة",
            "two": "خلال ساعتين",
            "few": "خلال {0} ساعات",
            "many": "خلال {0} ساعة",
            "other": "خلال {0} ساعة"
          },
          "past": {
            "zero": "قبل {0} ساعة",
            "one": "قبل ساعة واحدة",
            "two": "قبل ساعتين",
            "few": "قبل {0} ساعات",
            "many": "قبل {0} ساعة",
            "other": "قبل {0} ساعة"
          }
        }
      },
      "minute": {
        "displayName": "الدقائق",
        "relative": {
          "0": "هذه الدقيقة"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} دقيقة",
            "one": "خلال دقيقة واحدة",
            "two": "خلال دقيقتين",
            "few": "خلال {0} دقائق",
            "many": "خلال {0} دقيقة",
            "other": "خلال {0} دقيقة"
          },
          "past": {
            "zero": "قبل {0} دقيقة",
            "one": "قبل دقيقة واحدة",
            "two": "قبل دقيقتين",
            "few": "قبل {0} دقائق",
            "many": "قبل {0} دقيقة",
            "other": "قبل {0} دقيقة"
          }
        }
      },
      "minute-short": {
        "displayName": "الدقائق",
        "relative": {
          "0": "هذه الدقيقة"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} دقيقة",
            "one": "خلال دقيقة واحدة",
            "two": "خلال دقيقتين",
            "few": "خلال {0} دقائق",
            "many": "خلال {0} دقيقة",
            "other": "خلال {0} دقيقة"
          },
          "past": {
            "zero": "قبل {0} دقيقة",
            "one": "قبل دقيقة واحدة",
            "two": "قبل دقيقتين",
            "few": "قبل {0} دقائق",
            "many": "قبل {0} دقيقة",
            "other": "قبل {0} دقيقة"
          }
        }
      },
      "second": {
        "displayName": "الثواني",
        "relative": {
          "0": "الآن"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ثانية",
            "one": "خلال ثانية واحدة",
            "two": "خلال ثانيتين",
            "few": "خلال {0} ثوانٍ",
            "many": "خلال {0} ثانية",
            "other": "خلال {0} ثانية"
          },
          "past": {
            "zero": "قبل {0} ثانية",
            "one": "قبل ثانية واحدة",
            "two": "قبل ثانيتين",
            "few": "قبل {0} ثوانِ",
            "many": "قبل {0} ثانية",
            "other": "قبل {0} ثانية"
          }
        }
      },
      "second-short": {
        "displayName": "الثواني",
        "relative": {
          "0": "الآن"
        },
        "relativeTime": {
          "future": {
            "zero": "خلال {0} ثانية",
            "one": "خلال ثانية واحدة",
            "two": "خلال ثانيتين",
            "few": "خلال {0} ثوانٍ",
            "many": "خلال {0} ثانية",
            "other": "خلال {0} ثانية"
          },
          "past": {
            "zero": "قبل {0} ثانية",
            "one": "قبل ثانية واحدة",
            "two": "قبل ثانيتين",
            "few": "قبل {0} ثوانٍ",
            "many": "قبل {0} ثانية",
            "other": "قبل {0} ثانية"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "zero": ["0 ألف", 1],
          "one": ["0 ألف", 1],
          "two": ["0 ألف", 1],
          "few": ["0 آلاف", 1],
          "many": ["0 ألف", 1],
          "other": ["0 ألف", 1]
        }], [10000, {
          "zero": ["00 ألف", 2],
          "one": ["00 ألف", 2],
          "two": ["00 ألف", 2],
          "few": ["00 ألف", 2],
          "many": ["00 ألف", 2],
          "other": ["00 ألف", 2]
        }], [100000, {
          "zero": ["000 ألف", 3],
          "one": ["000 ألف", 3],
          "two": ["000 ألف", 3],
          "few": ["000 ألف", 3],
          "many": ["000 ألف", 3],
          "other": ["000 ألف", 3]
        }], [1000000, {
          "zero": ["0 مليون", 1],
          "one": ["0 مليون", 1],
          "two": ["0 مليون", 1],
          "few": ["0 ملايين", 1],
          "many": ["0 مليون", 1],
          "other": ["0 مليون", 1]
        }], [10000000, {
          "zero": ["00 مليون", 2],
          "one": ["00 مليون", 2],
          "two": ["00 مليون", 2],
          "few": ["00 ملايين", 2],
          "many": ["00 مليون", 2],
          "other": ["00 مليون", 2]
        }], [100000000, {
          "zero": ["000 مليون", 3],
          "one": ["000 مليون", 3],
          "two": ["000 مليون", 3],
          "few": ["000 مليون", 3],
          "many": ["000 مليون", 3],
          "other": ["000 مليون", 3]
        }], [1000000000, {
          "zero": ["0 مليار", 1],
          "one": ["0 مليار", 1],
          "two": ["0 مليار", 1],
          "few": ["0 مليار", 1],
          "many": ["0 مليار", 1],
          "other": ["0 مليار", 1]
        }], [10000000000, {
          "zero": ["00 مليار", 2],
          "one": ["00 مليار", 2],
          "two": ["00 مليار", 2],
          "few": ["00 مليار", 2],
          "many": ["00 مليار", 2],
          "other": ["00 مليار", 2]
        }], [100000000000, {
          "zero": ["000 مليار", 3],
          "one": ["000 مليار", 3],
          "two": ["000 مليار", 3],
          "few": ["000 مليار", 3],
          "many": ["000 مليار", 3],
          "other": ["000 مليار", 3]
        }], [1000000000000, {
          "zero": ["0 ترليون", 1],
          "one": ["0 ترليون", 1],
          "two": ["0 ترليون", 1],
          "few": ["0 ترليون", 1],
          "many": ["0 ترليون", 1],
          "other": ["0 ترليون", 1]
        }], [10000000000000, {
          "zero": ["00 ترليون", 2],
          "one": ["00 ترليون", 2],
          "two": ["00 ترليون", 2],
          "few": ["00 ترليون", 2],
          "many": ["00 ترليون", 2],
          "other": ["00 ترليون", 2]
        }], [100000000000000, {
          "zero": ["000 ترليون", 3],
          "one": ["000 ترليون", 3],
          "two": ["000 ترليون", 3],
          "few": ["000 ترليون", 3],
          "many": ["000 ترليون", 3],
          "other": ["000 ترليون", 3]
        }]],
        "short": [[1000, {
          "zero": ["0 ألف", 1],
          "one": ["0 ألف", 1],
          "two": ["0 ألف", 1],
          "few": ["0 آلاف", 1],
          "many": ["0 ألف", 1],
          "other": ["0 ألف", 1]
        }], [10000, {
          "zero": ["00 ألف", 2],
          "one": ["00 ألف", 2],
          "two": ["00 ألف", 2],
          "few": ["00 ألف", 2],
          "many": ["00 ألف", 2],
          "other": ["00 ألف", 2]
        }], [100000, {
          "zero": ["000 ألف", 3],
          "one": ["000 ألف", 3],
          "two": ["000 ألف", 3],
          "few": ["000 ألف", 3],
          "many": ["000 ألف", 3],
          "other": ["000 ألف", 3]
        }], [1000000, {
          "zero": ["0 مليون", 1],
          "one": ["0 مليون", 1],
          "two": ["0 مليون", 1],
          "few": ["0 مليون", 1],
          "many": ["0 مليون", 1],
          "other": ["0 مليون", 1]
        }], [10000000, {
          "zero": ["00 مليون", 2],
          "one": ["00 مليون", 2],
          "two": ["00 مليون", 2],
          "few": ["00 مليون", 2],
          "many": ["00 مليون", 2],
          "other": ["00 مليون", 2]
        }], [100000000, {
          "zero": ["000 مليون", 3],
          "one": ["000 مليون", 3],
          "two": ["000 مليون", 3],
          "few": ["000 مليون", 3],
          "many": ["000 مليون", 3],
          "other": ["000 مليون", 3]
        }], [1000000000, {
          "zero": ["0 مليار", 1],
          "one": ["0 مليار", 1],
          "two": ["0 مليار", 1],
          "few": ["0 مليار", 1],
          "many": ["0 مليار", 1],
          "other": ["0 مليار", 1]
        }], [10000000000, {
          "zero": ["00 مليار", 2],
          "one": ["00 مليار", 2],
          "two": ["00 مليار", 2],
          "few": ["00 مليار", 2],
          "many": ["00 مليار", 2],
          "other": ["00 مليار", 2]
        }], [100000000000, {
          "zero": ["000 مليار", 3],
          "one": ["000 مليار", 3],
          "two": ["000 مليار", 3],
          "few": ["000 مليار", 3],
          "many": ["000 مليار", 3],
          "other": ["000 مليار", 3]
        }], [1000000000000, {
          "zero": ["0 ترليون", 1],
          "one": ["0 ترليون", 1],
          "two": ["0 ترليون", 1],
          "few": ["0 ترليون", 1],
          "many": ["0 ترليون", 1],
          "other": ["0 ترليون", 1]
        }], [10000000000000, {
          "zero": ["00 ترليون", 2],
          "one": ["00 ترليون", 2],
          "two": ["00 ترليون", 2],
          "few": ["00 ترليون", 2],
          "many": ["00 ترليون", 2],
          "other": ["00 ترليون", 2]
        }], [100000000000000, {
          "zero": ["000 ترليون", 3],
          "one": ["000 ترليون", 3],
          "two": ["000 ترليون", 3],
          "few": ["000 ترليون", 3],
          "many": ["000 ترليون", 3],
          "other": ["000 ترليون", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/de", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "de-de",
    "parentLocale": "de"
  }, {
    "locale": "de",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Jahr",
        "relative": {
          "0": "dieses Jahr",
          "1": "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Jahr",
            "other": "in {0} Jahren"
          },
          "past": {
            "one": "vor {0} Jahr",
            "other": "vor {0} Jahren"
          }
        }
      },
      "year-short": {
        "displayName": "Jahr",
        "relative": {
          "0": "dieses Jahr",
          "1": "nächstes Jahr",
          "-1": "letztes Jahr"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Jahr",
            "other": "in {0} Jahren"
          },
          "past": {
            "one": "vor {0} Jahr",
            "other": "vor {0} Jahren"
          }
        }
      },
      "month": {
        "displayName": "Monat",
        "relative": {
          "0": "diesen Monat",
          "1": "nächsten Monat",
          "-1": "letzten Monat"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Monat",
            "other": "in {0} Monaten"
          },
          "past": {
            "one": "vor {0} Monat",
            "other": "vor {0} Monaten"
          }
        }
      },
      "month-short": {
        "displayName": "Monat",
        "relative": {
          "0": "diesen Monat",
          "1": "nächsten Monat",
          "-1": "letzten Monat"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Monat",
            "other": "in {0} Monaten"
          },
          "past": {
            "one": "vor {0} Monat",
            "other": "vor {0} Monaten"
          }
        }
      },
      "day": {
        "displayName": "Tag",
        "relative": {
          "0": "heute",
          "1": "morgen",
          "2": "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Tag",
            "other": "in {0} Tagen"
          },
          "past": {
            "one": "vor {0} Tag",
            "other": "vor {0} Tagen"
          }
        }
      },
      "day-short": {
        "displayName": "Tag",
        "relative": {
          "0": "heute",
          "1": "morgen",
          "2": "übermorgen",
          "-2": "vorgestern",
          "-1": "gestern"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Tag",
            "other": "in {0} Tagen"
          },
          "past": {
            "one": "vor {0} Tag",
            "other": "vor {0} Tagen"
          }
        }
      },
      "hour": {
        "displayName": "Stunde",
        "relative": {
          "0": "in dieser Stunde"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Stunde",
            "other": "in {0} Stunden"
          },
          "past": {
            "one": "vor {0} Stunde",
            "other": "vor {0} Stunden"
          }
        }
      },
      "hour-short": {
        "displayName": "Std.",
        "relative": {
          "0": "in dieser Stunde"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Std.",
            "other": "in {0} Std."
          },
          "past": {
            "one": "vor {0} Std.",
            "other": "vor {0} Std."
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relative": {
          "0": "in dieser Minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Minute",
            "other": "in {0} Minuten"
          },
          "past": {
            "one": "vor {0} Minute",
            "other": "vor {0} Minuten"
          }
        }
      },
      "minute-short": {
        "displayName": "Min.",
        "relative": {
          "0": "in dieser Minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Min.",
            "other": "in {0} Min."
          },
          "past": {
            "one": "vor {0} Min.",
            "other": "vor {0} Min."
          }
        }
      },
      "second": {
        "displayName": "Sekunde",
        "relative": {
          "0": "jetzt"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Sekunde",
            "other": "in {0} Sekunden"
          },
          "past": {
            "one": "vor {0} Sekunde",
            "other": "vor {0} Sekunden"
          }
        }
      },
      "second-short": {
        "displayName": "Sek.",
        "relative": {
          "0": "jetzt"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} Sek.",
            "other": "in {0} Sek."
          },
          "past": {
            "one": "vor {0} Sek.",
            "other": "vor {0} Sek."
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 Tausend", 1],
          "other": ["0 Tausend", 1]
        }], [10000, {
          "one": ["00 Tausend", 2],
          "other": ["00 Tausend", 2]
        }], [100000, {
          "one": ["000 Tausend", 3],
          "other": ["000 Tausend", 3]
        }], [1000000, {
          "one": ["0 Million", 1],
          "other": ["0 Millionen", 1]
        }], [10000000, {
          "one": ["00 Millionen", 2],
          "other": ["00 Millionen", 2]
        }], [100000000, {
          "one": ["000 Millionen", 3],
          "other": ["000 Millionen", 3]
        }], [1000000000, {
          "one": ["0 Milliarde", 1],
          "other": ["0 Milliarden", 1]
        }], [10000000000, {
          "one": ["00 Milliarden", 2],
          "other": ["00 Milliarden", 2]
        }], [100000000000, {
          "one": ["000 Milliarden", 3],
          "other": ["000 Milliarden", 3]
        }], [1000000000000, {
          "one": ["0 Billion", 1],
          "other": ["0 Billionen", 1]
        }], [10000000000000, {
          "one": ["00 Billionen", 2],
          "other": ["00 Billionen", 2]
        }], [100000000000000, {
          "one": ["000 Billionen", 3],
          "other": ["000 Billionen", 3]
        }]],
        "short": [[1000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [10000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [100000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [1000000, {
          "one": ["0 Mio'.'", 1],
          "other": ["0 Mio'.'", 1]
        }], [10000000, {
          "one": ["00 Mio'.'", 2],
          "other": ["00 Mio'.'", 2]
        }], [100000000, {
          "one": ["000 Mio'.'", 3],
          "other": ["000 Mio'.'", 3]
        }], [1000000000, {
          "one": ["0 Mrd'.'", 1],
          "other": ["0 Mrd'.'", 1]
        }], [10000000000, {
          "one": ["00 Mrd'.'", 2],
          "other": ["00 Mrd'.'", 2]
        }], [100000000000, {
          "one": ["000 Mrd'.'", 3],
          "other": ["000 Mrd'.'", 3]
        }], [1000000000000, {
          "one": ["0 Bio'.'", 1],
          "other": ["0 Bio'.'", 1]
        }], [10000000000000, {
          "one": ["00 Bio'.'", 2],
          "other": ["00 Bio'.'", 2]
        }], [100000000000000, {
          "one": ["000 Bio'.'", 3],
          "other": ["000 Bio'.'", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/en", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "en-US",
    "parentLocale": "en"
  }, {
    "locale": "en",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} year",
            "other": "in {0} years"
          },
          "past": {
            "one": "{0} year ago",
            "other": "{0} years ago"
          }
        }
      },
      "year-short": {
        "displayName": "yr.",
        "relative": {
          "0": "this yr.",
          "1": "next yr.",
          "-1": "last yr."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} yr.",
            "other": "in {0} yr."
          },
          "past": {
            "one": "{0} yr. ago",
            "other": "{0} yr. ago"
          }
        }
      },
      "month": {
        "displayName": "month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} month",
            "other": "in {0} months"
          },
          "past": {
            "one": "{0} month ago",
            "other": "{0} months ago"
          }
        }
      },
      "month-short": {
        "displayName": "mo.",
        "relative": {
          "0": "this mo.",
          "1": "next mo.",
          "-1": "last mo."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} mo.",
            "other": "in {0} mo."
          },
          "past": {
            "one": "{0} mo. ago",
            "other": "{0} mo. ago"
          }
        }
      },
      "day": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "day-short": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "hour": {
        "displayName": "hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hour",
            "other": "in {0} hours"
          },
          "past": {
            "one": "{0} hour ago",
            "other": "{0} hours ago"
          }
        }
      },
      "hour-short": {
        "displayName": "hr.",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hr.",
            "other": "in {0} hr."
          },
          "past": {
            "one": "{0} hr. ago",
            "other": "{0} hr. ago"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} minute",
            "other": "in {0} minutes"
          },
          "past": {
            "one": "{0} minute ago",
            "other": "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} min.",
            "other": "in {0} min."
          },
          "past": {
            "one": "{0} min. ago",
            "other": "{0} min. ago"
          }
        }
      },
      "second": {
        "displayName": "second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} second",
            "other": "in {0} seconds"
          },
          "past": {
            "one": "{0} second ago",
            "other": "{0} seconds ago"
          }
        }
      },
      "second-short": {
        "displayName": "sec.",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} sec.",
            "other": "in {0} sec."
          },
          "past": {
            "one": "{0} sec. ago",
            "other": "{0} sec. ago"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 thousand", 1],
          "other": ["0 thousand", 1]
        }], [10000, {
          "one": ["00 thousand", 2],
          "other": ["00 thousand", 2]
        }], [100000, {
          "one": ["000 thousand", 3],
          "other": ["000 thousand", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 million", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 million", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 million", 3]
        }], [1000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billion", 1]
        }], [10000000000, {
          "one": ["00 billion", 2],
          "other": ["00 billion", 2]
        }], [100000000000, {
          "one": ["000 billion", 3],
          "other": ["000 billion", 3]
        }], [1000000000000, {
          "one": ["0 trillion", 1],
          "other": ["0 trillion", 1]
        }], [10000000000000, {
          "one": ["00 trillion", 2],
          "other": ["00 trillion", 2]
        }], [100000000000000, {
          "one": ["000 trillion", 3],
          "other": ["000 trillion", 3]
        }]],
        "short": [[1000, {
          "one": ["0K", 1],
          "other": ["0K", 1]
        }], [10000, {
          "one": ["00K", 2],
          "other": ["00K", 2]
        }], [100000, {
          "one": ["000K", 3],
          "other": ["000K", 3]
        }], [1000000, {
          "one": ["0M", 1],
          "other": ["0M", 1]
        }], [10000000, {
          "one": ["00M", 2],
          "other": ["00M", 2]
        }], [100000000, {
          "one": ["000M", 3],
          "other": ["000M", 3]
        }], [1000000000, {
          "one": ["0B", 1],
          "other": ["0B", 1]
        }], [10000000000, {
          "one": ["00B", 2],
          "other": ["00B", 2]
        }], [100000000000, {
          "one": ["000B", 3],
          "other": ["000B", 3]
        }], [1000000000000, {
          "one": ["0T", 1],
          "other": ["0T", 1]
        }], [10000000000000, {
          "one": ["00T", 2],
          "other": ["00T", 2]
        }], [100000000000000, {
          "one": ["000T", 3],
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/es", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "es-es",
    "parentLocale": "es"
  }, {
    "locale": "es",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "año",
        "relative": {
          "0": "este año",
          "1": "el próximo año",
          "-1": "el año pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} año",
            "other": "dentro de {0} años"
          },
          "past": {
            "one": "hace {0} año",
            "other": "hace {0} años"
          }
        }
      },
      "year-short": {
        "displayName": "a",
        "relative": {
          "0": "este año",
          "1": "el próximo año",
          "-1": "el año pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} a",
            "other": "dentro de {0} a"
          },
          "past": {
            "one": "hace {0} a",
            "other": "hace {0} a"
          }
        }
      },
      "month": {
        "displayName": "mes",
        "relative": {
          "0": "este mes",
          "1": "el próximo mes",
          "-1": "el mes pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} mes",
            "other": "dentro de {0} meses"
          },
          "past": {
            "one": "hace {0} mes",
            "other": "hace {0} meses"
          }
        }
      },
      "month-short": {
        "displayName": "m",
        "relative": {
          "0": "este mes",
          "1": "el próximo mes",
          "-1": "el mes pasado"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} m",
            "other": "dentro de {0} m"
          },
          "past": {
            "one": "hace {0} m",
            "other": "hace {0} m"
          }
        }
      },
      "day": {
        "displayName": "día",
        "relative": {
          "0": "hoy",
          "1": "mañana",
          "2": "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} día",
            "other": "dentro de {0} días"
          },
          "past": {
            "one": "hace {0} día",
            "other": "hace {0} días"
          }
        }
      },
      "day-short": {
        "displayName": "d",
        "relative": {
          "0": "hoy",
          "1": "mañana",
          "2": "pasado mañana",
          "-2": "anteayer",
          "-1": "ayer"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} día",
            "other": "dentro de {0} días"
          },
          "past": {
            "one": "hace {0} día",
            "other": "hace {0} días"
          }
        }
      },
      "hour": {
        "displayName": "hora",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} hora",
            "other": "dentro de {0} horas"
          },
          "past": {
            "one": "hace {0} hora",
            "other": "hace {0} horas"
          }
        }
      },
      "hour-short": {
        "displayName": "h",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} h",
            "other": "dentro de {0} h"
          },
          "past": {
            "one": "hace {0} h",
            "other": "hace {0} h"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} minuto",
            "other": "dentro de {0} minutos"
          },
          "past": {
            "one": "hace {0} minuto",
            "other": "hace {0} minutos"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} min",
            "other": "dentro de {0} min"
          },
          "past": {
            "one": "hace {0} min",
            "other": "hace {0} min"
          }
        }
      },
      "second": {
        "displayName": "segundo",
        "relative": {
          "0": "ahora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} segundo",
            "other": "dentro de {0} segundos"
          },
          "past": {
            "one": "hace {0} segundo",
            "other": "hace {0} segundos"
          }
        }
      },
      "second-short": {
        "displayName": "s",
        "relative": {
          "0": "ahora"
        },
        "relativeTime": {
          "future": {
            "one": "dentro de {0} s",
            "other": "dentro de {0} s"
          },
          "past": {
            "one": "hace {0} s",
            "other": "hace {0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 millón", 1],
          "other": ["0 millones", 1]
        }], [10000000, {
          "one": ["00 millones", 2],
          "other": ["00 millones", 2]
        }], [100000000, {
          "one": ["000 millones", 3],
          "other": ["000 millones", 3]
        }], [1000000000, {
          "one": ["0 mil millones", 1],
          "other": ["0 mil millones", 1]
        }], [10000000000, {
          "one": ["00 mil millones", 2],
          "other": ["00 mil millones", 2]
        }], [100000000000, {
          "one": ["000 mil millones", 3],
          "other": ["000 mil millones", 3]
        }], [1000000000000, {
          "one": ["0 billón", 1],
          "other": ["0 billones", 1]
        }], [10000000000000, {
          "one": ["00 billones", 2],
          "other": ["00 billones", 2]
        }], [100000000000000, {
          "one": ["000 billones", 3],
          "other": ["000 billones", 3]
        }]],
        "short": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 M", 1],
          "other": ["0 M", 1]
        }], [10000000, {
          "one": ["00 M", 2],
          "other": ["00 M", 2]
        }], [100000000, {
          "one": ["000 M", 3],
          "other": ["000 M", 3]
        }], [1000000000, {
          "one": ["0000 M", 4],
          "other": ["0000 M", 4]
        }], [10000000000, {
          "one": ["00 mil M", 2],
          "other": ["00 mil M", 2]
        }], [100000000000, {
          "one": ["000 mil M", 3],
          "other": ["000 mil M", 3]
        }], [1000000000000, {
          "one": ["0 B", 1],
          "other": ["0 B", 1]
        }], [10000000000000, {
          "one": ["00 B", 2],
          "other": ["00 B", 2]
        }], [100000000000000, {
          "one": ["000 B", 3],
          "other": ["000 B", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/fa", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "fa-ir",
    "parentLocale": "fa"
  }, {
    "locale": "fa",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return n >= 0 && n <= 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "سال",
        "relative": {
          "0": "امسال",
          "1": "سال آینده",
          "-1": "سال گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} سال بعد",
            "other": "{0} سال بعد"
          },
          "past": {
            "one": "{0} سال پیش",
            "other": "{0} سال پیش"
          }
        }
      },
      "year-short": {
        "displayName": "سال",
        "relative": {
          "0": "امسال",
          "1": "سال آینده",
          "-1": "سال گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} سال بعد",
            "other": "{0} سال بعد"
          },
          "past": {
            "one": "{0} سال پیش",
            "other": "{0} سال پیش"
          }
        }
      },
      "month": {
        "displayName": "ماه",
        "relative": {
          "0": "این ماه",
          "1": "ماه آینده",
          "-1": "ماه گذشته"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ماه بعد",
            "other": "{0} ماه بعد"
          },
          "past": {
            "one": "{0} ماه پیش",
            "other": "{0} ماه پیش"
          }
        }
      },
      "month-short": {
        "displayName": "ماه",
        "relative": {
          "0": "این ماه",
          "1": "ماه آینده",
          "-1": "ماه پیش"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ماه بعد",
            "other": "{0} ماه بعد"
          },
          "past": {
            "one": "{0} ماه پیش",
            "other": "{0} ماه پیش"
          }
        }
      },
      "day": {
        "displayName": "روز",
        "relative": {
          "0": "امروز",
          "1": "فردا",
          "2": "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        "relativeTime": {
          "future": {
            "one": "{0} روز بعد",
            "other": "{0} روز بعد"
          },
          "past": {
            "one": "{0} روز پیش",
            "other": "{0} روز پیش"
          }
        }
      },
      "day-short": {
        "displayName": "روز",
        "relative": {
          "0": "امروز",
          "1": "فردا",
          "2": "پس‌فردا",
          "-2": "پریروز",
          "-1": "دیروز"
        },
        "relativeTime": {
          "future": {
            "one": "{0} روز بعد",
            "other": "{0} روز بعد"
          },
          "past": {
            "one": "{0} روز پیش",
            "other": "{0} روز پیش"
          }
        }
      },
      "hour": {
        "displayName": "ساعت",
        "relative": {
          "0": "همین ساعت"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ساعت بعد",
            "other": "{0} ساعت بعد"
          },
          "past": {
            "one": "{0} ساعت پیش",
            "other": "{0} ساعت پیش"
          }
        }
      },
      "hour-short": {
        "displayName": "ساعت",
        "relative": {
          "0": "همین ساعت"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ساعت بعد",
            "other": "{0} ساعت بعد"
          },
          "past": {
            "one": "{0} ساعت پیش",
            "other": "{0} ساعت پیش"
          }
        }
      },
      "minute": {
        "displayName": "دقیقه",
        "relative": {
          "0": "همین دقیقه"
        },
        "relativeTime": {
          "future": {
            "one": "{0} دقیقه بعد",
            "other": "{0} دقیقه بعد"
          },
          "past": {
            "one": "{0} دقیقه پیش",
            "other": "{0} دقیقه پیش"
          }
        }
      },
      "minute-short": {
        "displayName": "دقیقه",
        "relative": {
          "0": "همین دقیقه"
        },
        "relativeTime": {
          "future": {
            "one": "{0} دقیقه بعد",
            "other": "{0} دقیقه بعد"
          },
          "past": {
            "one": "{0} دقیقه پیش",
            "other": "{0} دقیقه پیش"
          }
        }
      },
      "second": {
        "displayName": "ثانیه",
        "relative": {
          "0": "اکنون"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ثانیه بعد",
            "other": "{0} ثانیه بعد"
          },
          "past": {
            "one": "{0} ثانیه پیش",
            "other": "{0} ثانیه پیش"
          }
        }
      },
      "second-short": {
        "displayName": "ثانیه",
        "relative": {
          "0": "اکنون"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ثانیه بعد",
            "other": "{0} ثانیه بعد"
          },
          "past": {
            "one": "{0} ثانیه پیش",
            "other": "{0} ثانیه پیش"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 هزار", 1],
          "other": ["0 هزار", 1]
        }], [10000, {
          "one": ["00 هزار", 2],
          "other": ["00 هزار", 2]
        }], [100000, {
          "one": ["000 هزار", 3],
          "other": ["000 هزار", 3]
        }], [1000000, {
          "one": ["0 میلیون", 1],
          "other": ["0 میلیون", 1]
        }], [10000000, {
          "one": ["00 میلیون", 2],
          "other": ["00 میلیون", 2]
        }], [100000000, {
          "one": ["000 میلیون", 3],
          "other": ["000 میلیون", 3]
        }], [1000000000, {
          "one": ["0 میلیارد", 1],
          "other": ["0 میلیارد", 1]
        }], [10000000000, {
          "one": ["00 میلیارد", 2],
          "other": ["00 میلیارد", 2]
        }], [100000000000, {
          "one": ["000 میلیارد", 3],
          "other": ["000 میلیارد", 3]
        }], [1000000000000, {
          "one": ["0 هزارمیلیارد", 1],
          "other": ["0 هزارمیلیارد", 1]
        }], [10000000000000, {
          "one": ["00 هزارمیلیارد", 2],
          "other": ["00 هزارمیلیارد", 2]
        }], [100000000000000, {
          "one": ["000 هزارمیلیارد", 3],
          "other": ["000 هزارمیلیارد", 3]
        }]],
        "short": [[1000, {
          "one": ["0 هزار", 1],
          "other": ["0 هزار", 1]
        }], [10000, {
          "one": ["00 هزار", 2],
          "other": ["00 هزار", 2]
        }], [100000, {
          "one": ["000 هزار", 3],
          "other": ["000 هزار", 3]
        }], [1000000, {
          "one": ["0 میلیون", 1],
          "other": ["0 میلیون", 1]
        }], [10000000, {
          "one": ["00 میلیون", 2],
          "other": ["00 میلیون", 2]
        }], [100000000, {
          "one": ["000 م", 3],
          "other": ["000 م", 3]
        }], [1000000000, {
          "one": ["0 م", 1],
          "other": ["0 م", 1]
        }], [10000000000, {
          "one": ["00 م", 2],
          "other": ["00 م", 2]
        }], [100000000000, {
          "one": ["000 میلیارد", 3],
          "other": ["000 میلیارد", 3]
        }], [1000000000000, {
          "one": ["0 تریلیون", 1],
          "other": ["0 تریلیون", 1]
        }], [10000000000000, {
          "one": ["00 ت", 2],
          "other": ["00 ت", 2]
        }], [100000000000000, {
          "one": ["000 ت", 3],
          "other": ["000 ت", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/fr", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "fr-fr",
    "parentLocale": "fr"
  }, {
    "locale": "fr",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return n >= 0 && n < 2 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "année",
        "relative": {
          "0": "cette année",
          "1": "l’année prochaine",
          "-1": "l’année dernière"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} an",
            "other": "dans {0} ans"
          },
          "past": {
            "one": "il y a {0} an",
            "other": "il y a {0} ans"
          }
        }
      },
      "year-short": {
        "displayName": "an",
        "relative": {
          "0": "cette année",
          "1": "l’année prochaine",
          "-1": "l’année dernière"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} a",
            "other": "dans {0} a"
          },
          "past": {
            "one": "il y a {0} a",
            "other": "il y a {0} a"
          }
        }
      },
      "month": {
        "displayName": "mois",
        "relative": {
          "0": "ce mois-ci",
          "1": "le mois prochain",
          "-1": "le mois dernier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} mois",
            "other": "dans {0} mois"
          },
          "past": {
            "one": "il y a {0} mois",
            "other": "il y a {0} mois"
          }
        }
      },
      "month-short": {
        "displayName": "m.",
        "relative": {
          "0": "ce mois-ci",
          "1": "le mois prochain",
          "-1": "le mois dernier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} m.",
            "other": "dans {0} m."
          },
          "past": {
            "one": "il y a {0} m.",
            "other": "il y a {0} m."
          }
        }
      },
      "day": {
        "displayName": "jour",
        "relative": {
          "0": "aujourd’hui",
          "1": "demain",
          "2": "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} jour",
            "other": "dans {0} jours"
          },
          "past": {
            "one": "il y a {0} jour",
            "other": "il y a {0} jours"
          }
        }
      },
      "day-short": {
        "displayName": "j",
        "relative": {
          "0": "aujourd’hui",
          "1": "demain",
          "2": "après-demain",
          "-2": "avant-hier",
          "-1": "hier"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} j",
            "other": "dans {0} j"
          },
          "past": {
            "one": "il y a {0} j",
            "other": "il y a {0} j"
          }
        }
      },
      "hour": {
        "displayName": "heure",
        "relative": {
          "0": "cette heure-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} heure",
            "other": "dans {0} heures"
          },
          "past": {
            "one": "il y a {0} heure",
            "other": "il y a {0} heures"
          }
        }
      },
      "hour-short": {
        "displayName": "h",
        "relative": {
          "0": "cette heure-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} h",
            "other": "dans {0} h"
          },
          "past": {
            "one": "il y a {0} h",
            "other": "il y a {0} h"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "cette minute-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} minute",
            "other": "dans {0} minutes"
          },
          "past": {
            "one": "il y a {0} minute",
            "other": "il y a {0} minutes"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "cette minute-ci"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} min",
            "other": "dans {0} min"
          },
          "past": {
            "one": "il y a {0} min",
            "other": "il y a {0} min"
          }
        }
      },
      "second": {
        "displayName": "seconde",
        "relative": {
          "0": "maintenant"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} seconde",
            "other": "dans {0} secondes"
          },
          "past": {
            "one": "il y a {0} seconde",
            "other": "il y a {0} secondes"
          }
        }
      },
      "second-short": {
        "displayName": "s",
        "relative": {
          "0": "maintenant"
        },
        "relativeTime": {
          "future": {
            "one": "dans {0} s",
            "other": "dans {0} s"
          },
          "past": {
            "one": "il y a {0} s",
            "other": "il y a {0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 millier", 1],
          "other": ["0 mille", 1]
        }], [10000, {
          "one": ["00 mille", 2],
          "other": ["00 mille", 2]
        }], [100000, {
          "one": ["000 mille", 3],
          "other": ["000 mille", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 millions", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 millions", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 millions", 3]
        }], [1000000000, {
          "one": ["0 milliard", 1],
          "other": ["0 milliards", 1]
        }], [10000000000, {
          "one": ["00 milliard", 2],
          "other": ["00 milliards", 2]
        }], [100000000000, {
          "one": ["000 milliard", 3],
          "other": ["000 milliards", 3]
        }], [1000000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billions", 1]
        }], [10000000000000, {
          "one": ["00 billion", 2],
          "other": ["00 billions", 2]
        }], [100000000000000, {
          "one": ["000 billion", 3],
          "other": ["000 billions", 3]
        }]],
        "short": [[1000, {
          "one": ["0 k", 1],
          "other": ["0 k", 1]
        }], [10000, {
          "one": ["00 k", 2],
          "other": ["00 k", 2]
        }], [100000, {
          "one": ["000 k", 3],
          "other": ["000 k", 3]
        }], [1000000, {
          "one": ["0 M", 1],
          "other": ["0 M", 1]
        }], [10000000, {
          "one": ["00 M", 2],
          "other": ["00 M", 2]
        }], [100000000, {
          "one": ["000 M", 3],
          "other": ["000 M", 3]
        }], [1000000000, {
          "one": ["0 Md", 1],
          "other": ["0 Md", 1]
        }], [10000000000, {
          "one": ["00 Md", 2],
          "other": ["00 Md", 2]
        }], [100000000000, {
          "one": ["000 Md", 3],
          "other": ["000 Md", 3]
        }], [1000000000000, {
          "one": ["0 Bn", 1],
          "other": ["0 Bn", 1]
        }], [10000000000000, {
          "one": ["00 Bn", 2],
          "other": ["00 Bn", 2]
        }], [100000000000000, {
          "one": ["000 Bn", 3],
          "other": ["000 Bn", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/hu", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "hu-hu",
    "parentLocale": "hu"
  }, {
    "locale": "hu",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return n == 1 || n == 5 ? "one" : "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "év",
        "relative": {
          "0": "ez az év",
          "1": "következő év",
          "-1": "előző év"
        },
        "relativeTime": {
          "future": {
            "one": "{0} év múlva",
            "other": "{0} év múlva"
          },
          "past": {
            "one": "{0} évvel ezelőtt",
            "other": "{0} évvel ezelőtt"
          }
        }
      },
      "year-short": {
        "displayName": "év",
        "relative": {
          "0": "ez az év",
          "1": "következő év",
          "-1": "előző év"
        },
        "relativeTime": {
          "future": {
            "one": "{0} év múlva",
            "other": "{0} év múlva"
          },
          "past": {
            "one": "{0} évvel ezelőtt",
            "other": "{0} évvel ezelőtt"
          }
        }
      },
      "month": {
        "displayName": "hónap",
        "relative": {
          "0": "ez a hónap",
          "1": "következő hónap",
          "-1": "előző hónap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} hónap múlva",
            "other": "{0} hónap múlva"
          },
          "past": {
            "one": "{0} hónappal ezelőtt",
            "other": "{0} hónappal ezelőtt"
          }
        }
      },
      "month-short": {
        "displayName": "hónap",
        "relative": {
          "0": "ez a hónap",
          "1": "következő hónap",
          "-1": "előző hónap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} hónap múlva",
            "other": "{0} hónap múlva"
          },
          "past": {
            "one": "{0} hónappal ezelőtt",
            "other": "{0} hónappal ezelőtt"
          }
        }
      },
      "day": {
        "displayName": "nap",
        "relative": {
          "0": "ma",
          "1": "holnap",
          "2": "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} nap múlva",
            "other": "{0} nap múlva"
          },
          "past": {
            "one": "{0} nappal ezelőtt",
            "other": "{0} nappal ezelőtt"
          }
        }
      },
      "day-short": {
        "displayName": "nap",
        "relative": {
          "0": "ma",
          "1": "holnap",
          "2": "holnapután",
          "-2": "tegnapelőtt",
          "-1": "tegnap"
        },
        "relativeTime": {
          "future": {
            "one": "{0} nap múlva",
            "other": "{0} nap múlva"
          },
          "past": {
            "one": "{0} napja",
            "other": "{0} napja"
          }
        }
      },
      "hour": {
        "displayName": "óra",
        "relative": {
          "0": "ebben az órában"
        },
        "relativeTime": {
          "future": {
            "one": "{0} óra múlva",
            "other": "{0} óra múlva"
          },
          "past": {
            "one": "{0} órával ezelőtt",
            "other": "{0} órával ezelőtt"
          }
        }
      },
      "hour-short": {
        "displayName": "óra",
        "relative": {
          "0": "ebben az órában"
        },
        "relativeTime": {
          "future": {
            "one": "{0} óra múlva",
            "other": "{0} óra múlva"
          },
          "past": {
            "one": "{0} órával ezelőtt",
            "other": "{0} órával ezelőtt"
          }
        }
      },
      "minute": {
        "displayName": "perc",
        "relative": {
          "0": "ebben a percben"
        },
        "relativeTime": {
          "future": {
            "one": "{0} perc múlva",
            "other": "{0} perc múlva"
          },
          "past": {
            "one": "{0} perccel ezelőtt",
            "other": "{0} perccel ezelőtt"
          }
        }
      },
      "minute-short": {
        "displayName": "perc",
        "relative": {
          "0": "ebben a percben"
        },
        "relativeTime": {
          "future": {
            "one": "{0} perc múlva",
            "other": "{0} perc múlva"
          },
          "past": {
            "one": "{0} perccel ezelőtt",
            "other": "{0} perccel ezelőtt"
          }
        }
      },
      "second": {
        "displayName": "másodperc",
        "relative": {
          "0": "most"
        },
        "relativeTime": {
          "future": {
            "one": "{0} másodperc múlva",
            "other": "{0} másodperc múlva"
          },
          "past": {
            "one": "{0} másodperccel ezelőtt",
            "other": "{0} másodperccel ezelőtt"
          }
        }
      },
      "second-short": {
        "displayName": "másodperc",
        "relative": {
          "0": "most"
        },
        "relativeTime": {
          "future": {
            "one": "{0} másodperc múlva",
            "other": "{0} másodperc múlva"
          },
          "past": {
            "one": "{0} másodperccel ezelőtt",
            "other": "{0} másodperccel ezelőtt"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 ezer", 1],
          "other": ["0 ezer", 1]
        }], [10000, {
          "one": ["00 ezer", 2],
          "other": ["00 ezer", 2]
        }], [100000, {
          "one": ["000 ezer", 3],
          "other": ["000 ezer", 3]
        }], [1000000, {
          "one": ["0 millió", 1],
          "other": ["0 millió", 1]
        }], [10000000, {
          "one": ["00 millió", 2],
          "other": ["00 millió", 2]
        }], [100000000, {
          "one": ["000 millió", 3],
          "other": ["000 millió", 3]
        }], [1000000000, {
          "one": ["0 milliárd", 1],
          "other": ["0 milliárd", 1]
        }], [10000000000, {
          "one": ["00 milliárd", 2],
          "other": ["00 milliárd", 2]
        }], [100000000000, {
          "one": ["000 milliárd", 3],
          "other": ["000 milliárd", 3]
        }], [1000000000000, {
          "one": ["0 billió", 1],
          "other": ["0 billió", 1]
        }], [10000000000000, {
          "one": ["00 billió", 2],
          "other": ["00 billió", 2]
        }], [100000000000000, {
          "one": ["000 billió", 3],
          "other": ["000 billió", 3]
        }]],
        "short": [[1000, {
          "one": ["0 E", 1],
          "other": ["0 E", 1]
        }], [10000, {
          "one": ["00 E", 2],
          "other": ["00 E", 2]
        }], [100000, {
          "one": ["000 E", 3],
          "other": ["000 E", 3]
        }], [1000000, {
          "one": ["0 M", 1],
          "other": ["0 M", 1]
        }], [10000000, {
          "one": ["00 M", 2],
          "other": ["00 M", 2]
        }], [100000000, {
          "one": ["000 M", 3],
          "other": ["000 M", 3]
        }], [1000000000, {
          "one": ["0 Mrd", 1],
          "other": ["0 Mrd", 1]
        }], [10000000000, {
          "one": ["00 Mrd", 2],
          "other": ["00 Mrd", 2]
        }], [100000000000, {
          "one": ["000 Mrd", 3],
          "other": ["000 Mrd", 3]
        }], [1000000000000, {
          "one": ["0 B", 1],
          "other": ["0 B", 1]
        }], [10000000000000, {
          "one": ["00 B", 2],
          "other": ["00 B", 2]
        }], [100000000000000, {
          "one": ["000 B", 3],
          "other": ["000 B", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/it", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "it-it",
    "parentLocale": "it"
  }, {
    "locale": "it",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? "many" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "anno",
        "relative": {
          "0": "quest’anno",
          "1": "anno prossimo",
          "-1": "anno scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} anno",
            "other": "tra {0} anni"
          },
          "past": {
            "one": "{0} anno fa",
            "other": "{0} anni fa"
          }
        }
      },
      "year-short": {
        "displayName": "anno",
        "relative": {
          "0": "quest’anno",
          "1": "anno prossimo",
          "-1": "anno scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} anno",
            "other": "tra {0} anni"
          },
          "past": {
            "one": "{0} anno fa",
            "other": "{0} anni fa"
          }
        }
      },
      "month": {
        "displayName": "mese",
        "relative": {
          "0": "questo mese",
          "1": "mese prossimo",
          "-1": "mese scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} mese",
            "other": "tra {0} mesi"
          },
          "past": {
            "one": "{0} mese fa",
            "other": "{0} mesi fa"
          }
        }
      },
      "month-short": {
        "displayName": "mese",
        "relative": {
          "0": "questo mese",
          "1": "mese prossimo",
          "-1": "mese scorso"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} mese",
            "other": "tra {0} mesi"
          },
          "past": {
            "one": "{0} mese fa",
            "other": "{0} mesi fa"
          }
        }
      },
      "day": {
        "displayName": "giorno",
        "relative": {
          "0": "oggi",
          "1": "domani",
          "2": "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} giorno",
            "other": "tra {0} giorni"
          },
          "past": {
            "one": "{0} giorno fa",
            "other": "{0} giorni fa"
          }
        }
      },
      "day-short": {
        "displayName": "g",
        "relative": {
          "0": "oggi",
          "1": "domani",
          "2": "dopodomani",
          "-2": "l’altro ieri",
          "-1": "ieri"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} g",
            "other": "tra {0} gg"
          },
          "past": {
            "one": "{0} g fa",
            "other": "{0} gg fa"
          }
        }
      },
      "hour": {
        "displayName": "ora",
        "relative": {
          "0": "quest’ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} ora",
            "other": "tra {0} ore"
          },
          "past": {
            "one": "{0} ora fa",
            "other": "{0} ore fa"
          }
        }
      },
      "hour-short": {
        "displayName": "h.",
        "relative": {
          "0": "quest’ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} h",
            "other": "tra {0} h"
          },
          "past": {
            "one": "{0} h fa",
            "other": "{0} h fa"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relative": {
          "0": "questo minuto"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} minuto",
            "other": "tra {0} minuti"
          },
          "past": {
            "one": "{0} minuto fa",
            "other": "{0} minuti fa"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "questo minuto"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} min",
            "other": "tra {0} min"
          },
          "past": {
            "one": "{0} min fa",
            "other": "{0} min fa"
          }
        }
      },
      "second": {
        "displayName": "secondo",
        "relative": {
          "0": "ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} secondo",
            "other": "tra {0} secondi"
          },
          "past": {
            "one": "{0} secondo fa",
            "other": "{0} secondi fa"
          }
        }
      },
      "second-short": {
        "displayName": "s",
        "relative": {
          "0": "ora"
        },
        "relativeTime": {
          "future": {
            "one": "tra {0} s",
            "other": "tra {0} sec."
          },
          "past": {
            "one": "{0} s fa",
            "other": "{0} sec. fa"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 mille", 1],
          "other": ["0 mila", 1]
        }], [10000, {
          "one": ["00 mila", 2],
          "other": ["00 mila", 2]
        }], [100000, {
          "one": ["000 mila", 3],
          "other": ["000 mila", 3]
        }], [1000000, {
          "one": ["0 milione", 1],
          "other": ["0 milioni", 1]
        }], [10000000, {
          "one": ["00 milioni", 2],
          "other": ["00 milioni", 2]
        }], [100000000, {
          "one": ["000 milioni", 3],
          "other": ["000 milioni", 3]
        }], [1000000000, {
          "one": ["0 miliardo", 1],
          "other": ["0 miliardi", 1]
        }], [10000000000, {
          "one": ["00 miliardi", 2],
          "other": ["00 miliardi", 2]
        }], [100000000000, {
          "one": ["000 miliardi", 3],
          "other": ["000 miliardi", 3]
        }], [1000000000000, {
          "one": ["0 mille miliardi", 1],
          "other": ["0 mila miliardi", 1]
        }], [10000000000000, {
          "one": ["00 mila miliardi", 2],
          "other": ["00 mila miliardi", 2]
        }], [100000000000000, {
          "one": ["000 mila miliardi", 3],
          "other": ["000 mila miliardi", 3]
        }]],
        "short": [[1000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [10000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [100000, {
          "one": ["0", 1],
          "other": ["0", 1]
        }], [1000000, {
          "one": ["0 Mln", 1],
          "other": ["0 Mln", 1]
        }], [10000000, {
          "one": ["00 Mln", 2],
          "other": ["00 Mln", 2]
        }], [100000000, {
          "one": ["000 Mln", 3],
          "other": ["000 Mln", 3]
        }], [1000000000, {
          "one": ["0 Mrd", 1],
          "other": ["0 Mrd", 1]
        }], [10000000000, {
          "one": ["00 Mrd", 2],
          "other": ["00 Mrd", 2]
        }], [100000000000, {
          "one": ["000 Mrd", 3],
          "other": ["000 Mrd", 3]
        }], [1000000000000, {
          "one": ["0 Bln", 1],
          "other": ["0 Bln", 1]
        }], [10000000000000, {
          "one": ["00 Bln", 2],
          "other": ["00 Bln", 2]
        }], [100000000000000, {
          "one": ["000 Bln", 3],
          "other": ["000 Bln", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/ja", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ja-jp",
    "parentLocale": "ja"
  }, {
    "locale": "ja",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "翌年",
          "-1": "昨年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "翌年",
          "-1": "昨年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "今月",
          "1": "翌月",
          "-1": "先月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} か月後"
          },
          "past": {
            "other": "{0} か月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "今月",
          "1": "翌月",
          "-1": "先月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} か月後"
          },
          "past": {
            "other": "{0} か月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今日",
          "1": "明日",
          "2": "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 日後"
          },
          "past": {
            "other": "{0} 日前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今日",
          "1": "明日",
          "2": "明後日",
          "-2": "一昨日",
          "-1": "昨日"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 日後"
          },
          "past": {
            "other": "{0} 日前"
          }
        }
      },
      "hour": {
        "displayName": "時",
        "relative": {
          "0": "1 時間以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 時間後"
          },
          "past": {
            "other": "{0} 時間前"
          }
        }
      },
      "hour-short": {
        "displayName": "時",
        "relative": {
          "0": "1 時間以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 時間後"
          },
          "past": {
            "other": "{0} 時間前"
          }
        }
      },
      "minute": {
        "displayName": "分",
        "relative": {
          "0": "1 分以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分後"
          },
          "past": {
            "other": "{0} 分前"
          }
        }
      },
      "minute-short": {
        "displayName": "分",
        "relative": {
          "0": "1 分以内"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分後"
          },
          "past": {
            "other": "{0} 分前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "今"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "今"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/km", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "km-kh",
    "parentLocale": "km"
  }, {
    "locale": "km",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "ឆ្នាំ",
        "relative": {
          "0": "ឆ្នាំ​នេះ",
          "1": "ឆ្នាំ​ក្រោយ",
          "-1": "ឆ្នាំ​មុន"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ឆ្នាំទៀត"
          },
          "past": {
            "other": "{0} ឆ្នាំ​មុន"
          }
        }
      },
      "year-short": {
        "displayName": "ឆ្នាំ",
        "relative": {
          "0": "ឆ្នាំ​នេះ",
          "1": "ឆ្នាំ​ក្រោយ",
          "-1": "ឆ្នាំ​មុន"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ឆ្នាំទៀត"
          },
          "past": {
            "other": "{0} ឆ្នាំ​មុន"
          }
        }
      },
      "month": {
        "displayName": "ខែ",
        "relative": {
          "0": "ខែ​នេះ",
          "1": "ខែ​ក្រោយ",
          "-1": "ខែ​មុន"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ខែទៀត"
          },
          "past": {
            "other": "{0} ខែមុន"
          }
        }
      },
      "month-short": {
        "displayName": "ខែ",
        "relative": {
          "0": "ខែ​នេះ",
          "1": "ខែ​ក្រោយ",
          "-1": "ខែ​មុន"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ខែទៀត"
          },
          "past": {
            "other": "{0} ខែមុន"
          }
        }
      },
      "day": {
        "displayName": "ថ្ងៃ",
        "relative": {
          "0": "ថ្ងៃ​នេះ",
          "1": "ថ្ងៃ​ស្អែក",
          "2": "​ខាន​ស្អែក",
          "-2": "ម្សិល​ម៉្ងៃ",
          "-1": "ម្សិលមិញ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ថ្ងៃទៀត"
          },
          "past": {
            "other": "{0} ថ្ងៃ​មុន"
          }
        }
      },
      "day-short": {
        "displayName": "ថ្ងៃ",
        "relative": {
          "0": "ថ្ងៃ​នេះ",
          "1": "ថ្ងៃស្អែក",
          "2": "​ខាន​ស្អែក",
          "-2": "ម្សិល​ម៉្ងៃ",
          "-1": "ម្សិលមិញ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ថ្ងៃទៀត"
          },
          "past": {
            "other": "{0} ថ្ងៃ​​មុន"
          }
        }
      },
      "hour": {
        "displayName": "ម៉ោង",
        "relative": {
          "0": "ម៉ោងនេះ"
        },
        "relativeTime": {
          "future": {
            "other": "ក្នុង​រយៈ​ពេល {0} ម៉ោង"
          },
          "past": {
            "other": "{0} ម៉ោង​មុន"
          }
        }
      },
      "hour-short": {
        "displayName": "ម៉ោង",
        "relative": {
          "0": "ម៉ោងនេះ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} ម៉ោងទៀត"
          },
          "past": {
            "other": "{0} ម៉ោង​មុន"
          }
        }
      },
      "minute": {
        "displayName": "នាទី",
        "relative": {
          "0": "នាទីនេះ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} នាទីទៀត"
          },
          "past": {
            "other": "{0} នាទី​មុន"
          }
        }
      },
      "minute-short": {
        "displayName": "នាទី",
        "relative": {
          "0": "នាទីនេះ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} នាទីទៀត"
          },
          "past": {
            "other": "{0} នាទី​​មុន"
          }
        }
      },
      "second": {
        "displayName": "វិនាទី",
        "relative": {
          "0": "ឥឡូវ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} វិនាទីទៀត"
          },
          "past": {
            "other": "{0} វិនាទី​មុន"
          }
        }
      },
      "second-short": {
        "displayName": "វិនាទី",
        "relative": {
          "0": "ឥឡូវ"
        },
        "relativeTime": {
          "future": {
            "other": "{0} វិនាទីទៀត"
          },
          "past": {
            "other": "{0} វិនាទី​មុន"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0 ពាន់", 1]
        }], [10000, {
          "other": ["00 ពាន់", 2]
        }], [100000, {
          "other": ["000ពាន់", 3]
        }], [1000000, {
          "other": ["0 លាន", 1]
        }], [10000000, {
          "other": ["00 លាន", 2]
        }], [100000000, {
          "other": ["000 លាន", 3]
        }], [1000000000, {
          "other": ["0 ប៊ីលាន", 1]
        }], [10000000000, {
          "other": ["00 ប៊ីលាន", 2]
        }], [100000000000, {
          "other": ["000 ប៊ីលាន", 3]
        }], [1000000000000, {
          "other": ["0 ទ្រីលាន", 1]
        }], [10000000000000, {
          "other": ["00 ទ្រីលាន", 2]
        }], [100000000000000, {
          "other": ["000 ទ្រីលាន", 3]
        }]],
        "short": [[1000, {
          "other": ["0ពាន់", 1]
        }], [10000, {
          "other": ["00 ពាន់", 2]
        }], [100000, {
          "other": ["000 ពាន់", 3]
        }], [1000000, {
          "other": ["0 លាន", 1]
        }], [10000000, {
          "other": ["00 លាន", 2]
        }], [100000000, {
          "other": ["000 លាន", 3]
        }], [1000000000, {
          "other": ["0 ប៊ីលាន", 1]
        }], [10000000000, {
          "other": ["00 ប៊ីលាន", 2]
        }], [100000000000, {
          "other": ["000 ប៊ីលាន", 3]
        }], [1000000000000, {
          "other": ["0 ទ្រីលាន", 1]
        }], [10000000000000, {
          "other": ["00 ទ្រីលាន", 2]
        }], [100000000000000, {
          "other": ["000 ទ្រីលាន", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/ko", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ko-kr",
    "parentLocale": "ko"
  }, {
    "locale": "ko",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "년",
        "relative": {
          "0": "올해",
          "1": "내년",
          "-1": "작년"
        },
        "relativeTime": {
          "future": {
            "other": "{0}년 후"
          },
          "past": {
            "other": "{0}년 전"
          }
        }
      },
      "year-short": {
        "displayName": "년",
        "relative": {
          "0": "올해",
          "1": "내년",
          "-1": "작년"
        },
        "relativeTime": {
          "future": {
            "other": "{0}년 후"
          },
          "past": {
            "other": "{0}년 전"
          }
        }
      },
      "month": {
        "displayName": "월",
        "relative": {
          "0": "이번 달",
          "1": "다음 달",
          "-1": "지난달"
        },
        "relativeTime": {
          "future": {
            "other": "{0}개월 후"
          },
          "past": {
            "other": "{0}개월 전"
          }
        }
      },
      "month-short": {
        "displayName": "월",
        "relative": {
          "0": "이번 달",
          "1": "다음 달",
          "-1": "지난달"
        },
        "relativeTime": {
          "future": {
            "other": "{0}개월 후"
          },
          "past": {
            "other": "{0}개월 전"
          }
        }
      },
      "day": {
        "displayName": "일",
        "relative": {
          "0": "오늘",
          "1": "내일",
          "2": "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        "relativeTime": {
          "future": {
            "other": "{0}일 후"
          },
          "past": {
            "other": "{0}일 전"
          }
        }
      },
      "day-short": {
        "displayName": "일",
        "relative": {
          "0": "오늘",
          "1": "내일",
          "2": "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        "relativeTime": {
          "future": {
            "other": "{0}일 후"
          },
          "past": {
            "other": "{0}일 전"
          }
        }
      },
      "hour": {
        "displayName": "시",
        "relative": {
          "0": "현재 시간"
        },
        "relativeTime": {
          "future": {
            "other": "{0}시간 후"
          },
          "past": {
            "other": "{0}시간 전"
          }
        }
      },
      "hour-short": {
        "displayName": "시",
        "relative": {
          "0": "현재 시간"
        },
        "relativeTime": {
          "future": {
            "other": "{0}시간 후"
          },
          "past": {
            "other": "{0}시간 전"
          }
        }
      },
      "minute": {
        "displayName": "분",
        "relative": {
          "0": "현재 분"
        },
        "relativeTime": {
          "future": {
            "other": "{0}분 후"
          },
          "past": {
            "other": "{0}분 전"
          }
        }
      },
      "minute-short": {
        "displayName": "분",
        "relative": {
          "0": "현재 분"
        },
        "relativeTime": {
          "future": {
            "other": "{0}분 후"
          },
          "past": {
            "other": "{0}분 전"
          }
        }
      },
      "second": {
        "displayName": "초",
        "relative": {
          "0": "지금"
        },
        "relativeTime": {
          "future": {
            "other": "{0}초 후"
          },
          "past": {
            "other": "{0}초 전"
          }
        }
      },
      "second-short": {
        "displayName": "초",
        "relative": {
          "0": "지금"
        },
        "relativeTime": {
          "future": {
            "other": "{0}초 후"
          },
          "past": {
            "other": "{0}초 전"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0천", 1]
        }], [10000, {
          "other": ["0만", 1]
        }], [100000, {
          "other": ["00만", 2]
        }], [1000000, {
          "other": ["000만", 3]
        }], [10000000, {
          "other": ["0000만", 4]
        }], [100000000, {
          "other": ["0억", 1]
        }], [1000000000, {
          "other": ["00억", 2]
        }], [10000000000, {
          "other": ["000억", 3]
        }], [100000000000, {
          "other": ["0000억", 4]
        }], [1000000000000, {
          "other": ["0조", 1]
        }], [10000000000000, {
          "other": ["00조", 2]
        }], [100000000000000, {
          "other": ["000조", 3]
        }]],
        "short": [[1000, {
          "other": ["0천", 1]
        }], [10000, {
          "other": ["0만", 1]
        }], [100000, {
          "other": ["00만", 2]
        }], [1000000, {
          "other": ["000만", 3]
        }], [10000000, {
          "other": ["0000만", 4]
        }], [100000000, {
          "other": ["0억", 1]
        }], [1000000000, {
          "other": ["00억", 2]
        }], [10000000000, {
          "other": ["000억", 3]
        }], [100000000000, {
          "other": ["0000억", 4]
        }], [1000000000000, {
          "other": ["0조", 1]
        }], [10000000000000, {
          "other": ["00조", 2]
        }], [100000000000000, {
          "other": ["000조", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/nb", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "nb-no",
    "parentLocale": "nb"
  }, {
    "locale": "nb",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "neste år",
          "-1": "i fjor"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "for {0} år siden",
            "other": "for {0} år siden"
          }
        }
      },
      "year-short": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "neste år",
          "-1": "i fjor"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "for {0} år siden",
            "other": "for {0} år siden"
          }
        }
      },
      "month": {
        "displayName": "måned",
        "relative": {
          "0": "denne måneden",
          "1": "neste måned",
          "-1": "forrige måned"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} måned",
            "other": "om {0} måneder"
          },
          "past": {
            "one": "for {0} måned siden",
            "other": "for {0} måneder siden"
          }
        }
      },
      "month-short": {
        "displayName": "mnd.",
        "relative": {
          "0": "denne md.",
          "1": "neste md.",
          "-1": "forrige md."
        },
        "relativeTime": {
          "future": {
            "one": "om {0} md.",
            "other": "om {0} md."
          },
          "past": {
            "one": "for {0} md. siden",
            "other": "for {0} md. siden"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgen",
          "2": "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} døgn",
            "other": "om {0} døgn"
          },
          "past": {
            "one": "for {0} døgn siden",
            "other": "for {0} døgn siden"
          }
        }
      },
      "day-short": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgen",
          "2": "i overmorgen",
          "-2": "i forgårs",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} d.",
            "other": "om {0} d."
          },
          "past": {
            "one": "for {0} d. siden",
            "other": "for {0} d. siden"
          }
        }
      },
      "hour": {
        "displayName": "time",
        "relative": {
          "0": "denne timen"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} time",
            "other": "om {0} timer"
          },
          "past": {
            "one": "for {0} time siden",
            "other": "for {0} timer siden"
          }
        }
      },
      "hour-short": {
        "displayName": "t",
        "relative": {
          "0": "denne timen"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} t",
            "other": "om {0} t"
          },
          "past": {
            "one": "for {0} t siden",
            "other": "for {0} t siden"
          }
        }
      },
      "minute": {
        "displayName": "minutt",
        "relative": {
          "0": "dette minuttet"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} minutt",
            "other": "om {0} minutter"
          },
          "past": {
            "one": "for {0} minutt siden",
            "other": "for {0} minutter siden"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "dette minuttet"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} min",
            "other": "om {0} min"
          },
          "past": {
            "one": "for {0} min siden",
            "other": "for {0} min siden"
          }
        }
      },
      "second": {
        "displayName": "sekund",
        "relative": {
          "0": "nå"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sekund",
            "other": "om {0} sekunder"
          },
          "past": {
            "one": "for {0} sekund siden",
            "other": "for {0} sekunder siden"
          }
        }
      },
      "second-short": {
        "displayName": "sek",
        "relative": {
          "0": "nå"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sek",
            "other": "om {0} sek"
          },
          "past": {
            "one": "for {0} sek siden",
            "other": "for {0} sek siden"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 tusen", 1],
          "other": ["0 tusen", 1]
        }], [10000, {
          "one": ["00 tusen", 2],
          "other": ["00 tusen", 2]
        }], [100000, {
          "one": ["000 tusen", 3],
          "other": ["000 tusen", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 millioner", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 millioner", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 millioner", 3]
        }], [1000000000, {
          "one": ["0 milliard", 1],
          "other": ["0 milliarder", 1]
        }], [10000000000, {
          "one": ["00 milliard", 2],
          "other": ["00 milliarder", 2]
        }], [100000000000, {
          "one": ["000 milliard", 3],
          "other": ["000 milliarder", 3]
        }], [1000000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billioner", 1]
        }], [10000000000000, {
          "one": ["00 billioner", 2],
          "other": ["00 billioner", 2]
        }], [100000000000000, {
          "one": ["000 billioner", 3],
          "other": ["000 billioner", 3]
        }]],
        "short": [[1000, {
          "one": ["0k", 1],
          "other": ["0k", 1]
        }], [10000, {
          "one": ["00k", 2],
          "other": ["00k", 2]
        }], [100000, {
          "one": ["000k", 3],
          "other": ["000k", 3]
        }], [1000000, {
          "one": ["0 mill'.'", 1],
          "other": ["0 mill'.'", 1]
        }], [10000000, {
          "one": ["00 mill'.'", 2],
          "other": ["00 mill'.'", 2]
        }], [100000000, {
          "one": ["000 mill'.'", 3],
          "other": ["000 mill'.'", 3]
        }], [1000000000, {
          "one": ["0 mrd'.'", 1],
          "other": ["0 mrd'.'", 1]
        }], [10000000000, {
          "one": ["00 mrd'.'", 2],
          "other": ["00 mrd'.'", 2]
        }], [100000000000, {
          "one": ["000 mrd'.'", 3],
          "other": ["000 mrd'.'", 3]
        }], [1000000000000, {
          "one": ["0 bill'.'", 1],
          "other": ["0 bill'.'", 1]
        }], [10000000000000, {
          "one": ["00 bill'.'", 2],
          "other": ["00 bill'.'", 2]
        }], [100000000000000, {
          "one": ["000 bill'.'", 3],
          "other": ["000 bill'.'", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/nl", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "nl-nl",
    "parentLocale": "nl"
  }, {
    "locale": "nl",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "jaar",
        "relative": {
          "0": "dit jaar",
          "1": "volgend jaar",
          "-1": "vorig jaar"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} jaar",
            "other": "over {0} jaar"
          },
          "past": {
            "one": "{0} jaar geleden",
            "other": "{0} jaar geleden"
          }
        }
      },
      "year-short": {
        "displayName": "jr",
        "relative": {
          "0": "dit jaar",
          "1": "volgend jaar",
          "-1": "vorig jaar"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} jaar",
            "other": "over {0} jaar"
          },
          "past": {
            "one": "{0} jaar geleden",
            "other": "{0} jaar geleden"
          }
        }
      },
      "month": {
        "displayName": "maand",
        "relative": {
          "0": "deze maand",
          "1": "volgende maand",
          "-1": "vorige maand"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} maand",
            "other": "over {0} maanden"
          },
          "past": {
            "one": "{0} maand geleden",
            "other": "{0} maanden geleden"
          }
        }
      },
      "month-short": {
        "displayName": "mnd",
        "relative": {
          "0": "deze maand",
          "1": "volgende maand",
          "-1": "vorige maand"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} maand",
            "other": "over {0} maanden"
          },
          "past": {
            "one": "{0} maand geleden",
            "other": "{0} maanden geleden"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "vandaag",
          "1": "morgen",
          "2": "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} dag",
            "other": "over {0} dagen"
          },
          "past": {
            "one": "{0} dag geleden",
            "other": "{0} dagen geleden"
          }
        }
      },
      "day-short": {
        "displayName": "dag",
        "relative": {
          "0": "vandaag",
          "1": "morgen",
          "2": "overmorgen",
          "-2": "eergisteren",
          "-1": "gisteren"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} dag",
            "other": "over {0} dgn"
          },
          "past": {
            "one": "{0} dag geleden",
            "other": "{0} dgn geleden"
          }
        }
      },
      "hour": {
        "displayName": "uur",
        "relative": {
          "0": "binnen een uur"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} uur",
            "other": "over {0} uur"
          },
          "past": {
            "one": "{0} uur geleden",
            "other": "{0} uur geleden"
          }
        }
      },
      "hour-short": {
        "displayName": "uur",
        "relative": {
          "0": "binnen een uur"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} uur",
            "other": "over {0} uur"
          },
          "past": {
            "one": "{0} uur geleden",
            "other": "{0} uur geleden"
          }
        }
      },
      "minute": {
        "displayName": "minuut",
        "relative": {
          "0": "binnen een minuut"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} minuut",
            "other": "over {0} minuten"
          },
          "past": {
            "one": "{0} minuut geleden",
            "other": "{0} minuten geleden"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "binnen een minuut"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} min.",
            "other": "over {0} min."
          },
          "past": {
            "one": "{0} min. geleden",
            "other": "{0} min. geleden"
          }
        }
      },
      "second": {
        "displayName": "seconde",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} seconde",
            "other": "over {0} seconden"
          },
          "past": {
            "one": "{0} seconde geleden",
            "other": "{0} seconden geleden"
          }
        }
      },
      "second-short": {
        "displayName": "sec",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "over {0} sec.",
            "other": "over {0} sec."
          },
          "past": {
            "one": "{0} sec. geleden",
            "other": "{0} sec. geleden"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 duizend", 1],
          "other": ["0 duizend", 1]
        }], [10000, {
          "one": ["00 duizend", 2],
          "other": ["00 duizend", 2]
        }], [100000, {
          "one": ["000 duizend", 3],
          "other": ["000 duizend", 3]
        }], [1000000, {
          "one": ["0 miljoen", 1],
          "other": ["0 miljoen", 1]
        }], [10000000, {
          "one": ["00 miljoen", 2],
          "other": ["00 miljoen", 2]
        }], [100000000, {
          "one": ["000 miljoen", 3],
          "other": ["000 miljoen", 3]
        }], [1000000000, {
          "one": ["0 miljard", 1],
          "other": ["0 miljard", 1]
        }], [10000000000, {
          "one": ["00 miljard", 2],
          "other": ["00 miljard", 2]
        }], [100000000000, {
          "one": ["000 miljard", 3],
          "other": ["000 miljard", 3]
        }], [1000000000000, {
          "one": ["0 biljoen", 1],
          "other": ["0 biljoen", 1]
        }], [10000000000000, {
          "one": ["00 biljoen", 2],
          "other": ["00 biljoen", 2]
        }], [100000000000000, {
          "one": ["000 biljoen", 3],
          "other": ["000 biljoen", 3]
        }]],
        "short": [[1000, {
          "one": ["0K", 1],
          "other": ["0K", 1]
        }], [10000, {
          "one": ["00K", 2],
          "other": ["00K", 2]
        }], [100000, {
          "one": ["000K", 3],
          "other": ["000K", 3]
        }], [1000000, {
          "one": ["0 mln'.'", 1],
          "other": ["0 mln'.'", 1]
        }], [10000000, {
          "one": ["00 mln'.'", 2],
          "other": ["00 mln'.'", 2]
        }], [100000000, {
          "one": ["000 mln'.'", 3],
          "other": ["000 mln'.'", 3]
        }], [1000000000, {
          "one": ["0 mld'.'", 1],
          "other": ["0 mld'.'", 1]
        }], [10000000000, {
          "one": ["00 mld'.'", 2],
          "other": ["00 mld'.'", 2]
        }], [100000000000, {
          "one": ["000 mld'.'", 3],
          "other": ["000 mld'.'", 3]
        }], [1000000000000, {
          "one": ["0 bln'.'", 1],
          "other": ["0 bln'.'", 1]
        }], [10000000000000, {
          "one": ["00 bln'.'", 2],
          "other": ["00 bln'.'", 2]
        }], [100000000000000, {
          "one": ["000 bln'.'", 3],
          "other": ["000 bln'.'", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/none", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "none",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "year-short": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "month-short": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "day-short": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "hour-short": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "minute-short": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      },
      "second-short": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]],
        "short": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/pt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "pt-br",
    "parentLocale": "pt"
  }, {
    "locale": "pt",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          i = s[0];
      if (ord) return "other";
      return i == 0 || i == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "ano",
        "relative": {
          "0": "este ano",
          "1": "próximo ano",
          "-1": "ano passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} ano",
            "other": "em {0} anos"
          },
          "past": {
            "one": "há {0} ano",
            "other": "há {0} anos"
          }
        }
      },
      "year-short": {
        "displayName": "ano",
        "relative": {
          "0": "este ano",
          "1": "próximo ano",
          "-1": "ano passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} ano",
            "other": "em {0} anos"
          },
          "past": {
            "one": "há {0} ano",
            "other": "há {0} anos"
          }
        }
      },
      "month": {
        "displayName": "mês",
        "relative": {
          "0": "este mês",
          "1": "próximo mês",
          "-1": "mês passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} mês",
            "other": "em {0} meses"
          },
          "past": {
            "one": "há {0} mês",
            "other": "há {0} meses"
          }
        }
      },
      "month-short": {
        "displayName": "mês",
        "relative": {
          "0": "este mês",
          "1": "próximo mês",
          "-1": "mês passado"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} mês",
            "other": "em {0} meses"
          },
          "past": {
            "one": "há {0} mês",
            "other": "há {0} meses"
          }
        }
      },
      "day": {
        "displayName": "dia",
        "relative": {
          "0": "hoje",
          "1": "amanhã",
          "2": "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} dia",
            "other": "em {0} dias"
          },
          "past": {
            "one": "há {0} dia",
            "other": "há {0} dias"
          }
        }
      },
      "day-short": {
        "displayName": "dia",
        "relative": {
          "0": "hoje",
          "1": "amanhã",
          "2": "depois de amanhã",
          "-2": "anteontem",
          "-1": "ontem"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} dia",
            "other": "em {0} dias"
          },
          "past": {
            "one": "há {0} dia",
            "other": "há {0} dias"
          }
        }
      },
      "hour": {
        "displayName": "hora",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} hora",
            "other": "em {0} horas"
          },
          "past": {
            "one": "há {0} hora",
            "other": "há {0} horas"
          }
        }
      },
      "hour-short": {
        "displayName": "h",
        "relative": {
          "0": "esta hora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} h",
            "other": "em {0} h"
          },
          "past": {
            "one": "há {0} h",
            "other": "há {0} h"
          }
        }
      },
      "minute": {
        "displayName": "minuto",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} minuto",
            "other": "em {0} minutos"
          },
          "past": {
            "one": "há {0} minuto",
            "other": "há {0} minutos"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "este minuto"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} min.",
            "other": "em {0} min."
          },
          "past": {
            "one": "há {0} min.",
            "other": "há {0} min."
          }
        }
      },
      "second": {
        "displayName": "segundo",
        "relative": {
          "0": "agora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} segundo",
            "other": "em {0} segundos"
          },
          "past": {
            "one": "há {0} segundo",
            "other": "há {0} segundos"
          }
        }
      },
      "second-short": {
        "displayName": "seg.",
        "relative": {
          "0": "agora"
        },
        "relativeTime": {
          "future": {
            "one": "em {0} seg.",
            "other": "em {0} seg."
          },
          "past": {
            "one": "há {0} seg.",
            "other": "há {0} seg."
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 milhão", 1],
          "other": ["0 milhões", 1]
        }], [10000000, {
          "one": ["00 milhão", 2],
          "other": ["00 milhões", 2]
        }], [100000000, {
          "one": ["000 milhão", 3],
          "other": ["000 milhões", 3]
        }], [1000000000, {
          "one": ["0 bilhão", 1],
          "other": ["0 bilhões", 1]
        }], [10000000000, {
          "one": ["00 bilhão", 2],
          "other": ["00 bilhões", 2]
        }], [100000000000, {
          "one": ["000 bilhão", 3],
          "other": ["000 bilhões", 3]
        }], [1000000000000, {
          "one": ["0 trilhão", 1],
          "other": ["0 trilhões", 1]
        }], [10000000000000, {
          "one": ["00 trilhão", 2],
          "other": ["00 trilhões", 2]
        }], [100000000000000, {
          "one": ["000 trilhão", 3],
          "other": ["000 trilhões", 3]
        }]],
        "short": [[1000, {
          "one": ["0 mil", 1],
          "other": ["0 mil", 1]
        }], [10000, {
          "one": ["00 mil", 2],
          "other": ["00 mil", 2]
        }], [100000, {
          "one": ["000 mil", 3],
          "other": ["000 mil", 3]
        }], [1000000, {
          "one": ["0 mi", 1],
          "other": ["0 mi", 1]
        }], [10000000, {
          "one": ["00 mi", 2],
          "other": ["00 mi", 2]
        }], [100000000, {
          "one": ["000 mi", 3],
          "other": ["000 mi", 3]
        }], [1000000000, {
          "one": ["0 bi", 1],
          "other": ["0 bi", 1]
        }], [10000000000, {
          "one": ["00 bi", 2],
          "other": ["00 bi", 2]
        }], [100000000000, {
          "one": ["000 bi", 3],
          "other": ["000 bi", 3]
        }], [1000000000000, {
          "one": ["0 tri", 1],
          "other": ["0 tri", 1]
        }], [10000000000000, {
          "one": ["00 tri", 2],
          "other": ["00 tri", 2]
        }], [100000000000000, {
          "one": ["000 tri", 3],
          "other": ["000 tri", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/ru", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "ru-ru",
    "parentLocale": "ru"
  }, {
    "locale": "ru",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2);
      if (ord) return "other";
      return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "год",
        "relative": {
          "0": "в этом году",
          "1": "в следующем году",
          "-1": "в прошлом году"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} год",
            "few": "через {0} года",
            "many": "через {0} лет",
            "other": "через {0} года"
          },
          "past": {
            "one": "{0} год назад",
            "few": "{0} года назад",
            "many": "{0} лет назад",
            "other": "{0} года назад"
          }
        }
      },
      "year-short": {
        "displayName": "г.",
        "relative": {
          "0": "в этом г.",
          "1": "в след. г.",
          "-1": "в прошлом г."
        },
        "relativeTime": {
          "future": {
            "one": "через {0} г.",
            "few": "через {0} г.",
            "many": "через {0} л.",
            "other": "через {0} г."
          },
          "past": {
            "one": "{0} г. назад",
            "few": "{0} г. назад",
            "many": "{0} л. назад",
            "other": "{0} г. назад"
          }
        }
      },
      "month": {
        "displayName": "месяц",
        "relative": {
          "0": "в этом месяце",
          "1": "в следующем месяце",
          "-1": "в прошлом месяце"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} месяц",
            "few": "через {0} месяца",
            "many": "через {0} месяцев",
            "other": "через {0} месяца"
          },
          "past": {
            "one": "{0} месяц назад",
            "few": "{0} месяца назад",
            "many": "{0} месяцев назад",
            "other": "{0} месяца назад"
          }
        }
      },
      "month-short": {
        "displayName": "мес.",
        "relative": {
          "0": "в этом мес.",
          "1": "в следующем мес.",
          "-1": "в прошлом мес."
        },
        "relativeTime": {
          "future": {
            "one": "через {0} мес.",
            "few": "через {0} мес.",
            "many": "через {0} мес.",
            "other": "через {0} мес."
          },
          "past": {
            "one": "{0} мес. назад",
            "few": "{0} мес. назад",
            "many": "{0} мес. назад",
            "other": "{0} мес. назад"
          }
        }
      },
      "day": {
        "displayName": "день",
        "relative": {
          "0": "сегодня",
          "1": "завтра",
          "2": "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} день",
            "few": "через {0} дня",
            "many": "через {0} дней",
            "other": "через {0} дня"
          },
          "past": {
            "one": "{0} день назад",
            "few": "{0} дня назад",
            "many": "{0} дней назад",
            "other": "{0} дня назад"
          }
        }
      },
      "day-short": {
        "displayName": "дн.",
        "relative": {
          "0": "сегодня",
          "1": "завтра",
          "2": "послезавтра",
          "-2": "позавчера",
          "-1": "вчера"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} дн.",
            "few": "через {0} дн.",
            "many": "через {0} дн.",
            "other": "через {0} дн."
          },
          "past": {
            "one": "{0} дн. назад",
            "few": "{0} дн. назад",
            "many": "{0} дн. назад",
            "other": "{0} дн. назад"
          }
        }
      },
      "hour": {
        "displayName": "час",
        "relative": {
          "0": "в этот час"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} час",
            "few": "через {0} часа",
            "many": "через {0} часов",
            "other": "через {0} часа"
          },
          "past": {
            "one": "{0} час назад",
            "few": "{0} часа назад",
            "many": "{0} часов назад",
            "other": "{0} часа назад"
          }
        }
      },
      "hour-short": {
        "displayName": "ч",
        "relative": {
          "0": "в этот час"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} ч.",
            "few": "через {0} ч.",
            "many": "через {0} ч.",
            "other": "через {0} ч."
          },
          "past": {
            "one": "{0} ч. назад",
            "few": "{0} ч. назад",
            "many": "{0} ч. назад",
            "other": "{0} ч. назад"
          }
        }
      },
      "minute": {
        "displayName": "минута",
        "relative": {
          "0": "в эту минуту"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} минуту",
            "few": "через {0} минуты",
            "many": "через {0} минут",
            "other": "через {0} минуты"
          },
          "past": {
            "one": "{0} минуту назад",
            "few": "{0} минуты назад",
            "many": "{0} минут назад",
            "other": "{0} минуты назад"
          }
        }
      },
      "minute-short": {
        "displayName": "мин.",
        "relative": {
          "0": "в эту минуту"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} мин.",
            "few": "через {0} мин.",
            "many": "через {0} мин.",
            "other": "через {0} мин."
          },
          "past": {
            "one": "{0} мин. назад",
            "few": "{0} мин. назад",
            "many": "{0} мин. назад",
            "other": "{0} мин. назад"
          }
        }
      },
      "second": {
        "displayName": "секунда",
        "relative": {
          "0": "сейчас"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} секунду",
            "few": "через {0} секунды",
            "many": "через {0} секунд",
            "other": "через {0} секунды"
          },
          "past": {
            "one": "{0} секунду назад",
            "few": "{0} секунды назад",
            "many": "{0} секунд назад",
            "other": "{0} секунды назад"
          }
        }
      },
      "second-short": {
        "displayName": "сек.",
        "relative": {
          "0": "сейчас"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} сек.",
            "few": "через {0} сек.",
            "many": "через {0} сек.",
            "other": "через {0} сек."
          },
          "past": {
            "one": "{0} сек. назад",
            "few": "{0} сек. назад",
            "many": "{0} сек. назад",
            "other": "{0} сек. назад"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 тысяча", 1],
          "few": ["0 тысячи", 1],
          "many": ["0 тысяч", 1],
          "other": ["0 тысячи", 1]
        }], [10000, {
          "one": ["00 тысяча", 2],
          "few": ["00 тысячи", 2],
          "many": ["00 тысяч", 2],
          "other": ["00 тысячи", 2]
        }], [100000, {
          "one": ["000 тысяча", 3],
          "few": ["000 тысячи", 3],
          "many": ["000 тысяч", 3],
          "other": ["000 тысячи", 3]
        }], [1000000, {
          "one": ["0 миллион", 1],
          "few": ["0 миллиона", 1],
          "many": ["0 миллионов", 1],
          "other": ["0 миллиона", 1]
        }], [10000000, {
          "one": ["00 миллион", 2],
          "few": ["00 миллиона", 2],
          "many": ["00 миллионов", 2],
          "other": ["00 миллиона", 2]
        }], [100000000, {
          "one": ["000 миллион", 3],
          "few": ["000 миллиона", 3],
          "many": ["000 миллионов", 3],
          "other": ["000 миллиона", 3]
        }], [1000000000, {
          "one": ["0 миллиард", 1],
          "few": ["0 миллиарда", 1],
          "many": ["0 миллиардов", 1],
          "other": ["0 миллиарда", 1]
        }], [10000000000, {
          "one": ["00 миллиард", 2],
          "few": ["00 миллиарда", 2],
          "many": ["00 миллиардов", 2],
          "other": ["00 миллиарда", 2]
        }], [100000000000, {
          "one": ["000 миллиард", 3],
          "few": ["000 миллиарда", 3],
          "many": ["000 миллиардов", 3],
          "other": ["000 миллиарда", 3]
        }], [1000000000000, {
          "one": ["0 триллион", 1],
          "few": ["0 триллиона", 1],
          "many": ["0 триллионов", 1],
          "other": ["0 триллиона", 1]
        }], [10000000000000, {
          "one": ["00 триллион", 2],
          "few": ["00 триллиона", 2],
          "many": ["00 триллионов", 2],
          "other": ["00 триллиона", 2]
        }], [100000000000000, {
          "one": ["000 триллион", 3],
          "few": ["000 триллиона", 3],
          "many": ["000 триллионов", 3],
          "other": ["000 триллиона", 3]
        }]],
        "short": [[1000, {
          "one": ["0 тыс'.'", 1],
          "few": ["0 тыс'.'", 1],
          "many": ["0 тыс'.'", 1],
          "other": ["0 тыс'.'", 1]
        }], [10000, {
          "one": ["00 тыс'.'", 2],
          "few": ["00 тыс'.'", 2],
          "many": ["00 тыс'.'", 2],
          "other": ["00 тыс'.'", 2]
        }], [100000, {
          "one": ["000 тыс'.'", 3],
          "few": ["000 тыс'.'", 3],
          "many": ["000 тыс'.'", 3],
          "other": ["000 тыс'.'", 3]
        }], [1000000, {
          "one": ["0 млн", 1],
          "few": ["0 млн", 1],
          "many": ["0 млн", 1],
          "other": ["0 млн", 1]
        }], [10000000, {
          "one": ["00 млн", 2],
          "few": ["00 млн", 2],
          "many": ["00 млн", 2],
          "other": ["00 млн", 2]
        }], [100000000, {
          "one": ["000 млн", 3],
          "few": ["000 млн", 3],
          "many": ["000 млн", 3],
          "other": ["000 млн", 3]
        }], [1000000000, {
          "one": ["0 млрд", 1],
          "few": ["0 млрд", 1],
          "many": ["0 млрд", 1],
          "other": ["0 млрд", 1]
        }], [10000000000, {
          "one": ["00 млрд", 2],
          "few": ["00 млрд", 2],
          "many": ["00 млрд", 2],
          "other": ["00 млрд", 2]
        }], [100000000000, {
          "one": ["000 млрд", 3],
          "few": ["000 млрд", 3],
          "many": ["000 млрд", 3],
          "other": ["000 млрд", 3]
        }], [1000000000000, {
          "one": ["0 трлн", 1],
          "few": ["0 трлн", 1],
          "many": ["0 трлн", 1],
          "other": ["0 трлн", 1]
        }], [10000000000000, {
          "one": ["00 трлн", 2],
          "few": ["00 трлн", 2],
          "many": ["00 трлн", 2],
          "other": ["00 трлн", 2]
        }], [100000000000000, {
          "one": ["000 трлн", 3],
          "few": ["000 трлн", 3],
          "many": ["000 трлн", 3],
          "other": ["000 трлн", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/sh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "sh-hr",
    "parentLocale": "sh"
  }, {
    "locale": "sh",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          i = s[0],
          f = s[1] || "",
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2),
          f10 = f.slice(-1),
          f100 = f.slice(-2);
      if (ord) return "other";
      return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
    },
    "fields": {
      "year": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "year-short": {
        "displayName": "Year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} y"
          },
          "past": {
            "other": "-{0} y"
          }
        }
      },
      "month": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "month-short": {
        "displayName": "Month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} m"
          },
          "past": {
            "other": "-{0} m"
          }
        }
      },
      "day": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "day-short": {
        "displayName": "Day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} d"
          },
          "past": {
            "other": "-{0} d"
          }
        }
      },
      "hour": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "hour-short": {
        "displayName": "Hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} h"
          },
          "past": {
            "other": "-{0} h"
          }
        }
      },
      "minute": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "minute-short": {
        "displayName": "Minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} min"
          },
          "past": {
            "other": "-{0} min"
          }
        }
      },
      "second": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      },
      "second-short": {
        "displayName": "Second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "other": "+{0} s"
          },
          "past": {
            "other": "-{0} s"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]],
        "short": [[1000, {
          "other": ["0K", 1]
        }], [10000, {
          "other": ["00K", 2]
        }], [100000, {
          "other": ["000K", 3]
        }], [1000000, {
          "other": ["0M", 1]
        }], [10000000, {
          "other": ["00M", 2]
        }], [100000000, {
          "other": ["000M", 3]
        }], [1000000000, {
          "other": ["0G", 1]
        }], [10000000000, {
          "other": ["00G", 2]
        }], [100000000000, {
          "other": ["000G", 3]
        }], [1000000000000, {
          "other": ["0T", 1]
        }], [10000000000000, {
          "other": ["00T", 2]
        }], [100000000000000, {
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/sv", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "sv-se",
    "parentLocale": "sv"
  }, {
    "locale": "sv",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? "one" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "nästa år",
          "-1": "i fjol"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "för {0} år sedan",
            "other": "för {0} år sedan"
          }
        }
      },
      "year-short": {
        "displayName": "år",
        "relative": {
          "0": "i år",
          "1": "nästa år",
          "-1": "i fjol"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} år",
            "other": "om {0} år"
          },
          "past": {
            "one": "för {0} år sen",
            "other": "för {0} år sen"
          }
        }
      },
      "month": {
        "displayName": "månad",
        "relative": {
          "0": "denna månad",
          "1": "nästa månad",
          "-1": "förra månaden"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} månad",
            "other": "om {0} månader"
          },
          "past": {
            "one": "för {0} månad sedan",
            "other": "för {0} månader sedan"
          }
        }
      },
      "month-short": {
        "displayName": "m",
        "relative": {
          "0": "denna mån.",
          "1": "nästa mån.",
          "-1": "förra mån."
        },
        "relativeTime": {
          "future": {
            "one": "om {0} mån.",
            "other": "om {0} mån."
          },
          "past": {
            "one": "för {0} mån. sen",
            "other": "för {0} mån. sen"
          }
        }
      },
      "day": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgon",
          "2": "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} dag",
            "other": "om {0} dagar"
          },
          "past": {
            "one": "för {0} dag sedan",
            "other": "för {0} dagar sedan"
          }
        }
      },
      "day-short": {
        "displayName": "dag",
        "relative": {
          "0": "i dag",
          "1": "i morgon",
          "2": "i övermorgon",
          "-2": "i förrgår",
          "-1": "i går"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} d",
            "other": "om {0} d"
          },
          "past": {
            "one": "för {0} d sedan",
            "other": "för {0} d sedan"
          }
        }
      },
      "hour": {
        "displayName": "timme",
        "relative": {
          "0": "denna timme"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} timme",
            "other": "om {0} timmar"
          },
          "past": {
            "one": "för {0} timme sedan",
            "other": "för {0} timmar sedan"
          }
        }
      },
      "hour-short": {
        "displayName": "tim",
        "relative": {
          "0": "denna timme"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} tim",
            "other": "om {0} tim"
          },
          "past": {
            "one": "för {0} tim sedan",
            "other": "för {0} tim sedan"
          }
        }
      },
      "minute": {
        "displayName": "minut",
        "relative": {
          "0": "denna minut"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} minut",
            "other": "om {0} minuter"
          },
          "past": {
            "one": "för {0} minut sedan",
            "other": "för {0} minuter sedan"
          }
        }
      },
      "minute-short": {
        "displayName": "min",
        "relative": {
          "0": "denna minut"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} min",
            "other": "om {0} min"
          },
          "past": {
            "one": "för {0} min sen",
            "other": "för {0} min sen"
          }
        }
      },
      "second": {
        "displayName": "sekund",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sekund",
            "other": "om {0} sekunder"
          },
          "past": {
            "one": "för {0} sekund sedan",
            "other": "för {0} sekunder sedan"
          }
        }
      },
      "second-short": {
        "displayName": "sek",
        "relative": {
          "0": "nu"
        },
        "relativeTime": {
          "future": {
            "one": "om {0} sek",
            "other": "om {0} sek"
          },
          "past": {
            "one": "för {0} s sen",
            "other": "för {0} s sen"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 tusen", 1],
          "other": ["0 tusen", 1]
        }], [10000, {
          "one": ["00 tusen", 2],
          "other": ["00 tusen", 2]
        }], [100000, {
          "one": ["000 tusen", 3],
          "other": ["000 tusen", 3]
        }], [1000000, {
          "one": ["0 miljon", 1],
          "other": ["0 miljoner", 1]
        }], [10000000, {
          "one": ["00 miljon", 2],
          "other": ["00 miljoner", 2]
        }], [100000000, {
          "one": ["000 miljoner", 3],
          "other": ["000 miljoner", 3]
        }], [1000000000, {
          "one": ["0 miljard", 1],
          "other": ["0 miljarder", 1]
        }], [10000000000, {
          "one": ["00 miljarder", 2],
          "other": ["00 miljarder", 2]
        }], [100000000000, {
          "one": ["000 miljarder", 3],
          "other": ["000 miljarder", 3]
        }], [1000000000000, {
          "one": ["0 biljon", 1],
          "other": ["0 biljoner", 1]
        }], [10000000000000, {
          "one": ["00 biljoner", 2],
          "other": ["00 biljoner", 2]
        }], [100000000000000, {
          "one": ["000 biljoner", 3],
          "other": ["000 biljoner", 3]
        }]],
        "short": [[1000, {
          "one": ["0 tn", 1],
          "other": ["0 tn", 1]
        }], [10000, {
          "one": ["00 tn", 2],
          "other": ["00 tn", 2]
        }], [100000, {
          "one": ["000 tn", 3],
          "other": ["000 tn", 3]
        }], [1000000, {
          "one": ["0 mn", 1],
          "other": ["0 mn", 1]
        }], [10000000, {
          "one": ["00 mn", 2],
          "other": ["00 mn", 2]
        }], [100000000, {
          "one": ["000 mn", 3],
          "other": ["000 mn", 3]
        }], [1000000000, {
          "one": ["0 md", 1],
          "other": ["0 md", 1]
        }], [10000000000, {
          "one": ["00 md", 2],
          "other": ["00 md", 2]
        }], [100000000000, {
          "one": ["000 md", 3],
          "other": ["000 md", 3]
        }], [1000000000000, {
          "one": ["0 bn", 1],
          "other": ["0 bn", 1]
        }], [10000000000000, {
          "one": ["00 bn", 2],
          "other": ["00 bn", 2]
        }], [100000000000000, {
          "one": ["000 bn", 3],
          "other": ["000 bn", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/tr", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "tr-tr",
    "parentLocale": "tr"
  }, {
    "locale": "tr",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return n == 1 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "yıl",
        "relative": {
          "0": "bu yıl",
          "1": "gelecek yıl",
          "-1": "geçen yıl"
        },
        "relativeTime": {
          "future": {
            "one": "{0} yıl sonra",
            "other": "{0} yıl sonra"
          },
          "past": {
            "one": "{0} yıl önce",
            "other": "{0} yıl önce"
          }
        }
      },
      "year-short": {
        "displayName": "yıl",
        "relative": {
          "0": "bu yıl",
          "1": "gelecek yıl",
          "-1": "geçen yıl"
        },
        "relativeTime": {
          "future": {
            "one": "{0} yıl sonra",
            "other": "{0} yıl sonra"
          },
          "past": {
            "one": "{0} yıl önce",
            "other": "{0} yıl önce"
          }
        }
      },
      "month": {
        "displayName": "ay",
        "relative": {
          "0": "bu ay",
          "1": "gelecek ay",
          "-1": "geçen ay"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ay sonra",
            "other": "{0} ay sonra"
          },
          "past": {
            "one": "{0} ay önce",
            "other": "{0} ay önce"
          }
        }
      },
      "month-short": {
        "displayName": "ay",
        "relative": {
          "0": "bu ay",
          "1": "gelecek ay",
          "-1": "geçen ay"
        },
        "relativeTime": {
          "future": {
            "one": "{0} ay sonra",
            "other": "{0} ay sonra"
          },
          "past": {
            "one": "{0} ay önce",
            "other": "{0} ay önce"
          }
        }
      },
      "day": {
        "displayName": "gün",
        "relative": {
          "0": "bugün",
          "1": "yarın",
          "2": "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        "relativeTime": {
          "future": {
            "one": "{0} gün sonra",
            "other": "{0} gün sonra"
          },
          "past": {
            "one": "{0} gün önce",
            "other": "{0} gün önce"
          }
        }
      },
      "day-short": {
        "displayName": "gün",
        "relative": {
          "0": "bugün",
          "1": "yarın",
          "2": "öbür gün",
          "-2": "evvelsi gün",
          "-1": "dün"
        },
        "relativeTime": {
          "future": {
            "one": "{0} gün sonra",
            "other": "{0} gün sonra"
          },
          "past": {
            "one": "{0} gün önce",
            "other": "{0} gün önce"
          }
        }
      },
      "hour": {
        "displayName": "saat",
        "relative": {
          "0": "bu saat"
        },
        "relativeTime": {
          "future": {
            "one": "{0} saat sonra",
            "other": "{0} saat sonra"
          },
          "past": {
            "one": "{0} saat önce",
            "other": "{0} saat önce"
          }
        }
      },
      "hour-short": {
        "displayName": "sa.",
        "relative": {
          "0": "bu saat"
        },
        "relativeTime": {
          "future": {
            "one": "{0} sa. sonra",
            "other": "{0} sa. sonra"
          },
          "past": {
            "one": "{0} sa. önce",
            "other": "{0} sa. önce"
          }
        }
      },
      "minute": {
        "displayName": "dakika",
        "relative": {
          "0": "bu dakika"
        },
        "relativeTime": {
          "future": {
            "one": "{0} dakika sonra",
            "other": "{0} dakika sonra"
          },
          "past": {
            "one": "{0} dakika önce",
            "other": "{0} dakika önce"
          }
        }
      },
      "minute-short": {
        "displayName": "dk.",
        "relative": {
          "0": "bu dakika"
        },
        "relativeTime": {
          "future": {
            "one": "{0} dk. sonra",
            "other": "{0} dk. sonra"
          },
          "past": {
            "one": "{0} dk. önce",
            "other": "{0} dk. önce"
          }
        }
      },
      "second": {
        "displayName": "saniye",
        "relative": {
          "0": "şimdi"
        },
        "relativeTime": {
          "future": {
            "one": "{0} saniye sonra",
            "other": "{0} saniye sonra"
          },
          "past": {
            "one": "{0} saniye önce",
            "other": "{0} saniye önce"
          }
        }
      },
      "second-short": {
        "displayName": "sn.",
        "relative": {
          "0": "şimdi"
        },
        "relativeTime": {
          "future": {
            "one": "{0} sn. sonra",
            "other": "{0} sn. sonra"
          },
          "past": {
            "one": "{0} sn. önce",
            "other": "{0} sn. önce"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 bin", 1],
          "other": ["0 bin", 1]
        }], [10000, {
          "one": ["00 bin", 2],
          "other": ["00 bin", 2]
        }], [100000, {
          "one": ["000 bin", 3],
          "other": ["000 bin", 3]
        }], [1000000, {
          "one": ["0 milyon", 1],
          "other": ["0 milyon", 1]
        }], [10000000, {
          "one": ["00 milyon", 2],
          "other": ["00 milyon", 2]
        }], [100000000, {
          "one": ["000 milyon", 3],
          "other": ["000 milyon", 3]
        }], [1000000000, {
          "one": ["0 milyar", 1],
          "other": ["0 milyar", 1]
        }], [10000000000, {
          "one": ["00 milyar", 2],
          "other": ["00 milyar", 2]
        }], [100000000000, {
          "one": ["000 milyar", 3],
          "other": ["000 milyar", 3]
        }], [1000000000000, {
          "one": ["0 trilyon", 1],
          "other": ["0 trilyon", 1]
        }], [10000000000000, {
          "one": ["00 trilyon", 2],
          "other": ["00 trilyon", 2]
        }], [100000000000000, {
          "one": ["000 trilyon", 3],
          "other": ["000 trilyon", 3]
        }]],
        "short": [[1000, {
          "one": ["0 B", 1],
          "other": ["0 B", 1]
        }], [10000, {
          "one": ["00 B", 2],
          "other": ["00 B", 2]
        }], [100000, {
          "one": ["000 B", 3],
          "other": ["000 B", 3]
        }], [1000000, {
          "one": ["0 Mn", 1],
          "other": ["0 Mn", 1]
        }], [10000000, {
          "one": ["00 Mn", 2],
          "other": ["00 Mn", 2]
        }], [100000000, {
          "one": ["000 Mn", 3],
          "other": ["000 Mn", 3]
        }], [1000000000, {
          "one": ["0 Mr", 1],
          "other": ["0 Mr", 1]
        }], [10000000000, {
          "one": ["00 Mr", 2],
          "other": ["00 Mr", 2]
        }], [100000000000, {
          "one": ["000 Mr", 3],
          "other": ["000 Mr", 3]
        }], [1000000000000, {
          "one": ["0 Tn", 1],
          "other": ["0 Tn", 1]
        }], [10000000000000, {
          "one": ["00 Tn", 2],
          "other": ["00 Tn", 2]
        }], [100000000000000, {
          "one": ["000 Tn", 3],
          "other": ["000 Tn", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/uk", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "uk-ua",
    "parentLocale": "uk"
  }, {
    "locale": "uk",
    "pluralRuleFunction": function (n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2),
          i10 = i.slice(-1),
          i100 = i.slice(-2);
      if (ord) return n10 == 3 && n100 != 13 ? "few" : "other";
      return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    },
    "fields": {
      "year": {
        "displayName": "рік",
        "relative": {
          "0": "цього року",
          "1": "наступного року",
          "-1": "торік"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} рік",
            "few": "через {0} роки",
            "many": "через {0} років",
            "other": "через {0} року"
          },
          "past": {
            "one": "{0} рік тому",
            "few": "{0} роки тому",
            "many": "{0} років тому",
            "other": "{0} року тому"
          }
        }
      },
      "year-short": {
        "displayName": "р.",
        "relative": {
          "0": "цього року",
          "1": "наступного року",
          "-1": "торік"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} р.",
            "few": "через {0} р.",
            "many": "через {0} р.",
            "other": "через {0} р."
          },
          "past": {
            "one": "{0} р. тому",
            "few": "{0} р. тому",
            "many": "{0} р. тому",
            "other": "{0} р. тому"
          }
        }
      },
      "month": {
        "displayName": "місяць",
        "relative": {
          "0": "цього місяця",
          "1": "наступного місяця",
          "-1": "минулого місяця"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} місяць",
            "few": "через {0} місяці",
            "many": "через {0} місяців",
            "other": "через {0} місяця"
          },
          "past": {
            "one": "{0} місяць тому",
            "few": "{0} місяці тому",
            "many": "{0} місяців тому",
            "other": "{0} місяця тому"
          }
        }
      },
      "month-short": {
        "displayName": "міс.",
        "relative": {
          "0": "цього місяця",
          "1": "наступного місяця",
          "-1": "минулого місяця"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} міс.",
            "few": "через {0} міс.",
            "many": "через {0} міс.",
            "other": "через {0} міс."
          },
          "past": {
            "one": "{0} міс. тому",
            "few": "{0} міс. тому",
            "many": "{0} міс. тому",
            "other": "{0} міс. тому"
          }
        }
      },
      "day": {
        "displayName": "день",
        "relative": {
          "0": "сьогодні",
          "1": "завтра",
          "2": "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} день",
            "few": "через {0} дні",
            "many": "через {0} днів",
            "other": "через {0} дня"
          },
          "past": {
            "one": "{0} день тому",
            "few": "{0} дні тому",
            "many": "{0} днів тому",
            "other": "{0} дня тому"
          }
        }
      },
      "day-short": {
        "displayName": "д.",
        "relative": {
          "0": "сьогодні",
          "1": "завтра",
          "2": "післязавтра",
          "-2": "позавчора",
          "-1": "учора"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} дн.",
            "few": "через {0} дн.",
            "many": "через {0} дн.",
            "other": "через {0} дн."
          },
          "past": {
            "one": "{0} дн. тому",
            "few": "{0} дн. тому",
            "many": "{0} дн. тому",
            "other": "{0} дн. тому"
          }
        }
      },
      "hour": {
        "displayName": "година",
        "relative": {
          "0": "цієї години"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} годину",
            "few": "через {0} години",
            "many": "через {0} годин",
            "other": "через {0} години"
          },
          "past": {
            "one": "{0} годину тому",
            "few": "{0} години тому",
            "many": "{0} годин тому",
            "other": "{0} години тому"
          }
        }
      },
      "hour-short": {
        "displayName": "год.",
        "relative": {
          "0": "цієї години"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} год",
            "few": "через {0} год",
            "many": "через {0} год",
            "other": "через {0} год"
          },
          "past": {
            "one": "{0} год тому",
            "few": "{0} год тому",
            "many": "{0} год тому",
            "other": "{0} год тому"
          }
        }
      },
      "minute": {
        "displayName": "хвилина",
        "relative": {
          "0": "цієї хвилини"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} хвилину",
            "few": "через {0} хвилини",
            "many": "через {0} хвилин",
            "other": "через {0} хвилини"
          },
          "past": {
            "one": "{0} хвилину тому",
            "few": "{0} хвилини тому",
            "many": "{0} хвилин тому",
            "other": "{0} хвилини тому"
          }
        }
      },
      "minute-short": {
        "displayName": "хв.",
        "relative": {
          "0": "цієї хвилини"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} хв",
            "few": "через {0} хв",
            "many": "через {0} хв",
            "other": "через {0} хв"
          },
          "past": {
            "one": "{0} хв тому",
            "few": "{0} хв тому",
            "many": "{0} хв тому",
            "other": "{0} хв тому"
          }
        }
      },
      "second": {
        "displayName": "секунда",
        "relative": {
          "0": "зараз"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} секунду",
            "few": "через {0} секунди",
            "many": "через {0} секунд",
            "other": "через {0} секунди"
          },
          "past": {
            "one": "{0} секунду тому",
            "few": "{0} секунди тому",
            "many": "{0} секунд тому",
            "other": "{0} секунди тому"
          }
        }
      },
      "second-short": {
        "displayName": "с",
        "relative": {
          "0": "зараз"
        },
        "relativeTime": {
          "future": {
            "one": "через {0} с",
            "few": "через {0} с",
            "many": "через {0} с",
            "other": "через {0} с"
          },
          "past": {
            "one": "{0} с тому",
            "few": "{0} с тому",
            "many": "{0} с тому",
            "other": "{0} с тому"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 тисяча", 1],
          "few": ["0 тисячі", 1],
          "many": ["0 тисяч", 1],
          "other": ["0 тисячі", 1]
        }], [10000, {
          "one": ["00 тисяча", 2],
          "few": ["00 тисячі", 2],
          "many": ["00 тисяч", 2],
          "other": ["00 тисячі", 2]
        }], [100000, {
          "one": ["000 тисяча", 3],
          "few": ["000 тисячі", 3],
          "many": ["000 тисяч", 3],
          "other": ["000 тисячі", 3]
        }], [1000000, {
          "one": ["0 мільйон", 1],
          "few": ["0 мільйони", 1],
          "many": ["0 мільйонів", 1],
          "other": ["0 мільйона", 1]
        }], [10000000, {
          "one": ["00 мільйон", 2],
          "few": ["00 мільйони", 2],
          "many": ["00 мільйонів", 2],
          "other": ["00 мільйона", 2]
        }], [100000000, {
          "one": ["000 мільйон", 3],
          "few": ["000 мільйони", 3],
          "many": ["000 мільйонів", 3],
          "other": ["000 мільйона", 3]
        }], [1000000000, {
          "one": ["0 мільярд", 1],
          "few": ["0 мільярди", 1],
          "many": ["0 мільярдів", 1],
          "other": ["0 мільярда", 1]
        }], [10000000000, {
          "one": ["00 мільярд", 2],
          "few": ["00 мільярди", 2],
          "many": ["00 мільярдів", 2],
          "other": ["00 мільярда", 2]
        }], [100000000000, {
          "one": ["000 мільярд", 3],
          "few": ["000 мільярди", 3],
          "many": ["000 мільярдів", 3],
          "other": ["000 мільярда", 3]
        }], [1000000000000, {
          "one": ["0 трильйон", 1],
          "few": ["0 трильйони", 1],
          "many": ["0 трильйонів", 1],
          "other": ["0 трильйона", 1]
        }], [10000000000000, {
          "one": ["00 трильйон", 2],
          "few": ["00 трильйони", 2],
          "many": ["00 трильйонів", 2],
          "other": ["00 трильйона", 2]
        }], [100000000000000, {
          "one": ["000 трильйон", 3],
          "few": ["000 трильйони", 3],
          "many": ["000 трильйонів", 3],
          "other": ["000 трильйона", 3]
        }]],
        "short": [[1000, {
          "one": ["0 тис'.'", 1],
          "few": ["0 тис'.'", 1],
          "many": ["0 тис'.'", 1],
          "other": ["0 тис'.'", 1]
        }], [10000, {
          "one": ["00 тис'.'", 2],
          "few": ["00 тис'.'", 2],
          "many": ["00 тис'.'", 2],
          "other": ["00 тис'.'", 2]
        }], [100000, {
          "one": ["000 тис'.'", 3],
          "few": ["000 тис'.'", 3],
          "many": ["000 тис'.'", 3],
          "other": ["000 тис'.'", 3]
        }], [1000000, {
          "one": ["0 млн", 1],
          "few": ["0 млн", 1],
          "many": ["0 млн", 1],
          "other": ["0 млн", 1]
        }], [10000000, {
          "one": ["00 млн", 2],
          "few": ["00 млн", 2],
          "many": ["00 млн", 2],
          "other": ["00 млн", 2]
        }], [100000000, {
          "one": ["000 млн", 3],
          "few": ["000 млн", 3],
          "many": ["000 млн", 3],
          "other": ["000 млн", 3]
        }], [1000000000, {
          "one": ["0 млрд", 1],
          "few": ["0 млрд", 1],
          "many": ["0 млрд", 1],
          "other": ["0 млрд", 1]
        }], [10000000000, {
          "one": ["00 млрд", 2],
          "few": ["00 млрд", 2],
          "many": ["00 млрд", 2],
          "other": ["00 млрд", 2]
        }], [100000000000, {
          "one": ["000 млрд", 3],
          "few": ["000 млрд", 3],
          "many": ["000 млрд", 3],
          "other": ["000 млрд", 3]
        }], [1000000000000, {
          "one": ["0 трлн", 1],
          "few": ["0 трлн", 1],
          "many": ["0 трлн", 1],
          "other": ["0 трлн", 1]
        }], [10000000000000, {
          "one": ["00 трлн", 2],
          "few": ["00 трлн", 2],
          "many": ["00 трлн", 2],
          "other": ["00 трлн", 2]
        }], [100000000000000, {
          "one": ["000 трлн", 3],
          "few": ["000 трлн", 3],
          "many": ["000 трлн", 3],
          "other": ["000 трлн", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/vi", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "vi-vn",
    "parentLocale": "vi"
  }, {
    "locale": "vi",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "Năm",
        "relative": {
          "0": "năm nay",
          "1": "năm sau",
          "-1": "năm ngoái"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} năm nữa"
          },
          "past": {
            "other": "{0} năm trước"
          }
        }
      },
      "year-short": {
        "displayName": "Năm",
        "relative": {
          "0": "năm nay",
          "1": "năm sau",
          "-1": "năm ngoái"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} năm nữa"
          },
          "past": {
            "other": "{0} năm trước"
          }
        }
      },
      "month": {
        "displayName": "Tháng",
        "relative": {
          "0": "tháng này",
          "1": "tháng sau",
          "-1": "tháng trước"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} tháng nữa"
          },
          "past": {
            "other": "{0} tháng trước"
          }
        }
      },
      "month-short": {
        "displayName": "Tháng",
        "relative": {
          "0": "tháng này",
          "1": "tháng sau",
          "-1": "tháng trước"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} tháng nữa"
          },
          "past": {
            "other": "{0} tháng trước"
          }
        }
      },
      "day": {
        "displayName": "Ngày",
        "relative": {
          "0": "Hôm nay",
          "1": "Ngày mai",
          "2": "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} ngày nữa"
          },
          "past": {
            "other": "{0} ngày trước"
          }
        }
      },
      "day-short": {
        "displayName": "Ngày",
        "relative": {
          "0": "Hôm nay",
          "1": "Ngày mai",
          "2": "Ngày kia",
          "-2": "Hôm kia",
          "-1": "Hôm qua"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} ngày nữa"
          },
          "past": {
            "other": "{0} ngày trước"
          }
        }
      },
      "hour": {
        "displayName": "Giờ",
        "relative": {
          "0": "giờ này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giờ nữa"
          },
          "past": {
            "other": "{0} giờ trước"
          }
        }
      },
      "hour-short": {
        "displayName": "Giờ",
        "relative": {
          "0": "giờ này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giờ nữa"
          },
          "past": {
            "other": "{0} giờ trước"
          }
        }
      },
      "minute": {
        "displayName": "Phút",
        "relative": {
          "0": "phút này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} phút nữa"
          },
          "past": {
            "other": "{0} phút trước"
          }
        }
      },
      "minute-short": {
        "displayName": "Phút",
        "relative": {
          "0": "phút này"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} phút nữa"
          },
          "past": {
            "other": "{0} phút trước"
          }
        }
      },
      "second": {
        "displayName": "Giây",
        "relative": {
          "0": "bây giờ"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giây nữa"
          },
          "past": {
            "other": "{0} giây trước"
          }
        }
      },
      "second-short": {
        "displayName": "Giây",
        "relative": {
          "0": "bây giờ"
        },
        "relativeTime": {
          "future": {
            "other": "sau {0} giây nữa"
          },
          "past": {
            "other": "{0} giây trước"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0 nghìn", 1]
        }], [10000, {
          "other": ["00 nghìn", 2]
        }], [100000, {
          "other": ["000 nghìn", 3]
        }], [1000000, {
          "other": ["0 triệu", 1]
        }], [10000000, {
          "other": ["00 triệu", 2]
        }], [100000000, {
          "other": ["000 triệu", 3]
        }], [1000000000, {
          "other": ["0 tỷ", 1]
        }], [10000000000, {
          "other": ["00 tỷ", 2]
        }], [100000000000, {
          "other": ["000 tỷ", 3]
        }], [1000000000000, {
          "other": ["0 nghìn tỷ", 1]
        }], [10000000000000, {
          "other": ["00 nghìn tỷ", 2]
        }], [100000000000000, {
          "other": ["000 nghìn tỷ", 3]
        }]],
        "short": [[1000, {
          "other": ["0 N", 1]
        }], [10000, {
          "other": ["00 N", 2]
        }], [100000, {
          "other": ["000 N", 3]
        }], [1000000, {
          "other": ["0 Tr", 1]
        }], [10000000, {
          "other": ["00 Tr", 2]
        }], [100000000, {
          "other": ["000 Tr", 3]
        }], [1000000000, {
          "other": ["0 T", 1]
        }], [10000000000, {
          "other": ["00 T", 2]
        }], [100000000000, {
          "other": ["000 T", 3]
        }], [1000000000000, {
          "other": ["0 NT", 1]
        }], [10000000000000, {
          "other": ["00 NT", 2]
        }], [100000000000000, {
          "other": ["000 NT", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cldrs/zh", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "zh-Hans",
    "parentLocale": "zh"
  }, {
    "locale": "zh",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0}年后"
          },
          "past": {
            "other": "{0}年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0}年后"
          },
          "past": {
            "other": "{0}年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下个月",
          "-1": "上个月"
        },
        "relativeTime": {
          "future": {
            "other": "{0}个月后"
          },
          "past": {
            "other": "{0}个月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下个月",
          "-1": "上个月"
        },
        "relativeTime": {
          "future": {
            "other": "{0}个月后"
          },
          "past": {
            "other": "{0}个月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0}天后"
          },
          "past": {
            "other": "{0}天前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "后天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0}天后"
          },
          "past": {
            "other": "{0}天前"
          }
        }
      },
      "hour": {
        "displayName": "小时",
        "relative": {
          "0": "这一时间 \u002F 此时"
        },
        "relativeTime": {
          "future": {
            "other": "{0}小时后"
          },
          "past": {
            "other": "{0}小时前"
          }
        }
      },
      "hour-short": {
        "displayName": "小时",
        "relative": {
          "0": "这一时间 \u002F 此时"
        },
        "relativeTime": {
          "future": {
            "other": "{0}小时后"
          },
          "past": {
            "other": "{0}小时前"
          }
        }
      },
      "minute": {
        "displayName": "分钟",
        "relative": {
          "0": "此刻"
        },
        "relativeTime": {
          "future": {
            "other": "{0}分钟后"
          },
          "past": {
            "other": "{0}分钟前"
          }
        }
      },
      "minute-short": {
        "displayName": "分",
        "relative": {
          "0": "此刻"
        },
        "relativeTime": {
          "future": {
            "other": "{0}分钟后"
          },
          "past": {
            "other": "{0}分钟前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "现在"
        },
        "relativeTime": {
          "future": {
            "other": "{0}秒钟后"
          },
          "past": {
            "other": "{0}秒钟前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "现在"
        },
        "relativeTime": {
          "future": {
            "other": "{0}秒后"
          },
          "past": {
            "other": "{0}秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0亿", 1]
        }], [1000000000, {
          "other": ["00亿", 2]
        }], [10000000000, {
          "other": ["000亿", 3]
        }], [100000000000, {
          "other": ["0000亿", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0万", 1]
        }], [100000, {
          "other": ["00万", 2]
        }], [1000000, {
          "other": ["000万", 3]
        }], [10000000, {
          "other": ["0000万", 4]
        }], [100000000, {
          "other": ["0亿", 1]
        }], [1000000000, {
          "other": ["00亿", 2]
        }], [10000000000, {
          "other": ["000亿", 3]
        }], [100000000000, {
          "other": ["0000亿", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }, {
    "locale": "zh-hant-tw",
    "parentLocale": "zh-hant"
  }, {
    "locale": "zh-hant",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "hour": {
        "displayName": "小時",
        "relative": {
          "0": "這一小時"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "hour-short": {
        "displayName": "小時",
        "relative": {
          "0": "這一小時"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "minute": {
        "displayName": "分鐘",
        "relative": {
          "0": "這一分鐘"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        "displayName": "分鐘",
        "relative": {
          "0": "這一分鐘"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0萬", 1]
        }], [100000, {
          "other": ["00萬", 2]
        }], [1000000, {
          "other": ["000萬", 3]
        }], [10000000, {
          "other": ["0000萬", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0萬", 1]
        }], [100000, {
          "other": ["00萬", 2]
        }], [1000000, {
          "other": ["000萬", 3]
        }], [10000000, {
          "other": ["0000萬", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }, {
    "locale": "zh-Hant",
    "pluralRuleFunction": function (n, ord) {
      if (ord) return "other";
      return "other";
    },
    "fields": {
      "year": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "year-short": {
        "displayName": "年",
        "relative": {
          "0": "今年",
          "1": "明年",
          "-1": "去年"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 年後"
          },
          "past": {
            "other": "{0} 年前"
          }
        }
      },
      "month": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "month-short": {
        "displayName": "月",
        "relative": {
          "0": "本月",
          "1": "下個月",
          "-1": "上個月"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 個月後"
          },
          "past": {
            "other": "{0} 個月前"
          }
        }
      },
      "day": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "day-short": {
        "displayName": "日",
        "relative": {
          "0": "今天",
          "1": "明天",
          "2": "後天",
          "-2": "前天",
          "-1": "昨天"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 天後"
          },
          "past": {
            "other": "{0} 天前"
          }
        }
      },
      "hour": {
        "displayName": "小時",
        "relative": {
          "0": "這一小時"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "hour-short": {
        "displayName": "小時",
        "relative": {
          "0": "這一小時"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 小時後"
          },
          "past": {
            "other": "{0} 小時前"
          }
        }
      },
      "minute": {
        "displayName": "分鐘",
        "relative": {
          "0": "這一分鐘"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "minute-short": {
        "displayName": "分鐘",
        "relative": {
          "0": "這一分鐘"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 分鐘後"
          },
          "past": {
            "other": "{0} 分鐘前"
          }
        }
      },
      "second": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      },
      "second-short": {
        "displayName": "秒",
        "relative": {
          "0": "現在"
        },
        "relativeTime": {
          "future": {
            "other": "{0} 秒後"
          },
          "past": {
            "other": "{0} 秒前"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0萬", 1]
        }], [100000, {
          "other": ["00萬", 2]
        }], [1000000, {
          "other": ["000萬", 3]
        }], [10000000, {
          "other": ["0000萬", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]],
        "short": [[1000, {
          "other": ["0", 1]
        }], [10000, {
          "other": ["0萬", 1]
        }], [100000, {
          "other": ["00萬", 2]
        }], [1000000, {
          "other": ["000萬", 3]
        }], [10000000, {
          "other": ["0000萬", 4]
        }], [100000000, {
          "other": ["0億", 1]
        }], [1000000000, {
          "other": ["00億", 2]
        }], [10000000000, {
          "other": ["000億", 3]
        }], [100000000000, {
          "other": ["0000億", 4]
        }], [1000000000000, {
          "other": ["0兆", 1]
        }], [10000000000000, {
          "other": ["00兆", 2]
        }], [100000000000000, {
          "other": ["000兆", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
define("istio/cluster-setting/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    router: Ember.inject.service(),
    actions: {
      cancel() {
        Ember.get(this, 'router').transitionTo('authenticated.cluster');
      }

    }
  });

  _exports.default = _default;
});
define("istio/cluster-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const NAMESPACE_NAME = 'istio-system';
  const APP_NAME = 'cluster-istio';
  const MONITORING_APP_NAME = 'cluster-monitoring';

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    router: Ember.inject.service(),

    model() {
      const cluster = window.l('route:application').modelFor('authenticated.cluster');
      const project = Ember.get(cluster, 'systemProject');

      if (!project) {
        return {
          owner: false
        };
      }

      const apps = project.followLink('apps');
      const namespaces = cluster.followLink('namespaces');
      const storageClasses = cluster.followLink('storageClasses');
      const persistentVolumeClaims = project.followLink('persistentVolumeClaims');
      return Ember.RSVP.all([apps, namespaces, storageClasses, persistentVolumeClaims]).then(data => {
        const app = data[0].findBy('name', APP_NAME);
        const monitoringApp = data[0].findBy('name', MONITORING_APP_NAME);
        const namespaces = data[1] || [];
        const storageClasses = data[2] || [];
        const persistentVolumeClaims = data[3] || [];
        const namespace = namespaces.findBy('name', NAMESPACE_NAME);
        return {
          app,
          nsExists: !!namespace,
          cluster,
          project,
          storageClasses,
          persistentVolumeClaims: persistentVolumeClaims.filter(p => p.namespaceId === NAMESPACE_NAME && p.state === 'bound'),
          namespace,
          owner: true,
          apps: data[0].filter(a => a.name === APP_NAME),
          monitoringApp
        };
      });
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, `session.${_constants.default.SESSION.CLUSTER_ROUTE}`, 'authenticated.cluster.istio.cluster-setting');
    })
  });

  _exports.default = _default;
});
define("istio/cluster-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xlXMwdI9",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,5],[[35,2,[\"owner\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,4],null,[[\"app\",\"cluster\",\"project\",\"nsExists\",\"storageClasses\",\"persistentVolumeClaims\",\"namespace\",\"apps\",\"cancel\",\"members\",\"membersPromise\",\"monitoringApp\"],[[35,2,[\"app\"]],[35,2,[\"cluster\"]],[35,2,[\"project\"]],[35,2,[\"nsExists\"]],[35,2,[\"storageClasses\"]],[35,2,[\"persistentVolumeClaims\"]],[35,2,[\"namespace\"]],[35,2,[\"apps\"]],[30,[36,3],[[32,0],\"cancel\"],null],[35,2,[\"members\"]],[35,2,[\"membersPromise\"]],[35,2,[\"monitoringApp\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"message\",\"color\"],[[30,[36,0],[\"projectIstioPage.info.noPermission\"],null],\"bg-info\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"banner-message\",\"model\",\"action\",\"istio-catalog\",\"if\"]}",
    "moduleName": "istio/cluster-setting/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/cluster-templates/service", "istio/cluster-templates/service");
define.alias("shared/code-mirror/service", "istio/code-mirror/service");
define.alias("@glimmer/component/-private/ember-component-manager", "istio/component-managers/glimmer");
define("istio/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
define("istio/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
define.alias("liquid-fire/components/-lf-get-outlet-state", "istio/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "istio/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "istio/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "istio/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "istio/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "istio/components/advanced-section/component");
define.alias("shared/components/aks-node-pool-row/component", "istio/components/aks-node-pool-row/component");
define.alias("shared/components/annotations-section/component", "istio/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "istio/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "istio/components/api-field/component");
define.alias("shared/components/apikey-row/component", "istio/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "istio/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "istio/components/badge-state/component");
define.alias("shared/components/banner-message/component", "istio/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown-content", "istio/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/components/basic-dropdown-trigger", "istio/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/components/basic-dropdown", "istio/components/basic-dropdown");
define.alias("shared/components/btn-toggle/component", "istio/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "istio/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "istio/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "istio/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "istio/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "istio/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "istio/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aks/component", "istio/components/cluster-driver/driver-aks/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "istio/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "istio/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-eks/component", "istio/components/cluster-driver/driver-eks/component");
define.alias("shared/components/cluster-driver/driver-gke/component", "istio/components/cluster-driver/driver-gke/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "istio/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "istio/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import-aks/component", "istio/components/cluster-driver/driver-import-aks/component");
define.alias("shared/components/cluster-driver/driver-import-eks/component", "istio/components/cluster-driver/driver-import-eks/component");
define.alias("shared/components/cluster-driver/driver-import-gke/component", "istio/components/cluster-driver/driver-import-gke/component");
define.alias("shared/components/cluster-driver/driver-import/component", "istio/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-linodelke/component", "istio/components/cluster-driver/driver-linodelke/component");
define.alias("shared/components/cluster-driver/driver-oracleoke/component", "istio/components/cluster-driver/driver-oracleoke/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "istio/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "istio/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "istio/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "istio/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "istio/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "istio/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "istio/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "istio/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "istio/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "istio/components/code-block/component");
define("istio/components/config-validation-list/component", ["exports", "istio/components/config-validation-list/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    istio: Ember.inject.service(),
    layout: _template.default,
    sortBy: 'severity',
    descending: false,
    name: null,
    namespaceId: null,
    resourceType: null,
    expanded: false,
    timeOutAnchor: null,
    loading: false,
    noPermission: false,
    headers: [{
      name: 'severity',
      sort: ['severity'],
      translationKey: 'validationsList.table.severity',
      width: 100
    }, {
      name: 'path',
      sort: ['path'],
      translationKey: 'validationsList.table.path'
    }, {
      name: 'message',
      sort: ['message'],
      translationKey: 'validationsList.table.message'
    }],

    init() {
      this._super(...arguments);

      this.expanedDidChange();
      this.istio.checkKialiUiEndpoint(this.scope.currentCluster.id);
    },

    willDestroyElement() {
      this.clearTimeOut();

      this._super();
    },

    expanedDidChange: Ember.observer('expanded', function () {
      if (Ember.get(this, 'expanded')) {
        this.fetch();
      } else {
        this.clearTimeOut();
      }
    }),

    fetch() {
      Ember.set(this, 'loading', true);
      const {
        useNewKialiUrl
      } = this.istio;
      let kialiPort = '-http:80';

      if (useNewKialiUrl) {
        kialiPort = ':20001';
      }

      const url = `/k8s/clusters/${Ember.get(this, 'scope.currentCluster.id')}/api/v1/namespaces/istio-system/services/http:kiali${kialiPort}/proxy/api/namespaces/${Ember.get(this, 'namespaceId')}/istio?validate=true`;
      Ember.get(this, 'globalStore').rawRequest({
        url,
        method: 'GET'
      }).then(xhr => {
        let out = [];
        const validations = xhr.body.validations;

        if (validations) {
          const v = validations[Ember.get(this, 'resourceType')];

          if (v) {
            const tv = v[Ember.get(this, 'name')];

            if (tv.checks) {
              out = tv.checks;
            }
          }
        }

        Ember.setProperties(this, {
          validations: out,
          loading: false,
          noPermission: false
        });
        const timeOutAnchor = setTimeout(() => {
          this.fetch();
        }, 10000);
        Ember.set(this, 'timeOutAnchor', timeOutAnchor);
      }).catch(() => {
        Ember.setProperties(this, {
          loading: false,
          noPermission: true
        });
      });
    },

    clearTimeOut() {
      const timeOutAnchor = Ember.get(this, 'timeOutAnchor');

      if (timeOutAnchor) {
        clearTimeout(timeOutAnchor);
        Ember.set(this, 'timeOutAnchor', timeOutAnchor);
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/config-validation-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ePvShiOH",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"row\",\"dt\"],\"statements\":[[6,[37,17],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expanded\",\"componentName\"],[[30,[36,0],[\"validationsList.title\"],null],[30,[36,0],[\"validationsList.detail\"],[[\"resourceType\"],[[35,16]]]],[35,15],[30,[36,14],[[32,0],[35,13]],null],[35,10],\"sortable-table\"]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,11],[[35,10],[35,12]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"text-center mt-20\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"validationsList.noPermission\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,11],[[35,10],[30,[36,9],[[35,8]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,7],[[32,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[35,6],false,[35,5],[35,4],[35,3]]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"data-title\",[31,[[32,5,[\"severity\"]]]]],[12],[2,\"\\n            \"],[1,[32,4,[\"severity\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"td\"],[15,\"data-title\",[31,[[32,5,[\"path\"]]]]],[12],[2,\"\\n            \"],[1,[32,4,[\"path\"]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"td\"],[15,\"data-title\",[31,[[32,5,[\"message\"]]]]],[12],[2,\"\\n            \"],[1,[32,4,[\"message\"]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"norows\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"validationsList.noData\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"nomatch\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"validationsList.noMatch\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[2,3,4,5]}]]]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"text-center mt-20\"],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"icon icon-spinner icon-spin icon-3x\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"eq\",\"if\",\"validations\",\"headers\",\"descending\",\"sortBy\",\"component\",\"loading\",\"not\",\"expanded\",\"and\",\"noPermission\",\"expandFn\",\"action\",\"expandAll\",\"resourceType\",\"accordion-list-item\"]}",
    "moduleName": "istio/components/config-validation-list/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/confirm-delete/component", "istio/components/confirm-delete/component");
define("istio/components/connection-pool/component", ["exports", "istio/components/connection-pool/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    model: Ember.computed.alias('trafficPolicy.connectionPool'),

    init() {
      this._super(...arguments);

      this.initConnectionPool();
    },

    initConnectionPool() {
      if (!Ember.get(this, 'trafficPolicy.connectionPool') && Ember.get(this, 'editing')) {
        Ember.set(this, 'trafficPolicy.connectionPool', {
          http: {
            http1MaxPendingRequests: 1024,
            http2MaxRequests: 1024,
            maxRequestsPerConnection: 1024,
            maxRetries: 1024
          },
          tcp: {
            maxConnections: 1024
          }
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/connection-pool/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5KRXxkk9",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-http1MaxPendingRequests\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"http\",\"http1MaxPendingRequests\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"http\",\"http1MaxPendingRequests\"]],[30,[36,2],[[35,1],\"-input-http1MaxPendingRequests\"],null],[30,[36,0],[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.http1MaxPendingRequests.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-http2MaxRequests\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.http2MaxRequests.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"http\",\"http2MaxRequests\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"http\",\"http2MaxRequests\"]],[30,[36,2],[[35,1],\"-input-http2MaxRequests\"],null],[30,[36,0],[\"cruDestinationRule.connectionPool.http2MaxRequests.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.http2MaxRequests.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-maxRequestsPerConnection\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"http\",\"maxRequestsPerConnection\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"http\",\"maxRequestsPerConnection\"]],[30,[36,2],[[35,1],\"-input-maxRequestsPerConnection\"],null],[30,[36,0],[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.maxRequestsPerConnection.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-maxRetries\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.maxRetries.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"http\",\"maxRetries\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"http\",\"maxRetries\"]],[30,[36,2],[[35,1],\"-input-maxRetries\"],null],[30,[36,0],[\"cruDestinationRule.connectionPool.maxRetries.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.maxRetries.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-connectTimeout\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.connectTimeout.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"tcp\",\"connectTimeout\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"tcp\",\"connectTimeout\"]],[30,[36,2],[[35,1],\"-input-connectTimeout\"],null],[30,[36,0],[\"cruDestinationRule.connectionPool.connectTimeout.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.connectTimeout.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-maxConnections\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.maxConnections.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"tcp\",\"maxConnections\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"tcp\",\"maxConnections\"]],[30,[36,2],[[35,1],\"-input-maxConnections\"],null],[30,[36,0],[\"cruDestinationRule.connectionPool.maxConnections.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.connectionPool.maxConnections.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"t\",\"elementId\",\"concat\",\"model\",\"input-integer\",\"input\",\"editing\",\"input-or-display\"]}",
    "moduleName": "istio/components/connection-pool/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/container-shell/component", "istio/components/container-shell/component");
define.alias("shared/components/containers-header/component", "istio/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "istio/components/copy-button");
define.alias("shared/components/copy-inline/component", "istio/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "istio/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "istio/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "istio/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "istio/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "istio/components/cru-cluster/component");
define("istio/components/cru-destination-rule/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-destination-rule/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    subsets: Ember.computed.alias('model.subsets'),
    namespace: Ember.computed.alias('model.namespace'),

    init() {
      this._super(...arguments);

      if (!Ember.get(this, 'model.trafficPolicy')) {
        Ember.set(this, 'model.trafficPolicy', {});
      }
    },

    didInsertElement() {
      if (Ember.get(this, 'isNew') && Ember.get(this, 'subsets.length') === 0) {
        this.send('addSubset');
      }
    },

    actions: {
      addSubset() {
        const version = this.getNewVersion();
        const subset = Ember.Object.create({
          name: version,
          labels: {
            version
          }
        });
        Ember.get(this, 'subsets').pushObject(subset);
      },

      removeSubset(subset) {
        Ember.get(this, 'subsets').removeObject(subset);
      },

      setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      }

    },

    willSave() {
      const intl = Ember.get(this, 'intl');
      Ember.set(this, 'model.namespaceId', Ember.get(this, 'namespace.id') || '__placeholder__');
      const self = this;
      const sup = this._super;
      let errors = [];
      errors.pushObjects(Ember.get(this, 'namespaceErrors') || []);
      errors.pushObjects(Ember.get(this, 'tlsErrors') || []);

      if (!Ember.get(this, 'model.host')) {
        errors.pushObject(intl.t('cruDestinationRule.host.error'));
      }

      if (Ember.isEmpty(Ember.get(this, 'model.subsets'))) {
        delete this.model.subsets;
      } else {
        Ember.get(this, 'model.subsets').forEach(subset => {
          if (!Ember.get(subset, 'name')) {
            errors.pushObject(intl.t('cruDestinationRule.subsets.name.error'));
          }

          if (Object.keys(Ember.get(subset, 'labels') || {}).length === 0) {
            errors.pushObject(intl.t('cruDestinationRule.subsets.labels.error'));
          }
        });
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpHeaderName') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.error'));
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpCookie.name') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.error'));
      }

      if (Ember.get(this, 'model.trafficPolicy.loadBalancer.consistentHash.httpCookie.ttl') === '') {
        errors.pushObject(intl.t('cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.error'));
      }

      if (!Ember.get(this, 'model.host')) {
        errors.pushObject(intl.t('cruDestinationRule.host.error'));
      }

      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(() => {
        Ember.set(this, 'model.namespaceId', Ember.get(this, 'namespace.id'));
        return sup.apply(self, ...arguments);
      }).catch(err => {
        Ember.set(this, 'errors', [_errors.default.stringify(err)]);
      });
    },

    doSave(opt) {
      const primaryResource = Ember.get(this, 'primaryResource');
      let clone = primaryResource.clone();

      if (Object.keys(Ember.get(clone, 'trafficPolicy') || {}).length === 0) {
        delete clone['trafficPolicy'];
      }

      if (Ember.get(clone, 'trafficPolicy.connectionPool.tcp') && Ember.get(clone, 'trafficPolicy.connectionPool.tcp.connectTimeout') === '') {
        const tcp = Ember.get(clone, 'trafficPolicy.connectionPool.tcp');
        delete tcp['connectTimeout'];
      }

      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(newData => {
        return this.mergeResult(newData);
      });
    },

    getNewVersion() {
      const name = Ember.get(this, 'subsets.lastObject.name');

      if (name) {
        const matches = name.match(/\d+$/);

        if (matches.length > 0) {
          const prefix = name.slice(0, name.length - matches[0].length);
          return `${prefix}${parseInt(matches[0], 10) + 1}`;
        }
      } else {
        return 'v1';
      }

      return '';
    }

  });

  _exports.default = _default;
});
define("istio/components/cru-destination-rule/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4jNGVdvV",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"subset\"],\"statements\":[[6,[37,16],[[35,15]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"pull-left\"],[12],[2,\"\\n      \"],[10,\"h1\"],[12],[2,\"\\n        \"],[1,[30,[36,17],[[30,[36,22],[\"cruDestinationRule.title.\",[35,21]],null]],[[\"name\"],[[35,7,[\"displayName\"]]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n      \"],[1,[30,[36,29],null,[[\"model\"],[[35,7]]]]],[2,\"\\n      \"],[1,[30,[36,30],null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[35,7],false,\"ml-10 inline-block\",\"sm\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row banner bg-info basics\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,17],[\"generic.name\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,31],null,[[\"clipboardText\"],[[35,7,[\"displayName\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,17],[\"servicePage.multistat.namespace\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,31],null,[[\"clipboardText\"],[[35,7,[\"namespaceId\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"namespaceId\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,17],[\"generic.host\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,31],null,[[\"clipboardText\"],[[35,7,[\"host\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"host\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,17],[\"generic.created\"],null]],[2,\":\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,32],[[35,7,[\"created\"]]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"\\n      \"],[1,[30,[36,17],[[30,[36,22],[\"cruDestinationRule.title.\",[35,21]],null]],[[\"name\"],[[35,7,[\"displayName\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"section\"],[14,0,\"horizontal-form container-fluid\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,23],null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[35,7],\"cruDestinationRule.name.placeholder\",false,[35,4]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,27],null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[35,26],[35,25],[30,[36,3],[[32,0],\"registerHook\"],null],[35,24]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,28],null,[[\"namespaceId\",\"value\"],[[35,26,[\"id\"]],[35,7,[\"host\"]]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"section\"],[14,0,\"horizontal-form container-fluid mb-30\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-30\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"\\n      \"],[1,[30,[36,17],[\"cruDestinationRule.subsets.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[6,[37,34],[[30,[36,33],[[30,[36,33],[[35,19]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,20],null,[[\"editing\",\"subset\",\"subsets\",\"removeSubset\"],[[35,6],[32,3],[35,19],[30,[36,3],[[32,0],\"removeSubset\"],null]]]]],[2,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"p-20 text-center text-muted\"],[12],[2,\"\\n      \"],[1,[30,[36,17],[\"cruDestinationRule.subsets.noSubsets\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,16],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn pull-right\"],[24,4,\"button\"],[4,[38,3],[[32,0],\"addSubset\"],null],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[2,\"\\n          \"],[1,[30,[36,17],[\"cruDestinationRule.subsets.addSubsetLabel\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\"],[10,\"hr\"],[14,0,\"mt-30 mb-30\"],[12],[13],[2,\"\\n\"],[6,[37,35],null,null,[[\"default\"],[{\"statements\":[[6,[37,16],[[35,15]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,14],null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"destinationrule\",[32,1,[\"expandAll\"]],[32,2],[35,7,[\"namespaceId\"]],[35,7,[\"name\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,18],null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[30,[36,17],[\"cruDestinationRule.loadBalancer.label\"],null],[30,[36,17],[\"cruDestinationRule.loadBalancer.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,3],[[32,0],[32,2]],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,13],null,[[\"editing\",\"trafficPolicy\"],[[35,6],[35,7,[\"trafficPolicy\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,18],null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[30,[36,17],[\"cruDestinationRule.connectionPool.label\"],null],[30,[36,17],[\"cruDestinationRule.connectionPool.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,3],[[32,0],[32,2]],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,12],null,[[\"editing\",\"trafficPolicy\"],[[35,6],[35,7,[\"trafficPolicy\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,18],null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[30,[36,17],[\"cruDestinationRule.outlierDetection.label\"],null],[30,[36,17],[\"cruDestinationRule.outlierDetection.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,3],[[32,0],[32,2]],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,11],null,[[\"editing\",\"trafficPolicy\"],[[35,6],[35,7,[\"trafficPolicy\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,18],null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[30,[36,17],[\"cruDestinationRule.tls.label\"],null],[30,[36,17],[\"cruDestinationRule.tls.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,3],[[32,0],[32,2]],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,10],null,[[\"editing\",\"errors\",\"trafficPolicy\"],[[35,6],[35,9],[35,7,[\"trafficPolicy\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,16],[[35,15]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,8],null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[35,7],[35,6],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]],[2,\"\\n\"],[6,[37,36],[[35,15]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,8],null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[35,7,[\"labels\"]],[30,[36,3],[[32,0],\"setLabels\"],null],[35,7],[35,6]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,16],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"errors\"],[[35,0]]]]],[2,\"\\n  \"],[1,[30,[36,5],null,[[\"editing\",\"save\",\"cancel\"],[[35,4],[30,[36,3],[[32,0],\"save\"],null],[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"errors\",\"top-errors\",\"cancel\",\"action\",\"isEdit\",\"save-cancel\",\"editing\",\"model\",\"form-labels-annotations\",\"tlsErrors\",\"traffic-policy-tls\",\"outlier-detection\",\"connection-pool\",\"load-balancer\",\"config-validation-list\",\"isView\",\"if\",\"t\",\"accordion-list-item\",\"subsets\",\"destination-rule-subset-row\",\"mode\",\"concat\",\"form-name-description\",\"isNew\",\"namespaceErrors\",\"namespace\",\"form-namespace\",\"istio-host-select\",\"badge-state\",\"action-menu\",\"copy-inline\",\"date-calendar\",\"-track-array\",\"each\",\"accordion-list\",\"unless\"]}",
    "moduleName": "istio/components/cru-destination-rule/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/cru-gateway/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-gateway/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    servers: Ember.computed.alias('model.servers'),
    namespace: Ember.computed.alias('model.namespace'),

    didInsertElement() {
      if (this.isNew && Ember.get(this, 'servers.length') === 0) {
        this.send('addServer');
      }
    },

    actions: {
      addServer() {
        const server = {
          hosts: [''],
          port: {
            number: null,
            protocol: 'HTTP'
          }
        };
        this.servers.pushObject(server);
      },

      removeServer(server) {
        this.servers.removeObject(server);
      },

      setSelector(selector) {
        Ember.set(this, 'model.selector', selector);
      },

      setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      }

    },

    willSave() {
      Ember.set(this, 'model.namespaceId', this.namespace.id || '__placeholder__');
      const self = this;
      const sup = this._super;
      let errors = [];

      if (Object.keys(this.model.selector || {}).length === 0) {
        errors.pushObject(this.intl.t('cruGateway.selector.error'));
      }

      if ((this.model.servers || []).length === 0) {
        errors.pushObject(this.intl.t('cruGateway.servers.error'));
      }

      (this.model.servers || []).forEach(server => {
        if (!Ember.get(server, 'port.number')) {
          errors.pushObject(this.intl.t('cruGateway.port.number.error'));
        }

        if (!Ember.get(server, 'port.name')) {
          errors.pushObject(this.intl.t('cruGateway.port.name.error'));
        }

        const hosts = Ember.get(server, 'hosts').filter(host => host);

        if (Ember.get(hosts, 'length') === 0) {
          errors.pushObject(this.intl.t('cruGateway.hosts.error'));
        }
      });
      errors.pushObjects(this.namespaceErrors || []);
      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(() => {
        Ember.set(this, 'model.namespaceId', this.namespace.id);
        return sup.apply(self, ...arguments);
      }).catch(err => {
        Ember.set(this, 'errors', [_errors.default.stringify(err)]);
      });
    },

    doSave(opt) {
      let clone = this.primaryResource.clone();
      (Ember.get(clone, 'servers') || []).forEach(server => {
        if (Ember.get(server, 'tls.httpsRedirect') === false && Object.keys(Ember.get(server, 'tls')).length === 1) {
          delete server['tls'];
        }
      });
      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(newData => {
        return this.mergeResult(newData);
      }).catch(err => {
        Ember.set(this, 'errors', [_errors.default.stringify(err)]);
      });
    }

  });

  _exports.default = _default;
});
define("istio/components/cru-gateway/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ACK9+PIM",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"server\"],\"statements\":[[6,[37,25],[[35,24]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"pull-left\"],[12],[2,\"\\n      \"],[10,\"h1\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[[30,[36,14],[\"cruGateway.title.\",[35,13]],null]],[[\"name\"],[[35,7,[\"displayName\"]]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n      \"],[1,[30,[36,20],null,[[\"model\"],[[35,7]]]]],[2,\"\\n      \"],[1,[30,[36,21],null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[35,7],false,\"ml-10 inline-block\",\"sm\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row banner bg-info basics\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[\"generic.name\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,22],null,[[\"clipboardText\"],[[35,7,[\"displayName\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[\"servicePage.multistat.namespace\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,22],null,[[\"clipboardText\"],[[35,7,[\"namespaceId\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"namespaceId\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[\"generic.created\"],null]],[2,\":\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,23],[[35,7,[\"created\"]]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"\\n      \"],[1,[30,[36,11],[[30,[36,14],[\"cruGateway.title.\",[35,13]],null]],[[\"name\"],[[35,7,[\"displayName\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"section\"],[14,0,\"horizontal-form container-fluid\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,15],null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[35,7],\"cruGateway.name.placeholder\",false,[35,4]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,19],null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[35,18],[35,17],[30,[36,3],[[32,0],\"registerHook\"],null],[35,16]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[1,[30,[36,11],[\"cruGateway.selector.label\"],null]],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[1,[30,[36,26],null,[[\"initialLabels\",\"editing\",\"addActionLabel\",\"setLabels\"],[[35,7,[\"selector\"]],[35,6],\"cruGateway.selector.add\",[30,[36,3],[[32,0],\"setSelector\"],null]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"section\"],[14,0,\"horizontal-form container-fluid mb-30\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-30 mb-10\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n      \"],[1,[30,[36,11],[\"cruGateway.servers.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,29],[[30,[36,28],[[30,[36,28],[[35,27]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,12],null,[[\"editing\",\"server\",\"removeServer\"],[[35,6],[32,3],[30,[36,3],[[32,0],\"removeServer\"],null]]]]],[2,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"p-20 text-center text-muted\"],[12],[2,\"\\n      \"],[1,[30,[36,11],[\"cruGateway.servers.noServers\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,25],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn pull-right\"],[24,4,\"button\"],[4,[38,3],[[32,0],\"addServer\"],null],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[2,\"\\n          \"],[1,[30,[36,11],[\"cruGateway.servers.add\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\"],[6,[37,25],[[35,24]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,10],null,null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,9],null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"gateway\",[32,1,[\"expandAll\"]],[32,2],[35,7,[\"namespaceId\"]],[35,7,[\"name\"]]]]]],[2,\"\\n\\n    \"],[1,[30,[36,8],null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[35,7],[35,6],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n\"]],\"parameters\":[1,2]}]]]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,8],null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[35,7,[\"labels\"]],[30,[36,3],[[32,0],\"setLabels\"],null],[35,7],[35,6]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,25],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"errors\"],[[35,0]]]]],[2,\"\\n  \"],[1,[30,[36,5],null,[[\"editing\",\"save\",\"cancel\"],[[35,4],[30,[36,3],[[32,0],\"save\"],null],[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"errors\",\"top-errors\",\"cancel\",\"action\",\"isEdit\",\"save-cancel\",\"editing\",\"model\",\"form-labels-annotations\",\"config-validation-list\",\"accordion-list\",\"t\",\"gateway-server\",\"mode\",\"concat\",\"form-name-description\",\"isNew\",\"namespaceErrors\",\"namespace\",\"form-namespace\",\"badge-state\",\"action-menu\",\"copy-inline\",\"date-calendar\",\"isView\",\"if\",\"form-labels\",\"servers\",\"-track-array\",\"each\"]}",
    "moduleName": "istio/components/cru-gateway/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/cru-master-auth-network/component", "istio/components/cru-master-auth-network/component");
define.alias("shared/components/cru-node-pools/component", "istio/components/cru-node-pools/component");
define.alias("shared/components/cru-private-cluster/component", "istio/components/cru-private-cluster/component");
define.alias("shared/components/cru-private-registry/component", "istio/components/cru-private-registry/component");
define("istio/components/cru-virtual-service/component", ["exports", "shared/mixins/view-new-edit", "istio/components/cru-virtual-service/template", "ui/utils/errors", "shared/mixins/child-hook", "shared/mixins/manage-labels", "shared/utils/util"], function (_exports, _viewNewEdit, _template, _errors, _childHook, _manageLabels, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_viewNewEdit.default, _childHook.default, {
    intl: Ember.inject.service(),
    layout: _template.default,
    model: null,
    httpRoutes: Ember.computed.alias('model.http'),
    namespace: Ember.computed.alias('model.namespace'),

    didInsertElement() {
      if (this.isNew && Ember.get(this, 'httpRoutes.length') === 0) {
        this.send('addHttpRoute');
      }
    },

    actions: {
      addHttpRoute() {
        const httpRoute = {
          route: [],
          fault: {
            abort: {},
            delay: {}
          },
          redirect: {},
          rewrite: {},
          mirror: {},
          retries: {}
        };
        this.httpRoutes.pushObject(httpRoute);
      },

      removeHttpRoute(httpRoute) {
        this.httpRoutes.removeObject(httpRoute);
      },

      setLabels(labels) {
        Ember.set(this, 'model.labels', (0, _manageLabels.flattenLabelArrays)(labels));
      },

      setHosts(hosts) {
        Ember.set(this, 'model.hosts', hosts);
      },

      setGateways(gateways) {
        Ember.set(this, 'model.gateways', gateways);
      }

    },

    willSave() {
      Ember.set(this, 'model.namespaceId', this.namespace.id || '__placeholder__');
      const self = this;
      const sup = this._super;
      let errors = [];

      if ((this.model.hosts || []).filter(h => h).length === 0) {
        errors.pushObject(this.intl.t('cruVirtualService.hosts.error'));
      }

      (this.model.http || []).forEach(route => {
        if (Ember.get(route, 'route.length') > 0) {
          (route.route || []).forEach(destination => {
            if (!Ember.get(destination, 'destination.host')) {
              errors.pushObject(this.intl.t('cruVirtualService.http.routes.destination.host.error'));
            }

            if (!destination.weight && destination.weight !== 0) {
              errors.pushObject(this.intl.t('cruVirtualService.http.routes.destination.weight.error'));
            }
          });

          if (Ember.get(route, 'redirect.uri') || Ember.get(route, 'redirect.authority')) {
            errors.pushObject(this.intl.t('cruVirtualService.http.routes.redirect.error'));
          }
        }

        if (Ember.get(route, 'match.length') > 0) {
          (Ember.get(route, 'match') || []).forEach(match => {
            if (Object.keys(match || {}).length === 0) {
              errors.pushObject(this.intl.t('cruVirtualService.http.routes.matches.error'));
            }
          });
        }
      });
      errors.pushObjects(this.namespaceErrors || []);
      errors = errors.uniq();
      Ember.set(this, 'errors', errors);

      if (Ember.get(errors, 'length') !== 0) {
        return false;
      }

      return this.applyHooks('_beforeSaveHooks').then(() => {
        Ember.set(this, 'model.namespaceId', this.namespace.id);
        return sup.apply(self, ...arguments);
      }).catch(err => {
        Ember.set(this, 'errors', [_errors.default.stringify(err)]);
      });
    },

    doSave(opt) {
      let clone = this.primaryResource.clone();
      const filteredHttp = [];

      if (Ember.get(clone, 'gateways.length') === 0) {
        delete clone['gateways'];
      }

      if (Ember.get(clone, 'hosts.length') === 0) {
        delete clone['hosts'];
      }

      (Ember.get(clone, 'http') || []).forEach(route => {
        (Ember.get(route, 'route') || []).forEach(destination => {
          const subset = Ember.get(destination, 'destination.subset');

          if (!subset) {
            delete destination.destination['subset'];
          }
        });
        let filtered = (0, _util.removeEmpty)(route);
        filtered = (0, _util.removeEmpty)(filtered);
        filtered = (0, _util.removeEmpty)(filtered);
        filteredHttp.pushObject(filtered);
      });
      Ember.set(clone, 'http', filteredHttp);
      opt = opt || {};
      opt.qp = {
        '_replace': 'true'
      };
      return clone.save(opt).then(newData => {
        return this.mergeResult(newData);
      }).catch(err => {
        Ember.set(this, 'errors', [_errors.default.stringify(err)]);
      });
    }

  });

  _exports.default = _default;
});
define("istio/components/cru-virtual-service/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+pM7Gm+u",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"route\",\"index\",\"c\",\"row\",\"c\",\"row\"],\"statements\":[[6,[37,30],[[35,29]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"pull-left\"],[12],[2,\"\\n      \"],[10,\"h1\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[[30,[36,21],[\"cruVirtualService.title.\",[35,20]],null]],[[\"name\"],[[35,7,[\"displayName\"]]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n      \"],[1,[30,[36,25],null,[[\"model\"],[[35,7]]]]],[2,\"\\n      \"],[1,[30,[36,26],null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[35,7],false,\"ml-10 inline-block\",\"sm\"]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row banner bg-info basics\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[\"generic.name\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,27],null,[[\"clipboardText\"],[[35,7,[\"displayName\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[\"servicePage.multistat.namespace\"],null]],[2,\":\\n      \"],[13],[2,\"\\n\"],[6,[37,27],null,[[\"clipboardText\"],[[35,7,[\"namespaceId\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[35,7,[\"namespaceId\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,11],[\"generic.created\"],null]],[2,\":\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,28],[[35,7,[\"created\"]]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"\\n      \"],[1,[30,[36,11],[[30,[36,21],[\"cruVirtualService.title.\",[35,20]],null]],[[\"name\"],[[35,7,[\"displayName\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"section\"],[14,0,\"horizontal-form container-fluid\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,22],null,[[\"model\",\"namePlaceholder\",\"descriptionShown\",\"nameDisabled\"],[[35,7],\"cruVirtualService.name.placeholder\",false,[35,4]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,24],null,[[\"namespace\",\"errors\",\"registerHook\",\"editing\"],[[35,12],[35,23],[30,[36,3],[[32,0],\"registerHook\"],null],[35,13]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n\"],[6,[37,32],null,[[\"editing\",\"required\",\"valueLabel\",\"addActionLabel\",\"changed\",\"initialValues\",\"showProTip\",\"addButtonClass\",\"autoAddIfEmpty\",\"defaultValue\"],[[30,[36,31],[[35,29]],null],true,\"cruVirtualService.hosts.label\",\"cruVirtualService.hosts.add\",[30,[36,3],[[32,0],\"setHosts\"],null],[35,7,[\"hosts\"]],false,\"btn bg-link icon-btn\",true,null]],[[\"default\"],[{\"statements\":[[6,[37,18],null,[[\"editable\",\"value\"],[[35,6],[32,8,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,19],null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[35,12,[\"id\"]],[32,8,[\"value\"]],\"input-sm\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[7,8]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n\"],[6,[37,32],null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\",\"defaultValue\"],[[30,[36,31],[[35,29]],null],\"cruVirtualService.gateways.label\",\"cruVirtualService.gateways.add\",[30,[36,3],[[32,0],\"setGateways\"],null],\"btn bg-link icon-btn\",[35,7,[\"gateways\"]],false,null]],[[\"default\"],[{\"statements\":[[6,[37,18],null,[[\"editable\",\"value\"],[[35,6],[32,6,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,17],null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[35,12,[\"id\"]],[32,6,[\"value\"]],\"input-sm\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[5,6]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"section\"],[14,0,\"horizontal-form container-fluid mb-30\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-30 mb-10\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n      \"],[1,[30,[36,11],[\"cruVirtualService.http.routes.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,34],[[30,[36,33],[[30,[36,33],[[35,14]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,16],null,[[\"editing\",\"isFirst\",\"isLast\",\"route\",\"routes\",\"hosts\",\"isNew\",\"namespace\",\"removeRoute\"],[[35,6],[30,[36,15],[[32,3],[35,14,[\"firstObject\"]]],null],[30,[36,15],[[32,3],[35,14,[\"lastObject\"]]],null],[32,3],[35,14],[35,7,[\"hosts\"]],[35,13],[35,12],[30,[36,3],[[32,0],\"removeHttpRoute\"],null]]]]],[2,\"\\n\"]],\"parameters\":[3,4]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"p-20 text-center text-muted\"],[12],[2,\"\\n      \"],[1,[30,[36,11],[\"cruVirtualService.http.routes.noRoutes\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,30],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn pull-right\"],[24,4,\"button\"],[4,[38,3],[[32,0],\"addHttpRoute\"],null],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[2,\"\\n          \"],[1,[30,[36,11],[\"cruVirtualService.http.routes.addRouteLabel\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\"],[6,[37,30],[[35,29]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,10],null,null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,9],null,[[\"resourceType\",\"expandAll\",\"expandFn\",\"namespaceId\",\"name\"],[\"virtualservice\",[32,1,[\"expandAll\"]],[32,2],[35,7,[\"namespaceId\"]],[35,7,[\"name\"]]]]]],[2,\"\\n\\n    \"],[1,[30,[36,8],null,[[\"classNames\",\"model\",\"editing\",\"expandAll\",\"expandFn\"],[\"accordion-wrapper\",[35,7],[35,6],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n\"]],\"parameters\":[1,2]}]]]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,8],null,[[\"classNames\",\"initialLabels\",\"setLabels\",\"model\",\"editing\"],[\"accordion-wrapper\",[35,7,[\"labels\"]],[30,[36,3],[[32,0],\"setLabels\"],null],[35,7],[35,6]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,30],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"errors\"],[[35,0]]]]],[2,\"\\n  \"],[1,[30,[36,5],null,[[\"editing\",\"save\",\"cancel\"],[[35,4],[30,[36,3],[[32,0],\"save\"],null],[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"errors\",\"top-errors\",\"cancel\",\"action\",\"isEdit\",\"save-cancel\",\"editing\",\"model\",\"form-labels-annotations\",\"config-validation-list\",\"accordion-list\",\"t\",\"namespace\",\"isNew\",\"httpRoutes\",\"eq\",\"virtual-service-http-route-row\",\"istio-gateway-select\",\"input-or-display\",\"istio-host-select\",\"mode\",\"concat\",\"form-name-description\",\"namespaceErrors\",\"form-namespace\",\"badge-state\",\"action-menu\",\"copy-inline\",\"date-calendar\",\"isView\",\"if\",\"not\",\"form-value-array\",\"-track-array\",\"each\"]}",
    "moduleName": "istio/components/cru-virtual-service/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/custom-catalog/component", "istio/components/custom-catalog/component");
define.alias("shared/components/custom-command/component", "istio/components/custom-command/component");
define("istio/components/destination-rule-row/component", ["exports", "istio/components/destination-rule-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ccNiXuJf",
    "block": "{\"symbols\":[],\"statements\":[[10,\"tr\"],[14,0,\"main-row\"],[12],[2,\"\\n  \"],[10,\"td\"],[14,\"valign\",\"middle\"],[14,0,\"row-check\"],[14,5,\"padding-top: 2px;\"],[12],[2,\"\\n    \"],[1,[30,[36,1],null,[[\"nodeId\"],[[35,0,[\"id\"]]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"state\"]]]]],[14,0,\"state\"],[12],[2,\"\\n    \"],[1,[30,[36,3],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"name\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,4],null,[[\"route\",\"model\"],[\"destination-rule.detail\",[35,0,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"host\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n    \"],[1,[35,0,[\"host\"]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"subsets\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,5],null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[35,0,[\"displaySubsets\"]],true]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displaySubsetsString\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"created\"]]]]],[14,0,\"text-right pr-20\"],[12],[2,\"\\n    \"],[1,[30,[36,6],[[35,0,[\"created\"]]],null]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"actions\"]]]]],[14,0,\"actions\"],[12],[2,\"\\n    \"],[1,[30,[36,7],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"model\",\"check-box\",\"dt\",\"badge-state\",\"link-to\",\"tooltip-element\",\"date-calendar\",\"action-menu\"]}",
    "moduleName": "istio/components/destination-rule-row/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-subset-row/component", ["exports", "istio/components/destination-rule-subset-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    subset: null,
    actions: {
      removeSubset(subset) {
        if (this.removeSubset) {
          this.removeSubset(subset);
        }
      },

      setLabels(labels) {
        Ember.set(this, 'subset.labels', labels);
      }

    }
  });

  _exports.default = _default;
});
define("istio/components/destination-rule-subset-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4ch+Brck",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"box mb-10\"],[12],[2,\"\\n\"],[6,[37,9],[[30,[36,8],[[35,7]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n        \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,6],[[32,0],\"removeSubset\",[35,1]],null],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruDestinationRule.subsets.removeSubsetLabel\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"pb-5 acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-subsets-name\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.subsets.name.label\"],null]],[2,\"\\n\"],[6,[37,9],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[34,5]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"],[6,[37,10],null,[[\"editable\",\"value\",\"classesForDisplay\"],[[35,7],[35,1,[\"name\"]],\"text-muted form-control-static\"]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"id\",\"class\",\"type\",\"value\",\"placeholder\"],[[30,[36,3],[[35,2],\"-input-subsets-name\"],null],\"form-control\",\"text\",[35,1,[\"name\"]],[30,[36,0],[\"cruDestinationRule.subsets.name.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n      \"],[1,[30,[36,11],null,[[\"initialLabels\",\"editing\",\"setLabels\"],[[35,1,[\"labels\"]],[35,7],[30,[36,6],[[32,0],\"setLabels\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"subset\",\"elementId\",\"concat\",\"input\",\"field-required\",\"action\",\"editing\",\"and\",\"if\",\"input-or-display\",\"form-labels\"]}",
    "moduleName": "istio/components/destination-rule-subset-row/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/drain-node/component", "istio/components/drain-node/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "istio/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "istio/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "istio/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "istio/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "istio/components/field-required/component");
define.alias("shared/components/form-agent-env-var/component", "istio/components/form-agent-env-var/component");
define.alias("shared/components/form-array/component", "istio/components/form-array/component");
define.alias("shared/components/form-auth-cloud-credential/component", "istio/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "istio/components/form-certificate-row/component");
define.alias("shared/components/form-contextual-select-array/component", "istio/components/form-contextual-select-array/component");
define.alias("shared/components/form-count/component", "istio/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "istio/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "istio/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "istio/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "istio/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "istio/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "istio/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "istio/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "istio/components/form-labels-annotations/component");
define("istio/components/form-labels/component", ["exports", "shared/mixins/manage-labels", "istio/components/form-labels/template", "jquery"], function (_exports, _manageLabels, _template, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_manageLabels.default, {
    layout: _template.default,
    classNames: ['accordion-wrapper'],
    detailKey: 'formUserLabels.detail',
    addActionLabel: 'formUserLabels.addAction',
    // Inputs
    initialLabels: null,

    init() {
      this._super(...arguments);

      this.initLabels(this.get('initialLabels'), 'user', null, this.get('readonlyLabels'));
      this.labelsChanged();
    },

    actions: {
      addUserLabel() {
        this._super();

        Ember.run.next(() => {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          (0, _jquery.default)('INPUT.key').last()[0].focus();
        });
      }

    },

    updateLabels(labels) {
      if (this.setLabels) {
        const out = {};
        labels.forEach(label => {
          if (label.value) {
            out[label.key] = label.value;
          }
        });
        this.setLabels(out);
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/form-labels/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WQd7ZsQq",
    "block": "{\"symbols\":[\"label\"],\"statements\":[[6,[37,11],[[35,13]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,11],[[35,8,[\"length\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"table\"],[14,0,\"table fixed no-lines mt-20\"],[12],[2,\"\\n      \"],[10,\"tr\"],[14,0,\"hidden-xs hidden-sm\"],[12],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"formUserLabels.key.label\"],null]],[1,[34,7]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[14,\"width\",\"30\"],[12],[2,\"\\n           \\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"formUserLabels.value.label\"],null]],[1,[34,7]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[14,\"width\",\"40\"],[12],[2,\"\\n           \\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,10],[[30,[36,9],[[30,[36,9],[[35,8]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[14,\"data-title\",\"key\"],[12],[2,\"\\n            \"],[1,[30,[36,5],null,[[\"pasted\",\"class\",\"type\",\"value\",\"placeholder\",\"disabled\"],[[30,[36,4],[[32,0],\"pastedLabels\"],null],\"form-control input-sm key\",\"text\",[32,1,[\"key\"]],\"formUserLabels.key.placeholder\",[30,[36,3],[[32,1,[\"readonly\"]],true],null]]]]],[2,\"\\n          \"],[13],[2,\"\\n\\n          \"],[10,\"td\"],[14,0,\"text-center\"],[12],[2,\"\\n            \"],[10,\"p\"],[14,0,\"input-sm\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"formUserLabels.separator\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\\n          \"],[10,\"td\"],[14,\"data-title\",\"label\"],[12],[2,\"\\n            \"],[1,[30,[36,6],null,[[\"class\",\"type\",\"value\",\"placeholder\",\"disabled\"],[\"form-control input-sm\",\"text\",[32,1,[\"value\"]],[30,[36,1],[\"formUserLabels.value.placeholder\"],null],[30,[36,3],[[32,1,[\"readonly\"]],true],null]]]]],[2,\"\\n          \"],[13],[2,\"\\n\\n          \"],[10,\"td\"],[14,0,\"text-right\"],[12],[2,\"\\n            \"],[11,\"button\"],[24,0,\"btn bg-primary btn-sm\"],[16,\"disabled\",[30,[36,3],[[32,1,[\"readonly\"]],true],null]],[24,4,\"button\"],[4,[38,4],[[32,0],\"removeLabel\",[32,1]],null],[12],[2,\"\\n              \"],[10,\"i\"],[14,0,\"icon icon-minus\"],[12],[13],[2,\"\\n              \"],[10,\"span\"],[14,0,\"sr-only\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"generic.remove\"],null]],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"protip pt-10\"],[12],[2,\"\\n      \"],[1,[30,[36,1],[\"formUserLabels.protip\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn\"],[24,4,\"button\"],[4,[38,4],[[32,0],\"addUserLabel\"],null],[12],[2,\"\\n    \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n    \"],[10,\"span\"],[12],[2,\"\\n      \"],[1,[30,[36,1],[[35,12]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,2],null,[[\"header\",\"model\",\"search\"],[[30,[36,1],[\"formUserLabels.title\"],null],[35,0],false]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"initialLabels\",\"t\",\"table-labels\",\"eq\",\"action\",\"input-paste\",\"input\",\"field-required\",\"userLabelArray\",\"-track-array\",\"each\",\"if\",\"addActionLabel\",\"editing\"]}",
    "moduleName": "istio/components/form-labels/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/form-match-expressions/component", "istio/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "istio/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "istio/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "istio/components/form-members/component");
define.alias("shared/components/form-name-description/component", "istio/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "istio/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "istio/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "istio/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "istio/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "istio/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "istio/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "istio/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "istio/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "istio/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "istio/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "istio/components/form-versions/component");
define("istio/components/gateway-row/component", ["exports", "istio/components/gateway-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/gateway-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zS7d+qAU",
    "block": "{\"symbols\":[\"selector\"],\"statements\":[[10,\"tr\"],[14,0,\"main-row\"],[12],[2,\"\\n  \"],[10,\"td\"],[14,\"valign\",\"middle\"],[14,0,\"row-check\"],[14,5,\"padding-top: 2px;\"],[12],[2,\"\\n    \"],[1,[30,[36,3],null,[[\"nodeId\"],[[35,0,[\"id\"]]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,4,[\"state\"]]]]],[14,0,\"state\"],[12],[2,\"\\n    \"],[1,[30,[36,5],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,4,[\"name\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,6],null,[[\"route\",\"model\"],[\"gateway.detail\",[35,0,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,4,[\"hosts\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,7],null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[35,0,[\"displayHosts\"]],true]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displayHostsString\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,4,[\"created\"]]]]],[14,0,\"text-right pr-20\"],[12],[2,\"\\n    \"],[1,[30,[36,8],[[35,0,[\"created\"]]],null]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,4,[\"actions\"]]]]],[14,0,\"actions\"],[12],[2,\"\\n    \"],[1,[30,[36,9],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,10],[[35,0,[\"displaySelectorStrings\",\"length\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"tr\"],[14,0,\"sub-row\"],[12],[2,\"\\n    \"],[10,\"td\"],[14,\"colspan\",\"2\"],[12],[13],[2,\"\\n    \"],[10,\"td\"],[14,\"colspan\",\"4\"],[12],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[35,0,[\"displaySelectorStrings\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"span\"],[14,0,\"tag-xs bg-warning mr-5\"],[12],[2,\"\\n          \"],[1,[32,1]],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"model\",\"-track-array\",\"each\",\"check-box\",\"dt\",\"badge-state\",\"link-to\",\"tooltip-element\",\"date-calendar\",\"action-menu\",\"if\"]}",
    "moduleName": "istio/components/gateway-row/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/gateway-server/component", ["exports", "istio/components/gateway-server/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const TLS_OPTIONS = [{
    label: 'PASSTHROUGH',
    value: 'PASSTHROUGH'
  }, {
    label: 'SIMPLE',
    value: 'SIMPLE'
  }, {
    label: 'MUTUAL',
    value: 'MUTUAL'
  }, {
    label: 'AUTO_PASSTHROUGH',
    value: 'AUTO_PASSTHROUGH'
  }, {
    label: 'ISTIO_MUTUAL',
    value: 'ISTIO_MUTUAL'
  }];
  const PROTOCOLS = [{
    label: 'HTTP',
    value: 'HTTP'
  }, {
    label: 'HTTPS',
    value: 'HTTPS'
  }, {
    label: 'GRPC',
    value: 'GRPC'
  }, {
    label: 'HTTP2',
    value: 'HTTP2'
  }, {
    label: 'MONGO',
    value: 'MONGO'
  }, {
    label: 'TCP',
    value: 'TCP'
  }, {
    label: 'TLS',
    value: 'TLS'
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    server: null,
    protocols: PROTOCOLS,
    tlsOptions: TLS_OPTIONS,

    init() {
      this._super(...arguments);

      this.initTls();
    },

    actions: {
      removeServer(server) {
        if (this.removeServer) {
          this.removeServer(server);
        }
      },

      setHosts(hosts) {
        Ember.set(this, 'server.hosts', hosts);
      },

      setSubjectAltNames(subjectAltNames) {
        Ember.set(this, 'server.tls.subjectAltNames', subjectAltNames);
      }

    },

    initTls() {
      if (!Ember.get(this, 'server.tls') && Ember.get(this, 'editing')) {
        Ember.set(this, 'server.tls', {
          httpsRedirect: false
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/gateway-server/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "b4a213ae",
    "block": "{\"symbols\":[\"c\",\"row\",\"c\",\"row\"],\"statements\":[[10,\"div\"],[14,0,\"box mb-10\"],[12],[2,\"\\n\"],[6,[37,16],[[30,[36,15],[[35,2]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n        \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,10],[[32,0],\"removeServer\",[35,4]],null],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.servers.removeServerLabel\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-port-number\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruGateway.port.number.label\"],null]],[2,\"\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[34,13]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"port\",\"number\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,14],null,[[\"min\",\"max\",\"id\",\"value\",\"classNames\",\"placeholder\"],[1,65535,[30,[36,6],[[35,5],\"-input-port-number\"],null],[35,4,[\"port\",\"number\"]],\"form-control\",[30,[36,0],[\"cruGateway.port.number.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-port-name\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruGateway.port.name.label\"],null]],[2,\"\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[34,13]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"port\",\"name\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,6],[[35,5],\"-input-port-name\"],null],[35,4,[\"port\",\"name\"]],\"form-control\",[30,[36,0],[\"cruGateway.port.name.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruGateway.port.protocol.label\"],null]],[2,\"\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[34,13]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"port\",\"protocol\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,9],null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[35,12],[35,4,[\"port\",\"protocol\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n\"],[6,[37,11],null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\",\"required\"],[[35,2],\"cruGateway.hosts.label\",\"cruGateway.hosts.add\",[30,[36,10],[[32,0],\"setHosts\"],null],\"btn bg-link icon-btn\",[35,4,[\"hosts\"]],false,true]],[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,4,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[32,4,[\"value\"]],[30,[36,0],[\"cruGateway.hosts.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[3,4]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,18],null,[[\"advanced\"],[[35,17]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.tls.mode.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"tls\",\"mode\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,9],null,[[\"classNames\",\"content\",\"value\",\"prompt\",\"localizedPrompt\"],[\"form-control\",[35,8],[35,4,[\"tls\",\"mode\"]],\"cruGateway.tls.mode.prompt\",true]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.tls.httpsRedirect.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"tls\",\"httpsRedirect\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n            \"],[10,\"label\"],[12],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"selection\",\"value\"],[[35,4,[\"tls\",\"httpsRedirect\"]],true]]]],[2,\"\\n              \"],[1,[30,[36,0],[\"cruGateway.tls.httpsRedirect.enabled\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n            \"],[10,\"label\"],[12],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"selection\",\"value\"],[[35,4,[\"tls\",\"httpsRedirect\"]],false]]]],[2,\"\\n              \"],[1,[30,[36,0],[\"cruGateway.tls.httpsRedirect.disabled\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-server-certificate\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.tls.serverCertificate.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"tls\",\"serverCertificate\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,6],[[35,5],\"-input-server-certificate\"],null],[35,4,[\"tls\",\"serverCertificate\"]],\"form-control\",[30,[36,0],[\"cruGateway.tls.serverCertificate.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-private-key\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.tls.privateKey.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"tls\",\"privateKey\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,6],[[35,5],\"-input-private-key\"],null],[35,4,[\"tls\",\"privateKey\"]],\"form-control\",[30,[36,0],[\"cruGateway.tls.privateKey.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-ca-certificates\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.tls.caCertificates.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"tls\",\"caCertificates\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,6],[[35,5],\"-input-ca-certificates\"],null],[35,4,[\"tls\",\"caCertificates\"]],\"form-control\",[30,[36,0],[\"cruGateway.tls.caCertificates.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-credential-name\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruGateway.tls.credentialName.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"tls\",\"credentialName\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,6],[[35,5],\"-input-credential-name\"],null],[35,4,[\"tls\",\"credentialName\"]],\"form-control\",[30,[36,0],[\"cruGateway.tls.credentialName.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n\"],[6,[37,11],null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[35,2],\"cruDestinationRule.tls.subjectAltNames.label\",\"cruDestinationRule.tls.subjectAltNames.add\",[30,[36,10],[[32,0],\"setSubjectAltNames\"],null],\"btn bg-link icon-btn\",[35,4,[\"tls\",\"subjectAltNames\"]],false]],[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,2,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,1],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[32,2,[\"value\"]],[30,[36,0],[\"cruDestinationRule.tls.subjectAltNames.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"input\",\"editing\",\"input-or-display\",\"server\",\"elementId\",\"concat\",\"radio-button\",\"tlsOptions\",\"new-select\",\"action\",\"form-value-array\",\"protocols\",\"field-required\",\"input-integer\",\"and\",\"if\",\"advanced\",\"advanced-section\"]}",
    "moduleName": "istio/components/gateway-server/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/gke-access-scope/component", "istio/components/gke-access-scope/component");
define.alias("shared/components/gke-node-pool-row/component", "istio/components/gke-node-pool-row/component");
define.alias("shared/components/graph-area/component", "istio/components/graph-area/component");
define.alias("shared/components/hook-row/component", "istio/components/hook-row/component");
define.alias("shared/components/host-pod/component", "istio/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "istio/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "istio/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "istio/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "istio/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "istio/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "istio/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "istio/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "istio/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "istio/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "istio/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "istio/components/hover-dropdown/component");
define("istio/components/http-route-destination/component", ["exports", "istio/components/http-route-destination/template", "shared/utils/util"], function (_exports, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    httpRouteDestinations: null,

    init() {
      this._super(...arguments);

      this.initDestinations();
    },

    didInsertElement() {
      if (!Ember.get(this, 'route.type') && Ember.get(this, 'httpRouteDestinations.length') === 0) {
        this.send('addDestination');
      }
    },

    actions: {
      addDestination() {
        const destination = Ember.Object.create({
          destination: {
            subset: this.getNewVersion()
          },
          weight: Ember.get(this, 'httpRouteDestinations.length') === 0 ? 100 : 0
        });
        const hosts = Ember.get(this, 'hosts') || [];
        const firstHost = Ember.get(hosts, 'firstObject');

        if (hosts.length === 1 && firstHost && firstHost.indexOf('*') === -1) {
          Ember.set(destination, 'destination.host', firstHost);
        }

        Ember.get(this, 'httpRouteDestinations').pushObject(destination);
      },

      removeDestination(destination) {
        Ember.get(this, 'httpRouteDestinations').removeObject(destination);
      }

    },
    hostsDidChange: Ember.observer('hosts.[]', function () {
      const hosts = Ember.get(this, 'hosts') || [];
      const firstHost = Ember.get(hosts, 'firstObject');

      if (hosts.length === 1 && firstHost && firstHost.indexOf('*') === -1) {
        (Ember.get(this, 'httpRouteDestinations') || []).forEach(destination => {
          Ember.set(destination, 'destination.host', firstHost);
        });
      }
    }),
    inputDidChange: Ember.observer('httpRouteDestinations.@each.{weight,portNumberOrName}', function () {
      const httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      httpRouteDestinations.forEach(destination => {
        const port = Ember.get(destination, 'portNumberOrName');

        if (port && (0, _util.isNumeric)(port)) {
          Ember.set(destination, 'destination.port', {
            number: parseInt(port, 10)
          });
        } else if (port) {
          Ember.set(destination, 'destination.port', {
            name: port
          });
        } else {
          delete destination.destination['port'];
        }
      });

      if (httpRouteDestinations.length === 2) {
        let {
          weight1,
          weight2
        } = this.getCurrentWeights();

        if (weight1 === Ember.get(this, 'weight1') && weight2 !== Ember.get(this, 'weight2')) {
          weight1 = 100 - weight2;
          Ember.set(httpRouteDestinations[0], 'weight', weight1);
        } else if (weight1 !== Ember.get(this, 'weight1') && weight2 === Ember.get(this, 'weight2')) {
          weight2 = 100 - weight1;
          Ember.set(httpRouteDestinations[1], 'weight', weight2);
        }

        Ember.setProperties(this, {
          weight1,
          weight2
        });
      }
    }),

    getNewVersion() {
      const name = Ember.get(this, 'httpRouteDestinations.lastObject.destination.subset');

      if (name) {
        const matches = name.match(/\d+$/);

        if (matches.length > 0) {
          const prefix = name.slice(0, name.length - matches[0].length);
          return `${prefix}${parseInt(matches[0], 10) + 1}`;
        }
      } else {
        return 'v1';
      }

      return '';
    },

    getCurrentWeights() {
      const httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      let weight1 = 0;
      let weight2 = 0;

      if (httpRouteDestinations.length === 2) {
        const dest1 = httpRouteDestinations[0];
        const dest2 = httpRouteDestinations[1];
        weight1 = Ember.get(dest1, 'weight');
        weight2 = Ember.get(dest2, 'weight');

        if (!weight1) {
          weight1 = 0;
        }

        if (!weight2) {
          weight2 = 0;
        }

        weight1 = parseInt(weight1, 10);
        weight2 = parseInt(weight2, 10);
      }

      return {
        weight1,
        weight2
      };
    },

    initDestinations() {
      const httpRouteDestinations = Ember.get(this, 'httpRouteDestinations') || [];
      httpRouteDestinations.forEach(destination => {
        const port = Ember.get(destination, 'destination.port');

        if (port) {
          Ember.set(destination, 'portNumberOrName', Ember.get(port, 'name') || Ember.get(port, 'number') || null);
        }
      });

      if (httpRouteDestinations.length === 2) {
        Ember.setProperties(this, this.getCurrentWeights());
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/http-route-destination/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DLaDqXUa",
    "block": "{\"symbols\":[\"destination\"],\"statements\":[[6,[37,8],[[35,10,[\"length\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"table\"],[14,0,\"fixed striped mt-20\"],[12],[2,\"\\n    \"],[10,\"thead\"],[12],[2,\"\\n      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"cruVirtualService.http.routes.destination.host.label\"],null]],[2,\"\\n\"],[6,[37,8],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,9]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"cruVirtualService.http.routes.destination.subset.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"cruVirtualService.http.routes.destination.port.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"cruVirtualService.http.routes.destination.weight.label\"],null]],[2,\"\\n\"],[6,[37,8],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,9]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"],[6,[37,8],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"th\"],[14,\"width\",\"40\"],[12],[2,\" \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"tbody\"],[12],[2,\"\\n\"],[6,[37,12],[[30,[36,11],[[30,[36,11],[[35,10]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[32,1,[\"destination\",\"host\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,5],null,[[\"showLabel\",\"namespaceId\",\"value\",\"inputClass\"],[false,[35,4,[\"id\"]],[32,1,[\"destination\",\"host\"]],\"input-sm\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[32,1,[\"destination\",\"subset\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,3],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[32,1,[\"destination\",\"subset\"]],[30,[36,1],[\"cruVirtualService.http.routes.destination.subset.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[32,1,[\"portNumberOrName\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,3],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[32,1,[\"portNumberOrName\"]],[30,[36,1],[\"cruVirtualService.http.routes.destination.port.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[32,1,[\"weight\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n                \"],[1,[30,[36,2],null,[[\"class\",\"min\",\"max\",\"value\",\"placeholder\"],[\"input-sm\",\"0\",\"100\",[32,1,[\"weight\"]],[30,[36,1],[\"cruVirtualService.http.routes.destination.weight.placeholder\"],null]]]]],[2,\"\\n                \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n                  %\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n\\n\"],[6,[37,8],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"td\"],[14,0,\"text-right\"],[12],[2,\"\\n              \"],[11,\"button\"],[24,0,\"btn bg-primary btn-sm\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"removeDestination\",[32,1]],null],[12],[2,\"\\n                \"],[10,\"i\"],[14,0,\"icon icon-minus\"],[12],[13],[2,\"\\n                \"],[10,\"span\"],[14,0,\"sr-only\"],[12],[2,\"\\n                  \"],[1,[30,[36,1],[\"generic.remove\"],null]],[2,\"\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row text-center mt-20 mb-20 pt-10\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"text-muted\"],[12],[2,\"\\n      \"],[1,[30,[36,1],[\"cruVirtualService.http.routes.destination.noDestinations\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,8],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row mt-20\"],[12],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn pull-left\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"addDestination\"],null],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n      \"],[10,\"span\"],[12],[2,\"\\n        \"],[1,[30,[36,1],[\"cruVirtualService.http.routes.destination.addDestinationLabel\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"action\",\"t\",\"input-integer\",\"input\",\"namespace\",\"istio-host-select\",\"editing\",\"input-or-display\",\"if\",\"field-required\",\"httpRouteDestinations\",\"-track-array\",\"each\"]}",
    "moduleName": "istio/components/http-route-destination/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/http-route-match/component", ["exports", "istio/components/http-route-match/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const HEADERS = 'headers';
  const EXACT = 'exact';
  const PREFIX = 'prefix';
  const REGEX = 'regex';
  const AUTHORITY = 'authority';
  const METHOD = 'method';
  const URI = 'uri';
  const SCHEME = 'scheme';
  const CONDITIONS = [{
    label: 'cruVirtualService.http.routes.matches.condition.exact',
    value: EXACT
  }, {
    label: 'cruVirtualService.http.routes.matches.condition.prefix',
    value: PREFIX
  }, {
    label: 'cruVirtualService.http.routes.matches.condition.regex',
    value: REGEX
  }];

  function getStringMatch(condition, value) {
    const out = {};
    out[condition] = value;
    return out;
  }

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    matches: null,
    route: null,
    conditions: CONDITIONS,
    model: null,

    init() {
      this._super(...arguments);

      this.initMatches();
    },

    didInsertElement() {
      if (Ember.get(this, 'matches.length') === 0) {
        this.send('addMatch');
      }
    },

    actions: {
      addMatch() {
        const match = Ember.Object.create({
          matchType: HEADERS,
          condition: EXACT
        });
        Ember.get(this, 'matches').pushObject(match);
      },

      removeMatch(match) {
        Ember.get(this, 'matches').removeObject(match);
      },

      removeRouteMatch(match) {
        if (this.removeMatch) {
          this.removeMatch(match);
        }
      },

      setGateways(gateways) {
        Ember.set(this, 'model.gateways', gateways);
      },

      setSourceLabels(labels) {
        if (Object.keys(labels || {}).length > 0) {
          Ember.set(this, 'model.sourceLabels', labels);
        } else {
          const model = Ember.get(this, 'model');
          delete model['sourceLabels'];
        }
      }

    },
    portDidChange: Ember.observer('model.port', function () {
      const port = Ember.get(this, 'model.port');

      if (port === undefined || port === '') {
        delete Ember.get(this, 'model')['port'];
      }
    }),
    matchesDidChange: Ember.observer('matches.@each.{matchType,key,condition,value}', function () {
      const matches = Ember.get(this, 'matches') || [];
      const model = Ember.get(this, 'model');
      let authority = false;
      let method = false;
      let uri = false;
      let scheme = false;
      matches.filterBy('value').forEach(match => {
        switch (match.matchType) {
          case AUTHORITY:
            Ember.set(model, AUTHORITY, getStringMatch(match.condition, match.value));
            authority = true;
            break;

          case URI:
            Ember.set(model, URI, getStringMatch(match.condition, match.value));
            uri = true;
            break;

          case SCHEME:
            Ember.set(model, SCHEME, getStringMatch(match.condition, match.value));
            scheme = true;
            break;

          case METHOD:
            Ember.set(model, METHOD, getStringMatch(match.condition, match.value));
            method = true;
            break;
        }
      });

      if (!authority) {
        delete model[AUTHORITY];
      }

      if (!method) {
        delete model[METHOD];
      }

      if (!uri) {
        delete model[URI];
      }

      if (!scheme) {
        delete model[SCHEME];
      }

      this.setHeaders();
    }),

    setHeaders() {
      const model = Ember.get(this, 'model');
      const matches = Ember.get(this, 'matches') || [];
      const out = {};
      matches.filter(match => match.key && match.value && match.matchType === HEADERS).forEach(match => {
        Ember.set(out, match.key, getStringMatch(match.condition, match.value));
      });

      if (Object.keys(out).length > 0) {
        Ember.set(model, HEADERS, out);
      } else {
        delete model[HEADERS];
      }
    },

    initMatches() {
      const out = [];
      const model = Ember.get(this, 'model') || {};
      const authority = Ember.get(model, AUTHORITY);
      const method = Ember.get(model, METHOD);
      const uri = Ember.get(model, URI);
      const scheme = Ember.get(model, SCHEME);
      const headers = Ember.get(model, HEADERS);

      if (authority) {
        out.pushObjects(this.getMatchArray(AUTHORITY, authority));
      }

      if (method) {
        out.pushObjects(this.getMatchArray(METHOD, method));
      }

      if (uri) {
        out.pushObjects(this.getMatchArray(URI, uri));
      }

      if (scheme) {
        out.pushObjects(this.getMatchArray(SCHEME, scheme));
      }

      if (headers) {
        Object.keys(headers).forEach(key => {
          const array = this.getMatchArray(HEADERS, headers[key]);
          array.forEach(item => Ember.set(item, 'key', key));
          out.pushObjects(array);
        });
      }

      Ember.set(this, 'matches', out);
    },

    getMatchArray(type, match) {
      const out = [];

      if (!match) {
        return out;
      }

      const exact = Ember.get(match, EXACT);
      const prefix = Ember.get(match, PREFIX);
      const regex = Ember.get(match, REGEX);

      if (exact) {
        out.push({
          matchType: type,
          condition: EXACT,
          value: exact
        });
      }

      if (prefix) {
        out.push({
          matchType: type,
          condition: PREFIX,
          value: prefix
        });
      }

      if (regex) {
        out.push({
          matchType: type,
          condition: REGEX,
          value: regex
        });
      }

      return out;
    }

  });

  _exports.default = _default;
});
define("istio/components/http-route-match/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ncvnZutN",
    "block": "{\"symbols\":[\"c\",\"row\",\"match\",\"index\"],\"statements\":[[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n      \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,8],[[32,0],\"removeRouteMatch\",[35,4]],null],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.removeLabel\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,16],[[35,13,[\"length\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"table\"],[14,0,\"fixed striped mt-20\"],[12],[2,\"\\n    \"],[10,\"thead\"],[12],[2,\"\\n      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.type.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.key.label\"],null]],[2,\"\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,17]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.condition.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.value.label\"],null]],[2,\"\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,17]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"th\"],[14,\"width\",\"40\"],[12],[2,\" \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"tbody\"],[12],[2,\"\\n\"],[6,[37,19],[[30,[36,18],[[30,[36,18],[[35,13]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,3,[\"matchType\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,14],null,[[\"match\",\"matches\",\"index\"],[[32,3],[35,13],[32,4]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,16],[[30,[36,15],[[32,3,[\"matchType\"]],\"headers\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,3,[\"key\"]]]],[[\"default\"],[{\"statements\":[[2,\"                \"],[1,[30,[36,1],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[32,3,[\"key\"]],[30,[36,0],[\"cruVirtualService.http.routes.matches.key.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"              \"],[10,\"div\"],[14,0,\"text-muted\"],[12],[2,\"\\n                \"],[1,[30,[36,0],[\"generic.na\"],null]],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,3,[\"condition\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,12],null,[[\"classNames\",\"content\",\"localizedLabel\",\"value\"],[\"form-control\",[35,11],true,[32,3,[\"condition\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"p-5\"],[12],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,3,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,1],null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"input-sm\",[32,3,[\"value\"]],[30,[36,0],[[30,[36,6],[\"cruVirtualService.http.routes.matches.value.\",[32,3,[\"matchType\"]],\".\",[32,3,[\"condition\"]]],null]],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n\\n\"],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"td\"],[14,0,\"text-right\"],[12],[2,\"\\n              \"],[11,\"button\"],[24,0,\"btn bg-primary btn-sm\"],[24,4,\"button\"],[4,[38,8],[[32,0],\"removeMatch\",[32,3]],null],[12],[2,\"\\n                \"],[10,\"i\"],[14,0,\"icon icon-minus\"],[12],[13],[2,\"\\n                \"],[10,\"span\"],[14,0,\"sr-only\"],[12],[2,\"\\n                  \"],[1,[30,[36,0],[\"generic.remove\"],null]],[2,\"\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[3,4]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row text-center mt-20 mb-20 pt-10\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"text-muted\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.noMatches\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,16],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row mt-20\"],[12],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn pull-left\"],[24,4,\"button\"],[4,[38,8],[[32,0],\"addMatch\"],null],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n      \"],[10,\"span\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.addMatchLabel\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,21],null,[[\"advanced\"],[[35,20]]],[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row mt-20\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,6],[[35,5],\"-input-port\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.port.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"port\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,7],null,[[\"id\",\"min\",\"max\",\"value\",\"classNames\",\"placeholder\"],[[30,[36,6],[[35,5],\"-input-port\"],null],0,65535,[35,4,[\"port\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.matches.port.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-20\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n      \"],[1,[30,[36,9],null,[[\"editing\",\"addActionLabel\",\"header\",\"initialMap\",\"changed\"],[[35,2],\"cruVirtualService.http.routes.matches.sourceLabels.addActionLabel\",[30,[36,0],[\"cruVirtualService.http.routes.matches.sourceLabels.label\"],null],[35,4,[\"sourceLabels\"]],[30,[36,8],[[32,0],\"setSourceLabels\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n\"],[6,[37,10],null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[35,2],\"cruVirtualService.gateways.label\",\"cruVirtualService.gateways.add\",[30,[36,8],[[32,0],\"setGateways\"],null],\"btn bg-link icon-btn\",[35,4,[\"gateways\"]],false]],[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,2,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[32,2,[\"value\"]],[30,[36,0],[\"cruVirtualService.gateways.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"hr\"],[14,0,\"mt-30\"],[12],[13]],\"hasEval\":false,\"upvars\":[\"t\",\"input\",\"editing\",\"input-or-display\",\"model\",\"elementId\",\"concat\",\"input-integer\",\"action\",\"form-key-value\",\"form-value-array\",\"conditions\",\"new-select\",\"matches\",\"match-type-select\",\"eq\",\"if\",\"field-required\",\"-track-array\",\"each\",\"advanced\",\"advanced-section\"]}",
    "moduleName": "istio/components/http-route-match/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/huawei-user-labels/component", "istio/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "istio/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "istio/components/illiquid-model");
define.alias("shared/components/import-command/component", "istio/components/import-command/component");
define.alias("shared/components/input-answer-row/component", "istio/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "istio/components/input-answers/component");
define.alias("shared/components/input-cidr/component", "istio/components/input-cidr/component");
define.alias("shared/components/input-custom-answers/component", "istio/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "istio/components/input-float/component");
define.alias("shared/components/input-identity/component", "istio/components/input-identity/component");
define.alias("shared/components/input-int/component", "istio/components/input-int/component");
define.alias("shared/components/input-integer/component", "istio/components/input-integer/component");
define.alias("shared/components/input-number/component", "istio/components/input-number/component");
define.alias("shared/components/input-or-display/component", "istio/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "istio/components/input-paste/component");
define.alias("shared/components/input-slider/component", "istio/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "istio/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "istio/components/input-text-file/component");
define.alias("shared/components/input-url/component", "istio/components/input-url/component");
define.alias("shared/components/input-yaml/component", "istio/components/input-yaml/component");
define("istio/components/istio-catalog/component", ["exports", "istio/components/istio-catalog/template", "shared/mixins/crud-catalog", "shared/utils/util", "shared/utils/parse-unit", "shared/mixins/reservation-check", "shared/mixins/catalog-upgrade", "semver"], function (_exports, _template, _crudCatalog, _util, _parseUnit, _reservationCheck, _catalogUpgrade, _semver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const GATEWAY_TYPE = ['NodePort', 'LoadBalancer'];
  const PERSISTENCE_KEYS = ['existingClaim', 'size', 'storageClass'];
  const DEFAULT_HTTP2_PORT = 31380;
  const DEFAULT_HTTPS_PORT = 31390;
  const GATEWAY_ENABLED = 'gateways.enabled';
  const HTTP2_PORT = 'gateways.istio-ingressgateway.ports[0].nodePort';
  const HTTPS_PORT = 'gateways.istio-ingressgateway.ports[1].nodePort';
  const LB_IP = 'gateways.istio-ingressgateway.loadBalancerIP';
  const LB_SOURCE_RANGES = 'gateways.istio-ingressgateway.loadBalancerSourceRanges';
  const PILOT_REQUEST_CPU = 'pilot.resources.requests.cpu';
  const PILOT_REQUEST_MEM = 'pilot.resources.requests.memory';
  const PILOT_LIMIT_CPU = 'pilot.resources.limits.cpu';
  const PILOT_LIMIT_MEM = 'pilot.resources.limits.memory';
  const PILOT_NODE_SELECTOR_PREFIX = 'pilot.nodeSelector.';
  const PILOT_TOLERATION = 'pilot.tolerations';
  const MIXER_REQUEST_CPU = 'mixer.telemetry.resources.requests.cpu';
  const MIXER_REQUEST_MEM = 'mixer.telemetry.resources.requests.memory';
  const MIXER_LIMIT_CPU = 'mixer.telemetry.resources.limits.cpu';
  const MIXER_LIMIT_MEM = 'mixer.telemetry.resources.limits.memory';
  const MIXER_NODE_SELECTOR_PREFIX = 'mixer.nodeSelector.';
  const MIXER_TOLERATION = 'mixer.tolerations';
  const POLICY_REQUEST_CPU = 'mixer.policy.resources.requests.cpu';
  const POLICY_REQUEST_MEM = 'mixer.policy.resources.requests.memory';
  const POLICY_LIMIT_CPU = 'mixer.policy.resources.limits.cpu';
  const POLICY_LIMIT_MEM = 'mixer.policy.resources.limits.memory';
  const GATEWAY_REQUEST_CPU = 'gateways.istio-ingressgateway.resources.requests.cpu';
  const GATEWAY_REQUEST_MEM = 'gateways.istio-ingressgateway.resources.requests.memory';
  const GATEWAY_LIMIT_CPU = 'gateways.istio-ingressgateway.resources.limits.cpu';
  const GATEWAY_LIMIT_MEM = 'gateways.istio-ingressgateway.resources.limits.memory';
  const GATEWAY_NODE_SELECTOR_PREFIX = 'gateways.istio-ingressgateway.nodeSelector.';
  const GATEWAY_TOLERATION = 'gateways.istio-ingressgateway.tolerations';
  const TRACING_REQUEST_CPU = 'tracing.jaeger.resources.requests.cpu';
  const TRACING_REQUEST_MEM = 'tracing.jaeger.resources.requests.memory';
  const TRACING_LIMIT_CPU = 'tracing.jaeger.resources.limits.cpu';
  const TRACING_LIMIT_MEM = 'tracing.jaeger.resources.limits.memory';
  const TRACING_NODE_SELECTOR_PREFIX = 'tracing.nodeSelector.';
  const TRACING_TOLERATION = 'tracing.tolerations';
  const MEMBERS = 'global.members';
  const MEMBER_USER = 'User';
  const MEMBER_GROUP = 'Group';
  const MEMBER_SYSYTEM = 'system:authenticated';
  const ANSWER_TO_CONFIG = {
    'tracing.enabled': 'tracingEnabled',
    [PILOT_REQUEST_CPU]: 'pilotRequestCpu',
    [PILOT_REQUEST_MEM]: 'pilotRequestMemory',
    [PILOT_LIMIT_MEM]: 'pilotLimitMemory',
    [PILOT_LIMIT_CPU]: 'pilotLimitCpu',
    [GATEWAY_ENABLED]: 'gatewayEnabled',
    'gateways.istio-ingressgateway.type': 'gatewayType',
    [LB_IP]: 'loadBalancerIP',
    [MIXER_REQUEST_MEM]: 'mixerTelemetryRequestMemory',
    [MIXER_LIMIT_MEM]: 'mixerTelemetryLimitMemory',
    [MIXER_REQUEST_CPU]: 'mixerTelemetryRequestCpu',
    [MIXER_LIMIT_CPU]: 'mixerTelemetryLimitCpu',
    'pilot.traceSampling': 'traceSampling',
    'mixer.policy.enabled': 'mixerPolicyEnabled',
    'mtls.enabled': 'mtlsEnabled',
    [TRACING_REQUEST_CPU]: 'tracingRequestCpu',
    [TRACING_REQUEST_MEM]: 'tracingRequestMemory',
    [TRACING_LIMIT_CPU]: 'tracingLimitCpu',
    [TRACING_LIMIT_MEM]: 'tracingLimitMemory',
    [GATEWAY_REQUEST_CPU]: 'gatewayRequestCpu',
    [GATEWAY_REQUEST_MEM]: 'gatewayRequestMemory',
    [GATEWAY_LIMIT_CPU]: 'gatewayLimitCpu',
    [GATEWAY_LIMIT_MEM]: 'gatewayLimitMemory',
    [POLICY_REQUEST_MEM]: 'mixerPolicyRequestMemory',
    [POLICY_LIMIT_MEM]: 'mixerPolicyLimitMemory',
    [POLICY_REQUEST_CPU]: 'mixerPolicyRequestCpu',
    [POLICY_LIMIT_CPU]: 'mixerPolicyLimitCpu'
  };
  const HIDDEN_KEYS = {
    'enableCRDs': true,
    'mixer.enabled': true,
    'pilot.enabled': true,
    'security.enabled': true,
    'nodeagent.enabled': false,
    'istio_cni.enabled': false,
    'istiocoredns.enabled': false,
    'sidecarInjectorWebhook.enabled': true,
    'kiali.enabled': true,
    'galley.enabled': true,
    'certmanager.enabled': false,
    'global.rancher.domain': '',
    'global.rancher.clusterId': '',
    'global.monitoring.type': 'cluster-monitoring'
  };
  const NODE_PORT_KEYS = {
    'gateways.istio-ingressgateway.ports[0].name': 'http2',
    'gateways.istio-ingressgateway.ports[0].port': 80,
    'gateways.istio-ingressgateway.ports[1].name': 'https',
    'gateways.istio-ingressgateway.ports[1].port': 443
  };
  const WORKLOADS = ['mixerTelemetry', 'tracing', 'gateway', 'pilot', 'mixerPolicy'];
  const ISTIO_TEMPLATE = 'system-library-rancher-istio';
  const NODE_EXPORTER_CPU = 100;
  const NODE_EXPORTER_MEMORY = 30;
  const MONITORING_MIN_CPU = 650;
  const MONITORING_MIN_MEMORY = 650;
  const PROMETHEUS_DEFAULT_CPU = 750;
  const PROMETHEUS_DEFAULT_MEMORY = 750;
  const MONITORING_CLUSTER_CPU = PROMETHEUS_DEFAULT_CPU + MONITORING_MIN_CPU;
  const MONITORING_CLUSTER_MEMORY = PROMETHEUS_DEFAULT_MEMORY + MONITORING_MIN_MEMORY;
  const ISTIO_CLUSTER_CPU = 500;
  const ISTIO_CLUSTER_MEMORY = 500;
  const ISTIO_BREAKING_VERSION = '1.4.2';

  var _default = Ember.Component.extend(_crudCatalog.default, _reservationCheck.default, _catalogUpgrade.default, {
    settings: Ember.inject.service(),
    scope: Ember.inject.service(),
    intl: Ember.inject.service(),
    grafana: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    layout: _template.default,
    answers: null,
    appName: 'cluster-istio',
    nsName: 'istio-system',
    templateId: ISTIO_TEMPLATE,
    templateName: 'rancher-istio',
    level: Ember.computed.alias('scope.currentPageScope'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    enableClusterMonitoring: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),

    init() {
      this._super(...arguments);

      this.initConfig();
      this.initWorkloads();

      if (Ember.get(this, 'enabled')) {
        this.initAnswers();
      } else {
        Ember.set(this, 'customAnswers', { ...HIDDEN_KEYS
        });
      }
    },

    actions: {
      save(cb) {
        if (!Ember.get(this, 'enableClusterMonitoring')) {
          this.enableMonitoring();
        }

        Ember.set(this, 'errors', []);
        const errors = this.validate() || [];

        if (errors.length > 0) {
          Ember.set(this, 'errors', errors);
          cb();
          return;
        }

        let answers = {
          'global.rancher.domain': window.location.host,
          'global.rancher.clusterId': Ember.get(this, 'cluster.id')
        };
        const answerKeys = Object.keys(ANSWER_TO_CONFIG) || [];
        answerKeys.map(key => {
          const value = Ember.get(this, `config.${ANSWER_TO_CONFIG[key]}`);

          if (value === undefined || value === '') {
            return;
          }

          switch (key) {
            case PILOT_REQUEST_CPU:
            case PILOT_LIMIT_CPU:
            case MIXER_REQUEST_CPU:
            case MIXER_LIMIT_CPU:
            case TRACING_REQUEST_CPU:
            case TRACING_LIMIT_CPU:
            case GATEWAY_REQUEST_CPU:
            case GATEWAY_LIMIT_CPU:
            case POLICY_REQUEST_CPU:
            case POLICY_LIMIT_CPU:
              answers[key] = `${value}m`;
              break;

            case PILOT_REQUEST_MEM:
            case PILOT_LIMIT_MEM:
            case MIXER_REQUEST_MEM:
            case MIXER_LIMIT_MEM:
            case TRACING_REQUEST_MEM:
            case TRACING_LIMIT_MEM:
            case GATEWAY_REQUEST_MEM:
            case GATEWAY_LIMIT_MEM:
            case POLICY_REQUEST_MEM:
            case POLICY_LIMIT_MEM:
              answers[key] = `${value}Mi`;
              break;

            default:
              answers[key] = value;
          }
        });
        ['tracing', 'gateway', 'pilot', 'mixer'].map(component => {
          (Ember.get(this, `${component}NodeSelectors`) || []).map(selector => {
            let {
              key,
              value
            } = selector;

            if (key.includes('.')) {
              key = key.replace(/\./g, '\\.');
            }

            if (component === 'gateway') {
              answers[`gateways.istio-ingressgateway.nodeSelector.${key}`] = value;
            } else {
              answers[`${component}.nodeSelector.${key}`] = value;
            }
          });
        });

        if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'LoadBalancer') {
          (Ember.get(this, 'loadBalancerSourceRanges') || []).map((value, idx) => {
            answers[`${LB_SOURCE_RANGES}[${idx}]`] = value;
          });
        }

        if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'NodePort') {
          (Object.keys(NODE_PORT_KEYS) || []).map(key => {
            answers[key] = NODE_PORT_KEYS[key];
          });
          answers[HTTP2_PORT] = Ember.get(this, 'config.http2Port');
          answers[HTTPS_PORT] = Ember.get(this, 'config.httpsPort');
        }

        const users = Ember.get(this, 'globalStore').all('user');

        if (Ember.get(this, 'allowSystemGroup')) {
          answers[`${MEMBERS}[0].kind`] = MEMBER_GROUP;
          answers[`${MEMBERS}[0].name`] = MEMBER_SYSYTEM;
        } else {
          (Ember.get(this, 'members') || []).map((m = {}, idx) => {
            const {
              principalType,
              id
            } = m;
            let name = id;

            if (principalType === 'user') {
              const filtered = users.filter((u = {}) => u.principalIds.includes(id)).get('firstObject');

              if (filtered) {
                name = Ember.get(filtered, 'id');
              } else {
                return;
              }
            }

            answers[`${MEMBERS}[${idx}].kind`] = (0, _util.ucFirst)(principalType);
            answers[`${MEMBERS}[${idx}].name`] = name;
          });
        }

        ['gateway', 'pilot', 'mixer', 'tracing'].map(component => {
          (Ember.get(this, `${component}Tolerations`) || []).map((t, index) => {
            Object.keys(t).map(key => {
              if (t[key]) {
                if (component === 'gateway') {
                  answers[`gateways.istio-ingressgateway.tolerations[${index}].${key}`] = t[key];
                } else {
                  answers[`${component}.tolerations[${index}].${key}`] = t[key];
                }
              }
            });
          });
        });
        this.save(cb, answers);
      },

      addAuthorizedPrincipal(principal) {
        if (principal) {
          let {
            members = [],
            globalStore
          } = this;
          members.pushObject(globalStore.createRecord(principal));
          Ember.set(this, 'members', members);
        }
      },

      removeMember(member) {
        let {
          members = []
        } = this;
        members.removeObject(member);
      },

      disable() {
        const {
          app,
          modalService
        } = this;
        modalService.toggleModal('modal-delete-istio', {
          escToClose: true,
          istioApp: app
        });
      }

    },
    workloadEnabledChange: Ember.observer('config.tracingEnabled', 'config.gatewayEnabled', 'config.mixerPolicyEnabled', function () {
      ['tracing', 'gateway'].map(w => {
        if (!Ember.get(this, `config.${w}Enabled`)) {
          Ember.set(this, `${w}NodeSelectors`, []);
        }
      });
      this.notifyPropertyChange('requestsCpu');
      this.notifyPropertyChange('requestsMemory');
      this.notifyPropertyChange('saveDisabled');
    }),
    gatewayTypeContent: Ember.computed(() => {
      return GATEWAY_TYPE.map(value => ({
        label: value,
        value
      }));
    }),
    kialiUrl: Ember.computed('cluster.id', 'templateVersion', function () {
      const {
        cluster: {
          id: clusterId
        },
        templateVersion
      } = this;
      let kialiPort = '-http:80';

      if (!Ember.isEmpty(templateVersion) && _semver.default.gte(templateVersion, ISTIO_BREAKING_VERSION)) {
        kialiPort = ':20001';
      }

      return `/k8s/clusters/${clusterId}/api/v1/namespaces/istio-system/services/http:kiali${kialiPort}/proxy/`;
    }),
    jaegerUrl: Ember.computed('cluster.id', function () {
      return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/istio-system/services/http:tracing:80/proxy/jaeger/search`;
    }),
    prometheusUrl: Ember.computed('cluster.id', function () {
      return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/`;
    }),
    saveDisabled: Ember.computed('mixerTelemetryWarning', 'enabled', 'istioWarning', 'pilotWarning', 'tracingWarning', 'gatewayWarning', 'mixerPolicyWarning', 'mixerWarning', function () {
      return [...WORKLOADS, 'mixer'].reduce((out, w) => {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(this, `config.${w}Enabled`)) {
          return out || Ember.get(this, `${w}Warning`) || false;
        } else if (w === 'mixerTelemetry') {
          return out || Ember.get(this, 'mixerTelemetryWarning') || false || Ember.get(this, 'mixerWarning');
        } else {
          return out || Ember.get(this, `${w}Warning`) || false;
        }
      }, false) || Ember.get(this, 'istioWarning') || false;
    }),
    canReuse: Ember.computed('monitoringApp.externalIdInfo.version', function () {
      const version = Ember.get(this, 'monitoringApp.externalIdInfo.version');
      const cannotReuseVersion = '0.0.3';
      return _semver.default.gt(_semver.default.coerce(version), _semver.default.coerce(cannotReuseVersion));
    }),
    istioWarning: Ember.computed('insufficientCpu', 'insufficientMemory', function () {
      let {
        insufficientCpu,
        insufficientMemory,
        intl,
        minCpu,
        minMemory,
        enabled
      } = this;
      const prefix = 'clusterIstioPage.insufficientSize.total';
      const action = enabled ? 'update' : 'enable';

      if (insufficientCpu && insufficientMemory) {
        return intl.t(`${prefix}.all`, {
          minCpu,
          minMemory,
          action
        });
      } else if (insufficientCpu) {
        return intl.t(`${prefix}.cpu`, {
          minCpu,
          action
        });
      } else if (insufficientMemory) {
        return intl.t(`${prefix}.memory`, {
          minMemory,
          action
        });
      }

      return;
    }),
    enabled: Ember.computed('app.state', function () {
      return !!Ember.get(this, 'app') && Ember.get(this, 'app.state') !== 'removing';
    }),
    nsNeedMove: Ember.computed('namespace.projectId', 'project.id', function () {
      const {
        namespace = {},
        project = {}
      } = this;
      return namespace.projectId !== project.id;
    }),
    requestsCpu: Ember.computed('config.mixerTelemetryRequestCpu', 'config.pilotRequestCpu', 'config.gatewayRequestCpu', 'config.tracingRequestCpu', 'config.mixerPolicyRequestCpu', function () {
      return WORKLOADS.filter(w => {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(this, `config.${w}Enabled`)) {
          return false;
        }

        return true;
      }).reduce((all, w) => {
        return all + parseInt(Ember.get(this, `config.${w}RequestCpu`) || 0);
      }, 0);
    }),
    requestsMemory: Ember.computed('config.mixerTelemetryRequestMemory', 'config.pilotRequestMemory', 'config.gatewayRequestMemory', 'config.tracingRequestMemory', 'config.mixerPolicyRequestMemory', function () {
      return WORKLOADS.filter(w => {
        if (['gateway', 'tracing', 'mixerPolicy'].includes(w) && !Ember.get(this, `config.${w}Enabled`)) {
          return false;
        }

        return true;
      }).reduce((all, w) => {
        return all + parseInt(Ember.get(this, `config.${w}RequestMemory`) || 0);
      }, 0);
    }),
    mixerSchedulableNodes: Ember.computed('mixerNodeSelectors.[]', 'cluster.nodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', function () {
      return this.getSchedulableNodes('mixer');
    }),
    insufficientMixerCpu: Ember.computed('mixerSchedulableNodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', 'config.mixerTelemetryRequestCpu', 'config.mixerPolicyRequestCpu', 'cluster.nodes.@each.{allocatable,requested}', function () {
      let reservation;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        reservation = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestCpu') || '0'));
      } else {
        reservation = parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0');
      }

      return this.getComponentInsufficient('mixer', 'cpu', reservation);
    }),
    insufficientMixerMemory: Ember.computed('mixerSchedulableNodes.@each.{allocatable,requested}', 'config.mixerPolicyEnabled', 'config.mixerTelemetryRequestMemory', 'config.mixerPolicyRequestMemory', 'cluster.nodes.@each.{allocatable,requested}', function () {
      let reservation;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        reservation = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestMemory') || '0'));
      } else {
        reservation = parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0');
      }

      return this.getComponentInsufficient('mixer', 'memory', reservation);
    }),
    mixerWarning: Ember.computed('config.{mixerPolicyEnabled,mixerPolicyRequestCpu,mixerPolicyRequestMemory,mixerTelemetryRequestCpu,mixerTelemetryRequestMemory}', 'insufficientMixerCpu', 'insufficientMixerMemory', 'insufficientMixerTelemetryCpu', 'insufficientMixerTelemetryMemory', 'mixerNodeSelectors.[]', function () {
      if ((Ember.get(this, 'mixerNodeSelectors') || []).length === 0) {
        return;
      }

      const displayName = Ember.get(this, 'config.mixerPolicyEnabled') ? Ember.get(this, 'intl').t('clusterIstioPage.telemetryAndPolicy') : undefined;
      let componentCpu;
      let componentMemory;

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        componentCpu = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestCpu') || '0'));
        componentMemory = Math.max(parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0'), parseInt(Ember.get(this, 'config.mixerPolicyRequestMemory') || '0'));
      } else {
        componentCpu = parseInt(Ember.get(this, 'config.mixerTelemetryRequestCpu') || '0');
        componentMemory = parseInt(Ember.get(this, 'config.mixerTelemetryRequestMemory') || '0');
      }

      return this.getComponentWarning('mixer', componentCpu, componentMemory, displayName);
    }),
    istioVersions: Ember.computed('availableVersions', 'templateLables', function () {
      const {
        availableVersions = [],
        templateLables = {}
      } = this;
      return availableVersions.map(v => {
        const key = `rancher.istio.v${v.value}`;
        return {
          label: `${v.label} (Istio ${templateLables[key]})`,
          value: v.value
        };
      });
    }),
    monitoringApps: Ember.computed('monitoringApp', function () {
      return [Ember.get(this, 'monitoringApp')];
    }),
    clusterLevelMinCpu: Ember.computed('cluster.{enableClusterMonitoring,nodes}', 'enableClusterMonitoring', function () {
      if (Ember.get(this, 'enableClusterMonitoring')) {
        return ISTIO_CLUSTER_CPU;
      } else {
        const allNodes = Ember.get(this, 'cluster.nodes') || [];
        const schedulableNodes = allNodes.filterBy('isUnschedulable', false);
        return ISTIO_CLUSTER_CPU + MONITORING_CLUSTER_CPU + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_CPU;
      }
    }),
    clusterLevelMinMemory: Ember.computed('cluster.enableClusterMonitoring', 'enableClusterMonitoring', 'scope.currentCluster.nodes', function () {
      if (Ember.get(this, 'enableClusterMonitoring')) {
        return ISTIO_CLUSTER_MEMORY;
      } else {
        const allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
        const schedulableNodes = allNodes.filterBy('isUnschedulable', false);
        return ISTIO_CLUSTER_MEMORY + MONITORING_CLUSTER_MEMORY + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_MEMORY;
      }
    }),
    canEnable: Ember.computed('cluster.isWindows', function () {
      if (Ember.get(this, 'cluster.isWindows')) {
        return false;
      } else {
        return true;
      }
    }),

    willSavePersistence(answers, component) {
      PERSISTENCE_KEYS.map(k => {
        const key = `${component}.persistence.${k}`;
        const useStorageClass = Ember.get(this, `use${(0, _util.ucFirst)(component)}StorageClass`);

        if (['storageClass', 'size'].includes(k) && useStorageClass) {
          answers[key] = Ember.get(this, key);
        }

        if (k === 'existingClaim' && !useStorageClass) {
          answers[key] = Ember.get(this, key);
        }
      });
    },

    validate() {
      const errors = [];
      ['pilot', 'mixerTelemetry'].map(w => {
        errors.pushObjects(this.validateLimitAndRequest(w));
      });

      if (Ember.get(this, 'config.gatewayEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('gateway'));
      }

      if (Ember.get(this, 'config.tracingEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('tracing'));
      }

      if (Ember.get(this, 'config.mixerPolicyEnabled')) {
        errors.pushObjects(this.validateLimitAndRequest('mixerPolicy'));
      }

      ['traceSampling'].map(field => {
        if (!Ember.get(this, `config.${field}`)) {
          errors.pushObject((0, _util.requiredError)(`clusterIstioPage.config.${field}.label`));
        }
      });

      if (Ember.get(this, 'config.gatewayEnabled') && Ember.get(this, 'config.gatewayType') === 'NodePort') {
        ['http2Port', 'httpsPort'].map(field => {
          if (!Ember.get(this, `config.${field}`)) {
            errors.pushObject((0, _util.requiredError)(`clusterIstioPage.config.${field}.label`));
          }
        });
      }

      return errors;
    },

    validatePV(component) {
      const {
        intl,
        storageClasses = []
      } = this;
      const errors = [];
      const defaultStorageClasses = storageClasses.filter(s => s.annotations && (s.annotations['storageclass.kubernetes.io/is-default-class'] === 'true' || s.annotations['storageclass.beta.kubernetes.io/is-default-class'] === 'true'));

      if (Ember.get(this, `use${(0, _util.ucFirst)(component)}StorageClass`)) {
        if (defaultStorageClasses.length === 0 && !Ember.get(this, `${component}.persistence.storageClass`)) {
          const emptyError = intl.t('globalRegistryPage.config.storageClass.emptyError');
          errors.pushObject(emptyError);
        }

        if (!Ember.get(this, `${component}.persistence.size`)) {
          errors.pushObject(intl.t('globalRegistryPage.config.storageClass.sizeRequired', {
            component: (0, _util.ucFirst)(component)
          }));
        }
      } else if (!Ember.get(this, `${component}.persistence.existingClaim`)) {
        errors.pushObject((0, _util.requiredError)(`clusterIstioPage.existingClaim.label`, {
          component: (0, _util.ucFirst)(component)
        }));
      }

      return errors;
    },

    initConfig() {
      const config = {
        tracingEnabled: true,
        kialiEnabled: true,
        autoInject: true,
        mtlsEnabled: false,
        gatewayType: 'NodePort',
        gatewayEnabled: false,
        http2Port: DEFAULT_HTTP2_PORT,
        httpsPort: DEFAULT_HTTPS_PORT,
        mixerTelemetryRequestCpu: 1000,
        mixerTelemetryLimitCpu: 4800,
        mixerTelemetryRequestMemory: 1024,
        mixerTelemetryLimitMemory: 4096,
        traceSampling: 1,
        mixerPolicyEnabled: true,
        pilotRequestCpu: 500,
        pilotRequestMemory: 2048,
        pilotLimitCpu: 1000,
        pilotLimitMemory: 4096,
        gatewayRequestCpu: 100,
        gatewayLimitCpu: 2000,
        gatewayRequestMemory: 128,
        gatewayLimitMemory: 1024,
        tracingRequestCpu: 100,
        tracingLimitCpu: 500,
        tracingRequestMemory: 100,
        tracingLimitMemory: 1024,
        mixerPolicyRequestCpu: 1000,
        mixerPolicyLimitCpu: 4800,
        mixerPolicyRequestMemory: 1024,
        mixerPolicyLimitMemory: 4096
      };
      Ember.setProperties(this, {
        config,
        allowSystemGroup: false
      });
    },

    initWorkloads() {
      WORKLOADS.map(w => {
        Ember.defineProperty(this, `${w}SchedulableNodes`, Ember.computed(`${w}NodeSelectors.[]`, 'cluster.nodes.@each.{allocatable,requested}', `config.${w}Enabled`, () => {
          return this.getSchedulableNodes(w);
        }));
        Ember.defineProperty(this, `insufficient${(0, _util.ucFirst)(w)}Cpu`, Ember.computed(`${w}SchedulableNodes.@each.{allocatable,requested}`, `config.${w}RequestCpu`, 'cluster.nodes.@each.{allocatable,requested}', () => {
          return this.getComponentInsufficient(w, 'cpu');
        }));
        Ember.defineProperty(this, `insufficient${(0, _util.ucFirst)(w)}Memory`, Ember.computed(`${w}SchedulableNodes.@each.{allocatable,requested}`, `config.${w}RequestMemory`, 'cluster.nodes.@each.{allocatable,requested}', () => {
          return this.getComponentInsufficient(w, 'memory');
        }));
        Ember.defineProperty(this, `${w}Warning`, Ember.computed(`insufficient${(0, _util.ucFirst)(w)}Cpu`, `insufficient${(0, _util.ucFirst)(w)}Memory`, () => {
          return this.getComponentWarning(w);
        }));
      });
    },

    initAnswers() {
      let customAnswers = {};
      const answers = Ember.get(this, 'app.answers') || {};
      const answerKeys = Object.keys(ANSWER_TO_CONFIG) || [];
      const mixerNodeSelector = {};
      const pilotNodeSelector = {};
      const gatewayNodeSelector = {};
      const tracingNodeSelector = {};
      const loadBalancerSourceRanges = [];
      Object.keys(answers).filter(key => key.startsWith(MIXER_NODE_SELECTOR_PREFIX)).map(k => {
        let value = answers[k] || '';
        const key = k.replace(MIXER_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        mixerNodeSelector[key] = value;
      });
      Object.keys(answers).filter(key => key.startsWith(PILOT_NODE_SELECTOR_PREFIX)).map(k => {
        let value = answers[k] || '';
        const key = k.replace(PILOT_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        pilotNodeSelector[key] = value;
      });
      Object.keys(answers).filter(key => key.startsWith(GATEWAY_NODE_SELECTOR_PREFIX)).map(k => {
        let value = answers[k] || '';
        const key = k.replace(GATEWAY_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        gatewayNodeSelector[key] = value;
      });
      Object.keys(answers).filter(key => key.startsWith(TRACING_NODE_SELECTOR_PREFIX)).map(k => {
        let value = answers[k] || '';
        const key = k.replace(TRACING_NODE_SELECTOR_PREFIX, '').replace(/\\\./g, '.');
        tracingNodeSelector[key] = value;
      });
      Object.keys(answers).filter(key => key.startsWith(`${LB_SOURCE_RANGES}[`)).map(k => {
        loadBalancerSourceRanges.pushObject(answers[k]);
      });
      const pilotTolerations = [];
      const mixerTolerations = [];
      const gatewayTolerations = [];
      const tracingTolerations = [];
      const pilotTolerationKeys = Object.keys(answers).filter(key => key.startsWith(PILOT_TOLERATION));
      const pilotTolerationIndexs = pilotTolerationKeys.map(k => {
        return k.replace(`${PILOT_TOLERATION}[`, '').split('].').get('firstObject');
      }).uniq();
      pilotTolerationIndexs.map(idx => {
        pilotTolerations.pushObject({
          key: answers[`${PILOT_TOLERATION}[${idx}].key`] || '',
          operator: answers[`${PILOT_TOLERATION}[${idx}].operator`] || '',
          value: answers[`${PILOT_TOLERATION}[${idx}].value`] || '',
          effect: answers[`${PILOT_TOLERATION}[${idx}].effect`] || '',
          tolerationSeconds: answers[`${PILOT_TOLERATION}[${idx}].tolerationSeconds`] || ''
        });
      });
      const mixerTolerationKeys = Object.keys(answers).filter(key => key.startsWith(MIXER_TOLERATION));
      const mixerTolerationIndexs = mixerTolerationKeys.map(k => {
        return k.replace(`${MIXER_TOLERATION}[`, '').split('].').get('firstObject');
      }).uniq();
      mixerTolerationIndexs.map(idx => {
        mixerTolerations.pushObject({
          key: answers[`${MIXER_TOLERATION}[${idx}].key`] || '',
          operator: answers[`${MIXER_TOLERATION}[${idx}].operator`] || '',
          value: answers[`${MIXER_TOLERATION}[${idx}].value`] || '',
          effect: answers[`${MIXER_TOLERATION}[${idx}].effect`] || '',
          tolerationSeconds: answers[`${MIXER_TOLERATION}[${idx}].tolerationSeconds`] || ''
        });
      });
      const gatewayTolerationKeys = Object.keys(answers).filter(key => key.startsWith(GATEWAY_TOLERATION));
      const gatewayTolerationIndexs = gatewayTolerationKeys.map(k => {
        return k.replace(`${GATEWAY_TOLERATION}[`, '').split('].').get('firstObject');
      }).uniq();
      gatewayTolerationIndexs.map(idx => {
        gatewayTolerations.pushObject({
          key: answers[`${GATEWAY_TOLERATION}[${idx}].key`] || '',
          operator: answers[`${GATEWAY_TOLERATION}[${idx}].operator`] || '',
          value: answers[`${GATEWAY_TOLERATION}[${idx}].value`] || '',
          effect: answers[`${GATEWAY_TOLERATION}[${idx}].effect`] || '',
          tolerationSeconds: answers[`${GATEWAY_TOLERATION}[${idx}].tolerationSeconds`] || ''
        });
      });
      const tracingTolerationKeys = Object.keys(answers).filter(key => key.startsWith(TRACING_TOLERATION));
      const tracingTolerationIndexs = tracingTolerationKeys.map(k => {
        return k.replace(`${TRACING_TOLERATION}[`, '').split('].').get('firstObject');
      }).uniq();
      tracingTolerationIndexs.map(idx => {
        tracingTolerations.pushObject({
          key: answers[`${TRACING_TOLERATION}[${idx}].key`] || '',
          operator: answers[`${TRACING_TOLERATION}[${idx}].operator`] || '',
          value: answers[`${TRACING_TOLERATION}[${idx}].value`] || '',
          effect: answers[`${TRACING_TOLERATION}[${idx}].effect`] || '',
          tolerationSeconds: answers[`${TRACING_TOLERATION}[${idx}].tolerationSeconds`] || ''
        });
      });
      this.updateCpuMemoryPreRequest();
      Ember.setProperties(this, {
        mixerNodeSelector,
        pilotNodeSelector,
        gatewayNodeSelector,
        tracingNodeSelector,
        loadBalancerSourceRanges,
        'config.http2Port': answers[HTTP2_PORT] || DEFAULT_HTTP2_PORT,
        'config.httpsPort': answers[HTTPS_PORT] || DEFAULT_HTTPS_PORT,
        pilotTolerations,
        mixerTolerations,
        gatewayTolerations,
        tracingTolerations
      });
      this.initMembers();
      Object.keys(answers).forEach((key = '') => {
        if (key.startsWith(MIXER_NODE_SELECTOR_PREFIX) || key.startsWith(`${LB_SOURCE_RANGES}[`) || key.startsWith(PILOT_NODE_SELECTOR_PREFIX) || key.startsWith(GATEWAY_NODE_SELECTOR_PREFIX) || key.startsWith(TRACING_NODE_SELECTOR_PREFIX) || key.startsWith(`${MEMBERS}[`) || key.startsWith(`${PILOT_TOLERATION}`) || key.startsWith(`${MIXER_TOLERATION}`) || key.startsWith(`${GATEWAY_TOLERATION}`) || key.startsWith(`${TRACING_TOLERATION}`)) {
          return;
        }

        if (Object.keys(NODE_PORT_KEYS).includes(key) || key === HTTP2_PORT || key === HTTPS_PORT) {
          return;
        }

        if (answerKeys.includes(key)) {
          let value;

          switch (key) {
            case PILOT_REQUEST_CPU:
            case MIXER_REQUEST_CPU:
            case MIXER_LIMIT_CPU:
            case PILOT_LIMIT_CPU:
            case TRACING_REQUEST_CPU:
            case TRACING_LIMIT_CPU:
            case GATEWAY_REQUEST_CPU:
            case GATEWAY_LIMIT_CPU:
            case POLICY_REQUEST_CPU:
            case POLICY_LIMIT_CPU:
              value = (0, _util.convertToMillis)(answers[key] || '0');
              break;

            case PILOT_REQUEST_MEM:
            case PILOT_LIMIT_MEM:
            case MIXER_REQUEST_MEM:
            case MIXER_LIMIT_MEM:
            case TRACING_REQUEST_MEM:
            case TRACING_LIMIT_MEM:
            case GATEWAY_REQUEST_MEM:
            case GATEWAY_LIMIT_MEM:
            case POLICY_REQUEST_MEM:
            case POLICY_LIMIT_MEM:
              value = (0, _parseUnit.parseSi)(answers[key] || '0', 1024) / 1048576;
              break;

            default:
              value = answers[key];
          }

          return Ember.set(this, `config.${ANSWER_TO_CONFIG[key]}`, value);
        }

        customAnswers[key] = answers[key];
        Ember.setProperties(this, {
          customAnswers
        });
      });
    },

    getEnalbedWorkloads(answers) {
      const out = [];

      if (answers['pilot.enabled'] === 'true') {
        out.push('pilot');
      }

      if (answers['mixer.enabled'] === 'true') {
        out.push('mixer.telemetry');
      }

      if (answers['mixer.policy.enabled'] === 'true') {
        out.push('mixer.policy');
      }

      if (answers['gateways.enabled'] === 'true') {
        out.push('gateways.istio-ingressgateway');
      }

      if (answers['tracing.enabled'] === 'true') {
        out.push('tracing');
      }

      return out;
    },

    doneSaving() {
      this.updateCpuMemoryPreRequest();
    },

    initMembers() {
      const {
        answers = {}
      } = Ember.get(this, 'app');
      const {
        globalStore
      } = this;

      if (answers[`${MEMBERS}[0].name`] === MEMBER_SYSYTEM && answers[`${MEMBERS}[0].kind`] === 'Group') {
        Ember.set(this, 'allowSystemGroup', true);
      } else {
        Ember.set(this, 'allowSystemGroup', false);
        const users = globalStore.all('user');
        const keys = Object.keys(answers).filter((key = '') => /^global.members\[\d\].name$/g.test(key));
        const members = (keys || []).filter(key => {
          const kindKey = key.replace('.name', '.kind');
          const kind = answers[kindKey];
          return !(kind === MEMBER_GROUP && answers[key] === MEMBER_SYSYTEM);
        }).map(key => {
          const kindKey = key.replace('.name', '.kind');
          const kind = answers[kindKey];
          let id = answers[key];

          if (kind === MEMBER_USER) {
            const filtered = users.filter(u => (u.principalIds || []).includes(`local://${id}`)).get('firstObject');

            if (filtered && filtered.principalIds) {
              const principalIds = filtered.principalIds || [];

              if (principalIds.length > 1) {
                id = principalIds.filter(f => f !== `local://${id}`).get('firstObject');
              } else {
                id = filtered.principalIds.get('firstObject');
              }
            }
          }

          return Ember.get(this, 'globalStore').createRecord({
            type: 'member',
            id
          });
        });
        const membersPromises = (members || []).map(m => globalStore.find('principal', m.id));
        Ember.RSVP.allSettled(membersPromises).then(res => {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          Ember.set(this, 'members', res.map(xhr => {
            if (xhr.state === 'fulfilled') {
              return xhr.value;
            }
          }));
        });
      }
    },

    enableMonitoring() {
      const resource = Ember.get(this, 'cluster');
      let answers = {};
      answers['operator-init.enabled'] = 'true';
      answers['exporter-node.enabled'] = 'true';
      answers['exporter-node.ports.metrics.port'] = '9796';
      answers['exporter-kubelets.https'] = `${!(Ember.get(this, 'scope.currentCluster.isGKE') || Ember.get(this, 'scope.currentCluster.isAKS'))}`;
      answers['exporter-node.resources.limits.cpu'] = '200m';
      answers['exporter-node.resources.limits.memory'] = '200Mi';
      answers['operator.resources.limits.memory'] = '500Mi';
      answers['prometheus.retention'] = '12h';
      answers['grafana.persistence.enabled'] = 'false';
      answers['prometheus.persistence.enabled'] = 'false';
      answers['prometheus.persistence.storageClass'] = 'default';
      answers['grafana.persistence.storageClass'] = 'default';
      answers['grafana.persistence.size'] = '10Gi';
      answers['prometheus.persistence.size'] = '50Gi';
      answers['prometheus.resources.core.requests.cpu'] = '750m';
      answers['prometheus.resources.core.limits.cpu'] = '1000m';
      answers['prometheus.resources.core.requests.memory'] = '750Mi';
      answers['prometheus.resources.core.limits.memory'] = '1000Mi';
      answers['prometheus.persistent.useReleaseName'] = 'true';
      return resource.doAction('enableMonitoring', {
        answers
      });
    }

  });

  _exports.default = _default;
});
define("istio/components/istio-catalog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "d+MFfNGL",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[6,[37,6],[[35,72,[\"currentCluster\",\"isReady\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,6],[[35,72,[\"currentCluster\",\"isK8s21Plus\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-error\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,0],[\"banner.istio21\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,0],[\"banner.istio\"],[[\"dashboardLink\",\"docsBase\",\"htmlSafe\"],[[35,72,[\"dashboardLink\"]],[35,72,[\"docsBase\"]],true]]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"\\n    \"],[1,[30,[36,0],[\"clusterIstioPage.header\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,8]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,6],[[30,[36,10],[[35,9],[35,63]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-info\",[30,[36,0],[\"clusterIstioPage.enabled\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,9]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-warning\",[30,[36,0],[\"clusterIstioPage.notReady\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-info\",[30,[36,0],[\"clusterIstioPage.disabled\"],null]]]]],[2,\"\\n  \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[30,[36,10],[[35,9],[35,63]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[1,[30,[36,59],null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.kiali.label\",[35,58],\"kiali\"]]]],[2,\"\\n      \"],[1,[30,[36,59],null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.jaeger.label\",[35,60],\"jaeger\"]]]],[2,\"\\n      \"],[1,[30,[36,59],null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.grafana.label\",[35,61,[\"istioUrl\"]],\"grafana\"]]]],[2,\"\\n      \"],[1,[30,[36,59],null,[[\"label\",\"url\",\"logo\"],[\"clusterIstioPage.links.prometheus.label\",[35,62],\"prometheus-icon\"]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-10 mb-10\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"clusterIstioPage.version\"],null]],[2,\"\\n\"],[6,[37,6],[[30,[36,10],[[35,9],[35,57],[35,64],[30,[36,65],[[35,57],[35,64]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"span\"],[14,0,\"bg-warning pt-0 pb-0 pl-5 pr-5\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"monitoringPage.upgradeAvailable\"],[[\"version\"],[[35,57]]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[12],[2,\"\\n        \"],[1,[30,[36,36],null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[35,66],[35,64]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row mt-10 mb-10\"],[12],[2,\"\\n\"],[6,[37,4],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n           \\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[12],[2,\"\\n          \"],[1,[30,[36,54],null,[[\"type\",\"checked\",\"id\",\"disabled\"],[\"checkbox\",[35,55],\"input-enable-monitoring\",true]]]],[2,\"\\n          \"],[1,[30,[36,0],[\"clusterIstioPage.enableMonitoring.label\"],null]],[2,\"\\n\"],[6,[37,56],null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"baseClass\"],[\"tooltip-basic\",[30,[36,0],[\"clusterIstioPage.goToMonitoring\"],[[\"clusterId\",\"htmlSafe\"],[[35,1,[\"id\"]],true]]],\"tooltip-static\",\"tooltip-base\",\"text-left\"]],[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"span\"],[12],[2,\"\\n              \"],[10,\"i\"],[14,0,\"icon icon-help icon-blue\"],[12],[13],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,6],[[30,[36,10],[[35,9],[35,67]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,54],null,[[\"type\",\"checked\"],[\"checkbox\",[35,53]]]]],[2,\"\\n          \"],[1,[30,[36,0],[\"newCatalog.forceUpgrade\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"],[6,[37,68],null,null,[[\"default\"],[{\"statements\":[[6,[37,52],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,0],[\"clusterIstioPage.members.title\"],null],[30,[36,0],[\"clusterIstioPage.members.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],true]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,51],null,[[\"selection\",\"value\"],[[35,50],true]]]],[2,\"\\n          \"],[1,[30,[36,0],[\"clusterIstioPage.allowSystemGroup.true\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,51],null,[[\"selection\",\"value\"],[[35,50],false]]]],[2,\"\\n          \"],[1,[30,[36,0],[\"clusterIstioPage.allowSystemGroup.false\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,4],[[35,50]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,49],null,[[\"readOnly\",\"members\",\"addAuthorizedPrincipal\",\"removeMember\",\"searchOnlyGroups\",\"includeLocal\"],[false,[35,48],[30,[36,7],[[32,0],\"addAuthorizedPrincipal\"],null],[30,[36,7],[[32,0],\"removeMember\"],null],true,false]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,52],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,0],[\"clusterIstioPage.pilot.title\"],null],[30,[36,0],[\"clusterIstioPage.pilot.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],false]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,29],null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"Pilot\",[35,17,[\"pilotRequestCpu\"]],[35,17,[\"pilotRequestMemory\"]],[35,17,[\"pilotLimitCpu\"]],[35,17,[\"pilotLimitMemory\"]]]]]],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"input-trace-sampling\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterIstioPage.config.traceSampling.label\"],null]],[2,\"\\n            \"],[1,[34,27]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,44],null,[[\"min\",\"max\",\"id\",\"value\",\"classNames\",\"placeholder\",\"precision\"],[\"0\",\"100\",\"input-trace-sampling\",[35,17,[\"traceSampling\"]],\"form-control\",[30,[36,0],[\"clusterIstioPage.config.traceSampling.placeholder\"],null],2]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"units.percent\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Pilot\"]]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,22],null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[30,[36,7],[[32,0],[30,[36,21],[[35,46]],null]],null],[35,45],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[1,[30,[36,34],null,[[\"editing\",\"tolerate\",\"title\"],[true,[35,47],[30,[36,0],[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Pilot\"]]]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,52],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,0],[\"clusterIstioPage.mixer.title\"],null],[30,[36,0],[\"clusterIstioPage.mixer.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],false]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,29],null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"MixerTelemetry\",[35,17,[\"mixerTelemetryRequestCpu\"]],[35,17,[\"mixerTelemetryRequestMemory\"]],[35,17,[\"mixerTelemetryLimitCpu\"]],[35,17,[\"mixerTelemetryLimitMemory\"]]]]]],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"input-mixer-policy-enabled\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterIstioPage.config.mixerPolicyEnabled.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,37],null,[[\"id\",\"value\",\"classNames\"],[\"input-mixer-policy-enabled\",[35,17,[\"mixerPolicyEnabled\"]],\"form-control\"]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,17,[\"mixerPolicyEnabled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,29],null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"MixerPolicy\",[35,17,[\"mixerPolicyRequestCpu\"]],[35,17,[\"mixerPolicyRequestMemory\"]],[35,17,[\"mixerPolicyLimitCpu\"]],[35,17,[\"mixerPolicyLimitMemory\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Mixer\"]]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,22],null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[30,[36,7],[[32,0],[30,[36,21],[[35,42]],null]],null],[35,41],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[1,[30,[36,34],null,[[\"editing\",\"tolerate\",\"title\"],[true,[35,43],[30,[36,0],[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Mixer\"]]]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,52],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,0],[\"clusterIstioPage.tracing.title\"],null],[30,[36,0],[\"clusterIstioPage.tracing.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],false]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterIstioPage.config.tracingEnabled.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,37],null,[[\"value\",\"classNames\"],[[35,17,[\"tracingEnabled\"]],\"form-control\"]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,17,[\"tracingEnabled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,29],null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"Tracing\",[35,17,[\"tracingRequestCpu\"]],[35,17,[\"tracingRequestMemory\"]],[35,17,[\"tracingLimitCpu\"]],[35,17,[\"tracingLimitMemory\"]]]]]],[2,\"\\n        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Tracing\"]]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,22],null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[30,[36,7],[[32,0],[30,[36,21],[[35,39]],null]],null],[35,38],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n            \"],[1,[30,[36,34],null,[[\"editing\",\"tolerate\",\"title\"],[true,[35,40],[30,[36,0],[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Tracing\"]]]]]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,52],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,0],[\"clusterIstioPage.ingress.title\"],null],[30,[36,0],[\"clusterIstioPage.ingress.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],false]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterIstioPage.config.gatewayEnabled.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,37],null,[[\"value\",\"classNames\"],[[35,17,[\"gatewayEnabled\"]],\"form-control\"]]]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,6],[[35,17,[\"gatewayEnabled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"input-gateway-type-select\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"clusterIstioPage.config.gatewayType.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,36],null,[[\"id\",\"class\",\"content\",\"value\"],[\"input-gateway-type-select\",\"form-control\",[35,35],[35,17,[\"gatewayType\"]]]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,17,[\"gatewayEnabled\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,6],[[30,[36,26],[[35,17,[\"gatewayType\"]],\"NodePort\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"input-http2-port\"],[12],[2,\"\\n                \"],[1,[30,[36,0],[\"clusterIstioPage.config.http2Port.label\"],null]],[2,\"\\n                \"],[1,[34,27]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,28],null,[[\"min\",\"max\",\"step\",\"id\",\"value\",\"classNames\"],[\"30000\",\"32767\",\"1\",\"input-http2-port\",[35,17,[\"http2Port\"]],\"form-control\"]]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"input-https-port\"],[12],[2,\"\\n                \"],[1,[30,[36,0],[\"clusterIstioPage.config.httpsPort.label\"],null]],[2,\"\\n                \"],[1,[34,27]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,28],null,[[\"min\",\"max\",\"step\",\"id\",\"value\",\"classNames\"],[\"30000\",\"32767\",\"1\",\"input-https-port\",[35,17,[\"httpsPort\"]],\"form-control\"]]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,26],[[35,17,[\"gatewayType\"]],\"LoadBalancer\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"input-load-balancer-ip\"],[12],[2,\"\\n                \"],[1,[30,[36,0],[\"clusterIstioPage.config.loadBalancerIP.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,23],null,[[\"value\",\"id\",\"placeholder\"],[[35,17,[\"loadBalancerIP\"]],\"input-load-balancer-ip\",[30,[36,0],[\"clusterIstioPage.config.loadBalancerIP.placeholder\"],null]]]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[1,[30,[36,25],null,[[\"initialValues\",\"addActionLabel\",\"valueLabel\",\"valuePlaceholder\",\"changed\",\"addButtonClass\"],[[35,24],\"editDns.loadBalancerSourceRanges.addActionLabel\",\"editDns.loadBalancerSourceRanges.value\",\"editDns.loadBalancerSourceRanges.placeholder\",[30,[36,7],[[32,0],[30,[36,21],[[35,24]],null]],null],\"btn bg-link icon-btn\"]]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n        \"],[1,[30,[36,29],null,[[\"component\",\"requestCpu\",\"requestMemory\",\"limitCpu\",\"limitMemory\"],[\"IngressGateway\",[35,17,[\"gatewayRequestCpu\"]],[35,17,[\"gatewayRequestMemory\"]],[35,17,[\"gatewayLimitCpu\"]],[35,17,[\"gatewayLimitMemory\"]]]]]],[2,\"\\n\\n        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"clusterIstioPage.nodeSelector.helpText\"],[[\"component\"],[\"Gateway\"]]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,22],null,[[\"changedArray\",\"initialMap\",\"allowEmptyValue\",\"addActionLabel\"],[[30,[36,7],[[32,0],[30,[36,21],[[35,31]],null]],null],[35,30],true,\"clusterIstioPage.nodeSelector.addSelectorLabel\"]]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n            \"],[1,[30,[36,34],null,[[\"editing\",\"tolerate\",\"title\"],[true,[35,33],[30,[36,0],[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[[30,[36,32],[\"IngressGateway\"],null]]]]]]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,52],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,0],[\"clusterIstioPage.customAnswers.title\"],null],[30,[36,0],[\"clusterIstioPage.customAnswers.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],false]],[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"banner-message\",[],[[\"@color\",\"@icon\",\"@message\"],[\"bg-warning\",\"icon-alert\",[30,[36,0],[\"clusterIstioPage.customAnswers.warning\"],[[\"appName\",\"htmlSafe\"],[[35,19,[\"appName\"]],true]]]]],null],[2,\"\\n      \"],[1,[30,[36,22],null,[[\"initialMap\",\"changed\",\"allowEmptyValue\",\"addInitialEmptyRow\",\"editing\",\"header\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[[35,20],[30,[36,7],[[32,0],[30,[36,21],[[35,20]],null]],null],true,true,true,[30,[36,0],[\"newCatalog.answers.label\"],null],\"newCatalog.answers.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"newContainer.environment.valuePlaceholder\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]],[6,[37,6],[[30,[36,69],[[35,14],[35,16],[35,13],[35,12],[30,[36,10],[[35,11],[35,17,[\"mixerPolicyEnabled\"]]],null],[35,15],[35,18]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[6,[37,6],[[35,18]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"p\"],[12],[1,[34,18]],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"p\"],[12],[1,[34,14]],[13],[2,\"\\n        \"],[10,\"p\"],[12],[1,[34,15]],[13],[2,\"\\n        \"],[10,\"p\"],[12],[1,[34,16]],[13],[2,\"\\n\"],[6,[37,6],[[35,17,[\"tracingEnabled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[12],[1,[34,13]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,6],[[35,17,[\"gatewayEnabled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[12],[1,[34,12]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,6],[[35,17,[\"mixerPolicyEnabled\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[12],[1,[34,11]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,71],null,[[\"errors\"],[[35,70]]]]],[2,\"\\n\\n\"],[6,[37,6],[[30,[36,10],[[30,[36,73],[[35,74]],null],[30,[36,73],[[35,9]],null],[35,5],[30,[36,73],[[35,72,[\"currentCluster\",\"isMonitoringReady\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"banner-message\",[],[[\"@color\",\"@icon\",\"@message\"],[\"bg-warning\",\"icon-alert\",[30,[36,0],[\"clusterIstioPage.monitoringNotDeployed\"],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,76],null,[[\"saveDisabled\",\"editing\",\"createLabel\",\"save\",\"saved\",\"cancelDisabled\"],[[35,74],[35,9],\"clusterIstioPage.enableActionLabel\",[30,[36,7],[[32,0],\"save\"],null],[35,75],true]],[[\"default\"],[{\"statements\":[[6,[37,6],[[30,[36,10],[[35,9],[35,8]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[11,\"button\"],[24,0,\"btn bg-error\"],[24,4,\"button\"],[4,[38,7],[[32,0],\"disable\"],null],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"clusterIstioPage.disable\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,5]],null,[[\"default\"],[{\"statements\":[[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-warning\",[30,[36,0],[\"clusterIstioPage.upgradeMonitoring\"],[[\"clusterId\",\"htmlSafe\"],[[35,1,[\"id\"]],true]]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[6,[37,6],[[35,1,[\"isWindows\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[30,[36,0],[\"windowsCluster.istio\"],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"cluster\",\"banner-message\",\"canReuse\",\"unless\",\"enableClusterMonitoring\",\"if\",\"action\",\"canEnable\",\"enabled\",\"and\",\"mixerPolicyWarning\",\"gatewayWarning\",\"tracingWarning\",\"pilotWarning\",\"mixerWarning\",\"mixerTelemetryWarning\",\"config\",\"istioWarning\",\"settings\",\"customAnswers\",\"mut\",\"form-key-value\",\"schema/input-string\",\"loadBalancerSourceRanges\",\"form-value-array\",\"eq\",\"field-required\",\"input-integer\",\"form-reservation\",\"gatewayNodeSelector\",\"gatewayNodeSelectors\",\"parse-camelcase\",\"gatewayTolerations\",\"scheduling-toleration\",\"gatewayTypeContent\",\"new-select\",\"schema/input-boolean\",\"tracingNodeSelector\",\"tracingNodeSelectors\",\"tracingTolerations\",\"mixerNodeSelector\",\"mixerNodeSelectors\",\"mixerTolerations\",\"input-float\",\"pilotNodeSelector\",\"pilotNodeSelectors\",\"pilotTolerations\",\"members\",\"form-members-catalog-access\",\"allowSystemGroup\",\"radio-button\",\"accordion-list-item\",\"forceUpgrade\",\"input\",\"enableMonitoring\",\"tooltip-element\",\"latestVersion\",\"kialiUrl\",\"istio-component-status\",\"jaegerUrl\",\"grafana\",\"prometheusUrl\",\"ready\",\"templateVersion\",\"not-eq\",\"istioVersions\",\"upgradeAvailable\",\"accordion-list\",\"or\",\"errors\",\"top-errors\",\"scope\",\"not\",\"saveDisabled\",\"saved\",\"save-cancel\"]}",
    "moduleName": "istio/components/istio-catalog/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-component-status/component", ["exports", "istio/components/istio-component-status/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    classNames: 'col span-3 mt-0 mb-0',
    label: null,
    logo: null,
    url: null
  });

  _exports.default = _default;
});
define("istio/components/istio-component-status/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DWbI0PAU",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,4],null,[[\"color\",\"showIcon\"],[\"bg-success mt-0 mb-0\",false]],[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"p\"],[14,0,\"text-left\"],[12],[2,\"\\n    \"],[1,[30,[36,1],[[35,0]],null]],[2,\"\\n    \"],[10,\"span\"],[14,0,\"pull-right\"],[14,\"role\",\"button\"],[12],[2,\"\\n      \"],[10,\"a\"],[15,6,[34,2]],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n        \"],[10,\"div\"],[15,0,[34,3]],[12],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"label\",\"t\",\"url\",\"logo\",\"banner-message\"]}",
    "moduleName": "istio/components/istio-component-status/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-gateway-select/component", ["exports", "istio/components/istio-gateway-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    namespaceId: null,
    value: null,
    showLabel: true,
    gateways: null,

    init() {
      this._super(...arguments);

      Ember.set(this, 'gateways', this.store.all('gateway'));
    },

    gatewayChoices: Ember.computed('gateways.@each.name', 'namespaceId', function () {
      return this.gateways.filterBy('namespaceId', this.namespaceId).map(v => {
        const name = v.name;
        return {
          label: name,
          value: name
        };
      }).sortBy('label');
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-gateway-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "o+stktZy",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,4],[[35,3]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"label\"],[15,\"for\",[31,[[30,[36,1],[[35,0],\"-form-gateway-select\"],null]]]],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n    \"],[1,[30,[36,2],[\"generic.gateway\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[1,[30,[36,8],null,[[\"id\",\"value\",\"content\",\"inputClass\",\"allowCustom\",\"placeholder\",\"prompt\"],[[30,[36,1],[[35,0],\"-form-gateway-select\"],null],[35,7],[35,6],[35,5],true,[30,[36,2],[\"cruVirtualService.gateways.placeholder\"],null],[30,[36,2],[\"cruVirtualService.gateways.prompt\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"elementId\",\"concat\",\"t\",\"showLabel\",\"if\",\"inputClass\",\"gatewayChoices\",\"value\",\"searchable-select\"]}",
    "moduleName": "istio/components/istio-gateway-select/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-host-select/component", ["exports", "istio/components/istio-host-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    hostRequired: true,
    namespaceId: null,
    value: null,
    showLabel: true,
    hosts: null,

    init() {
      this._super(...arguments);

      Ember.set(this, 'hosts', Ember.get(this, 'store').all('service'));
    },

    hostChoices: Ember.computed('hosts.@each.name', 'namespaceId', function () {
      return Ember.get(this, 'hosts').filter(host => Ember.get(host, 'selector.app')).filterBy('namespaceId', Ember.get(this, 'namespaceId')).map(v => {
        const name = Ember.get(v, 'name');
        return {
          label: name,
          value: name
        };
      }).sortBy('label');
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-host-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NKdtXc+0",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,5],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-form-host-select\"],null]]]],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n    \"],[1,[30,[36,3],[\"generic.host\"],null]],[6,[37,5],[[35,4]],null,[[\"default\"],[{\"statements\":[[1,[34,0]]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[1,[30,[36,10],null,[[\"id\",\"value\",\"content\",\"inputClass\",\"allowCustom\",\"placeholder\",\"prompt\"],[[30,[36,2],[[35,1],\"-form-host-select\"],null],[35,9],[35,8],[35,7],true,[30,[36,3],[\"generic.istioHostPlaceholder\"],null],[30,[36,3],[\"formIstioHost.prompt\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"field-required\",\"elementId\",\"concat\",\"t\",\"hostRequired\",\"if\",\"showLabel\",\"inputClass\",\"hostChoices\",\"value\",\"searchable-select\"]}",
    "moduleName": "istio/components/istio-host-select/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-nav/component", ["exports", "istio/components/istio-nav/template", "ui/utils/constants"], function (_exports, _template, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    grafana: Ember.inject.service(),
    istio: Ember.inject.service(),
    features: Ember.inject.service(),
    layout: _template.default,
    showVirtualServiceUI: false,
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),
    pageScope: Ember.computed.alias('scope.currentPageScope'),

    init() {
      this._super(...arguments);

      Ember.set(this, 'showVirtualServiceUI', this.features.isFeatureEnabled(_constants.default.FEATURES.ISTIO_VIRTUAL_SERVICE_UI));
    },

    kialiUrl: Ember.computed('cluster.id', function () {
      const {
        cluster: {
          id: clusterId
        },
        istio: {
          useNewKialiUrl
        }
      } = this;
      let kialiPort = '-http:80';

      if (useNewKialiUrl) {
        kialiPort = ':20001';
      }

      return `/k8s/clusters/${clusterId}/api/v1/namespaces/istio-system/services/http:kiali${kialiPort}/proxy/`;
    }),
    jaegerUrl: Ember.computed('cluster.id', function () {
      return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/istio-system/services/http:tracing:80/proxy/jaeger/search`;
    }),
    grafanaUrl: Ember.computed('cluster.id', 'grafana.istioUrl', 'pageScope', 'project.id', function () {
      if (Ember.get(this, 'pageScope') === 'cluster') {
        return Ember.get(this, 'grafana.istioUrl');
      } else if (Ember.get(this, 'pageScope') === 'project') {
        if (Ember.get(this, 'grafana.istioUrl')) {
          return Ember.get(this, 'grafana.istioUrl');
        } else if (Ember.get(this, 'cluster.id') === 'local') {
          return `/api/v1/namespaces/cattle-prometheus-${(Ember.get(this, 'project.id') || '').split(':').get('lastObject')}/services/http:access-grafana:80/proxy/`;
        } else {
          return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/cattle-prometheus-${(Ember.get(this, 'project.id') || '').split(':').get('lastObject')}/services/http:access-grafana:80/proxy/`;
        }
      }

      return '#';
    }),
    prometheusUrl: Ember.computed('cluster.id', 'grafana.istioUrl', 'pageScope', 'project.id', function () {
      if (Ember.get(this, 'pageScope') === 'cluster') {
        return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/`;
      } else if (Ember.get(this, 'pageScope') === 'project') {
        if (Ember.get(this, 'grafana.istioUrl')) {
          return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/cattle-prometheus/services/http:access-prometheus:80/proxy/`;
        } else {
          return `/k8s/clusters/${Ember.get(this, 'cluster.id')}/api/v1/namespaces/cattle-prometheus-${(Ember.get(this, 'project.id') || '').split(':').get('lastObject')}/services/http:access-prometheus:80/proxy/`;
        }
      }

      return '#';
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-nav/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RtqRARLi",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"section\"],[14,0,\"has-tabs clearfix p-0\"],[12],[2,\"\\n  \"],[10,\"ul\"],[14,0,\"tab-nav\"],[12],[2,\"\\n    \"],[10,\"li\"],[12],[2,\"\\n      \"],[6,[37,5],null,[[\"route\"],[\"project-istio.metrics\"]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"istio.nav.metrics\"],null]]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[2,\"\\n        \"],[6,[37,5],null,[[\"route\"],[\"project-istio.graph\"]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"istio.nav.graph\"],null]]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,9],[[35,8]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[2,\"\\n        \"],[6,[37,5],null,[[\"route\"],[\"project-istio.gateways\"]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"istio.nav.gateways.label\"],null]]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"li\"],[12],[2,\"\\n        \"],[6,[37,5],null,[[\"route\"],[\"project-istio.destination-rules\"]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"istio.nav.destinationRules.label\"],null]]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"li\"],[12],[2,\"\\n        \"],[6,[37,5],null,[[\"route\"],[\"project-istio.virtual-services\"]],[[\"default\"],[{\"statements\":[[1,[30,[36,4],[\"istio.nav.virtualServices.label\"],null]]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"inline-block vertical-bottom mr-20\"],[12],[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"a\"],[14,0,\"inline-block\"],[15,6,[34,2]],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"kiali\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n\\n        \"],[10,\"a\"],[14,0,\"inline-block\"],[15,6,[34,3]],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"jaeger\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,9],[[30,[36,12],[[35,11,[\"istioUrl\"]],[35,10,[\"enableProjectMonitoring\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"a\"],[14,0,\"inline-block\"],[15,6,[34,0]],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"grafana\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n\\n        \"],[10,\"a\"],[14,0,\"inline-block\"],[15,6,[34,1]],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"prometheus-icon\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[18,1,null],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"grafanaUrl\",\"prometheusUrl\",\"kialiUrl\",\"jaegerUrl\",\"t\",\"link-to\",\"iconDisabled\",\"unless\",\"showVirtualServiceUI\",\"if\",\"project\",\"grafana\",\"or\"]}",
    "moduleName": "istio/components/istio-nav/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-rule-row/component", ["exports", "istio/components/istio-rule-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/istio-rule-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "i8euS+5/",
    "block": "{\"symbols\":[\"label\"],\"statements\":[[10,\"tr\"],[14,0,\"main-row\"],[12],[2,\"\\n  \"],[10,\"td\"],[14,\"valign\",\"middle\"],[14,0,\"row-check\"],[14,5,\"padding-top: 2px;\"],[12],[2,\"\\n    \"],[1,[30,[36,5],null,[[\"nodeId\"],[[35,0,[\"id\"]]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,6,[\"state\"]]]]],[14,0,\"state\"],[12],[2,\"\\n    \"],[1,[30,[36,7],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,6,[\"name\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,8],null,[[\"route\",\"model\"],[\"project-istio.rule-detail\",[35,0,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,9],[[35,0,[\"description\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[14,0,\"text-small text-muted m-0\"],[12],[2,\"\\n        \"],[1,[30,[36,4],[[35,0,[\"description\"]]],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,6,[\"template\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n    \"],[1,[35,0,[\"catalogTemplate\",\"name\"]]],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-small text-muted\"],[12],[2,\"\\n      \"],[10,\"span\"],[12],[2,\"\\n        \"],[1,[35,0,[\"externalIdInfo\",\"version\"]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,6,[\"host\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n    \"],[1,[35,0,[\"answers\",\"host\"]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,6,[\"created\"]]]]],[14,0,\"text-right pr-20\"],[12],[2,\"\\n    \"],[1,[30,[36,10],[[35,0,[\"created\"]]],null]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,6,[\"actions\"]]]]],[14,0,\"actions\"],[12],[2,\"\\n    \"],[1,[30,[36,11],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,9],[[35,0,[\"displayAnswerStrings\",\"length\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"tr\"],[14,0,\"sub-row\"],[12],[2,\"\\n    \"],[10,\"td\"],[14,\"colspan\",\"2\"],[12],[13],[2,\"\\n    \"],[10,\"td\"],[14,\"colspan\",\"5\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[35,0,[\"displayAnswerStrings\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"span\"],[14,0,\"tag-xs bg-info\"],[12],[1,[32,1]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,9],[[35,0,[\"showTransitioningMessage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"fullColspan\",\"model\"],[\"7\",[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"model\",\"error-sub-row\",\"-track-array\",\"each\",\"linkify\",\"check-box\",\"dt\",\"badge-state\",\"link-to\",\"if\",\"date-calendar\",\"action-menu\"]}",
    "moduleName": "istio/components/istio-rule-row/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-rules-table/component", ["exports", "istio/components/istio-rules-table/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    sortBy: 'created',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      sort: ['displayName', 'id'],
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'template',
      sort: ['catalogTemplate.name', 'id'],
      searchField: 'catalogTemplate.name',
      translationKey: 'istio.table.template'
    }, {
      name: 'host',
      sort: ['answers.host', 'id'],
      searchField: 'answers.host',
      translationKey: 'istio.table.host'
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    apps: null,
    rows: Ember.computed('apps.@each.isIstio', function () {
      return (Ember.get(this, 'apps') || []).filterBy('isIstio', true);
    })
  });

  _exports.default = _default;
});
define("istio/components/istio-rules-table/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/FafSKWV",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[10,\"section\"],[14,0,\"pl-0 pr-0\"],[12],[2,\"\\n\"],[6,[37,10],null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid\",[35,9],[35,8],[35,7],true,[35,6],\"namespaceId\",\"namespace\",\"pagination.istioRule\",[35,5]]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,2],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"model\",\"dt\"],[[32,3],[32,4]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,2],\"group\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,3],null,[[\"model\",\"fullColspan\"],[[32,3,[\"ref\"]],[32,1,[\"fullColspan\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,2],\"nomatch\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"rulesPage.noMatch\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,2],\"norows\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"rulesPage.noData\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1,2,3,4]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"eq\",\"if\",\"namespace-group\",\"istio-rule-row\",\"headers\",\"descending\",\"sortBy\",\"searchText\",\"rows\",\"sortable-table\"]}",
    "moduleName": "istio/components/istio-rules-table/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/istio-yaml/component", ["exports", "json2yaml", "shared/utils/fetch-yaml"], function (_exports, _json2yaml, _fetchYaml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const VIRTUAL_SERVICES = 'virtualservices';
  const SERVICE_ENTRIES = 'serviceentries';
  const DESTINATION_RULES = 'destinationrules';
  const GATEWAYS = 'gateways';
  const ENVOY_FILTERS = 'envoyfilters';
  const APP_ID = 'io.cattle.field/appId';
  const OPTIONS = [VIRTUAL_SERVICES, DESTINATION_RULES, GATEWAYS, SERVICE_ENTRIES, ENVOY_FILTERS];

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    options: OPTIONS,
    selectedType: VIRTUAL_SERVICES,
    rule: null,
    loading: false,
    actions: {
      select(type) {
        Ember.set(this, 'selectedType', type);
      }

    },
    selectedTypeDidChange: Ember.on('init', Ember.observer('selectedType', function () {
      this.loadIstioResources(Ember.get(this, 'selectedType'));
    })),

    loadIstioResources(type) {
      const appId = Ember.get(this, 'rule.name');
      const namespace = Ember.get(this, 'rule.namespace.id');
      const yamlLink = `/k8s/clusters/${Ember.get(this, 'scope.currentCluster.id')}/apis/networking.istio.io/v1alpha3/namespaces/${namespace}/${type}`;
      Ember.set(this, 'loading', true);
      return (0, _fetchYaml.default)(yamlLink, false).then(res => {
        const out = [];
        const data = JSON.parse(res) || {};
        (Ember.get(data, 'items') || []).forEach(item => {
          const labels = Ember.get(item, 'metadata.labels') || {};

          if (labels[APP_ID] === appId) {
            out.push(item);
          }
        });
        let yaml = out.length > 0 ? _json2yaml.default.stringify(out) : '';
        Ember.set(this, 'yaml', yaml);
      }).catch(error => {
        Ember.get(this, 'growl').fromError(Ember.get(error, 'message') || Ember.get(error, 'xhr.responseJSON.message'));
      }).finally(() => {
        Ember.set(this, 'loading', false);
      });
    }

  });

  _exports.default = _default;
});
define("istio/components/istio-yaml/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JRRPR57r",
    "block": "{\"symbols\":[\"option\"],\"statements\":[[10,\"section\"],[14,0,\"header has-tabs clearfix pb-0\"],[12],[2,\"\\n  \"],[10,\"ul\"],[14,0,\"tab-nav\"],[12],[2,\"\\n\"],[6,[37,13],[[30,[36,12],[[30,[36,12],[[35,11]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[11,\"button\"],[16,0,[31,[\"no-outline bg-transparent \",[30,[36,7],[[30,[36,6],[[32,1],[35,0]],null],\"tab-selected\"],null]]]],[24,4,\"button\"],[4,[38,8],[[32,0],\"select\",[32,1]],null],[12],[2,\"\\n        \"],[10,\"span\"],[15,0,[31,[[30,[36,7],[[30,[36,9],[[32,1],[35,0]],null],\"text-gray\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,1],[[30,[36,10],[\"ruleDetailPage.rules.\",[32,1]],null]],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"section\"],[12],[2,\"\\n\"],[6,[37,7],[[30,[36,14],[[35,4],[35,3]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,5],null,[[\"canChangeName\",\"value\",\"loading\",\"autoResize\",\"readOnly\",\"canUpload\",\"showUpload\",\"showDownload\",\"filename\"],[false,[35,4],[35,3],false,true,false,false,false,[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row mt-20\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"text-center text-muted\"],[12],[2,\"\\n        \"],[1,[30,[36,1],[\"modalYaml.noData\"],[[\"name\"],[[35,0]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"selectedType\",\"t\",\"filename\",\"loading\",\"yaml\",\"input-yaml\",\"eq\",\"if\",\"action\",\"not-eq\",\"concat\",\"options\",\"-track-array\",\"each\",\"or\"]}",
    "moduleName": "istio/components/istio-yaml/template.hbs"
  });

  _exports.default = _default;
});
define.alias("ivy-codemirror/components/ivy-codemirror", "istio/components/ivy-codemirror");
define.alias("shared/components/k3s-node-args/component", "istio/components/k3s-node-args/component");
define.alias("shared/components/k3s-node-env-var/component", "istio/components/k3s-node-env-var/component");
define.alias("shared/components/labels-section/component", "istio/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "istio/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "istio/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "istio/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "istio/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "istio/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "istio/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "istio/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "istio/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "istio/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "istio/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "istio/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "istio/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "istio/components/liquid-versions");
define("istio/components/load-balancer/component", ["exports", "istio/components/load-balancer/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const ROUND_ROBIN = 'ROUND_ROBIN';
  const LEAST_CONN = 'LEAST_CONN';
  const RANDOM = 'RANDOM';
  const PASSTHROUGH = 'PASSTHROUGH';
  const SOURCE_IP = 'sourceIp';
  const HEADER = 'header';
  const COOKIE = 'cookie';
  const RING_SIZE = 1024;
  const LB_MODES = [{
    label: 'cruDestinationRule.loadBalancer.simple.roundRobin.label',
    value: ROUND_ROBIN
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.leastConn.label',
    value: LEAST_CONN
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.random.label',
    value: RANDOM
  }, {
    label: 'cruDestinationRule.loadBalancer.simple.passthrough.label',
    value: PASSTHROUGH
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    isSimpleMode: true,
    lbModes: LB_MODES,
    consistentHashMode: SOURCE_IP,
    model: Ember.computed.alias('trafficPolicy.loadBalancer'),

    init() {
      this._super(...arguments);

      this.initLB();
    },

    isSimpleModeDidChange: Ember.observer('isSimpleMode', function () {
      const isSimpleMode = Ember.get(this, 'isSimpleMode');

      if (isSimpleMode) {
        Ember.set(this, 'trafficPolicy.loadBalancer', {
          simple: ROUND_ROBIN
        });
      } else {
        Ember.setProperties(this, {
          'consistentHashMode': SOURCE_IP,
          'trafficPolicy.loadBalancer': {
            consistentHash: {
              useSourceIp: true,
              minimumRingSize: RING_SIZE
            }
          }
        });
      }
    }),
    consistentHashModeDidChange: Ember.observer('consistentHashMode', function () {
      const consistentHashMode = Ember.get(this, 'consistentHashMode');

      if (consistentHashMode === SOURCE_IP) {
        Ember.set(this, 'model', {
          consistentHash: {
            useSourceIp: true,
            minimumRingSize: RING_SIZE
          }
        });
      } else if (consistentHashMode === COOKIE) {
        Ember.set(this, 'model', {
          consistentHash: {
            httpCookie: {
              ttl: '0s',
              name: ''
            },
            minimumRingSize: RING_SIZE
          }
        });
      } else if (consistentHashMode === HEADER) {
        Ember.set(this, 'model', {
          consistentHash: {
            httpHeaderName: '',
            minimumRingSize: RING_SIZE
          }
        });
      }
    }),

    initLB() {
      if (!Ember.get(this, 'trafficPolicy.loadBalancer')) {
        Ember.set(this, 'trafficPolicy.loadBalancer', {
          simple: ROUND_ROBIN
        });
      }

      if (Ember.get(this, 'model.consistentHash.useSourceIp')) {
        Ember.setProperties(this, {
          consistentHashMode: SOURCE_IP,
          isSimpleMode: false
        });
      } else if (Ember.get(this, 'model.consistentHash.httpHeaderName')) {
        Ember.setProperties(this, {
          consistentHashMode: HEADER,
          isSimpleMode: false
        });
      } else if (Ember.get(this, 'model.consistentHash.httpCookie.name')) {
        Ember.setProperties(this, {
          consistentHashMode: COOKIE,
          isSimpleMode: false
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/load-balancer/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "x0/n5rIH",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"radio mb-0\"],[12],[2,\"\\n  \"],[10,\"label\"],[12],[2,\"\\n\"],[6,[37,8],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,13],true]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,8],[[30,[36,16],[[35,7],[30,[36,11],[[35,13],true],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.simple.label\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[6,[37,8],[[35,13]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"mb-10 mt-10\"],[12],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,3,[\"simple\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,15],null,[[\"classNames\",\"content\",\"value\",\"localizedLabel\"],[\"form-control\",[35,14],[35,3,[\"simple\"]],true]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"radio mb-0\"],[12],[2,\"\\n  \"],[10,\"label\"],[12],[2,\"\\n\"],[6,[37,8],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,13],false]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,8],[[30,[36,16],[[35,7],[30,[36,11],[[35,13],false],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.label\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,17],[[35,13]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row box\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.mode.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,10]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[12],[2,\"\\n            \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,10],\"header\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.mode.header.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[12],[2,\"\\n            \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,10],\"cookie\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.mode.cookie.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[12],[2,\"\\n            \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,10],\"sourceIp\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.mode.sourceIp.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"],[6,[37,8],[[30,[36,11],[[35,10],\"header\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-httpHeaderName\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.label\"],null]],[2,\"\\n\"],[6,[37,8],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,6]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,3,[\"consistentHash\",\"httpHeaderName\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"consistentHash\",\"httpHeaderName\"]],[30,[36,2],[[35,1],\"-input-httpHeaderName\"],null],[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpHeaderName.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,8],[[30,[36,11],[[35,10],\"cookie\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-httpCookie-name\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.label\"],null]],[2,\"\\n\"],[6,[37,8],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,6]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,3,[\"model\",\"consistentHash\",\"httpCookie\",\"name\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"consistentHash\",\"httpCookie\",\"name\"]],[30,[36,2],[[35,1],\"-input-httpCookie-name\"],null],[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.name.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label pt-20\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-httpCookie-path\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.path.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,3,[\"consistentHash\",\"httpCookie\",\"path\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"consistentHash\",\"httpCookie\",\"path\"]],[30,[36,2],[[35,1],\"-input-httpCookie-path\"],null],[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.path.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label pt-20\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-httpCookie-ttl\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.label\"],null]],[2,\"\\n\"],[6,[37,8],[[35,7]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[34,6]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,3,[\"consistentHash\",\"httpCookie\",\"ttl\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"consistentHash\",\"httpCookie\",\"ttl\"]],[30,[36,2],[[35,1],\"-input-httpCookie-ttl\"],null],[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.httpCookie.ttl.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-4\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-minimumRingSize\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.minimumRingSize.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,7],[35,3,[\"consistentHash\",\"minimumRingSize\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"consistentHash\",\"minimumRingSize\"]],[30,[36,2],[[35,1],\"-input-minimumRingSize\"],null],[30,[36,0],[\"cruDestinationRule.loadBalancer.consistentHash.minimumRingSize.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"elementId\",\"concat\",\"model\",\"input-integer\",\"input\",\"field-required\",\"editing\",\"if\",\"input-or-display\",\"consistentHashMode\",\"eq\",\"radio-button\",\"isSimpleMode\",\"lbModes\",\"new-select\",\"or\",\"unless\"]}",
    "moduleName": "istio/components/load-balancer/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/managed-import-cluster-info/component", "istio/components/managed-import-cluster-info/component");
define.alias("shared/components/marked-down/component", "istio/components/marked-down/component");
define("istio/components/match-type-select/component", ["exports", "istio/components/match-type-select/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const AUTHORITY = 'authority';
  const METHOD = 'method';
  const URI = 'uri';
  const SCHEME = 'scheme';
  const HEADERS = 'headers';
  const TYPES = [{
    label: 'cruVirtualService.http.routes.matches.type.uri',
    value: URI
  }, {
    label: 'cruVirtualService.http.routes.matches.type.scheme',
    value: SCHEME
  }, {
    label: 'cruVirtualService.http.routes.matches.type.method',
    value: METHOD
  }, {
    label: 'cruVirtualService.http.routes.matches.type.authority',
    value: AUTHORITY
  }, {
    label: 'cruVirtualService.http.routes.matches.type.headers',
    value: HEADERS
  }];

  var _default = Ember.Component.extend({
    layout: _template.default,
    match: null,
    matcheTypes: TYPES,

    init() {
      this._super(...arguments);

      this.initMatcheTypes();
    },

    matchesDidChange: Ember.observer('matches.@each.{matchType,key,condition,value}', function () {
      Ember.set(this, 'matcheTypes', TYPES.filter(choice => this.notExist(choice)));
    }),

    notExist(choice) {
      return !(Ember.get(this, 'matches') || []).find((m, index) => Ember.get(m, 'matchType') !== HEADERS && Ember.get(m, 'matchType') === Ember.get(choice, 'value') && index !== Ember.get(this, 'index'));
    },

    initMatcheTypes() {
      Ember.set(this, 'matcheTypes', TYPES.filter(choice => this.notExist(choice)));
    }

  });

  _exports.default = _default;
});
define("istio/components/match-type-select/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hXYxVlcU",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"classNames\",\"content\",\"localizedLabel\",\"value\"],[\"form-control\",[35,1],true,[35,0,[\"matchType\"]]]]]]],\"hasEval\":false,\"upvars\":[\"match\",\"matcheTypes\",\"new-select\"]}",
    "moduleName": "istio/components/match-type-select/template.hbs"
  });

  _exports.default = _default;
});
define.alias("ember-maybe-in-element/components/maybe-in-element", "istio/components/maybe-in-element");
define.alias("shared/components/metrics-action/component", "istio/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "istio/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "istio/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "istio/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "istio/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "istio/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "istio/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "istio/components/modal-delete-eks-cluster/component");
define("istio/components/modal-delete-istio/component", ["exports", "ui/mixins/modal-base", "istio/components/modal-delete-istio/template", "jquery"], function (_exports, _modalBase, _template, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_modalBase.default, {
    settings: Ember.inject.service(),
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    growl: Ember.inject.service(),
    layout: _template.default,
    classNames: ['medium-modal'],
    onlyIstio: true,
    istioApp: Ember.computed.alias('modalService.modalOpts.istioApp'),
    cluster: Ember.computed.alias('scope.currentCluster'),

    didRender() {
      setTimeout(() => {
        try {
          (0, _jquery.default)('BUTTON')[0].focus();
        } catch (e) {}
      }, 500);
    },

    actions: {
      confirm() {
        const {
          istioApp,
          onlyIstio,
          cluster
        } = this;
        const {
          systemProject
        } = cluster;
        const istioSystemNamespace = (systemProject.namespaces || []).findBy('id', 'istio-system');
        Ember.set(this, 'saving', true);
        const promises = [istioApp.delete(), istioSystemNamespace.delete()];

        if (!onlyIstio) {
          promises.pushObject(cluster.doAction('disableMonitoring'));
        }

        Ember.RSVP.all(promises).then(() => {
          const isEmbedded = window.top !== window;

          if (isEmbedded) {
            window.top.postMessage({
              action: 'reload'
            });
          } else {
            setTimeout(() => {
              window.location.href = window.location.href; // eslint-disable-line no-self-assign
            }, 1000);
          }
        }).catch(err => {
          Ember.get(this, 'growl').fromError(Ember.get(err, 'body.message'));
        }).finally(() => {
          Ember.set(this, 'saving', false);
          this.send('cancel');
        });
      }

    }
  });

  _exports.default = _default;
});
define("istio/components/modal-delete-istio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6WMu7/lK",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h2\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"modalDeleteIstio.title\"],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"ul\"],[14,0,\"list-unstyled pl-30\"],[12],[2,\"\\n  \"],[10,\"li\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"selection\",\"value\"],[[35,1],true]]]],[2,\"\\n      \"],[10,\"span\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"modalDeleteIstio.onlyIstio.true\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"li\"],[12],[2,\"\\n    \"],[10,\"label\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"selection\",\"value\"],[[35,1],false]]]],[2,\"\\n      \"],[10,\"span\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"modalDeleteIstio.onlyIstio.false\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[1,[30,[36,5],null,[[\"editing\",\"saving\",\"editLabel\",\"savingLabel\",\"save\",\"cancel\",\"saveColor\",\"savedColor\",\"savingColor\"],[true,[35,4],\"modalDeleteIstio.disable\",\"modalDeleteIstio.disabling\",[30,[36,3],[[32,0],\"confirm\"],null],[30,[36,3],[[32,0],\"cancel\"],null],\"bg-error\",\"bg-error\",\"bg-error\"]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"onlyIstio\",\"radio-button\",\"action\",\"saving\",\"save-cancel\"]}",
    "moduleName": "istio/components/modal-delete-istio/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/modal-edit-catalog/component", "istio/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "istio/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "istio/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "istio/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "istio/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "istio/components/modal-move-namespace/component");
define.alias("shared/components/modal-resize-pvc/component", "istio/components/modal-resize-pvc/component");
define.alias("shared/components/modal-root/component", "istio/components/modal-root/component");
define.alias("shared/components/modal-save-rke-template/component", "istio/components/modal-save-rke-template/component");
define.alias("shared/components/modal-shell/component", "istio/components/modal-shell/component");
define.alias("shared/components/modal-show-command/component", "istio/components/modal-show-command/component");
define.alias("shared/components/modal-yaml/component", "istio/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "istio/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "istio/components/namespace-group/component");
define.alias("shared/components/new-select/component", "istio/components/new-select/component");
define.alias("shared/components/node-group-row/component", "istio/components/node-group-row/component");
define.alias("shared/components/node-ip/component", "istio/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "istio/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "istio/components/node-taints/component");
define("istio/components/outlier-detection/component", ["exports", "istio/components/outlier-detection/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    trafficPolicy: null,
    model: Ember.computed.alias('trafficPolicy.outlierDetection'),

    init() {
      this._super(...arguments);

      this.initOutlierDetection();
    },

    initOutlierDetection() {
      if (!Ember.get(this, 'trafficPolicy.outlierDetection') && Ember.get(this, 'editing')) {
        Ember.set(this, 'trafficPolicy.outlierDetection', {
          baseEjectionTime: '30s',
          consecutiveErrors: 5,
          interval: '10s',
          maxEjectionPercent: 10
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/outlier-detection/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HskwG9Fd",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-baseEjectionTime\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.baseEjectionTime.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"baseEjectionTime\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"baseEjectionTime\"]],[30,[36,2],[[35,1],\"-input-baseEjectionTime\"],null],[30,[36,0],[\"cruDestinationRule.outlierDetection.baseEjectionTime.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.baseEjectionTime.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-consecutiveErrors\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.consecutiveErrors.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"consecutiveErrors\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,4],null,[[\"min\",\"value\",\"id\",\"placeholder\"],[0,[35,3,[\"consecutiveErrors\"]],[30,[36,2],[[35,1],\"-input-consecutiveErrors\"],null],[30,[36,0],[\"cruDestinationRule.outlierDetection.consecutiveErrors.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.consecutiveErrors.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-interval\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.interval.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"interval\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,3,[\"interval\"]],[30,[36,2],[[35,1],\"-input-interval\"],null],[30,[36,0],[\"cruDestinationRule.outlierDetection.interval.placeholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.interval.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,2],[[35,1],\"-input-maxEjectionPercent\"],null]]]],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.maxEjectionPercent.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],null,[[\"editable\",\"value\"],[[35,6],[35,3,[\"maxEjectionPercent\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n        \"],[1,[30,[36,4],null,[[\"classNames\",\"min\",\"max\",\"value\",\"id\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[35,3,[\"maxEjectionPercent\"]],[30,[36,2],[[35,1],\"-input-maxEjectionPercent\"],null],[30,[36,0],[\"cruDestinationRule.outlierDetection.maxEjectionPercent.placeholder\"],null]]]]],[2,\"\\n        \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n          %\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.outlierDetection.maxEjectionPercent.help\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"t\",\"elementId\",\"concat\",\"model\",\"input-integer\",\"input\",\"editing\",\"input-or-display\"]}",
    "moduleName": "istio/components/outlier-detection/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/outside-click/component", "istio/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "istio/components/page-numbers");
define.alias("shared/components/page-numbers/component", "istio/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "istio/components/percent-gauge/component");
define("istio/components/port-selector/component", ["exports", "istio/components/port-selector/template", "shared/utils/util"], function (_exports, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    model: null,

    init() {
      this._super(...arguments);

      this.initPort();
    },

    portNumberOrNameDidChange: Ember.observer('portNumberOrName', function () {
      const port = Ember.get(this, 'portNumberOrName');
      const model = Ember.get(this, 'model');

      if (port && (0, _util.isNumeric)(port)) {
        Ember.set(model, 'port', {
          number: parseInt(port, 10)
        });
      } else if (port) {
        Ember.set(model, 'port', {
          name: port
        });
      } else {
        delete model['port'];
      }
    }),

    initPort() {
      const port = Ember.get(this, 'model.port');

      if (port) {
        Ember.set(this, 'portNumberOrName', Ember.get(port, 'name') || Ember.get(port, 'number') || null);
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/port-selector/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1+1Nyssc",
    "block": "{\"symbols\":[],\"statements\":[[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-port\"],null]]]],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"cruDestinationRule.port.label\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[6,[37,6],null,[[\"editable\",\"value\"],[[35,5],[35,1]]],[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-mirror-port\"],null],[35,1],\"form-control\",[30,[36,0],[\"cruDestinationRule.port.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"portNumberOrName\",\"elementId\",\"concat\",\"input\",\"editing\",\"input-or-display\"]}",
    "moduleName": "istio/components/port-selector/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/pretty-json/component", "istio/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "istio/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "istio/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "istio/components/project-member-row/component");
define("istio/components/project-traffic-metrics/component", ["exports", "shared/mixins/metrics", "istio/components/project-traffic-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    scope: Ember.inject.service(),
    layout: _template.default,
    filters: {
      resourceType: 'istioproject'
    },
    projectScope: true,
    istio: true,
    projectDidChange: Ember.observer('scope.currentProject.id', function () {
      Ember.setProperties(this, {
        'state.noGraphs': true,
        graphs: [],
        single: []
      });
      this.send('query', false);
    })
  });

  _exports.default = _default;
});
define("istio/components/project-traffic-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "thXSB0RH",
    "block": "{\"symbols\":[],\"statements\":[[10,\"section\"],[12],[2,\"\\n  \"],[1,[30,[36,2],null,[[\"queryAction\",\"allowDetail\",\"state\",\"istio\"],[[30,[36,1],[[32,0],\"query\"],null],false,[35,0],true]]]],[2,\"\\n  \"],[1,[30,[36,4],null,[[\"graphs\",\"loading\",\"noGraphs\"],[[35,3],[35,0,[\"loading\"]],[35,0,[\"noGraphs\"]]]]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"state\",\"action\",\"metrics-action\",\"graphs\",\"metrics-graph\"]}",
    "moduleName": "istio/components/project-traffic-metrics/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/radio-button/component", "istio/components/radio-button/component");
define.alias("shared/components/resource-condition-list/component", "istio/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "istio/components/resource-event-list/component");
define.alias("shared/components/run-scan-modal/component", "istio/components/run-scan-modal/component");
define.alias("shared/components/save-cancel/component", "istio/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "istio/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "istio/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "istio/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "istio/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "istio/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "istio/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "istio/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "istio/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "istio/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "istio/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "istio/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "istio/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "istio/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "istio/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "istio/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "istio/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "istio/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "istio/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "istio/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "istio/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "istio/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "istio/components/search-text/component");
define.alias("shared/components/searchable-select/component", "istio/components/searchable-select/component");
define.alias("shared/components/select-value-check/component", "istio/components/select-value-check/component");
define.alias("shared/components/settings-overridable-banner/component", "istio/components/settings-overridable-banner/component");
define.alias("shared/components/settings/danger-zone/component", "istio/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "istio/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "istio/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "istio/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "istio/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "istio/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "istio/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "istio/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "istio/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "istio/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "istio/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "istio/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "istio/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "istio/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-local-storage/component", "istio/components/storage-class/provisioner-local-storage/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "istio/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "istio/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "istio/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "istio/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "istio/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "istio/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "istio/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "istio/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "istio/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "istio/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "istio/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "istio/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "istio/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-node-group-update/component", "istio/components/tooltip-node-group-update/component");
define.alias("shared/components/tooltip-toggle-override/component", "istio/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "istio/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "istio/components/top-errors/component");
define("istio/components/traffic-monitoring/component", ["exports", "istio/components/traffic-monitoring/template", "jquery"], function (_exports, _template, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    istio: Ember.inject.service(),
    classNames: ['istio-graph'],
    layout: _template.default,
    namespaces: null,
    loading: false,
    intervalAnchor: null,

    willDestroyElement() {
      this.clearInterval();

      this._super();
    },

    actions: {
      refreshGraph() {
        document.getElementById('kiali-iframe').contentWindow.location.href = this.getKialiUrl();
        this.namespaceDidChange();
      }

    },
    namespaceDidChange: Ember.observer('namespace', function () {
      this.clearInterval();
      Ember.set(this, 'loading', true);
      Ember.set(this, 'url', this.getKialiUrl());
      const intervalAnchor = setInterval(() => {
        if ((0, _jquery.default)('#kiali-iframe').contents().find('#root .login-pf').length === 0 && (0, _jquery.default)('#kiali-iframe').contents().find('#root .pf-c-page').length === 1) {
          Ember.set(this, 'loading', false);
          this.clearInterval();
        }
      }, 800);
      Ember.set(this, 'intervalAnchor', intervalAnchor);
    }),
    updateKialiGraph: Ember.on('init', Ember.observer('scope.currentProject.id', 'namespaces', function () {
      if (!Ember.get(this, 'namespace') || !(Ember.get(this, 'namespaces') || []).findBy('id', Ember.get(this, 'namespace'))) {
        Ember.set(this, 'namespace', Ember.get(this, 'namespaces.firstObject.id'));
      }
    })),

    getKialiUrl() {
      let kialiPort = '-http:80';

      if (this.istio.useNewKialiUrl) {
        kialiPort = ':20001';
      }

      return `/k8s/clusters/${Ember.get(this, 'scope.currentCluster.id')}/api/v1/namespaces/istio-system/services/http:kiali${kialiPort}/proxy/console/graph/namespaces/?edges=noEdgeLabels&graphType=versionedApp&namespaces=${Ember.get(this, 'namespace')}&unusedNodes=true&injectServiceNodes=true&layout=dagre`;
    },

    clearInterval() {
      const intervalAnchor = Ember.get(this, 'intervalAnchor');

      if (intervalAnchor) {
        clearInterval(intervalAnchor);
        Ember.set(this, 'intervalAnchor', intervalAnchor);
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/traffic-monitoring/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GrK5+8hl",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,6],[[35,2,[\"length\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row text-left mb-5\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"pull-left pl-20 pt-0 mr-10\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"inline-block\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"generic.namespace\"],null]],[2,\":\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,3],null,[[\"content\",\"classNames\",\"value\",\"optionValuePath\",\"optionLabelPath\"],[[35,2],\"namespace-select text-black\",[35,1],\"id\",\"displayName\"]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[11,\"button\"],[24,0,\"btn btn-sm bg-default\"],[24,4,\"button\"],[4,[38,4],[[32,0],\"refreshGraph\"],null],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"istio.refreshGraph\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,6],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row mt-20\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"text-center\"],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-spinner icon-spin icon-3x\"],[12],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[10,\"div\"],[14,1,\"kiali-div\"],[15,0,[31,[[30,[36,6],[[35,5],\"loading\"],null]]]],[12],[2,\"\\n    \"],[10,\"iframe\"],[15,\"src\",[34,7]],[14,1,\"kiali-iframe\"],[14,\"title\",\"kiali-iframe\"],[14,\"scrolling\",\"no\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,8],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"powered-by-kiali\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"istio.kiali\"],null]],[2,\"\\n      \"],[10,\"span\"],[14,0,\"pl-5 pull-right\"],[14,\"role\",\"button\"],[12],[2,\"\\n        \"],[10,\"a\"],[14,6,\"https://www.kiali.io/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"kiali\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-center text-muted\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"istio.noData\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"namespace\",\"namespaces\",\"new-select\",\"action\",\"loading\",\"if\",\"url\",\"unless\"]}",
    "moduleName": "istio/components/traffic-monitoring/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/traffic-policy-tls/component", ["exports", "istio/components/traffic-policy-tls/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const NONE = 'NONE';
  const ISTIO_MUTUAL = 'ISTIO_MUTUAL';
  const DISABLE = 'DISABLE';
  const SIMPLE = 'SIMPLE';
  const MUTUAL = 'MUTUAL';

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    layout: _template.default,
    tlsMode: NONE,
    trafficPolicy: null,
    errors: null,
    model: Ember.computed.alias('trafficPolicy.tls'),

    init() {
      this._super(...arguments);

      this.initTls();
    },

    actions: {
      setSubjectAltNames(subjectAltNames) {
        Ember.set(this, 'model.subjectAltNames', subjectAltNames);
      }

    },
    tlsModeDidChange: Ember.observer('tlsMode', function () {
      const tlsMode = Ember.get(this, 'tlsMode');
      const trafficPolicy = Ember.get(this, 'trafficPolicy');

      if (tlsMode === NONE) {
        delete trafficPolicy['tls'];
      } else if (tlsMode === ISTIO_MUTUAL) {
        Ember.set(this, 'model', {
          mode: ISTIO_MUTUAL
        });
      } else if (tlsMode === DISABLE) {
        Ember.set(this, 'model', {
          mode: DISABLE
        });
      } else if (tlsMode === SIMPLE) {
        const out = {
          mode: SIMPLE
        };

        if (Ember.get(this, 'model.caCertificates')) {
          Ember.set(out, 'caCertificates', Ember.get(this, 'model.caCertificates'));
        }

        if (Ember.get(this, 'model.sni')) {
          Ember.set(out, 'sni', Ember.get(this, 'model.sni'));
        }

        if (Ember.get(this, 'model.subjectAltNames.length') > 0) {
          Ember.set(out, 'subjectAltNames', Ember.get(this, 'model.subjectAltNames'));
        }

        Ember.set(this, 'model', out);
      } else if (tlsMode === MUTUAL) {
        const out = {
          mode: MUTUAL
        };

        if (Ember.get(this, 'model.clientCertificate')) {
          Ember.set(out, 'clientCertificate', Ember.get(this, 'model.clientCertificate'));
        }

        if (Ember.get(this, 'model.privateKey')) {
          Ember.set(out, 'privateKey', Ember.get(this, 'model.privateKey'));
        }

        if (Ember.get(this, 'model.caCertificates')) {
          Ember.set(out, 'caCertificates', Ember.get(this, 'model.caCertificates'));
        }

        if (Ember.get(this, 'model.sni')) {
          Ember.set(out, 'sni', Ember.get(this, 'model.sni'));
        }

        if (Ember.get(this, 'model.subjectAltNames.length') > 0) {
          Ember.set(out, 'subjectAltNames', Ember.get(this, 'model.subjectAltNames'));
        }

        Ember.set(this, 'model', out);
      }
    }),
    validate: Ember.observer('tlsMode', 'model.clientCertificate', 'model.privateKey', function () {
      const errors = [];

      if (Ember.get(this, 'tlsMode') === MUTUAL) {
        if (!Ember.get(this, 'model.clientCertificate')) {
          errors.push(Ember.get(this, 'intl').t('cruDestinationRule.tls.clientCertificate.error'));
        }

        if (!Ember.get(this, 'model.privateKey')) {
          errors.push(Ember.get(this, 'intl').t('cruDestinationRule.tls.privateKey.error'));
        }
      }

      Ember.set(this, 'errors', errors);
    }),

    initTls() {
      if (!Ember.get(this, 'model') || !Ember.get(this, 'model.mode')) {
        Ember.set(this, 'tlsMode', NONE);
      } else {
        Ember.set(this, 'tlsMode', Ember.get(this, 'model.mode'));
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/traffic-policy-tls/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "W4Fbmygw",
    "block": "{\"symbols\":[\"c\",\"row\"],\"statements\":[[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"cruDestinationRule.tls.mode.label\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,11]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,11],\"NONE\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.tls.mode.none.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,11],\"ISTIO_MUTUAL\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.tls.mode.istio.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,11],\"DISABLE\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.tls.mode.disable.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,11],\"SIMPLE\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.tls.mode.simple.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"\\n          \"],[1,[30,[36,12],null,[[\"selection\",\"value\"],[[35,11],\"MUTUAL\"]]]],[2,\" \"],[1,[30,[36,0],[\"cruDestinationRule.tls.mode.mutual.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,10],[[30,[36,13],[[35,11],\"MUTUAL\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 box\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,8],[[35,7],\"-input-clientCertificate\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.tls.clientCertificate.label\"],null]],[2,\"\\n\"],[6,[37,10],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[34,9]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"clientCertificate\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,4,[\"clientCertificate\"]],[30,[36,8],[[35,7],\"-input-clientCertificate\"],null],[30,[36,0],[\"cruDestinationRule.tls.clientCertificate.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-6 box\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,8],[[35,7],\"-input-privateKey\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.tls.privateKey.label\"],null]],[2,\"\\n\"],[6,[37,10],[[35,2]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[34,9]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"privateKey\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,4,[\"privateKey\"]],[30,[36,8],[[35,7],\"-input-privateKey\"],null],[30,[36,0],[\"cruDestinationRule.tls.privateKey.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[30,[36,14],[[30,[36,13],[[35,11],\"SIMPLE\"],null],[30,[36,13],[[35,11],\"MUTUAL\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 box\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,8],[[35,7],\"-input-caCertificates\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.tls.caCertificates.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"caCertificates\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,4,[\"caCertificates\"]],[30,[36,8],[[35,7],\"-input-caCertificates\"],null],[30,[36,0],[\"cruDestinationRule.tls.caCertificates.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-6 box\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,8],[[35,7],\"-input-sni\"],null]]]],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruDestinationRule.tls.sni.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[35,4,[\"sni\"]]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],null,[[\"type\",\"value\",\"id\",\"placeholder\"],[\"text\",[35,4,[\"sni\"]],[30,[36,8],[[35,7],\"-input-sni\"],null],[30,[36,0],[\"cruDestinationRule.tls.sni.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[30,[36,14],[[30,[36,13],[[35,11],\"SIMPLE\"],null],[30,[36,13],[[35,11],\"MUTUAL\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-12 box\"],[12],[2,\"\\n\"],[6,[37,6],null,[[\"editing\",\"valueLabel\",\"addActionLabel\",\"changed\",\"addButtonClass\",\"initialValues\",\"showProTip\"],[[35,2],\"cruDestinationRule.tls.subjectAltNames.label\",\"cruDestinationRule.tls.subjectAltNames.add\",[30,[36,5],[[32,0],\"setSubjectAltNames\"],null],\"btn bg-link icon-btn\",[35,4,[\"subjectAltNames\"]],false]],[[\"default\"],[{\"statements\":[[6,[37,3],null,[[\"editable\",\"value\"],[[35,2],[32,2,[\"value\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control input-sm\",\"text\",[32,2,[\"value\"]],[30,[36,0],[\"cruDestinationRule.tls.subjectAltNames.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"input\",\"editing\",\"input-or-display\",\"model\",\"action\",\"form-value-array\",\"elementId\",\"concat\",\"field-required\",\"if\",\"tlsMode\",\"radio-button\",\"eq\",\"or\"]}",
    "moduleName": "istio/components/traffic-policy-tls/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/upgrade-btn/component", "istio/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "istio/components/used-percent-gauge/component");
define("istio/components/virtual-service-http-route-row/component", ["exports", "istio/components/virtual-service-http-route-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    editing: true,
    route: null,
    showMatch: false,
    httpRouteDestinations: Ember.computed.alias('route.route'),

    init() {
      this._super(...arguments);

      this.initRoute();
    },

    actions: {
      removeRoute(route) {
        if (this.removeRoute) {
          this.removeRoute(route);
        }
      },

      moveUpRoute(route) {
        const routes = Ember.get(this, 'routes');

        if (routes) {
          const index = routes.indexOf(route);
          routes.removeObject(route);
          routes.insertAt(index - 1, route);
        }
      },

      moveDownRoute(route) {
        const routes = Ember.get(this, 'routes');

        if (routes) {
          const index = routes.indexOf(route);
          routes.removeObject(route);
          routes.insertAt(index + 1, route);
        }
      },

      addMatch() {
        const match = Ember.Object.create({});
        Ember.get(this, 'route.match').pushObject(match);
      },

      removeMatch(match) {
        Ember.get(this, 'route.match').removeObject(match);

        if (Ember.get(this, 'route.match.length') === 0 && Ember.get(this, 'showMatch')) {
          Ember.set(this, 'showMatch', false);
        }
      }

    },
    showMatchDidChange: Ember.observer('showMatch', function () {
      const showMatch = Ember.get(this, 'showMatch');

      if (showMatch) {
        if (!Ember.get(this, 'route.match')) {
          Ember.set(this, 'route.match', []);
        }

        if (Ember.get(this, 'route.match.length') === 0) {
          this.send('addMatch');
        }

        const routes = Ember.get(this, 'routes');

        if (routes) {
          routes.removeObject(Ember.get(this, 'route'));
          routes.unshiftObject(Ember.get(this, 'route'));
        }
      } else {
        const route = Ember.get(this, 'route');
        delete route['match'];
      }
    }),

    initRoute() {
      if (Ember.get(this, 'route.match.length') > 0) {
        Ember.set(this, 'showMatch', true);
      }

      if (!Ember.get(this, 'httpRouteDestinations')) {
        Ember.set(this, 'route.route', []);
      }

      const route = Ember.get(this, 'route');

      if (!Ember.get(route, 'fault')) {
        Ember.set(route, 'fault', {
          abort: {},
          delay: {}
        });
      } else if (!Ember.get(route, 'fault.abort')) {
        Ember.set(route, 'fault.abort', {});
      } else if (!Ember.get(route, 'fault.delay')) {
        Ember.set(route, 'fault.delay', {});
      }

      if (!Ember.get(route, 'redirect')) {
        Ember.set(route, 'redirect', {});
      }

      if (!Ember.get(route, 'rewrite')) {
        Ember.set(route, 'rewrite', {});
      }

      if (!Ember.get(route, 'mirror')) {
        Ember.set(route, 'mirror', {});
      }

      if (!Ember.get(route, 'retries')) {
        Ember.set(route, 'retries', {});
      }
    }

  });

  _exports.default = _default;
});
define("istio/components/virtual-service-http-route-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TyONOMDY",
    "block": "{\"symbols\":[\"match\"],\"statements\":[[10,\"div\"],[14,0,\"box mb-10\"],[12],[2,\"\\n\"],[6,[37,20],[[30,[36,19],[[35,8]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n        \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,11],[[32,0],\"removeRoute\",[35,1]],null],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.removeRouteLabel\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,17],[[35,16]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n          \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,11],[[32,0],\"moveUpRoute\",[35,1]],null],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.moveUp\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,17],[[35,18]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n          \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,11],[[32,0],\"moveDownRoute\",[35,1]],null],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.moveDown\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"checkbox pt-10\"],[12],[2,\"\\n\"],[6,[37,20],[[35,8]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"label\"],[14,0,\"no-select\"],[12],[2,\"\\n        \"],[1,[30,[36,4],null,[[\"type\",\"checked\"],[\"checkbox\",[35,15]]]]],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.showMatch\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,20],[[30,[36,19],[[35,8],[35,15]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"inline-block\"],[12],[2,\"\\n        \"],[11,\"button\"],[24,0,\"pt-0 pb-0 btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,11],[[32,0],\"addMatch\"],null],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.addLabel\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"],[6,[37,20],[[35,15]],null,[[\"default\"],[{\"statements\":[[6,[37,14],[[30,[36,13],[[30,[36,13],[[35,1,[\"match\"]]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,12],null,[[\"model\",\"editing\",\"removeMatch\"],[[32,1],[35,8],[30,[36,11],[[32,0],\"removeMatch\"],null]]]]],[2,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"row text-center mt-20 mb-20 pt-10\"],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"text-muted\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.matches.noData\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,24],null,[[\"namespace\",\"httpRouteDestinations\",\"hosts\",\"route\",\"isNew\",\"editing\"],[[35,5],[35,23],[35,22],[35,1],[35,21],[35,8]]]]],[2,\"\\n\\n\"],[6,[37,26],null,[[\"advanced\"],[[35,25]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.redirect.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-redirect-uri\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.redirect.uri.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"redirect\",\"uri\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-redirect-uri\"],null],[35,1,[\"redirect\",\"uri\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.redirect.uri.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-redirect-authority\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.redirect.authority.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"redirect\",\"authority\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-redirect-authority\"],null],[35,1,[\"redirect\",\"authority\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.redirect.authority.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.rewrite.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-rewrite-uri\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.rewrite.uri.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"rewrite\",\"uri\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-rewrite-uri\"],null],[35,1,[\"rewrite\",\"uri\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.rewrite.uri.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-rewrite-authority\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.rewrite.authority.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"rewrite\",\"authority\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-rewrite-authority\"],null],[35,1,[\"rewrite\",\"authority\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.rewrite.authority.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.timeout.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-timeout\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.timeout.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"timeout\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-timeout\"],null],[35,1,[\"timeout\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.timeout.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.retries.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-retries-attempts\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.retries.attempts.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"retries\",\"attempts\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,7],null,[[\"min\",\"id\",\"value\",\"classNames\",\"placeholder\"],[0,[30,[36,3],[[35,2],\"-input-retries-attempts\"],null],[35,1,[\"retries\",\"attempts\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.retries.attempts.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-retries-perTryTimeout\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.retries.perTryTimeout.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"retries\",\"perTryTimeout\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-retries-perTryTimeout\"],null],[35,1,[\"retries\",\"perTryTimeout\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.retries.perTryTimeout.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.abort.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-faultInjection-abort-httpStatus\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.abort.httpStatus.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"fault\",\"abort\",\"httpStatus\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,7],null,[[\"id\",\"value\",\"classNames\",\"placeholder\"],[[30,[36,3],[[35,2],\"-input-faultInjection-abort-httpStatus\"],null],[35,1,[\"fault\",\"abort\",\"httpStatus\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.abort.httpStatus.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-faultInjection-abort-percent\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.abort.percent.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"fault\",\"abort\",\"percent\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,7],null,[[\"classNames\",\"min\",\"max\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[30,[36,3],[[35,2],\"-input-faultInjection-abort-percent\"],null],[35,1,[\"fault\",\"abort\",\"percent\"]],[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.abort.percent.placeholder\"],null]]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              %\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.delay.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-faultInjection-delay-fixedDelay\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.delay.fixedDelay.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"fault\",\"delay\",\"fixedDelay\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-faultInjection-delay-fixedDelay\"],null],[35,1,[\"fault\",\"delay\",\"fixedDelay\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.delay.fixedDelay.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-faultInjection-delay-percent\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.delay.percent.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"fault\",\"delay\",\"percent\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,7],null,[[\"classNames\",\"min\",\"max\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"0\",\"100\",[30,[36,3],[[35,2],\"-input-faultInjection-delay-percent\"],null],[35,1,[\"fault\",\"delay\",\"percent\"]],[30,[36,0],[\"cruVirtualService.http.routes.faultInjection.delay.percent.placeholder\"],null]]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              %\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"hr\"],[14,0,\"mt-20\"],[12],[13],[2,\"\\n\\n    \"],[10,\"label\"],[14,0,\"acc-label pb-5\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"text-black\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.mirror.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-mirror-host\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.mirror.host.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"mirror\",\"host\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,6],null,[[\"namespaceId\",\"value\",\"showLabel\"],[[35,5,[\"id\"]],[35,1,[\"mirror\",\"host\"]],false]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[15,\"for\",[31,[[30,[36,3],[[35,2],\"-input-mirror-subset\"],null]]]],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"cruVirtualService.http.routes.mirror.subset.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,9],null,[[\"editable\",\"value\"],[[35,8],[35,1,[\"mirror\",\"subset\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,4],null,[[\"type\",\"id\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[30,[36,3],[[35,2],\"-input-mirror-subset\"],null],[35,1,[\"mirror\",\"subset\"]],\"form-control\",[30,[36,0],[\"cruVirtualService.http.routes.mirror.subset.placeholder\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[1,[30,[36,10],null,[[\"editing\",\"model\"],[[35,8],[35,1,[\"mirror\"]]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"route\",\"elementId\",\"concat\",\"input\",\"namespace\",\"istio-host-select\",\"input-integer\",\"editing\",\"input-or-display\",\"port-selector\",\"action\",\"http-route-match\",\"-track-array\",\"each\",\"showMatch\",\"isFirst\",\"unless\",\"isLast\",\"and\",\"if\",\"isNew\",\"hosts\",\"httpRouteDestinations\",\"http-route-destination\",\"advanced\",\"advanced-section\"]}",
    "moduleName": "istio/components/virtual-service-http-route-row/template.hbs"
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-row/component", ["exports", "istio/components/virtual-service-row/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    model: null,
    tagName: ''
  });

  _exports.default = _default;
});
define("istio/components/virtual-service-row/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PGzuy1ev",
    "block": "{\"symbols\":[],\"statements\":[[10,\"tr\"],[14,0,\"main-row\"],[12],[2,\"\\n  \"],[10,\"td\"],[14,\"valign\",\"middle\"],[14,0,\"row-check\"],[14,5,\"padding-top: 2px;\"],[12],[2,\"\\n    \"],[1,[30,[36,1],null,[[\"nodeId\"],[[35,0,[\"id\"]]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"state\"]]]]],[14,0,\"state\"],[12],[2,\"\\n    \"],[1,[30,[36,3],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"name\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,4],null,[[\"route\",\"model\"],[\"virtual-service.detail\",[35,0,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displayName\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"hosts\"]]]]],[14,0,\"clip\"],[12],[2,\"\\n\"],[6,[37,5],null,[[\"type\",\"tooltipTemplate\",\"model\",\"inlineBlock\"],[\"tooltip-basic\",\"tooltip-multi-lines\",[35,0,[\"hosts\"]],true]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[35,0,[\"displayHostsString\"]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"created\"]]]]],[14,0,\"text-right pr-20\"],[12],[2,\"\\n    \"],[1,[30,[36,6],[[35,0,[\"created\"]]],null]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"td\"],[15,\"data-title\",[31,[[34,2,[\"actions\"]]]]],[14,0,\"actions\"],[12],[2,\"\\n    \"],[1,[30,[36,7],null,[[\"model\"],[[35,0]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"model\",\"check-box\",\"dt\",\"badge-state\",\"link-to\",\"tooltip-element\",\"date-calendar\",\"action-menu\"]}",
    "moduleName": "istio/components/virtual-service-row/template.hbs"
  });

  _exports.default = _default;
});
define("istio/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'istio/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "istio/cookies/service");
define("istio/destination-rule/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back() {
        return this.transitionToRoute('project-istio.destination-rules.index');
      },

      cancel() {
        this.send('goToPrevious');
      }

    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      const original = this.modelFor('destination-rule.detail').destinationRule;
      return Ember.RSVP.hash({
        destinationRule: original.clone()
      });
    }

  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sY2pt+Rq",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[35,1,[\"destinationRule\"]],\"edit\",[30,[36,0],[[32,0],\"back\"],null],[30,[36,0],[[32,0],\"cancel\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"model\",\"cru-destination-rule\"]}",
    "moduleName": "istio/destination-rule/detail/edit/template.hbs"
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "32kHmTey",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"model\",\"mode\"],[[35,0,[\"destinationRule\"]],\"view\"]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"cru-destination-rule\"]}",
    "moduleName": "istio/destination-rule/detail/index/template.hbs"
  });

  _exports.default = _default;
});
define("istio/destination-rule/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      const store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        destinationRule: store.find('destinationrule', params.id)
      });
    }

  });

  _exports.default = _default;
});
define("istio/destination-rule/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done() {
        return this.transitionToRoute('project-istio.destination-rules.index');
      },

      cancel() {
        this.send('goToPrevious');
      }

    }
  });

  _exports.default = _default;
});
define("istio/destination-rule/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      const store = Ember.get(this, 'store');
      const deps = {};

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('destinationrule', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(hash => {
        let destinationRule;
        let namespaceId = params.namespaceId;
        let namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          destinationRule = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          destinationRule = store.createRecord({
            type: 'destinationrule',
            namespaceId,
            subsets: []
          });
        }

        hash.destinationRule = destinationRule;
        return hash;
      });
    },

    resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/destination-rule/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Gcd+K8nZ",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[35,1,[\"destinationRule\"]],\"new\",[30,[36,0],[[32,0],\"done\"],null],[30,[36,0],[[32,0],\"cancel\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"model\",\"cru-destination-rule\"]}",
    "moduleName": "istio/destination-rule/new/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/digital-ocean/service", "istio/digital-ocean/service");
define.alias("shared/endpoint/service", "istio/endpoint/service");
define("istio/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "istio/resolver", "istio/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    modulePrefix
  } = _environment.default;

  const Eng = _engine.default.extend({
    modulePrefix,
    Resolver: _resolver.default,
    dependencies: {
      services: ['app', 'intl', 'scope', 'session', 'modal', 'store', 'catalog', 'globalStore', 'router', 'clusterStore', 'tooltip'],
      externalRoutes: ['authenticated.cluster.istio.cluster-setting']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "istio/features/service");
define("istio/gateway/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back() {
        return this.transitionToRoute('project-istio.gateways.index');
      },

      cancel() {
        this.send('goToPrevious');
      }

    }
  });

  _exports.default = _default;
});
define("istio/gateway/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      const original = this.modelFor('gateway.detail');
      return original.clone();
    }

  });

  _exports.default = _default;
});
define("istio/gateway/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pc9rRz0m",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[35,1],\"edit\",[30,[36,0],[[32,0],\"back\"],null],[30,[36,0],[[32,0],\"cancel\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"model\",\"cru-gateway\"]}",
    "moduleName": "istio/gateway/detail/edit/template.hbs"
  });

  _exports.default = _default;
});
define("istio/gateway/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "49BYb6LT",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"model\",\"mode\"],[[35,0],\"view\"]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"cru-gateway\"]}",
    "moduleName": "istio/gateway/detail/index/template.hbs"
  });

  _exports.default = _default;
});
define("istio/gateway/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      const store = Ember.get(this, 'store');
      return store.find('gateway', params.id);
    }

  });

  _exports.default = _default;
});
define("istio/gateway/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done() {
        return this.transitionToRoute('project-istio.gateways.index');
      },

      cancel() {
        this.send('goToPrevious');
      }

    }
  });

  _exports.default = _default;
});
define("istio/gateway/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      const store = Ember.get(this, 'store');
      const deps = {};

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('gateway', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(hash => {
        let gateway;
        let namespaceId = params.namespaceId;
        let namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          gateway = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          gateway = store.createRecord({
            type: 'gateway',
            servers: [],
            selector: {
              '': ''
            }
          });
        }

        hash.gateway = gateway;
        return hash;
      });
    },

    resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/gateway/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Fb9xlfOg",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[35,1,[\"gateway\"]],\"new\",[30,[36,0],[[32,0],\"done\"],null],[30,[36,0],[[32,0],\"cancel\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"model\",\"cru-gateway\"]}",
    "moduleName": "istio/gateway/new/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/google/service", "istio/google/service");
define.alias("shared/grafana/service", "istio/grafana/service");
define.alias("shared/growl/service", "istio/growl/service");
define.alias("ember-element-helper/helpers/-element", "istio/helpers/-element");
define.alias("ember-math-helpers/helpers/abs", "istio/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "istio/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "istio/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "istio/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "istio/helpers/and");
define.alias("shared/helpers/array-includes", "istio/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "istio/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "istio/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "istio/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "istio/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "istio/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "istio/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "istio/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "istio/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "istio/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "istio/helpers/cosh");
define.alias("shared/helpers/date-calendar", "istio/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "istio/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "istio/helpers/date-recent");
define.alias("shared/helpers/date-str", "istio/helpers/date-str");
define.alias("shared/helpers/default-str", "istio/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "istio/helpers/div");
define.alias("shared/helpers/driver-name", "istio/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "istio/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "istio/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "istio/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "istio/helpers/floor");
define.alias("ember-intl/helpers/format-date", "istio/helpers/format-date");
define.alias("shared/helpers/format-ip", "istio/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "istio/helpers/format-message");
define.alias("shared/helpers/format-mib", "istio/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "istio/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "istio/helpers/format-relative");
define.alias("shared/helpers/format-si", "istio/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "istio/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "istio/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "istio/helpers/gcd");
define.alias("shared/helpers/get-card-class", "istio/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "istio/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "istio/helpers/gte");
define.alias("shared/helpers/has-override", "istio/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "istio/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "istio/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "istio/helpers/imul");
define.alias("ember-truth-helpers/helpers/is-array", "istio/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "istio/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "istio/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "istio/helpers/is-equal");
define.alias("shared/helpers/join-array", "istio/helpers/join-array");
define.alias("ember-math-helpers/helpers/lcm", "istio/helpers/lcm");
define.alias("liquid-fire/helpers/lf-lock-model", "istio/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "istio/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "istio/helpers/link-ssl-domain");
define("istio/helpers/linkify", ["exports", "linkifyjs/string", "shared/helpers/linkify"], function (_exports, _string, _linkify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkify.default;
    }
  });
});
define.alias("ember-math-helpers/helpers/log-e", "istio/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "istio/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "istio/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "istio/helpers/log2");
define.alias("shared/helpers/lower-case", "istio/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "istio/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "istio/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "istio/helpers/max");
define.alias("ember-math-helpers/helpers/min", "istio/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "istio/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "istio/helpers/mult");
define.alias("shared/helpers/nl-to-br", "istio/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "istio/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "istio/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "istio/helpers/or");
define.alias("shared/helpers/parse-camelcase", "istio/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "istio/helpers/pow");
define.alias("shared/helpers/pretty-cron", "istio/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "istio/helpers/random");
define.alias("shared/helpers/rbac-allows", "istio/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "istio/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "istio/helpers/round");
define.alias("shared/helpers/run-time", "istio/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "istio/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "istio/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "istio/helpers/sqrt");
define.alias("shared/helpers/str-replace", "istio/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "istio/helpers/sub");
define.alias("ember-intl/helpers/t", "istio/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "istio/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "istio/helpers/tanh");
define.alias("shared/helpers/to-json", "istio/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "istio/helpers/trunc");
define.alias("shared/helpers/uc-first", "istio/helpers/uc-first");
define.alias("shared/helpers/upper-case", "istio/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "istio/helpers/xor");
define.alias("shared/host/service", "istio/host/service");
define("istio/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const DEFAULT_ROUTE = 'metrics';
  const VALID_ROUTES = [DEFAULT_ROUTE, 'graph', 'rules', 'virtual-services', 'destination-rules', 'gateways'];

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),

    redirect() {
      let route = Ember.get(this, `session.${_constants.default.SESSION.ISTIO_ROUTE}`);

      if (!VALID_ROUTES.includes(route)) {
        route = DEFAULT_ROUTE;
      }

      this.replaceWith(`project-istio.${route}`);
    }

  });

  _exports.default = _default;
});
define("istio/initializers/app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('controller', 'app', 'service:app');
    application.inject('route', 'app', 'service:app');
    application.inject('view', 'app', 'service:app');
    application.inject('component', 'app', 'service:app');
    application.inject('model', 'app', 'service:app');
  }

  var _default = {
    name: 'app',
    initialize
  };
  _exports.default = _default;
});
define("istio/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-api-store',
    initialize: (0, _store.default)()
  };
  _exports.default = _default;
});
define("istio/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
  _exports.default = _default;
});
define("istio/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',

    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }

        });
      }
    }

  };
  _exports.default = _default;
});
define.alias("shared/istio/service", "istio/istio/service");
define.alias("shared/k8s/service", "istio/k8s/service");
define.alias("shared/linode/service", "istio/linode/service");
define.alias("shared/mixins/cattle-transitioning-resource", "istio/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "istio/mixins/console");
define.alias("shared/mixins/container-choices", "istio/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "istio/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "istio/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "istio/mixins/filter-state");
define.alias("shared/mixins/grafana", "istio/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "istio/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "istio/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "istio/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "istio/mixins/manage-labels");
define.alias("shared/mixins/metrics", "istio/mixins/metrics");
define.alias("shared/mixins/modal-base", "istio/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "istio/mixins/new-or-edit");
define.alias("shared/mixins/preload", "istio/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "istio/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "istio/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "istio/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "istio/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "istio/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "istio/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "istio/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "istio/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "istio/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "istio/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "istio/mixins/upgrade-component");
define.alias("shared/mixins/upload", "istio/mixins/upload");
define.alias("shared/modal/service", "istio/modal/service");
define.alias("@ember/render-modifiers/modifiers/did-insert", "istio/modifiers/did-insert");
define.alias("@ember/render-modifiers/modifiers/did-update", "istio/modifiers/did-update");
define.alias("@ember/render-modifiers/modifiers/will-destroy", "istio/modifiers/will-destroy");
define.alias("shared/oauth/service", "istio/oauth/service");
define.alias("shared/oci/service", "istio/oci/service");
define.alias("shared/pipeline-github/service", "istio/pipeline-github/service");
define.alias("shared/pnap/service", "istio/pnap/service");
define.alias("shared/prefs/service", "istio/prefs/service");
define("istio/project-istio/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    router: Ember.inject.service(),
    currentRouteName: Ember.computed.alias('router.currentRouteName')
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'host',
      searchField: 'host',
      translationKey: 'destinationRulePage.table.host.label',
      width: 200
    }, {
      name: 'subsets',
      searchField: 'displaySubsetsString',
      translationKey: 'destinationRulePage.table.subsets.label',
      width: 200
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),

    model()
    /* params, transition */
    {
      const store = Ember.get(this, 'store');
      const projectId = Ember.get(this.scope, 'currentProject.id');
      return store.findAll('destinationrule').then(data => {
        return {
          data,
          supported: true,
          projectId
        };
      }).catch(() => {
        return {
          data: [],
          supported: false,
          projectId
        };
      });
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.setProperties(this, {
        [`session.${_constants.default.SESSION.ISTIO_ROUTE}`]: 'destination-rules',
        [`session.${_constants.default.SESSION.PROJECT_ROUTE}`]: 'authenticated.project.istio.project-istio.destination-rules'
      });
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/destination-rules/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UpSPdxVc",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[6,[37,3],[[35,12,[\"supported\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"pl-0 pr-0\"],[12],[2,\"\\n\"],[6,[37,11],null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid\",[35,10],[35,5],[35,9],true,[35,8],true,\"namespaceId\",\"namespace\",\"pagination.destinationRules\",[35,7]]],[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,6],null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[32,3],[35,5],[32,1,[\"subMatches\"]],[32,1,[\"fullColspan\"]],[32,4]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"group\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"model\",\"fullColspan\"],[[32,3,[\"ref\"]],[32,1,[\"fullColspan\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"nomatch\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"destinationRulePage.noMatch\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"norows\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"destinationRulePage.noData\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1,2,3,4]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,1],null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[30,[36,0],[\"destinationRulePage.notSupported\"],[[\"htmlSafe\"],[true]]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"banner-message\",\"eq\",\"if\",\"namespace-group\",\"searchText\",\"destination-rule-row\",\"headers\",\"descending\",\"sortBy\",\"rows\",\"sortable-table\",\"model\"]}",
    "moduleName": "istio/project-istio/destination-rules/index/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/gateways/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'hosts',
      searchField: 'hosts',
      translationKey: 'gatewayPage.table.hosts.label'
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/gateways/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),

    model() {
      const store = this.store;
      const projectId = Ember.get(store, 'currentProject.id');
      return store.findAll('gateway').then(data => {
        return {
          data,
          supported: true,
          projectId
        };
      }).catch(() => {
        return {
          data: [],
          supported: false,
          projectId
        };
      });
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.setProperties(this, {
        [`session.${_constants.default.SESSION.ISTIO_ROUTE}`]: 'gateways',
        [`session.${_constants.default.SESSION.PROJECT_ROUTE}`]: 'authenticated.project.istio.project-istio.gateways'
      });
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/gateways/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zR8eBvGu",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[6,[37,3],[[35,12,[\"supported\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"pl-0 pr-0\"],[12],[2,\"\\n\"],[6,[37,11],null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid\",[35,10],[35,5],[35,9],true,[35,8],true,\"namespaceId\",\"namespace\",\"pagination.gateways\",[35,7]]],[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,6],null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[32,3],[35,5],[32,1,[\"subMatches\"]],[32,1,[\"fullColspan\"]],[32,4]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"group\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"model\",\"fullColspan\"],[[32,3,[\"ref\"]],[32,1,[\"fullColspan\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"nomatch\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"gatewayPage.noMatch\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"norows\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"gatewayPage.noData\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1,2,3,4]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[30,[36,0],[\"gatewayPage.notSupported\"],[[\"htmlSafe\"],[true]]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"banner-message\",\"eq\",\"if\",\"namespace-group\",\"searchText\",\"gateway-row\",\"headers\",\"descending\",\"sortBy\",\"rows\",\"sortable-table\",\"model\"]}",
    "moduleName": "istio/project-istio/gateways/index/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    clusterStore: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    istio: Ember.inject.service(),
    session: Ember.inject.service(),
    scope: Ember.inject.service(),

    beforeModel() {
      const clusterId = Ember.get(this.scope, 'currentCluster.id');
      return this.istio.checkKialiUiEndpoint(clusterId);
    },

    model() {
      const projectId = Ember.get(this.scope, 'currentProject.id');
      const namespaces = Ember.get(this, 'clusterStore').findAll('namespace').then(data => {
        const namespaces = data.filter(ns => {
          if (Ember.get(ns, 'projectId') !== projectId) {
            return false;
          }

          const labels = Ember.get(ns, 'labels') || {};
          return labels['istio-injection'] === 'enabled';
        });
        return namespaces;
      });
      return Ember.RSVP.hash({
        namespaces
      }).then(({
        namespaces
      }) => {
        return {
          namespaces
        };
      });
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.setProperties(this, {
        [`session.${_constants.default.SESSION.ISTIO_ROUTE}`]: 'project-istio.graph',
        [`session.${_constants.default.SESSION.PROJECT_ROUTE}`]: 'authenticated.project.istio.project-istio.graph'
      });
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/graph/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bnu9zdZa",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"namespaces\"],[[35,0,[\"namespaces\"]]]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"traffic-monitoring\"]}",
    "moduleName": "istio/project-istio/graph/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    setDefaultRoute: Ember.on('activate', function () {
      Ember.setProperties(this, {
        [`session.${_constants.default.SESSION.ISTIO_ROUTE}`]: 'project-istio.metrics',
        [`session.${_constants.default.SESSION.PROJECT_ROUTE}`]: 'authenticated.project.istio.project-istio.metrics'
      });
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KR9qCrbw",
    "block": "{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"project-traffic-metrics\"]}",
    "moduleName": "istio/project-istio/metrics/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const GRAPH_ROUTE = 'project-istio.graph';

  var _default = Ember.Route.extend({
    clusterStore: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    istio: Ember.inject.service(),
    session: Ember.inject.service(),
    scope: Ember.inject.service(),

    model() {
      const clusterId = Ember.get(this.scope, 'currentCluster.id');
      return this.istio.checkKialiUiEndpoint(clusterId).then(() => {
        return {
          iconDisabled: false
        };
      }).catch(() => {
        return {
          iconDisabled: true
        };
      });
    },

    afterModel(model, transition) {
      if (model.iconDisabled && (transition.targetName || '').indexOf(GRAPH_ROUTE) > -1) {
        this.transitionTo('project-istio.metrics');
      }
    }

  });

  _exports.default = _default;
});
define("istio/project-istio/rule-detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    catalog: Ember.inject.service(),

    beforeModel() {
      return Ember.get(this, 'catalog').fetchUnScopedCatalogs();
    },

    model(params) {
      const store = Ember.get(this, 'store');
      return store.find('app', Ember.get(params, 'rule_id'));
    },

    afterModel(model) {
      return Ember.get(this, 'catalog').fetchAppTemplates([model]);
    }

  });

  _exports.default = _default;
});
define("istio/project-istio/rule-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Q9BBfkUU",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"pull-left\"],[12],[2,\"\\n    \"],[10,\"h1\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[1,[30,[36,5],[\"ruleDetailPage.header\"],[[\"appName\"],[[35,0,[\"displayName\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n    \"],[1,[30,[36,12],null,[[\"model\"],[[35,0]]]]],[2,\"\\n    \"],[1,[30,[36,13],null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[35,0],false,\"ml-10 pull-right\",\"sm\"]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,4],[[35,0,[\"description\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,11],null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[30,[36,10],[[35,0,[\"description\"]]],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,0,[\"showTransitioningMessage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[15,0,[31,[[34,0,[\"stateColor\"]]]]],[12],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"\\n      \"],[1,[30,[36,9],[[35,0,[\"transitioningMessage\"]]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"section\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row banner bg-info basics mb-0\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"generic.version\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[35,0,[\"externalIdInfo\",\"version\"]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"generic.namespace\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[35,0,[\"namespace\",\"displayName\"]]],[2,\" \"],[1,[30,[36,14],null,[[\"clipboardText\",\"size\"],[[35,0,[\"namespace\",\"id\"]],\"small\"]]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"generic.created\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,15],[[35,0,[\"created\"]]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"section\"],[12],[2,\"\\n\"],[6,[37,16],null,null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,6],null,[[\"resourceType\",\"conditions\",\"expandAll\",\"expandFn\",\"expandOnInit\"],[[30,[36,5],[\"generic.istioRule\"],null],[35,0,[\"status\",\"conditions\"]],[32,1,[\"expandAll\"]],[32,2],false]]]],[2,\"\\n\\n\"],[6,[37,8],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\"],[[30,[36,5],[\"ruleDetailPage.answers.title\"],null],[30,[36,5],[\"ruleDetailPage.answers.detail\"],null],[32,1,[\"expandAll\"]],[30,[36,7],[[32,0],[32,2]],null],false]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,3],null,[[\"editing\",\"initialMap\",\"showNoneLabel\",\"keyLabel\"],[false,[35,0,[\"answers\"]],[30,[36,2],[[35,0,[\"valuesYaml\"]]],null],\"ruleDetailPage.answers.variable\"]]]],[2,\"\\n\"],[6,[37,4],[[35,0,[\"valuesYaml\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],null,[[\"code\",\"language\"],[[35,0,[\"valuesYaml\"]],\"yaml\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]],[13],[2,\"\\n\\n\"],[1,[30,[36,17],null,[[\"rule\"],[[35,0]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"model\",\"code-block\",\"not\",\"form-key-value\",\"if\",\"t\",\"resource-condition-list\",\"action\",\"accordion-list-item\",\"uc-first\",\"linkify\",\"banner-message\",\"badge-state\",\"action-menu\",\"copy-to-clipboard\",\"date-calendar\",\"accordion-list\",\"istio-yaml\"]}",
    "moduleName": "istio/project-istio/rule-detail/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service()
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    catalog: Ember.inject.service(),
    scope: Ember.inject.service(),

    beforeModel() {
      return Ember.get(this, 'catalog').fetchUnScopedCatalogs();
    },

    model()
    /* params, transition */
    {
      const projectId = Ember.get(this.scope, 'currentProject.id');
      return Ember.get(this, 'store').findAll('app').then(apps => {
        return {
          apps,
          projectId
        };
      });
    },

    afterModel(model) {
      return Ember.get(this, 'catalog').fetchAppTemplates(Ember.get(model, 'apps'));
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.setProperties(this, {
        [`session.${_constants.default.SESSION.ISTIO_ROUTE}`]: 'project-istio.rules',
        [`session.${_constants.default.SESSION.PROJECT_ROUTE}`]: 'authenticated.project.istio.project-istio.rules'
      });
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/rules/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dH2O/QIg",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"apps\"],[[35,0,[\"apps\"]]]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"istio-rules-table\"]}",
    "moduleName": "istio/project-istio/rules/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "byvYdAFh",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,1],[[35,0,[\"currentCluster\",\"istioEnabled\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,13],null,[[\"iconDisabled\"],[[35,12,[\"iconDisabled\"]]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[11,\"button\"],[24,0,\"btn btn-sm bg-default mr-10\"],[16,\"disabled\",[30,[36,10],[[30,[36,4],null,[[\"resource\",\"scope\",\"permission\"],[\"virtualservice\",\"project\",\"create\"]]],[30,[36,4],null,[[\"resource\",\"scope\",\"permission\"],[\"destinationrule\",\"project\",\"create\"]]]],null]],[24,4,\"button\"],[4,[38,11],[[32,0],\"importYaml\"],null],[12],[2,\"\\n      \"],[1,[30,[36,2],[\"nav.containers.importCompose\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,1],[[30,[36,7],[[35,6],\"authenticated.project.istio.project-istio.rules\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"a\"],[14,0,\"btn btn-sm bg-primary mr-10\"],[15,6,[31,[[30,[36,9],[\"authenticated.project.project-catalogs\",[35,0,[\"currentProject\",\"id\"]],[30,[36,8],null,[[\"istio\"],[true]]]],null]]]],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-gear icon-fw\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[1,[30,[36,2],[\"nav.apps.manage\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"a\"],[14,0,\"btn btn-sm bg-primary\"],[15,6,[31,[[30,[36,9],[\"catalog-tab\",[35,0,[\"currentProject\",\"id\"]],[30,[36,8],null,[[\"istio\"],[true]]]],null]]]],[15,\"disabled\",[30,[36,4],null,[[\"resource\",\"scope\",\"permission\"],[\"app\",\"project\",\"create\"]]]],[12],[2,\"\\n        \"],[10,\"span\"],[12],[1,[30,[36,2],[\"rulesPage.new\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,1],[[30,[36,7],[[35,6],\"authenticated.project.istio.project-istio.gateways.index\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,5],null,[[\"class\",\"disabled\",\"route\",\"model\"],[\"btn btn-sm bg-primary\",[30,[36,4],null,[[\"resource\",\"scope\",\"permission\"],[\"gateway\",\"project\",\"create\"]]],\"gateway.new\",[35,0,[\"currentProject\",\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,2],[\"istio.nav.gateways.add\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,1],[[30,[36,7],[[35,6],\"authenticated.project.istio.project-istio.destination-rules.index\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,5],null,[[\"class\",\"disabled\",\"route\",\"model\"],[\"btn btn-sm bg-primary\",[30,[36,4],null,[[\"resource\",\"scope\",\"permission\"],[\"destinationrule\",\"project\",\"create\"]]],\"destination-rule.new\",[35,0,[\"currentProject\",\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,2],[\"istio.nav.destinationRules.add\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,1],[[30,[36,7],[[35,6],\"authenticated.project.istio.project-istio.virtual-services.index\"],null]],null,[[\"default\"],[{\"statements\":[[6,[37,5],null,[[\"class\",\"disabled\",\"route\",\"model\"],[\"btn btn-sm bg-primary\",[30,[36,4],null,[[\"resource\",\"scope\",\"permission\"],[\"virtualservice\",\"project\",\"create\"]]],\"virtual-service.new\",[35,0,[\"currentProject\",\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,2],[\"istio.nav.virtualServices.add\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"  \"],[1,[30,[36,15],[[30,[36,14],null,null]],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,1],[[35,0,[\"currentCluster\",\"isWindows\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[8,\"banner-message\",[],[[\"@color\",\"@message\"],[\"bg-warning\",[30,[36,2],[\"windowsCluster.istio\"],null]]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,3],null,[[\"color\",\"message\"],[\"bg-info\",[30,[36,2],[[30,[36,1],[[35,0,[\"currentCluster\",\"systemProject\"]],\"projectIstioPage.info.notEnabled\",\"projectIstioPage.info.notOwner\"],null]],[[\"clusterId\",\"htmlSafe\"],[[35,0,[\"currentCluster\",\"id\"]],true]]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"scope\",\"if\",\"t\",\"banner-message\",\"rbac-prevents\",\"link-to\",\"currentRouteName\",\"eq\",\"query-params\",\"href-to\",\"or\",\"action\",\"model\",\"istio-nav\",\"-outlet\",\"component\"]}",
    "moduleName": "istio/project-istio/template.hbs"
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    sortBy: 'name',
    headers: [{
      name: 'state',
      sort: ['sortState', 'displayName'],
      searchField: 'displayState',
      translationKey: 'generic.state',
      width: 120
    }, {
      name: 'name',
      searchField: 'displayName',
      translationKey: 'generic.name'
    }, {
      name: 'hosts',
      searchField: 'hosts',
      translationKey: 'virtualServicePage.table.hosts.label',
      width: 200
    }, {
      name: 'created',
      sort: ['created', 'id'],
      classNames: 'text-right pr-20',
      searchField: false,
      translationKey: 'generic.created'
    }],
    rows: Ember.computed.alias('model.data')
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),

    model()
    /* params, transition */
    {
      const store = Ember.get(this, 'store');
      const projectId = Ember.get(this.scope, 'currentProject.id');
      return store.findAll('virtualservice').then(data => {
        return {
          data,
          supported: true,
          projectId
        };
      }).catch(() => {
        return {
          data: [],
          supported: false,
          projectId
        };
      });
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.setProperties(this, {
        [`session.${_constants.default.SESSION.ISTIO_ROUTE}`]: 'virtual-services',
        [`session.${_constants.default.SESSION.PROJECT_ROUTE}`]: 'authenticated.project.istio.project-istio.virtual-services'
      });
    })
  });

  _exports.default = _default;
});
define("istio/project-istio/virtual-services/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xhe6XLzH",
    "block": "{\"symbols\":[\"sortable\",\"kind\",\"inst\",\"dt\"],\"statements\":[[6,[37,3],[[35,12,[\"supported\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"pl-0 pr-0\"],[12],[2,\"\\n\"],[6,[37,11],null,[[\"classNames\",\"body\",\"searchText\",\"sortBy\",\"bulkActions\",\"descending\",\"subRows\",\"groupByKey\",\"groupByRef\",\"pagingLabel\",\"headers\"],[\"grid\",[35,10],[35,5],[35,9],true,[35,8],true,\"namespaceId\",\"namespace\",\"pagination.virtualServices\",[35,7]]],[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,6],null,[[\"model\",\"searchText\",\"subMatches\",\"fullColspan\",\"dt\"],[[32,3],[35,5],[32,1,[\"subMatches\"]],[32,1,[\"fullColspan\"]],[32,4]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"group\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"model\",\"fullColspan\"],[[32,3,[\"ref\"]],[32,1,[\"fullColspan\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"nomatch\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"virtualServicePage.noMatch\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,2],[[32,2],\"norows\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n          \"],[10,\"td\"],[15,\"colspan\",[31,[[32,1,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"virtualServicePage.noData\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1,2,3,4]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,1],null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[30,[36,0],[\"virtualServicePage.notSupported\"],[[\"htmlSafe\"],[true]]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"banner-message\",\"eq\",\"if\",\"namespace-group\",\"searchText\",\"virtual-service-row\",\"headers\",\"descending\",\"sortBy\",\"rows\",\"sortable-table\",\"model\"]}",
    "moduleName": "istio/project-istio/virtual-services/index/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/release-versions/service", "istio/release-versions/service");
define("istio/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "istio/resource-actions/service");
define.alias("shared/role-template/service", "istio/role-template/service");
define("istio/routes", ["exports", "ember-engines/routes"], function (_exports, _routes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _routes.default)(function () {
    this.route('cluster-setting');
    this.route('gateway', function () {
      this.route('new', {
        path: '/add'
      });
      this.route('detail', {
        path: '/:id'
      }, function () {
        this.route('edit');
      });
    });
    this.route('virtual-service', function () {
      this.route('new', {
        path: '/add'
      });
      this.route('detail', {
        path: '/:id'
      }, function () {
        this.route('edit');
      });
    });
    this.route('destination-rule', function () {
      this.route('new', {
        path: '/add'
      });
      this.route('detail', {
        path: '/:id'
      }, function () {
        this.route('edit');
      });
    });
    this.route('project-istio', function () {
      this.route('graph');
      this.route('metrics');
      this.route('rules');
      this.route('rule-detail', {
        path: '/rule-detail/:rule_id'
      });
      this.route('destination-rules', function () {
        this.route('index', {
          path: '/'
        });
      });
      this.route('virtual-services', function () {
        this.route('index', {
          path: '/'
        });
      });
      this.route('gateways', function () {
        this.route('index', {
          path: '/'
        });
      });
    });
  });

  _exports.default = _default;
});
define.alias("shared/saml/service", "istio/saml/service");
define.alias("shared/scope/service", "istio/scope/service");
define.alias("shared/security-scan-config/service", "istio/security-scan-config/service");
define.alias("ivy-codemirror/services/code-mirror", "istio/services/code-mirror");
define("istio/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "istio/services/intl");
define("istio/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "istio/session/service");
define.alias("shared/settings/service", "istio/settings/service");
define.alias("shared/shibboleth-auth/service", "istio/shibboleth-auth/service");
define.alias("shared/store-reset/service", "istio/store-reset/service");
define.alias("shared/tab-session/service", "istio/tab-session/service");
define("istio/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rT1QrsyE",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "istio/templates/application.hbs"
  });

  _exports.default = _default;
});
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-content", "istio/templates/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-trigger", "istio/templates/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown", "istio/templates/components/basic-dropdown");
define.alias("shared/tooltip/service", "istio/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "istio/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "istio/transitions/default");
define.alias("liquid-fire/transitions/explode", "istio/transitions/explode");
define.alias("liquid-fire/transitions/fade", "istio/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "istio/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "istio/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "istio/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "istio/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "istio/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "istio/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "istio/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "istio/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "istio/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "istio/transitions/wait");
define.alias("shared/user-language/service", "istio/user-language/service");
define.alias("shared/user-theme/service", "istio/user-theme/service");
define.alias("shared/utils/add-view-action", "istio/utils/add-view-action");
define.alias("shared/utils/additional-routes", "istio/utils/additional-routes");
define.alias("shared/utils/azure-choices", "istio/utils/azure-choices");
define.alias("shared/utils/browser-storage", "istio/utils/browser-storage");
define.alias("ember-basic-dropdown/utils/calculate-position", "istio/utils/calculate-position");
define.alias("shared/utils/constants", "istio/utils/constants");
define.alias("shared/utils/convert-yaml", "istio/utils/convert-yaml");
define.alias("shared/utils/debounce", "istio/utils/debounce");
define.alias("shared/utils/download-files", "istio/utils/download-files");
define.alias("shared/utils/errors", "istio/utils/errors");
define.alias("shared/utils/fetch-yaml", "istio/utils/fetch-yaml");
define("istio/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "istio/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "istio/utils/group-compound-layout");
define.alias("shared/utils/intl/missing-message", "istio/utils/intl/missing-message");
define.alias("shared/utils/load-script", "istio/utils/load-script");
define.alias("shared/utils/multi-stats", "istio/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "istio/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "istio/utils/parse-externalid");
define.alias("shared/utils/parse-port", "istio/utils/parse-port");
define.alias("shared/utils/parse-target", "istio/utils/parse-target");
define.alias("shared/utils/parse-unit", "istio/utils/parse-unit");
define.alias("shared/utils/parse-uri", "istio/utils/parse-uri");
define.alias("shared/utils/parse-version", "istio/utils/parse-version");
define.alias("shared/utils/percent-gauge", "istio/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "istio/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "istio/utils/pipelineStep");
define.alias("shared/utils/platform", "istio/utils/platform");
define.alias("shared/utils/queue", "istio/utils/queue");
define.alias("shared/utils/rackspace-choices", "istio/utils/rackspace-choices");
define.alias("shared/utils/search-text", "istio/utils/search-text");
define.alias("shared/utils/socket", "istio/utils/socket");
define.alias("shared/utils/sort", "istio/utils/sort");
define.alias("shared/utils/traffic-renderer", "istio/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "istio/utils/used-percent-gauge");
define.alias("shared/utils/util", "istio/utils/util");
define.alias("shared/version-choices/service", "istio/version-choices/service");
define("istio/virtual-service/detail/edit/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      back() {
        return this.transitionToRoute('project-istio.virtual-services.index');
      },

      cancel() {
        this.send('goToPrevious');
      }

    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/edit/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      const original = this.modelFor('virtual-service.detail').virtualService;
      return Ember.RSVP.hash({
        virtualService: original.clone()
      });
    }

  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PJeh+KkA",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[35,1,[\"virtualService\"]],\"edit\",[30,[36,0],[[32,0],\"back\"],null],[30,[36,0],[[32,0],\"cancel\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"model\",\"cru-virtual-service\"]}",
    "moduleName": "istio/virtual-service/detail/edit/template.hbs"
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fQLOMc7F",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"model\",\"mode\"],[[35,0,[\"virtualService\"]],\"view\"]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"cru-virtual-service\"]}",
    "moduleName": "istio/virtual-service/detail/index/template.hbs"
  });

  _exports.default = _default;
});
define("istio/virtual-service/detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      const store = Ember.get(this, 'store');
      return Ember.RSVP.hash({
        virtualService: store.find('virtualservice', params.id),
        gateways: store.find('gateway')
      });
    }

  });

  _exports.default = _default;
});
define("istio/virtual-service/new/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['id'],
    actions: {
      done() {
        return this.transitionToRoute('project-istio.virtual-services.index');
      },

      cancel() {
        this.send('goToPrevious');
      }

    }
  });

  _exports.default = _default;
});
define("istio/virtual-service/new/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model(params) {
      const store = Ember.get(this, 'store');
      const deps = {
        gateways: store.find('gateway')
      };

      if (Ember.get(params, 'id')) {
        deps['existing'] = store.find('virtualservice', params.id);
      }

      return Ember.RSVP.hash(deps, 'Load dependencies').then(hash => {
        let virtualService;
        let namespaceId = params.namespaceId;
        let namespace;

        if (namespaceId) {
          namespace = store.getById('namespace', namespaceId);
        } // If the namespace doesn't exist or isn't set, pick default


        if (!namespace) {
          namespace = store.all('namespace').findBy('isDefault', true);

          if (namespace) {
            namespaceId = Ember.get(namespace, 'id');
          }
        }

        if (hash.existing) {
          virtualService = hash.existing.cloneForNew();
          delete hash.existing;
        } else {
          virtualService = store.createRecord({
            type: 'virtualservice',
            namespaceId,
            http: [],
            gateways: [],
            hosts: []
          });
        }

        hash.virtualService = virtualService;
        return hash;
      });
    },

    resetController(controller, isExisting) {
      if (isExisting) {
        Ember.setProperties(controller, {
          namespaceId: null,
          id: null
        });
      }
    }

  });

  _exports.default = _default;
});
define("istio/virtual-service/new/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IieR/4fz",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"mode\",\"done\",\"cancel\"],[[35,1,[\"virtualService\"]],\"new\",[30,[36,0],[[32,0],\"done\"],null],[30,[36,0],[[32,0],\"cancel\"],null]]]]]],\"hasEval\":false,\"upvars\":[\"action\",\"model\",\"cru-virtual-service\"]}",
    "moduleName": "istio/virtual-service/new/template.hbs"
  });

  _exports.default = _default;
});//# sourceMappingURL=engine.map
