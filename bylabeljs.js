function removeHtmlTag(strx,chop){if(strx.indexOf("<")!=-1){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}strx=s.join("")}chop=(chop<strx.length-1)?chop:strx.length-2;while(strx.charAt(chop-1)!=' '&&strx.indexOf(' ',chop)!=-1)chop++;strx=strx.substring(0,chop-1);return strx+'...'}function createSummaryAndThumb(pID){var div=document.getElementById(pID);var imgtag="";var img=div.getElementsByTagName("img");var summ=summary_noimg;if(img.length>=1){imgtag='<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';summ=summary_img}var summary=imgtag+'<div>'+removeHtmlTag(div.innerHTML,summ)+'</div>';div.innerHTML=summary}function tagpostthumbs(json){document.write('<ul class="taglabel">');for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href}if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}var thumburl;try{thumburl=entry.media$thumbnail.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d}else thumburl='http://2.bp.blogspot.com/-zif4lgUoNwY/VcmmKoOAbnI/AAAAAAAAK6U/whzhPe-8EDY/s1600/thumbn.png'}var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Jan";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Apr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Aug";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dec";document.write('<li class="clearfix">');if(tagpostthumbnails==true)document.write('<a href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" class="tagpost_thumb" src="'+thumburl+'"/></a>');document.write('<a href="'+posturl+'" title="'+posttitle+'">'+posttitle+'</a><br>');if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(tagpostsummary==true){if(postcontent.length<numchars){document.write('');document.write(postcontent);document.write('')}else{document.write('');postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...');document.write('')}}var towrite='';var flag=0;document.write('<br>');if(tagpostdate==true){towrite=towrite+cdday+'-'+monthnames[parseInt(cdmonth,10)]+'-'+cdyear;flag=1}if(tagpostcommentnum==true){if(flag==1){towrite=towrite+' | '}if(commenttext=='1 Comments')commenttext='1 Comment';if(commenttext=='0 Comments')commenttext='No Comments';commenttext=''+commenttext+'';towrite=towrite+commenttext;flag=1}if(tagpostmore==true){if(flag==1)towrite=towrite+' | ';towrite=towrite+'<a href="'+posturl+'" class="url" title="'+posttitle+'">More »</a>';flag=1}document.write(towrite);document.write('</li>');if(tagpostseparator==true)if(i!=(numposts-1))document.write('')}document.write('</ul>')}
