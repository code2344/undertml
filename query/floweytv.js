// FloweyTV specifications
// Flowey vars
var title = q('title');
var soul = q('soul'); if (soul === 'err404') {soul = '0';}
var floweyface = q('floweyface');
var floweycolor = q('floweycolor');

// Non-Flowey scripts
if (title !== 'err404') {
  window.top.setTitle(title);
}

// FloweyTV scripts
if (floweyface === 'err404') {
  
}
