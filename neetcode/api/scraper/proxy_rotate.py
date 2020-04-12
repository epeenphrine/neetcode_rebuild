import json 
import os
import time
import urllib
import bs4 as bs
import random
from .proxyscrape import proxyscrape

def proxy_rotate(url):
    def json_load():
        with open("proxydictlist.json") as f:
            print('loading json')
            time.sleep(1)
            proxies_list = json.load(f)
            return proxies_list

    if os.path.exists("proxydictlist.json"):
        proxies_list = json_load()

    else:
        proxyscrape()
        proxies_list = json_load()

    if proxies_list and len(proxies_list) >= 50: ## check if proxies_list is empty or not
        for i in range(0, len(proxies_list)):
            start_time = time.time()
            try:
                pick = random.choice(proxies_list)

                ## configuring urllib for use with proxies
                proxy_support = urllib.request.ProxyHandler(pick)
                opener = urllib.request.build_opener(proxy_support)
                urllib.request.install_opener(opener)

                ## requests
                req = urllib.request.Request(url, headers={'User-Agent' : "Magic Browser"})
                sauce = urllib.request.urlopen(req, timeout=2).read()
                soup = bs.BeautifulSoup(sauce, 'lxml')
                end_time = time.time() - start_time
                print(f'soup retrieved at {end_time}')
                if end_time >= 5.00:
                    print(f'{pick} took too long\nremoving {pick}')
                    proxies_list.remove(pick)
                    with open('proxydictlist.json', 'w') as f:
                        json.dump(proxies_list, f)
                return soup
            except:
                ## proxies that do not work are removed from the list
                print(f"{pick} did not work")
                proxies_list.remove(pick)
                print(f"{pick} removed")
                print(len(proxies_list))
                with open('proxydictlist.json', 'w') as f:
                    json.dump(proxies_list, f)

    else: ## if proxies_list is empty, we get our proxies without configuring urllib for using proxies
        proxyscrape()
        return proxy_rotate(url)