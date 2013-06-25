				$(document).ready(function(){
					
					var indx;
					var result;
					
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
					
					
						var send = function(results){
							$('#data-holder').html('');
							console.log("Inside Display");
							var q_res = '<table><tr ><th colspan="4">Department : '+ results[0].dept +'</th></tr><tr id="top"><th>Rank</th><th>Name</th><th>Enrollment No.</th><th>SG</th></tr>';
							for(var i=0;i<results.length;i++){
								var rank=i+1;
								q_res += '<tr><td>' + rank + '</td><td>' + results[i].name + '</td><td>' + 
								results[i].enr + '</td><td>'+results[i].sg+'</td></tr>';
							}
							
							q_res=q_res+'</table>';
							
							$('#data-holder').append(q_res);
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
						
						var res= indx.search(expr);
						console.log("inside submit after search");
						
						res=res.map(function(x){
							return x.ref
						});						
						
						console.log(res);
						
						res=result.filter(function(x){
						
							console.log("x.enr:"+x.enr);
							if(res.indexOf(x.enr)>-1)
								return true;
						});
						
						console.log("after-filter:");
						console.log(res);
										

							send(res);						
										

					
					
					})
				
				

				
				
				
				})