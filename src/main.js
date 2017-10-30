var url = document.location.host;

if (url === 'www.egyptianarabicdictionary.com') {
  console.log("lisaan-masry-downloader loaded!");

  var matches = document.querySelectorAll("img[src='../images/ifx_play24.png']");

  if (matches.length) {
    console.log('Found audio buttons: ' + matches.length);

    for (var i = 0; i < matches.length; ++i) {
      var item = matches[i];

      var click = item.attributes.onclick.nodeValue;
      var soundId = click.replace('play_sound(', '').replace(')', '');

      var parent = item.parentElement;
      var link = document.createElement('a');
      link.innerHTML = "&#8681;";

      link.href = 'http://www.lisaanmasry.com/online/getsound.php?language=ar&sound_id=' + soundId;

      link.style.float = 'right';
      link.style.textDecoration = 'underline';
      link.style.fontWeight = 'bold';

      link.setAttribute('target', '_blank');
      link.setAttribute('download', '');

      parent.insertBefore(link, item);
    }
  }
}

