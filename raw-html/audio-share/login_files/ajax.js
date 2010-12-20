function executeDB(sql){
		var processScriptUrl=baseurl+'ajax/myphpajax.php';
		cp.call(processScriptUrl,'executeDB',return_value,sql);
	
}
	
function return_value(result){
		dbreport=result.getElementsByTagName('dbreport').item(0).firstChild.data;
		if (dbreport=='1'){
			recordcount=result.getElementsByTagName('recordcount').item(0).firstChild.data;
			coloumcount=result.getElementsByTagName('coloumcount').item(0).firstChild.data;

				for( i=0;i<recordcount;i++){
					dbArray[i]=new Array(recordcount);
					for( ii=0;ii<coloumcount;ii++){
						dbArray[i][ii]=result.getElementsByTagName('dbvalue'+i+ii).item(0).firstChild.data;															
					}
				}	
		}


dbLoaded = false;
							
															
}
	function insertInToTable(tblId, varRow, varCell, varData){
		try{
			var x=document.getElementById(tblId).rows[varRow].cells;
			x[varCell].innerHTML=varData;
			return false;
		}
		catch(Err){
			return false;
		}
	}

	function txtBoxValidation(myId,defaultColor,errColor){
		try{	
			me=document.getElementById(myId);

			if(me.value==""){	
				me.style.background=errColor;
				me.setFocus;
				return false;
			}
			else{
				me.style.background=defaultColor;
				me.setFocus;
				return true;
			}
		}
		catch(Err){
			return 'Err';
		}
	}

function hideMe(myId){
	document.getElementById(myId).style.display="none";
	
}

function showMe(myId){
	document.getElementById(myId).style.display="block";
	
}

function directMyvalueto(myValue,thatId){
	document.getElementById(thatId).value=myValue;
}
// Audio Comment Begin
function fxAudioComment(hidethisdiv,commentarea,userid,audioid)
{
	commentdetails=document.getElementById(commentarea).value;
	if(commentdetails=='')
	{
		showMe('addcommentError');
	}
	else
	{
		hideMe(hidethisdiv);
		hideMe('addcommentError');
		cp.call(baseurl+'/ajax/myajaxphp.php','audio_comments',audio_comment_response,commentdetails,userid,audioid);
	}	
}

function audio_comment_response(acomresult)
{
	if(acomresult.getElementsByTagName('acommsg').item(0).firstChild.data==0)
	{
		showMe('acommentsfailure');
		showMe('addcommentdiv');
	}
	else
	{
		showMe('acommentssuccess');
	}
}
// Audio Comment End

// Audio Rating Begin
function fxAudioRater(rating,audioid)
{
	cp.call(baseurl+'ajax/myajaxphp.php','rate_audio',return_audio_rating,rating,audioid);
}

function return_audio_rating(arrestults)
{
	var astatus = arrestults.getElementsByTagName('astatus').item(0).firstChild.data;				
	if(astatus=='0')
	{
		showMe('ratingExists');
	}
	else if(astatus=='1')
	{
		showMe('ratingSuccess');
	}
	else
	{
		showMe('ratingLogin');
	}
				
	return false;
}
// Audio Rating End 

// Favorite Audio Begin
function fxFavAudio(hidethisdiv,fuserid,faudioid)
{
	hideMe(hidethisdiv);	
	cp.call(baseurl+'/ajax/myajaxphp.php','fav_audio',fav_audio_response,fuserid,faudioid);		
}

function fav_audio_response(favaudresult)
{
	var favaudresp=favaudresult.getElementsByTagName('favaudmessage').item(0).firstChild.data;
	if(favaudresp=='0')
	{
		showMe('addtofavFailure');
	}
	else
	{
		showMe('addtofavSuccess');
	}
}
// Favorite Audio End

// Share Audio Begin
function fxShareAudio(hidethisdiv,asharemessage,ashareto,userid,audioid)
{
	audiosharemessage=document.getElementById(asharemessage).value;
	audioshareto=document.getElementById(ashareto).value;
	if(audioshareto=='')
	{
		showMe('ashareemptyError');
	}
	else
	{
		hideMe(hidethisdiv);
		hideMe('ashareemptyError');
		cp.call(baseurl+'/ajax/myajaxphp.php','audio_share',audio_share_response,audiosharemessage,audioshareto,userid,audioid);
	}	
}

function audio_share_response(ashareresult)
{
	if(ashareresult.getElementsByTagName('ashrmsg').item(0).firstChild.data==0)
	{
		showMe('asharefailure');
		showMe('shareaudiodiv');
	}
	else if(ashareresult.getElementsByTagName('ashrmsg').item(0).firstChild.data==2)
	{
		showMe('asharehalffailure');
		showMe('shareaudiodiv');
	}
	else
	{
		showMe('asharesuccess');
	}
}
// Share Audio End

// Report Audio Begin
function fxReportAudio(hidethisdiv,areportremarks,areportreason,userid,audioid)
{
	audioreportremarks=document.getElementById(areportremarks).value;
	audioreportreason=document.getElementById(areportreason).value;
	if(audioreportreason=='')
	{
		showMe('areportreasonError');
	}
	else
	{
		hideMe(hidethisdiv);
		hideMe('areportreasonError');
		cp.call(baseurl+'/ajax/myajaxphp.php','audio_report',audio_report_response,audioreportremarks,audioreportreason,userid,audioid);
	}	
}

function audio_report_response(areportresult)
{
	if(areportresult.getElementsByTagName('arepmsg').item(0).firstChild.data==0)
	{
		showMe('areportfailure');
		showMe('reportaudiodiv');
	}
	else
	{
		showMe('areportsuccess');
	}
}
// Report Audio End

function viewaudioshow(showthis){
	if(document.getElementById('showShareAudio'))
	{
	document.getElementById('showShareAudio').style.display="none";
	}
	if(document.getElementById('showReportAudio'))
	{
	document.getElementById('showReportAudio').style.display="none";
	}
	if(document.getElementById('showAddToChannel'))
	{
	document.getElementById('showAddToChannel').style.display="none";
	}
	if(document.getElementById('showShareAudioNV'))
	{
	document.getElementById('showShareAudioNV').style.display="none";
	}
	if(document.getElementById('showReportAudioNV'))
	{
	document.getElementById('showReportAudioNV').style.display="none";
	}
	if(document.getElementById('showAddToChannelNV'))
	{
	document.getElementById('showAddToChannelNV').style.display="none";
	}
	if(document.getElementById('showAllThumbs'))
	{
	document.getElementById('showAllThumbs').style.display="none";
	}
	document.getElementById(showthis).style.display="block";
}

// Check Username Begin
function fxCheckUsername(hidethisdiv,checkusername)
{
	cusername=document.getElementById(checkusername).value;
	if(cusername=='')
	{
		hideMe('isavailable');
		hideMe('isnotavailable');
		showMe('usernameisempty');
	}
	else
	{
		hideMe('usernameisempty');
		hideMe(hidethisdiv);
		cp.call(baseurl+'/ajax/myajaxphp.php','check_username',check_username_response,cusername);
	}	
}

function check_username_response(cunameresult)
{
	if(cunameresult.getElementsByTagName('cunamemsg').item(0).firstChild.data==0)
	{
		hideMe('isavailable');
		showMe('isnotavailable');
		showMe('checkagain');
	}
	else if(cunameresult.getElementsByTagName('cunamemsg').item(0).firstChild.data==2)
	{
		hideMe('isavailable');
		hideMe('isnotavailable');
		showMe('usernameisempty');
		showMe('checkagain');
	}
	else
	{
		hideMe('isnotavailable');
		showMe('isavailable');
		showMe('checkagain');
	}
}
// Check Username End

// Profile Comment Begin
function fxProfileComment(hidethisdiv,commentarea,userid,profileid)
{
	commentdetails=document.getElementById(commentarea).value;
	if(commentdetails=='')
	{
		showMe('addcommentError');
	}
	else
	{
		hideMe(hidethisdiv);
		hideMe('addcommentError');
		cp.call(baseurl+'/ajax/myajaxphp.php','profile_comments',profile_comment_response,commentdetails,userid,profileid);
	}	
}

function profile_comment_response(profcomresult)
{
	if(profcomresult.getElementsByTagName('pcommsg').item(0).firstChild.data==0)
	{
		showMe('vcommentsfailure');
		showMe('addcommentdiv');
	}
	else
	{
		showMe('vcommentssuccess');
	}
}
// Profile Comment End

// Send Message Begin
function fxSendMessage(hidethisdiv,sendmessagesubject,sendmessagetext,userid,profileid)
{
	sendmessagesubjectz=document.getElementById(sendmessagesubject).value;
	sendmessagetextz=document.getElementById(sendmessagetext).value;
	if(userid=='')
	{
		showMe('sendmessagefailure');
	}
	else if(profileid=='')
	{
		showMe('sendmessagefailure');
	}
	else if(sendmessagesubjectz=='')
	{
		hideMe('mtextfailure');
		showMe('msubjectfailure');
	}
	else if(sendmessagetextz=='')
	{
		hideMe('msubjectfailure');
		showMe('mtextfailure');
	}
	else
	{
		hideMe(hidethisdiv);
		hideMe('sendmessagefailure');
		hideMe('msubjectfailure');
		hideMe('mtextfailure');
		cp.call(baseurl+'/ajax/myajaxphp.php','send_message',send_message_response,sendmessagesubjectz,sendmessagetextz,userid,profileid);
	}	
}

function send_message_response(sendmessageresult)
{
	if(sendmessageresult.getElementsByTagName('sendmessagetomsg').item(0).firstChild.data==0)
	{
		hideMe('msubjectfailure');
		hideMe('mtextfailure');
		showMe('sendmessagefailure');
		showMe('sendmessagediv');
	}
	else
	{
		hideMe('msubjectfailure');
		hideMe('mtextfailure');
		hideMe('sendmessagefailure');
		showMe('sendmessagesuccess');
	}
}
// Send Message End

// Add To Friends Begin
function fxAddToFriends(hidethisdiv,addtofriendsmessage,userid,profileid)
{
	addtofriendzmessage=document.getElementById(addtofriendsmessage).value;
	if(userid=='')
	{
		showMe('addtofriendsfailure');
	}
	else if(profileid=='')
	{
		showMe('addtofriendsfailure');
	}
	else
	{
		hideMe(hidethisdiv);
		hideMe('addtofriendsfailure');
		cp.call(baseurl+'/ajax/myajaxphp.php','add_to_friends',add_to_friends_response,addtofriendzmessage,userid,profileid);
	}	
}

function add_to_friends_response(add_to_friendsresult)
{
	if(add_to_friendsresult.getElementsByTagName('addtofriendsmsg').item(0).firstChild.data==0)
	{
		hideMe('addtofriendsexists');
		showMe('addtofriendsfailure');
		showMe('addtofriendsdiv');
	}
	else if(add_to_friendsresult.getElementsByTagName('addtofriendsmsg').item(0).firstChild.data==2)
	{
		hideMe('addtofriendsfailure');
		showMe('addtofriendsexists');
		showMe('addtofriendsdiv');
	}
	else
	{
		hideMe('addtofriendsfailure');
		hideMe('addtofriendsexists');
		showMe('addtofriendssuccess');
	}
}
// Add To Friends End

// Subscribe To Member Begin
function fxSubscribe(hidethisdiv,subscribee,subscriber)
{
	hideMe(hidethisdiv);	
	cp.call(baseurl+'/ajax/myajaxphp.php','member_subscribe',subscribe_response,subscribee,subscriber);		
}

function subscribe_response(subresult)
{
	var subresp=subresult.getElementsByTagName('submessage').item(0).firstChild.data;
	if(subresp=='0')
	{
		showMe('subscribeFailure');
	}
	else
	{
		showMe('subscribeSuccess');
	}
}
// Subscribe To Member End

function showhidelists(a,b){
	showMe(a);
	hideMe(b);	
}