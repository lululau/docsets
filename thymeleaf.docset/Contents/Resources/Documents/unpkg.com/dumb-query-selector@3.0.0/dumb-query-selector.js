/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(root, factory) {
	'use strict';

	// AMD
	if (typeof define === 'function' && define.amd) {
		define('dumb-query-selector', [], factory);
	}
	// CommonJS
	else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	}
	// Global
	else {
		var dumbQuerySelector = factory();
		Object.keys(dumbQuerySelector).forEach(function(key) {
			root[key] = dumbQuerySelector[key];
		});
	}
})(this, function() {
	'use strict';

	return {

		/**
		 * An element selector and shortcut for `(document/element).querySelector`.
		 * 
		 * @param {String} query
		 * @param {Node} [scope] The scope to limit the search to for non-ID queries.
		 *   Defaults to document scope.
		 * @return {Element} The matching element, or `null` if no match is found.
		 */
		$: function(query, scope) {
			return (scope || document).querySelector(query);
		},

		/**
		 * An element list selector, returning an array of elements because
		 * `NodeList`s are dumb.
		 * 
		 * @param {String} query
		 * @param {Node} [scope] The scope to limit the search to for non-ID queries.
		 *   Defaults to document scope.
		 * @return {Array} The list of matching elements.
		 */
		$$: function(query, scope) {
			return Array.prototype.slice.call((scope || document).querySelectorAll(query));
		}
	};
});
