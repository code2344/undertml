// Edits the main UNDERTML site pages
// vars
var title = q('title');
var icon = q('icon');
var soul = q('soul');

// scripts
if (title !== 'err404') {
  setTitle(title);
}
if (soul !== 'err404') {
  var iconURL = 'sprite/soul'+soul+'.png';
  var logoURL = 'logo/logo_undertml'+soul+'.png';
  setIcon(iconURL);
  var link = document.createElement('link');
  link.rel='shortcut icon';
  link.href=iconURL;
  document.getElementsByTagName('head')[0].appendChild(link);
  $(".logo, #siteheader").attr("src", logoURL);
}
