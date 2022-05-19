define.alias("shared/access/service", "login/access/service");
define.alias("shared/all-dns-records/service", "login/all-dns-records/service");
define.alias("shared/all-storage-classes/service", "login/all-storage-classes/service");
define.alias("shared/all-workloads/service", "login/all-workloads/service");
define.alias("shared/amazon/util", "login/amazon/util");
define.alias("shared/azure-ad/service", "login/azure-ad/service");
define.alias("shared/bulk-action-handler/service", "login/bulk-action-handler/service");
define.alias("shared/calculate-position/util", "login/calculate-position/util");
define.alias("shared/capabilities/service", "login/capabilities/service");
define.alias("shared/catalog/service", "login/catalog/service");
define.alias("shared/cis-helpers/service", "login/cis-helpers/service");
define.alias("shared/cluster-templates/service", "login/cluster-templates/service");
define.alias("shared/code-mirror/service", "login/code-mirror/service");
define.alias("@glimmer/component/-private/ember-component-manager", "login/component-managers/glimmer");
define("login/components/-dynamic-element-alt", ["exports"], function (_exports) {
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
define("login/components/-dynamic-element", ["exports"], function (_exports) {
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
define.alias("liquid-fire/components/-lf-get-outlet-state", "login/components/-lf-get-outlet-state");
define.alias("shared/components/accordion-list-item/component", "login/components/accordion-list-item/component");
define.alias("shared/components/accordion-list/component", "login/components/accordion-list/component");
define.alias("shared/components/action-menu-item/component", "login/components/action-menu-item/component");
define.alias("shared/components/action-menu/component", "login/components/action-menu/component");
define.alias("shared/components/advanced-section/component", "login/components/advanced-section/component");
define.alias("shared/components/aks-node-pool-row/component", "login/components/aks-node-pool-row/component");
define.alias("shared/components/annotations-section/component", "login/components/annotations-section/component");
define.alias("shared/components/answer-override-row/component", "login/components/answer-override-row/component");
define.alias("shared/components/api-field/component", "login/components/api-field/component");
define.alias("shared/components/apikey-row/component", "login/components/apikey-row/component");
define.alias("shared/components/authorized-endpoint/component", "login/components/authorized-endpoint/component");
define.alias("shared/components/badge-state/component", "login/components/badge-state/component");
define.alias("shared/components/banner-message/component", "login/components/banner-message/component");
define.alias("ember-basic-dropdown/components/basic-dropdown-content", "login/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/components/basic-dropdown-trigger", "login/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/components/basic-dropdown", "login/components/basic-dropdown");
define.alias("shared/components/btn-toggle/component", "login/components/btn-toggle/component");
define.alias("shared/components/catalog-box/component", "login/components/catalog-box/component");
define.alias("shared/components/catalog-index/component", "login/components/catalog-index/component");
define.alias("shared/components/catalog-persistence-row/component", "login/components/catalog-persistence-row/component");
define.alias("shared/components/check-box/component", "login/components/check-box/component");
define.alias("shared/components/check-computed-override/component", "login/components/check-computed-override/component");
define.alias("shared/components/check-override-allowed/component", "login/components/check-override-allowed/component");
define.alias("shared/components/cluster-driver/driver-aks/component", "login/components/cluster-driver/driver-aks/component");
define.alias("shared/components/cluster-driver/driver-amazoneks/component", "login/components/cluster-driver/driver-amazoneks/component");
define.alias("shared/components/cluster-driver/driver-azureaks/component", "login/components/cluster-driver/driver-azureaks/component");
define.alias("shared/components/cluster-driver/driver-eks/component", "login/components/cluster-driver/driver-eks/component");
define.alias("shared/components/cluster-driver/driver-gke/component", "login/components/cluster-driver/driver-gke/component");
define.alias("shared/components/cluster-driver/driver-googlegke/component", "login/components/cluster-driver/driver-googlegke/component");
define.alias("shared/components/cluster-driver/driver-huaweicce/component", "login/components/cluster-driver/driver-huaweicce/component");
define.alias("shared/components/cluster-driver/driver-import-aks/component", "login/components/cluster-driver/driver-import-aks/component");
define.alias("shared/components/cluster-driver/driver-import-eks/component", "login/components/cluster-driver/driver-import-eks/component");
define.alias("shared/components/cluster-driver/driver-import-gke/component", "login/components/cluster-driver/driver-import-gke/component");
define.alias("shared/components/cluster-driver/driver-import/component", "login/components/cluster-driver/driver-import/component");
define.alias("shared/components/cluster-driver/driver-linodelke/component", "login/components/cluster-driver/driver-linodelke/component");
define.alias("shared/components/cluster-driver/driver-oracleoke/component", "login/components/cluster-driver/driver-oracleoke/component");
define.alias("shared/components/cluster-driver/driver-rke/component", "login/components/cluster-driver/driver-rke/component");
define.alias("shared/components/cluster-driver/driver-tencenttke/component", "login/components/cluster-driver/driver-tencenttke/component");
define.alias("shared/components/cluster-options-rke/component", "login/components/cluster-options-rke/component");
define.alias("shared/components/cluster-ribbon-nav/component", "login/components/cluster-ribbon-nav/component");
define.alias("shared/components/cluster-template-override-toggle/component", "login/components/cluster-template-override-toggle/component");
define.alias("shared/components/cluster-template-question-row/component", "login/components/cluster-template-question-row/component");
define.alias("shared/components/cluster-template-revision-upgrade-notification/component", "login/components/cluster-template-revision-upgrade-notification/component");
define.alias("shared/components/cluster-template-row/component", "login/components/cluster-template-row/component");
define.alias("shared/components/cluster-templates-table/component", "login/components/cluster-templates-table/component");
define.alias("shared/components/code-block/component", "login/components/code-block/component");
define.alias("shared/components/confirm-delete/component", "login/components/confirm-delete/component");
define.alias("shared/components/container-shell/component", "login/components/container-shell/component");
define.alias("shared/components/containers-header/component", "login/components/containers-header/component");
define.alias("ember-cli-clipboard/components/copy-button", "login/components/copy-button");
define.alias("shared/components/copy-inline/component", "login/components/copy-inline/component");
define.alias("shared/components/copy-to-clipboard/component", "login/components/copy-to-clipboard/component");
define.alias("shared/components/cru-cloud-provider/component", "login/components/cru-cloud-provider/component");
define.alias("shared/components/cru-cluster-template-questions/component", "login/components/cru-cluster-template-questions/component");
define.alias("shared/components/cru-cluster-template/component", "login/components/cru-cluster-template/component");
define.alias("shared/components/cru-cluster/component", "login/components/cru-cluster/component");
define.alias("shared/components/cru-master-auth-network/component", "login/components/cru-master-auth-network/component");
define.alias("shared/components/cru-node-pools/component", "login/components/cru-node-pools/component");
define.alias("shared/components/cru-private-cluster/component", "login/components/cru-private-cluster/component");
define.alias("shared/components/cru-private-registry/component", "login/components/cru-private-registry/component");
define.alias("shared/components/custom-catalog/component", "login/components/custom-catalog/component");
define.alias("shared/components/custom-command/component", "login/components/custom-command/component");
define.alias("shared/components/drain-node/component", "login/components/drain-node/component");
define.alias("ember-flatpickr/components/ember-flatpickr", "login/components/ember-flatpickr");
define.alias("ember-wormhole/components/ember-wormhole", "login/components/ember-wormhole");
define.alias("shared/components/empty-table/component", "login/components/empty-table/component");
define.alias("shared/components/error-sub-row/component", "login/components/error-sub-row/component");
define.alias("shared/components/field-required/component", "login/components/field-required/component");
define.alias("shared/components/form-agent-env-var/component", "login/components/form-agent-env-var/component");
define.alias("shared/components/form-array/component", "login/components/form-array/component");
define.alias("shared/components/form-auth-cloud-credential/component", "login/components/form-auth-cloud-credential/component");
define.alias("shared/components/form-certificate-row/component", "login/components/form-certificate-row/component");
define.alias("shared/components/form-contextual-select-array/component", "login/components/form-contextual-select-array/component");
define.alias("shared/components/form-count/component", "login/components/form-count/component");
define.alias("shared/components/form-engine-opts/component", "login/components/form-engine-opts/component");
define.alias("shared/components/form-gke-taints/component", "login/components/form-gke-taints/component");
define.alias("shared/components/form-global-resource-roles/component", "login/components/form-global-resource-roles/component");
define.alias("shared/components/form-ingress-backends/component", "login/components/form-ingress-backends/component");
define.alias("shared/components/form-ingress-rows/component", "login/components/form-ingress-rows/component");
define.alias("shared/components/form-ingress-rule/component", "login/components/form-ingress-rule/component");
define.alias("shared/components/form-key-value/component", "login/components/form-key-value/component");
define.alias("shared/components/form-labels-annotations/component", "login/components/form-labels-annotations/component");
define.alias("shared/components/form-match-expressions/component", "login/components/form-match-expressions/component");
define.alias("shared/components/form-members-catalog-access/component", "login/components/form-members-catalog-access/component");
define.alias("shared/components/form-members-global-access/component", "login/components/form-members-global-access/component");
define.alias("shared/components/form-members/component", "login/components/form-members/component");
define.alias("shared/components/form-name-description/component", "login/components/form-name-description/component");
define.alias("shared/components/form-namespace/component", "login/components/form-namespace/component");
define.alias("shared/components/form-network-config/component", "login/components/form-network-config/component");
define.alias("shared/components/form-node-taints/component", "login/components/form-node-taints/component");
define.alias("shared/components/form-project-targets/component", "login/components/form-project-targets/component");
define.alias("shared/components/form-reservation/component", "login/components/form-reservation/component");
define.alias("shared/components/form-share-member/component", "login/components/form-share-member/component");
define.alias("shared/components/form-ssl-rows/component", "login/components/form-ssl-rows/component");
define.alias("shared/components/form-ssl-termination/component", "login/components/form-ssl-termination/component");
define.alias("shared/components/form-user-labels/component", "login/components/form-user-labels/component");
define.alias("shared/components/form-value-array/component", "login/components/form-value-array/component");
define.alias("shared/components/form-versions/component", "login/components/form-versions/component");
define.alias("shared/components/gke-access-scope/component", "login/components/gke-access-scope/component");
define.alias("shared/components/gke-node-pool-row/component", "login/components/gke-node-pool-row/component");
define.alias("shared/components/graph-area/component", "login/components/graph-area/component");
define.alias("shared/components/hook-row/component", "login/components/hook-row/component");
define.alias("shared/components/host-pod/component", "login/components/host-pod/component");
define.alias("shared/components/host-template-aliyunecs/component", "login/components/host-template-aliyunecs/component");
define.alias("shared/components/host-template-amazonec2/component", "login/components/host-template-amazonec2/component");
define.alias("shared/components/host-template-azure/component", "login/components/host-template-azure/component");
define.alias("shared/components/host-template-digitalocean/component", "login/components/host-template-digitalocean/component");
define.alias("shared/components/host-template-exoscale/component", "login/components/host-template-exoscale/component");
define.alias("shared/components/host-template-list/component", "login/components/host-template-list/component");
define.alias("shared/components/host-template-other/component", "login/components/host-template-other/component");
define.alias("shared/components/host-template-packet/component", "login/components/host-template-packet/component");
define.alias("shared/components/host-template-rackspace/component", "login/components/host-template-rackspace/component");
define.alias("shared/components/host-template-vmwarevsphere/component", "login/components/host-template-vmwarevsphere/component");
define.alias("shared/components/hover-dropdown/component", "login/components/hover-dropdown/component");
define.alias("shared/components/huawei-user-labels/component", "login/components/huawei-user-labels/component");
define.alias("shared/components/identity-block/component", "login/components/identity-block/component");
define.alias("liquid-fire/components/illiquid-model", "login/components/illiquid-model");
define.alias("shared/components/import-command/component", "login/components/import-command/component");
define.alias("shared/components/input-answer-row/component", "login/components/input-answer-row/component");
define.alias("shared/components/input-answers/component", "login/components/input-answers/component");
define.alias("shared/components/input-cidr/component", "login/components/input-cidr/component");
define.alias("shared/components/input-custom-answers/component", "login/components/input-custom-answers/component");
define.alias("shared/components/input-float/component", "login/components/input-float/component");
define.alias("shared/components/input-identity/component", "login/components/input-identity/component");
define.alias("shared/components/input-int/component", "login/components/input-int/component");
define.alias("shared/components/input-integer/component", "login/components/input-integer/component");
define.alias("shared/components/input-number/component", "login/components/input-number/component");
define.alias("shared/components/input-or-display/component", "login/components/input-or-display/component");
define.alias("shared/components/input-paste/component", "login/components/input-paste/component");
define.alias("shared/components/input-slider/component", "login/components/input-slider/component");
define.alias("shared/components/input-suggest/component", "login/components/input-suggest/component");
define.alias("shared/components/input-text-file/component", "login/components/input-text-file/component");
define.alias("shared/components/input-url/component", "login/components/input-url/component");
define.alias("shared/components/input-yaml/component", "login/components/input-yaml/component");
define.alias("ivy-codemirror/components/ivy-codemirror", "login/components/ivy-codemirror");
define.alias("shared/components/k3s-node-args/component", "login/components/k3s-node-args/component");
define.alias("shared/components/k3s-node-env-var/component", "login/components/k3s-node-env-var/component");
define.alias("shared/components/labels-section/component", "login/components/labels-section/component");
define.alias("shared/components/language-dropdown/component", "login/components/language-dropdown/component");
define.alias("shared/components/link-to-as-attrs/component", "login/components/link-to-as-attrs/component");
define.alias("shared/components/link-to-cluster-driver/component", "login/components/link-to-cluster-driver/component");
define.alias("liquid-fire/components/liquid-bind", "login/components/liquid-bind");
define.alias("liquid-fire/components/liquid-child", "login/components/liquid-child");
define.alias("liquid-fire/components/liquid-container", "login/components/liquid-container");
define.alias("liquid-fire/components/liquid-if", "login/components/liquid-if");
define.alias("liquid-fire/components/liquid-measured", "login/components/liquid-measured");
define.alias("liquid-fire/components/liquid-outlet", "login/components/liquid-outlet");
define.alias("liquid-fire/components/liquid-spacer", "login/components/liquid-spacer");
define.alias("liquid-fire/components/liquid-sync", "login/components/liquid-sync");
define.alias("liquid-fire/components/liquid-unless", "login/components/liquid-unless");
define.alias("liquid-fire/components/liquid-versions", "login/components/liquid-versions");
define("login/components/login-azure/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    azureAd: Ember.inject.service(),
    actions: {
      authenticate() {
        Ember.get(this, 'azureAd').login();
      }

    }
  });

  _exports.default = _default;
});
define("login/components/login-azure/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bpTrqIA3",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"row pt-10 pb-10\"],[4,[38,0],[[32,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[11,\"button\"],[16,\"disabled\",[34,1]],[24,0,\"btn bg-primary\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"authenticate\"],null],[12],[2,\"\\n    \"],[10,\"i\"],[14,0,\"icon icon-azuread\"],[12],[13],[2,\" \"],[1,[30,[36,2],[\"loginAzure.buttonText\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"waiting\",\"t\"]}",
    "moduleName": "login/components/login-azure/template.hbs"
  });

  _exports.default = _default;
});
define("login/components/login-github/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    oauth: Ember.inject.service(),
    actions: {
      authenticate() {
        this.get('oauth').login('github');
      }

    }
  });

  _exports.default = _default;
});
define("login/components/login-github/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7z/+cLk7",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"row pt-10 pb-10\"],[4,[38,0],[[32,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[11,\"button\"],[16,\"disabled\",[34,1]],[24,0,\"btn bg-primary\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"authenticate\"],null],[12],[2,\"\\n    \"],[10,\"i\"],[14,0,\"icon icon-github\"],[12],[13],[2,\" \"],[1,[30,[36,2],[\"loginGithub.buttonText\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"waiting\",\"t\"]}",
    "moduleName": "login/components/login-github/template.hbs"
  });

  _exports.default = _default;
});
define("login/components/login-google/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    oauth: Ember.inject.service(),
    actions: {
      authenticate() {
        this.get('oauth').login('googleoauth');
      }

    }
  });

  _exports.default = _default;
});
define("login/components/login-google/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "A84UyXCA",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"row pt-10 pb-10\"],[4,[38,0],[[32,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[11,\"button\"],[16,\"disabled\",[34,1]],[24,0,\"btn bg-primary\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"authenticate\"],null],[12],[2,\"\\n    \"],[10,\"i\"],[14,0,\"icon icon-google\"],[12],[13],[2,\" \"],[1,[30,[36,2],[\"loginGoogle.buttonText\"],null]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"waiting\",\"t\"]}",
    "moduleName": "login/components/login-google/template.hbs"
  });

  _exports.default = _default;
});
define("login/components/login-saml/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    saml: Ember.inject.service(),
    errors: null,
    provider: null,
    actions: {
      authenticate() {
        Ember.get(this, 'saml').login(Ember.get(this, 'provider'), Ember.get(this, 'requestId'), Ember.get(this, 'publicKey'), Ember.get(this, 'responseType')).catch(err => {
          Ember.set(this, 'errors', [err.message]);
        });
      }

    }
  });

  _exports.default = _default;
});
define("login/components/login-saml/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9ZLS+Mbo",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"row pt-10 pb-10\"],[4,[38,0],[[32,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[11,\"button\"],[16,\"disabled\",[34,1]],[24,0,\"btn bg-primary\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"authenticate\"],null],[12],[2,\"\\n    \"],[10,\"i\"],[14,0,\"icon icon-ping\"],[12],[13],[2,\" \"],[1,[30,[36,4],[[30,[36,3],[\"loginSaml.\",[35,2],\".buttonText\"],null]],null]],[2,\"\\n  \"],[13],[2,\"\\n  \"],[8,\"top-errors\",[],[[\"@errors\"],[[34,5]]],null],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"waiting\",\"provider\",\"concat\",\"t\",\"errors\"]}",
    "moduleName": "login/components/login-saml/template.hbs"
  });

  _exports.default = _default;
});
define("login/components/login-shibboleth/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    shibbolethAuth: Ember.inject.service(),
    redirectUrl: null,
    outRoute: null,

    init() {
      this._super(...arguments);

      this.set('outRoute', window.location.origin);
    },

    actions: {
      authenticate() {
        if (this.action) {
          this.action();
        }

        Ember.run.later(() => {
          this.authShibboleth();
        }, 10);
      }

    },

    authShibboleth() {
      this.get('shibbolethAuth').getToken().then(token => {
        let shibbolethAuth = this.get('shibbolethAuth');
        shibbolethAuth.authorizeRedirect(shibbolethAuth.buildRedirectUrl(token.redirectUrl));
      });
    }

  });

  _exports.default = _default;
});
define("login/components/login-shibboleth/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pwCgwmie",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"text-left\"],[4,[38,0],[[32,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[10,\"p\"],[14,0,\"text-center\"],[12],[2,\"\\n    \"],[11,\"button\"],[16,\"disabled\",[34,1]],[24,0,\"btn bg-primary\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"authenticate\"],null],[12],[2,\"\\n      \"],[1,[30,[36,2],[\"loginShibboleth.buttonText\"],null]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"a\"],[15,6,[31,[[34,3],\"/v1-auth/saml/logout\"]]],[14,\"target\",\"_blank\"],[14,0,\"inline-block mt-15\"],[12],[2,\"IDP Logout\"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\",\"waiting\",\"t\",\"outRoute\"]}",
    "moduleName": "login/components/login-shibboleth/template.hbs"
  });

  _exports.default = _default;
});
define("login/components/login-user-pass/component", ["exports", "ui/utils/constants", "jquery"], function (_exports, _constants, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    access: Ember.inject.service(),
    cookies: Ember.inject.service(),
    intl: Ember.inject.service(),
    waiting: null,
    username: null,
    rememberUsername: false,
    password: null,
    provider: null,
    readableProvider: null,
    onlyLocal: null,

    init() {
      this._super(...arguments);

      let username = null;

      if (Ember.get(this, 'provider') === 'local') {
        username = Ember.get(this, `cookies.${_constants.default.COOKIE.USERNAME}`);
      } else {
        username = Ember.get(this, `cookies.${Ember.get(this, 'provider').toUpperCase()}-USERNAME`);
      }

      if (username) {
        Ember.setProperties(this, {
          username,
          rememberUsername: true
        });
      }

      if (Ember.get(this, 'provider') && !Ember.get(this, 'onlyLocal')) {
        let pv = null;

        switch (Ember.get(this, 'provider')) {
          case 'activedirectory':
            pv = Ember.get(this, 'intl').t('loginPage.readableProviders.ad');
            break;

          case 'openldap':
            pv = Ember.get(this, 'intl').t('loginPage.readableProviders.openldap');
            break;

          case 'freeipa':
            pv = Ember.get(this, 'intl').t('loginPage.readableProviders.freeipa');
            break;

          case 'azuread':
            pv = Ember.get(this, 'intl').t('loginPage.readableProviders.azureAd');
            break;

          case 'local':
          default:
            pv = Ember.get(this, 'intl').t('loginPage.readableProviders.local');
            break;
        }

        Ember.set(this, 'readableProvider', pv); // console.log(this.get('provider'));
      }
    },

    didInsertElement() {
      Ember.run.next(this, 'focusSomething');
    },

    actions: {
      authenticate() {
        const username = Ember.get(this, 'username');
        let password = Ember.get(this, 'password');
        const remember = Ember.get(this, 'rememberUsername');

        if (password && Ember.get(this, 'provider') === 'local') {
          password = password.trim();
        }

        const code = {
          username,
          password
        };

        if (remember) {
          if (Ember.get(this, 'provider') === 'local') {
            Ember.get(this, 'cookies').setWithOptions(_constants.default.COOKIE.USERNAME, username, {
              expire: 365,
              secure: 'auto'
            });
          } else {
            Ember.get(this, 'cookies').setWithOptions(`${Ember.get(this, 'provider').toUpperCase()}-USERNAME`, username, {
              expire: 365,
              secure: 'auto'
            });
          }
        } else {
          Ember.get(this, 'cookies').remove(_constants.default.COOKIE.USERNAME);
        }

        Ember.set(this, 'password', '');

        if (Ember.get(this, 'access.providers')) {
          if (this.action) {
            this.action(Ember.get(this, 'provider'), code);
          }
        }
      }

    },

    focusSomething() {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }

      let elem = (0, _jquery.default)('#login-username');

      if (Ember.get(this, 'username')) {
        elem = (0, _jquery.default)('#login-password');
      }

      if (elem && elem[0]) {
        elem[0].focus();
      }
    }

  });

  _exports.default = _default;
});
define("login/components/login-user-pass/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hFjIXU3l",
    "block": "{\"symbols\":[],\"statements\":[[11,\"form\"],[24,0,\"text-left mt-10\"],[4,[38,3],[[32,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"mt-20\"],[12],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[1,[30,[36,0],[\"loginUserPass.userLabel\"],null]],[13],[2,\"\\n      \"],[10,\"div\"],[14,0,\"pull-right\"],[12],[2,\"\\n        \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[1,[30,[36,0],[\"loginUserPass.remember\"],null]],[2,\" \"],[1,[30,[36,5],null,[[\"type\",\"checked\"],[\"checkbox\",[35,4]]]]],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,5],null,[[\"type\",\"id\",\"name\",\"autocomplete\",\"class\",\"value\",\"placeholder\"],[\"text\",[30,[36,8],[\"login-username-\",[35,7]],null],\"username\",\"username\",\"form-control login-user\",[35,6],[30,[36,0],[\"loginUserPass.userPlaceholder\"],null]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"pt-15 pb-15\"],[12],[2,\"\\n    \"],[10,\"label\"],[14,0,\"acc-label\"],[12],[1,[30,[36,0],[\"loginUserPass.passwordLabel\"],null]],[13],[2,\"\\n    \"],[10,\"div\"],[12],[2,\"\\n      \"],[1,[30,[36,5],null,[[\"id\",\"name\",\"autocomplete\",\"type\",\"class\",\"value\"],[[30,[36,8],[\"login-password-\",[35,7]],null],\"password\",\"password\",\"password\",\"form-control login-pass\",[35,9]]]]],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"p\"],[14,0,\"text-center\"],[12],[2,\"\\n    \"],[11,\"button\"],[16,\"disabled\",[34,10]],[24,0,\"btn bg-primary\"],[24,4,\"submit\"],[4,[38,3],[[32,0],\"authenticate\"],null],[12],[2,\"\\n\"],[6,[37,2],[[35,10]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"i\"],[14,0,\"icon icon-spinner icon-spin\"],[12],[13],[2,\" \"],[1,[30,[36,0],[\"loginUserPass.loggingInLabel\"],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[35,1]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[1,[30,[36,0],[\"loginUserPass.loginLabel\"],[[\"provider\"],[[35,1]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[1,[30,[36,0],[\"loginUserPass.genericLoginLabel\"],null]],[2,\"\\n      \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"readableProvider\",\"if\",\"action\",\"rememberUsername\",\"input\",\"username\",\"provider\",\"concat\",\"password\",\"waiting\"]}",
    "moduleName": "login/components/login-user-pass/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/managed-import-cluster-info/component", "login/components/managed-import-cluster-info/component");
define.alias("shared/components/marked-down/component", "login/components/marked-down/component");
define.alias("ember-maybe-in-element/components/maybe-in-element", "login/components/maybe-in-element");
define.alias("shared/components/metrics-action/component", "login/components/metrics-action/component");
define.alias("shared/components/metrics-graph/component", "login/components/metrics-graph/component");
define.alias("shared/components/metrics-summary/component", "login/components/metrics-summary/component");
define.alias("shared/components/modal-add-custom-roles/component", "login/components/modal-add-custom-roles/component");
define.alias("shared/components/modal-confirm-deactivate/component", "login/components/modal-confirm-deactivate/component");
define.alias("shared/components/modal-confirm-yaml-switch/component", "login/components/modal-confirm-yaml-switch/component");
define.alias("shared/components/modal-container-stop/component", "login/components/modal-container-stop/component");
define.alias("shared/components/modal-delete-eks-cluster/component", "login/components/modal-delete-eks-cluster/component");
define.alias("shared/components/modal-edit-catalog/component", "login/components/modal-edit-catalog/component");
define.alias("shared/components/modal-edit-cluster-template/component", "login/components/modal-edit-cluster-template/component");
define.alias("shared/components/modal-edit-driver/component", "login/components/modal-edit-driver/component");
define.alias("shared/components/modal-edit-user/component", "login/components/modal-edit-user/component");
define.alias("shared/components/modal-istio-yaml/component", "login/components/modal-istio-yaml/component");
define.alias("shared/components/modal-move-namespace/component", "login/components/modal-move-namespace/component");
define.alias("shared/components/modal-resize-pvc/component", "login/components/modal-resize-pvc/component");
define.alias("shared/components/modal-root/component", "login/components/modal-root/component");
define.alias("shared/components/modal-save-rke-template/component", "login/components/modal-save-rke-template/component");
define.alias("shared/components/modal-shell/component", "login/components/modal-shell/component");
define.alias("shared/components/modal-show-command/component", "login/components/modal-show-command/component");
define.alias("shared/components/modal-yaml/component", "login/components/modal-yaml/component");
define.alias("shared/components/multi-container-stats/component", "login/components/multi-container-stats/component");
define.alias("shared/components/namespace-group/component", "login/components/namespace-group/component");
define.alias("shared/components/new-select/component", "login/components/new-select/component");
define.alias("shared/components/node-group-row/component", "login/components/node-group-row/component");
define.alias("shared/components/node-ip/component", "login/components/node-ip/component");
define.alias("shared/components/node-pool-row/component", "login/components/node-pool-row/component");
define.alias("shared/components/node-taints/component", "login/components/node-taints/component");
define.alias("shared/components/outside-click/component", "login/components/outside-click/component");
define.alias("ember-cli-pagination/components/page-numbers", "login/components/page-numbers");
define.alias("shared/components/page-numbers/component", "login/components/page-numbers/component");
define.alias("shared/components/percent-gauge/component", "login/components/percent-gauge/component");
define.alias("shared/components/pretty-json/component", "login/components/pretty-json/component");
define.alias("shared/components/principal-search/component", "login/components/principal-search/component");
define.alias("shared/components/progress-bar/component", "login/components/progress-bar/component");
define.alias("shared/components/project-member-row/component", "login/components/project-member-row/component");
define.alias("shared/components/radio-button/component", "login/components/radio-button/component");
define("login/components/reload-btn/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tagName: '',

    didInsertElement() {
      Ember.run.next(this, () => {
        var btn = $('.reload-btn')[0]; // eslint-disable-line

        if (btn) {
          btn.focus();
        }
      });
    },

    actions: {
      reload() {
        window.location.href = '/login-keycloak';
      }

    }
  });

  _exports.default = _default;
});
define("login/components/reload-btn/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "k6fp/xbp",
    "block": "{\"symbols\":[],\"statements\":[[11,\"button\"],[24,0,\"btn bg-primary reload-btn\"],[24,4,\"button\"],[4,[38,0],[[32,0],\"reload\"],null],[12],[2,\"\\n  \"],[10,\"i\"],[14,0,\"icon icon-refresh text-small\"],[12],[13],[2,\" Reload\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "moduleName": "login/components/reload-btn/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/components/resource-condition-list/component", "login/components/resource-condition-list/component");
define.alias("shared/components/resource-event-list/component", "login/components/resource-event-list/component");
define.alias("shared/components/run-scan-modal/component", "login/components/run-scan-modal/component");
define.alias("shared/components/save-cancel/component", "login/components/save-cancel/component");
define.alias("shared/components/scheduling-toleration/component", "login/components/scheduling-toleration/component");
define.alias("shared/components/schema/input-boolean/component", "login/components/schema/input-boolean/component");
define.alias("shared/components/schema/input-certificate/component", "login/components/schema/input-certificate/component");
define.alias("shared/components/schema/input-config-map/component", "login/components/schema/input-config-map/component");
define.alias("shared/components/schema/input-container/component", "login/components/schema/input-container/component");
define.alias("shared/components/schema/input-date/component", "login/components/schema/input-date/component");
define.alias("shared/components/schema/input-dns-record/component", "login/components/schema/input-dns-record/component");
define.alias("shared/components/schema/input-enum/component", "login/components/schema/input-enum/component");
define.alias("shared/components/schema/input-float/component", "login/components/schema/input-float/component");
define.alias("shared/components/schema/input-hostname/component", "login/components/schema/input-hostname/component");
define.alias("shared/components/schema/input-int/component", "login/components/schema/input-int/component");
define.alias("shared/components/schema/input-istiohost/component", "login/components/schema/input-istiohost/component");
define.alias("shared/components/schema/input-masked/component", "login/components/schema/input-masked/component");
define.alias("shared/components/schema/input-multiline/component", "login/components/schema/input-multiline/component");
define.alias("shared/components/schema/input-password/component", "login/components/schema/input-password/component");
define.alias("shared/components/schema/input-pvc/component", "login/components/schema/input-pvc/component");
define.alias("shared/components/schema/input-relative-service/component", "login/components/schema/input-relative-service/component");
define.alias("shared/components/schema/input-secret/component", "login/components/schema/input-secret/component");
define.alias("shared/components/schema/input-storageclass/component", "login/components/schema/input-storageclass/component");
define.alias("shared/components/schema/input-string/component", "login/components/schema/input-string/component");
define.alias("shared/components/schema/input-workload/component", "login/components/schema/input-workload/component");
define.alias("shared/components/search-text/component", "login/components/search-text/component");
define.alias("shared/components/searchable-select/component", "login/components/searchable-select/component");
define.alias("shared/components/select-value-check/component", "login/components/select-value-check/component");
define.alias("shared/components/settings-overridable-banner/component", "login/components/settings-overridable-banner/component");
define.alias("shared/components/settings/danger-zone/component", "login/components/settings/danger-zone/component");
define.alias("shared/components/settings/host-registration/component", "login/components/settings/host-registration/component");
define.alias("shared/components/settings/settings-header/component", "login/components/settings/settings-header/component");
define.alias("shared/components/share-member-row/component", "login/components/share-member-row/component");
define.alias("shared/components/shortcut-key/component", "login/components/shortcut-key/component");
define.alias("shared/components/sortable-table/component", "login/components/sortable-table/component");
define.alias("shared/components/sortable-thead/component", "login/components/sortable-thead/component");
define.alias("shared/components/storage-class/provisioner-aws-ebs/component", "login/components/storage-class/provisioner-aws-ebs/component");
define.alias("shared/components/storage-class/provisioner-azure-disk/component", "login/components/storage-class/provisioner-azure-disk/component");
define.alias("shared/components/storage-class/provisioner-azure-file/component", "login/components/storage-class/provisioner-azure-file/component");
define.alias("shared/components/storage-class/provisioner-cinder/component", "login/components/storage-class/provisioner-cinder/component");
define.alias("shared/components/storage-class/provisioner-gce-pd/component", "login/components/storage-class/provisioner-gce-pd/component");
define.alias("shared/components/storage-class/provisioner-generic/component", "login/components/storage-class/provisioner-generic/component");
define.alias("shared/components/storage-class/provisioner-glusterfs/component", "login/components/storage-class/provisioner-glusterfs/component");
define.alias("shared/components/storage-class/provisioner-local-storage/component", "login/components/storage-class/provisioner-local-storage/component");
define.alias("shared/components/storage-class/provisioner-longhorn/component", "login/components/storage-class/provisioner-longhorn/component");
define.alias("shared/components/storage-class/provisioner-portworx-volume/component", "login/components/storage-class/provisioner-portworx-volume/component");
define.alias("shared/components/storage-class/provisioner-quobyte/component", "login/components/storage-class/provisioner-quobyte/component");
define.alias("shared/components/storage-class/provisioner-rbd/component", "login/components/storage-class/provisioner-rbd/component");
define.alias("shared/components/storage-class/provisioner-scaleio/component", "login/components/storage-class/provisioner-scaleio/component");
define.alias("shared/components/storage-class/provisioner-storageos/component", "login/components/storage-class/provisioner-storageos/component");
define.alias("shared/components/storage-class/provisioner-vsphere-volume/component", "login/components/storage-class/provisioner-vsphere-volume/component");
define.alias("shared/components/table-labels/component", "login/components/table-labels/component");
define.alias("shared/components/textarea-autogrow/component", "login/components/textarea-autogrow/component");
define.alias("shared/components/tooltip-action-menu/component", "login/components/tooltip-action-menu/component");
define.alias("shared/components/tooltip-basic/component", "login/components/tooltip-basic/component");
define.alias("shared/components/tooltip-element/component", "login/components/tooltip-element/component");
define.alias("shared/components/tooltip-expiring/component", "login/components/tooltip-expiring/component");
define.alias("shared/components/tooltip-node-group-update/component", "login/components/tooltip-node-group-update/component");
define.alias("shared/components/tooltip-toggle-override/component", "login/components/tooltip-toggle-override/component");
define.alias("shared/components/tooltip-warning/component", "login/components/tooltip-warning/component");
define.alias("shared/components/top-errors/component", "login/components/top-errors/component");
define.alias("shared/components/upgrade-btn/component", "login/components/upgrade-btn/component");
define.alias("shared/components/used-percent-gauge/component", "login/components/used-percent-gauge/component");
define("login/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'login/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define.alias("shared/cookies/service", "login/cookies/service");
define.alias("shared/digital-ocean/service", "login/digital-ocean/service");
define.alias("shared/endpoint/service", "login/endpoint/service");
define("login/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "login/resolver", "login/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
      services: ['app', 'access', 'user-language', 'intl', 'settings', 'session', 'modal', 'globalStore', 'router'],
      externalRoutes: ['index', 'authenticated', 'update-password', 'update-critical-settings']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("shared/features/service", "login/features/service");
define.alias("shared/google/service", "login/google/service");
define.alias("shared/grafana/service", "login/grafana/service");
define.alias("shared/growl/service", "login/growl/service");
define.alias("ember-element-helper/helpers/-element", "login/helpers/-element");
define.alias("ember-math-helpers/helpers/abs", "login/helpers/abs");
define.alias("ember-math-helpers/helpers/acos", "login/helpers/acos");
define.alias("ember-math-helpers/helpers/acosh", "login/helpers/acosh");
define.alias("ember-math-helpers/helpers/add", "login/helpers/add");
define.alias("ember-truth-helpers/helpers/and", "login/helpers/and");
define.alias("shared/helpers/array-includes", "login/helpers/array-includes");
define.alias("ember-math-helpers/helpers/asin", "login/helpers/asin");
define.alias("ember-math-helpers/helpers/asinh", "login/helpers/asinh");
define.alias("ember-assign-helper/helpers/assign", "login/helpers/assign");
define.alias("ember-math-helpers/helpers/atan", "login/helpers/atan");
define.alias("ember-math-helpers/helpers/atan2", "login/helpers/atan2");
define.alias("ember-math-helpers/helpers/atanh", "login/helpers/atanh");
define.alias("ember-math-helpers/helpers/cbrt", "login/helpers/cbrt");
define.alias("ember-math-helpers/helpers/ceil", "login/helpers/ceil");
define.alias("ember-math-helpers/helpers/clz32", "login/helpers/clz32");
define.alias("ember-math-helpers/helpers/cos", "login/helpers/cos");
define.alias("ember-math-helpers/helpers/cosh", "login/helpers/cosh");
define.alias("shared/helpers/date-calendar", "login/helpers/date-calendar");
define.alias("shared/helpers/date-from-now", "login/helpers/date-from-now");
define.alias("shared/helpers/date-recent", "login/helpers/date-recent");
define.alias("shared/helpers/date-str", "login/helpers/date-str");
define.alias("shared/helpers/default-str", "login/helpers/default-str");
define.alias("ember-math-helpers/helpers/div", "login/helpers/div");
define.alias("shared/helpers/driver-name", "login/helpers/driver-name");
define.alias("ember-truth-helpers/helpers/equal", "login/helpers/eq");
define.alias("ember-math-helpers/helpers/exp", "login/helpers/exp");
define.alias("ember-math-helpers/helpers/expm1", "login/helpers/expm1");
define.alias("ember-math-helpers/helpers/floor", "login/helpers/floor");
define.alias("shared/helpers/format-ip", "login/helpers/format-ip");
define.alias("shared/helpers/format-mib", "login/helpers/format-mib");
define.alias("shared/helpers/format-si", "login/helpers/format-si");
define.alias("ember-math-helpers/helpers/fround", "login/helpers/fround");
define.alias("ember-math-helpers/helpers/gcd", "login/helpers/gcd");
define.alias("shared/helpers/get-card-class", "login/helpers/get-card-class");
define.alias("ember-truth-helpers/helpers/gt", "login/helpers/gt");
define.alias("ember-truth-helpers/helpers/gte", "login/helpers/gte");
define.alias("shared/helpers/has-override", "login/helpers/has-override");
define.alias("ember-math-helpers/helpers/hypot", "login/helpers/hypot");
define.alias("ember-math-helpers/helpers/imul", "login/helpers/imul");
define.alias("ember-truth-helpers/helpers/is-array", "login/helpers/is-array");
define.alias("ember-cli-clipboard/helpers/is-clipboard-supported", "login/helpers/is-clipboard-supported");
define.alias("ember-truth-helpers/helpers/is-empty", "login/helpers/is-empty");
define.alias("ember-truth-helpers/helpers/is-equal", "login/helpers/is-equal");
define.alias("shared/helpers/join-array", "login/helpers/join-array");
define.alias("ember-math-helpers/helpers/lcm", "login/helpers/lcm");
define.alias("liquid-fire/helpers/lf-lock-model", "login/helpers/lf-lock-model");
define.alias("liquid-fire/helpers/lf-or", "login/helpers/lf-or");
define.alias("shared/helpers/link-ssl-domain", "login/helpers/link-ssl-domain");
define("login/helpers/linkify", ["exports", "linkifyjs/string", "shared/helpers/linkify"], function (_exports, _string, _linkify) {
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
define.alias("ember-math-helpers/helpers/log-e", "login/helpers/log-e");
define.alias("ember-math-helpers/helpers/log10", "login/helpers/log10");
define.alias("ember-math-helpers/helpers/log1p", "login/helpers/log1p");
define.alias("ember-math-helpers/helpers/log2", "login/helpers/log2");
define.alias("shared/helpers/lower-case", "login/helpers/lower-case");
define.alias("ember-truth-helpers/helpers/lt", "login/helpers/lt");
define.alias("ember-truth-helpers/helpers/lte", "login/helpers/lte");
define.alias("ember-math-helpers/helpers/max", "login/helpers/max");
define.alias("ember-math-helpers/helpers/min", "login/helpers/min");
define.alias("ember-math-helpers/helpers/mod", "login/helpers/mod");
define.alias("ember-math-helpers/helpers/mult", "login/helpers/mult");
define.alias("shared/helpers/nl-to-br", "login/helpers/nl-to-br");
define.alias("ember-truth-helpers/helpers/not-equal", "login/helpers/not-eq");
define.alias("ember-truth-helpers/helpers/not", "login/helpers/not");
define.alias("ember-truth-helpers/helpers/or", "login/helpers/or");
define.alias("shared/helpers/parse-camelcase", "login/helpers/parse-camelcase");
define.alias("ember-math-helpers/helpers/pow", "login/helpers/pow");
define.alias("shared/helpers/pretty-cron", "login/helpers/pretty-cron");
define.alias("ember-math-helpers/helpers/random", "login/helpers/random");
define.alias("shared/helpers/rbac-allows", "login/helpers/rbac-allows");
define.alias("shared/helpers/rbac-prevents", "login/helpers/rbac-prevents");
define.alias("ember-math-helpers/helpers/round", "login/helpers/round");
define.alias("shared/helpers/run-time", "login/helpers/run-time");
define.alias("ember-math-helpers/helpers/sign", "login/helpers/sign");
define.alias("ember-math-helpers/helpers/sin", "login/helpers/sin");
define.alias("ember-math-helpers/helpers/sqrt", "login/helpers/sqrt");
define.alias("shared/helpers/str-replace", "login/helpers/str-replace");
define.alias("ember-math-helpers/helpers/sub", "login/helpers/sub");
define.alias("ember-intl/helpers/t", "login/helpers/t");
define.alias("ember-math-helpers/helpers/tan", "login/helpers/tan");
define.alias("ember-math-helpers/helpers/tanh", "login/helpers/tanh");
define.alias("shared/helpers/to-json", "login/helpers/to-json");
define.alias("ember-math-helpers/helpers/trunc", "login/helpers/trunc");
define.alias("shared/helpers/uc-first", "login/helpers/uc-first");
define.alias("shared/helpers/upper-case", "login/helpers/upper-case");
define.alias("ember-truth-helpers/helpers/xor", "login/helpers/xor");
define.alias("shared/host/service", "login/host/service");
define("login/initializers/app", ["exports"], function (_exports) {
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
define("login/initializers/ember-api-store", ["exports", "@rancher/ember-api-store/initializers/store"], function (_exports, _store) {
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
define("login/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
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
define.alias("shared/istio/service", "login/istio/service");
define.alias("shared/k8s/service", "login/k8s/service");
define.alias("shared/linode/service", "login/linode/service");
define("login/login/controller", ["exports", "jquery", "ui/utils/constants"], function (_exports, _jquery, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const USER_PASS_PROVIDERS = ['local', 'activedirectory', 'openldap', 'freeipa'];

  var _default = Ember.Controller.extend({
    access: Ember.inject.service(),
    cookies: Ember.inject.service(),
    settings: Ember.inject.service(),
    prefs: Ember.inject.service(),
    intl: Ember.inject.service(),
    globalStore: Ember.inject.service(),
    modalService: Ember.inject.service('modal'),
    router: Ember.inject.service(),
    session: Ember.inject.service(),
    queryParams: ['errorMsg', 'resetPassword', 'errorCode', 'requestId', 'publicKey', 'responseType'],
    waiting: false,
    adWaiting: false,
    localWaiting: false,
    shibbolethWaiting: false,
    errorMsg: null,
    errorCode: null,
    resetPassword: false,
    code: null,
    showLocal: null,
    promptPasswordReset: Ember.computed.alias('resetPassword'),
    isForbidden: Ember.computed.equal('errorCode', '403'),
    actions: {
      started() {
        Ember.setProperties(this, {
          'waiting': true,
          'errorMsg': null
        });
      },

      waiting(provider) {
        Ember.set(this, 'errorMsg', null);

        switch (provider) {
          case 'local':
            this.toggleProperty('localWaiting');
            break;

          case 'activedirectory':
          case 'openldap':
          case 'freeipa':
            this.toggleProperty('adWaiting');
            break;

          case 'azuread':
            this.toggleProperty('azureadWaiting');
            break;

          case 'shibboleth':
            this.toggleProperty('shibbolethWaiting');
            break;

          default:
            break;
        }
      },

      complete(success) {
        if (success) {
          this.shouldSetServerUrl().then(proceed => {
            if (proceed) {
              this.send('finishComplete');
            } else {
              Ember.get(this, 'router').transitionTo('update-critical-settings');
            }
          });
        }
      },

      finishComplete() {
        Ember.set(this, 'code', null);
        const redirectURL = Ember.get(this, `session.${_constants.default.SESSION.BACK_TO}`);

        if (Ember.get(this, `cookies.${_constants.default.COOKIE.REDIRECTED}`) && this.shouldRedirect(redirectURL)) {
          window.location.href = redirectURL;
        } else {
          if (Ember.get(this, 'app.environment') === 'development') {
            Ember.get(this, 'router').replaceWith('authenticated');
          } else {
            let link = '/dashboard';
            window.location.href = link;
            return;
          }
        }
      },

      authenticate(provider, code) {
        this.send('waiting', provider);
        Ember.run.later(() => {
          Ember.get(this, 'access').login(provider, code).then(user => {
            if (Ember.get(user, 'mustChangePassword') && provider === 'local') {
              Ember.get(this, 'session').set(_constants.default.SESSION.BACK_TO, window.location.origin);
              Ember.get(this, 'access').set('userCode', code);
              Ember.get(this, 'router').transitionTo('update-password');
            } else {
              Ember.setProperties(this, {
                user: null,
                code: null
              });
              Ember.get(this, 'access').set('userCode', null);
              Ember.get(this, 'access').set('firstLogin', false);
              this.send('complete', true);
              this.send('waiting', provider);
            }
          }).catch(err => {
            this.send('waiting', provider);

            if (err) {
              let key;

              if ([401, 403].includes(err.status)) {
                key = 'authFailed';

                if (USER_PASS_PROVIDERS.includes(provider)) {
                  key = 'authFailedCreds';
                }
              } else {
                key = 'unknown';

                if (this.intl.exists(`loginPage.error.${err.message}`)) {
                  key = err.message;
                }
              }

              Ember.set(this, 'errorMsg', key);
            }
          });
        }, 10);
      },

      toggleAuth() {
        this.toggleProperty('showLocal');
        Ember.run.next(this, 'focusSomething');
      }

    },
    initErrorChanged: Ember.observer('app.initError', function () {
      this.focusSomething(); // focus the button..
    }),
    isGithub: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'github');
    }),
    isGoogle: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'googleoauth');
    }),
    isPing: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'ping');
    }),
    isKeycloak: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'keycloak');
    }),
    isAdfs: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'adfs');
    }),
    isOkta: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'okta');
    }),
    isActiveDirectory: Ember.computed('access.{provider,providers}', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'activedirectory');
    }),
    isOpenLdap: Ember.computed('access.{provider,providers}', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'openldap');
    }),
    isFreeIpa: Ember.computed('access.{provider,providers}', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'freeipa');
    }),
    isLocal: Ember.computed('access.providers', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'local');
    }),
    onlyLocal: Ember.computed('access.providers.@each.id', function () {
      const providers = (Ember.get(this, 'access.providers') || []).filter(x => x.id !== 'local');
      return Ember.get(providers, 'length') === 0;
    }),
    externalProvider: Ember.computed('access.providers.@each.id', function () {
      const providers = (Ember.get(this, 'access.providers') || []).filter(x => x.id !== 'local');
      return providers[0] && providers[0].id;
    }),
    isAzureAd: Ember.computed('access.{provider,providers}', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'azuread');
    }),
    isShibboleth: Ember.computed('access.{provider,providers}', function () {
      return !!Ember.get(this, 'access.providers').findBy('id', 'shibboleth');
    }),
    bootstrap: Ember.on('init', function () {
      Ember.run.schedule('afterRender', this, 'focusSomething');
    }),
    infoMsg: Ember.computed('errorCode', 'errorMsg', 'intl.locale', 'isForbidden', function () {
      let {
        errorMsg: errorMessageKey
      } = this;

      if (errorMessageKey) {
        return this.intl.t(`loginPage.error.${errorMessageKey}`);
      } else if (Ember.get(this, 'isForbidden')) {
        return this.intl.t('loginPage.error.authFailed');
      } else {
        return '';
      }
    }),

    shouldSetServerUrl() {
      // setting isn't loaded yet
      let globalStore = Ember.get(this, 'globalStore');
      return globalStore.find('setting', _constants.default.SETTING.SERVER_URL).then(serverUrl => {
        if (serverUrl && Ember.isEmpty(Ember.get(serverUrl, 'value')) && Ember.get(serverUrl, 'links.update')) {
          return false;
        }

        return true;
      });
    },

    focusSomething() {
      var user = (0, _jquery.default)('.login-user')[0];
      var pass = (0, _jquery.default)('.login-pass')[0];

      if (user) {
        if (user.value) {
          pass.focus();
        } else {
          user.focus();
        }
      }
    },

    shouldRedirect(redirect) {
      if (!redirect) {
        return false;
      }

      const current = `${window.location.origin}${window.location.pathname}`;
      const rootUrl = current.substr(0, current.length - 6);

      if (current === redirect || `${rootUrl}/` === redirect) {
        return false;
      }

      if (redirect.startsWith(rootUrl) && redirect !== rootUrl && redirect !== `${rootUrl}/`) {
        return true;
      }

      return false;
    },

    isInsecure: window.location.protocol === 'http:'
  });

  _exports.default = _default;
});
define("login/login/route", ["exports", "jquery", "shared/utils/constants"], function (_exports, _jquery, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    access: Ember.inject.service(),
    cookies: Ember.inject.service(),
    language: Ember.inject.service('user-language'),
    intl: Ember.inject.service(),

    beforeModel() {
      return Ember.get(this, 'language').initUnauthed();
    },

    model(params) {
      const firstLogin = Ember.get(this, 'access.firstLogin');
      let overrideErrorMessage = false;
      let errorMessageTranslationKey = 'unknown';

      if (params.errorMsg) {
        overrideErrorMessage = true;

        if (this.intl.exists(`loginPage.error.${params.errorMsg}`)) {
          errorMessageTranslationKey = params.errorMsg;
        }
      }

      if (firstLogin) {
        const code = {
          username: 'admin',
          password: 'admin'
        };
        return Ember.get(this, 'access').login('local', code).then(() =>
        /* user*/
        {
          Ember.get(this, 'cookies').setWithOptions(_constants.default.COOKIE.USERNAME, 'admin', {
            expire: 365,
            secure: 'auto'
          });
          Ember.set(this, 'access.userCode', code);
          this.transitionToExternal('update-password');
        }).catch(() => {
          return {
            firstLogin: true,
            user: null,
            changePassword: false,
            code: null,
            overrideErrorMessage,
            errorMessageTranslationKey
          };
        });
      } else {
        return {
          firstLogin: false,
          user: null,
          changePassword: false,
          code: null,
          overrideErrorMessage,
          errorMessageTranslationKey
        };
      }
    },

    setupController(controller, model) {
      this._super(controller, model);

      if (Ember.get(model, 'overrideErrorMessage')) {
        controller.set('errorMsg', Ember.get(model, 'errorMessageTranslationKey'));
      }
    },

    resetController(controller, isExisting
    /* , transition*/
    ) {
      if (isExisting) {
        controller.setProperties({
          changePassword: false,
          waiting: false,
          adWaiting: false,
          shibbolethWaiting: false,
          localWaiting: false
        });
      }
    },

    activate() {
      (0, _jquery.default)('BODY').addClass('container-farm'); // eslint-disable-line
    },

    deactivate() {
      (0, _jquery.default)('BODY').removeClass('container-farm'); // eslint-disable-line
    }

  });

  _exports.default = _default;
});
define("login/login/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XrwpWb0b",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"login\"],[12],[2,\"\\n  \"],[10,\"h1\"],[12],[2,\"\\n    \"],[1,[30,[36,9],[\"loginPage.greeting\"],[[\"appName\",\"htmlSafe\"],[[35,34,[\"appName\"]],true]]]],[2,\"\\n    \"],[10,\"div\"],[14,0,\"logo\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"section\"],[14,0,\"pb-0\"],[12],[2,\"\\n    \"],[1,[30,[36,35],null,[[\"login\",\"class\"],[true,\"mb-10\"]]]],[2,\"\\n    \"],[10,\"br\"],[12],[13],[2,\"\\n\"],[6,[37,4],[[35,36]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,1],null,[[\"color\",\"icon\",\"message\"],[\"bg-error text-left\",\"icon-certificate\",[30,[36,9],[\"loginPage.insecure\"],[[\"appName\",\"htmlSafe\"],[[35,34,[\"appName\"]],true]]]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,33],[[35,0,[\"initError\"]]],null,[[\"default\"],[{\"statements\":[[6,[37,4],[[30,[36,32],[[35,8],[35,31]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"          \"],[1,[30,[36,16],null,[[\"action\",\"classNames\",\"onlyLocal\",\"provider\",\"waiting\"],[[30,[36,6],[[32,0],\"authenticate\"],null],\"row\",[35,31],\"local\",[35,30]]]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,4],[[35,19]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,18],null,[[\"action\"],[[30,[36,6],[[32,0],\"started\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,20]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,17],null,[[\"action\"],[[30,[36,6],[[32,0],\"started\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,21]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,13],null,[[\"action\",\"provider\",\"requestId\",\"publicKey\",\"responseType\"],[[30,[36,6],[[32,0],\"started\"],null],\"shibboleth\",[35,12],[35,11],[35,10]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,22]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,16],null,[[\"action\",\"classNames\",\"provider\",\"waiting\"],[[30,[36,6],[[32,0],\"authenticate\"],null],\"row\",\"activedirectory\",[35,15]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,23]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,16],null,[[\"action\",\"classNames\",\"provider\",\"waiting\"],[[30,[36,6],[[32,0],\"authenticate\"],null],\"row\",\"openldap\",[35,15]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,24]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,16],null,[[\"action\",\"classNames\",\"provider\",\"waiting\"],[[30,[36,6],[[32,0],\"authenticate\"],null],\"row\",\"freeipa\",[35,15]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,25]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,14],null,[[\"action\"],[[30,[36,6],[[32,0],\"started\"],null]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,26]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,13],null,[[\"action\",\"provider\",\"requestId\",\"publicKey\",\"responseType\"],[[30,[36,6],[[32,0],\"started\"],null],\"ping\",[35,12],[35,11],[35,10]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,27]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,13],null,[[\"action\",\"provider\",\"requestId\",\"publicKey\",\"responseType\"],[[30,[36,6],[[32,0],\"started\"],null],\"adfs\",[35,12],[35,11],[35,10]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,28]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,13],null,[[\"action\",\"provider\",\"requestId\",\"publicKey\",\"responseType\"],[[30,[36,6],[[32,0],\"started\"],null],\"okta\",[35,12],[35,11],[35,10]]]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,29]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[1,[30,[36,13],null,[[\"action\",\"provider\",\"requestId\",\"publicKey\",\"responseType\"],[[30,[36,6],[[32,0],\"started\"],null],\"keycloak\",[35,12],[35,11],[35,10]]]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,33],[[35,31]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[11,\"a\"],[24,0,\"link-text text-small mt-10 hand\"],[4,[38,6],[[32,0],\"toggleAuth\"],null],[12],[2,\"\\n            \"],[1,[30,[36,9],[[30,[36,4],[[35,8],\"loginUserPass.externalProvider\",\"loginUserPass.local\"],null]],[[\"externalName\"],[[35,7]]]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[15,0,[31,[\"banner p-10 \",[30,[36,4],[[35,3],\"bg-error\",\"bg-warning\"],null]]]],[14,\"role\",\"alert\"],[12],[2,\"\\n          \"],[1,[34,5]],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,4],[[35,0,[\"initError\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[1,[30,[36,1],null,[[\"color\",\"icon\",\"message\"],[\"bg-error\",\"icon-alert\",[35,0,[\"initError\",\"message\"]]]]]],[2,\"\\n\\n      \"],[1,[34,2]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"app\",\"banner-message\",\"reload-btn\",\"errorMsg\",\"if\",\"infoMsg\",\"action\",\"externalProvider\",\"showLocal\",\"t\",\"responseType\",\"publicKey\",\"requestId\",\"login-saml\",\"login-azure\",\"adWaiting\",\"login-user-pass\",\"login-google\",\"login-github\",\"isGithub\",\"isGoogle\",\"isShibboleth\",\"isActiveDirectory\",\"isOpenLdap\",\"isFreeIpa\",\"isAzureAd\",\"isPing\",\"isAdfs\",\"isOkta\",\"isKeycloak\",\"localWaiting\",\"onlyLocal\",\"or\",\"unless\",\"settings\",\"language-dropdown\",\"isInsecure\"]}",
    "moduleName": "login/login/template.hbs"
  });

  _exports.default = _default;
});
define.alias("shared/mixins/cattle-transitioning-resource", "login/mixins/cattle-transitioning-resource");
define.alias("shared/mixins/console", "login/mixins/console");
define.alias("shared/mixins/container-choices", "login/mixins/container-choices");
define.alias("shared/mixins/container-spark-stats", "login/mixins/container-spark-stats");
define.alias("shared/mixins/endpoint-ports", "login/mixins/endpoint-ports");
define.alias("shared/mixins/filter-state", "login/mixins/filter-state");
define.alias("shared/mixins/grafana", "login/mixins/grafana");
define.alias("shared/mixins/grouped-instances", "login/mixins/grouped-instances");
define.alias("shared/mixins/intl-placeholder", "login/mixins/intl-placeholder");
define.alias("shared/mixins/lazy-icon", "login/mixins/lazy-icon");
define.alias("shared/mixins/manage-labels", "login/mixins/manage-labels");
define.alias("shared/mixins/metrics", "login/mixins/metrics");
define.alias("shared/mixins/modal-base", "login/mixins/modal-base");
define.alias("shared/mixins/new-or-edit", "login/mixins/new-or-edit");
define.alias("shared/mixins/preload", "login/mixins/preload");
define.alias("shared/mixins/promise-to-cb", "login/mixins/promise-to-cb");
define.alias("shared/mixins/safe-style", "login/mixins/safe-style");
define.alias("shared/mixins/sortable-base", "login/mixins/sortable-base");
define.alias("shared/mixins/state-counts", "login/mixins/state-counts");
define.alias("shared/mixins/sticky-table-header", "login/mixins/sticky-table-header");
define.alias("shared/mixins/store-tweaks", "login/mixins/store-tweaks");
define.alias("shared/mixins/stripped-name", "login/mixins/stripped-name");
define.alias("shared/mixins/subscribe", "login/mixins/subscribe");
define.alias("shared/mixins/throttled-resize", "login/mixins/throttled-resize");
define.alias("shared/mixins/tooltip", "login/mixins/tooltip");
define.alias("shared/mixins/upgrade-component", "login/mixins/upgrade-component");
define.alias("shared/mixins/upload", "login/mixins/upload");
define.alias("shared/modal/service", "login/modal/service");
define.alias("@ember/render-modifiers/modifiers/did-insert", "login/modifiers/did-insert");
define.alias("@ember/render-modifiers/modifiers/did-update", "login/modifiers/did-update");
define.alias("@ember/render-modifiers/modifiers/will-destroy", "login/modifiers/will-destroy");
define.alias("shared/oauth/service", "login/oauth/service");
define.alias("shared/oci/service", "login/oci/service");
define.alias("shared/pipeline-github/service", "login/pipeline-github/service");
define.alias("shared/pnap/service", "login/pnap/service");
define.alias("shared/prefs/service", "login/prefs/service");
define.alias("shared/release-versions/service", "login/release-versions/service");
define("login/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define.alias("shared/resource-actions/service", "login/resource-actions/service");
define.alias("shared/role-template/service", "login/role-template/service");
define("login/routes", ["exports", "ember-engines/routes"], function (_exports, _routes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _routes.default)(function () {
    // Define your engine's route map here
    this.route('login', {
      path: '/'
    });
  });

  _exports.default = _default;
});
define.alias("shared/saml/service", "login/saml/service");
define.alias("shared/scope/service", "login/scope/service");
define.alias("shared/security-scan-config/service", "login/security-scan-config/service");
define.alias("ivy-codemirror/services/code-mirror", "login/services/code-mirror");
define("login/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
define("login/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
define.alias("shared/session/service", "login/session/service");
define.alias("shared/settings/service", "login/settings/service");
define.alias("shared/shibboleth-auth/service", "login/shibboleth-auth/service");
define.alias("shared/store-reset/service", "login/store-reset/service");
define.alias("shared/tab-session/service", "login/tab-session/service");
define("login/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "XaAuD2Zv",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "login/templates/application.hbs"
  });

  _exports.default = _default;
});
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-content", "login/templates/components/basic-dropdown-content");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown-trigger", "login/templates/components/basic-dropdown-trigger");
define.alias("ember-basic-dropdown/templates/components/basic-dropdown", "login/templates/components/basic-dropdown");
define.alias("shared/tooltip/service", "login/tooltip/service");
define.alias("liquid-fire/transitions/cross-fade", "login/transitions/cross-fade");
define.alias("liquid-fire/transitions/default", "login/transitions/default");
define.alias("liquid-fire/transitions/explode", "login/transitions/explode");
define.alias("liquid-fire/transitions/fade", "login/transitions/fade");
define.alias("liquid-fire/transitions/flex-grow", "login/transitions/flex-grow");
define.alias("liquid-fire/transitions/fly-to", "login/transitions/fly-to");
define.alias("liquid-fire/transitions/move-over", "login/transitions/move-over");
define.alias("liquid-fire/transitions/scale", "login/transitions/scale");
define.alias("liquid-fire/transitions/scroll-then", "login/transitions/scroll-then");
define.alias("liquid-fire/transitions/to-down", "login/transitions/to-down");
define.alias("liquid-fire/transitions/to-left", "login/transitions/to-left");
define.alias("liquid-fire/transitions/to-right", "login/transitions/to-right");
define.alias("liquid-fire/transitions/to-up", "login/transitions/to-up");
define.alias("liquid-fire/transitions/wait", "login/transitions/wait");
define.alias("shared/user-language/service", "login/user-language/service");
define.alias("shared/user-theme/service", "login/user-theme/service");
define.alias("shared/utils/add-view-action", "login/utils/add-view-action");
define.alias("shared/utils/additional-routes", "login/utils/additional-routes");
define.alias("shared/utils/azure-choices", "login/utils/azure-choices");
define.alias("shared/utils/browser-storage", "login/utils/browser-storage");
define.alias("ember-basic-dropdown/utils/calculate-position", "login/utils/calculate-position");
define.alias("shared/utils/constants", "login/utils/constants");
define.alias("shared/utils/convert-yaml", "login/utils/convert-yaml");
define.alias("shared/utils/debounce", "login/utils/debounce");
define.alias("shared/utils/download-files", "login/utils/download-files");
define.alias("shared/utils/errors", "login/utils/errors");
define.alias("shared/utils/fetch-yaml", "login/utils/fetch-yaml");
define("login/utils/fetch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = '@rancher/ember-api-store/utils/fetch';
  _exports.default = _default;
});
define.alias("shared/utils/flat-map", "login/utils/flat-map");
define.alias("shared/utils/group-compound-layout", "login/utils/group-compound-layout");
define.alias("shared/utils/intl/missing-message", "login/utils/intl/missing-message");
define.alias("shared/utils/load-script", "login/utils/load-script");
define.alias("shared/utils/multi-stats", "login/utils/multi-stats");
define.alias("shared/utils/navigation-tree", "login/utils/navigation-tree");
define.alias("shared/utils/parse-externalid", "login/utils/parse-externalid");
define.alias("shared/utils/parse-port", "login/utils/parse-port");
define.alias("shared/utils/parse-target", "login/utils/parse-target");
define.alias("shared/utils/parse-unit", "login/utils/parse-unit");
define.alias("shared/utils/parse-uri", "login/utils/parse-uri");
define.alias("shared/utils/parse-version", "login/utils/parse-version");
define.alias("shared/utils/percent-gauge", "login/utils/percent-gauge");
define.alias("shared/utils/pipelineStep", "login/utils/pipeline-constants");
define.alias("shared/utils/pipelineStep", "login/utils/pipelineStep");
define.alias("shared/utils/platform", "login/utils/platform");
define.alias("shared/utils/queue", "login/utils/queue");
define.alias("shared/utils/rackspace-choices", "login/utils/rackspace-choices");
define.alias("shared/utils/search-text", "login/utils/search-text");
define.alias("shared/utils/socket", "login/utils/socket");
define.alias("shared/utils/sort", "login/utils/sort");
define.alias("shared/utils/traffic-renderer", "login/utils/traffic-renderer");
define.alias("shared/utils/used-percent-gauge", "login/utils/used-percent-gauge");
define.alias("shared/utils/util", "login/utils/util");
define.alias("shared/version-choices/service", "login/version-choices/service");//# sourceMappingURL=engine.map
