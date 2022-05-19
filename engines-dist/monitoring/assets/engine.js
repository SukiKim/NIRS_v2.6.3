define.alias("shared/access/service", "monitoring/access/service");
define.alias("shared/all-dns-records/service", "monitoring/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "monitoring/all-storage-classes/service");
define.alias("shared/all-workloads/service", "monitoring/all-workloads/service");
define.alias("shared/amazon/util", "monitoring/amazon/util");
define.alias("shared/azure-ad/service", "monitoring/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "monitoring/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "monitoring/calculate-position/util");
define.alias("shared/capabilities/service", "monitoring/capabilities/service");
define.alias("shared/catalog/service", "monitoring/catalog/service");
define.alias("shared/cis-helpers/service", "monitoring/cis-helpers/service");
define("monitoring/cldrs/ar", ["exports"], function (_exports) {
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
define("monitoring/cldrs/de", ["exports"], function (_exports) {
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
define("monitoring/cldrs/en", ["exports"], function (_exports) {
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
define("monitoring/cldrs/es", ["exports"], function (_exports) {
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
define("monitoring/cldrs/fa", ["exports"], function (_exports) {
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
define("monitoring/cldrs/fr", ["exports"], function (_exports) {
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
define("monitoring/cldrs/hu", ["exports"], function (_exports) {
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
define("monitoring/cldrs/it", ["exports"], function (_exports) {
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
define("monitoring/cldrs/ja", ["exports"], function (_exports) {
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
define("monitoring/cldrs/km", ["exports"], function (_exports) {
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
define("monitoring/cldrs/ko", ["exports"], function (_exports) {
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
define("monitoring/cldrs/nb", ["exports"], function (_exports) {
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
define("monitoring/cldrs/nl", ["exports"], function (_exports) {
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
define("monitoring/cldrs/none", ["exports"], function (_exports) {
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
define("monitoring/cldrs/pt", ["exports"], function (_exports) {
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
define("monitoring/cldrs/ru", ["exports"], function (_exports) {
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
define("monitoring/cldrs/sh", ["exports"], function (_exports) {
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
define("monitoring/cldrs/sv", ["exports"], function (_exports) {
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
define("monitoring/cldrs/tr", ["exports"], function (_exports) {
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
define("monitoring/cldrs/uk", ["exports"], function (_exports) {
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
define("monitoring/cldrs/vi", ["exports"], function (_exports) {
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
define("monitoring/cldrs/zh", ["exports"], function (_exports) {
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
define("monitoring/cluster-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    scope: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    clusterStore: Ember.inject.service(),

    async model() {
      const globalStore = Ember.get(this, 'globalStore');
      const cluster = Ember.get(this, 'scope.currentCluster');
      const project = Ember.get(cluster, 'systemProject');
      const namespaces = await this.clusterStore.findAll('namespace');
      const cattleMonitoringNamespaceExists = namespaces.any(ns => ns.id === 'cattle-monitoring-system');

      if (!project || !Ember.get(cluster, 'enableClusterMonitoring')) {
        return {
          apps: [],
          cattleMonitoringNamespaceExists
        };
      }

      let res = await globalStore.rawRequest({
        url: `/v3/project/${Ember.get(project, 'id')}/apps`,
        method: 'GET'
      });
      const out = [];
      const apps = Ember.get(res, 'body.data') || [];
      const clusterApp = apps.findBy('name', 'cluster-monitoring');
      const operatorApp = apps.findBy('name', 'monitoring-operator');

      if (clusterApp) {
        out.push(globalStore.createRecord(clusterApp));
      }

      if (operatorApp) {
        out.push(globalStore.createRecord(operatorApp));
      }

      return {
        apps: out,
        cattleMonitoringNamespaceExists
      };
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, `session.${_constants.default.SESSION.CLUSTER_ROUTE}`, 'authenticated.cluster.monitoring.cluster-setting');
    })
  });

  _exports.default = _default;
});
define("monitoring/cluster-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YVdLt7yz",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"apps\",\"showMonitoringV2Warning\"],[[35,0,[\"apps\"]],[35,0,[\"cattleMonitoringNamespaceExists\"]]]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"enable-monitoring\"]}",
    "moduleName": "monitoring/cluster-setting/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/cluster-templates/service", "monitoring/cluster-templates/service");
define.alias("shared/code-mirror/service", "monitoring/code-mirror/service");
define.alias("@glimmer/component/-private/ember-component-manager", "monitoring/component-managers/glimmer");
define("monitoring/components/-dynamic-element-alt", ["exports"], function (_exports) {
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
define("monitoring/components/-dynamic-element", ["exports"], function (_exports) {
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
define.alias("liquid-fire/components/-lf-get-outlet-state", "monitoring/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "monitoring/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "monitoring/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "monitoring/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "monitoring/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "monitoring/components/advanced-section/component");
define.alias("shared/components/aks-node-pool-row/component", "monitoring/components/aks-node-pool-row/component");
define.alias("shared/components/annotations-section/component", "monitoring/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "monitoring/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "monitoring/components/api-field/component");
define.alias("shared/components/apikey-row/component", "monitoring/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "monitoring/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "monitoring/components/badge-state/component");
define.alias("shared/components/banner-message/component", "monitoring/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown-content", "monitoring/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/components/basic-dropdown-trigger", "monitoring/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/components/basic-dropdown", "monitoring/components/basic-dropdown");
define.alias("shared/components/btn-toggle/component", "monitoring/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "monitoring/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "monitoring/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "monitoring/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "monitoring/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "monitoring/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "monitoring/components/check-override-allowed/component");
define("monitoring/components/cluster-basic-info/component", ["exports", "monitoring/components/cluster-basic-info/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    cluster: null
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-basic-info/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "E5oY+i0c",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"row banner bg-info basics hide-when-embedded\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[1,[30,[36,0],[\"clustersPage.provider.label\"],null]],[2,\":\"],[13],[2,\"\\n    \"],[10,\"span\"],[12],[1,[35,1,[\"displayProvider\"]]],[13],[2,\"\\n\"],[6,[37,3],[[35,1,[\"displayLocation\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"span\"],[14,0,\"text-muted\"],[12],[2,\"(\"],[1,[35,1,[\"displayLocation\"]]],[2,\")\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[1,[30,[36,0],[\"clustersPage.kubernetesVersion.label\"],null]],[2,\":\"],[13],[2,\"\\n    \"],[10,\"span\"],[12],[1,[35,1,[\"version\",\"gitVersion\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,3],[[35,1,[\"clusterTemplateId\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[1,[30,[36,0],[\"clustersPage.rkeTemplate.label\"],null]],[2,\":\"],[13],[2,\"\\n      \"],[10,\"span\"],[12],[1,[35,1,[\"clusterTemplateDisplayName\"]]],[2,\"/\"],[1,[35,1,[\"clusterTemplateRevisionDisplayName\"]]],[13],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"cluster\"],[[35,1]]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[1,[30,[36,0],[\"generic.created\"],null]],[2,\":\"],[13],[2,\"\\n    \"],[10,\"span\"],[12],[1,[30,[36,4],[[35,1,[\"created\"]]],null]],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"t\",\"cluster\",\"cluster-template-revision-upgrade-notification\",\"if\",\"date-calendar\"]}",
    "moduleName": "monitoring/components/cluster-basic-info/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard-tabs/component", ["exports", "monitoring/components/cluster-dashboard-tabs/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    settings: Ember.inject.service(),
    grafana: Ember.inject.service(),
    layout: _template.default,
    classNames: 'row',
    isEmbedded: false,

    init() {
      this._super(...arguments);

      const embedded = window.top !== window;
      Ember.set(this, 'isEmbedded', embedded);
    },

    largeScale: Ember.computed('scope.currentCluster.nodes.length', function () {
      return Ember.get(this, 'scope.currentCluster.nodes.length') > 10;
    })
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard-tabs/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "WqSLxnzr",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[6,[37,14],null,null,[[\"default\"],[{\"statements\":[[6,[37,7],null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"title\"],[[32,1,[\"expandAll\"]],[32,2],[35,9,[\"currentCluster\",\"grafanaUrl\"]],[30,[36,0],[\"clusterDashboard.sections.cluster\"],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,8],null,[[\"largeScale\"],[[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,10],[[35,9,[\"currentCluster\",\"isRKE\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,7],null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"classNames\",\"title\"],[[32,1,[\"expandAll\"]],[32,2],[35,6,[\"etcdUrl\"]],\"mt-20\",[30,[36,0],[\"clusterDashboard.sections.etcd\"],null]]],[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,5],null,[[\"largeScale\"],[[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"classNames\",\"title\"],[[32,1,[\"expandAll\"]],[32,2],[35,6,[\"k8sUrl\"]],\"mt-20\",[30,[36,0],[\"clusterDashboard.sections.k8s\"],null]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,4],null,[[\"largeScale\"],[[35,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],null,[[\"expandAll\",\"expandFn\",\"grafanaUrl\",\"classNames\",\"title\"],[[32,1,[\"expandAll\"]],[32,2],[35,6,[\"rancherUrl\"]],\"mt-20 mb-20\",[30,[36,0],[\"clusterDashboard.sections.rancher\"],[[\"appName\"],[[35,11,[\"appName\"]]]]]]],[[\"default\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,3],null,[[\"largeScale\",\"noDataLabel\"],[[35,2],\"clusterDashboard.noRancherComponents\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,13],[[35,12]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,1],null,[[\"resourceType\",\"clusterEvents\",\"expandAll\",\"expandFn\"],[[30,[36,0],[\"generic.cluster\"],null],true,[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1,2]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"resource-event-list\",\"largeScale\",\"rancher-metrics\",\"k8s-metrics\",\"etcd-metrics\",\"grafana\",\"metrics-summary\",\"cluster-metrics\",\"scope\",\"if\",\"settings\",\"isEmbedded\",\"unless\",\"accordion-list\"]}",
    "moduleName": "monitoring/components/cluster-dashboard-tabs/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard/component", ["exports", "ui/utils/constants", "monitoring/components/cluster-dashboard/template", "shared/mixins/catalog-upgrade"], function (_exports, _constants, _template, _catalogUpgrade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const MONITORING_TEMPLATE = 'system-library-rancher-monitoring';

  var _default = Ember.Component.extend(_catalogUpgrade.default, {
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    grafana: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    router: Ember.inject.service(),
    layout: _template.default,
    nodes: null,
    components: null,
    showClusterTabs: true,
    templateId: MONITORING_TEMPLATE,
    isEmbedded: false,
    monitoringEnabled: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),
    isMonitoringReady: Ember.computed.alias('scope.currentCluster.isMonitoringReady'),
    componentStatuses: Ember.computed.alias('scope.currentCluster.componentStatuses'),

    init() {
      this._super(...arguments);

      const embedded = window.top !== window;
      Ember.set(this, 'isEmbedded', embedded);
    },

    actions: {
      edit() {
        this.cluster.send('edit');
      },

      rotate() {
        this.cluster.send('rotateCertificates');
      },

      enableMonitoring() {
        Ember.get(this, 'router').transitionTo('authenticated.cluster.monitoring.cluster-setting');
      },

      addHost() {
        this.cluster.send('showCommandModal');
      }

    },
    clusterDidChange: Ember.observer('scope.currentCluster.id', function () {
      Ember.set(this, 'showClusterTabs', false);
      Ember.run.next(() => {
        if (this.isDestroyed || this.isDestroying) {
          return;
        }

        Ember.set(this, 'showClusterTabs', true);
      });
    }),
    setComponents: Ember.on('init', Ember.observer('componentStatuses.@each.conditions', 'nodes.@each.{state}', function () {
      Ember.setProperties(this, {
        etcdHealthy: this.isHealthy('etcd'),
        controllerHealthy: this.isHealthy('controller-manager'),
        schedulerHealthy: this.isHealthy('scheduler'),
        nodesHealthy: Ember.get(this, 'inactiveNodes.length') === 0
      });
    })),
    showDashboard: Ember.computed('scope.currentCluster.isReady', 'nodes.[]', function () {
      return Ember.get(this, 'nodes').length && Ember.get(this, 'scope.currentCluster.isReady');
    }),
    inactiveNodes: Ember.computed('nodes.@each.state', function () {
      return Ember.get(this, 'nodes').filter(n => _constants.default.ACTIVEISH_STATES.indexOf(Ember.get(n, 'state')) === -1);
    }),
    unhealthyComponents: Ember.computed('componentStatuses.@each.conditions', function () {
      return (Ember.get(this, 'componentStatuses') || []).filter(s => !s.conditions.any(c => c.status === 'True'));
    }),
    whichComponentStatusExists: Ember.computed('cluster.componentStatuses.@each.{name,conditions}', function () {
      const out = {
        etcd: false,
        scheduler: false,
        controllerManager: false
      };
      const componentStatuses = Ember.get(this, 'cluster.componentStatuses') || [];
      componentStatuses.forEach(status => {
        var _status$conditions, _status$conditions$fi, _status$conditions2, _status$conditions2$f;

        if ((status === null || status === void 0 ? void 0 : (_status$conditions = status.conditions) === null || _status$conditions === void 0 ? void 0 : (_status$conditions$fi = _status$conditions.firstObject) === null || _status$conditions$fi === void 0 ? void 0 : _status$conditions$fi.type) === 'Healthy' && status !== null && status !== void 0 && (_status$conditions2 = status.conditions) !== null && _status$conditions2 !== void 0 && (_status$conditions2$f = _status$conditions2.firstObject) !== null && _status$conditions2$f !== void 0 && _status$conditions2$f.status) {
          if (status !== null && status !== void 0 && status.name.includes('etcd')) {
            Ember.set(out, 'etcd', true);
          } else if (status !== null && status !== void 0 && status.name.includes('controller-manager')) {
            Ember.set(out, 'controllerManager', true);
          } else if (status !== null && status !== void 0 && status.name.includes('scheduler')) {
            Ember.set(out, 'scheduler', true);
          }
        }
      });
      return out;
    }),
    // Newer k8s does not have componentStatuses, so hide them all
    haveComponentStatus: Ember.computed('cluster.componentStatuses.@each.{name,conditions}', function () {
      return !!Ember.get(this, 'cluster.componentStatuses');
    }),
    hideEtcdStatus: Ember.computed('cluster.clusterProvider', function () {
      const {
        clusterProvider
      } = this.cluster;
      return _constants.default.GRAY_OUT_ETCD_STATUS_PROVIDERS.indexOf(clusterProvider) > -1;
    }),

    isHealthy(field) {
      const matching = (Ember.get(this, 'componentStatuses') || []).filter(s => s.name.startsWith(field)); // If there's no matching component status, it's "healthy"

      if (!matching.length) {
        return true;
      }

      return matching.any(s => s.conditions.any(c => c.status === 'True'));
    }

  });

  _exports.default = _default;
});
define("monitoring/components/cluster-dashboard/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lJ06lMf6",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"warning\"],\"statements\":[[6,[37,3],[[35,2,[\"certsExpiring\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,10],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[1,[30,[36,0],[\"tooltipExpire.label\"],null]],[2,\" \"],[6,[37,3],[[35,2,[\"canRotateCerts\"]]],null,[[\"default\"],[{\"statements\":[[11,\"a\"],[24,6,\"#\"],[4,[38,1],[[32,0],\"rotate\"],null],[12],[1,[30,[36,0],[\"tooltipExpire.link\"],null]],[13]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[6,[37,3],[[35,2,[\"nodeGroupVersionUpdate\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,10],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[1,[30,[36,0],[\"tooltipNodeGroupUpdate.label\"],null]],[2,\" \"],[11,\"a\"],[24,6,\"#\"],[4,[38,1],[[32,0],\"edit\"],null],[12],[1,[30,[36,0],[\"tooltipNodeGroupUpdate.link\"],null]],[13],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[6,[37,3],[[35,34]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,27],null,[[\"cluster\"],[[35,2]]]]],[2,\"\\n\\n\"],[6,[37,7],[[35,18,[\"currentCluster\",\"isMonitoringReady\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,3],[[35,26]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"row mt-0 mb-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"pull-right text-small text-error\"],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"clusterDashboard.monitoringNotReady\"],null]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"row mt-0 mb-0\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"pull-right text-small\"],[12],[2,\"\\n          \"],[11,\"button\"],[24,0,\"btn bg-transparent p-0\"],[24,4,\"button\"],[4,[38,1],[[32,0],\"enableMonitoring\"],null],[12],[2,\"\\n            \"],[1,[30,[36,0],[\"clusterDashboard.enableMonitoring\"],null]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,3],[[30,[36,22],[[35,26],[30,[36,25],[[35,24,[\"firstObject\",\"name\"]],\"cluster-monitoring\"],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row mt-0 mb-0\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"pull-right text-small\"],[12],[2,\"\\n        \"],[11,\"button\"],[24,0,\"btn bg-warning pt-0 pb-0 pl-5 pr-5\"],[24,4,\"button\"],[4,[38,1],[[32,0],\"enableMonitoring\"],null],[12],[2,\"\\n          \"],[1,[30,[36,0],[\"clusterDashboard.upgradeAvailable\"],[[\"version\"],[[35,23]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,29],null,[[\"nodes\"],[[35,28]]]]],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"row mt-0\"],[12],[2,\"\\n\"],[6,[37,3],[[35,30]],null,[[\"default\"],[{\"statements\":[[6,[37,3],[[30,[36,22],[[35,21,[\"etcd\"]],[30,[36,20],[[35,19]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,15],null,[[\"label\",\"showUrl\",\"healthy\",\"url\"],[\"clusterDashboard.etcd\",[35,18,[\"currentCluster\",\"isRKE\"]],[35,17],[35,13,[\"etcdUrl\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"col mt-0 span-3\"],[12],[2,\"\\n\"],[6,[37,10],null,[[\"icon\",\"color\"],[\"icon-alert\",\"bg-disabled mt-0\"]],[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"p\"],[14,0,\"text-left\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"clusterDashboard.etcdUnavailable\"],null]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[35,21,[\"controllerManager\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,15],null,[[\"label\",\"healthy\",\"url\"],[\"clusterDashboard.controllerManager\",[35,16],[35,13,[\"controllerUrl\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"col mt-0 span-3\"],[12],[2,\"\\n\"],[6,[37,10],null,[[\"icon\",\"color\"],[\"icon-alert\",\"bg-disabled mt-0\"]],[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"p\"],[14,0,\"text-left\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"clusterDashboard.controllerManagerUnavailable\"],null]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[35,21,[\"scheduler\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,15],null,[[\"label\",\"healthy\",\"url\"],[\"clusterDashboard.scheduler\",[35,14],[35,13,[\"schedulerUrl\"]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"col mt-0 span-3\"],[12],[2,\"\\n\"],[6,[37,10],null,[[\"icon\",\"color\"],[\"icon-alert\",\"bg-disabled mt-0\"]],[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"p\"],[14,0,\"text-left\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"clusterDashboard.schedulerUnavailable\"],null]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n    \"],[1,[30,[36,15],null,[[\"label\",\"healthy\",\"url\"],[\"clusterDashboard.node\",[35,31],[35,13,[\"nodesUrl\"]]]]]],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,7],[[30,[36,32],[[35,21,[\"controllerManager\"]],[35,21,[\"scheduler\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\"],[6,[37,12],[[30,[36,11],[[30,[36,11],[[35,2,[\"displayWarnings\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,10],null,[[\"icon\",\"color\"],[\"icon-alert\",\"text-left bg-error mt-30\"]],[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[12],[1,[32,3]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[3]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[30,[36,22],[[35,33],[35,18,[\"currentCluster\",\"isMonitoringReady\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,9],null,[[\"dashboards\"],[[35,8]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,7],[[35,6]],null,[[\"default\"],[{\"statements\":[[6,[37,5],null,[[\"showExpandAll\"],[false]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,4],null,[[\"resourceType\",\"clusterEvents\",\"expandAll\",\"expandFn\"],[[30,[36,0],[\"generic.cluster\"],null],true,[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n\"]],\"parameters\":[1,2]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"text-center text-muted\"],[12],[2,\"\\n    \"],[1,[30,[36,0],[\"clusterDashboard.clusterNotReady\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,3],[[35,2,[\"canShowAddHost\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"text-center mt-20\"],[12],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn bg-primary\"],[24,4,\"button\"],[4,[38,1],[[32,0],\"addHost\"],null],[12],[2,\"\\n\"],[6,[37,3],[[35,2,[\"eksDisplayEksImport\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,0],[\"clusterDashboard.importHost\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,0],[\"clusterDashboard.clusterHasNoNodes\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"action\",\"cluster\",\"if\",\"resource-event-list\",\"accordion-list\",\"isEmbedded\",\"unless\",\"dashboards\",\"cluster-dashboard-tabs\",\"banner-message\",\"-track-array\",\"each\",\"grafana\",\"schedulerHealthy\",\"k8s-component-status\",\"controllerHealthy\",\"etcdHealthy\",\"scope\",\"hideEtcdStatus\",\"not\",\"whichComponentStatusExists\",\"and\",\"latestVersion\",\"toUpgrade\",\"eq\",\"monitoringEnabled\",\"cluster-basic-info\",\"nodes\",\"nodes-live\",\"haveComponentStatus\",\"nodesHealthy\",\"or\",\"showClusterTabs\",\"showDashboard\"]}",
    "moduleName": "monitoring/components/cluster-dashboard/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/cluster-driver/driver-aks/component", "monitoring/components/cluster-driver/driver-aks/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "monitoring/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "monitoring/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-eks/component", "monitoring/components/cluster-driver/driver-eks/component");
define.alias("shared/components/cluster-driver/driver-gke/component", "monitoring/components/cluster-driver/driver-gke/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "monitoring/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "monitoring/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import-aks/component", "monitoring/components/cluster-driver/driver-import-aks/component");
define.alias("shared/components/cluster-driver/driver-import-eks/component", "monitoring/components/cluster-driver/driver-import-eks/component");
define.alias("shared/components/cluster-driver/driver-import-gke/component", "monitoring/components/cluster-driver/driver-import-gke/component");
define.alias("shared/components/cluster-driver/driver-import/component", "monitoring/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-linodelke/component", "monitoring/components/cluster-driver/driver-linodelke/component");
define.alias("shared/components/cluster-driver/driver-oracleoke/component", "monitoring/components/cluster-driver/driver-oracleoke/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "monitoring/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "monitoring/components/cluster-driver/driver-tencenttke/component");
define("monitoring/components/cluster-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/cluster-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      resourceType: 'cluster'
    }
  });

  _exports.default = _default;
});
define("monitoring/components/cluster-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "b98fuotp",
    "block": "{\"symbols\":[],\"statements\":[[10,\"section\"],[14,0,\"mt-15\"],[12],[2,\"\\n  \"],[1,[30,[36,2],null,[[\"queryAction\",\"state\"],[[30,[36,1],[[32,0],\"query\"],null],[35,0]]]]],[2,\"\\n  \"],[1,[30,[36,4],null,[[\"graphs\",\"loading\",\"noGraphs\"],[[35,3],[35,0,[\"loading\"]],[35,0,[\"noGraphs\"]]]]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"state\",\"action\",\"metrics-action\",\"graphs\",\"metrics-graph\"]}",
    "moduleName": "monitoring/components/cluster-metrics/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/cluster-options-rke/component", "monitoring/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "monitoring/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "monitoring/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "monitoring/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "monitoring/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "monitoring/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "monitoring/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "monitoring/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "monitoring/components/confirm-delete/component");
define.alias("shared/components/container-shell/component", "monitoring/components/container-shell/component");
define.alias("shared/components/containers-header/component", "monitoring/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "monitoring/components/copy-button");
define.alias("shared/components/copy-inline/component", "monitoring/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "monitoring/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "monitoring/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "monitoring/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "monitoring/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "monitoring/components/cru-cluster/component");
define.alias("shared/components/cru-master-auth-network/component", "monitoring/components/cru-master-auth-network/component");
define.alias("shared/components/cru-node-pools/component", "monitoring/components/cru-node-pools/component");
define.alias("shared/components/cru-private-cluster/component", "monitoring/components/cru-private-cluster/component");
define.alias("shared/components/cru-private-registry/component", "monitoring/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "monitoring/components/custom-catalog/component");
define.alias("shared/components/custom-command/component", "monitoring/components/custom-command/component");
define.alias("shared/components/drain-node/component", "monitoring/components/drain-node/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "monitoring/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "monitoring/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "monitoring/components/empty-table/component");
define("monitoring/components/enable-monitoring/component", ["exports", "shared/utils/util", "shared/utils/parse-unit", "shared/mixins/reservation-check", "shared/mixins/catalog-upgrade", "monitoring/components/enable-monitoring/template"], function (_exports, _util, _parseUnit, _reservationCheck, _catalogUpgrade, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const EXPOSED_OPTIONS = ['exporter-node.enabled', 'exporter-node.ports.metrics.port', 'exporter-kubelets.https', 'prometheus.retention', 'grafana.persistence.enabled', 'prometheus.persistence.enabled', 'prometheus.persistence.storageClass', 'grafana.persistence.storageClass', 'grafana.persistence.size', 'prometheus.persistence.size', 'prometheus.resources.core.requests.cpu', 'exporter-node.resources.limits.cpu', 'exporter-node.resources.limits.memory', 'prometheus.resources.core.limits.cpu', 'prometheus.resources.core.requests.memory', 'prometheus.resources.core.limits.memory', 'operator.resources.limits.memory'];
  const NODE_EXPORTER_CPU = 100;
  const NODE_EXPORTER_MEMORY = 30;
  const CLUSTER_CPU = 900;
  const CLUSTER_MEMORY = 970;
  const MONITORING_TEMPLATE = 'system-library-rancher-monitoring';
  const CLUSTER_HIDDEN_KEYS = {
    'operator-init.enabled': 'true'
  };
  const PROMETHEUS_TOLERATION = 'prometheus.tolerations';
  const SCHEDULABLE_COMPONENTS = ['prometheus', 'grafana', 'operator', 'exporter-kube-state'];

  var _default = Ember.Component.extend(_reservationCheck.default, _catalogUpgrade.default, {
    scope: Ember.inject.service(),
    settings: Ember.inject.service(),
    layout: _template.default,
    templateId: MONITORING_TEMPLATE,
    answers: null,
    customAnswers: null,
    level: 'cluster',
    confirmDisable: false,
    justDeployed: false,
    enablePrometheusPersistence: false,
    enableGrafanaPersistence: false,
    showMonitoringV2Warning: false,
    enableNodeExporter: true,
    prometheusPersistenceSize: '50Gi',
    grafanaPersistenceSize: '10Gi',
    requestsCpu: '750',
    limitsCpu: '1000',
    nodeExporterLimitsCpu: '200',
    nodeExporterLimitsMemory: '200',
    operatorLimitsMemory: '500',
    requestsMemory: '750',
    limitsMemory: '2000',
    prometheusStorageClass: null,
    grafanaStorageClass: null,
    nodeSelectors: null,
    retention: 12,
    port: 9796,
    projectLevelMinCpu: 500,
    projectLevelMinMemory: 500,
    cluster: Ember.computed.alias('scope.currentCluster'),
    project: Ember.computed.alias('scope.currentProject'),
    istioEnabled: Ember.computed.alias('cluster.istioEnabled'),
    actions: {
      promptDisable() {
        if (Ember.get(this, 'istioEnabled') && Ember.get(this, 'level') === 'cluster') {
          return;
        }

        Ember.set(this, 'confirmDisable', true);
        Ember.run.later(this, function () {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          Ember.set(this, 'confirmDisable', false);
        }, 10000);
      },

      enable(cb) {
        const resource = Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster') : Ember.get(this, 'project');
        let answers = Ember.get(this, 'level') === 'cluster' ? { ...CLUSTER_HIDDEN_KEYS
        } : {};

        if (Ember.get(this, 'level') === 'cluster') {
          answers['exporter-node.enabled'] = `${Ember.get(this, 'enableNodeExporter')}`;
          answers['exporter-node.ports.metrics.port'] = `${Ember.get(this, 'port')}`;
          answers['exporter-kubelets.https'] = `${!(Ember.get(this, 'scope.currentCluster.isGKE') || Ember.get(this, 'scope.currentCluster.isAKS'))}`;
          answers['exporter-node.resources.limits.cpu'] = `${Ember.get(this, 'nodeExporterLimitsCpu')}m`;
          answers['exporter-node.resources.limits.memory'] = `${Ember.get(this, 'nodeExporterLimitsMemory')}Mi`;
          answers['operator.resources.limits.memory'] = `${Ember.get(this, 'operatorLimitsMemory')}Mi`;
        }

        answers['prometheus.retention'] = `${Ember.get(this, 'retention')}h`;
        answers['grafana.persistence.enabled'] = `${Ember.get(this, 'enableGrafanaPersistence')}`;
        answers['prometheus.persistence.enabled'] = `${Ember.get(this, 'enablePrometheusPersistence')}`;
        answers['prometheus.persistence.storageClass'] = `${Ember.get(this, 'prometheusStorageClass') === null ? 'default' : Ember.get(this, 'prometheusStorageClass')}`;
        answers['grafana.persistence.storageClass'] = `${Ember.get(this, 'grafanaStorageClass') === null ? 'default' : Ember.get(this, 'grafanaStorageClass')}`;
        answers['grafana.persistence.size'] = `${Ember.get(this, 'grafanaPersistenceSize')}`;
        answers['prometheus.persistence.size'] = `${Ember.get(this, 'prometheusPersistenceSize')}`;
        answers['prometheus.resources.core.requests.cpu'] = `${Ember.get(this, 'requestsCpu')}m`;
        answers['prometheus.resources.core.limits.cpu'] = `${Ember.get(this, 'limitsCpu')}m`;
        answers['prometheus.resources.core.requests.memory'] = `${Ember.get(this, 'requestsMemory')}Mi`;
        answers['prometheus.resources.core.limits.memory'] = `${Ember.get(this, 'limitsMemory')}Mi`;

        if (!Ember.get(this, 'enabled') || Ember.get(this, 'useReleaseName')) {
          answers['prometheus.persistent.useReleaseName'] = 'true';
        }

        Object.keys(answers).filter(key => SCHEDULABLE_COMPONENTS.find(c => key.startsWith(`${c}.nodeSelectors[`))).forEach(key => {
          delete answers[key];
        });
        (Ember.get(this, 'nodeSelectors') || []).forEach((selector, index) => {
          let s = Ember.get(selector, 'key');
          let v = Ember.get(selector, 'value');

          if (v && v.startsWith('"') && v.endsWith('"')) {
            s += `="${Ember.get(selector, 'value')}"`;
          } else if (v) {
            s += `="${Ember.get(selector, 'value')}"`;
          }

          SCHEDULABLE_COMPONENTS.forEach(c => {
            answers[`${c}.nodeSelectors[${index}]`] = s;
          });
        });
        Object.keys(answers).filter(key => SCHEDULABLE_COMPONENTS.find(c => key.startsWith(`${c}.tolerations[`))).forEach(key => {
          delete answers[key];
        });
        SCHEDULABLE_COMPONENTS.map(component => {
          (Ember.get(this, `prometheusTolerations`) || []).map((t, index) => {
            Object.keys(t).map(key => {
              if (t[key]) {
                answers[`${component}.tolerations[${index}].${key}`] = t[key].toString();
              }
            });
          });
        });
        let action = Ember.get(this, 'enabled') ? 'editMonitoring' : 'enableMonitoring';
        const customAnswers = Ember.get(this, 'customAnswers') || {};
        Object.keys(customAnswers).forEach(key => {
          answers[key] = customAnswers[key];
        });
        const params = {
          answers
        };

        if (!Ember.get(this, 'enabled') && Ember.get(this, 'templateVersion')) {
          params['version'] = Ember.get(this, 'templateVersion');
        }

        resource.doAction(action, params).then(() => {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          Ember.set(this, 'justDeployed', true);

          if (action === 'editMonitoring') {
            this.send('upgrade');
          }

          cb(true);
          this.fetchSettings();
        }).catch(() => {
          cb(false);
        });
      },

      disable() {
        const resource = Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster') : Ember.get(this, 'project');
        resource.doAction('disableMonitoring').then(() => {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          Ember.setProperties(this, {
            app: null,
            answers: null,
            customAnswers: null
          });
        });
      }

    },
    enabled: Ember.computed('cluster.enableClusterMonitoring', 'project.enableProjectMonitoring', 'level', function () {
      return Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster.enableClusterMonitoring') : Ember.get(this, 'project.enableProjectMonitoring');
    }),
    canDisableMonitor: Ember.computed('cluster.canDisableMonitor', 'project.canDisableMonitor', 'level', function () {
      return Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster.canDisableMonitor') : Ember.get(this, 'project.canDisableMonitor');
    }),
    canSaveMonitor: Ember.computed('cluster.canSaveMonitor', 'project.canSaveMonitor', 'level', function () {
      return Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster.canSaveMonitor') : Ember.get(this, 'project.canSaveMonitor');
    }),
    clusterLevelMinCpu: Ember.computed('cluster.enableClusterMonitoring', 'level', 'project.enableProjectMonitoring', 'scope.currentCluster.nodes', function () {
      const allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
      const schedulableNodes = allNodes.filterBy('isUnschedulable', false);
      return CLUSTER_CPU + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_CPU;
    }),
    clusterLevelMinMemory: Ember.computed('cluster.enableClusterMonitoring', 'level', 'project.enableProjectMonitoring', 'scope.currentCluster.nodes', function () {
      const allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
      const schedulableNodes = allNodes.filterBy('isUnschedulable', false);
      return CLUSTER_MEMORY + Ember.get(schedulableNodes, 'length') * NODE_EXPORTER_MEMORY;
    }),
    saveDisabled: Ember.computed('canSaveMonitor', 'insufficientPrometheusMemory', 'insufficientPrometheusCpu', 'insufficient', 'enabled', function () {
      return !Ember.get(this, 'canSaveMonitor') || Ember.get(this, 'insufficient') || Ember.get(this, 'insufficientPrometheusCpu') || Ember.get(this, 'insufficientPrometheusMemory');
    }),
    insufficientPrometheusCpu: Ember.computed('enabled', 'prometheusRequestCpu', 'requestsCpu', 'schedulableNodes.@each.{allocatable,requested}', 'scope.currentCluster.nodes.@each.{allocatable,requested}', function () {
      const allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];

      if (Ember.get(allNodes, 'length') === 0) {
        return false;
      }

      let maxLeftCpu = 0;
      Ember.get(this, 'schedulableNodes').forEach(node => {
        const left = (0, _util.convertToMillis)(Ember.get(node, 'allocatable.cpu')) - (0, _util.convertToMillis)(Ember.get(node, 'requested.cpu') || '0');

        if (left > maxLeftCpu) {
          maxLeftCpu = left;
        }
      });
      return !Ember.get(this, 'enabled') && maxLeftCpu <= Ember.get(this, 'prometheusRequestCpu');
    }),
    prometheusRequestCpu: Ember.computed('requestsCpu', function () {
      return parseInt(Ember.get(this, 'requestsCpu'), 10) + NODE_EXPORTER_CPU + 200;
    }),
    prometheusRequestMemory: Ember.computed('requestsMemory', function () {
      return parseInt(Ember.get(this, 'requestsMemory'), 10) + NODE_EXPORTER_MEMORY + 200;
    }),
    insufficientPrometheusMemory: Ember.computed('enabled', 'prometheusRequestMemory', 'requestsMemory', 'schedulableNodes.@each.{allocatable,requested}', 'scope.currentCluster.nodes.@each.{allocatable,requested}', function () {
      const allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];

      if (Ember.get(allNodes, 'length') === 0) {
        return false;
      }

      let maxLeftMemory = 0;
      Ember.get(this, 'schedulableNodes').forEach(node => {
        const left = (0, _parseUnit.parseSi)(Ember.get(node, 'allocatable.memory'), 1024) / 1048576 - (0, _parseUnit.parseSi)(Ember.get(node, 'requested.memory') || '0', 1024) / 1048576;

        if (left > maxLeftMemory) {
          maxLeftMemory = left;
        }
      });
      return !Ember.get(this, 'enabled') && maxLeftMemory <= Ember.get(this, 'prometheusRequestMemory');
    }),
    schedulableNodes: Ember.computed('nodeSelectors', 'scope.currentCluster.nodes.@each.{allocatable,requested}', function () {
      const allNodes = Ember.get(this, 'scope.currentCluster.nodes') || [];
      const out = allNodes.filterBy('isUnschedulable', false).filterBy('osInfo', 'linux').filter(node => (Ember.get(this, 'nodeSelectors') || []).every(selector => {
        const labelValue = (Ember.get(node, 'labels') || {})[Ember.get(selector, 'key')];

        if (Ember.get(selector, 'value') === '') {
          return labelValue !== undefined;
        } else {
          return Ember.get(selector, 'value') === labelValue;
        }
      }));
      return out;
    }),
    initSettings: Ember.on('init', Ember.observer('scope.currentProject.id', 'scope.currentCluster.id', function () {
      if (Ember.get(this, 'enabled')) {
        this.fetchSettings();
      }
    })),

    fetchSettings() {
      const resource = Ember.get(this, 'level') === 'cluster' ? Ember.get(this, 'cluster') : Ember.get(this, 'project');

      if (!resource) {
        return;
      }

      Ember.set(this, 'loading', true);
      resource.waitForAction('viewMonitoring').then(() => {
        if (this.isDestroyed || this.isDestroying) {
          return;
        }

        resource.doAction('viewMonitoring').then(res => {
          if (this.isDestroyed || this.isDestroying) {
            return;
          }

          const body = Ember.get(res, 'answers');
          const answers = {};
          const customAnswers = {};
          Object.keys(body || {}).forEach(key => {
            if (EXPOSED_OPTIONS.indexOf(key) > -1 || SCHEDULABLE_COMPONENTS.find(c => key.startsWith(`${c}.nodeSelectors[`)) || SCHEDULABLE_COMPONENTS.find(c => key.startsWith(`${c}.tolerations[`))) {
              answers[key] = body[key];
            } else if (!Object.keys(CLUSTER_HIDDEN_KEYS).includes(key)) {
              customAnswers[key] = body[key];
            }
          });
          Ember.set(this, 'answers', answers);
          Ember.set(this, 'customAnswers', customAnswers);
          this.updateConfig(answers);
          Ember.set(this, 'loading', false);
        }).catch(() => {
          Ember.set(this, 'loading', false);
        });
      });
    },

    updateConfig(answers) {
      if (answers['prometheus.persistent.useReleaseName']) {
        Ember.set(this, 'useReleaseName', answers['prometheus.persistent.useReleaseName']);
      } else {
        Ember.set(this, 'useReleaseName', null);
      }

      if (answers['prometheus.resources.core.requests.cpu']) {
        const requestsCpu = (0, _util.convertToMillis)(answers['prometheus.resources.core.requests.cpu']);
        Ember.setProperties(this, {
          requestsCpu,
          preRequestsCpu: requestsCpu
        });
      }

      if (answers['prometheus.resources.core.limits.cpu']) {
        Ember.set(this, 'limitsCpu', (0, _util.convertToMillis)(answers['prometheus.resources.core.limits.cpu']));
      }

      if (answers['exporter-node.resources.limits.cpu']) {
        Ember.set(this, 'nodeExporterLimitsCpu', (0, _util.convertToMillis)(answers['exporter-node.resources.limits.cpu']));
      }

      if (answers['prometheus.resources.core.requests.memory']) {
        const requestsMemory = (0, _parseUnit.parseSi)(answers['prometheus.resources.core.requests.memory'], 1024) / 1048576;
        Ember.setProperties(this, {
          requestsMemory,
          preRequestsMemory: requestsMemory
        });
      }

      if (answers['prometheus.resources.core.limits.memory']) {
        Ember.set(this, 'limitsMemory', (0, _parseUnit.parseSi)(answers['prometheus.resources.core.limits.memory'], 1024) / 1048576);
      }

      if (answers['exporter-node.resources.limits.memory']) {
        Ember.set(this, 'nodeExporterLimitsMemory', (0, _parseUnit.parseSi)(answers['exporter-node.resources.limits.memory'], 1024) / 1048576);
      } else {
        Ember.set(this, 'nodeExporterLimitsMemory', '50');
      }

      if (answers['operator.resources.limits.memory']) {
        Ember.set(this, 'operatorLimitsMemory', (0, _parseUnit.parseSi)(answers['operator.resources.limits.memory'], 1024) / 1048576);
      } else {
        Ember.set(this, 'operatorLimitsMemory', '100');
      }

      if (answers['prometheus.retention']) {
        Ember.set(this, 'retention', answers['prometheus.retention'].substr(0, answers['prometheus.retention'].length - 1));
      }

      if (answers['grafana.persistence.enabled']) {
        Ember.set(this, 'enableGrafanaPersistence', answers['grafana.persistence.enabled'] === 'true');
      }

      if (answers['prometheus.persistence.enabled']) {
        Ember.set(this, 'enablePrometheusPersistence', answers['prometheus.persistence.enabled'] === 'true');
      }

      if (answers['prometheus.persistence.storageClass']) {
        Ember.set(this, 'prometheusStorageClass', answers['prometheus.persistence.storageClass'] === 'default' ? null : answers['prometheus.persistence.storageClass']);
      }

      if (answers['grafana.persistence.storageClass']) {
        Ember.set(this, 'grafanaStorageClass', answers['grafana.persistence.storageClass'] === 'default' ? null : answers['grafana.persistence.storageClass']);
      }

      if (answers['grafana.persistence.size']) {
        Ember.set(this, 'grafanaPersistenceSize', answers['grafana.persistence.size']);
      }

      if (answers['prometheus.persistence.size']) {
        Ember.set(this, 'prometheusPersistenceSize', answers['prometheus.persistence.size']);
      }

      if (Ember.get(this, 'level') === 'cluster') {
        if (answers['exporter-node.enabled']) {
          Ember.set(this, 'enableNodeExporter', answers['exporter-node.enabled'] === 'true');
        }

        if (answers['exporter-node.ports.metrics.port']) {
          Ember.set(this, 'port', answers['exporter-node.ports.metrics.port']);
        }
      }

      let nodeSelectorsStr = '';
      Object.keys(answers).filter(key => key.startsWith('prometheus.nodeSelectors[')).forEach(key => {
        let value = answers[key];

        if (value) {
          const index = value.indexOf('=');

          if (index > -1) {
            let keyStr = value.slice(index + 1);

            if (keyStr && keyStr.startsWith('"') && keyStr.endsWith('"')) {
              keyStr = keyStr.slice(1, keyStr.length - 1);
            }

            value = `${value.slice(0, index)}=${keyStr}`;
          }
        }

        nodeSelectorsStr += `${value},`;
      });
      Ember.set(this, 'nodeSelectorsStr', nodeSelectorsStr);
      const prometheusTolerations = [];
      const prometheusTolerationKeys = Object.keys(answers).filter(key => key.startsWith(PROMETHEUS_TOLERATION));
      const prometheusTolerationIndexs = prometheusTolerationKeys.map(k => {
        return k.replace(`${PROMETHEUS_TOLERATION}[`, '').split('].').get('firstObject');
      }).uniq();
      prometheusTolerationIndexs.map(idx => {
        prometheusTolerations.pushObject({
          key: answers[`${PROMETHEUS_TOLERATION}[${idx}].key`] || '',
          operator: answers[`${PROMETHEUS_TOLERATION}[${idx}].operator`] || '',
          value: answers[`${PROMETHEUS_TOLERATION}[${idx}].value`] || '',
          effect: answers[`${PROMETHEUS_TOLERATION}[${idx}].effect`] || '',
          tolerationSeconds: answers[`${PROMETHEUS_TOLERATION}[${idx}].tolerationSeconds`] || ''
        });
      });
      Ember.set(this, 'prometheusTolerations', prometheusTolerations);
    }

  });

  _exports.default = _default;
});
define("monitoring/components/enable-monitoring/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7NWfX9zm",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,6],[[35,3,[\"currentCluster\",\"isReady\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,6],[[35,63]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,1],[\"banner.monitoringV2Warning\"],[[\"dashboardLink\",\"docsBase\",\"htmlSafe\"],[[35,3,[\"dashboardLink\"]],[35,3,[\"docsBase\"]],true]]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[1,[30,[36,1],[\"banner.monitoring\"],[[\"dashboardLink\",\"docsBase\",\"htmlSafe\"],[[35,3,[\"dashboardLink\"]],[35,3,[\"docsBase\"]],true]]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[35,64]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"\\n      \"],[1,[30,[36,1],[[30,[36,55],[\"monitoringPage.\",[35,0],\".title\"],null]],null]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,56,[\"isRancher\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[2,\"\\n      \"],[1,[30,[36,1],[\"monitoringPage.resourceLimitsHelp\"],[[\"docsBase\",\"htmlSafe\"],[[35,56,[\"docsBase\"]],true]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[30,[36,5],[[35,12],[35,3,[\"currentProject\",\"enableProjectMonitoring\"]],[30,[36,57],[[35,3,[\"currentCluster\",\"enableClusterMonitoring\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[2,\"\\n        \"],[1,[30,[36,1],[\"monitoringPage.clusterNotEnabled\"],null]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,2],null,[[\"color\"],[\"bg-info\"]],[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[2,\"\\n\"],[6,[37,6],[[35,12]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,1],[[30,[36,55],[\"monitoringPage.toUpdate.\",[35,0]],null]],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,1],[[30,[36,55],[\"monitoringPage.\",[35,0],\".disabled\"],null]],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[35,58]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"section\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"text-center\"],[12],[2,\"\\n        \"],[10,\"i\"],[14,0,\"icon icon-spinner icon-spin icon-3x\"],[12],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"box mb-10\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.version\"],null]],[2,\"\\n\"],[6,[37,6],[[30,[36,5],[[35,12],[35,38],[35,39],[30,[36,40],[[35,38],[35,39]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"              \"],[10,\"span\"],[14,0,\"bg-warning pt-0 pb-0 pl-5 pr-5\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"monitoringPage.upgradeAvailable\"],[[\"version\"],[[35,38]]]]],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n          \"],[1,[30,[36,42],null,[[\"classNames\",\"content\",\"value\"],[\"form-control\",[35,41],[35,39]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"hr\"],[14,0,\"mt-15 mb-15\"],[12],[13],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.retention.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,30],null,[[\"min\",\"value\"],[0,[35,43]]]]],[2,\"\\n            \"],[10,\"span\"],[14,0,\"input-group-addon bg-default\"],[12],[1,[30,[36,1],[\"generic.hours\"],null]],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,6],[[30,[36,4],[[35,0],\"cluster\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.nodeexporter.enable\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,37],null,[[\"value\"],[[35,31]]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.enablePersistence.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,37],null,[[\"value\"],[[35,44]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,44]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.size.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,26],null,[[\"value\",\"placeholder\"],[[35,35],[30,[36,1],[\"monitoringPage.config.prometheus.size.placeholder\"],null]]]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.storageClass.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,28],null,[[\"value\"],[[35,36]]]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.cpuLimit.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[35,45],\"form-control\",[30,[36,1],[\"monitoringPage.config.prometheus.cpuLimit.placeholder\"],null]]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.cpuLimit.unit\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\\n          \"],[10,\"label\"],[14,0,\"acc-label mt-20\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.cpuRequest.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[35,46],\"form-control\",[30,[36,1],[\"monitoringPage.config.prometheus.cpuRequest.placeholder\"],null]]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.cpuRequest.unit\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.memoryLimit.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[35,47],\"form-control\",[30,[36,1],[\"monitoringPage.config.prometheus.memoryLimit.placeholder\"],null]]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"generic.mibibyte\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n\\n          \"],[10,\"label\"],[14,0,\"acc-label mt-20\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.prometheus.memoryRequest.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n            \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[35,48],\"form-control\",[30,[36,1],[\"monitoringPage.config.prometheus.memoryRequest.placeholder\"],null]]]]],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"generic.mibibyte\"],null]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[6,[37,6],[[30,[36,5],[[30,[36,4],[[35,0],\"cluster\"],null],[35,31]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.nodeexporter.cpuLimit.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n              \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"0\",\"100\",[35,33],\"form-control\",[30,[36,1],[\"monitoringPage.config.nodeexporter.cpuLimit.placeholder\"],null]]]]],[2,\"\\n              \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"monitoringPage.config.nodeexporter.cpuLimit.unit\"],null]],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.nodeexporter.memoryLimit.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n              \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[35,34],\"form-control\",[30,[36,1],[\"monitoringPage.config.nodeexporter.memoryLimit.placeholder\"],null]]]]],[2,\"\\n              \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"generic.mibibyte\"],null]],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,6],[[30,[36,4],[[35,0],\"cluster\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\"],[6,[37,6],[[35,31]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n              \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"monitoringPage.config.nodeexporter.label\"],null]],[2,\"\\n              \"],[13],[2,\"\\n              \"],[1,[30,[36,30],null,[[\"min\",\"max\",\"value\"],[1,65535,[35,29]]]]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.operator.memoryLimit.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[10,\"div\"],[14,0,\"input-group\"],[12],[2,\"\\n              \"],[1,[30,[36,30],null,[[\"min\",\"step\",\"value\",\"classNames\",\"placeholder\"],[\"4\",\"1\",[35,32],\"form-control\",[30,[36,1],[\"monitoringPage.config.operator.memoryLimit.placeholder\"],null]]]]],[2,\"\\n              \"],[10,\"div\"],[14,0,\"input-group-addon bg-default\"],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"generic.mibibyte\"],null]],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.nodeSelector.helpText\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,24],null,[[\"changedArray\",\"initialStr\",\"allowEmptyValue\",\"addActionLabel\"],[[30,[36,7],[[32,0],[30,[36,23],[[35,15]],null]],null],[35,49],true,\"monitoringPage.nodeSelector.addSelectorLabel\"]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-12\"],[12],[2,\"\\n          \"],[1,[30,[36,51],null,[[\"editing\",\"tolerate\",\"title\"],[true,[35,50],[30,[36,1],[\"formScheduling.toleration.workloadTitle\"],[[\"workload\"],[\"Prometheus\"]]]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n          \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n            \"],[1,[30,[36,1],[\"monitoringPage.config.grafana.enablePersistence.label\"],null]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[1,[30,[36,37],null,[[\"value\"],[[35,52]]]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,6],[[35,52]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.grafana.size.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,26],null,[[\"value\",\"placeholder\"],[[35,25],[30,[36,1],[\"monitoringPage.config.grafana.size.placeholder\"],null]]]]],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"div\"],[14,0,\"col span-6\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.config.grafana.storageClass.label\"],null]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[1,[30,[36,28],null,[[\"value\"],[[35,27]]]]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,54],null,[[\"advanced\"],[[35,53]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,24],null,[[\"initialMap\",\"changed\",\"allowEmptyValue\",\"addInitialEmptyRow\",\"editing\",\"header\",\"addActionLabel\",\"keyLabel\",\"keyPlaceholder\",\"valueLabel\",\"valuePlaceholder\"],[[35,22],[30,[36,7],[[32,0],[30,[36,23],[[35,22]],null]],null],true,true,true,[30,[36,1],[\"newCatalog.answers.label\"],null],\"newCatalog.answers.addAction\",\"newContainer.environment.keyLabel\",\"newContainer.environment.keyPlaceholder\",\"newContainer.environment.valueLabel\",\"newContainer.environment.valuePlaceholder\"]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,6],[[30,[36,60],[[35,14],[35,17],[35,59]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,2],null,[[\"color\"],[\"bg-warning\"]],[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"p\"],[12],[2,\"\\n\"],[6,[37,6],[[30,[36,5],[[35,21],[35,19]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.total.all\"],[[\"cpu\",\"memory\"],[[35,18],[35,20]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,21]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.total.memory\"],[[\"memory\"],[[35,20]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,19]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.total.cpu\"],[[\"cpu\"],[[35,18]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,5],[[35,17],[35,14],[35,15,[\"length\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.selectors.all\"],[[\"cpu\",\"memory\"],[[35,16],[35,13]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,5],[[35,17],[35,14]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.prometheus.all\"],[[\"cpu\",\"memory\"],[[35,16],[35,13]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,5],[[35,17],[35,15,[\"length\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.selectors.cpu\"],[[\"cpu\"],[[35,16]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,17]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.prometheus.cpu\"],[[\"cpu\"],[[35,16]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,5],[[35,14],[35,15,[\"length\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.selectors.memory\"],[[\"memory\"],[[35,13]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[35,14]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,1],[\"monitoringPage.insufficientSize.prometheus.memory\"],[[\"memory\"],[[35,13]]]]],[2,\"\\n        \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"div\"],[14,0,\"text-center\"],[12],[2,\"\\n\"],[6,[37,62],null,[[\"saveDisabled\",\"cancelDisabled\",\"editing\",\"createLabel\",\"save\"],[[35,61],true,[35,12],\"monitoringPage.enableActionLabel\",\"enable\"]],[[\"default\"],[{\"statements\":[[6,[37,6],[[30,[36,5],[[35,12],[35,11]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,6],[[35,10]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[11,\"button\"],[24,0,\"btn bg-error\"],[24,4,\"button\"],[4,[38,7],[[32,0],\"disable\"],null],[12],[2,\"\\n            \"],[10,\"i\"],[14,0,\"icon icon-alert\"],[12],[13],[2,\" \"],[1,[30,[36,1],[\"monitoringPage.confirmDisable\"],null]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,5],[[35,9],[30,[36,4],[[35,0],\"cluster\"],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[6,[37,8],null,[[\"type\",\"model\",\"tooltipTemplate\",\"aria-describedby\",\"inlineBlock\",\"placement\"],[\"tooltip-basic\",[30,[36,1],[\"monitoringPage.errors.disableIstioFirst\"],null],\"tooltip-static\",\"tooltip-base\",true,\"top\"]],[[\"default\"],[{\"statements\":[[2,\"              \"],[11,\"button\"],[24,0,\"btn bg-error\"],[24,4,\"button\"],[4,[38,7],[[32,0],\"promptDisable\"],null],[12],[2,\"\\n                \"],[1,[30,[36,1],[\"monitoringPage.disable\"],null]],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[11,\"button\"],[24,0,\"btn bg-error\"],[24,4,\"button\"],[4,[38,7],[[32,0],\"promptDisable\"],null],[12],[2,\"\\n              \"],[1,[30,[36,1],[\"monitoringPage.disable\"],null]],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,6],[[30,[36,5],[[30,[36,4],[[35,0],\"project\"],null],[35,3,[\"currentProject\",\"isSystemProject\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-info\",[30,[36,1],[\"monitoringPage.systemProject\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-info\",[30,[36,1],[\"monitoringPage.noPermission\"],[[\"level\"],[[35,0]]]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"level\",\"t\",\"banner-message\",\"scope\",\"eq\",\"and\",\"if\",\"action\",\"tooltip-element\",\"istioEnabled\",\"confirmDisable\",\"canDisableMonitor\",\"enabled\",\"prometheusRequestMemory\",\"insufficientPrometheusMemory\",\"nodeSelectors\",\"prometheusRequestCpu\",\"insufficientPrometheusCpu\",\"minCpu\",\"insufficientCpu\",\"minMemory\",\"insufficientMemory\",\"customAnswers\",\"mut\",\"form-key-value\",\"grafanaPersistenceSize\",\"schema/input-string\",\"grafanaStorageClass\",\"schema/input-storageclass\",\"port\",\"input-integer\",\"enableNodeExporter\",\"operatorLimitsMemory\",\"nodeExporterLimitsCpu\",\"nodeExporterLimitsMemory\",\"prometheusPersistenceSize\",\"prometheusStorageClass\",\"schema/input-boolean\",\"latestVersion\",\"templateVersion\",\"not-eq\",\"availableVersions\",\"new-select\",\"retention\",\"enablePrometheusPersistence\",\"limitsCpu\",\"requestsCpu\",\"limitsMemory\",\"requestsMemory\",\"nodeSelectorsStr\",\"prometheusTolerations\",\"scheduling-toleration\",\"enableGrafanaPersistence\",\"advanced\",\"advanced-section\",\"concat\",\"settings\",\"not\",\"loading\",\"insufficient\",\"or\",\"saveDisabled\",\"save-cancel\",\"showMonitoringV2Warning\",\"canSaveMonitor\"]}",
    "moduleName": "monitoring/components/enable-monitoring/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/error-sub-row/component", "monitoring/components/error-sub-row/component");
define("monitoring/components/etcd-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/etcd-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      resourceType: 'etcd'
    },
    singleStatsDidChange: Ember.observer('single.[]', function () {
      const leaderChange = (Ember.get(this, 'single') || []).findBy('graph.title', 'etcd-leader-change');

      if (leaderChange) {
        Ember.set(this, 'leaderChange', Ember.get(leaderChange, 'series.firstObject.points.firstObject.firstObject'));
      }

      const hasLeader = (Ember.get(this, 'single') || []).findBy('graph.title', 'etcd-server-leader-sum');

      if (hasLeader) {
        Ember.set(this, 'hasLeader', Ember.get(hasLeader, 'series.firstObject.points.firstObject.firstObject') === 1);
      }

      const failedProposals = (Ember.get(this, 'single') || []).findBy('graph.title', 'etcd-server-failed-proposal');

      if (failedProposals) {
        Ember.set(this, 'failedProposals', Ember.get(failedProposals, 'series.firstObject.points.firstObject.firstObject'));
      }
    })
  });

  _exports.default = _default;
});
define("monitoring/components/etcd-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vxBEZsjm",
    "block": "{\"symbols\":[],\"statements\":[[10,\"section\"],[12],[2,\"\\n  \"],[1,[30,[36,7],null,[[\"queryAction\",\"state\"],[[30,[36,6],[[32,0],\"query\"],null],[35,5]]]]],[2,\"\\n\\n\"],[6,[37,2],[[35,8,[\"length\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col span-12 pl-20\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"row banner bg-info basics\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"etcd.hasLeader.label\"],null]],[2,\":\\n            \"],[13],[2,\"\\n\"],[6,[37,2],[[35,1]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"              \"],[1,[30,[36,0],[\"generic.yes\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"              \"],[1,[30,[36,0],[\"generic.no\"],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n\\n          \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"etcd.leaderChange.label\"],null]],[2,\":\\n            \"],[13],[2,\"\\n            \"],[1,[34,3]],[2,\"\\n          \"],[13],[2,\"\\n\\n          \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n            \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n              \"],[1,[30,[36,0],[\"etcd.failedProposals.label\"],null]],[2,\":\\n            \"],[13],[2,\"\\n            \"],[1,[34,4]],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[1,[30,[36,10],null,[[\"graphs\",\"loading\",\"noGraphs\"],[[35,9],[35,5,[\"loading\"]],[35,5,[\"noGraphs\"]]]]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"t\",\"hasLeader\",\"if\",\"leaderChange\",\"failedProposals\",\"state\",\"action\",\"metrics-action\",\"single\",\"graphs\",\"metrics-graph\"]}",
    "moduleName": "monitoring/components/etcd-metrics/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/field-required/component", "monitoring/components/field-required/component");
define.alias("shared/components/form-agent-env-var/component", "monitoring/components/form-agent-env-var/component");
define.alias("shared/components/form-array/component", "monitoring/components/form-array/component");
define.alias("shared/components/form-auth-cloud-credential/component", "monitoring/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "monitoring/components/form-certificate-row/component");
define.alias("shared/components/form-contextual-select-array/component", "monitoring/components/form-contextual-select-array/component");
define.alias("shared/components/form-count/component", "monitoring/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "monitoring/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "monitoring/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "monitoring/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "monitoring/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "monitoring/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "monitoring/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "monitoring/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "monitoring/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "monitoring/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "monitoring/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "monitoring/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "monitoring/components/form-members/component");
define.alias("shared/components/form-name-description/component", "monitoring/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "monitoring/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "monitoring/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "monitoring/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "monitoring/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "monitoring/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "monitoring/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "monitoring/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "monitoring/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "monitoring/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "monitoring/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "monitoring/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "monitoring/components/gke-access-scope/component");
define.alias("shared/components/gke-node-pool-row/component", "monitoring/components/gke-node-pool-row/component");
define.alias("shared/components/graph-area/component", "monitoring/components/graph-area/component");
define.alias("shared/components/hook-row/component", "monitoring/components/hook-row/component");
define.alias("shared/components/host-pod/component", "monitoring/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "monitoring/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "monitoring/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "monitoring/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "monitoring/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "monitoring/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "monitoring/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "monitoring/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "monitoring/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "monitoring/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "monitoring/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "monitoring/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "monitoring/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "monitoring/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "monitoring/components/illiquid-model");
define.alias("shared/components/import-command/component", "monitoring/components/import-command/component");
define("monitoring/components/ingress-response-list/component", ["exports", "monitoring/components/ingress-response-list/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    data: null,
    sortBy: 'time',
    descending: true,
    labelArray: null,
    headers: [{
      name: 'host',
      sort: ['host'],
      translationKey: 'ingressResponse.host'
    }, {
      name: 'path',
      sort: ['path', 'host'],
      translationKey: 'ingressResponse.path'
    }, {
      name: 'time',
      sort: ['time', 'path', 'host'],
      translationKey: 'ingressResponse.responseTime'
    }]
  });

  _exports.default = _default;
});
define("monitoring/components/ingress-response-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "erCF1FeE",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"inst\"],\"statements\":[[6,[37,11],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"expandOnInit\",\"componentName\"],[[30,[36,0],[\"ingressResponse.title\"],null],[30,[36,0],[\"ingressResponse.detail\"],null],[35,10],[30,[36,9],[[32,0],[35,8]],null],true,\"sortable-table\"]],[[\"default\"],[{\"statements\":[[6,[37,7],[[32,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[35,6],false,[35,5],[35,4],[35,3]]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"ingressResponse.host\"],null],\":\"]]],[14,0,\"force-wrap\"],[12],[1,[32,4,[\"host\"]]],[13],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"ingressResponse.path\"],null],\":\"]]],[14,0,\"force-wrap\"],[12],[1,[32,4,[\"path\"]]],[13],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"ingressResponse.responseTime\"],null],\":\"]]],[14,0,\"force-wrap\"],[12],[1,[32,4,[\"time\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"norows\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[1,[30,[36,0],[\"ingressResponse.noData\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"nomatch\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[1,[30,[36,0],[\"ingressResponse.noMatch\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[2,3,4]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"eq\",\"if\",\"data\",\"headers\",\"descending\",\"sortBy\",\"component\",\"expandFn\",\"action\",\"expandAll\",\"accordion-list-item\"]}",
    "moduleName": "monitoring/components/ingress-response-list/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/input-answer-row/component", "monitoring/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "monitoring/components/input-answers/component");
define.alias("shared/components/input-cidr/component", "monitoring/components/input-cidr/component");
define.alias("shared/components/input-custom-answers/component", "monitoring/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "monitoring/components/input-float/component");
define.alias("shared/components/input-identity/component", "monitoring/components/input-identity/component");
define.alias("shared/components/input-int/component", "monitoring/components/input-int/component");
define.alias("shared/components/input-integer/component", "monitoring/components/input-integer/component");
define.alias("shared/components/input-number/component", "monitoring/components/input-number/component");
define.alias("shared/components/input-or-display/component", "monitoring/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "monitoring/components/input-paste/component");
define.alias("shared/components/input-slider/component", "monitoring/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "monitoring/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "monitoring/components/input-text-file/component");
define.alias("shared/components/input-url/component", "monitoring/components/input-url/component");
define.alias("shared/components/input-yaml/component", "monitoring/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "monitoring/components/ivy-codemirror");
define.alias("shared/components/k3s-node-args/component", "monitoring/components/k3s-node-args/component");
define.alias("shared/components/k3s-node-env-var/component", "monitoring/components/k3s-node-env-var/component");
define("monitoring/components/k8s-component-status/component", ["exports", "monitoring/components/k8s-component-status/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    layout: _template.default,
    classNames: 'col span-3 mt-0',
    showUrl: true,
    label: null,
    healthy: null,
    url: null
  });

  _exports.default = _default;
});
define("monitoring/components/k8s-component-status/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tste32+n",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,7],null,[[\"icon\",\"color\"],[[30,[36,5],[[35,6],\"icon-check\",\"icon-alert\"],null],[30,[36,5],[[35,6],\"bg-success mt-0\",\"bg-error mt-0\"],null]]],[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"p\"],[14,0,\"text-left\"],[12],[2,\"\\n    \"],[1,[30,[36,2],[[35,1]],null]],[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[35,3],[35,0]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"span\"],[14,0,\"pull-right\"],[12],[2,\"\\n        \"],[10,\"a\"],[15,6,[34,0]],[14,\"target\",\"_blank\"],[14,\"rel\",\"nofollow noopener noreferrer\"],[12],[2,\"\\n          \"],[10,\"div\"],[14,0,\"grafana\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"url\",\"label\",\"t\",\"showUrl\",\"and\",\"if\",\"healthy\",\"banner-message\"]}",
    "moduleName": "monitoring/components/k8s-component-status/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/components/k8s-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/k8s-metrics/template", "shared/utils/util"], function (_exports, _metrics, _template, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      displayResourceType: 'kube-component'
    },
    singleStatsDidChange: Ember.observer('single.[]', function () {
      const responseSeconds = (Ember.get(this, 'single') || []).findBy('graph.title', 'ingresscontroller-upstream-response-seconds');

      if (responseSeconds) {
        Ember.set(this, 'responseSeconds', (Ember.get(responseSeconds, 'series') || []).sortBy('series.firstObject.points.firstObject.firstObject').map(serie => {
          const name = Ember.get(serie, 'name') || '';
          const tokens = name.substring(24, Ember.get(name, 'length') - 1).split(' ');
          let host;
          let path;

          if (Ember.get(tokens, 'length') === 2) {
            host = tokens[0].substring(7, Ember.get(tokens[0], 'length'));
            path = tokens[1].substring(5, Ember.get(tokens[1], 'length'));
          }

          return {
            host,
            path,
            time: (0, _util.formatSecond)(Ember.get(serie, 'points.firstObject.firstObject'))
          };
        }));
      }
    })
  });

  _exports.default = _default;
});
define("monitoring/components/k8s-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kRMCrkZ/",
    "block": "{\"symbols\":[\"al\",\"expandFn\"],\"statements\":[[10,\"section\"],[12],[2,\"\\n  \"],[1,[30,[36,5],null,[[\"queryAction\",\"state\"],[[30,[36,4],[[32,0],\"query\"],null],[35,3]]]]],[2,\"\\n\\n  \"],[1,[30,[36,7],null,[[\"graphs\",\"loading\",\"noGraphs\"],[[35,6],[35,3,[\"loading\"]],[35,3,[\"noGraphs\"]]]]]],[2,\"\\n\\n\"],[6,[37,9],[[35,8,[\"length\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,2],null,null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"mt-20 text-left\"],[12],[2,\"\\n        \"],[1,[30,[36,1],null,[[\"expandAll\",\"expandFn\",\"data\"],[[32,1,[\"expandAll\"]],[32,2],[35,0]]]]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1,2]}]]]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"responseSeconds\",\"ingress-response-list\",\"accordion-list\",\"state\",\"action\",\"metrics-action\",\"graphs\",\"metrics-graph\",\"single\",\"if\"]}",
    "moduleName": "monitoring/components/k8s-metrics/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/labels-section/component", "monitoring/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "monitoring/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "monitoring/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "monitoring/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "monitoring/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "monitoring/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "monitoring/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "monitoring/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "monitoring/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "monitoring/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "monitoring/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "monitoring/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "monitoring/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "monitoring/components/liquid-versions");
define.alias("shared/components/managed-import-cluster-info/component", "monitoring/components/managed-import-cluster-info/component");
define.alias("shared/components/marked-down/component", "monitoring/components/marked-down/component");
define.alias("ember-maybe-in-element/components/maybe-in-element", "monitoring/components/maybe-in-element");
define.alias("shared/components/metrics-action/component", "monitoring/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "monitoring/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "monitoring/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "monitoring/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "monitoring/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "monitoring/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "monitoring/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "monitoring/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "monitoring/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "monitoring/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "monitoring/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "monitoring/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "monitoring/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "monitoring/components/modal-move-namespace/component");
define.alias("shared/components/modal-resize-pvc/component", "monitoring/components/modal-resize-pvc/component");
define.alias("shared/components/modal-root/component", "monitoring/components/modal-root/component");
define.alias("shared/components/modal-save-rke-template/component", "monitoring/components/modal-save-rke-template/component");
define.alias("shared/components/modal-shell/component", "monitoring/components/modal-shell/component");
define.alias("shared/components/modal-show-command/component", "monitoring/components/modal-show-command/component");
define.alias("shared/components/modal-yaml/component", "monitoring/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "monitoring/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "monitoring/components/namespace-group/component");
define.alias("shared/components/new-select/component", "monitoring/components/new-select/component");
define("monitoring/components/node-conditions/component", ["exports", "monitoring/components/node-conditions/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const FALSE = 'False';
  const TRUE = 'True';

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    layout: _template.default,
    conditionsSource: null,
    conditions: null,

    init() {
      this._super(...arguments);

      this.setConditions();
    },

    updateConditions: Ember.observer('conditionsSource.@each.{status,reason,message}', function () {
      this.setConditions();
    }),

    setConditions() {
      const conditions = Ember.get(this, 'conditionsSource');
      const outOfDisk = conditions.find(c => c.type === 'OutOfDisk');
      const diskPressure = conditions.find(c => c.type === 'DiskPressure');
      const memoryPressure = conditions.find(c => c.type === 'MemoryPressure');
      const ready = conditions.find(c => c.type === 'Ready');
      this.set('conditions', [{
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.diskSpace'),
        healthy: !outOfDisk || Ember.get(outOfDisk, 'status') === FALSE
      }, {
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.diskPressure'),
        healthy: !diskPressure || Ember.get(diskPressure, 'status') === FALSE
      }, {
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.memoryPressure'),
        healthy: !memoryPressure || Ember.get(memoryPressure, 'status') === FALSE
      }, {
        name: Ember.get(this, 'intl').t('hostsPage.hostPage.conditions.ready'),
        healthy: ready && Ember.get(ready, 'status') === TRUE
      }]);
    }

  });

  _exports.default = _default;
});
define("monitoring/components/node-conditions/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "M4744iQJ",
    "block": "{\"symbols\":[\"c\"],\"statements\":[[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[35,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"col span-3\"],[12],[2,\"\\n      \"],[1,[30,[36,1],null,[[\"color\",\"icon\",\"message\"],[[30,[36,0],[[32,1,[\"healthy\"]],\"bg-success\",\"bg-error\"],null],[30,[36,0],[[32,1,[\"healthy\"]],\"icon-check\",\"icon-alert\"],null],[32,1,[\"name\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[13],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"if\",\"banner-message\",\"conditions\",\"-track-array\",\"each\"]}",
    "moduleName": "monitoring/components/node-conditions/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/components/node-dashboard/component", ["exports", "monitoring/components/node-dashboard/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    scope: Ember.inject.service(),
    layout: _template.default,
    model: null,
    sortBy: 'key',
    descending: false,
    isK3sNode: Ember.computed.alias('model.node.isK3sNode'),
    monitoringEnabled: Ember.computed.alias('scope.currentCluster.enableClusterMonitoring'),
    isMonitoringReady: Ember.computed.alias('scope.currentCluster.isMonitoringReady')
  });

  _exports.default = _default;
});
define("monitoring/components/node-dashboard/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "f5y0Mrjn",
    "block": "{\"symbols\":[\"al\",\"expandFn\",\"parent\"],\"statements\":[[10,\"div\"],[14,0,\"row banner bg-info basics\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n      \"],[1,[30,[36,3],[\"hostsPage.hostPage.ipAddress\"],null]],[2,\":\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"inline-block\"],[12],[2,\"\\n      \"],[1,[30,[36,15],null,[[\"model\",\"textMuted\"],[[35,0,[\"node\"]],false]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n\"],[6,[37,8],[[35,0,[\"node\",\"isContainerD\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,3],[\"hostsPage.hostPage.containerDVersion\"],null]],[2,\":\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,3],[\"hostsPage.hostPage.dockerVersion\"],null]],[2,\":\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[1,[35,0,[\"node\",\"versionBlurb\"]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n      \"],[1,[30,[36,3],[\"generic.created\"],null]],[2,\":\\n    \"],[13],[2,\"\\n    \"],[1,[30,[36,16],[[35,0,[\"node\",\"created\"]]],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"row banner bg-info basics\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n      \"],[1,[30,[36,3],[\"hostsPage.hostPage.kubeletVersion\"],null]],[2,\":\\n    \"],[13],[2,\"\\n    \"],[1,[35,0,[\"node\",\"info\",\"kubernetes\",\"kubeletVersion\"]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n      \"],[1,[30,[36,3],[\"hostsPage.hostPage.kubeProxyVersion\"],null]],[2,\":\\n    \"],[13],[2,\"\\n    \"],[1,[35,0,[\"node\",\"info\",\"kubernetes\",\"kubeProxyVersion\"]]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label vertical-middle p-0\"],[12],[2,\"\\n      \"],[1,[30,[36,3],[\"hostsPage.hostPage.operatingSystem\"],null]],[2,\":\\n    \"],[13],[2,\"\\n    \"],[1,[35,0,[\"node\",\"osBlurb\"]]],[2,\" \"],[10,\"span\"],[14,0,\"text-small text-muted\"],[12],[1,[35,0,[\"node\",\"info\",\"os\",\"kernelVersion\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[1,[30,[36,17],null,[[\"nodes\"],[[35,0,[\"nodes\"]]]]]],[2,\"\\n\\n\"],[1,[30,[36,18],null,[[\"conditionsSource\"],[[35,0,[\"node\",\"conditions\"]]]]]],[2,\"\\n\\n\"],[10,\"section\"],[12],[2,\"\\n\"],[6,[37,19],null,null,[[\"default\"],[{\"statements\":[[6,[37,8],[[35,7,[\"currentCluster\",\"isMonitoringReady\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,6],null,[[\"classNames\",\"expandAll\",\"expandFn\",\"grafanaUrl\",\"title\"],[\"mb-20\",[32,1,[\"expandAll\"]],[32,2],[35,0,[\"node\",\"grafanaUrl\"]],[30,[36,3],[\"clusterDashboard.sections.node\"],null]]],[[\"default\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,5],null,[[\"resourceId\"],[[35,0,[\"node\",\"id\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"    \"],[1,[30,[36,9],null,[[\"resourceType\",\"conditions\",\"expandAll\",\"expandFn\"],[[30,[36,3],[\"generic.node\"],null],[35,0,[\"node\",\"conditions\"]],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n\"],[6,[37,8],[[35,10]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n\"],[6,[37,4],null,[[\"title\",\"detail\",\"expandAll\",\"expand\"],[[30,[36,3],[\"clusterDashboard.k3sInfo.title\"],null],[30,[36,3],[\"clusterDashboard.k3sInfo.detail\"],null],[35,2],[30,[36,1],[[32,0],[32,2]],null]]],[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n            \"],[8,\"k3s-node-args\",[],[[\"@node\"],[[34,0,[\"node\"]]]],null],[2,\"\\n            \"],[8,\"k3s-node-env-var\",[],[[\"@node\"],[[34,0,[\"node\"]]]],null],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n      \"],[1,[30,[36,11],null,[[\"node\",\"expandAll\",\"expandFn\"],[[35,0,[\"node\"]],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n      \"],[1,[30,[36,12],null,[[\"model\",\"showKind\",\"expandAll\",\"expandFn\"],[[35,0,[\"node\"]],false,[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n      \"],[1,[30,[36,13],null,[[\"model\",\"expandAll\",\"expandFn\"],[[35,0,[\"node\"]],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n      \"],[1,[30,[36,14],null,[[\"taints\",\"expandAll\",\"expandFn\"],[[35,0,[\"node\",\"taints\"]],[32,1,[\"expandAll\"]],[32,2]]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1,2]}]]],[13]],\"hasEval\":false,\"upvars\":[\"model\",\"action\",\"expandAll\",\"t\",\"accordion-list-item\",\"node-metrics\",\"metrics-summary\",\"scope\",\"if\",\"resource-condition-list\",\"isK3sNode\",\"system-info-section\",\"labels-section\",\"annotations-section\",\"taints-section\",\"node-ip\",\"date-calendar\",\"nodes-live\",\"node-conditions\",\"accordion-list\"]}",
    "moduleName": "monitoring/components/node-dashboard/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/node-group-row/component", "monitoring/components/node-group-row/component");
define.alias("shared/components/node-ip/component", "monitoring/components/node-ip/component");
define("monitoring/components/node-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/node-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      resourceType: 'node'
    }
  });

  _exports.default = _default;
});
define("monitoring/components/node-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "24hTPvBE",
    "block": "{\"symbols\":[],\"statements\":[[10,\"section\"],[12],[2,\"\\n  \"],[1,[30,[36,2],null,[[\"queryAction\",\"state\"],[[30,[36,1],[[32,0],\"query\"],null],[35,0]]]]],[2,\"\\n  \"],[1,[30,[36,4],null,[[\"graphs\",\"loading\",\"noGraphs\"],[[35,3],[35,0,[\"loading\"]],[35,0,[\"noGraphs\"]]]]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"state\",\"action\",\"metrics-action\",\"graphs\",\"metrics-graph\"]}",
    "moduleName": "monitoring/components/node-metrics/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/node-pool-row/component", "monitoring/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "monitoring/components/node-taints/component");
define("monitoring/components/nodes-live/component", ["exports", "monitoring/components/nodes-live/template", "shared/mixins/metrics", "monitoring/components/nodes-reservation/component", "shared/utils/parse-unit"], function (_exports, _template, _metrics, _component, _parseUnit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const CPU_GRAPH_TITLE = 'cluster-cpu-usage';
  const MOMORY_GRAPH_TITLE = 'cluster-memory-usage';

  var _default = _component.default.extend(_metrics.default, {
    intl: Ember.inject.service(),
    scope: Ember.inject.service(),
    layout: _template.default,
    nodes: null,
    filters: {
      resourceType: 'cluster'
    },
    isGotMetrics: false,
    cluster: Ember.computed.reads('scope.currentCluster'),
    isMonitoringReady: Ember.computed.alias('scope.currentCluster.isMonitoringReady'),

    init() {
      this._super(...arguments);

      Ember.run.next(() => {
        Ember.setProperties(Ember.get(this, 'state'), {
          from: 'now-5s',
          interval: '5s',
          isCustom: false,
          loading: false,
          noGraphs: false,
          to: 'now'
        });
        this.fetchMetrics();
      });
    },

    isMonitoringReadyChange: Ember.observer('isMonitoringReady', function () {
      if (Ember.get(this, 'isMonitoringReady')) {
        this.fetchMetrics();
      } else {
        Ember.set(this, 'isGotMetrics', false);
      }
    }),
    graphChange: Ember.observer('graphs.[]', function () {
      const {
        graphs = []
      } = this;
      const filtered = graphs.filter(o => o.graph.title === CPU_GRAPH_TITLE || o.graph.title === MOMORY_GRAPH_TITLE);

      if (filtered.length === 2) {
        Ember.set(this, 'isGotMetrics', true);
      } else {
        Ember.set(this, 'isGotMetrics', false);
      }
    }),
    cpuTotalPercentOb: Ember.observer('cpuUsedTotal', 'cpuReservation.subtitle', function () {
      Ember.run.next(() => {
        const reservation = this.getTotal(this.getNodes('cpu'));
        const used = Ember.get(this, 'cpuUsedTotal');

        if (used === 0 || used === undefined) {
          Ember.set(this, 'cpuTotalPercent', 100);
        } else {
          if (reservation > used) {
            Ember.set(this, 'cpuTotalPercent', 100);
          } else {
            Ember.set(this, 'cpuTotalPercent', Math.round(reservation / used * 100) || 100);
          }
        }
      });
    }),
    memoryTotalPercentOb: Ember.observer('memoryUsedTotal', 'memoryTotalPercent.subtitle', function () {
      Ember.run.next(() => {
        const reservation = this.getTotal(this.getNodes('memory'));
        const used = Ember.get(this, 'memoryUsedTotal');

        if (used === 0 || used === undefined) {
          Ember.set(this, 'memoryTotalPercent', 100);
        } else {
          if (reservation > used) {
            Ember.set(this, 'memoryTotalPercent', 100);
          } else {
            Ember.set(this, 'memoryTotalPercent', Math.round(reservation / used * 100) || 100);
          }
        }
      });
    }),
    clusterChange: Ember.observer('scope.currentCluster.id', function () {
      this.fetchMetrics();
    }),
    cpuTicks: Ember.computed('graphs.[]', 'nodes.[]', 'showTicks', function () {
      if (!Ember.get(this, 'graphs') || !Ember.get(this, 'showTicks')) {
        return;
      }

      const cpuGraph = Ember.get(this, 'graphs').filter(g => g.graph.title === CPU_GRAPH_TITLE)[0];

      if (!cpuGraph || cpuGraph === undefined) {
        return;
      }

      const {
        series = []
      } = cpuGraph;
      const {
        nodes = []
      } = this;
      return series.filter(s => {
        return nodes.filter(n => n.nodeName === s.name).length > 0;
      }).map(s => {
        return {
          value: Math.round((s.points[1] && s.points[1][0] || 0) * 100),
          label: s.name
        };
      });
    }),
    memoryTicks: Ember.computed('graphs.[]', 'showTicks', function () {
      if (!Ember.get(this, 'graphs') || !Ember.get(this, 'showTicks')) {
        return;
      }

      const memoryGraph = Ember.get(this, 'graphs').filter(g => g.graph.title === MOMORY_GRAPH_TITLE)[0];

      if (!memoryGraph || memoryGraph === undefined) {
        return;
      }

      const {
        series = []
      } = memoryGraph;
      const {
        nodes = []
      } = this;
      return series.filter(s => {
        return nodes.filter(n => n.nodeName === s.name).length > 0;
      }).map(s => {
        return {
          value: Math.round((s.points[1] && s.points[1][0] || 0) * 100),
          label: s.name
        };
      });
    }),
    cpuLiveTitle: Ember.computed('nodeCapcity', 'graphs.[]', 'cluster.capacity', 'intl.locale', function () {
      const {
        graphs,
        nodes = []
      } = this;

      if (!graphs) {
        return 'loading';
      }

      const {
        nodeCapcity = {}
      } = this;
      const cpuGraph = graphs.filter(g => g.graph.title === CPU_GRAPH_TITLE)[0];

      if (!cpuGraph || cpuGraph === undefined) {
        return;
      }

      const {
        series = []
      } = cpuGraph;
      let used = 0;
      let total = 0;
      series.filter(s => {
        return nodes.filter(n => n.nodeName === s.name).length > 0;
      }).map(s => {
        const capacity = nodeCapcity[s.name];

        if (!capacity) {
          return;
        }

        used += parseInt(capacity.cpu) * (s.points[1] && s.points[1][0] || 0);
        total += parseInt(capacity.cpu);
      });
      total = (0, _parseUnit.formatSi)(total, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(total), 1);
      Ember.setProperties(this, {
        cpuUsedTotal: (0, _parseUnit.parseSi)(total),
        cpuLive: Math.round(used / total * 100)
      });
      return Ember.get(this, 'intl').t('clusterDashboard.liveTitle', {
        total,
        used: (0, _parseUnit.formatSi)(used, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(total), 1).replace(/\s.*$/, '')
      });
    }),
    meomoryLiveTitle: Ember.computed('nodes.@each.memory', 'memoryLive', 'intl.locale', function () {
      const {
        graphs,
        nodes = []
      } = this;

      if (!graphs) {
        return 'loading';
      }

      const {
        nodeCapcity = {}
      } = this;
      const graph = graphs.filter(g => g.graph.title === MOMORY_GRAPH_TITLE)[0];

      if (!graph || graph === undefined) {
        return;
      }

      const {
        series = []
      } = graph;
      let used = 0;
      let total = 0;
      series.filter(s => {
        return nodes.filter(n => n.nodeName === s.name).length > 0;
      }).map(s => {
        const capacity = nodeCapcity[s.name];

        if (!capacity) {
          return;
        }

        used += (0, _parseUnit.parseSi)(capacity.memory) * (s.points[1] && s.points[1][0] || 0);
        total += (0, _parseUnit.parseSi)(capacity.memory);
      });
      Ember.setProperties(this, {
        memoryUsedTotal: total,
        memoryLive: Math.round(used / total * 100)
      });
      return Ember.get(this, 'intl').t('clusterDashboard.liveTitle', {
        total: (0, _parseUnit.formatSi)(total, 1024, 'iB', 'B', 0, (0, _parseUnit.exponentNeeded)(total), 1),
        used: (0, _parseUnit.formatSi)(used, 1024, '', '', 0, (0, _parseUnit.exponentNeeded)(total), 1).replace(/\s.*$/, '')
      });
    }),
    nodeCapcity: Ember.computed('nodes.@each.capacity', function () {
      const {
        nodes = []
      } = this;
      let out = {};
      nodes.map(n => {
        out[n.nodeName] = n.capacity;
      });
      return out;
    }),

    fetchMetrics() {
      if (Ember.get(this, 'isMonitoringReady')) {
        this.send('query');
      }
    },

    updateData(out) {
      const single = [];
      const graphs = [];
      out.map(item => {
        if ((Ember.get(item, 'series') || []).find(serie => Ember.get(serie, 'points.length') > 1)) {
          graphs.push(item);
        }
      });
      Ember.setProperties(this, {
        'state.noGraphs': Ember.get(graphs, 'length') === 0,
        graphs,
        single
      });
      const timeOutAnchor = setTimeout(() => {
        this.fetchMetrics();
      }, 30 * 1000);
      Ember.set(this, 'timeOutAnchor', timeOutAnchor);
    },

    getTotal(nodes) {
      let total = 0;
      nodes.map(node => {
        total += node.total;
      });
      return total;
    }

  });

  _exports.default = _default;
});
define("monitoring/components/nodes-live/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zzBNFY5+",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[10,\"div\"],[14,0,\"row percent-gauge-container\"],[12],[2,\"\\n\"],[6,[37,17],[[30,[36,16],[[35,15],[35,14]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"col span-4 mt-0 mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,9],null,[[\"value\",\"title\",\"subtitle\",\"ticks\",\"liveTitle\",\"live\",\"liveTicks\",\"maxValue\"],[[35,0,[\"percent\"]],[30,[36,1],[\"clusterDashboard.cpu\"],null],[35,0,[\"subtitle\"]],[35,0,[\"ticks\"]],[35,8],[35,7],[35,6],[35,5]]]]],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-4 mt-0 mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,9],null,[[\"value\",\"title\",\"subtitle\",\"ticks\",\"liveTitle\",\"live\",\"liveTicks\",\"maxValue\"],[[35,3,[\"percent\"]],[30,[36,1],[\"clusterDashboard.memory\"],null],[35,3,[\"subtitle\"]],[35,3,[\"ticks\"]],[35,13],[35,12],[35,11],[35,10]]]]],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-4 mt-0 mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"value\",\"title\",\"subtitle\",\"ticks\",\"mode\"],[[35,4,[\"percent\"]],[30,[36,1],[\"clusterDashboard.pods\"],null],[35,4,[\"subtitle\"]],[35,4,[\"ticks\"]],\"monitoring\"]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"col span-4 mt-0 mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"value\",\"title\",\"subtitle\",\"ticks\"],[[35,0,[\"percent\"]],[30,[36,1],[\"clusterDashboard.cpu\"],null],[35,0,[\"subtitle\"]],[35,0,[\"ticks\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-4 mt-0 mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"value\",\"title\",\"subtitle\",\"ticks\"],[[35,3,[\"percent\"]],[30,[36,1],[\"clusterDashboard.memory\"],null],[35,3,[\"subtitle\"]],[35,3,[\"ticks\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"div\"],[14,0,\"col span-4 mt-0 mb-0\"],[12],[2,\"\\n      \"],[1,[30,[36,2],null,[[\"value\",\"title\",\"subtitle\",\"ticks\"],[[35,4,[\"percent\"]],[30,[36,1],[\"clusterDashboard.pods\"],null],[35,4,[\"subtitle\"]],[35,4,[\"ticks\"]]]]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"cpuReservation\",\"t\",\"percent-gauge\",\"memoryReservation\",\"podUsage\",\"cpuTotalPercent\",\"cpuTicks\",\"cpuLive\",\"cpuLiveTitle\",\"used-percent-gauge\",\"memoryTotalPercent\",\"memoryTicks\",\"memoryLive\",\"meomoryLiveTitle\",\"isGotMetrics\",\"isMonitoringReady\",\"and\",\"if\"]}",
    "moduleName": "monitoring/components/nodes-live/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/components/nodes-reservation/component", ["exports", "shared/utils/parse-unit"], function (_exports, _parseUnit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    intl: Ember.inject.service(),
    nodes: null,
    showTicks: false,
    cpuReservation: Ember.computed('nodes.@each.{allocatable,requested}', 'intl.locale', function () {
      return this.getGauge('cpu', (u, t) => (0, _parseUnit.formatSi)(u, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(t), 1).replace(/\s.*$/, ''), t => (0, _parseUnit.formatSi)(t, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(t), 1), 'reserved');
    }),
    memoryReservation: Ember.computed('nodes.@each.{allocatable,requested}', 'intl.locale', function () {
      return this.getGauge('memory', (u, t) => (0, _parseUnit.formatSi)(u, 1024, '', '', 0, (0, _parseUnit.exponentNeeded)(t), 1).replace(/\s.*$/, ''), t => (0, _parseUnit.formatSi)(t, 1024, 'iB', 'B', 0, (0, _parseUnit.exponentNeeded)(t), 1), 'reserved');
    }),
    podUsage: Ember.computed('nodes.@each.{allocatable,requested}', 'intl.locale', function () {
      return this.getGauge('pods', (u, t) => (0, _parseUnit.formatSi)(u, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(Math.max(u, t)), 1).replace(/\s.*$/, ''), (t, u) => (0, _parseUnit.formatSi)(t, 1000, '', '', 0, (0, _parseUnit.exponentNeeded)(Math.max(u, t)), 1), 'used');
    }),

    getGauge(field, usedFormatCb, totalFormatCb, keyword) {
      const nodes = this.getNodes(field);
      const value = this.getValue(nodes);
      return {
        percent: value.percent,
        value: value.current,
        subtitle: this.getSubtitle(nodes, totalFormatCb, usedFormatCb, keyword),
        ticks: Ember.get(this, 'showTicks') ? this.getTicks(nodes) : []
      };
    },

    getTicks(nodes) {
      let filtered = [];

      if (nodes.length > 0) {
        const min = nodes[0].value;
        const max = nodes[nodes.length - 1].value;
        filtered = nodes.filter(node => node.value === min || node.value === max);
      }

      const ticks = [];
      filtered.forEach(node => {
        const found = ticks.find(tick => tick.value === Math.round(node.value));

        if (found) {
          found.labels.push(node.node.nodeName || node.node.requestedHostname);
        } else {
          ticks.push({
            value: Math.round(node.value),
            labels: [node.node.nodeName || node.node.requestedHostname]
          });
        }
      });
      return ticks;
    },

    getNodes(field) {
      return (this.get('nodes') || []).map(node => {
        const tValue = node.allocatable && node.allocatable[field] ? node.allocatable[field] : '0';
        const uValue = node.requested && node.requested[field] ? node.requested[field] : '0';
        let total = (0, _parseUnit.parseSi)(tValue);
        let used = (0, _parseUnit.parseSi)(uValue);

        if (isNaN(total) || isNaN(used)) {
          used = 0;
          total = 0;
        }

        let value = 0;

        if (total > 0) {
          value = used * 100 / total;
        }

        return {
          node,
          used,
          total,
          value
        };
      }).sortBy('value');
    },

    getValue(nodes) {
      let used = 0;
      let total = 0;
      nodes.forEach(node => {
        total += node.total;
        used += node.used;
      });
      const value = Math.round(used * 100 / total);
      return {
        percent: isNaN(value) ? 0 : value,
        current: used
      };
    },

    getSubtitle(nodes, totalCb, usedCb, keyword) {
      let used = 0;
      let total = 0;
      nodes.forEach(node => {
        total += node.total;
        used += node.used;
      });
      return this.get('intl').t(`clusterDashboard.subtitle.${keyword}`, {
        used: usedCb ? (usedCb(used, total) || '').trim() : used,
        total: totalCb ? (totalCb(total, used) || '').trim() : total
      });
    }

  });

  _exports.default = _default;
});
define.alias("shared/components/outside-click/component", "monitoring/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "monitoring/components/page-numbers");
define.alias("shared/components/page-numbers/component", "monitoring/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "monitoring/components/percent-gauge/component");
define.alias("shared/components/pretty-json/component", "monitoring/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "monitoring/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "monitoring/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "monitoring/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "monitoring/components/radio-button/component");
define("monitoring/components/rancher-metrics/component", ["exports", "shared/mixins/metrics", "monitoring/components/rancher-metrics/template"], function (_exports, _metrics, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_metrics.default, {
    layout: _template.default,
    filters: {
      displayResourceType: 'rancher-component'
    }
  });

  _exports.default = _default;
});
define("monitoring/components/rancher-metrics/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "SwlRauuO",
    "block": "{\"symbols\":[],\"statements\":[[10,\"section\"],[12],[2,\"\\n  \"],[1,[30,[36,2],null,[[\"queryAction\",\"state\"],[[30,[36,1],[[32,0],\"query\"],null],[35,0]]]]],[2,\"\\n\\n  \"],[1,[30,[36,4],null,[[\"graphs\",\"loading\",\"noGraphs\",\"noDataLabel\"],[[35,3],[35,0,[\"loading\"]],[35,0,[\"noGraphs\"]],\"clusterDashboard.noRancherComponents\"]]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"state\",\"action\",\"metrics-action\",\"graphs\",\"metrics-graph\"]}",
    "moduleName": "monitoring/components/rancher-metrics/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/resource-condition-list/component", "monitoring/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "monitoring/components/resource-event-list/component");
define.alias("shared/components/run-scan-modal/component", "monitoring/components/run-scan-modal/component");
define.alias("shared/components/save-cancel/component", "monitoring/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "monitoring/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "monitoring/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "monitoring/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "monitoring/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "monitoring/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "monitoring/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "monitoring/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "monitoring/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "monitoring/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "monitoring/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "monitoring/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "monitoring/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "monitoring/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "monitoring/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "monitoring/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "monitoring/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "monitoring/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "monitoring/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "monitoring/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "monitoring/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "monitoring/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "monitoring/components/search-text/component");
define.alias("shared/components/searchable-select/component", "monitoring/components/searchable-select/component");
define.alias("shared/components/select-value-check/component", "monitoring/components/select-value-check/component");
define.alias("shared/components/settings-overridable-banner/component", "monitoring/components/settings-overridable-banner/component");
define.alias("shared/components/settings/danger-zone/component", "monitoring/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "monitoring/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "monitoring/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "monitoring/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "monitoring/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "monitoring/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "monitoring/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "monitoring/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "monitoring/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "monitoring/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "monitoring/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "monitoring/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "monitoring/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "monitoring/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-local-storage/component", "monitoring/components/storage-class/provisioner-local-storage/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "monitoring/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "monitoring/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "monitoring/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "monitoring/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "monitoring/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "monitoring/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "monitoring/components/storage-class/provisioner-vsphere-volume/component");
define("monitoring/components/system-info-section/component", ["exports", "monitoring/components/system-info-section/template"], function (_exports, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const CONTAINERD = 'containerd://';

  var _default = Ember.Component.extend({
    layout: _template.default,
    node: null,
    sortBy: 'key',
    descending: false,
    labelArray: null,
    headers: [{
      name: 'key',
      sort: ['key'],
      translationKey: 'systemInfoSection.key'
    }, {
      name: 'value',
      sort: ['value', 'key'],
      translationKey: 'systemInfoSection.value'
    }],

    didReceiveAttrs() {
      const labelArray = this.getSystemInfoArray();
      Ember.set(this, 'labelArray', labelArray);
    },

    annotationsObserver: Ember.observer('node', function () {
      const labelArray = this.getSystemInfoArray();
      Ember.set(this, 'labelArray', labelArray);
    }),

    getSystemInfoArray() {
      const array = [];
      const node = Ember.get(this, 'node');
      const info = Ember.get(node, 'info');
      const kubernetes = Ember.get(info, 'kubernetes');
      const os = Ember.get(info, 'os');
      const arch = (Ember.get(node, 'labels') || {})['beta.kubernetes.io/arch'];
      const osType = (Ember.get(node, 'labels') || {})['beta.kubernetes.io/os'];

      if (kubernetes) {
        array.push({
          key: 'systemInfoSection.kubeProxyVersion',
          value: Ember.get(kubernetes, 'kubeProxyVersion')
        });
        array.push({
          key: 'systemInfoSection.kubeletVersion',
          value: Ember.get(kubernetes, 'kubeletVersion')
        });
      }

      if (os) {
        array.push({
          key: (os.dockerVersion || '').startsWith(CONTAINERD) ? 'systemInfoSection.containerDVersion' : 'systemInfoSection.dockerVersion',
          value: node.versionBlurb
        });
        array.push({
          key: 'systemInfoSection.kernelVersion',
          value: Ember.get(os, 'kernelVersion')
        });
        array.push({
          key: 'systemInfoSection.operatingSystem',
          value: Ember.get(os, 'operatingSystem')
        });
      }

      if (arch) {
        array.push({
          key: 'systemInfoSection.arch',
          value: arch
        });
      }

      if (osType) {
        array.push({
          key: 'systemInfoSection.osType',
          value: osType
        });
      }

      return array;
    }

  });

  _exports.default = _default;
});
define("monitoring/components/system-info-section/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ceujv/sO",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"label\"],\"statements\":[[6,[37,12],null,[[\"title\",\"detail\",\"statusClass\",\"expandAll\",\"expand\",\"componentName\"],[[30,[36,0],[\"systemInfoSection.title\"],null],[30,[36,0],[\"systemInfoSection.detail\"],null],[30,[36,2],[[35,4,[\"length\"]],\"bg-success\",\"text-muted\"],null],[35,11],[30,[36,10],[[32,0],[35,9]],null],\"sortable-table\"]],[[\"default\"],[{\"statements\":[[6,[37,8],[[32,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[35,7],false,[35,6],[35,5],[35,4]]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"systemInfoSection.key\"],null],\":\"]]],[14,0,\"force-wrap\"],[12],[1,[30,[36,0],[[32,4,[\"key\"]]],null]],[13],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"systemInfoSection.value\"],null],\":\"]]],[14,0,\"force-wrap\"],[12],[1,[30,[36,3],null,[[\"value\"],[[32,4,[\"value\"]]]]]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"norows\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[1,[30,[36,0],[\"systemInfoSection.noData\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"nomatch\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[1,[30,[36,0],[\"systemInfoSection.noMatch\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[2,3,4]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"eq\",\"if\",\"pretty-json\",\"labelArray\",\"headers\",\"descending\",\"sortBy\",\"component\",\"expandFn\",\"action\",\"expandAll\",\"accordion-list-item\"]}",
    "moduleName": "monitoring/components/system-info-section/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/table-labels/component", "monitoring/components/table-labels/component");
define("monitoring/components/taints-section/component", ["exports", "shared/mixins/manage-labels", "monitoring/components/taints-section/template"], function (_exports, _manageLabels, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend(_manageLabels.default, {
    layout: _template.default,
    sortBy: 'key',
    descending: false,
    headers: [{
      name: 'key',
      sort: ['key'],
      translationKey: 'taintsSection.key',
      width: 200
    }, {
      name: 'value',
      sort: ['value'],
      translationKey: 'taintsSection.value',
      width: 200
    }, {
      name: 'effect',
      sort: ['effect'],
      translationKey: 'taintsSection.effect',
      width: 200
    }]
  });

  _exports.default = _default;
});
define("monitoring/components/taints-section/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OgVAP8I4",
    "block": "{\"symbols\":[\"parent\",\"sortable\",\"kind\",\"row\"],\"statements\":[[6,[37,12],null,[[\"title\",\"detail\",\"expandAll\",\"expand\",\"componentName\"],[[30,[36,0],[\"taintsSection.title\"],null],[30,[36,0],[\"taintsSection.detail\"],[[\"resourceType\"],[[35,11]]]],[35,10],[30,[36,9],[[32,0],[35,8]],null],\"sortable-table\"]],[[\"default\"],[{\"statements\":[[6,[37,7],[[32,1,[\"intent\"]]],[[\"classNames\",\"bulkActions\",\"rowActions\",\"paging\",\"search\",\"sortBy\",\"stickyHeader\",\"descending\",\"headers\",\"body\"],[\"grid fixed mb-0 sortable-table\",false,false,false,true,[35,6],false,[35,5],[35,4],[35,3]]],[[\"default\"],[{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"row\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"annotationsSection.key\"],null]]]],[12],[1,[32,4,[\"key\"]]],[13],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"annotationsSection.value\"],null]]]],[12],[1,[32,4,[\"value\"]]],[13],[2,\"\\n        \"],[10,\"td\"],[15,\"data-title\",[31,[[30,[36,0],[\"annotationsSection.effect\"],null]]]],[12],[1,[32,4,[\"effect\"]]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"norows\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[1,[30,[36,0],[\"taintsSection.noData\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[32,3],\"nomatch\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"tr\"],[12],[2,\"\\n        \"],[10,\"td\"],[15,\"colspan\",[31,[[32,2,[\"fullColspan\"]]]]],[14,0,\"text-center text-muted pt-20 pb-20\"],[12],[1,[30,[36,0],[\"taintsSection.noMatch\"],null]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[2,3,4]}]]]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"t\",\"eq\",\"if\",\"taints\",\"headers\",\"descending\",\"sortBy\",\"component\",\"expandFn\",\"action\",\"expandAll\",\"resourceType\",\"accordion-list-item\"]}",
    "moduleName": "monitoring/components/taints-section/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/textarea-autogrow/component", "monitoring/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "monitoring/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "monitoring/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "monitoring/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "monitoring/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-node-group-update/component", "monitoring/components/tooltip-node-group-update/component");
define.alias("shared/components/tooltip-toggle-override/component", "monitoring/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "monitoring/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "monitoring/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "monitoring/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "monitoring/components/used-percent-gauge/component");
define("monitoring/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'monitoring/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "monitoring/cookies/service");
define.alias("shared/digital-ocean/service", "monitoring/digital-ocean/service");
define.alias("shared/endpoint/service", "monitoring/endpoint/service");
define("monitoring/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "monitoring/resolver", "monitoring/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'grafana', 'intl', 'scope', 'store', 'session', 'modal', 'globalStore', 'router', 'k8s', 'clusterStore', 'tooltip'],
      externalRoutes: []
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "monitoring/features/service");
define.alias("shared/google/service", "monitoring/google/service");
define.alias("shared/grafana/service", "monitoring/grafana/service");
define.alias("shared/growl/service", "monitoring/growl/service");
define.alias("ember-element-helper/helpers/-element", "monitoring/helpers/-element");
define.alias("ember-math-helpers/helpers/abs", "monitoring/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "monitoring/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "monitoring/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "monitoring/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "monitoring/helpers/and");
define.alias("shared/helpers/array-includes", "monitoring/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "monitoring/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "monitoring/helpers/asinh");
define.alias("ember-math-helpers/helpers/atan", "monitoring/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "monitoring/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "monitoring/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "monitoring/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "monitoring/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "monitoring/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "monitoring/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "monitoring/helpers/cosh");
define.alias("shared/helpers/date-calendar", "monitoring/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "monitoring/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "monitoring/helpers/date-recent");
define.alias("shared/helpers/date-str", "monitoring/helpers/date-str");
define.alias("shared/helpers/default-str", "monitoring/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "monitoring/helpers/div");
define.alias("shared/helpers/driver-name", "monitoring/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "monitoring/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "monitoring/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "monitoring/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "monitoring/helpers/floor");
define.alias("ember-intl/helpers/format-date", "monitoring/helpers/format-date");
define.alias("shared/helpers/format-ip", "monitoring/helpers/format-ip");
define.alias("ember-intl/helpers/format-message", "monitoring/helpers/format-message");
define.alias("shared/helpers/format-mib", "monitoring/helpers/format-mib");
define.alias("ember-intl/helpers/format-number", "monitoring/helpers/format-number");
define.alias("ember-intl/helpers/format-relative", "monitoring/helpers/format-relative");
define.alias("shared/helpers/format-si", "monitoring/helpers/format-si");
define.alias("ember-intl/helpers/format-time", "monitoring/helpers/format-time");
define.alias("ember-math-helpers/helpers/fround", "monitoring/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "monitoring/helpers/gcd");
define.alias("shared/helpers/get-card-class", "monitoring/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "monitoring/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "monitoring/helpers/gte");
define.alias("shared/helpers/has-override", "monitoring/helpers/has-override");
define.alias("ember-href-to/helpers/href-to", "monitoring/helpers/href-to");
define.alias("ember-math-helpers/helpers/hypot", "monitoring/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "monitoring/helpers/imul");
define.alias("ember-truth-helpers/helpers/is-array", "monitoring/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "monitoring/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "monitoring/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "monitoring/helpers/is-equal");
define.alias("shared/helpers/join-array", "monitoring/helpers/join-array");
define.alias("ember-math-helpers/helpers/lcm", "monitoring/helpers/lcm");
define.alias("liquid-fire/helpers/lf-lock-model", "monitoring/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "monitoring/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "monitoring/helpers/link-ssl-domain");
define("monitoring/helpers/linkify", ["exports", "linkifyjs/string", "shared/helpers/linkify"], function (_exports, _string, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "monitoring/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "monitoring/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "monitoring/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "monitoring/helpers/log2");
define.alias("shared/helpers/lower-case", "monitoring/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "monitoring/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "monitoring/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "monitoring/helpers/max");
define.alias("ember-math-helpers/helpers/min", "monitoring/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "monitoring/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "monitoring/helpers/mult");
define.alias("shared/helpers/nl-to-br", "monitoring/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "monitoring/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "monitoring/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "monitoring/helpers/or");
define.alias("shared/helpers/parse-camelcase", "monitoring/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "monitoring/helpers/pow");
define.alias("shared/helpers/pretty-cron", "monitoring/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "monitoring/helpers/random");
define.alias("shared/helpers/rbac-allows", "monitoring/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "monitoring/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "monitoring/helpers/round");
define.alias("shared/helpers/run-time", "monitoring/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "monitoring/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "monitoring/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "monitoring/helpers/sqrt");
define.alias("shared/helpers/str-replace", "monitoring/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "monitoring/helpers/sub");
define.alias("ember-intl/helpers/t", "monitoring/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "monitoring/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "monitoring/helpers/tanh");
define.alias("shared/helpers/to-json", "monitoring/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "monitoring/helpers/trunc");
define.alias("shared/helpers/uc-first", "monitoring/helpers/uc-first");
define.alias("shared/helpers/upper-case", "monitoring/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "monitoring/helpers/xor");
define.alias("shared/host/service", "monitoring/host/service");
define("monitoring/index/controller", ["exports", "shared/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const BANNER_NAME = 'dashboard-explorer';

  var _default = Ember.Controller.extend({
    modalService: Ember.inject.service('modal'),
    scope: Ember.inject.service(),
    k8s: Ember.inject.service(),
    prefs: Ember.inject.service(),
    cluster: Ember.computed.alias('scope.currentCluster'),
    CurrentScope: Ember.computed('scope.currentCluster.id', function () {
      var currentClusterId = Ember.get(this, 'scope.currentCluster.id');
      var myClusterRoleBinding = Ember.get(this, 'scope.access.me.clusterRoleBindings.[]');
      var result = false;

      if (Ember.get(this, 'scope.access.admin')) {
        result = true;
      } else {
        var standard = false;
        var custom_user = false;

        for (var num = 0; num < myClusterRoleBinding.length; num++) {
          if (currentClusterId == myClusterRoleBinding[num].clusterId) {
            var sameBinding = myClusterRoleBinding[num].roleTemplate.roleTemplateIds;
            var id = myClusterRoleBinding[num].roleTemplate.id;

            if (sameBinding) {
              if (sameBinding.indexOf("cluster-owner") != -1) custom_user = true;
            }
          }

          if (id) {
            if (id == "cluster-owner") standard = true;
          }
        }

        if (standard || custom_user) {
          result = true;
        } else {
          result = false;
        }
      }

      return result;
    }),
    showAzureRBACWarning: Ember.computed.equal('cluster.aksStatus.rbacEnabled', false),
    actions: {
      kubectl() {
        this.get('modalService').toggleModal('modal-kubectl', {});
      },

      kubeconfig() {
        this.get('modalService').toggleModal('modal-kubeconfig', {
          escToClose: true
        });
      },

      weave() {
        var weaveURL = Ember.get(this, 'scope.currentCluster.id');
        window.open("/k8s/clusters/" + weaveURL + "/api/v1/namespaces/default/services/weave-scope-app:80/proxy/");
      },

      closeBanner() {
        const key = `prefs.${_constants.default.PREFS.CLOSED_BANNER}`;
        const closed = Ember.get(this, key) || [];
        closed.addObject(BANNER_NAME);
        Ember.set(this, key, closed);
      }

    },
    currentClusterNodes: Ember.computed('model.nodes.@each.{allocatable,capacity,isUnschedulable,state}', 'scope.currentCluster.id', function () {
      const clusterId = Ember.get(this, 'scope.currentCluster.id');
      return Ember.get(this, 'model.nodes').filter(n => n.clusterId === clusterId && !n.isUnschedulable);
    }),
    showBanner: Ember.computed(`prefs.${_constants.default.PREFS.CLOSED_BANNER}`, function () {
      const closed = Ember.get(this, `prefs.${_constants.default.PREFS.CLOSED_BANNER}`) || [];
      const embedded = window !== window.top;
      return !embedded && !closed.includes(BANNER_NAME);
    })
  });

  _exports.default = _default;
});
define("monitoring/index/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),
    session: Ember.inject.service(),

    model() {
      const store = Ember.get(this, 'globalStore');
      const cluster = Ember.get(this, 'scope.currentCluster');
      const project = Ember.get(cluster, 'systemProject');
      let fetchApps = [];

      if (project && Ember.get(cluster, 'enableClusterMonitoring')) {
        fetchApps = store.rawRequest({
          url: `/v3/project/${Ember.get(project, 'id')}/apps`,
          method: 'GET'
        }).then(res => {
          const out = [];
          const apps = Ember.get(res, 'body.data') || [];
          const clusterApp = apps.findBy('name', 'cluster-monitoring');
          const operatorApp = apps.findBy('name', 'monitoring-operator');

          if (clusterApp) {
            out.push(store.createRecord(clusterApp));
          }

          if (operatorApp) {
            out.push(store.createRecord(operatorApp));
          }

          return out;
        });
      }

      return Ember.RSVP.hash({
        apps: fetchApps,
        nodes: Ember.get(this, 'globalStore').findAll('node')
      });
    },

    afterModel() {
      return Ember.RSVP.hash(Ember.get(this, 'globalStore').findAll('clusterTemplateRevision'), Ember.get(this, 'globalStore').findAll('clusterTemplate'));
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, `session.${_constants.default.SESSION.CLUSTER_ROUTE}`, 'authenticated.cluster.monitoring.index');
    })
  });

  _exports.default = _default;
});
define("monitoring/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "23SOn/jQ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"section\"],[14,0,\"header hide-when-embedded\"],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[1,[30,[36,0],[\"clusterDashboard.title\"],null]],[2,\": \"],[1,[35,1,[\"displayName\"]]],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n\"],[6,[37,7],[[35,6]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"button\"],[14,0,\"btn bg-primary btn-sm icon-btn ml-10\"],[15,\"disabled\",[30,[36,4],[[35,1,[\"isReady\"]]],null]],[15,\"onclick\",[30,[36,5],[[32,0],\"weave\"],null]],[14,4,\"button\"],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"darken\"],[12],[2,\"\\n          \"],[10,\"i\"],[14,0,\"icon icon-weave\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"span\"],[12],[2,\"Topology\"],[13],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[10,\"button\"],[14,0,\"btn bg-primary\"],[15,\"disabled\",[30,[36,4],[[35,1,[\"isReady\"]]],null]],[15,\"onClick\",[30,[36,5],[[32,0],\"kubectl\"],[[\"allowedKeys\"],[\"meta\"]]]],[14,4,\"button\"],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"icon icon-terminal\"],[12],[13],[2,\"\\n      \"],[10,\"span\"],[12],[1,[30,[36,0],[\"k8sPage.shell.button\"],null]],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[11,\"button\"],[24,0,\"btn bg-primary\"],[16,\"disabled\",[30,[36,4],[[35,1,[\"isReady\"]]],null]],[24,4,\"button\"],[4,[38,5],[[32,0],\"kubeconfig\"],null],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"icon icon-file\"],[12],[13],[2,\"\\n      \"],[10,\"span\"],[12],[1,[30,[36,0],[\"k8sPage.configFile.button\"],null]],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[1,[30,[36,8],null,[[\"size\",\"classNames\",\"model\"],[\"sm\",\"pull-right\",[35,1]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,7],[[35,1,[\"description\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"row mb-30 hide-when-embedded\"],[12],[2,\"\\n    \"],[1,[30,[36,3],null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[30,[36,2],[[35,1,[\"description\"]]],null]]]]],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,7],[[35,9]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[8,\"banner-message\",[],[[\"@color\",\"@icon\",\"@message\"],[\"bg-warning\",\"icon-alert\",[30,[36,0],[\"clusterNew.azureaks.rbacWarning\"],null]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"section\"],[12],[2,\"\\n  \"],[1,[30,[36,12],null,[[\"apps\",\"cluster\",\"nodes\"],[[35,11,[\"apps\"]],[35,1],[35,10]]]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"cluster\",\"linkify\",\"banner-message\",\"not\",\"action\",\"CurrentScope\",\"if\",\"action-menu\",\"showAzureRBACWarning\",\"currentClusterNodes\",\"model\",\"cluster-dashboard\"]}",
    "moduleName": "monitoring/index/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("monitoring/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
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
define("monitoring/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
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
define.alias("shared/istio/service", "monitoring/istio/service");
define.alias("shared/k8s/service", "monitoring/k8s/service");
define.alias("shared/linode/service", "monitoring/linode/service");
define.alias("shared/mixins/cattle-transitioning-resource", "monitoring/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "monitoring/mixins/console");
define.alias("shared/mixins/container-choices", "monitoring/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "monitoring/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "monitoring/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "monitoring/mixins/filter-state");
define.alias("shared/mixins/grafana", "monitoring/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "monitoring/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "monitoring/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "monitoring/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "monitoring/mixins/manage-labels");
define.alias("shared/mixins/metrics", "monitoring/mixins/metrics");
define.alias("shared/mixins/modal-base", "monitoring/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "monitoring/mixins/new-or-edit");
define.alias("shared/mixins/preload", "monitoring/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "monitoring/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "monitoring/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "monitoring/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "monitoring/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "monitoring/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "monitoring/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "monitoring/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "monitoring/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "monitoring/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "monitoring/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "monitoring/mixins/upgrade-component");
define.alias("shared/mixins/upload", "monitoring/mixins/upload");
define.alias("shared/modal/service", "monitoring/modal/service");
define.alias("@ember/render-modifiers/modifiers/did-insert", "monitoring/modifiers/did-insert");
define.alias("@ember/render-modifiers/modifiers/did-update", "monitoring/modifiers/did-update");
define.alias("@ember/render-modifiers/modifiers/will-destroy", "monitoring/modifiers/will-destroy");
define("monitoring/node-detail/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),

    model(params) {
      return Ember.get(this, 'globalStore').find('node', params.node_id).then(node => ({
        node,
        nodes: [node]
      }));
    }

  });

  _exports.default = _default;
});
define("monitoring/node-detail/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TdqrAbg/",
    "block": "{\"symbols\":[\"role\"],\"statements\":[[10,\"section\"],[14,0,\"header\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"pull-left\"],[12],[2,\"\\n    \"],[10,\"h1\"],[14,0,\"vertical-middle\"],[12],[2,\"\\n      \"],[1,[30,[36,3],[\"hostsPage.hostPage.header.title\"],[[\"name\"],[[35,0,[\"node\",\"displayName\"]]]]]],[1,[30,[36,4],null,[[\"clipboardText\",\"size\"],[[35,0,[\"node\",\"displayName\"]],\"small\"]]]],[2,\"\\n    \"],[13],[2,\"\\n\"],[6,[37,6],[[30,[36,5],[[30,[36,5],[[35,0,[\"node\",\"displayRoles\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"span\"],[14,0,\"badge badge-xs vertical-middle bg-info\"],[12],[2,\"\\n        \"],[1,[32,1]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"right-buttons\"],[12],[2,\"\\n    \"],[1,[30,[36,7],null,[[\"model\"],[[35,0,[\"node\"]]]]]],[2,\"\\n    \"],[1,[30,[36,8],null,[[\"model\",\"showPrimary\",\"classNames\",\"size\"],[[35,0,[\"node\"]],false,\"ml-10 inline-block\",\"sm\"]]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,9],[[35,0,[\"node\",\"description\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[1,[30,[36,2],null,[[\"color\",\"message\"],[\"bg-secondary mb-0 mt-10\",[30,[36,1],[[35,0,[\"node\",\"description\"]]],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[1,[30,[36,10],null,[[\"model\"],[[35,0]]]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"model\",\"linkify\",\"banner-message\",\"t\",\"copy-to-clipboard\",\"-track-array\",\"each\",\"badge-state\",\"action-menu\",\"if\",\"node-dashboard\"]}",
    "moduleName": "monitoring/node-detail/template.hbs"
  });

  _exports.default = _default;
});
define("monitoring/node-graphs/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    scope: Ember.inject.service(),
    router: Ember.inject.service()
  });

  _exports.default = _default;
});
define("monitoring/node-graphs/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    globalStore: Ember.inject.service(),
    scope: Ember.inject.service(),

    model(params) {
      return Ember.get(this, 'globalStore').find('node', params.node_id).then(node => ({
        node,
        nodes: [node]
      }));
    },

    actions: {
      goToGrafana(grafanaUrl) {
        window.open(grafanaUrl, '_blank');
      }

    }
  });

  _exports.default = _default;
});
define("monitoring/node-graphs/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "falNam2m",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,5],[[35,4,[\"currentCluster\",\"isMonitoringReady\"]]],null,[[\"default\"],[{\"statements\":[[11,\"div\"],[24,0,\"pull-right grafana-link\"],[24,5,\"cursor: pointer;\"],[4,[38,1],[[32,0],\"goToGrafana\",[35,0,[\"node\",\"grafanaUrl\"]]],[[\"bubbles\"],[false]]],[12],[2,\"\\n  \"],[10,\"div\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"inline-block vertical-middle grafana\"],[12],[13],[2,\"\\n    \"],[10,\"span\"],[14,0,\"vertical-middle text-muted\"],[12],[1,[30,[36,2],[\"metricsAction.grafana.label\"],null]],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"mb-20 clearfix\"],[12],[13],[2,\"\\n\\n\"],[1,[30,[36,3],null,[[\"resourceId\"],[[35,0,[\"node\",\"id\"]]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"model\",\"action\",\"t\",\"node-metrics\",\"scope\",\"if\"]}",
    "moduleName": "monitoring/node-graphs/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/oauth/service", "monitoring/oauth/service");
define.alias("shared/oci/service", "monitoring/oci/service");
define.alias("shared/pipeline-github/service", "monitoring/pipeline-github/service");
define.alias("shared/pnap/service", "monitoring/pnap/service");
define.alias("shared/prefs/service", "monitoring/prefs/service");
define("monitoring/project-setting/route", ["exports", "ui/utils/constants"], function (_exports, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    clusterStore: Ember.inject.service(),

    async model() {
      const store = Ember.get(this, 'store');
      const namespaces = await this.clusterStore.findAll('namespace');
      const cattleMonitoringNamespaceExists = namespaces.any(ns => ns.id === 'cattle-monitoring-system');
      const apps = await store.find('app', null, {
        forceReload: true
      });
      const out = [];
      const projectApp = apps.findBy('name', 'project-monitoring');

      if (projectApp) {
        out.push(projectApp);
      }

      return {
        apps: out,
        cattleMonitoringNamespaceExists
      };
    },

    setDefaultRoute: Ember.on('activate', function () {
      Ember.set(this, `session.${_constants.default.SESSION.PROJECT_ROUTE}`, 'authenticated.project.monitoring.project-setting');
    })
  });

  _exports.default = _default;
});
define("monitoring/project-setting/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XOfGlMaX",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],null,[[\"apps\",\"level\",\"showMonitoringV2Warning\"],[[35,0,[\"apps\"]],\"project\",[35,0,[\"cattleMonitoringNamespaceExists\"]]]]]]],\"hasEval\":false,\"upvars\":[\"model\",\"enable-monitoring\"]}",
    "moduleName": "monitoring/project-setting/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/release-versions/service", "monitoring/release-versions/service");
define("monitoring/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "monitoring/resource-actions/service");
define.alias("shared/role-template/service", "monitoring/role-template/service");
define("monitoring/routes", ["exports", "ember-engines/routes"], function (_exports, _routes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _routes.default)(function () {
    // Define your engine's route map here
    this.route('index', {
      path: '/'
    });
    this.route('cluster-setting');
    this.route('project-setting');
    this.route('node-detail', {
      path: '/:node_id'
    }); // Node metrics view for embedding in Cluster Dashboard

    this.route('node-graphs', {
      path: '/:node_id/metrics'
    });
  });

  _exports.default = _default;
});
define.alias("shared/saml/service", "monitoring/saml/service");
define.alias("shared/scope/service", "monitoring/scope/service");
define.alias("shared/security-scan-config/service", "monitoring/security-scan-config/service");
define.alias("ivy-codemirror/services/code-mirror", "monitoring/services/code-mirror");
define("monitoring/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define.alias("ember-intl/services/intl", "monitoring/services/intl");
define("monitoring/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "monitoring/session/service");
define.alias("shared/settings/service", "monitoring/settings/service");
define.alias("shared/shibboleth-auth/service", "monitoring/shibboleth-auth/service");
define.alias("shared/store-reset/service", "monitoring/store-reset/service");
define.alias("shared/tab-session/service", "monitoring/tab-session/service");
define("monitoring/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NX5I9tgG",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "monitoring/templates/application.hbs"
  });

  _exports.default = _default;
});
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-content", "monitoring/templates/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-trigger", "monitoring/templates/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown", "monitoring/templates/components/basic-dropdown");
define.alias("shared/tooltip/service", "monitoring/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "monitoring/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "monitoring/transitions/default");
define.alias("liquid-fire/transitions/explode", "monitoring/transitions/explode");
define.alias("liquid-fire/transitions/fade", "monitoring/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "monitoring/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "monitoring/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "monitoring/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "monitoring/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "monitoring/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "monitoring/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "monitoring/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "monitoring/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "monitoring/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "monitoring/transitions/wait");
define.alias("shared/user-language/service", "monitoring/user-language/service");
define.alias("shared/user-theme/service", "monitoring/user-theme/service");
define.alias("shared/utils/add-view-action", "monitoring/utils/add-view-action");
define.alias("shared/utils/additional-routes", "monitoring/utils/additional-routes");
define.alias("shared/utils/azure-choices", "monitoring/utils/azure-choices");
define.alias("shared/utils/browser-storage", "monitoring/utils/browser-storage");
define.alias("ember-basic-dropdown/utils/calculate-position", "monitoring/utils/calculate-position");
define.alias("shared/utils/constants", "monitoring/utils/constants");
define.alias("shared/utils/convert-yaml", "monitoring/utils/convert-yaml");
define.alias("shared/utils/debounce", "monitoring/utils/debounce");
define.alias("shared/utils/download-files", "monitoring/utils/download-files");
define.alias("shared/utils/errors", "monitoring/utils/errors");
define.alias("shared/utils/fetch-yaml", "monitoring/utils/fetch-yaml");
define("monitoring/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "monitoring/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "monitoring/utils/group-compound-layout");
define.alias("shared/utils/intl/missing-message", "monitoring/utils/intl/missing-message");
define.alias("shared/utils/load-script", "monitoring/utils/load-script");
define.alias("shared/utils/multi-stats", "monitoring/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "monitoring/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "monitoring/utils/parse-externalid");
define.alias("shared/utils/parse-port", "monitoring/utils/parse-port");
define.alias("shared/utils/parse-target", "monitoring/utils/parse-target");
define.alias("shared/utils/parse-unit", "monitoring/utils/parse-unit");
define.alias("shared/utils/parse-uri", "monitoring/utils/parse-uri");
define.alias("shared/utils/parse-version", "monitoring/utils/parse-version");
define.alias("shared/utils/percent-gauge", "monitoring/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "monitoring/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "monitoring/utils/pipelineStep");
define.alias("shared/utils/platform", "monitoring/utils/platform");
define.alias("shared/utils/queue", "monitoring/utils/queue");
define.alias("shared/utils/rackspace-choices", "monitoring/utils/rackspace-choices");
define.alias("shared/utils/search-text", "monitoring/utils/search-text");
define.alias("shared/utils/socket", "monitoring/utils/socket");
define.alias("shared/utils/sort", "monitoring/utils/sort");
define.alias("shared/utils/traffic-renderer", "monitoring/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "monitoring/utils/used-percent-gauge");
define.alias("shared/utils/util", "monitoring/utils/util");
define.alias("shared/version-choices/service", "monitoring/version-choices/service");//# sourceMappingURL=engine.map
