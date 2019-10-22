function handleShowHide(showID, hideID) {
  var show = document.getElementById(showID);
  var hide = document.getElementById(hideID);

  show.style.display = "";
  hide.style.display = "none";

  hideBackArrow();
}

function hideBackArrow() {
  document.getElementById('backArrow').style.display = 'none';
}

function handleOnClickNavigation(url) {
  var s = window.open(url, '_self');

  if (s && s.focus) {
    s.focus();
  } else if (!s) {
    window.location.href = url;
  }
}

function handlePageOnLoad() {
  var urlParams = new URLSearchParams(window.location.search);
  var ltr = urlParams.get('ltr');
  var whichColor = urlParams.get('color');

  if (ltr === 'true') {
    document.getElementById("body").classList.remove("slide-right-to-left");
  } else {
    document.getElementById("body").classList.remove("slide-left-to-right");
  }

  if (whichColor === 'math') {
    document.getElementById("body").classList.remove("cs-color");
  } else {
    document.getElementById("body").classList.remove("math-color");
  }
}
