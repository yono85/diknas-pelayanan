/**
 *
 * Ecommerce
 * Author: Mobythemes
 * Email: info@mobythemes.com
 * Website: mobythemes.com
 * Version: 1.0
 * Date: Wed Dec 18 2019
 * Category: EventsManagement
 * Title: Ecommerce scripts
 *
 */

$(document).ready(function() {
  var configFontAwesome = {
    custom: {
        families: ['fontawesome'],
        urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css']
        },
        fontactive: function () {
            $('.rateit').rateit({ value: 2 });
        }
    };
   WebFont.load(configFontAwesome);
});
