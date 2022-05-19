define.alias("shared/access/service", "logging/access/service");
define.alias("shared/all-dns-records/service", "logging/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "logging/all-storage-classes/service");
define.alias("shared/all-workloads/service", "logging/all-workloads/service");
define.alias("shared/amazon/util", "logging/amazon/util");
define.alias("shared/azure-ad/service", "logging/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "logging/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "logging/calculate-position/util");
define.alias("shared/capabilities/service", "logging/capabilities/service");
define.alias("shared/catalog/service", "logging/catalog/service");
define.alias("shared/cis-helpers/service", "logging/cis-helpers/service");
define("logging/cldrs/ar", ["exports"], function (_exports) {
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
define("logging/cldrs/de", ["exports"], function (_exports) {
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
define("logging/cldrs/en", ["exports"], function (_exports) {
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
define("logging/cldrs/es", ["exports"], function (_exports) {
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
define("logging/cldrs/fa", ["exports"], function (_exports) {
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
define("logging/cldrs/fr", ["exports"], function (_exports) {
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
define("logging/cldrs/hu", ["exports"], function (_exports) {
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
define("logging/cldrs/it", ["exports"], function (_exports) {
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
define("logging/cldrs/ja", ["exports"], function (_exports) {
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
define("logging/cldrs/km", ["exports"], function (_exports) {
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
define("logging/cldrs/ko", ["exports"], function (_exports) {
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
define("logging/cldrs/nb", ["exports"], function (_exports) {
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
define("logging/cldrs/nl", ["exports"], function (_exports) {
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
define("logging/cldrs/none", ["exports"], function (_exports) {
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
define("logging/cldrs/pt", ["exports"], function (_exports) {
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
define("logging/cldrs/ru", ["exports"], function (_exports) {
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
define("logging/cldrs/sh", ["exports"], function (_exports) {
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
define("logging/cldrs/sv", ["exports"], function (_exports) {
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
define("logging/cldrs/tr", ["exports"], function (_exports) {
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
define("logging/cldrs/uk", ["exports"], function (_exports) {
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
define("logging/cldrs/vi", ["exports"], function (_exports) {
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
define("logging/cldrs/zh", ["exports"], function (_exports) {
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
define.alias("shared/cluster-templates/service", "logging/cluster-templates/service");
define.alias("shared/code-mirror/service", "logging/code-mirror/service");
define.alias("@glimmer/component/-private/ember-component-manager", "logging/component-managers/glimmer");
define("logging/components/-dynamic-element-alt", ["exports"], function (_exports) {
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
define("logging/components/-dynamic-element", ["exports"], function (_exports) {
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
define.alias("liquid-fire/components/-lf-get-outlet-state", "logging/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "logging/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "logging/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "logging/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "logging/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "logging/components/advanced-section/component");
define.alias("shared/components/aks-node-pool-row/component", "logging/components/aks-node-pool-row/component");
define.alias("shared/components/annotations-section/component", "logging/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "logging/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "logging/components/api-field/component");
define.alias("shared/components/apikey-row/component", "logging/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "logging/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "logging/components/badge-state/component");
define.alias("shared/components/banner-message/component", "logging/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown-content", "logging/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/components/basic-dropdown-trigger", "logging/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/components/basic-dropdown", "logging/components/basic-dropdown");
define.alias("shared/components/btn-toggle/component", "logging/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "logging/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "logging/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "logging/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "logging/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "logging/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "logging/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aks/component", "logging/components/cluster-driver/driver-aks/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "logging/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "logging/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-eks/component", "logging/components/cluster-driver/driver-eks/component");
define.alias("shared/components/cluster-driver/driver-gke/component", "logging/components/cluster-driver/driver-gke/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "logging/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "logging/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import-aks/component", "logging/components/cluster-driver/driver-import-aks/component");
define.alias("shared/components/cluster-driver/driver-import-eks/component", "logging/components/cluster-driver/driver-import-eks/component");
define.alias("shared/components/cluster-driver/driver-import-gke/component", "logging/components/cluster-driver/driver-import-gke/component");
define.alias("shared/components/cluster-driver/driver-import/component", "logging/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-linodelke/component", "logging/components/cluster-driver/driver-linodelke/component");
define.alias("shared/components/cluster-driver/driver-oracleoke/component", "logging/components/cluster-driver/driver-oracleoke/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "logging/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "logging/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "logging/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "logging/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "logging/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "logging/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "logging/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "logging/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "logging/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "logging/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "logging/components/confirm-delete/component");
define.alias("shared/components/container-shell/component", "logging/components/container-shell/component");
define.alias("shared/components/containers-header/component", "logging/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "logging/components/copy-button");
define.alias("shared/components/copy-inline/component", "logging/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "logging/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "logging/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "logging/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "logging/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "logging/components/cru-cluster/component");
define.alias("shared/components/cru-master-auth-network/component", "logging/components/cru-master-auth-network/component");
define.alias("shared/components/cru-node-pools/component", "logging/components/cru-node-pools/component");
define.alias("shared/components/cru-private-cluster/component", "logging/components/cru-private-cluster/component");
define.alias("shared/components/cru-private-registry/component", "logging/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "logging/components/custom-catalog/component");
define.alias("shared/components/custom-command/component", "logging/components/custom-command/component");
define.alias("shared/components/drain-node/component", "logging/components/drain-node/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "logging/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "logging/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "logging/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "logging/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "logging/components/field-required/component");
define.alias("shared/components/form-agent-env-var/component", "logging/components/form-agent-env-var/component");
define.alias("shared/components/form-array/component", "logging/components/form-array/component");
define.alias("shared/components/form-auth-cloud-credential/component", "logging/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "logging/components/form-certificate-row/component");
define.alias("shared/components/form-contextual-select-array/component", "logging/components/form-contextual-select-array/component");
define.alias("shared/components/form-count/component", "logging/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "logging/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "logging/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "logging/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "logging/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "logging/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "logging/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "logging/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "logging/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "logging/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "logging/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "logging/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "logging/components/form-members/component");
define.alias("shared/components/form-name-description/component", "logging/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "logging/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "logging/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "logging/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "logging/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "logging/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "logging/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "logging/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "logging/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "logging/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "logging/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "logging/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "logging/components/gke-access-scope/component");
define.alias("shared/components/gke-node-pool-row/component", "logging/components/gke-node-pool-row/component");
define.alias("shared/components/graph-area/component", "logging/components/graph-area/component");
define.alias("shared/components/hook-row/component", "logging/components/hook-row/component");
define.alias("shared/components/host-pod/component", "logging/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "logging/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "logging/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "logging/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "logging/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "logging/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "logging/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "logging/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "logging/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "logging/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "logging/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "logging/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "logging/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "logging/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "logging/components/illiquid-model");
define.alias("shared/components/import-command/component", "logging/components/import-command/component");
define.alias("shared/components/input-answer-row/component", "logging/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "logging/components/input-answers/component");
define.alias("shared/components/input-cidr/component", "logging/components/input-cidr/component");
define.alias("shared/components/input-custom-answers/component", "logging/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "logging/components/input-float/component");
define.alias("shared/components/input-identity/component", "logging/components/input-identity/component");
define.alias("shared/components/input-int/component", "logging/components/input-int/component");
define.alias("shared/components/input-integer/component", "logging/components/input-integer/component");
define.alias("shared/components/input-number/component", "logging/components/input-number/component");
define.alias("shared/components/input-or-display/component", "logging/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "logging/components/input-paste/component");
define.alias("shared/components/input-slider/component", "logging/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "logging/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "logging/components/input-text-file/component");
define.alias("shared/components/input-url/component", "logging/components/input-url/component");
define.alias("shared/components/input-yaml/component", "logging/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "logging/components/ivy-codemirror");
define.alias("shared/components/k3s-node-args/component", "logging/components/k3s-node-args/component");
define.alias("shared/components/k3s-node-env-var/component", "logging/components/k3s-node-env-var/component");
define.alias("shared/components/labels-section/component", "logging/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "logging/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "logging/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "logging/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "logging/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "logging/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "logging/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "logging/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "logging/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "logging/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "logging/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "logging/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "logging/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "logging/components/liquid-versions");
define("logging/components/logging/code-block/component", ["exports", "logging/components/logging/code-block/template", "shared/components/code-block/component"], function (_exports, _template, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _component.default.extend({
    layout: _template.default
  });

  _exports.default = _default;
});
define("logging/components/logging/code-block/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/d4k3L++",
    "block": "{\"symbols\":[],\"statements\":[[2,[34,0]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"highlighted\"]}",
    "moduleName": "logging/components/logging/code-block/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-docker/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
define("logging/components/logging/form-log-docker/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "X3fAGzWz",
    "block": "{\"symbols\":[],\"statements\":[[10,\"main\"],[14,0,\"row mt-30\"],[12],[2,\"\\n  \"],[10,\"h2\"],[14,0,\"mt-0\"],[12],[1,[30,[36,0],[\"loggingPage.dockerRootDir.header\"],null]],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[1,[30,[36,0],[\"loggingPage.dockerRootDir.label\"],null]],[13],[2,\"\\n      \"],[1,[30,[36,3],null,[[\"type\",\"value\",\"className\",\"placeholder\"],[\"text\",[35,2,[\"dockerRootDir\"]],\"form-control\",[30,[36,0],[\"loggingPage.dockerRootDir.placeholder\"],[[\"dir\"],[[35,1,[\"dockerRootDir\"]]]]]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"parentModel\",\"model\",\"input\"]}",
    "moduleName": "logging/components/logging/form-log-docker/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-format/component", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    outputTagsChanged: Ember.observer('model.outputTags', function () {
      this.setCodeBlockHeight();
    }),

    setCodeBlockHeight() {
      const h = (0, _jquery.default)('.additional-logging-configuration-content').height() + 12;
      (0, _jquery.default)('.logging-format pre').height(`${h}px`);
    }

  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-format/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "N6KQB+9w",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"row mt-30\"],[12],[2,\"\\n  \"],[10,\"h2\"],[14,0,\"mt-0\"],[12],[2,\"\\n    \"],[1,[30,[36,1],[\"loggingPage.additional.header\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-5\"],[12],[2,\"\\n    \"],[10,\"section\"],[14,0,\"additional-logging-configuration-content\"],[12],[2,\"\\n      \"],[10,\"label\"],[12],[1,[30,[36,1],[\"loggingPage.additional.fields.header\"],null]],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"mb-30\"],[12],[2,\"\\n        \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[1,[30,[36,1],[\"loggingPage.additional.fields.helpText\"],null]],[13],[2,\"\\n        \"],[8,\"form-key-value\",[],[[\"@addActionLabel\",\"@initialMap\",\"@changed\"],[\"loggingPage.tags.addActionLabel\",[34,0,[\"outputTags\"]],[30,[36,3],[[32,0],[30,[36,2],[[35,0,[\"outputTags\"]]],null]],null]]],null],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[30,[36,5],[[35,4],\"customTarget\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row mb-30\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"output-flush-interval\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"loggingPage.additional.flushInterval.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n              \"],[8,\"input-integer\",[[24,1,\"output-flush-interval\"],[24,\"aria-describedby\",\"basic-addon2\"]],[[\"@min\",\"@value\",\"@class\",\"@placeholder\"],[\"1\",[34,0,[\"outputFlushInterval\"]],\"form-control\",[30,[36,1],[\"loggingPage.additional.flushInterval.placeholder\"],null]]],null],[2,\"\\n              \"],[10,\"span\"],[14,0,\"input-group-addon bg-default\"],[14,1,\"basic-addon2\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.additional.flushInterval.sec\"],null]],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"p\"],[14,0,\"text-info text-small mb-0\"],[12],[1,[30,[36,1],[\"loggingPage.additional.flushInterval.helpText\"],null]],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[30,[36,8],[[35,7],\"cluster\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,\"for\",\"include-system-component\"],[12],[2,\"\\n            \"],[8,\"input\",[[24,0,\"form-control\"],[24,1,\"include-system-component\"]],[[\"@type\",\"@checked\"],[\"checkbox\",[34,0,[\"includeSystemComponent\"]]]],null],[2,\"\\n            \"],[1,[30,[36,1],[\"loggingPage.additional.includeSystemComponent.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,\"for\",\"enable-json-parsing\"],[12],[2,\"\\n          \"],[8,\"input\",[[24,0,\"form-control\"],[24,1,\"enable-json-parsing\"]],[[\"@type\",\"@checked\"],[\"checkbox\",[34,9,[\"enableJSONParsing\"]]]],null],[2,\"\\n          \"],[1,[30,[36,1],[\"loggingPage.additional.jsonParsing.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"col span-7 logging-format\"],[12],[2,\"\\n    \"],[8,\"logging/code-block\",[],[[\"@code\",\"@language\"],[[34,10],\"json\"]],null],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"model\",\"t\",\"mut\",\"action\",\"targetType\",\"not-eq\",\"if\",\"pageScope\",\"eq\",\"loggingModel\",\"logPreview\"]}",
    "moduleName": "logging/components/logging/form-log-format/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-sasl/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    didUpdateAttrs() {
      const config = Ember.get(this, 'config') || {};
      Ember.setProperties(config, {
        saslType: Ember.get(config, 'saslType') || 'plain',
        saslScramMechanism: Ember.get(config, 'saslScramMechanism') || 'sha256'
      });
    },

    disabled: Ember.computed('config.saslUsername', 'config.saslPassword', function () {
      const config = Ember.get(this, 'config') || {};
      const {
        saslUsername,
        saslPassword
      } = config;
      return saslUsername && saslPassword ? false : true;
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-sasl/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "T5a738y8",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"mt-20 clearfix\"],[12],[2,\"\\n  \"],[10,\"h2\"],[14,0,\"pt-30 inline-block\"],[12],[2,\"\\n    \"],[1,[30,[36,0],[\"loggingPage.ssl.sslHeader\"],[[\"authType\"],[\"SASL\"]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\" \"],[1,[30,[36,0],[\"loggingPage.ssl.saslUsername.label\"],null]],[2,\" \"],[13],[2,\"\\n      \"],[1,[30,[36,5],null,[[\"type\",\"utocomplete\",\"value\",\"classNames\",\"placeholder\"],[\"text\",\"off\",[35,3,[\"saslUsername\"]],\"form-control\",[30,[36,0],[\"loggingPage.ssl.saslUsername.placeholder\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\" \"],[1,[30,[36,0],[\"loggingPage.ssl.saslPassword.label\"],null]],[2,\" \"],[13],[2,\"\\n      \"],[1,[30,[36,5],null,[[\"utocomplete\",\"type\",\"value\",\"classNames\",\"placeholder\"],[\"off\",\"password\",[35,3,[\"saslPassword\"]],\"form-control\",[30,[36,0],[\"loggingPage.ssl.saslPassword.placeholder\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[1,[30,[36,0],[\"loggingPage.ssl.saslType.label\"],null]],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[15,0,[30,[36,2],[[30,[36,6],[[35,1]],null],\"text-muted\"],null]],[12],[2,\"\\n        \"],[10,\"label\"],[15,0,[30,[36,2],[[35,1],\"text-muted\"],null]],[12],[2,\"\\n          \"],[1,[30,[36,4],null,[[\"selection\",\"value\",\"disabled\"],[[35,3,[\"saslType\"]],\"plain\",[35,1]]]]],[2,\"\\n          \"],[1,[30,[36,0],[\"loggingPage.ssl.saslType.plain\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n        \"],[10,\"label\"],[15,0,[30,[36,2],[[35,1],\"text-muted\"],null]],[12],[2,\"\\n          \"],[1,[30,[36,4],null,[[\"selection\",\"value\",\"disabled\"],[[35,3,[\"saslType\"]],\"scram\",[35,1]]]]],[2,\"\\n          \"],[1,[30,[36,0],[\"loggingPage.ssl.saslType.scram\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,2],[[30,[36,7],[[35,3,[\"saslType\"]],\"scram\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[1,[30,[36,0],[\"loggingPage.ssl.saslScramMechanism.label\"],null]],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,2],[[35,1],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,4],null,[[\"selection\",\"value\",\"disabled\"],[[35,3,[\"saslScramMechanism\"]],\"sha256\",[35,1]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.saslScramMechanism.sha256\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,2],[[35,1],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,4],null,[[\"selection\",\"value\",\"disabled\"],[[35,3,[\"saslScramMechanism\"]],\"sha512\",[35,1]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.saslScramMechanism.sha512\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"disabled\",\"if\",\"config\",\"radio-button\",\"input\",\"or\",\"eq\"]}",
    "moduleName": "logging/components/logging/form-log-sasl/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-ssl/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    disabled: null,
    sslVersionContent: [{
      label: 'SSLv23',
      value: 'SSLv23'
    }, {
      label: 'TLSv1',
      value: 'TLSv1'
    }, {
      label: 'TLSv1_1',
      value: 'TLSv1_1'
    }, {
      label: 'TLSv1_2',
      value: 'TLSv1_2'
    }],
    sslVerify: Ember.computed.alias('config.sslVerify'),
    isUdp: Ember.computed.equal('config.protocol', 'udp'),
    clipboardText: Ember.computed('clientKeyPath', 'clientCertPath', 'certificatePath', function () {
      const {
        clientKeyPath,
        clientCertPath,
        certificatePath
      } = this;
      let out = '';
      const arr = [clientKeyPath, clientCertPath, certificatePath].filter(ca => ca);
      arr.map((ca, index) => {
        if (index === arr.length - 1) {
          out += `${ca}`;
        } else {
          out += `${ca}
`;
        }
      });
      return out;
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/form-log-ssl/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bK4OnKrC",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"mt-20 clearfix\"],[12],[2,\"\\n  \"],[10,\"h2\"],[15,0,[30,[36,19],[\"pt-30 inline-block \",[30,[36,7],[[30,[36,21],[[35,2],[30,[36,20],[[35,15],\"fluentForwarder\"],null]],null],\"text-muted\"],null]],null]],[12],[2,\"\\n    \"],[1,[30,[36,0],[\"loggingPage.ssl.sslHeader\"],[[\"authType\"],[[30,[36,7],[[30,[36,16],[[35,15],\"syslog\"],null],\"Encryption\",\"SSL\"],null]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,7],[[30,[36,21],[[30,[36,20],[[35,15],\"kafka\"],null],[30,[36,20],[[35,15],\"fluentForwarder\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"span\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"loggingPage.ssl.headerHelp\"],null]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[6,[37,7],[[30,[36,16],[[35,15],\"syslog\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[15,0,[30,[36,19],[\"col span-6 pt-0 \",[30,[36,7],[[35,1],\"text-muted\"],null]],null]],[12],[2,\"\\n        \"],[1,[30,[36,6],null,[[\"type\",\"classNames\",\"checked\",\"disabled\"],[\"checkbox\",\"form-control\",[35,4,[\"enableTls\"]],[35,1]]]]],[2,\"\\n        \"],[1,[30,[36,0],[\"loggingPage.fluentd.enableTls.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,7],[[30,[36,3],[[35,2],[35,1]],null],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"selection\",\"value\",\"disabled\"],[[35,4,[\"sslVerify\"]],false,[30,[36,3],[[35,2],[35,1]],null]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.disabled\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,7],[[30,[36,3],[[35,2],[35,1]],null],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"selection\",\"value\",\"disabled\"],[[35,4,[\"sslVerify\"]],true,[30,[36,3],[[35,2],[35,1]],null]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.enabled\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,7],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"loggingPage.ssl.certificate.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[30,[36,3],[[35,2],[35,1]],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[30,[36,21],[[30,[36,20],[[35,22],\"fluentd\"],null],[30,[36,20],[[35,15],\"fluentForwarder\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.clientKey.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"clientKey\"]],false,\"text/plain,.pem,.pkey,.key\",60,\"newCertificate.key.placeholder\",false,[35,2]]]]],[2,\"\\n\"],[6,[37,7],[[35,18]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n            \"],[1,[34,18]],[2,\"\\n            \"],[1,[30,[36,12],null,[[\"clipboardText\",\"size\",\"buttonClass\"],[[35,18],[35,11],\"p-0\"]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.clientCert.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"clientCert\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[35,2]]]]],[2,\"\\n\"],[6,[37,7],[[35,17]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n            \"],[1,[34,17]],[2,\"\\n            \"],[1,[30,[36,12],null,[[\"clipboardText\",\"size\",\"buttonClass\"],[[35,17],[35,11],\"p-0\"]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[30,[36,3],[[30,[36,16],[[35,15],\"splunk\"],null],[30,[36,16],[[35,15],\"elasticsearch\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\"],[6,[37,7],[[30,[36,3],[[30,[36,16],[[35,15],\"splunk\"],null],[30,[36,16],[[35,15],\"elasticsearch\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.clientKeyPass.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,6],null,[[\"type\",\"value\",\"className\",\"placeholder\",\"disabled\"],[\"password\",[35,4,[\"clientKeyPass\"]],\"form-control\",[30,[36,0],[\"loggingPage.ssl.clientKeyPass.password.placeholder\"],null],[35,2]]]]],[2,\"\\n\"],[6,[37,7],[[30,[36,16],[[35,15],\"elasticsearch\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"loggingPage.ssl.sslVersion.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,14],null,[[\"classNames\",\"content\",\"value\",\"readOnly\"],[\"form-control\",[35,13],[35,4,[\"sslVersion\"]],[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,7],[[35,2],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"selection\",\"value\",\"disabled\"],[[35,4,[\"sslVerify\"]],false,[35,2]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.disabled\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,7],[[35,2],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"selection\",\"value\",\"disabled\"],[[35,4,[\"sslVerify\"]],true,[35,2]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.enabled\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,7],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"loggingPage.ssl.certificate.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[30,[36,3],[[30,[36,16],[[35,15],\"kafka\"],null],[30,[36,16],[[35,15],\"customTarget\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.certificate.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[35,2]]]]],[2,\"\\n\"],[6,[37,7],[[35,10]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[14,0,\"help-block\"],[12],[2,\"\\n            \"],[1,[34,10]],[2,\"\\n            \"],[1,[30,[36,12],null,[[\"clipboardText\",\"size\",\"buttonClass\"],[[35,10],[35,11],\"p-0\"]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[30,[36,16],[[35,15],\"fluentForwarder\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 pt-0\"],[12],[2,\"\\n        \"],[1,[30,[36,6],null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[35,4,[\"enableTls\"]]]]]],[2,\"\\n        \"],[1,[30,[36,0],[\"loggingPage.fluentd.enableTls.label\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.clientKey.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"clientKey\"]],false,\"text/plain,.pem,.pkey,.key\",60,\"newCertificate.key.placeholder\",false,[35,2]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 mt-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.clientCert.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"clientCert\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[35,2]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"loggingPage.ssl.clientKeyPass.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,6],null,[[\"type\",\"value\",\"className\",\"placeholder\",\"disabled\"],[\"password\",[35,4,[\"clientKeyPass\"]],\"form-control\",[30,[36,0],[\"loggingPage.ssl.clientKeyPass.password.placeholder\"],null],[35,2]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6 pt-0\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.label\"],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,7],[[30,[36,3],[[35,2],[35,1]],null],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"selection\",\"value\",\"disabled\"],[[35,4,[\"sslVerify\"]],false,[30,[36,3],[[35,2],[35,1]],null]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.disabled\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"radio\"],[12],[2,\"\\n          \"],[10,\"label\"],[15,0,[30,[36,7],[[30,[36,3],[[35,2],[35,1]],null],\"text-muted\"],null]],[12],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"selection\",\"value\",\"disabled\"],[[35,4,[\"sslVerify\"]],true,[30,[36,3],[[35,2],[35,1]],null]]]]],[2,\"\\n            \"],[1,[30,[36,0],[\"loggingPage.ssl.verify.enabled\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,7],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"clearfix\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label pt-5\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"loggingPage.ssl.certificate.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,5],null,[[\"classNames\",\"value\",\"multiple\",\"canChangeName\",\"accept\",\"minHeight\",\"placeholder\",\"shouldChangeName\",\"disabled\"],[\"box\",[35,4,[\"certificate\"]],true,false,\"application/x-x509-ca-cert,text/plain,.pem,.crt,.cert\",60,\"newCertificate.cert.placeholder\",false,[30,[36,3],[[35,2],[35,1]],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"isUdp\",\"disabled\",\"or\",\"config\",\"input-text-file\",\"input\",\"if\",\"radio-button\",\"sslVerify\",\"certificatePath\",\"small\",\"copy-to-clipboard\",\"sslVersionContent\",\"searchable-select\",\"targetType\",\"eq\",\"clientCertPath\",\"clientKeyPath\",\"concat\",\"not-eq\",\"and\",\"customType\"]}",
    "moduleName": "logging/components/logging/form-log-ssl/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/form-test/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    isCustom: Ember.computed.equal('targetType', 'customTarget')
  });

  _exports.default = _default;
});
define("logging/components/logging/form-test/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/qCAIcLJ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"over-hr mt-40\"],[12],[2,\"\\n  \"],[10,\"span\"],[12],[2,\"\\n\"],[6,[37,4],[[35,7]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[11,\"button\"],[24,0,\"btn bg-info btn-disabled\"],[24,4,\"button\"],[4,[38,2],[[32,0],[35,1]],null],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-spinner icon-spin\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[14,0,\"text-white\"],[12],[2,\"\\n\"],[6,[37,4],[[35,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,0],[\"loggingPage.testAction.running\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[1,[30,[36,0],[\"loggingPage.testAction.testing\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,4],[[35,6]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[11,\"button\"],[16,0,[31,[\"btn  btn-disabled \",[30,[36,4],[[35,5],\"bg-success\",\"bg-error\"],null]]]],[24,4,\"button\"],[4,[38,2],[[32,0],[35,1]],null],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text-white\"],[12],[2,\"\\n\"],[6,[37,4],[[35,5]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,4],[[35,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                \"],[1,[30,[36,0],[\"loggingPage.testAction.runOk\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                \"],[1,[30,[36,0],[\"loggingPage.testAction.testOk\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"              \"],[1,[30,[36,0],[\"loggingPage.testAction.testFailed\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[11,\"button\"],[24,0,\"btn bg-info\"],[24,4,\"button\"],[4,[38,2],[[32,0],[35,1]],null],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text-white\"],[12],[2,\"\\n\"],[6,[37,4],[[35,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,0],[\"loggingPage.testAction.dryRun\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"              \"],[1,[30,[36,0],[\"loggingPage.testAction.test\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"t\",\"test\",\"action\",\"isCustom\",\"if\",\"testOk\",\"tested\",\"testing\"]}",
    "moduleName": "logging/components/logging/form-test/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/input-logging-config/component", ["exports", "ui/utils/platform", "logging/components/logging/input-logging-config/template", "shared/mixins/throttled-resize", "ui/utils/constants", "jquery", "logging/mixins/parse-fluentd-file"], function (_exports, _platform, _template, _throttledResize, _constants, _jquery, _parseFluentdFile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const DATE_FORMAT = {
    'YYYY-MM-DD': '%Y-%m-%d',
    'YYYY-MM': '%Y-%m',
    'YYYY': '%Y'
  };

  var _default = Ember.Component.extend(_throttledResize.default, _parseFluentdFile.default, {
    settings: Ember.inject.service(),
    growl: Ember.inject.service(),
    scope: Ember.inject.service(),
    layout: _template.default,
    mode: 'text',
    label: null,
    namePlaceholder: '',
    nameRequired: false,
    name: null,
    value: null,
    placeholder: '',
    accept: 'text/*, .yml, .yaml',
    multiple: false,
    viewportMargin: Infinity,
    autoResize: false,
    resizeFooter: 130,
    minHeight: 50,
    inputName: false,
    canChangeName: true,
    canUpload: true,
    showUploadLabel: true,
    gutters: ['CodeMirror-lint-markers'],
    tagName: ['div'],
    showUpload: true,
    showDownload: true,
    deepStr: null,
    config: Ember.computed.alias('model.config'),

    init() {
      this._super(...arguments);

      this.customTypeObserver();
    },

    actions: {
      click() {
        (0, _jquery.default)(this.element).find('INPUT[type=file]').click();
      },

      updateValue(value) {
        Ember.set(this, 'value', value);
      }

    },
    loadingDidChange: Ember.observer('loading', function () {
      if (!Ember.get(this, 'loading') && Ember.get(this, 'autoResize')) {
        Ember.run.next(() => {
          this.fit();
        });
      }
    }),
    customTypeObserver: Ember.observer('value', function () {
      Ember.run.next(() => {
        const value = Ember.get(this, 'value');
        const {
          fileObj
        } = this.parseValue(value);
        const type = fileObj['@type'];
        const out = _constants.default.LOGGING_TPYE_TO_CONFIG[type];
        Ember.set(this, 'customType', out);
      });
    }),
    customTypeChange: Ember.observer('customType', function () {
      Ember.run.throttle(this, this.formatValue, 150);
    }),
    caChange: Ember.observer('clientKeyPath', 'clientCertPath', 'certificatePath', function () {
      Ember.run.throttle(this, this.formatValue, 150);
    }),
    actualAccept: Ember.computed('accept', function () {
      if (_platform.isSafari) {
        return '';
      } else {
        return Ember.get(this, 'accept');
      }
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      const fieldsStr = Ember.get(this, 'fieldsStr');
      const template = `{
    "log":    "time=\"${new Date().toString()}\" level=info msg=\"Cluster [local] condition status unknown\"",
    "stream": "stderr",
    "tag":    "default.var.log.containers.cattle-6b4ccb5b9d-v57vw_default_cattle-xxx.log"
    "docker": {
        "container_id": "xxx"
    },
    "kubernetes": {
        "container_name": "cattle",
        "namespace_name": "default",
        "pod_name":       "cattle-6b4ccb5b9d-v57vw",
        "pod_id":         "30c685d0-fa43-11e7-b992-00163e016dc2",
        "labels":         {
            "app": "cattle",
            "pod-template-hash": "2607761658"
        },
        "host":       "47.52.113.251",
        "master_url": "https://10.233.0.1:443/api"
    },
${fieldsStr}
  ...
}`;
      return template;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      const keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(key => `    "${key}": "${keyValueMap[key]}"`).join(',\n');
    }),
    clientKeyPath: Ember.computed('config.clientKey', 'customType', 'pageScope', 'scope.currentCluster.id', 'scope.currentProject.id', function () {
      const pageScope = Ember.get(this, 'pageScope');
      const customType = Ember.get(this, 'customType');
      let name;

      if (Ember.get(this, 'config.clientKey')) {
        if (pageScope === 'cluster') {
          name = Ember.get(this, 'scope.currentCluster.id');
        } else {
          const projectId = Ember.get(this, 'scope.currentProject.id') || '';
          name = `${Ember.get(this, 'scope.currentCluster.id')}_${projectId.split(':')[1]}`;
        }

        let key = `client_key`;

        switch (customType) {
          case 'kafka':
            key = `ssl_client_cert_key`;
            break;

          case 'syslog':
            key = `client_cert_key`;
            break;

          case 'fluentForwarder':
            key = `tls_client_private_key_path`;
            break;
        }

        return `${key} /fluentd/etc/config/ssl/${pageScope}_${name}_client-key.pem`;
      }

      return null;
    }),
    clientCertPath: Ember.computed('config.clientCert', 'customType', 'pageScope', 'scope.currentCluster.id', 'scope.currentProject.id', function () {
      const pageScope = Ember.get(this, 'pageScope');
      const customType = Ember.get(this, 'customType');
      let name;

      if (Ember.get(this, 'config.clientCert')) {
        if (pageScope === 'cluster') {
          name = Ember.get(this, 'scope.currentCluster.id');
        } else {
          const projectId = Ember.get(this, 'scope.currentProject.id') || '';
          name = `${Ember.get(this, 'scope.currentCluster.id')}_${projectId.split(':')[1]}`;
        }

        let key = `client_cert`;

        switch (customType) {
          case 'kafka':
            key = `ssl_client_cert`;
            break;

          case 'fluentForwarder':
            key = `tls_client_cert_path`;
            break;
        }

        return `${key} /fluentd/etc/config/ssl/${pageScope}_${name}_client-cert.pem`;
      }

      return null;
    }),
    certificatePath: Ember.computed('config.certificate', 'customType', 'pageScope', 'scope.currentCluster.id', 'scope.currentProject.id', function () {
      const pageScope = Ember.get(this, 'pageScope');
      const customType = Ember.get(this, 'customType');
      let name;

      if (Ember.get(this, 'config.certificate')) {
        if (pageScope === 'cluster') {
          name = Ember.get(this, 'scope.currentCluster.id');
        } else {
          const projectId = Ember.get(this, 'scope.currentProject.id') || '';
          name = `${Ember.get(this, 'scope.currentCluster.id')}_${projectId.split(':')[1]}`;
        }

        let key = `ca_file`;

        switch (customType) {
          case 'kafka':
            key = `ssl_ca_cert`;
            break;

          case 'fluentForwarder':
            key = `tls_cert_path`;
            break;
        }

        return `${key} /fluentd/etc/config/ssl/${pageScope}_${name}_ca.pem`;
      }

      return null;
    }),

    onResize() {
      if (Ember.get(this, 'autoResize')) {
        this.fit();
      }
    },

    fit() {
      if (Ember.get(this, 'autoResize')) {
        var container = (0, _jquery.default)('.codemirror-container');

        if (!container) {
          return;
        }

        const position = container.position();

        if (!position) {
          return;
        }

        const desired = (0, _jquery.default)(window).height() - position.top - Ember.get(this, 'resizeFooter');
        container.css('max-height', Math.max(Ember.get(this, 'minHeight'), desired));
      }
    },

    formatValue() {
      const {
        customType
      } = this;
      const config = Ember.get(this, `parentModel.${Ember.get(this, 'customType')}.config`) || {};
      let {
        fileObj
      } = this.parseValue(Ember.get(this, 'value'));
      const deletedField = ['ca_file', 'client_cert', 'client_key', 'ssl_ca_cert', 'ssl_client_cert', 'ssl_client_cert_key', 'tls_cert_path', 'client_cert_key', 'tls_client_private_key_path', 'tls_client_cert_path', 'hosts', 'user', 'host', 'port', 'password', 'logstash_prefix', 'logstash_dateformat', 'token', 'sourcetype', 'default_index', 'zookeeper', 'default_topic', 'brokers', 'protocol', 'program', 'severity'];
      deletedField.map(d => delete fileObj[d]);
      let fileToForm = {};
      let serverTags = '';

      if (customType === 'fluentForwarder') {
        fileToForm = _constants.default.LOGGING_FILE_TO_FORM.FLUENTD;
        const fluentServers = Ember.get(config, 'fluentServers') || [];
        serverTags = fluentServers.map(server => {
          const obj = {};
          const endponitSplitter = (Ember.get(server, 'endpoint') || '').split(':');
          Object.keys(fileToForm).map(key => {
            if (key === 'host' && Ember.get(server, 'endpoint')) {
              Ember.set(obj, 'host', endponitSplitter[0]);
            }

            if (key === 'port' && Ember.get(server, 'endpoint')) {
              Ember.set(obj, 'port', endponitSplitter[1]);
            }

            const value = fileToForm[key];

            if (value && Ember.get(server, value)) {
              Ember.set(obj, key, Ember.get(server, value));
            }
          });
          let body = '';

          for (let key in obj) {
            if (key === 'elements') {
              return;
            }

            body += `    ${key} ${obj[key]}\n`;
          }

          return `  <server>
${body}
  </server>
`;
        }).join(`\n`);
      } else {
        if (customType === 'elasticsearch') {
          fileToForm = _constants.default.LOGGING_FILE_TO_FORM.ELASTICSEARCH;
        } else if (customType === 'splunk') {
          fileToForm = _constants.default.LOGGING_FILE_TO_FORM.SPLUNK;
        } else if (customType === 'kafka') {
          fileToForm = _constants.default.LOGGING_FILE_TO_FORM.KAFKA;
          let {
            brokerEndpoints = []
          } = config;

          if (Ember.get(config, 'brokerEndpoints.length') > 0) {
            brokerEndpoints = brokerEndpoints.map((e = '') => e.replace('http://', '').replace('https://', ''));
            Ember.set(config, 'brokers', brokerEndpoints.join(','));
          }
        } else if (customType === 'syslog') {
          fileToForm = _constants.default.LOGGING_FILE_TO_FORM.SYSLOG;
        }

        Object.keys(fileToForm).filter(key => Ember.get(config, key)).map(d => delete fileObj[d]);
        const endponitSplitter = (Ember.get(config, 'endpoint') || '').replace('http://', '').replace('https://', '').split(':');
        Object.keys(fileToForm).map(key => {
          const value = fileToForm[key];

          if (key === 'host' && endponitSplitter[0]) {
            Ember.set(fileObj, 'host', endponitSplitter[0]);
            return;
          }

          if (key === 'port' && endponitSplitter[1]) {
            Ember.set(fileObj, 'port', endponitSplitter[1]);
            return;
          }

          if (value && Ember.get(config, value)) {
            if (key === 'logstash_dateformat') {
              Ember.set(fileObj, key, DATE_FORMAT[Ember.get(config, value)]);
            } else {
              Ember.set(fileObj, key, Ember.get(config, value));
            }
          }
        });
      }

      const {
        clientKeyPath = '',
        clientCertPath = '',
        certificatePath = ''
      } = this;
      const caArray = [clientKeyPath, clientCertPath, certificatePath].map((c = '') => {
        if (typeof c === 'string') {
          const arr = c.split(' ');
          return {
            key: arr[0],
            value: arr[1]
          };
        } else {
          return;
        }
      }).filter(c => c);
      caArray.map(c => {
        if (c.value) {
          fileObj[c.key] = c.value;
        }
      });
      let body = '';

      for (let key in fileObj) {
        if (key === 'elements') {
          continue;
        }

        body += `  ${key} ${fileObj[key]}\n`;
      }

      const out = `<match *>
${body}
${serverTags}
</match>`;
      this.send('updateValue', out);
    }

  });

  _exports.default = _default;
});
define("logging/components/logging/input-logging-config/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4txXJm9I",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"col span-12 m-0 p-0 codemirror-container\"],[14,5,\"overflow: auto;\"],[12],[2,\"\\n    \"],[1,[30,[36,11],null,[[\"placeholder\",\"value\",\"valueUpdated\",\"options\"],[[35,10],[35,9],[30,[36,8],[[32,0],\"updateValue\"],null],[30,[36,7],null,[[\"autofocus\",\"theme\",\"tabSize\",\"lineNumbers\",\"mode\",\"readOnly\",\"gutters\",\"lint\",\"lineWrapping\",\"viewportMargin\",\"smartIndent\"],[true,\"monokai\",2,true,\"yaml\",[30,[36,6],[[30,[36,5],[[30,[36,4],[[35,3,[\"type\"]],\"review\"],null],[35,2]],null],true,false],null],[35,1],false,true,[35,0],false]]]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[18,1,[\"description\"]],[2,\"\\n\"],[10,\"input\"],[15,\"accept\",[31,[[34,12]]]],[15,\"multiple\",[34,13]],[14,0,\"hide\"],[14,4,\"file\"],[12],[13],[2,\"\\n\\n\"],[1,[30,[36,20],null,[[\"config\",\"targetType\",\"customType\",\"clientKeyPath\",\"clientCertPath\",\"certificatePath\"],[[35,19],[35,18],[35,17],[35,16],[35,15],[35,14]]]]],[2,\"\\n\\n\"],[1,[30,[36,23],null,[[\"logPreview\",\"model\",\"targetType\"],[[35,22],[35,21],[35,18]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"viewportMargin\",\"gutters\",\"readOnly\",\"modalOpts\",\"eq\",\"or\",\"if\",\"hash\",\"action\",\"value\",\"placeholder\",\"ivy-codemirror\",\"actualAccept\",\"multiple\",\"certificatePath\",\"clientCertPath\",\"clientKeyPath\",\"customType\",\"targetType\",\"config\",\"logging/form-log-ssl\",\"model\",\"logPreview\",\"logging/form-log-format\"]}",
    "moduleName": "logging/components/logging/input-logging-config/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/new-edit/component", ["exports", "ui/mixins/new-or-edit", "shared/utils/parse-uri", "ui/utils/constants", "semver", "logging/mixins/parse-fluentd-file"], function (_exports, _newOrEdit, _parseUri, _constants, _semver, _parseFluentdFile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const MIN_WINDOWS_NO_WARNING = '1.18.1';
  const INVALID_PREFIX_CHAR = ['\\', '/', '*', '?', '"', '<', '>', '|', ` `, ',', '#'];
  const DATE_FORMAT = {
    '%Y-%m-%d': 'YYYY-MM-DD',
    '%Y-%m': 'YYYY-MM',
    '%Y': 'YYYY'
  };

  var _default = Ember.Component.extend(_newOrEdit.default, _parseFluentdFile.default, {
    scope: Ember.inject.service(),
    settings: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    intl: Ember.inject.service(),
    // input
    errors: null,
    targetType: null,
    configMap: null,
    esEndpointValidate: true,
    fluentdEndpointValidate: true,
    esErrors: [],
    pasteOrUpload: false,
    testing: false,
    testOk: true,
    tested: false,
    pageScope: Ember.computed.reads('scope.currentPageScope'),
    cluster: Ember.computed.reads('scope.currentCluster'),
    project: Ember.computed.reads('scope.currentProject'),
    clusterTargetType: Ember.computed.reads('clusterLogging.targetType'),
    isWindows: Ember.computed.alias('scope.currentCluster.isWindows'),
    actions: {
      test() {
        if (Ember.get(this, 'testing') || Ember.get(this, 'tested')) {
          return Ember.RSVP.resolve();
        }

        const ok = this.willSave();

        if (!ok) {
          return Ember.RSVP.resolve();
        }

        const data = Ember.get(this, 'model');
        const gs = Ember.get(this, 'globalStore');
        const pageScope = this.get('pageScope');
        Ember.set(this, 'testing', true);
        let url = `${pageScope}loggings?action=test`;

        if (Ember.get(this, 'targetType') === 'customTarget') {
          url = `${pageScope}loggings?action=dryRun`;
        }

        return gs.rawRequest({
          url,
          method: 'POST',
          data
        }).then(() => {
          Ember.setProperties(this, {
            testOk: true,
            errors: null
          });
        }).catch(xhr => {
          Ember.setProperties(this, {
            testOk: false,
            errors: [Ember.get(xhr, 'body.message') || Ember.get(xhr, 'body.code')]
          });
        }).finally(() => {
          Ember.setProperties(this, {
            tested: true,
            testing: false
          });
          Ember.run.next(() => {
            Ember.run.later(() => {
              Ember.set(this, 'tested', false);
            }, 3000);
          });
        });
      },

      cancel() {
        Ember.setProperties(this, {
          targetType: Ember.get(this, 'preTargetType'),
          pasteOrUpload: false
        });
      },

      showPaste() {
        Ember.setProperties(this, {
          preTargetType: Ember.get(this, 'targetType'),
          targetType: 'customTarget',
          pasteOrUpload: true
        });
      }

    },
    targetTypeChange: Ember.observer('targetType', function () {
      Ember.set(this, 'errors', []);
    }),
    pasteOrUploadChange: Ember.observer('pasteOrUpload', function () {
      const {
        fileObj = {},
        deepStrs = []
      } = this.parseValue(Ember.get(this, 'customContent'));
      const preTargetType = Ember.get(this, 'preTargetType');
      const type = fileObj['@type'];

      if (!Ember.get(this, 'pasteOrUpload')) {
        const targetType = this.fileToFormType(type);
        this.syncForm();
        Ember.set(this, 'targetType', targetType);
      } else {
        let type = preTargetType;

        switch (preTargetType) {
          case 'splunk':
            type = 'splunk_hec';
            break;

          case 'syslog':
            type = 'remote_syslog';
            break;

          case 'kafka':
            type = 'kafka_buffered';
            break;

          case 'fluentForwarder':
            type = 'forward';
            break;
        }

        Ember.set(fileObj, '@type', type);
        let body = '';
        let str = '';
        deepStrs.map(s => {
          str += s;
        });

        for (let key in fileObj) {
          body += `${key} ${fileObj[key]}
`;
        }

        const out = `<match *>
  ${body}${str}
</match>`;
        Ember.set(this, 'customContent', out);
      }
    }),
    headerLabel: Ember.computed('pageScope', function () {
      const ps = Ember.get(this, 'pageScope');

      if (ps === 'cluster') {
        return 'loggingPage.clusterHeader';
      } else {
        return 'loggingPage.projectHeader';
      }
    }),
    isClusterLevel: Ember.computed('pageScope', function () {
      return Ember.get(this, 'pageScope') === 'cluster';
    }),
    saveDisabled: Ember.computed('originalModel.{id,targetType}', 'targetType', 'pasteOrUpload', function () {
      return Ember.get(this, 'originalModel.targetType') === 'none' && Ember.get(this, 'targetType') === 'none' && !Ember.get(this, 'pasteOrUpload');
    }),
    pageChange: Ember.on('init', Ember.observer('originalModel.customTargetConfig.content', function () {
      this.initCustomContent();
    })),
    showWindowsWarning: Ember.computed('scope.currentCluster.version.gitVersion', 'scope.currentCluster.isWindows', function () {
      const {
        scope: {
          currentCluster
        }
      } = this;

      try {
        const currentVersion = _semver.default.coerce(currentCluster.version.gitVersion);

        if (currentCluster.isWindows && currentCluster.isVxlan && _semver.default.lt(currentVersion, MIN_WINDOWS_NO_WARNING)) {
          return true;
        }
      } catch (error) {}

      return false;
    }),

    willSave() {
      const {
        targetType,
        pageScope,
        model,
        intl
      } = this;
      Ember.set(model, 'clusterId', Ember.get(this, 'cluster.id'));

      if (pageScope === 'project') {
        Ember.set(model, 'projectId', Ember.get(this, 'project.id'));
      }

      Ember.setProperties(model, {
        elasticsearchConfig: null,
        splunkConfig: null,
        kafkaConfig: null,
        syslogConfig: null,
        fluentForwarderConfig: null,
        customTargetConfig: null
      });

      if (targetType === 'none') {
        return true;
      }

      const errors = Ember.set(this, 'errors', []);

      if (Ember.get(this, 'pasteOrUpload')) {
        const {
          fileObj
        } = this.parseValue(Ember.get(this, 'customContent'));
        const targetType = fileObj['@type'];
        const types = Object.keys(_constants.default.LOGGING_TPYE_TO_CONFIG) || [];

        if (!types.includes(targetType)) {
          errors.pushObject(intl.t('loggingPage.customTarget.type.error'));
        }

        Ember.setProperties(model, {
          customTargetConfig: {
            clientKey: Ember.get(this, 'model.customTarget.config.clientKey'),
            clientCert: Ember.get(this, 'model.customTarget.config.clientCert'),
            certificate: Ember.get(this, 'model.customTarget.config.certificate'),
            content: (Ember.get(this, 'customContent') || '').replace(/.*<match.*>.*(\r\n|\n|\r) {2}/ig, '').replace(/(\r\n|\n|\r).*<\/match.*>/ig, '')
          }
        });
        const {
          outputFlushInterval,
          outputTags,
          dockerRoot,
          includeSystemComponent
        } = Ember.get(this, 'model.customTarget');
        Ember.setProperties(model, {
          outputFlushInterval,
          outputTags,
          dockerRoot,
          includeSystemComponent
        });
      } else {
        if (targetType === 'fluentForwarder') {
          const fluentServers = Ember.get(model, 'fluentForwarder.config.fluentServers') || [];
          let filter = fluentServers.filter(f => !f.endpoint);

          if (filter.length > 0) {
            errors.pushObject(intl.t('loggingPage.fluentd.endpoint.required'));
          } else {
            if (!Ember.get(this, 'endpointValidate')) {
              errors.pushObject(intl.t('loggingPage.fluentd.endpoint.invalid'));
            }
          }

          filter = fluentServers.filter(f => !f.standby);

          if (filter.length === 0) {
            errors.pushObject(intl.t('loggingPage.fluentd.standby.none'));
          }

          if (errors.length === 0) {
            const fluentConfig = Ember.get(model, 'fluentForwarder.config');
            const {
              enableTls,
              sslVerify
            } = fluentConfig;

            if (enableTls) {
              if (!sslVerify) {
                Ember.set(fluentConfig, 'certificate', null);
              }
            } else {
              Ember.setProperties(fluentConfig, {
                certificate: null,
                clientKey: null,
                clientCert: null,
                sslVerify: false,
                clientKeyPass: null
              });
            }
          }
        }

        let formatConfig = Ember.get(model, `${targetType}.config`); // In case of type is `/v3/schema/${ targetType }Config`

        Ember.set(formatConfig, 'type', `${targetType}Config`);
        Ember.setProperties(model, {
          outputFlushInterval: Ember.get(model, `${targetType}.outputFlushInterval`),
          outputTags: Ember.get(model, `${targetType}.outputTags`),
          dockerRoot: Ember.get(model, `${targetType}.dockerRoot`),
          [`${targetType}Config`]: Ember.get(this, 'globalStore').createRecord(formatConfig),
          includeSystemComponent: Ember.get(model, `${targetType}.includeSystemComponent`)
        });

        if (targetType === 'elasticsearch') {
          const elasticsearchErrors = this.elasticsearchWillSave();
          errors.pushObjects(elasticsearchErrors);
        }

        if (targetType === 'splunk') {
          const splunkErrors = this.splunkWillSave();
          errors.pushObjects(splunkErrors);
        }

        if (targetType === 'kafka') {
          const kafkaErrors = this.kafkaWillSave();
          errors.pushObjects(kafkaErrors);
        }

        if (targetType === 'syslog') {
          const syslogErrors = this.syslogWillSave();
          errors.pushObjects(syslogErrors);
        }
      }

      if (errors.length > 0) {
        return false;
      }

      return this._super(...arguments);
    },

    formatUrl(url) {
      const urlParser = (0, _parseUri.default)(url) || {};

      if (!urlParser.port) {
        if (urlParser.protocol === 'http') {
          return `${urlParser.protocol}://${urlParser.host}:80`;
        }

        if (urlParser.protocol === 'https') {
          return `${urlParser.protocol}://${urlParser.host}:443`;
        }
      }

      return url;
    },

    doneSaving(neu) {
      if (Ember.get(this, 'targetType') !== 'customTarget') {
        Ember.set(this, 'customContent', `<match *>\n</match>`);
      }

      Ember.setProperties(this, {
        model: neu.clone().patch(),
        originalModel: neu.clone()
      });
    },

    initCustomContent() {
      if (Ember.get(this, 'originalModel.targetType') === 'customTarget') {
        const {
          fileObj
        } = this.parseValue(Ember.get(this, 'originalModel.customTargetConfig.content'));
        const type = fileObj['@type'];
        let preTargetType = this.fileToFormType(type);
        this.syncForm(Ember.get(this, 'originalModel.customTargetConfig.content'));
        Ember.setProperties(this, {
          pasteOrUpload: true,
          customContent: `<match *>\n  ${Ember.get(this, 'originalModel.customTargetConfig.content')}\n</match>`,
          preTargetType
        });
      } else {
        Ember.setProperties(this, {
          pasteOrUpload: false,
          customContent: Ember.get(this, 'model.customTarget.config.content')
        });
      }
    },

    kafkaWillSave() {
      const {
        model,
        intl
      } = this;
      const errors = [];
      let kt;
      const brokerEndpoints = Ember.get(model, 'kafka.config.brokerEndpoints');
      const zookeeperEndpoint = Ember.get(model, 'kafka.config.zookeeperEndpoint');
      const kafkaConfig = Ember.get(model, 'kafkaConfig') || {};

      if (brokerEndpoints && brokerEndpoints.length > 0) {
        kt = 'broker';
      } else if (zookeeperEndpoint) {
        kt = 'zookeeper';
      } else {
        errors.pushObject(intl.t('loggingPage.kafka.endpoint.required'));
      }

      if (kt === 'broker') {
        if (Ember.get(kafkaConfig, 'saslUsername') && Ember.get(kafkaConfig, 'saslPassword')) {
          if (Ember.get(kafkaConfig, 'saslType') === 'plain') {
            Ember.set(kafkaConfig, 'saslScramMechanism', null);
          }
        } else {
          Ember.setProperties(kafkaConfig, {
            saslType: null,
            saslScramMechanism: null
          });
        }

        Ember.setProperties(kafkaConfig, {
          zookeeperEndpoint: null,
          brokerEndpoints
        });
      } else if (kt === 'zookeeper') {
        Ember.setProperties(kafkaConfig, {
          zookeeperEndpoint,
          brokerEndpoints: null,
          saslScramMechanism: null,
          saslPassword: null,
          saslType: null,
          saslUsername: null,
          clientKey: null,
          clientCert: null,
          certificate: null
        });
      }

      if (!Ember.get(kafkaConfig, 'topic')) {
        errors.pushObject(intl.t('loggingPage.kafka.topic.required'));
      }

      return errors;
    },

    syslogWillSave() {
      const {
        model = {},
        intl
      } = this;
      const errors = [];
      const config = Ember.get(model, 'syslog.config') || {};
      const {
        endpoint,
        protocol,
        enableTls,
        sslVerify
      } = config;
      const syslogConfig = Ember.get(model, 'syslogConfig') || {};

      if (!endpoint) {
        errors.pushObject(intl.t('loggingPage.syslog.endpoint.required'));
      }

      if (protocol === 'udp') {
        Ember.setProperties(syslogConfig, {
          certificate: null,
          clientKey: null,
          clientCert: null,
          sslVerify: false,
          enableTls: null
        });
      }

      if (protocol === 'tcp') {
        if (!enableTls) {
          Ember.setProperties(syslogConfig, {
            certificate: null,
            clientKey: null,
            clientCert: null,
            sslVerify: false
          });
        } else {
          if (!sslVerify) {
            Ember.set(syslogConfig, 'certificate', null);
          }
        }
      }

      return errors;
    },

    splunkWillSave() {
      const {
        model = {},
        intl
      } = this;
      const errors = [];

      if (!Ember.get(model, 'splunk.config.endpoint')) {
        errors.pushObject(intl.t('loggingPage.splunk.endpointRequired'));
      }

      if (!Ember.get(model, 'splunk.config.token')) {
        errors.pushObject(intl.t('loggingPage.splunk.tokenRequired'));
      }

      const config = Ember.get(model, 'splunk.config') || {};
      const {
        endpoint = '',
        sslVerify
      } = config;
      const splunkConfig = Ember.get(model, 'splunkConfig') || {};

      if (endpoint.startsWith('https')) {
        if (!sslVerify) {
          Ember.set(splunkConfig, 'certificate', null);
        }
      } else {
        Ember.setProperties(splunkConfig, {
          certificate: null,
          clientKey: null,
          clientCert: null,
          clientKeyPass: null,
          sslVerify: false
        });
      }

      return errors;
    },

    elasticsearchWillSave() {
      const {
        model = {},
        intl
      } = this;
      const errors = [];
      const config = Ember.get(model, 'elasticsearch.config') || {};
      const elasticsearchConfig = Ember.get(model, 'elasticsearchConfig') || {};
      Ember.set(elasticsearchConfig, 'indexPrefix', Ember.get(elasticsearchConfig, 'indexPrefix').toLowerCase());
      const indexPrefix = Ember.get(elasticsearchConfig, 'indexPrefix');

      if (!indexPrefix) {
        errors.pushObject(intl.t('loggingPage.elasticsearch.indexPatterns.errors.required'));
      }

      if (indexPrefix.startsWith('-') || indexPrefix.startsWith('_') || indexPrefix.startsWith('+')) {
        errors.pushObject(intl.t('loggingPage.elasticsearch.indexPatterns.errors.startsWith'));
      }

      INVALID_PREFIX_CHAR.forEach(char => {
        if (indexPrefix.indexOf(char) > -1) {
          errors.pushObject(intl.t('loggingPage.elasticsearch.indexPatterns.errors.invalidCharacters', {
            char
          }));
        }
      });
      const esErrors = Ember.get(this, 'esErrors');
      const {
        endpoint,
        sslVerify
      } = config;

      if (!endpoint) {
        errors.pushObject(intl.t('loggingPage.elasticsearch.endpoint.required'));
      } else if (esErrors) {
        errors.pushObject(intl.t(esErrors));
      }

      Ember.set(elasticsearchConfig, 'endpoint', this.formatUrl(endpoint));

      if (endpoint.startsWith('https')) {
        if (!sslVerify) {
          Ember.set(elasticsearchConfig, 'certificate', null);
        }
      } else {
        Ember.setProperties(elasticsearchConfig, {
          certificate: null,
          clientKey: null,
          clientCert: null,
          clientKeyPass: null,
          sslVerify: false
        });
      }

      return errors;
    },

    fileToFormType(type) {
      let formType = type;

      switch (type) {
        case 'splunk_hec':
          formType = 'splunk';
          break;

        case 'remote_syslog':
          formType = 'syslog';
          break;

        case 'kafka_buffered':
          formType = 'kafka';
          break;

        case 'forward':
          formType = 'fluentForwarder';
          break;
      }

      return formType;
    },

    syncForm(file) {
      const {
        fileObj = {}
      } = this.parseValue(file || Ember.get(this, 'customContent'));
      const type = fileObj['@type'];
      let config = {};
      let model = {};

      if (type === 'forward') {
        config = _constants.default.LOGGING_FILE_TO_FORM.FLUENTD;
        model = Ember.get(this, 'model.fluentForwarder.config');
        const elements = (Ember.get(fileObj, 'elements') || []).filter(e => e.elementName === 'server');
        const fluentServers = elements.map(e => {
          const {
            attrs = {}
          } = e;
          let endpoint;

          if (Ember.get(attrs, 'host') && Ember.get(attrs, 'port')) {
            endpoint = `${Ember.get(attrs, 'host')}:${Ember.get(attrs, 'port')}`;
          } else if (Ember.get(attrs, 'host')) {
            endpoint = `${Ember.get(attrs, 'host')}`;
          }

          let castWeight = parseInt(Ember.get(attrs, 'weight'), 10);

          if (Number.isNaN(castWeight)) {
            castWeight = 100;
          }

          return {
            endpoint,
            sharedKey: Ember.get(attrs, 'shared_key'),
            username: Ember.get(attrs, 'username'),
            password: Ember.get(attrs, 'password'),
            hostname: Ember.get(attrs, 'name'),
            weight: castWeight,
            standby: Ember.get(attrs, 'standby')
          };
        });
        Ember.set(model, 'fluentServers', fluentServers);
      }

      if (type === 'elasticsearch') {
        config = _constants.default.LOGGING_FILE_TO_FORM.ELASTICSEARCH;
        model = Ember.get(this, 'model.elasticsearch.config');
      } else if (type === 'splunk_hec') {
        config = _constants.default.LOGGING_FILE_TO_FORM.SPLUNK;
        model = Ember.get(this, 'model.splunk.config');
      } else if (type === 'kafka_buffered') {
        config = _constants.default.LOGGING_FILE_TO_FORM.KAFKA;
        model = Ember.get(this, 'model.kafka.config');
      } else if (type === 'remote_syslog') {
        config = _constants.default.LOGGING_FILE_TO_FORM.SYSLOG;
        model = Ember.get(this, 'model.syslog.config');
      }

      Object.keys(config).map(key => {
        if (key === 'host') {
          if (Ember.get(fileObj, 'host') && Ember.get(fileObj, 'port')) {
            Ember.set(model, 'endpoint', `${Ember.get(fileObj, 'host')}:${Ember.get(fileObj, 'port')}`);
          } else if (Ember.get(fileObj, 'host')) {
            Ember.set(model, 'endpoint', `${Ember.get(fileObj, 'host')}`);
          }
        } else if (key === 'brokers') {
          const brokers = Ember.get(fileObj, 'brokers');
          Ember.set(model, 'brokerEndpoints', brokers ? brokers.split(',') : null);
        } else if (key === 'logstash_dateformat') {
          Ember.set(model, 'dateFormat', DATE_FORMAT[fileObj[key]]);
        } else {
          Ember.set(model, Ember.get(config, key), fileObj[key]);
        }
      });
    }

  });

  _exports.default = _default;
});
define("logging/components/logging/new-edit/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Y57B69n7",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,10],[[35,34,[\"currentCluster\",\"isReady\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,10],[[35,34,[\"currentCluster\",\"isK8s21Plus\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,33],null,[[\"color\"],[\"bg-error\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,27],[\"banner.logging21\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,33],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,27],[\"banner.logging\"],[[\"dashboardLink\",\"docsBase\",\"htmlSafe\"],[[35,34,[\"dashboardLink\"]],[35,34,[\"docsBase\"]],true]]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n  \"],[10,\"h1\"],[14,0,\"pull-left text-capitalize\"],[12],[2,\"\\n    \"],[1,[30,[36,27],[[35,35]],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,10],[[35,36]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,33],null,[[\"icon\",\"color\",\"message\"],[\"icon-alert\",\"bg-warning mb-10\",[30,[36,27],[\"windowsCluster.logging.vxlanWarning\"],[[\"appName\",\"htmlSafe\"],[[35,32,[\"appName\"]],true]]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"banner bg-info\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"banner-icon p-20\"],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"icon icon-info\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"banner-message p-20\"],[12],[2,\"\\n\"],[6,[37,10],[[35,20]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,10],[[35,30]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,27],[\"windowsCluster.logging.helpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"          \"],[1,[30,[36,27],[\"loggingPage.helpText.cluster\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"ul\"],[12],[2,\"\\n          \"],[10,\"li\"],[14,5,\"list-style: circle;\"],[12],[2,\"\\n\"],[6,[37,10],[[35,30]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,27],[\"windowsCluster.logging.helpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"              \"],[1,[30,[36,27],[\"loggingPage.helpText.cluster\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[10,\"li\"],[14,5,\"list-style: circle;\"],[12],[2,\"\\n\"],[6,[37,10],[[30,[36,22],[[35,29],[30,[36,31],[[35,29],\"none\"],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,27],[\"loggingPage.helpText.clusterTarget\"],[[\"clusterTargetType\",\"htmlSafe\"],[[35,29],true]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"              \"],[1,[30,[36,27],[\"loggingPage.helpText.noClusterTarget\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[30,[36,31],[[35,0],\"none\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"has-tabs clearfix p-0\"],[12],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"tab-nav\"],[12],[2,\"\\n\"],[6,[37,10],[[30,[36,9],[[35,0],\"customTarget\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"li\"],[12],[2,\"\\n          \"],[11,\"button\"],[16,0,[30,[36,28],[[30,[36,10],[[35,4],\"btn-disabled-transparent\"],null],\" btn bg-transparent\"],null]],[16,\"disabled\",[34,4]],[24,4,\"button\"],[4,[38,5],[[32,0],\"cancel\"],null],[12],[2,\"\\n            \"],[1,[30,[36,27],[\"loggingPage.advanced.cancel\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"li\"],[12],[2,\"\\n          \"],[11,\"button\"],[24,0,\"btn bg-transparent\"],[24,4,\"button\"],[4,[38,5],[[32,0],\"showPaste\"],null],[12],[2,\"\\n            \"],[1,[30,[36,27],[\"loggingPage.advanced.file\"],null]],[2,\" \"],[10,\"span\"],[14,0,\"icon icon-copy\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[30,[36,9],[[35,0],\"customTarget\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"mt-25\"],[12],[2,\"\\n    \"],[1,[30,[36,24],null,[[\"showDownload\",\"canChangeName\",\"autoResize\",\"value\",\"model\",\"parentModel\",\"targetType\",\"pageScope\"],[false,false,true,[35,23],[35,1,[\"customTarget\"]],[35,1],[35,0],[35,15]]]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[1,[30,[36,26],null,[[\"tooltipText\",\"buttonText\",\"clipboardText\",\"class\"],[\"\",\"copyToClipboard.tooltip\",[35,25],\"with-clip\"]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,21],null,[[\"originalModel\",\"targetType\",\"isClusterLevel\",\"pageScope\"],[[35,17],[35,0],[35,20],[35,15]]]]],[2,\"\\n\\n\"],[6,[37,10],[[30,[36,22],[[35,17,[\"showTransitioningMessage\"]],[30,[36,9],[[35,17,[\"targetType\"]],[35,0]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[15,0,[31,[\"banner \",[34,17,[\"stateBackground\"]]]]],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"banner-icon p-20\"],[12],[10,\"i\"],[15,0,[31,[\"icon \",[34,17,[\"stateIcon\"]]]]],[12],[13],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"banner-message p-20\"],[12],[2,\"\\n        \"],[10,\"table\"],[12],[2,\"\\n          \"],[1,[30,[36,19],null,[[\"fullColspan\",\"model\"],[[35,18],[35,17]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[30,[36,9],[[35,0],\"elasticsearch\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,16],null,[[\"targetType\",\"model\",\"pageScope\",\"parentModel\",\"endpointErrorText\"],[[35,0],[35,1,[\"elasticsearch\"]],[35,15],[35,1],[35,14]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,10],[[30,[36,9],[[35,0],\"splunk\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,13],null,[[\"model\",\"parentModel\",\"targetType\"],[[35,1,[\"splunk\"]],[35,1],[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,10],[[30,[36,9],[[35,0],\"kafka\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,12],null,[[\"model\",\"parentModel\",\"targetType\"],[[35,1,[\"kafka\"]],[35,1],[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,10],[[30,[36,9],[[35,0],\"syslog\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,11],null,[[\"model\",\"parentModel\",\"targetType\"],[[35,1,[\"syslog\"]],[35,1],[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,10],[[30,[36,9],[[35,0],\"fluentForwarder\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,8],null,[[\"model\",\"parentModel\",\"targetType\",\"endpointValidate\"],[[35,1,[\"fluentForwarder\"]],[35,1],[35,0],[35,7]]]]],[2,\"\\n  \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[1,[30,[36,38],null,[[\"errors\"],[[35,37]]]]],[2,\"\\n\\n\"],[6,[37,10],[[30,[36,31],[[35,0],\"none\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,6],null,[[\"test\",\"testing\",\"tested\",\"testOk\",\"model\",\"targetType\"],[[30,[36,5],[[32,0],\"test\"],null],[35,4],[35,3],[35,2],[35,1],[35,0]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"div\"],[14,0,\"footer-actions\"],[12],[2,\"\\n  \"],[1,[30,[36,40],null,[[\"saveDisabled\",\"cancelDisabled\",\"editing\",\"save\"],[[35,39],true,true,[30,[36,5],[[32,0],\"save\"],null]]]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"targetType\",\"model\",\"testOk\",\"tested\",\"testing\",\"action\",\"logging/form-test\",\"endpointValidate\",\"logging/target-flentd\",\"eq\",\"if\",\"logging/target-syslog\",\"logging/target-kafka\",\"logging/target-splunk\",\"esErrors\",\"pageScope\",\"logging/target-elasticsearch\",\"originalModel\",\"fullColspan\",\"error-sub-row\",\"isClusterLevel\",\"logging/targets-nav\",\"and\",\"customContent\",\"logging/input-logging-config\",\"value\",\"copy-to-clipboard\",\"t\",\"concat\",\"clusterTargetType\",\"isWindows\",\"not-eq\",\"settings\",\"banner-message\",\"scope\",\"headerLabel\",\"showWindowsWarning\",\"errors\",\"top-errors\",\"saveDisabled\",\"save-cancel\"]}",
    "moduleName": "logging/components/logging/new-edit/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/target-elasticsearch/component", ["exports", "logging/mixins/target-elasticsearch", "shared/utils/parse-uri", "jquery"], function (_exports, _targetElasticsearch, _parseUri, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const endpointText = {
    hostError: 'loggingPage.elasticsearch.endpointHostError',
    protocolError: 'loggingPage.elasticsearch.endpointProtocolError'
  };

  var _default = Ember.Component.extend(_targetElasticsearch.default, {
    showAdvanced: false,
    endpointError: false,
    endpointErrorText: null,
    config: Ember.computed.alias('model.config'),
    sslVerify: Ember.computed.alias('model.config.sslVerify'),

    didInsertElement() {
      (0, _jquery.default)('#elasticsearch-endpoint').focus();
    },

    actions: {
      alertMessage(value = '') {
        const urlParser = (0, _parseUri.default)(value) || {};
        Ember.set(this, 'endpointError', true);

        if (value.startsWith('https://') || value.startsWith('http://')) {
          if (urlParser.host) {
            Ember.setProperties(this, {
              endpointError: false,
              endpointErrorText: null
            });
          } else {
            Ember.set(this, 'endpointErrorText', endpointText.hostError);
          }
        } else {
          Ember.set(this, 'endpointErrorText', endpointText.protocolError);
        }
      }

    },
    enableSSLConfig: Ember.computed('config.endpoint', function () {
      const endpoint = Ember.get(this, 'config.endpoint') || '';

      if (endpoint.startsWith('https')) {
        return true;
      } else {
        return false;
      }
    }),
    indexFormat: Ember.computed('pageScope', function () {
      const ps = Ember.get(this, 'pageScope');
      return ps === 'cluster' ? '${clusterName}-${dateFormat}' : '${clusterName}_${projectName}-${dateFormat}';
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-elasticsearch/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lD+I93/m",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h2\"],[14,0,\"mt-30\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.header\"],null]],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n  \"],[10,\"section\"],[14,0,\"mb-30\"],[12],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[1,[30,[36,0],[\"loggingPage.endpoint\"],null]],[1,[34,2]],[13],[2,\"\\n      \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\",\"focus-out\"],[\"text\",[35,4,[\"endpoint\"]],\"form-control\",[30,[36,0],[\"loggingPage.endpointPlaceholder\"],null],\"elasticsearch-endpoint\",[30,[36,3],[[32,0],\"alertMessage\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[14,0,\"text-error text-small\"],[12],[1,[30,[36,0],[[35,1]],null]],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.endpointHelpText\"],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"h4\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.xpack.header\"],null]],[2,\" \"],[10,\"span\"],[14,0,\"text-muted\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.xpack.headerOptional\"],null]],[13],[13],[2,\"\\n  \"],[10,\"section\"],[12],[2,\"\\n    \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\" \"],[1,[30,[36,0],[\"loggingPage.elasticsearch.xpack.helpText\"],null]],[2,\" \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\" \"],[1,[30,[36,0],[\"loggingPage.elasticsearch.xpack.username\"],null]],[2,\" \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"type\",\"utocomplete\",\"value\",\"classNames\",\"placeholder\"],[\"text\",\"off\",[35,4,[\"authUsername\"]],\"form-control\",[30,[36,0],[\"loggingPage.elasticsearch.xpack.usernamePlaceholder\"],null]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\" \"],[1,[30,[36,0],[\"loggingPage.elasticsearch.xpack.password\"],null]],[2,\" \"],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"utocomplete\",\"type\",\"value\",\"classNames\",\"placeholder\"],[\"off\",\"password\",[35,4,[\"authPassword\"]],\"form-control\",[30,[36,0],[\"loggingPage.elasticsearch.xpack.passwordPlaceholder\"],null]]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"h4\"],[14,0,\"mt-20\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.indexPatterns.header\"],null]],[13],[2,\"\\n  \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.indexPatterns.helpText\"],null]],[13],[2,\"\\n  \"],[10,\"section\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.indexPatterns.prefix\"],null]],[1,[34,2]],[13],[2,\"\\n        \"],[1,[30,[36,5],null,[[\"type\",\"value\",\"className\",\"placeholder\"],[\"text\",[35,4,[\"indexPrefix\"]],\"form-control\",[30,[36,0],[\"loggingPage.elasticsearch.indexPatterns.prefixPlaceholder\"],null]]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,5,\"margin-top: 34px;\"],[12],[2,\"\\n          \"],[10,\"label\"],[12],[1,[30,[36,0],[\"loggingPage.elasticsearch.indexPatterns.dateFormat\"],null]],[13],[2,\"\\n          \"],[10,\"label\"],[14,0,\"mr-10\"],[12],[1,[30,[36,8],null,[[\"selection\",\"value\"],[[35,4,[\"dateFormat\"]],\"YYYY-MM-DD\"]]]],[2,\" YYYY-MM-DD\"],[13],[2,\"\\n          \"],[10,\"label\"],[14,0,\"mr-10\"],[12],[1,[30,[36,8],null,[[\"selection\",\"value\"],[[35,4,[\"dateFormat\"]],\"YYYY-MM\"]]]],[2,\" YYYY-MM\"],[13],[2,\"\\n          \"],[10,\"label\"],[14,0,\"mr-10\"],[12],[1,[30,[36,8],null,[[\"selection\",\"value\"],[[35,4,[\"dateFormat\"]],\"YYYY\"]]]],[2,\" YYYY\"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,0],[\"loggingPage.elasticsearch.generatedIndex\"],[[\"esIndex\",\"indexFormat\",\"htmlSafe\"],[[35,10],[35,9],true]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\\n\"],[1,[30,[36,14],null,[[\"config\",\"targetType\",\"disabled\"],[[35,4],[35,13],[30,[36,12],[[35,11]],null]]]]],[2,\"\\n\\n\"],[1,[30,[36,18],null,[[\"logPreview\",\"model\",\"loggingModel\"],[[35,17],[35,16],[35,15]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"endpointErrorText\",\"field-required\",\"action\",\"config\",\"input\",\"endpointError\",\"if\",\"radio-button\",\"indexFormat\",\"esIndex\",\"enableSSLConfig\",\"not\",\"targetType\",\"logging/form-log-ssl\",\"parentModel\",\"model\",\"logPreview\",\"logging/form-log-format\"]}",
    "moduleName": "logging/components/logging/target-elasticsearch/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/target-flentd/component", ["exports", "shared/utils/parse-uri", "jquery"], function (_exports, _parseUri, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const endpointText = {
    hostError: 'loggingPage.fluentd.endpointHostError',
    portError: 'loggingPage.fluentd.endpointPortError'
  };

  var _default = Ember.Component.extend({
    store: Ember.inject.service(),
    showAdvanced: false,
    endpointErrorText: null,
    index: null,
    endpointError: false,
    config: Ember.computed.alias('model.config'),
    fluentServers: Ember.computed.alias('model.config.fluentServers'),

    init() {
      this._super(...arguments);

      const fluentServers = Ember.get(this, 'config.fluentServers');

      if (!fluentServers) {
        this.send('add');
      } else {
        this.convertToPlainObj();
      }
    },

    didInsertElement() {
      Ember.run.next(() => {
        (0, _jquery.default)('.fluentd-endpoint:first').trigger('focus');
      });
    },

    didUpdateAttrs() {
      this.convertToPlainObj();
    },

    actions: {
      add() {
        const ary = Ember.get(this, 'fluentServers');
        const defaultFluentServers = {
          endpoint: '',
          password: '',
          sharedKey: '',
          standby: false,
          username: '',
          weight: 100,
          hostname: ''
        };

        if (!ary) {
          Ember.set(this, 'fluentServers', [defaultFluentServers]);
        } else {
          ary.pushObject(defaultFluentServers);
        }
      },

      remove(item, idx) {
        if (Ember.get(this, 'canRemove')) {
          if (idx === Ember.get(this, 'index')) {
            Ember.setProperties(this, {
              endpointError: false,
              endpointValidate: true
            });
          }

          Ember.get(this, 'fluentServers').removeObject(item);
        }
      },

      alertMessage(idx, value = '') {
        if (value.startsWith('https://') || value.startsWith('http://')) {
          Ember.setProperties(this, {
            endpointErrorText: endpointText.hostError,
            endpointError: true,
            endpointValidate: false,
            index: idx
          });
          return;
        }

        const urlParser = (0, _parseUri.default)(value) || {};

        if (!urlParser.port) {
          Ember.setProperties(this, {
            endpointErrorText: endpointText.portError,
            endpointError: true,
            endpointValidate: false,
            index: idx
          });
          return;
        }

        Ember.setProperties(this, {
          endpointError: false,
          endpointValidate: true
        });
      }

    },
    canRemove: Ember.computed('fluentServers.length', function () {
      return Ember.get(this, 'fluentServers.length') > 1;
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      const fieldsStr = Ember.get(this, 'fieldsStr');
      const template = `{
    "log":    "time=\"${new Date().toString()}\" level=info msg=\"Cluster [local] condition status unknown\"",
    "stream": "stderr",
    "tag":    "default.var.log.containers.cattle-6b4ccb5b9d-v57vw_default_cattle-xxx.log"
    "docker": {
        "container_id": "xxx"
    },
    "kubernetes": {
        "container_name": "cattle",
        "namespace_name": "default",
        "pod_name":       "cattle-6b4ccb5b9d-v57vw",
        "pod_id":         "30c685d0-fa43-11e7-b992-00163e016dc2",
        "labels":         {
            "app": "cattle",
            "pod-template-hash": "2607761658"
        },
        "host":       "47.52.113.251",
        "master_url": "https://10.233.0.1:443/api"
    },
${fieldsStr}
  ...
}`;
      return template;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      const keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(key => `    "${key}": "${keyValueMap[key]}"`).join(',\n');
    }),

    convertToPlainObj() {
      const fluentServers = Ember.get(this, 'config.fluentServers') || [];
      Ember.set(this, 'fluentServers', fluentServers.map(f => ({
        endpoint: f.endpoint,
        password: f.password,
        sharedKey: f.sharedKey,
        standby: f.standby,
        username: f.username,
        weight: f.weight,
        hostname: f.hostname
      })));
    }

  });

  _exports.default = _default;
});
define("logging/components/logging/target-flentd/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "b6eYqjFc",
    "block": "{\"symbols\":[\"item\",\"idx\"],\"statements\":[[10,\"h2\"],[14,0,\"mt-30\"],[12],[2,\"\\n  \"],[1,[30,[36,1],[\"loggingPage.fluentd.header\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"section\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"mb-30\"],[12],[2,\"\\n\"],[6,[37,14],[[30,[36,13],[[30,[36,13],[[35,12]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"row box mb-20\"],[12],[2,\"\\n\"],[6,[37,5],[[35,4]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n            \"],[11,\"button\"],[24,0,\"btn bg-transparent text-small vertical-middle\"],[24,4,\"button\"],[4,[38,3],[[32,0],\"remove\",[32,1],[32,2]],null],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"loggingPage.fluentd.removeFluentServers\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.fluentd.endpoint.label\"],null]],[2,\"\\n\"],[6,[37,5],[[30,[36,6],[[32,2],0],null]],null,[[\"default\"],[{\"statements\":[[2,\"                  \"],[1,[34,2]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"              \"],[13],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"focus-out\"],[\"text\",[32,1,[\"endpoint\"]],\"form-control fluentd-endpoint\",[30,[36,1],[\"loggingPage.fluentd.endpoint.placeholder\"],null],[30,[36,3],[[32,0],\"alertMessage\",[32,2]],null]]]]],[2,\"\\n\"],[6,[37,5],[[30,[36,10],[[35,9],[30,[36,6],[[32,2],[35,8]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[10,\"span\"],[14,0,\"text-error text-small\"],[12],[2,\"\\n                  \"],[1,[30,[36,1],[[35,0]],null]],[2,\"\\n                \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.fluentd.sharedKey.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"password\",[32,1,[\"sharedKey\"]],\"form-control\",[30,[36,1],[\"loggingPage.fluentd.sharedKey.placeholder\"],null]]]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.fluentd.username.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[32,1,[\"username\"]],\"form-control\",[30,[36,1],[\"loggingPage.fluentd.username.placeholder\"],null]]]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.fluentd.password.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"password\",[32,1,[\"password\"]],\"form-control\",[30,[36,1],[\"loggingPage.fluentd.password.placeholder\"],null]]]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-12 pt-0\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.fluentd.hostname.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[32,1,[\"hostname\"]],\"form-control\",[30,[36,1],[\"loggingPage.fluentd.hostname.placeholder\"],null]]]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"loggingPage.fluentd.weight.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,11],null,[[\"class\",\"min\",\"value\",\"placeholder\"],[\"form-control input-sm public\",\"0\",[32,1,[\"weight\"]],[30,[36,1],[\"loggingPage.fluentd.weight.placeholder\"],null]]]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"col span-12 pt-0\"],[14,5,\"margin-top: 43px;\"],[12],[2,\"\\n              \"],[1,[30,[36,7],null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[32,1,[\"standby\"]]]]]],[2,\"\\n              \"],[1,[30,[36,1],[\"loggingPage.fluentd.standby.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1,2]}]]],[2,\"    \"],[10,\"div\"],[12],[2,\"\\n      \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn\"],[24,4,\"button\"],[4,[38,3],[[32,0],\"add\"],null],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[2,\"\\n          \"],[1,[30,[36,1],[\"loggingPage.fluentd.addServer\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[1,[30,[36,18],null,[[\"config\",\"targetType\",\"disabled\"],[[35,15],[35,17],[30,[36,16],[[35,15,[\"enableTls\"]]],null]]]]],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 pt-0\"],[14,5,\"margin-top: 43px;\"],[12],[2,\"\\n      \"],[1,[30,[36,7],null,[[\"type\",\"classNames\",\"checked\"],[\"checkbox\",\"form-control\",[35,15,[\"compress\"]]]]]],[2,\"\\n      \"],[1,[30,[36,1],[\"loggingPage.fluentd.compress.label\"],null]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[14,5,\"margin-left: 25px;\"],[12],[2,\"\\n        \"],[1,[30,[36,1],[\"loggingPage.fluentd.compress.helpText\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[1,[30,[36,22],null,[[\"logPreview\",\"model\",\"loggingModel\"],[[35,21],[35,20],[35,19]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"endpointErrorText\",\"t\",\"field-required\",\"action\",\"canRemove\",\"if\",\"eq\",\"input\",\"index\",\"endpointError\",\"and\",\"input-int\",\"fluentServers\",\"-track-array\",\"each\",\"config\",\"not\",\"targetType\",\"logging/form-log-ssl\",\"parentModel\",\"model\",\"logPreview\",\"logging/form-log-format\"]}",
    "moduleName": "logging/components/logging/target-flentd/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/target-kafka/component", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    brokerType: 'zookeeper',
    brokerEndpoints: null,
    cachedBrokerEndpoints: null,
    cachedZookeeperEndpoint: null,
    showAdvanced: false,
    config: Ember.computed.alias('model.config'),
    isWindows: Ember.computed.alias('scope.currentCluster.isWindows'),

    init() {
      this._super();

      const brokerEndpoints = Ember.get(this, 'config.brokerEndpoints');

      if (brokerEndpoints) {
        Ember.setProperties(this, {
          brokerType: 'broker',
          brokerEndpoints: brokerEndpoints.map(endpoint => ({
            endpoint
          }))
        });
      } else if (Ember.get(this, 'isWindows')) {
        Ember.set(this, 'brokerType', 'broker');
        this.brokerTypeChange();
      } else {
        Ember.set(this, 'brokerType', 'zookeeper');
      }

      const config = Ember.get(this, 'config');
      Ember.setProperties(config, {
        saslType: Ember.get(config, 'saslType') || 'plain',
        saslScramMechanism: Ember.get(config, 'saslScramMechanism') || 'sha256'
      });
    },

    didInsertElement() {
      (0, _jquery.default)('#kafka-endpoint').focus();
    },

    actions: {
      add() {
        const ary = Ember.get(this, 'brokerEndpoints');

        if (!ary) {
          Ember.set(this, 'brokerEndpoints', [{
            endpoint: ''
          }]);
        } else {
          ary.pushObject({
            endpoint: ''
          });
        }
      },

      remove(item) {
        if (Ember.get(this, 'canRemove')) {
          Ember.get(this, 'brokerEndpoints').removeObject(item);
        }
      }

    },
    // cache and restore
    brokerTypeChange: Ember.observer('brokerType', function () {
      const t = Ember.get(this, 'brokerType');
      const {
        brokerEndpoints,
        zookeeperEndpoint,
        cachedZookeeperEndpoint,
        cachedBrokerEndpoints
      } = this;

      if (t === 'zookeeper') {
        Ember.setProperties(this, {
          cachedBrokerEndpoints: brokerEndpoints,
          'config.zookeeperEndpoint': cachedZookeeperEndpoint,
          brokerEndpoints: null
        });
      } else if (t === 'broker') {
        if (!cachedBrokerEndpoints) {
          this.send('add');
        } else {
          Ember.set(this, 'brokerEndpoints', cachedBrokerEndpoints);
        }

        Ember.setProperties(this, {
          cachedZookeeperEndpoint: zookeeperEndpoint,
          'config.zookeeperEndpoint': null
        });
      }
    }),
    setBroker: Ember.observer('brokerEndpoints.@each.endpoint', function () {
      const eps = Ember.get(this, 'brokerEndpoints');
      let nue;

      if (!eps) {
        nue = null;
      } else {
        nue = eps.filter(item => !!item.endpoint).map(item => item.endpoint);
      }

      Ember.set(this, 'config.brokerEndpoints', nue);
    }),
    enableSSLConfig: Ember.computed('brokerType', 'config.brokerEndpoints.@each.endpoint', function () {
      const {
        brokerType,
        config = {}
      } = this;

      if (brokerType === 'broker') {
        if (Ember.get(config, 'brokerEndpoints')) {
          const sslEndpoints = (Ember.get(config, 'brokerEndpoints') || []).filter((e = '') => e.startsWith('https'));
          return sslEndpoints.length > 0;
        }
      }

      return false;
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      const str = Ember.get(this, 'fieldsStr');
      return `{
    "log": "here's your log",
    "stream": "stdout",
    "tag": "kubernetes.var.log.containers.splunk-dep-848b7...cb4.log"
    "docker": {
        "container_id": "5f07a15a2a60ef4..."
    },
    "kubernetes": {
        "container_name": "splunk",
        "namespace_name": "cattle-system",
        "pod_name": "splunk-dep-848b7cbdd-5jqd4"
    },
    "time": 1515680329,
${str}
}`;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      const keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(key => `    "${key}": "${keyValueMap[key]}"`).join(',\n');
    }),
    canRemove: Ember.computed('brokerEndpoints.length', function () {
      return Ember.get(this, 'brokerEndpoints.length') > 1;
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-kafka/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TU4Aozpx",
    "block": "{\"symbols\":[\"item\",\"idx\"],\"statements\":[[10,\"h2\"],[14,0,\"mt-30\"],[12],[2,\"\\n  \"],[1,[30,[36,5],[\"loggingPage.kafka.header\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"box mb-10\"],[12],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"pr-10\"],[12],[2,\"\\n      \"],[1,[30,[36,5],[\"loggingPage.kafka.endpointType\"],null]],[2,\":\\n    \"],[13],[2,\"\\n\"],[6,[37,17],[[35,16]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"label\"],[14,0,\"mr-10\"],[12],[2,\"\\n        \"],[1,[30,[36,15],null,[[\"selection\",\"value\"],[[35,14],\"zookeeper\"]]]],[2,\"\\n        \"],[1,[30,[36,5],[\"loggingPage.kafka.zookeeper\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[10,\"label\"],[14,0,\"mr-10\"],[12],[2,\"\\n      \"],[1,[30,[36,15],null,[[\"selection\",\"value\"],[[35,14],\"broker\"]]]],[2,\"\\n      \"],[1,[30,[36,5],[\"loggingPage.kafka.broker\"],null]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n\"],[6,[37,7],[[35,16]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,5],[\"windowsCluster.logging.kafka.brokerTypeHelpText\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,5],[\"loggingPage.kafka.brokerTypeHelpText\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[10,\"section\"],[14,0,\"mb-30\"],[12],[2,\"\\n\"],[6,[37,7],[[30,[36,6],[[35,14],\"zookeeper\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n          \"],[1,[30,[36,5],[\"loggingPage.endpoint\"],null]],[2,\"\\n          \"],[1,[34,4]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[1,[30,[36,8],null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\"],[\"text\",[35,1,[\"zookeeperEndpoint\"]],\"form-control\",[30,[36,5],[\"loggingPage.kafka.endpoint.zookeeper.placeholder\"],null],\"kafka-endpoint\"]]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small mb-0\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"loggingPage.kafka.zookeeperHelpText\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,13],[[30,[36,12],[[30,[36,12],[[35,11]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-11\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n              \"],[1,[30,[36,5],[\"loggingPage.endpoint\"],null]],[2,\"\\n\"],[6,[37,7],[[30,[36,6],[[32,2],0],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[1,[34,4]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"            \"],[13],[2,\"\\n            \"],[1,[30,[36,8],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[32,1,[\"endpoint\"]],\"form-control\",[30,[36,5],[\"loggingPage.kafka.endpoint.broker.placeholder\"],null]]]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-1\"],[14,5,\"padding-top: 29px\"],[12],[2,\"\\n            \"],[11,\"button\"],[16,0,[31,[\"btn bg-primary icon-btn \",[30,[36,7],[[35,9],\"\",\"disabled\"],null]]]],[24,4,\"button\"],[4,[38,10],[[32,0],\"remove\",[32,1]],null],[12],[2,\"\\n              \"],[10,\"i\"],[14,0,\"icon icon-minus\"],[12],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1,2]}]]],[2,\"      \"],[10,\"p\"],[14,0,\"text-info text-small mb-0\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"loggingPage.kafka.brokerHelpText\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n        \"],[11,\"button\"],[24,0,\"btn bg-link icon-btn\"],[24,4,\"button\"],[4,[38,10],[[32,0],\"add\"],null],[12],[2,\"\\n          \"],[10,\"i\"],[14,0,\"icon icon-plus text-small\"],[12],[13],[2,\"\\n          \"],[10,\"span\"],[12],[2,\"\\n            \"],[1,[30,[36,5],[\"loggingPage.kafka.addEndpoint\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 mt-0 pt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"loggingPage.kafka.topic.label\"],null]],[2,\"\\n        \"],[1,[34,4]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,8],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[35,1,[\"topic\"]],\"form-control\",[30,[36,5],[\"loggingPage.kafka.topicPlaceholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n        \"],[1,[30,[36,5],[\"loggingPage.kafka.topicHelpText\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,7],[[30,[36,6],[[35,14],\"broker\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,2],null,[[\"config\",\"targetType\"],[[35,1],[35,0]]]]],[2,\"\\n\\n  \"],[1,[30,[36,3],null,[[\"config\"],[[35,1]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[1,[30,[36,21],null,[[\"logPreview\",\"model\",\"loggingModel\"],[[35,20],[35,19],[35,18]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"targetType\",\"config\",\"logging/form-log-ssl\",\"logging/form-log-sasl\",\"field-required\",\"t\",\"eq\",\"if\",\"input\",\"canRemove\",\"action\",\"brokerEndpoints\",\"-track-array\",\"each\",\"brokerType\",\"radio-button\",\"isWindows\",\"unless\",\"parentModel\",\"model\",\"logPreview\",\"logging/form-log-format\"]}",
    "moduleName": "logging/components/logging/target-kafka/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/target-splunk/component", ["exports", "jquery"], function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    showAdvanced: false,
    config: Ember.computed.alias('model.config'),

    didInsertElement() {
      (0, _jquery.default)('#splunk-endpoint').focus();
    },

    enableSSLConfig: Ember.computed('config.endpoint', function () {
      const endpoint = Ember.get(this, 'config.endpoint') || '';

      if (endpoint.startsWith('https')) {
        return true;
      } else {
        return false;
      }
    }),
    logPreview: Ember.computed('fieldsStr', function () {
      const fieldsStr = Ember.get(this, 'fieldsStr');
      const template = `{
    "log": "time=\"${new Date().toString()}\" level=info msg=\"Cluster [local] condition status unknown\"",
    "stream": "stderr",
    "tag": "default.var.log.containers.cattle-6b4ccb5b9d-v57vw_default_cattle-xxx.log"
    "docker": {
        "container_id": "xxx"
    },
    "kubernetes": {
        "container_name": "cattle",
        "namespace_name": "default",
        "pod_name": "cattle-6b4ccb5b9d-v57vw",
        "pod_id": "30c685d0-fa43-11e7-b992-00163e016dc2",
        "labels": {
            "app": "cattle",
            "pod-template-hash": "2607761658"
        },
        "host": "47.52.113.251",
        "master_url": "https://10.233.0.1:443/api"
    },
${fieldsStr}
  ...
}`;
      return template;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      const keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(key => `    "${key}": "${keyValueMap[key]}"`).join(',\n');
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-splunk/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hHVcSb0X",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h2\"],[14,0,\"mt-30\"],[12],[2,\"\\n  \"],[1,[30,[36,0],[\"loggingPage.splunk.header\"],null]],[2,\"\\n  \"],[10,\"span\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n    \"],[1,[30,[36,0],[\"loggingPage.splunk.helpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"section\"],[14,0,\"box\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"mb-30\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[1,[30,[36,0],[\"loggingPage.endpoint\"],null]],[1,[34,1]],[13],[2,\"\\n    \"],[1,[30,[36,3],null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\"],[\"text\",[35,2,[\"endpoint\"]],\"form-control\",[30,[36,0],[\"loggingPage.splunk.endpoint.placeholder\"],null],\"splunk-endpoint\"]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-12 mt-0 pt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[1,[30,[36,0],[\"loggingPage.splunk.token\"],null]],[1,[34,1]],[13],[2,\"\\n      \"],[1,[30,[36,3],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"password\",[35,2,[\"token\"]],\"form-control\",[30,[36,0],[\"loggingPage.splunk.tokenPlaceholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"loggingPage.splunk.tokenHelpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 mt-0 pt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[1,[30,[36,0],[\"loggingPage.splunk.source\"],null]],[13],[2,\"\\n      \"],[1,[30,[36,3],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[35,2,[\"source\"]],\"form-control\",[30,[36,0],[\"loggingPage.splunk.sourcePlaceholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"loggingPage.splunk.sourceHelpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 mt-0 pt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[1,[30,[36,0],[\"loggingPage.splunk.index\"],null]],[13],[2,\"\\n      \"],[1,[30,[36,3],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[35,2,[\"index\"]],\"form-control\",[30,[36,0],[\"loggingPage.splunk.indexPlaceholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n        \"],[1,[30,[36,0],[\"loggingPage.splunk.indexHelpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[1,[30,[36,7],null,[[\"config\",\"targetType\",\"disabled\"],[[35,2],[35,6],[30,[36,5],[[35,4]],null]]]]],[2,\"\\n\\n\"],[1,[30,[36,11],null,[[\"logPreview\",\"model\",\"loggingModel\"],[[35,10],[35,9],[35,8]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"field-required\",\"config\",\"input\",\"enableSSLConfig\",\"not\",\"targetType\",\"logging/form-log-ssl\",\"parentModel\",\"model\",\"logPreview\",\"logging/form-log-format\"]}",
    "moduleName": "logging/components/logging/target-splunk/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/target-syslog/component", ["exports", "moment", "jquery"], function (_exports, _moment, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const SEVERITIES = [{
    value: 'emerg',
    label: 'emergency'
  }, {
    value: 'alert',
    label: 'alert'
  }, {
    value: 'crit',
    label: 'critical'
  }, {
    value: 'err',
    label: 'error'
  }, {
    value: 'warning',
    label: 'warning'
  }, {
    value: 'notice',
    label: 'notice'
  }, {
    value: 'info',
    label: 'info'
  }, {
    value: 'debug',
    label: 'debug'
  }].map(item => {
    return {
      value: item.value,
      label: `loggingPage.syslog.severities.${item.label}`
    };
  });

  var _default = Ember.Component.extend({
    showAdvanced: false,
    preSSlConfig: null,
    config: Ember.computed.alias('model.config'),

    init(...args) {
      this._super(...args);

      this.set('severities', SEVERITIES);
    },

    didInsertElement() {
      (0, _jquery.default)('#syslog-endpoint').focus();
    },

    didReceiveAttrs() {
      const config = Ember.get(this, 'config');
      let preSSlConfig = Object.assign({}, config);
      Ember.set(this, 'preSSlConfig', preSSlConfig);
    },

    actions: {
      changeProtocol(protocol) {
        Ember.set(this, 'config.protocol', protocol);
      }

    },
    enableSSLConfig: Ember.computed('config.protocol', 'preSSlConfig', function () {
      const protocol = Ember.get(this, 'config.protocol') || '';
      const preSSlConfig = Ember.get(this, 'preSSlConfig') || {};
      const config = Ember.get(this, 'config');

      if (protocol === 'tcp') {
        if (preSSlConfig.protocol === 'tcp') {
          Ember.setProperties(config, {
            certificate: preSSlConfig.certificate,
            clientKey: preSSlConfig.clientKey,
            clientCert: preSSlConfig.clientCert,
            sslVerify: preSSlConfig.sslVerify
          });
        }

        return true;
      } else {
        if (config) {
          Ember.setProperties(config, {
            certificate: null,
            clientKey: null,
            clientCert: null,
            sslVerify: false
          });
        }

        return false;
      }
    }),
    logPreview: Ember.computed('fieldsStr', 'config.program', 'config.token', function () {
      const str = Ember.get(this, 'fieldsStr');
      const program = Ember.get(this, 'config.program') || '';
      const ts = (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss');
      let message = `
  stream:stderr
  docker:
  {
    "container_id"=>"218477a1e...0371"
  }
  kubernetes:
  {
    "container_name"=>"kube-flannel",
    "namespace_name"=>"kube-system",
    "pod_name"=>"kube-flannel-8ztd8"
  }`;

      if (Ember.get(this, 'config.token')) {
        const token = `
  token:${Ember.get(this, 'config.token')}`;
        message = token + message;
      }

      return `Timestamp = ${ts}
Host      = 192.168.1.2
Program   = ${program}
Message   = ${message}
${str}`;
    }),
    fieldsStr: Ember.computed('model.outputTags', function () {
      const keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(key => `  "${key}"=>"${keyValueMap[key]}"`).join(',\n');
    })
  });

  _exports.default = _default;
});
define("logging/components/logging/target-syslog/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8SWAreqb",
    "block": "{\"symbols\":[\"item\",\"dd\"],\"statements\":[[10,\"h2\"],[14,0,\"mt-30\"],[12],[2,\"\\n  \"],[1,[30,[36,2],[\"loggingPage.syslog.header\"],null]],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"section\"],[14,0,\"box\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n      \"],[1,[30,[36,2],[\"loggingPage.endpoint\"],null]],[2,\"\\n      \"],[1,[34,3]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n      \"],[1,[30,[36,4],null,[[\"type\",\"value\",\"classNames\",\"placeholder\",\"id\"],[\"text\",[35,0,[\"endpoint\"]],\"form-control\",[30,[36,2],[\"loggingPage.syslog.endpointPlaceholder\"],null],\"syslog-endpoint\"]]]],[2,\"\\n      \"],[10,\"div\"],[14,0,\"input-group-btn bg-primary\"],[12],[2,\"\\n        \"],[8,\"basic-dropdown\",[],[[\"@horizontalPosition\"],[\"left\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,[32,2,[\"Trigger\"]],[[24,0,\"btn bg-default text-uppercase\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"span\"],[14,0,\"pr-5\"],[12],[2,\"\\n              \"],[1,[35,0,[\"protocol\"]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"i\"],[14,0,\"icon icon-chevron-down\"],[12],[13],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n          \"],[8,[32,2,[\"Content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[11,\"li\"],[4,[38,5],[[32,0],[32,2,[\"actions\",\"close\"]]],null],[12],[2,\"\\n              \"],[11,\"a\"],[4,[38,5],[[32,0],\"changeProtocol\",\"tcp\"],null],[12],[2,\"\\n                TCP\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n            \"],[11,\"li\"],[4,[38,5],[[32,0],[32,2,[\"actions\",\"close\"]]],null],[12],[2,\"\\n              \"],[11,\"a\"],[4,[38,5],[[32,0],\"changeProtocol\",\"udp\"],null],[12],[2,\"\\n                UDP\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"parameters\":[2]}]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"p\"],[14,0,\"text-info text-small mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,2],[\"loggingPage.syslog.endpointHelpText\"],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 mt-0 pt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n        \"],[1,[30,[36,2],[\"loggingPage.syslog.program\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,4],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[35,0,[\"program\"]],\"form-control\",[30,[36,2],[\"loggingPage.syslog.programPlaceholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n        \"],[1,[30,[36,2],[\"loggingPage.syslog.programHelpText\"],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"col span-6 mt-0 pt-0\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[14,\"for\",\"\"],[12],[2,\"\\n        \"],[1,[30,[36,2],[\"loggingPage.splunk.token\"],null]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[1,[30,[36,4],null,[[\"type\",\"value\",\"classNames\",\"placeholder\"],[\"text\",[35,0,[\"token\"]],\"form-control\",[30,[36,2],[\"loggingPage.splunk.tokenPlaceholder\"],null]]]]],[2,\"\\n      \"],[10,\"p\"],[14,0,\"text-info text-small\"],[12],[2,\"\\n        \"],[1,[30,[36,2],[\"loggingPage.syslog.tokenHelpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"mr-10\"],[12],[2,\"\\n      Log Severity:\\n    \"],[13],[2,\"\\n\"],[6,[37,8],[[30,[36,7],[[30,[36,7],[[35,6]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"label\"],[14,0,\"mr-10 text-capitalize\"],[12],[2,\"\\n        \"],[1,[30,[36,1],null,[[\"selection\",\"value\"],[[35,0,[\"severity\"]],[32,1,[\"value\"]]]]]],[2,\"\\n        \"],[1,[30,[36,2],[[32,1,[\"label\"]]],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[1,[30,[36,2],[\"loggingPage.syslog.severityHelpText\"],[[\"htmlSafe\"],[true]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[1,[30,[36,13],null,[[\"config\",\"targetType\",\"disabled\"],[[35,0],[35,12],[30,[36,11],[[30,[36,9],[[35,10]],null],[30,[36,9],[[35,0,[\"enableTls\"]]],null]],null]]]]],[2,\"\\n\"],[1,[30,[36,17],null,[[\"logPreview\",\"model\",\"loggingModel\"],[[35,16],[35,15],[35,14]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"config\",\"radio-button\",\"t\",\"field-required\",\"input\",\"action\",\"severities\",\"-track-array\",\"each\",\"not\",\"enableSSLConfig\",\"or\",\"targetType\",\"logging/form-log-ssl\",\"parentModel\",\"model\",\"logPreview\",\"logging/form-log-format\"]}",
    "moduleName": "logging/components/logging/target-syslog/template.hbs"
  });

  _exports.default = _default;
});
define("logging/components/logging/targets-nav/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    currentTarget: Ember.computed('originalModel.targetType', function () {
      const targetType = Ember.get(this, 'originalModel.targetType');
      return targetType === 'fluentForwarder' ? 'fluentd output forward' : targetType;
    }),
    targetTypeName: Ember.computed('targetType', function () {
      const targetType = Ember.get(this, 'targetType');
      return targetType === 'fluentForwarder' ? 'fluentd output forward' : targetType;
    }),
    hasCurrentTarget: Ember.computed('currentTarget', 'originalModel', function () {
      const ol = this.get('originalModel');

      if (!ol) {
        return false;
      }

      const currentTarget = this.get('currentTarget');
      return currentTarget && currentTarget !== 'none';
    }),
    targets: Ember.computed('isClusterLevel', 'currentTarget', function () {
      return [{
        type: 'none',
        label: 'loggingPage.targetTypes.disable',
        css: `none${this.currentCss('none')}`,
        classNames: '',
        available: true,
        disabled: false
      }, {
        type: 'elasticsearch',
        label: 'loggingPage.targetTypes.elasticsearch',
        css: `elasticsearch${this.currentCss('elasticsearch')}`,
        available: true,
        disabled: false
      }, {
        type: 'splunk',
        label: 'loggingPage.targetTypes.splunk',
        css: `splunk${this.currentCss('splunk')}`,
        available: true,
        disabled: false
      }, {
        type: 'kafka',
        label: 'loggingPage.targetTypes.kafka',
        css: `kafka${this.currentCss('kafka')}`,
        available: true,
        disabled: false
      }, {
        type: 'syslog',
        label: 'loggingPage.targetTypes.syslog',
        css: `syslog${this.currentCss('syslog')}`,
        available: true,
        disabled: false
      }, {
        type: 'fluentForwarder',
        label: 'loggingPage.targetTypes.fluentd',
        css: `fluentd${this.currentCss('fluentd output forward')}`,
        available: true,
        disabled: false
      }];
    }),

    currentCss(type) {
      return this.get('hasCurrentTarget') && type === this.get('currentTarget') ? ' current' : '';
    }

  });

  _exports.default = _default;
});
define("logging/components/logging/targets-nav/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R8M4ZBoS",
    "block": "{\"symbols\":[\"target\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"row nav nav-boxes checked-current mv-30 \",[30,[36,6],[[30,[36,3],[[35,2],\"embedded\"],null],\"embedded\"],null],\"  logging-targets\"]]],[12],[2,\"\\n\"],[6,[37,12],[[30,[36,11],[[30,[36,11],[[35,10]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,6],[[32,1,[\"available\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,9],null,[[\"alt\",\"classNames\",\"disabled\",\"href\",\"query\",\"route\"],[[32,1,[\"label\"]],\"col span-2 nav-box-item driver\",[32,1,[\"disabled\"]],false,[30,[36,8],null,[[\"targetType\"],[[32,1,[\"type\"]]]]],\"logging\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[15,0,[31,[[32,1,[\"css\"]]]]],[12],[13],[2,\"\\n\"],[6,[37,6],[[32,1,[\"label\"]]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[12],[1,[30,[36,1],[[32,1,[\"label\"]]],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[1]}]]],[13],[2,\"\\n\\n\"],[10,\"section\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"text-center text-muted\"],[12],[2,\"\\n\"],[6,[37,6],[[30,[36,3],[[35,0],\"none\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,6],[[35,5]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],[\"loggingPage.targetNav.tips.caseB\"],[[\"pageScope\",\"currentTarget\",\"htmlSafe\"],[[35,7],[35,2],true]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,1],[\"loggingPage.targetNav.tips.caseA\"],[[\"pageScope\"],[[35,7]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,5]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],[\"loggingPage.targetNav.tips.caseC\"],[[\"currentTarget\",\"htmlSafe\"],[[35,2],true]]]],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[35,2],[35,0]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],[\"loggingPage.targetNav.tips.caseD\"],[[\"targetType\",\"htmlSafe\"],[[35,0],true]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,1],[\"loggingPage.targetNav.tips.caseE\"],[[\"targetType\",\"htmlSafe\"],[[35,0],true]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"      \"],[1,[30,[36,1],[\"loggingPage.targetNav.tips.caseF\"],[[\"targetType\",\"htmlSafe\"],[[35,0],true]]]],[2,\"\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"targetTypeName\",\"t\",\"currentTarget\",\"eq\",\"unless\",\"hasCurrentTarget\",\"if\",\"pageScope\",\"-hash\",\"link-to\",\"targets\",\"-track-array\",\"each\"]}",
    "moduleName": "logging/components/logging/targets-nav/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/managed-import-cluster-info/component", "logging/components/managed-import-cluster-info/component");
define.alias("shared/components/marked-down/component", "logging/components/marked-down/component");
define.alias("ember-maybe-in-element/components/maybe-in-element", "logging/components/maybe-in-element");
define.alias("shared/components/metrics-action/component", "logging/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "logging/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "logging/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "logging/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "logging/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "logging/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "logging/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "logging/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "logging/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "logging/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "logging/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "logging/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "logging/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "logging/components/modal-move-namespace/component");
define.alias("shared/components/modal-resize-pvc/component", "logging/components/modal-resize-pvc/component");
define.alias("shared/components/modal-root/component", "logging/components/modal-root/component");
define.alias("shared/components/modal-save-rke-template/component", "logging/components/modal-save-rke-template/component");
define.alias("shared/components/modal-shell/component", "logging/components/modal-shell/component");
define.alias("shared/components/modal-show-command/component", "logging/components/modal-show-command/component");
define.alias("shared/components/modal-yaml/component", "logging/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "logging/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "logging/components/namespace-group/component");
define.alias("shared/components/new-select/component", "logging/components/new-select/component");
define.alias("shared/components/node-group-row/component", "logging/components/node-group-row/component");
define.alias("shared/components/node-ip/component", "logging/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "logging/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "logging/components/node-taints/component");
define.alias("shared/components/outside-click/component", "logging/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "logging/components/page-numbers");
define.alias("shared/components/page-numbers/component", "logging/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "logging/components/percent-gauge/component");
define.alias("shared/components/pretty-json/component", "logging/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "logging/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "logging/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "logging/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "logging/components/radio-button/component");
define.alias("shared/components/resource-condition-list/component", "logging/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "logging/components/resource-event-list/component");
define.alias("shared/components/run-scan-modal/component", "logging/components/run-scan-modal/component");
define.alias("shared/components/save-cancel/component", "logging/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "logging/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "logging/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "logging/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "logging/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "logging/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "logging/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "logging/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "logging/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "logging/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "logging/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "logging/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "logging/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "logging/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "logging/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "logging/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "logging/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "logging/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "logging/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "logging/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "logging/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "logging/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "logging/components/search-text/component");
define.alias("shared/components/searchable-select/component", "logging/components/searchable-select/component");
define.alias("shared/components/select-value-check/component", "logging/components/select-value-check/component");
define.alias("shared/components/settings-overridable-banner/component", "logging/components/settings-overridable-banner/component");
define.alias("shared/components/settings/danger-zone/component", "logging/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "logging/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "logging/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "logging/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "logging/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "logging/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "logging/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "logging/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "logging/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "logging/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "logging/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "logging/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "logging/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "logging/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-local-storage/component", "logging/components/storage-class/provisioner-local-storage/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "logging/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "logging/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "logging/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "logging/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "logging/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "logging/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "logging/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "logging/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "logging/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "logging/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "logging/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "logging/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "logging/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-node-group-update/component", "logging/components/tooltip-node-group-update/component");
define.alias("shared/components/tooltip-toggle-override/component", "logging/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "logging/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "logging/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "logging/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "logging/components/used-percent-gauge/component");
define("logging/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'logging/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "logging/cookies/service");
define.alias("shared/digital-ocean/service", "logging/digital-ocean/service");
define.alias("shared/endpoint/service", "logging/endpoint/service");
define("logging/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "logging/resolver", "logging/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'clusterStore', 'globalStore', 'modal', 'router', 'intl', 'resource-actions', 'scope', 'session', 'store', 'tooltip'],
      externalRoutes: []
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "logging/features/service");
define.alias("shared/google/service", "logging/google/service");
define.alias("shared/grafana/service", "logging/grafana/service");
define.alias("shared/growl/service", "logging/growl/service");
define.alias("ember-element-helper/helpers/-element", "logging/helpers/-element");
define.alias("ember-math-helpers/helpers/abs", "logging/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "logging/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "logging/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "logging/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "logging/helpers/and");
define.alias("shared/helpers/array-includes", "logging/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "logging/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "logging/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "logging/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "logging/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "logging/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "logging/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "logging/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "logging/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "logging/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "logging/helpers/cosh");
define.alias("shared/helpers/date-calendar", "logging/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "logging/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "logging/helpers/date-recent");
define.alias("shared/helpers/date-str", "logging/helpers/date-str");
define.alias("shared/helpers/default-str", "logging/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "logging/helpers/div");
define.alias("shared/helpers/driver-name", "logging/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "logging/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "logging/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "logging/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "logging/helpers/floor");
define.alias("ember-intl/helpers/format-date", "logging/helpers/format-date");
define.alias("shared/helpers/format-ip", "logging/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "logging/helpers/format-message");
define.alias("shared/helpers/format-mib", "logging/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "logging/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "logging/helpers/format-relative");
define.alias("shared/helpers/format-si", "logging/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "logging/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "logging/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "logging/helpers/gcd");
define.alias("shared/helpers/get-card-class", "logging/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "logging/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "logging/helpers/gte");
define.alias("shared/helpers/has-override", "logging/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "logging/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "logging/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "logging/helpers/imul");
define.alias("ember-truth-helpers/helpers/is-array", "logging/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "logging/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "logging/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "logging/helpers/is-equal");
define.alias("shared/helpers/join-array", "logging/helpers/join-array");
define.alias("ember-math-helpers/helpers/lcm", "logging/helpers/lcm");
define.alias("liquid-fire/helpers/lf-lock-model", "logging/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "logging/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "logging/helpers/link-ssl-domain");
define("logging/helpers/linkify", ["exports", "linkifyjs/string", "shared/helpers/linkify"], function (_exports, _string, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "logging/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "logging/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "logging/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "logging/helpers/log2");
define.alias("shared/helpers/lower-case", "logging/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "logging/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "logging/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "logging/helpers/max");
define.alias("ember-math-helpers/helpers/min", "logging/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "logging/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "logging/helpers/mult");
define.alias("shared/helpers/nl-to-br", "logging/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "logging/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "logging/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "logging/helpers/or");
define.alias("shared/helpers/parse-camelcase", "logging/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "logging/helpers/pow");
define.alias("shared/helpers/pretty-cron", "logging/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "logging/helpers/random");
define.alias("shared/helpers/rbac-allows", "logging/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "logging/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "logging/helpers/round");
define.alias("shared/helpers/run-time", "logging/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "logging/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "logging/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "logging/helpers/sqrt");
define.alias("shared/helpers/str-replace", "logging/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "logging/helpers/sub");
define.alias("ember-intl/helpers/t", "logging/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "logging/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "logging/helpers/tanh");
define.alias("shared/helpers/to-json", "logging/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "logging/helpers/trunc");
define.alias("shared/helpers/uc-first", "logging/helpers/uc-first");
define.alias("shared/helpers/upper-case", "logging/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "logging/helpers/xor");
define.alias("shared/host/service", "logging/host/service");
define("logging/initializers/app", ["exports"], function (_exports) {
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
define("logging/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("logging/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
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
define("logging/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
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
define.alias("shared/istio/service", "logging/istio/service");
define.alias("shared/k8s/service", "logging/k8s/service");
define.alias("shared/linode/service", "logging/linode/service");
define("logging/logging/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    queryParams: ['targetType'],
    targetType: 'none'
  });

  _exports.default = _default;
});
define("logging/logging/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    session: Ember.inject.service(),
    pageScope: Ember.computed.alias('scope.currentPageScope'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),

    model()
    /* params, transition*/
    {
      const globalStore = this.get('globalStore');
      const pageScope = this.get('pageScope');
      const cluster = window.l('route:application').modelFor('authenticated.cluster');

      if (pageScope === 'cluster') {
        const clusterId = cluster.get('id');
        const opt = {
          filter: {
            clusterId
          }
        };
        return globalStore.find('clusterlogging', null, opt).then(loggings => {
          let logging = loggings.filterBy('clusterId', clusterId).get('firstObject');

          if (!logging) {
            logging = this.createLogging('clusterlogging');
          }

          const clone = logging.clone().patch();
          return {
            logging: clone,
            originalLogging: logging
          };
        });
      } else if (pageScope === 'project') {
        const project = window.l('route:application').modelFor('authenticated.project').get('project');
        const projectId = project.get('id');
        const clusterId = project.get('clusterId');
        const clusterOpt = {
          filter: {
            clusterId
          }
        };
        const projectOpt = {
          filter: {
            projectId
          }
        };
        return Ember.RSVP.hash({
          clusterLoggings: globalStore.find('clusterlogging', null, clusterOpt),
          projectLoggings: globalStore.find('projectlogging', null, projectOpt)
        }).then(hash => {
          let logging = hash.projectLoggings.filterBy('projectId', projectId).get('firstObject');

          if (!logging) {
            logging = this.createLogging('projectlogging');
          }

          const clone = logging.clone().patch();
          const clusterLogging = hash.clusterLoggings.filterBy('clusterId', clusterId).get('firstObject');
          return {
            logging: clone,
            originalLogging: logging,
            clusterLogging
          };
        });
      }
    },

    setupController(controller, model) {
      this._super(...arguments);

      const t = Ember.get(model, 'originalLogging.targetType');
      Ember.run.next(() => {
        controller.set('targetType', t);
      });
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, `session.${Ember.get(this, 'pageScope') === 'cluster' ? _constants.default.SESSION.CLUSTER_ROUTE : _constants.default.SESSION.PROJECT_ROUTE}`, `authenticated.${Ember.get(this, 'pageScope')}.logging`);
    }),

    createLogging(loggingType) {
      const gs = Ember.get(this, 'globalStore');
      const newLogging = gs.createRecord({
        type: loggingType,
        outputTags: {}
      });
      return newLogging;
    }

  });

  _exports.default = _default;
});
define("logging/logging/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Rouods4L",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"model\",\"originalModel\",\"clusterLogging\",\"targetType\"],[[35,1,[\"logging\"]],[35,1,[\"originalLogging\"]],[35,1,[\"clusterLogging\"]],[35,0]]]]]],\"hasEval\":false,\"upvars\":[\"targetType\",\"model\",\"logging/new-edit\"]}",
    "moduleName": "logging/logging/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/mixins/cattle-transitioning-resource", "logging/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "logging/mixins/console");
define.alias("shared/mixins/container-choices", "logging/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "logging/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "logging/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "logging/mixins/filter-state");
define.alias("shared/mixins/grafana", "logging/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "logging/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "logging/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "logging/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "logging/mixins/manage-labels");
define.alias("shared/mixins/metrics", "logging/mixins/metrics");
define.alias("shared/mixins/modal-base", "logging/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "logging/mixins/new-or-edit");
define("logging/mixins/parse-fluentd-file", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    parseValue(value = '') {
      let fileObj = {};
      const removeMacth = value.replace(/.*<match.*>.*(\r\n|\n|\r) {2}/ig, '').replace(/(\r\n|\n|\r).*<\/match.*>/ig, '');
      const {
        attrs,
        elements
      } = this.parse(removeMacth);
      const deepStrs = removeMacth.match(/<(.|\r\n|\n|\r)*<\/.*>/ig, '') || [];
      const removedDeep = removeMacth.replace(/<(.|\r\n|\n|\r)*<\/.*>/ig, '');
      const myString = removedDeep.replace(/(\r\n|\n|\r)/gm, '<br />');
      const keyAndValue = myString.split('<br />').filter(f => f !== '<br />').filter((f = '') => !f.startsWith('#') && !f.startsWith('<'));
      keyAndValue.map((item = '') => {
        const arr = item.split(' ').filter(f => f !== '');

        if (arr[0] && arr[1]) {
          Ember.set(fileObj, arr[0].trim(), arr[1]);
        }
      });
      fileObj = { ...fileObj,
        ...attrs,
        elements
      };
      return {
        fileObj,
        deepStrs
      };
    },

    parse(str = '') {
      const attrs = {};
      const lines = str.split('\n').map(line => line.trim()).filter(line => line);
      let elements = [];
      let deep = false;
      lines.map(line => {
        const matchElement = line.match(/^\<([a-zA-Z0-9_]+)\s*(.+?)?\>$/);
        const matchKeyValue = line.match(/^([a-zA-Z0-9_]+)\s*(.*)$/);

        if (matchElement) {
          const elementName = matchElement[1];
          elements.push({
            elementName,
            attrs: {},
            elements: []
          });
          deep = true;
          return;
        }

        const currnetElement = elements[elements.length - 1] || {};

        if (line === `</${Ember.get(currnetElement, 'elementName')}>`) {
          deep = false;
          return;
        }

        if (matchKeyValue) {
          if (deep) {
            Ember.set(Ember.get(currnetElement, 'attrs'), matchKeyValue[1], matchKeyValue[2]);
          } else {
            Ember.set(attrs, matchKeyValue[1], matchKeyValue[2]);
          }
        }
      });
      return {
        attrs,
        elements
      };
    }

  });

  _exports.default = _default;
});
define.alias("shared/mixins/preload", "logging/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "logging/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "logging/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "logging/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "logging/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "logging/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "logging/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "logging/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "logging/mixins/subscribe");
define("logging/mixins/target-elasticsearch", ["exports", "moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    scope: Ember.inject.service(),
    config: Ember.computed.alias('model.config'),
    project: Ember.computed.alias('scope.currentProject'),
    cluster: Ember.computed.alias('scope.currentCluster'),
    pageScope: Ember.computed.alias('scope.currentPageScope'),

    init(...args) {
      this._super(...args);

      const indexPrefix = Ember.get(this, 'config.indexPrefix');

      if (!indexPrefix) {
        Ember.set(this, 'config.indexPrefix', Ember.get(this, 'defaultIndexPrefix'));
      }
    },

    defaultIndexPrefix: Ember.computed('cluster.{id,name}', 'pageScope', 'project.name', function () {
      const pageScope = Ember.get(this, 'pageScope');
      const prefix = Ember.get(this, 'cluster.name') || Ember.get(this, 'cluster.id');

      if (pageScope === 'cluster') {
        return prefix.toLowerCase();
      } else {
        return `${prefix}_${Ember.get(this, 'project.name')}`.toLowerCase();
      }
    }),
    logPreview: Ember.computed('esIndex', 'outputTags', function () {
      const index = Ember.get(this, 'esIndex');
      const outputTags = Ember.get(this, 'outputTags');
      const template = `{
  "_index": "${index}",
  "_id": "AWD68LuuhwVvf5LMJq1h",
  "_source": {
    "log": "time=\"2018-01-15T17:49:26Z\" level=info msg=\"Creating cluster event [Created container]\"\n",
    "kubernetes": {
      "container_name": "cattle",
      "namespace_name": "default",
      "pod_name": "cattle-6b4ccb5b9d-tzs4q",
      "labels": {
        "app": "cattle",
        "pod-template-hash": "2607761658"
      },
      "host": "47.89.14.205",
      "master_url": "https://10.233.0.1:443/api"
    },
${outputTags}
  },
  ...
}`;
      return template;
    }),
    outputTags: Ember.computed('model.outputTags', function () {
      const keyValueMap = Ember.get(this, 'model.outputTags');

      if (!keyValueMap) {
        return '';
      }

      return Object.keys(keyValueMap).map(key => `    "${key}": "${keyValueMap[key]}"`).join(',\n');
    }),
    dateFormatString: Ember.computed('config.dateFormat', function () {
      const fmt = this.get('config.dateFormat');
      return (0, _moment.default)().format(fmt);
    }),
    esIndex: Ember.computed('config.indexPrefix', 'dateFormatString', function () {
      return `${Ember.get(this, 'config.indexPrefix')}-${Ember.get(this, 'dateFormatString')}`;
    })
  });

  _exports.default = _default;
});
define.alias("shared/mixins/throttled-resize", "logging/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "logging/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "logging/mixins/upgrade-component");
define.alias("shared/mixins/upload", "logging/mixins/upload");
define.alias("shared/modal/service", "logging/modal/service");
define.alias("@ember/render-modifiers/modifiers/did-insert", "logging/modifiers/did-insert");
define.alias("@ember/render-modifiers/modifiers/did-update", "logging/modifiers/did-update");
define.alias("@ember/render-modifiers/modifiers/will-destroy", "logging/modifiers/will-destroy");
define.alias("shared/oauth/service", "logging/oauth/service");
define.alias("shared/oci/service", "logging/oci/service");
define.alias("shared/pipeline-github/service", "logging/pipeline-github/service");
define.alias("shared/pnap/service", "logging/pnap/service");
define.alias("shared/prefs/service", "logging/prefs/service");
define.alias("shared/release-versions/service", "logging/release-versions/service");
define("logging/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "logging/resource-actions/service");
define.alias("shared/role-template/service", "logging/role-template/service");
define("logging/routes", ["exports", "ember-engines/routes"], function (_exports, _routes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _routes.default)(function () {
    this.route('logging', {
      path: '/'
    });
  });

  _exports.default = _default;
});
define.alias("shared/saml/service", "logging/saml/service");
define.alias("shared/scope/service", "logging/scope/service");
define.alias("shared/security-scan-config/service", "logging/security-scan-config/service");
define.alias("ivy-codemirror/services/code-mirror", "logging/services/code-mirror");
define("logging/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "logging/services/intl");
define("logging/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "logging/session/service");
define.alias("shared/settings/service", "logging/settings/service");
define.alias("shared/shibboleth-auth/service", "logging/shibboleth-auth/service");
define.alias("shared/store-reset/service", "logging/store-reset/service");
define.alias("shared/tab-session/service", "logging/tab-session/service");
define("logging/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2DMyEaaQ",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "logging/templates/application.hbs"
  });

  _exports.default = _default;
});
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-content", "logging/templates/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-trigger", "logging/templates/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown", "logging/templates/components/basic-dropdown");
define.alias("shared/tooltip/service", "logging/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "logging/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "logging/transitions/default");
define.alias("liquid-fire/transitions/explode", "logging/transitions/explode");
define.alias("liquid-fire/transitions/fade", "logging/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "logging/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "logging/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "logging/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "logging/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "logging/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "logging/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "logging/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "logging/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "logging/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "logging/transitions/wait");
define.alias("shared/user-language/service", "logging/user-language/service");
define.alias("shared/user-theme/service", "logging/user-theme/service");
define.alias("shared/utils/add-view-action", "logging/utils/add-view-action");
define.alias("shared/utils/additional-routes", "logging/utils/additional-routes");
define.alias("shared/utils/azure-choices", "logging/utils/azure-choices");
define.alias("shared/utils/browser-storage", "logging/utils/browser-storage");
define.alias("ember-basic-dropdown/utils/calculate-position", "logging/utils/calculate-position");
define.alias("shared/utils/constants", "logging/utils/constants");
define.alias("shared/utils/convert-yaml", "logging/utils/convert-yaml");
define.alias("shared/utils/debounce", "logging/utils/debounce");
define.alias("shared/utils/download-files", "logging/utils/download-files");
define.alias("shared/utils/errors", "logging/utils/errors");
define.alias("shared/utils/fetch-yaml", "logging/utils/fetch-yaml");
define("logging/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "logging/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "logging/utils/group-compound-layout");
define.alias("shared/utils/intl/missing-message", "logging/utils/intl/missing-message");
define.alias("shared/utils/load-script", "logging/utils/load-script");
define.alias("shared/utils/multi-stats", "logging/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "logging/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "logging/utils/parse-externalid");
define.alias("shared/utils/parse-port", "logging/utils/parse-port");
define.alias("shared/utils/parse-target", "logging/utils/parse-target");
define.alias("shared/utils/parse-unit", "logging/utils/parse-unit");
define.alias("shared/utils/parse-uri", "logging/utils/parse-uri");
define.alias("shared/utils/parse-version", "logging/utils/parse-version");
define.alias("shared/utils/percent-gauge", "logging/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "logging/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "logging/utils/pipelineStep");
define.alias("shared/utils/platform", "logging/utils/platform");
define.alias("shared/utils/queue", "logging/utils/queue");
define.alias("shared/utils/rackspace-choices", "logging/utils/rackspace-choices");
define.alias("shared/utils/search-text", "logging/utils/search-text");
define.alias("shared/utils/socket", "logging/utils/socket");
define.alias("shared/utils/sort", "logging/utils/sort");
define.alias("shared/utils/traffic-renderer", "logging/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "logging/utils/used-percent-gauge");
define.alias("shared/utils/util", "logging/utils/util");
define.alias("shared/version-choices/service", "logging/version-choices/service");//# sourceMappingURL=engine.map
