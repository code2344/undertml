// FloweyTVX specifications
// FloweyX vars
var title = q('title');
var soul = q('soul'); if (soul === 'err404') {soul = '0';}
var floweyface = q('floweyface');
var floweycolor = q('floweycolor');

// Non-FloweyX scripts
if (title !== 'err404') {
  window.top.setTitle(title);
}

// FloweyTVX scripts
if (floweyface === 'err404' || floweyface === 'xlaugh') {
  
}
