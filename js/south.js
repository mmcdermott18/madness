  $(document).ready(function() {
    var S0at = "Play In A"
    var S0as = "11 "
    var S0bt = "Play In B"
    var S0bs = "11 "
    var S11t = "Kansas";
    var S11s = "1 ";
    var S116t = "Austin Peay";
    var S116s = "16 ";
    var S28t = "Colorado";
    var S28s = "8 ";
    var S29t = "Connecticut";
    var S29s = "9 ";
    var S35t = "Maryland";
    var S35s = "5 ";
    var S312t = "South Dakota St";
    var S312s = "12 ";
    var S44t = "California";
    var S44s = "4 ";
    var S413t = "Hawaii";
    var S413s = "13 ";
    var S56t = "Arizona";
    var S56s = "6 ";
    var S511t = "";
    var S511s = "";
    var S63t = "Miami";
    var S63s = "3 ";
    var S614t = "Bufalo";
    var S614s = "14 ";
    var S77t = "Iowa";
    var S77s = "7 ";
    var S710t = "Temple";
    var S710s = "10 ";
    var S82t = "Villanova";
    var S82s = "2 ";
    var S815t = "UNC Asheville";
    var S815s = "15 ";
    var S9at = "";
    var S9as = "";
    var S9bt = "";
    var S9bs = "";
    var S10at = "";
    var S10as = "";
    var S10bt = "";
    var S10bs = "";
    var S11at = "";
    var S11as = "";
    var S11bt = "";
    var S11bs = "";
    var S12at = "";
    var S12as = "";
    var S12bt = "";
    var S12bs = "";
    $('#S11t').append(S11t);
    $('#S11s').append(S11s);
    $('#S0at').append(S0at);
    $('#S0as').append(S0as);
    $('#S0bt').append(S0bt);
    $('#S0bs').append(S0bs);
    $('#S28t').append(S28t);
    $('#S28s').append(S28s);
    $('#S29t').append(S29t);
    $('#S29s').append(S29s);
    $('#S35t').append(S35t);
    $('#S35s').append(S35s);
    $('#S312t').append(S312t);
    $('#S312s').append(S312s);
    $('#S44t').append(S44t);
    $('#S44s').append(S44s);
    $('#S413t').append(S413t);
    $('#S413s').append(S413s);
    $('#S56t').append(S56t);
    $('#S56s').append(S56s);
    $('#S511t').append(S511t);
    $('#S511s').append(S511s);
    $('#S63t').append(S63t);
    $('#S63s').append(S63s);
    $('#S614t').append(S614t);
    $('#S614s').append(S614s);
    $('#S77t').append(S77t);
    $('#S77s').append(S77s);
    $('#S710t').append(S710t);
    $('#S710s').append(S710s);
    $('#S82t').append(S82t);
    $('#S82s').append(S82s);
    $('#S815t').append(S815t);
    $('#S815s').append(S815s);
    $('#S0a').click(function() {
      $('#S116t').empty().append(S0at);
      $('#S116s').empty().append(S0as);
      $('#S9at').empty();
      $('#S9as').empty();
      $('#S13at').empty();
      $('#S13as').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S116t').attr('data-teamname', S0at);
      $('#S116s').attr('data-seed', S0as);
      S116t = S0at;
      S116s = S0as;
    });
    $('#S0b').click(function() {
      $('#S116t').empty().append(S0bt);
      $('#S116s').empty().append(S0bs);
      $('#S9at').empty();
      $('#S9as').empty();
      $('#S13at').empty();
      $('#S13as').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S116t').attr('data-teamname', S0bt);
      $('#S116s').attr('data-seed', S0bs);
      S116t = S0bt;
      S116s = S0bs;
    });
    $('#S11').click(function() {
      $('#S9at').empty().append(S11t);
      $('#S9as').empty().append(S11s);
      $('#S13at').empty();
      $('#S13as').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S9at').attr('data-teamname', S11t);
      $('#S9as').attr('data-seed', S11s);
      S9at = S11t;
      S9as = S11s;
    });
    $('#S116').click(function() {
      $('#S9at').empty().append(S116t);
      $('#S9as').empty().append(S116s);
      $('#S13at').empty();
      $('#S13as').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S9at').attr('data-teamname', S116t);
      $('#S9as').attr('data-seed', S116s);
      S9at = S116t;
      S9as = S116s;
    });
    $('#S28').click(function() {
      $('#S9bt').empty().append(S28t);
      $('#S9bs').empty().append(S28s);
      $('#S13at').empty();
      $('#S13as').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S9bt').attr('data-teamname', S28t);
      $('#S9bs').attr('data-seed', S28s);
      S9bt = S28t;
      S9bs = S28s;
    });
    $('#S29').click(function() {
      $('#S9bt').empty().append(S29t);
      $('#S9bs').empty().append(S29s);
      $('#S13at').empty();
      $('#S13as').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S9bt').attr('data-teamname', S29t);
      $('#S9bs').attr('data-seed', S29s);
      S9bt = S29t;
      S9bs = S29s;
    });
    $('#S35').click(function() {
      $('#S10at').empty().append(S35t);
      $('#S10as').empty().append(S35s);
      $('#S13bt').empty();
      $('#S13bs').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S10at').attr('data-teamname', S35t);
      $('#S10as').attr('data-seed', S35s);
      S10at = S35t;
      S10as = S35s;
    });
    $('#S312').click(function() {
      $('#S10at').empty().append(S312t);
      $('#S10as').empty().append(S312s);
      $('#S13bt').empty();
      $('#S13bs').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S10at').attr('data-teamname', S312t);
      $('#S10as').attr('data-seed', S312s);
      S10at = S312t;
      S10as = S312s;
    });
    $('#S44').click(function() {
      $('#S10bt').empty().append(S44t);
      $('#S10bs').empty().append(S44s);
      $('#S13bt').empty();
      $('#S13bs').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S10bt').attr('data-teamname', S44t);
      $('#S10bs').attr('data-seed', S44s);
      S10bt = S44t;
      S10bs = S44s;
    });
    $('#S413').click(function() {
      $('#S10bt').empty().append(S413t);
      $('#S10bs').empty().append(S413s);
      $('#S13bt').empty();
      $('#S13bs').empty();
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S10bt').attr('data-teamname', S413t);
      $('#S10bs').attr('data-seed', S413s);
      S10bt = S413t;
      S10bs = S413s;
    });
        $('#S56').click(function() {
      $('#S11at').empty().append(S56t);
      $('#S11as').empty().append(S56s);
      $('#S14at').empty();
      $('#S14as').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S11at').attr('data-teamname', S56t);
      $('#S11as').attr('data-seed', S56s);
      S11at = S56t;
      S11as = S56s;
    });
    $('#S511').click(function() {
      $('#S11at').empty().append(S511t);
      $('#S11as').empty().append(S511s);
      $('#S14at').empty();
      $('#S14as').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S11at').attr('data-teamname', S511t);
      $('#S11as').attr('data-seed', S511s);
      S11at = S511t;
      S11as = S511s;
    });
    $('#S63').click(function() {
      $('#S11bt').empty().append(S63t);
      $('#S11bs').empty().append(S63s);
      $('#S14at').empty();
      $('#S14as').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S11bt').attr('data-teamname', S63t);
      $('#S11bs').attr('data-seed', S63s);
      S11bt = S63t;
      S11bs = S63s;
    });
    $('#S614').click(function() {
      $('#S11bt').empty().append(S614t);
      $('#S11bs').empty().append(S614s);
      $('#S14at').empty();
      $('#S14as').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S11bt').attr('data-teamname', S614t);
      $('#S11bs').attr('data-seed', S614s);
      S11bt = S614t;
      S11bs = S614s;
    });
    $('#S77').click(function() {
      $('#S12at').empty().append(S77t);
      $('#S12as').empty().append(S77s);
      $('#S14bt').empty();
      $('#S14bs').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S12at').attr('data-teamname', S77t);
      $('#S12as').attr('data-seed', S77s);
      S12at = S77t;
      S12as = S77s;
    });
    $('#S710').click(function() {
      $('#S12at').empty().append(S710t);
      $('#S12as').empty().append(S710s);
      $('#S14bt').empty();
      $('#S14bs').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S12at').attr('data-teamname', S710t);
      $('#S12as').attr('data-seed', S710s);
      S12at = S710t;
      S12as = S710s;
    });
    $('#S82').click(function() {
      $('#S12bt').empty().append(S82t);
      $('#S12bs').empty().append(S82s);
      $('#S14bt').empty();
      $('#S14bs').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S12bt').attr('data-teamname', S82t);
      $('#S12bs').attr('data-seed', S82s);
      S12bt = S82t;
      S12bs = S82s;
    });
    $('#S815').click(function() {
      $('#S12bt').empty().append(S815t);
      $('#S12bs').empty().append(S815s);
      $('#S14bt').empty();
      $('#S14bs').empty();
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S12bt').attr('data-teamname', S815t);
      $('#S12bs').attr('data-seed', S815s);
      S12bt = S815t;
      S12bs = S815s;
    });
    $('#S9a').click(function() {
      $('#S13at').empty().append(S9at);
      $('#S13as').empty().append(S9as);
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S13at').attr('data-teamname', S9at);
      $('#S13as').attr('data-seed', S9as);
      S13at = S9at;
      S13as = S9as;
    });
    $('#S9b').click(function() {
      $('#S13at').empty().append(S9bt);
      $('#S13as').empty().append(S9bs);
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S13at').attr('data-teamname', S9bt);
      $('#S13as').attr('data-seed', S9bs);
      S13at = S9bt;
      S13as = S9bs;
    });
    $('#S10a').click(function() {
      $('#S13bt').empty().append(S10at);
      $('#S13bs').empty().append(S10as);
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S13bt').attr('data-teamname', S10at);
      $('#S13bs').attr('data-seed', S10as);
      S13bt = S10at;
      S13bs = S10as;
    });
    $('#S10b').click(function() {
      $('#S13bt').empty().append(S10bt);
      $('#S13bs').empty().append(S10bs);
      $('#S15at').empty();
      $('#S15as').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S13bt').attr('data-teamname', S10bt);
      $('#S13bs').attr('data-seed', S10bs);
      S13bt = S10bt;
      S13bs = S10bs;
    });
      $('#S11a').click(function() {
      $('#S14at').empty().append(S11at);
      $('#S14as').empty().append(S11as);
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S14at').attr('data-teamname', S11at);
      $('#S14as').attr('data-seed', S11as);
      S14at = S11at;
      S14as = S11as;
    });
    $('#S11b').click(function() {
      $('#S14at').empty().append(S11bt);
      $('#S14as').empty().append(S11bs);
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S14at').attr('data-teamname', S11bt);
      $('#S14as').attr('data-seed', S11bs);
      S14at = S11bt;
      S14as = S11bs;
    });
    $('#S12a').click(function() {
      $('#S14bt').empty().append(S12at);
      $('#S14bs').empty().append(S12as);
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S14bt').attr('data-teamname', S12at);
      $('#S14bs').attr('data-seed', S12as);
      S14bt = S12at;
      S14bs = S12as;
    });
    $('#S12b').click(function() {
      $('#S14bt').empty().append(S12bt);
      $('#S14bs').empty().append(S12bs);
      $('#S15bt').empty();
      $('#S15bs').empty();
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S14bt').attr('data-teamname', S12bt);
      $('#S14bs').attr('data-seed', S12bs);
      S14bt = S12bt;
      S14bs = S12bs;
    });
    $('#S13a').click(function() {
      $('#S15at').empty().append(S13at);
      $('#S15as').empty().append(S13as);
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S15at').attr('data-teamname', S13at);
      $('#S15as').attr('data-seed', S13as);
      S15at = S13at;
      S15as = S13as;
    });
    $('#S13b').click(function() {
      $('#S15at').empty().append(S13bt);
      $('#S15as').empty().append(S13bs);
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S15at').attr('data-teamname', S13bt);
      $('#S15as').attr('data-seed', S13bs);
      S15at = S13bt;
      S15as = S13bs;
    });
    $('#S14a').click(function() {
      $('#S15bt').empty().append(S14at);
      $('#S15bs').empty().append(S14as);
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S15bt').attr('data-teamname', S14at);
      $('#S15bs').attr('data-seed', S14as);
      S15bt = S14at;
      S15bs = S14as;
    });
    $('#S14b').click(function() {
      $('#S15bt').empty().append(S14bt);
      $('#S15bs').empty().append(S14bs);
      $('#FF2at').empty();
      $('#FF2as').empty();
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#S15bt').attr('data-teamname', S14bt);
      $('#S15bs').attr('data-seed', S14bs);
      S15bt = S14bt;
      S15bs = S14bs;
    });
    $('#S15a').click(function() {
      $('#FF2at').empty().append(S15at);
      $('#FF2as').empty().append(S15as);
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#FF2at').attr('data-teamname', S15at);
      $('#FF2as').attr('data-seed', S15as);
      FF2at = S15at;
      FF2as = S15as;
    });
    $('#S15b').click(function() {
      $('#FF2at').empty().append(S15bt);
      $('#FF2as').empty().append(S15bs);
      $('#FG1bt').empty();
      $('#FG1bs').empty();
      $('#FF2at').attr('data-teamname', S15bt);
      $('#FF2as').attr('data-seed', S15bs);
      FF2at = S15bt;
      FF2as = S15bs;
    });
  });