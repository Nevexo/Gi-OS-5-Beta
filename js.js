 function GetClock(){
      var d=new Date();
      var nhour=d.getHours(),nmin=d.getMinutes(),ap;
      if(nhour==0){ap=" AM";nhour=12;}
      else if(nhour<12){ap=" AM";}
      else if(nhour==12){ap=" PM";}
      else if(nhour>12){ap=" PM";nhour-=12;}
      
      if(nmin<=9) nmin="0"+nmin;
      
      document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
      }
      
