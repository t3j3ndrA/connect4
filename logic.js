console.log("Connected")
var c0=42;
var c1=43;
var c2=44;
var c3=45;
var c4=46;
var c5=47;
var c6=48;

var turn=0;
var status;

function winnerStyle(){
    if(status=='rWin'){
     
      $(location).attr('href','rWin.html')
      

    }
    else if(status=='bWin'){
      $(location).attr('href','bWin.html')
       
    }
}



function ifwin()
{  var t=3;
   var pos=0;  

   var t2=21;
   var pos2=42;

  for(var i=0;i<7; i++)
    { 
      

        for(pos;pos<=t;pos++)
        {
         
          if(($('td').eq(pos).attr('class') ==
             $('td').eq(pos+1).attr('class') &&  
             
             $('td').eq(pos+1).attr('class')==
             $('td').eq(pos+2).attr('class') &&
             
             $('td').eq(pos+2).attr('class')==
             $('td').eq(pos+3).attr('class') )&&
             
             $('td').eq(pos).attr('class') != undefined
          )
          {   
              if($('td').eq(pos).attr('class')=='turnRed')
              {
                status='rWin';
                console.log(status);
                winnerStyle();
                break;
                
              }
              else 
               {   status='bWin';
                  console.log(status)
                  winnerStyle();
                  break;
                }
              
          }
        }
        pos+=3;
        t+=7;


        // ........................column check..................

        for(pos2;pos2>=t;pos2=pos2-7)
        {
         
          if(($('td').eq(pos2).attr('class') ==
             $('td').eq(pos2-7).attr('class') &&  
             
             $('td').eq(pos2-7).attr('class')==
             $('td').eq(pos2-14).attr('class') &&
             
             $('td').eq(pos2-14).attr('class')==
             $('td').eq(pos2-21).attr('class') )&&
             
             $('td').eq(pos2).attr('class') != undefined
          )
          {   
              if($('td').eq(pos2).attr('class')=='turnRed')
              {
                status='rWin';
                console.log(status);
                winnerStyle();
                break;
                
              }
              else 
               {   status='bWin';
                  console.log(status)
                  winnerStyle();
                  break;
                }
              
          }
        }
        t++;
        pos2=pos+t+21;

        
      }
}

// row c0 
$('#one').click(function()
{ if(turn%2==0)
  {
      value='turnRed';
      turn++;
  }
  else
  {
      value='turnBlue';
      turn++;
  }
  
  $('td').eq(c0).addClass(value);
    c0-=7;
   
  ifwin()
  })

//row c1
  $('#two').click(function()
{ if(turn%2==0)
  {
      value='turnRed';
      turn++;
  }
  else
  {
      value='turnBlue';
      turn++;
  }
  
  $('td').eq(c1).addClass(value);
    c1-=7;
    ifwin()
  })

//row c2
  $('#three').click(function()
{ if(turn%2==0)
  {
      value='turnRed';
      turn++;
  }
  else
  {
      value='turnBlue';
      turn++;
  }
  
  $('td').eq(c2).addClass(value);
    c2-=7;
    ifwin()
  })

//row c3
  $('#four').click(function()
{ if(turn%2==0)
  {
      value='turnRed';
      turn++;
  }
  else
  {
      value='turnBlue';
      turn++;
  }
  
  $('td').eq(c3).addClass(value);
    c3-=7;
    ifwin()
  })

//row c4
  $('#five').click(function()
{ if(turn%2==0)
  {
      value='turnRed';
      turn++;
  }
  else
  {
      value='turnBlue';
      turn++;
  }
  
  $('td').eq(c4).addClass(value);
    c4-=7;
    ifwin()
  })

//row c5
  $('#six').click(function()
{ if(turn%2==0)
  {
      value='turnRed';
      turn++;
  }
  else
  {
      value='turnBlue';
      turn++;
  }
  
  $('td').eq(c5).addClass(value);
    c5-=7;
    ifwin()
  })

// row c6
  $('#seven').click(function()
  { if(turn%2==0)
    {
        value='turnRed';
        turn++;
    }
    else
    {
        value='turnBlue';
        turn++;
    }
    
    $('td').eq(c6).addClass(value);
      c6-=7;
      ifwin() 
    })
