// Saves options to chrome.storage
function save_options() {
  var crazyProb = document.getElementById('crazyProb').value;
  var normalProb = document.getElementById('normalProb').value;
  var grayProb = document.getElementById('grayProb').value;
  var gifProb = document.getElementById('gifProb').value;

  chrome.storage.sync.set({
    crazyProb: crazyProb,
    normalProb: normalProb,
    grayProb: grayProb,
    gifProb: gifProb
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    crazyProb: 5,
    normalProb: 1,
    grayProb: 0,
    gifProb: 5
  }, function(items) {
    document.getElementById('crazyProb').value = items.crazyProb;
    document.getElementById('normalProb').value = items.normalProb;
    document.getElementById('grayProb').value = items.grayProb;
    document.getElementById('gifProb').value = items.gifProb;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
