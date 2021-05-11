client = new Paho.MQTT.Client("tomicloud.ddns.net", Number(1884), "wefkejbrfjef");
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  document.getElementById("log").innerHTML = "Connected";
  console.log("onConnect");
  client.subscribe("World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;


function connect()
{
    console.log("connect");
    client.connect({userName:"bmeSAKK01",password:"5JQ4WsSNQZ2BYsDb",onSuccess:onConnect});
}

function send(msg)
{
  console.log("send");
  message = new Paho.MQTT.Message(msg);
  message.destinationName = "Boti/Acca";
  client.send(message);
}

var WP1="h2";
var WP2="g2";
var WP3="f2";
var WP4="e2";
var WP5="d2";
var WP6="c2";
var WP7="b2";
var WP8="a2";

var WR1="h1";
var WN1="g1";
var WB1="f1";
var WK="e1";
var WQ="d1";
var WB2="c1";
var WN2="b1";
var WR2="a1";

var BP1="h7";
var BP2="g7";
var BP3="f7";
var BP4="e7";
var BP5="d7";
var BP6="c7";
var BP7="b7";
var BP8="a7";

var BR1="h8";
var BN1="g8";
var BB1="f8";
var BK= "e8";
var BQ= "d8";
var BB2="c8";
var BN2="b8";
var BR2="a8";

const lepkedos=[];
const lepkedosback=[];
var pos_to={x:0,y:0,z:0};
var i=0;
var count=0;

function init() {
  i=0;
  count=0;
  count_sanchoz=0;
  var x=-200*5,z=150*5,y=40*5;
  var d=42*5;
  pos_to.x=-x-1*d; pos_to.y=y;
  var WP1="h2"; pos_to.z=z;
  var babu="WP1";
  send(JSON.stringify({babu,pos_to}));
  var WP2="g2"; pos_to.z=z+d;
  var babu="WP2";
  send(JSON.stringify({babu,pos_to}));
  var WP3="f2"; pos_to.z=z+2*d;
  var babu="WP3";
  send(JSON.stringify({babu,pos_to}));
  var WP4="e2"; pos_to.z=z+3*d;
  var babu="WP4";
  send(JSON.stringify({babu,pos_to}));
  var WP5="d2"; pos_to.z=z+4*d;
  var babu="WP5";
  send(JSON.stringify({babu,pos_to}));
  var WP6="c2"; pos_to.z=z+5*d;
  var babu="WP6";
  send(JSON.stringify({babu,pos_to}));
  var WP7="b2"; pos_to.z=z+6*d;
  var babu="WP7";
  send(JSON.stringify({babu,pos_to}));
  var WP8="a2"; pos_to.z=z+7*d;
  var babu="WP8";
  send(JSON.stringify({babu,pos_to}));

  pos_to.x=-x; pos_to.y=y;
  var WR1="h1"; pos_to.z=z;
  var babu="WR1";
  send(JSON.stringify({babu,pos_to}));
  var WN1="g1"; pos_to.z=z+d;
  var babu="WN1";
  send(JSON.stringify({babu,pos_to}));
  var WB1="f1"; pos_to.z=z+2*d;
  var babu="WB1";
  send(JSON.stringify({babu,pos_to}));
  var WK="e1"; pos_to.z=z+3*d;
  var babu="WK";
  send(JSON.stringify({babu,pos_to}));
  var WQ="d1"; pos_to.z=z+4*d;
  var babu="WQ";
  send(JSON.stringify({babu,pos_to}));
  var WB2="c1"; pos_to.z=z+5*d;
  var babu="WB2";
  send(JSON.stringify({babu,pos_to}));
  var WN2="b1"; pos_to.z=z+6*d;
  var babu="WN2";
  send(JSON.stringify({babu,pos_to}));
  var WR2="a1"; pos_to.z=z+7*d;
  var babu="WR2";
  send(JSON.stringify({babu,pos_to}));

  pos_to.x=-x-6*d; pos_to.y=y;
  var BP1="h7"; pos_to.z=z;
  var babu="BP1";
  send(JSON.stringify({babu,pos_to}));
  var BP2="g7"; pos_to.z=z+d;
  var babu="BP2";
  send(JSON.stringify({babu,pos_to}));
  var BP3="f7"; pos_to.z=z+2*d;
  var babu="BP3";
  send(JSON.stringify({babu,pos_to}));
  var BP4="e7"; pos_to.z=z+3*d;
  var babu="BP4";
  send(JSON.stringify({babu,pos_to}));
  var BP5="d7"; pos_to.z=z+4*d;
  var babu="BP5";
  send(JSON.stringify({babu,pos_to}));
  var BP6="c7"; pos_to.z=z+5*d;
  var babu="BP6";
  send(JSON.stringify({babu,pos_to}));
  var BP7="b7"; pos_to.z=z+6*d;
  var babu="BP7";
  send(JSON.stringify({babu,pos_to}));
  var BP8="a7"; pos_to.z=z+7*d;
  var babu="BP8";
  send(JSON.stringify({babu,pos_to}));

  pos_to.x=-x-7*d; pos_to.y=y;
  var BR1="h8"; pos_to.z=z;
  var babu="BR1";
  send(JSON.stringify({babu,pos_to}));
  var BN1="g8"; pos_to.z=z+d;
  var babu="BN1";
  send(JSON.stringify({babu,pos_to}));
  var BB1="f8"; pos_to.z=z+2*d;
  var babu="BB1";
  send(JSON.stringify({babu,pos_to}));
  var BK="e8"; pos_to.z=z+3*d;
  var babu="BK";
  send(JSON.stringify({babu,pos_to}));
  var BQ="d8"; pos_to.z=z+4*d;
  var babu="BQ";
  send(JSON.stringify({babu,pos_to}));
  var BB2="c8"; pos_to.z=z+5*d;
  var babu="BB2";
  send(JSON.stringify({babu,pos_to}));
  var BN2="b8"; pos_to.z=z+6*d;
  var babu="BN2";
  send(JSON.stringify({babu,pos_to}));
  var BR2="a8"; pos_to.z=z+7*d;
  var babu="BR2";
  send(JSON.stringify({babu,pos_to}));

}

//fajl feltoltes
const fileSelector=document.getElementById('file-selector');
fileSelector.addEventListener('change',(event)=>{
  event.stopPropagation();
  event.preventDefault();
  const fileList=event.target.files;
  var file=fileList[0];
  var count_sanchoz=0;


  if(file){
    var reader= new FileReader();

    reader.onload=function (evt){
      var track = evt.target.result.split(' ');

      track.forEach((item, i) =>
      {
        count_sanchoz++;
        var move = "";
        var from = "";
        var to = "";
        var babu="";

        var pos_from={x:0,y:0,z:0};
        var pos_from2={x:0,y:0,z:0};
        var pos_to={x:0,y:0,z:0};
        var pos_to2={x:0,y:0,z:0};
        var pos_to3={x:0,y:0,z:0};
        var pos_to4={x:0,y:0,z:0};

        var line = item.split('.');
        if(item.includes(".") == 1)
          move=line[1];
        else
          move = line[0];

          var x=-200*5,z=150*5,y=40*5;
          var d=42*5;

        if(move.includes("R") || move.includes("N") || move.includes("B") || move.includes("Q") || move.includes("K"))
          move=move.substring(1,move.length);

        if(move.includes("-")){
          if(move.includes("0")){
            if(count_sanchoz%2==0){ //fekete
              if(move.length==3){ //rovid sanc
                 pos_to.x=-x-7*d ;pos_to.y=y ;pos_to.z=z+d;
                 babu="BK"; BK="g8";
                 lepkedos.push({babu,pos_to});
                 pos_to2.x=-x-7*d; pos_to2.y=y; pos_to2.z=z+3*d; //e8
                 lepkedosback.push({babu,pos_to2});
                 pos_to3.x=-x-7*d ;pos_to3.y=y ;pos_to3.z=z+2*d;
                 babu="BR1"; BR1="f8";
                 lepkedos.push({babu,pos_to3});
                 pos_to4.x=-x-7*d; pos_to4.y=y; pos_to4.z=z; //h8
                 lepkedosback.push({babu,pos_to4});

              }
              else{
                pos_to.x=-x-7*d ;pos_to.y=y ;pos_to.z=z+5*d;
                babu="BK"; BK="c8";
                lepkedos.push({babu,pos_to});
                pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+3*d; //e8
                lepkedosback.push({babu,pos_to});
                pos_to.x=-x-7*d ;pos_to.y=y ;pos_to.z=z+4*d;
                babu="BR2"; BR2="d8";
                lepkedos.push({babu,pos_to2});
                pos_to2.x=-x-7*d; pos_to2.y=y; pos_to2.z=z+7*d; //a8
                lepkedosback.push({babu,pos_to2});
              }
            }
            else{ //feher
              if(move.length==3){ //rovid sanc
                 pos_to.x=-x ;pos_to.y=y ;pos_to.z=z+d;
                 babu="WK"; WK="g1";
                 lepkedos.push({babu,pos_to});
                 pos_to2.x=-x; pos_to2.y=y; pos_to2.z=z+3*d; //e1
                 lepkedosback.push({babu,pos_to2});
                 pos_to3.x=-x ;pos_to3.y=y ;pos_to3.z=z+2*d;
                 babu="WR1"; WR1="f1";
                 lepkedos.push({babu,pos_to3});
                 pos_to4.x=-x; pos_to4.y=y; pos_to4.z=z; //h1
                 lepkedosback.push({babu,pos_to4});
              }
              else{
                pos_to.x=-x ;pos_to.y=y ;pos_to.z=z+5*d;
                babu="WK"; WK="c1";
                lepkedos.push({babu,pos_to});
                pos_to.x=-x; pos_to.y=y; pos_to.z=z+3*d; //e1
                lepkedosback.push({babu,pos_to});
                pos_to.x=-x ;pos_to.y=y ;pos_to.z=z+4*d;
                babu="WR2"; WR1="d1";
                lepkedos.push({babu,pos_to2});
                pos_to2.x=-x; pos_to2.y=y; pos_to2.z=z+7*d; //a1
                lepkedosback.push({babu,pos_to2});
              }
            }
          }
          else {
            from=move.substring(0,2);
            to=move.substring(3,5);

        switch(from){
        case "a1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+7*d; break;
        case "a2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "a3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "a4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "a5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "a6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "a7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "a8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+7*d; break;
        case "b1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+6*d; break;
        case "b2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "b3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "b4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "b5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "b6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "b7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "b8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+6*d; break;
        case "c1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+5*d; break;
        case "c2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "c3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "c4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "c5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "c6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "c7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "c8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+5*d; break;
        case "d1":  pos_from.x=-x ;pos_from.y=y ;pos_from.z=z+4*d; break;
        case "d2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "d3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "d4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "d5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "d6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "d7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "d8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+4*d; break;
        case "e1":  pos_from.x=-x ;pos_from.y=y ;pos_from.z=z+3*d; break;
        case "e2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "e3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "e4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "e5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "e6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "e7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "e8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+3*d; break;
        case "f1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+2*d; break;
        case "f2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "f3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "f4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "f5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "f6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "f7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "f8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+2*d; break;
        case "g1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+d; break;
        case "g2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+d; break;
        case "g3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+d; break;
        case "g4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+d; break;
        case "g5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+d; break;
        case "g6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+d; break;
        case "g7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+d; break;
        case "g8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+d; break;
        case "h1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z; break;
        case "h2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z; break;
        case "h3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z; break;
        case "h4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z; break;
        case "h5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z; break;
        case "h6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z; break;
        case "h7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z; break;
        case "h8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z; break;
        }



        switch(to){
        case "a1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+7*d; break;
        case "a2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "a3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "a4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "a5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "a6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "a7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "a8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+7*d; break;
        case "b1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+6*d; break;
        case "b2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "b3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "b4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "b5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "b6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "b7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "b8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+6*d; break;
        case "c1":  pos_to.x=-x ;    pos_to.y=y; pos_to.z=z+5*d; break;
        case "c2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "c3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "c4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "c5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "c6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "c7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "c8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+5*d; break;
        case "d1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+4*d; break;
        case "d2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "d3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "d4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "d5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "d6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "d7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "d8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+4*d; break;
        case "e1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+3*d; break;
        case "e2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "e3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "e4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "e5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "e6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "e7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "e8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+3*d; break;
        case "f1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+2*d; break;
        case "f2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "f3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "f4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "f5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "f6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "f7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "f8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+2*d; break;
        case "g1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+d; break;
        case "g2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+d; break;
        case "g3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+d; break;
        case "g4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+d; break;
        case "g5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+d; break;
        case "g6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+d; break;
        case "g7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+d; break;
        case "g8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+d; break;
        case "h1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z; break;
        case "h2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z; break;
        case "h3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z; break;
        case "h4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z; break;
        case "h5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z; break;
        case "h6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z; break;
        case "h7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z; break;
        case "h8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z; break;
        }


        if(from==WP1){babu="WP1"; WP1=to;};
        if(from==WP2){babu="WP2"; WP2=to;};
        if(from==WP3){babu="WP3"; WP3=to;};
        if(from==WP4){babu="WP4"; WP4=to;};
        if(from==WP5){babu="WP5"; WP5=to;};
        if(from==WP6){babu="WP6"; WP6=to;};
        if(from==WP7){babu="WP7"; WP7=to;};
        if(from==WP8){babu="WP8"; WP8=to;};

        if(from==BP1){babu="BP1"; BP1=to;};
        if(from==BP2){babu="BP2"; BP2=to;};
        if(from==BP3){babu="BP3"; BP3=to;};
        if(from==BP4){babu="BP4"; BP4=to;};
        if(from==BP5){babu="BP5"; BP5=to;};
        if(from==BP6){babu="BP6"; BP6=to;};
        if(from==BP7){babu="BP7"; BP7=to;};
        if(from==BP8){babu="BP8"; BP8=to;};

        if(from==WR1){babu="WR1"; WR1=to;};
        if(from==WN1){babu="WN1"; WN1=to;};
        if(from==WB1){babu="WB1"; WB1=to;};
        if(from==WK ){babu="WK"; WK =to;};
        if(from==WQ ){babu="WQ"; WQ =to;};
        if(from==WB2){babu="WB2"; WB2=to;};
        if(from==WN2){babu="WN2"; WN2=to;};
        if(from==WR2){babu="WR2"; WR2=to;};

        if(from==BR1){babu="BR1"; BR1=to;};
        if(from==BN1){babu="BN1"; BN1=to;};
        if(from==BB1){babu="BB1"; BB1=to;};
        if(from==BK ){babu="BK"; BK =to;};
        if(from==BQ ){babu="BQ"; BQ =to;};
        if(from==BB2){babu="BB2"; BB2=to;};
        if(from==BN2){babu="BN2"; BN2=to;};
        if(from==BR2){babu="BR2"; BR2=to;};

        lepkedos.push({babu,pos_to});
        pos_to=pos_from;
        lepkedosback.push({babu,pos_to});
      }
     }
     //utes
     else{
       from=move.substring(0,2);
       to=move.substring(3,5);

       switch(from){
       case "a1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+7*d; break;
       case "a2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "a3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "a4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "a5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "a6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "a7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "a8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+7*d; break;
       case "b1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+6*d; break;
       case "b2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "b3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "b4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "b5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "b6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "b7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "b8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+6*d; break;
       case "c1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+5*d; break;
       case "c2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "c3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "c4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "c5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "c6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "c7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "c8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+5*d; break;
       case "d1":  pos_from.x=-x ;pos_from.y=y ;pos_from.z=z+4*d; break;
       case "d2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "d3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "d4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "d5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "d6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "d7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "d8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+4*d; break;
       case "e1":  pos_from.x=-x ;pos_from.y=y ;pos_from.z=z+3*d; break;
       case "e2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "e3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "e4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "e5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "e6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "e7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "e8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+3*d; break;
       case "f1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+2*d; break;
       case "f2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "f3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "f4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "f5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "f6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "f7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "f8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+2*d; break;
       case "g1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z+d; break;
       case "g2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z+d; break;
       case "g3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z+d; break;
       case "g4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z+d; break;
       case "g5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z+d; break;
       case "g6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z+d; break;
       case "g7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z+d; break;
       case "g8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z+d; break;
       case "h1":  pos_from.x=-x;     pos_from.y=y; pos_from.z=z; break;
       case "h2":  pos_from.x=-x-1*d; pos_from.y=y; pos_from.z=z; break;
       case "h3":  pos_from.x=-x-2*d; pos_from.y=y; pos_from.z=z; break;
       case "h4":  pos_from.x=-x-3*d; pos_from.y=y; pos_from.z=z; break;
       case "h5":  pos_from.x=-x-4*d; pos_from.y=y; pos_from.z=z; break;
       case "h6":  pos_from.x=-x-5*d; pos_from.y=y; pos_from.z=z; break;
       case "h7":  pos_from.x=-x-6*d; pos_from.y=y; pos_from.z=z; break;
       case "h8":  pos_from.x=-x-7*d; pos_from.y=y; pos_from.z=z; break;
       }



       switch(to){
       case "a1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+7*d; break;
       case "a2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "a3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "a4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "a5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "a6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "a7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "a8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+7*d; break;
       case "b1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+6*d; break;
       case "b2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "b3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "b4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "b5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "b6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "b7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "b8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+6*d; break;
       case "c1":  pos_to.x=-x ;    pos_to.y=y; pos_to.z=z+5*d; break;
       case "c2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "c3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "c4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "c5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "c6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "c7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "c8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+5*d; break;
       case "d1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+4*d; break;
       case "d2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "d3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "d4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "d5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "d6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "d7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "d8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+4*d; break;
       case "e1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+3*d; break;
       case "e2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "e3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "e4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "e5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "e6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "e7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "e8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+3*d; break;
       case "f1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+2*d; break;
       case "f2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "f3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "f4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "f5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "f6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "f7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "f8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+2*d; break;
       case "g1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z+d; break;
       case "g2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z+d; break;
       case "g3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z+d; break;
       case "g4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z+d; break;
       case "g5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z+d; break;
       case "g6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z+d; break;
       case "g7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z+d; break;
       case "g8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z+d; break;
       case "h1":  pos_to.x=-x;     pos_to.y=y; pos_to.z=z; break;
       case "h2":  pos_to.x=-x-1*d; pos_to.y=y; pos_to.z=z; break;
       case "h3":  pos_to.x=-x-2*d; pos_to.y=y; pos_to.z=z; break;
       case "h4":  pos_to.x=-x-3*d; pos_to.y=y; pos_to.z=z; break;
       case "h5":  pos_to.x=-x-4*d; pos_to.y=y; pos_to.z=z; break;
       case "h6":  pos_to.x=-x-5*d; pos_to.y=y; pos_to.z=z; break;
       case "h7":  pos_to.x=-x-6*d; pos_to.y=y; pos_to.z=z; break;
       case "h8":  pos_to.x=-x-7*d; pos_to.y=y; pos_to.z=z; break;
       }

     if(to==WP1){babu="WP1";WP1=" ";};
     if(to==WP2){babu="WP2";WP2=" ";};
     if(to==WP3){babu="WP3";WP3=" ";};
     if(to==WP4){babu="WP4";WP4=" ";};
     if(to==WP5){babu="WP5";WP5=" ";};
     if(to==WP6){babu="WP6";WP6=" ";};
     if(to==WP7){babu="WP7";WP7=" ";};
     if(to==WP8){babu="WP8";WP8=" ";};

     if(to==BP1){babu="BP1";BP1=" ";};
     if(to==BP2){babu="BP2";BP2=" ";};
     if(to==BP3){babu="BP3";BP3=" ";};
     if(to==BP4){babu="BP4";BP4=" ";};
     if(to==BP5){babu="BP5";BP5=" ";};
     if(to==BP6){babu="BP6";BP6=" ";};
     if(to==BP7){babu="BP7";BP7=" ";};
     if(to==BP8){babu="BP8";BP8=" ";};

     if(to==WR1){babu="WR1";WR1=" ";};
     if(to==WN1){babu="WN1";WN1=" ";};
     if(to==WB1){babu="WB1";WB1=" ";};
     if(to==WK ){babu="WK"; WK=" ";};
     if(to==WQ ){babu="WQ"; WQ=" ";};
     if(to==WB2){babu="WB2";WB2=" ";};
     if(to==WN2){babu="WN2";WN2=" ";};
     if(to==WR2){babu="WR2";WR2=" ";};

     if(to==BR1){babu="BR1";BR1=" ";};
     if(to==BN1){babu="BN1";BN1=" ";};
     if(to==BB1){babu="BB1";BB1=" ";};
     if(to==BK ){babu="BK"; BK=" ";};
     if(to==BQ ){babu="BQ"; BQ=" ";};
     if(to==BB2){babu="BB2";BB2=" ";};
     if(to==BN2){babu="BN2";BN2=" ";};
     if(to==BR2){babu="BR2";BR2=" ";};

     var a=-2;
     var b=0.75;

     switch (babu) {
       case "WP1": pos_to2.x = -x;         pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP2": pos_to2.x = -x - 1 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP3": pos_to2.x = -x - 2 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP4": pos_to2.x = -x - 3 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP5": pos_to2.x = -x - 4 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP6": pos_to2.x = -x - 5 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP7": pos_to2.x = -x - 6 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "WP8": pos_to2.x = -x - 7 * d; pos_to2.y = y;  pos_to2.z = (a-1) * d*b; break;
       case "BP1": pos_to2.x = -x; pos_to2.y = y;          pos_to2.z = (a-3) * d*b; break;
       case "BP2": pos_to2.x = -x - 1 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "BP3": pos_to2.x = -x - 2 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "BP4": pos_to2.x = -x - 3 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "BP5": pos_to2.x = -x - 4 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "BP6": pos_to2.x = -x - 5 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "BP7": pos_to2.x = -x - 6 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "BP8": pos_to2.x = -x - 7 * d; pos_to2.y = y;  pos_to2.z = (a-3) * d*b; break;
       case "WR1": pos_to2.x = -x; pos_to2.y = y;          pos_to2.z = (a-2) * d*b; break;
       case "WN1": pos_to2.x = -x - 1 * d; pos_to2.y = y;  pos_to2.z = (a-2) * d*b; break;
       case "WB1": pos_to2.x = -x - 2 * d; pos_to2.y = y;  pos_to2.z = (a-2) * d*b; break;
       case "WK": pos_to2.x = -x - 3 * d; pos_to2.y = y;   pos_to2.z = (a-2) * d*b; break;
       case "WQ": pos_to2.x = -x - 4 * d; pos_to2.y = y;   pos_to2.z = (a-2) * d*b; break;
       case "WB2": pos_to2.x = -x - 5 * d; pos_to2.y = y;  pos_to2.z = (a-2) * d*b; break;
       case "WN2": pos_to2.x = -x - 6 * d; pos_to2.y = y;  pos_to2.z = (a-2) * d*b; break;
       case "WR2": pos_to2.x = -x - 7 * d; pos_to2.y = y;  pos_to2.z = (a-2) * d*b; break;
       case "BR1": pos_to2.x = -x; pos_to2.y = y;          pos_to2.z = (a-4) * d*b; break;
       case "BB1": pos_to2.x = -x - 1 * d; pos_to2.y = y;  pos_to2.z = (a-4) * d*b; break;
       case "BN1": pos_to2.x = -x - 2 * d; pos_to2.y = y;  pos_to2.z = (a-4) * d*b; break;
       case "BK": pos_to2.x = -x - 3 * d; pos_to2.y = y;   pos_to2.z = (a-4) * d*b; break;
       case "BQ": pos_to2.x = -x - 4 * d; pos_to2.y = y;   pos_to2.z = (a-4) * d*b; break;
       case "BN2": pos_to2.x = -x - 5 * d; pos_to2.y = y;  pos_to2.z = (a-4) * d*b; break;
       case "BB2": pos_to2.x = -x - 6 * d; pos_to2.y = y;  pos_to2.z = (a-4) * d*b; break;
       case "BR2": pos_to2.x = -x - 7 * d; pos_to2.y = y;  pos_to2.z = (a-4) * d*b; break;
      }

     lepkedos.push({babu,pos_to2});

     if(from==WP1){babu="WP1"; WP1=to;};
     if(from==WP2){babu="WP2"; WP2=to;};
     if(from==WP3){babu="WP3"; WP3=to;};
     if(from==WP4){babu="WP4"; WP4=to;};
     if(from==WP5){babu="WP5"; WP5=to;};
     if(from==WP6){babu="WP6"; WP6=to;};
     if(from==WP7){babu="WP7"; WP7=to;};
     if(from==WP8){babu="WP8"; WP8=to;};

     if(from==BP1){babu="BP1"; BP1=to;};
     if(from==BP2){babu="BP2"; BP2=to;};
     if(from==BP3){babu="BP3"; BP3=to;};
     if(from==BP4){babu="BP4"; BP4=to;};
     if(from==BP5){babu="BP5"; BP5=to;};
     if(from==BP6){babu="BP6"; BP6=to;};
     if(from==BP7){babu="BP7"; BP7=to;};
     if(from==BP8){babu="BP8"; BP8=to;};

     if(from==WR1){babu="WR1"; WR1=to;};
     if(from==WN1){babu="WN1"; WN1=to;};
     if(from==WB1){babu="WB1"; WB1=to;};
     if(from==WK ){babu="WK"; WK =to;};
     if(from==WQ ){babu="WQ"; WQ =to;};
     if(from==WB2){babu="WB2"; WB2=to;};
     if(from==WN2){babu="WN2"; WN2=to;};
     if(from==WR2){babu="WR2"; WR2=to;};

     if(from==BR1){babu="BR1"; BR1=to;};
     if(from==BN1){babu="BN1"; BN1=to;};
     if(from==BB1){babu="BB1"; BB1=to;};
     if(from==BK ){babu="BK"; BK =to;};
     if(from==BQ ){babu="BQ"; BQ =to;};
     if(from==BB2){babu="BB2"; BB2=to;};
     if(from==BN2){babu="BN2"; BN2=to;};
     if(from==BR2){babu="BR2"; BR2=to;};

     lepkedos.push({babu,pos_to});
     pos_to=pos_from;
     lepkedosback.push({babu,pos_to});
     }
    });

    };
    reader.onerror=function(evt){
      console.error=("Error occured",evt);
    };

    reader.readAsText(file,"UTF-8");
  }
});

function GoToEnd(){
  for (i=0; i < lepkedos.length; i++) {
    console.log(lepkedos);
    send(JSON.stringify(lepkedos[i]));
  }
}

function myFunc(){
  console.log(lepkedos);
  send(JSON.stringify(lepkedos[i]));
  i++;
}

function myFuncBack(){
  i--;
  console.log(lepkedosback);
  send(JSON.stringify(lepkedosback[i]));
}
