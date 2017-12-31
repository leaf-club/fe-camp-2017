var btns = document.querySelector("div.keys"),
    content = document.querySelector(".screen"),
    count = 0,
    finished = false;
btns.onclick = function(e)
{
    var target = e.target;
    if(target.nodeName.toLowerCase() == 'span')
    {
        var btnType = target.innerText;
        if (content.innerText =='Math Error' && btnType !='AC')
        {
            return ;
        }
        else if (content.innerText != '' &&( finished || target.getAttribute('class') == 'operator'))
        {
             if(content.innerText != '' && finished )  content.innerText = '';  
             finished = false;
        }       
        switch (btnType)
        {
            case 'AC':
                content.innerText = '';
                count = 1;
                break;
            case 'CE':
                if (content.innerText == '' )
                    content.innerText = '';
                else content.innerText = content.innerText.slice(0,-1);
                count--;
                break;
            case '=':
                var text = content.innerText;
                if(!text) return ;
                else
                {
                    text =text.replace(/x/g,'*');
                    text =text.replace(/÷/g,'/');
                    var result;
                    try
                    {
                        result = eval(text);
                        content.innerText = result;
                        count = result.length;
                    }
                    catch(e) 
                    {
                        content.innerText = 'Math Error';
                    }
                }
                finished = true
                break;
            default:
                content.innerText += btnType;
        }
    }
}