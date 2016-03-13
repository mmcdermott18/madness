  $(document).ready(function() {
    var FG1at = "";
    var FG1as = "";
    var FG1bt = "";
    var FG1bs = "";
    $('#FF1a').click(function() {
      $('#FG1at').empty().append(FF1at);
      $('#FG1as').empty().append(FF1as);
      $('#FG1at').attr('data-teamname', FF1at);
      $('#FG1as').attr('data-seed', FF1as);
      FG1at = FF1at;
      FG1as = FF1as;
    });
    $('#FF1b').click(function() {
      $('#FG1at').empty().append(FF1bt);
      $('#FG1as').empty().append(FF1bs);
      $('#FG1at').attr('data-teamname', FF1bt);
      $('#FG1as').attr('data-seed', FF1bs);
      FG1at = FF1bt;
      FG1as = FF1bs;
    });
    $('#FF2a').click(function() {
      $('#FG1bt').empty().append(FF2at);
      $('#FG1bs').empty().append(FF2as);
      $('#FG1bt').attr('data-teamname', FF2at);
      $('#FG1bs').attr('data-seed', FF2as);
      FG1bt = FF2at;
      FG1bs = FF2as;
    });
    $('#FF2b').click(function() {
      $('#FG1bt').empty().append(FF2bt);
      $('#FG1bs').empty().append(FF2bs);
      $('#FG1bt').attr('data-teamname', FF2bt);
      $('#FG1bs').attr('data-seed', FF2bs);
      FG1bt = FF2bt;
      FG1bs = FF2bs;
    });
    $('#FG1a').click(function() {
      $('#FG1a').toggleClass("winner");
      $('#FG1b').removeClass("winner");
    });
    $('#FG1b').click(function() {
      $('#FG1b').toggleClass("winner");
      $('#FG1a').removeClass("winner");
    });
    });