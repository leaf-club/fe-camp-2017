import requests
import re
from bs4 import BeautifulSoup
import traceback

def getHtmlText(url):
    try:
        r = requests.get(url)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return r.text
    except:
        print(1)
        return ''

def getstocklist(lst, stockurl):
    print(2)
    html = getHtmlText(stockurl)
    soup = BeautifulSoup(html, 'html.parser')
    a = soup.find_all('a')
    for i in a:
        try:
            href = i.attrs['href']
            lst.append(re.findall(r'[s][zh]\d{6}', href)[0])
        except:
            continue
        

def getstockinfo(lst, stockurl):
    for stock in lst[:2]:
        url = stockurl + stock + '.html'
        html = getHtmlText(url)
        try:
            if html == '':
                continue
            infoDict = {}
            soup = BeautifulSoup(html, 'html.parser')
            stockinfo = soup.find('div', attrs = {'class':'stock-bets'})
            print(stockinfo)

            name = stockinfo.find_all(attrs = {'class':'bets-name'})[0]
            infoDict.update({'StockName':name.text.split()[0]})

            keylist = stockinfo.find_all('dt')
            valuelist = stockinfo.find_all('dd')
            for i in range(len(keylist)):
                key = keylist[i].text
                val = valuelist[i].text
                infoDict[key] = val
                
            print(infoDict)
        except:
            traceback.print_exc()
            continue
        
   
    

def main():
    stock_list_url = 'http://quote.eastmoney.com/stocklist.html'
    stock_info_url = 'https://gupiao.baidu.com/stock/'
    slist = []
    getstocklist(slist, stock_list_url)
    getstockinfo(slist, stock_info_url)

main()
