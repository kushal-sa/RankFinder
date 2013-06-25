				$(document).ready(function(){
					
					var indx;
					var result;
					var data;
					var values=[12,12,29,39,101,166,259,236,164,71];
					var ctx = document.getElementById("myChart").getContext("2d");
						
					data={
	
	labels:["0 to 1","1 to 2","2 to 3","3 to 4","4 to 5","5 to 6","6 to 7","7 to 8","8 to 9","9 to 10"],
	
	datasets: [{
	
	fillColor : "#7AC943",
	strokeColor : "#253f11",
	
	
	data:values}
				
	
	]};
	
	options={
	
		scaleLineWidth : 4,
		scaleGridLineWidth : 2,	
		barValueSpacing : 20,
	
	}
					
					//Get Index
					$.getJSON('./index/masterindex.JSON',function(data){
					
						console.log("Done");
						
						indx = lunr.Index.load(data);
						console.log("index loaded");
					})
					
					//Get main file
					$.getJSON('./data/SortedMasterList.JSON',function(data){
					
						result = data;
						console.log("file loaded");
					
					})
					
					
						var send = function(){
							new Chart(ctx).Bar(data,options);
							
						}
					
							
					
					$(".opt").click(function(){
					
						var expr;
					
						switch($(this).html()){
						
							case "AR": expr=12110;break;
							case "BT": expr=121110;break;
							case "CE": expr=12113;break;
							case "CES": expr=12215;break;
							case "CH": expr=12112;break;
							case "CHH": expr=122100;break;
							case "CSE": expr=12114;break;
							case "ECE": expr=12116;break;
							case "ECW": expr=12213;break;
							case "EE": expr=12115;break;
							case "EPE": expr=12212;break;
							case "GPT": expr=12411;break;
							case "GT": expr=124100;break;
							case "IN": expr=121190;break;
							case "ME": expr=121170;break;
							case "MMT": expr=122160;break;
							case "MSC": expr=123100;break;
							case "MSM": expr=123120;break;
							case "MSP": expr=123110;break;
							case "MT": expr=121180;break;
							case "PEM": expr=122140;break;
							case "PP": expr=121200;break;
							case "PS": expr=121210;break;
						
						
						
						}
					
						expr=expr+"";
						
						$('#graphhead').html("No.of Students vs. SG : "+$(this).html());
						
						var res= indx.search(expr);
						console.log("inside submit after search");
						
						res=res.map(function(x){
							return x.ref
						});						
						

						
						for(var x=0;x<10;x++){values[x]=0;}
						
						
						
						result.forEach(function(x){
						
							
							if(res.indexOf(x.enr)>-1)
								{
									if(x.sg>9)
							values[9]++;
							else if(x.sg>8)
							values[8]++;
							else if(x.sg>7)
							values[7]++;
							else if(x.sg>6)
							values[6]++;
							else if(x.sg>5)
							values[5]++;
							else if(x.sg>4)
							values[4]++;
							else if(x.sg>3)
							values[3]++;
							else if(x.sg>2)
							values[2]++;
							else if(x.sg>1)
							values[1]++;
							else if(x.sg>=0)
							values[0]++;
								
								
								
								
								
								
								}
						});
						

										

							send();						
										

					
					
					})
				
						
		send();
				
				
				})