# ShellHacks Program
# Ellie Lane 
# Project Name: localhand
# Summary of .py: Webscrape file that takes yelp urls from a text file
# and gathers different general elements with information in text format
# outputs information into a JSON file 

from lxml import html  
import json
import ssl
import argparse
import itertools
# import requests
import bs4 as bs
from urllib.request import urlopen, Request

# Bypass
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Small function to check for amount of digits in a string to find phone number 
def checkNumbers(input):
    sum = 0
    for i in range(10):
        sum += input.count(str(i))
    return sum

# Takes input file of yelp linkes and stores in a list
url_file = open('sample.txt','r')
urlList = []
for url in url_file.readlines():
   urlList.append(str(url))
url_file.close()

# Counter for iterations of loop
total = 0
# Main for loop to scrape information
for urlSample in urlList:
    # url = "https://www.yelp.com/biz/lazy-moon-pizza-orlando-4?osq=lazy+moon"
    url = urlSample
    print("Website URL: " + url)
    req = Request(url, headers={'User-Agent':'Mozilla/5.0'})
    soup = urlopen(req).read()
    sauce = bs.BeautifulSoup(soup, "lxml")
    business_details = {}      # Stores JSON elements
    total += 1                 # Increase iteration
    print("Iteration: " + str(total))

    # Finding Business name
    title = sauce.find('h1',class_="lemon--h1__373c0__2ZHSL heading--h1__373c0__dvYgw undefined heading--inline__373c0__10ozy")
    print("Business Name: " + title.text)
    business_details["name"] = str(title.text)

    # Finding address
    address = sauce.find('address',class_="lemon--address__373c0__2sPac")
    addressText = ""
    for i in address:
        addressText += i.text
        addressText += " "
        business_details["address"] = str(addressText)
    print("Full address: " + addressText)

    # Finding area of phone number location
    phone = sauce.find_all('p', class_= "lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa-")
    # Finding phone number
    for example in phone:
        if (len(example.contents) > 0):
            if (example.attrs == {'class': ['lemon--p__373c0__3Qnnj', 'text__373c0__2Kxyz', 'text-color--normal__373c0__3xep9', 'text-align--left__373c0__2XGa-']}):
                if (checkNumbers(example.text) > 8):
                    print(example.text)
                    business_details["phone"] = str(example.text)

    # Finding Days of the week and the times for them
    hours = sauce.find_all('p', class_="lemon--p__373c0__3Qnnj text__373c0__2Kxyz text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa- text-weight--bold__373c0__1elNz")
    hoursTime = sauce.find_all('p', class_="lemon--p__373c0__3Qnnj text__373c0__2Kxyz no-wrap__373c0__2vNX7 text-color--normal__373c0__3xep9 text-align--left__373c0__2XGa-")
    days = ""
    hoursWeek= ""
    for e in hours:
        if (len(e.text)>3):
            continue
        print(e.text)
        days += e.text
        days += "\n"
        business_details["week"] = str(days)
    for d in hoursTime:
        print(d.text)
        hoursWeek += d.text
        hoursWeek += "\n"
        business_details["hours"] = str(hoursWeek)

    # Find website address     
    website = sauce.find_all('a', class_="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--blue-dark__373c0__85-Nu link-size--inherit__373c0__1VFlE")
    com = ".com"
    for more in website:
        if com in (more.text):
            print(more.text)
            business_details["website"] = str(more.text)
    # Finds one image URL to be used almost as profile 
    images = sauce.find('a', class_="lemon--a__373c0__IEZFH link__373c0__1G70M link-color--blue-dark__373c0__85-Nu link-size--default__373c0__7tls6")
    # Specifically find the source of the image 
    for s in images:
        print("Image URL: " + s.attrs['src'])
        business_details["image"] = str(s.attrs['src'])
 
    print ("----------------------------------------------------------------------------------------------")


    # elements = sauce.find_all('div', class_="Phone Number")
    # for script in sauce.findAll ('script', attrs = {'type': 'application/ld+json'}):
    #     json_data = json.loads(script.text)
    #     business_detail["phone number"] = json_data['telephone']
    #     break

    with open('business_details.json', 'a', encoding="utf-8") as outfile:
        json.dump(business_details, outfile, indent=4, sort_keys=True)

print("Let's Goooooo!!!!")
